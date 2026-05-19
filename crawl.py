import json
import logging
import re
import time
from pathlib import Path

import requests

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

API = "https://thwiki.cc/api.php"
OUTPUT_DIR = Path("data")
OUTPUT_DIR.mkdir(exist_ok=True)

# File to store progress for resumption
PROGRESS_FILE = OUTPUT_DIR / "crawl_progress.json"

# Namespace 0 (main articles) can get very large; optionally shard/rotate the output.
# - Shard 0 stays as `data/ns_0.jsonl` (backwards compatible).
# - Subsequent shards are written to `data/ns_0_partNNN.jsonl` (e.g. ns_0_part001.jsonl).
# Set to None to disable sharding for ns=0.
NS0_MAX_SHARD_BYTES = 200 * 1024 * 1024  # 200 MiB

# Limit how many namespaces to crawl (set to None for no limit).
# Useful while you're still validating the crawler.
MAX_NAMESPACES_TO_CRAWL = 10

# Limit pages per namespace (set to None for no limit)
MAX_PAGES_PER_NAMESPACE = None

S = requests.Session()
S.headers.update({
    "User-Agent": "touhou-qa/1.0"
})

class JsonlWriter:
    """Append-only JSONL writer."""

    def __init__(self, path: Path):
        self.path = path
        self._fp = None

    def __enter__(self):
        # Use newline="\n" to avoid Windows CRLF translation (keeps output consistent).
        self._fp = open(self.path, "a", encoding="utf-8", newline="\n")
        return self

    def __exit__(self, exc_type, exc, tb):
        if self._fp:
            self._fp.close()
            self._fp = None

    def write(self, record: dict):
        self._fp.write(json.dumps(record, ensure_ascii=False) + "\n")


class JsonlShardWriter:
    """JSONL writer that rotates to new shard files once a max size is reached."""

    def __init__(self, base_path: Path, max_bytes: int, part_digits: int = 3):
        self.base_path = base_path
        self.max_bytes = max_bytes
        self.part_digits = part_digits

        self._fp = None
        self._current_bytes = 0
        self._current_idx = 0  # 0 => base_path, 1+ => part files
        self._current_path = None

        # Example: ns_0_part001.jsonl
        stem = re.escape(self.base_path.stem)
        suffix = re.escape(self.base_path.suffix)
        self._part_re = re.compile(rf"^{stem}_part(\d+){suffix}$")

    def __enter__(self):
        self._open_initial()
        return self

    def __exit__(self, exc_type, exc, tb):
        self.close()

    def close(self):
        if self._fp:
            self._fp.close()
            self._fp = None

    def _path_for_idx(self, idx: int) -> Path:
        if idx <= 0:
            return self.base_path
        return self.base_path.with_name(
            f"{self.base_path.stem}_part{idx:0{self.part_digits}d}{self.base_path.suffix}"
        )

    def _find_latest_idx(self) -> int:
        latest = 0
        parent = self.base_path.parent
        try:
            for p in parent.iterdir():
                m = self._part_re.match(p.name)
                if not m:
                    continue
                idx = int(m.group(1))
                if idx > latest:
                    latest = idx
        except FileNotFoundError:
            # Parent directory missing shouldn't happen, but be defensive.
            pass
        return latest

    def _open_path(self, idx: int):
        path = self._path_for_idx(idx)
        # Use newline="\n" to avoid Windows CRLF translation.
        self._fp = open(path, "a", encoding="utf-8", newline="\n")
        self._current_path = path
        self._current_idx = idx
        try:
            self._current_bytes = path.stat().st_size
        except FileNotFoundError:
            self._current_bytes = 0

    def _open_initial(self):
        idx = self._find_latest_idx()
        path = self._path_for_idx(idx)
        if path.exists() and self.max_bytes is not None and path.stat().st_size >= self.max_bytes:
            idx += 1
        self._open_path(idx)
        if idx > 0:
            logger.info(f"Writing ns=0 output to shard: {self._current_path.name}")

    def _rotate(self):
        self.close()
        self._open_path(self._current_idx + 1)
        logger.info(f"Rotated ns=0 output shard: {self._current_path.name}")

    def write(self, record: dict):
        line = json.dumps(record, ensure_ascii=False) + "\n"
        # Track bytes via UTF-8 encoding; ensures rotation works reliably across platforms.
        line_bytes = len(line.encode("utf-8"))
        if self.max_bytes is not None and self._current_bytes + line_bytes > self.max_bytes:
            self._rotate()
        self._fp.write(line)
        self._current_bytes += line_bytes


def mw_get(params, sleep_s=0.5, max_retries=6):
    """Make a GET request to MediaWiki API with exponential backoff."""
    backoff = 1.0
    for attempt in range(max_retries):
        try:
            r = S.get(API, params=params, timeout=60)
            if r.status_code in (429, 503):
                logger.warning(f"Rate limited (attempt {attempt+1}), backing off {backoff}s...")
                time.sleep(backoff)
                backoff *= 2
                continue
            r.raise_for_status()
            time.sleep(sleep_s)
            return r.json()
        except requests.exceptions.RequestException as e:
            logger.error(f"Request error (attempt {attempt+1}): {e}")
            if attempt < max_retries - 1:
                time.sleep(backoff)
                backoff *= 2
                continue
            raise
    raise RuntimeError(f"Failed after {max_retries} retries: {params}")


def get_namespaces():
    """Fetch all namespaces from the wiki."""
    params = {
        "action": "query",
        "format": "json",
        "meta": "siteinfo",
        "siprop": "namespaces|namespacealiases",
    }
    data = mw_get(params)
    namespaces = data.get("query", {}).get("namespaces", {})
    return {int(k): v for k, v in namespaces.items()}


def iter_allpages(namespace=0, start_from=None):
    """Iterate through all page titles in a namespace."""
    cont = {}
    # NOTE: `apcontinue` is a continuation TOKEN returned by the API, not a title.
    # To resume from a title we should use `apfrom` (inclusive) and skip the first
    # page if it matches the resume title.
    resume_title = None
    if start_from:
        cont = {"apfrom": start_from}
        resume_title = start_from
    
    while True:
        params = {
            "action": "query",
            "format": "json",
            "list": "allpages",
            "apnamespace": str(namespace),
            "aplimit": "max",
        }
        params.update(cont)
        j = mw_get(params)
        
        pages = j.get("query", {}).get("allpages", [])
        for p in pages:
            # Avoid re-yielding the first page when resuming with `apfrom`.
            if resume_title is not None and p.get("title") == resume_title:
                resume_title = None
                continue
            yield p["title"], p["pageid"]
        
        cont = j.get("continue")
        if not cont:
            break


def fetch_page_content_batch(pageids):
    """Fetch page content for a batch of page IDs."""
    params = {
        "action": "query",
        "format": "json",
        "prop": "revisions|info|categories",
        "rvprop": "ids|timestamp|content|contentmodel",
        "rvslots": "main",
        "pageids": "|".join(str(pid) for pid in pageids),
        "redirects": "1",
        "cllimit": "max",
    }
    return mw_get(params)


def fetch_parsed_content(pageid):
    """Fetch parsed (HTML rendered) content for a single page."""
    params = {
        "action": "parse",
        "format": "json",
        "pageid": str(pageid),
        "prop": "text|categories|sections|displaytitle",
        "disablelimitreport": "1",
    }
    try:
        return mw_get(params)
    except Exception as e:
        logger.warning(f"Failed to parse page {pageid}: {e}")
        return None


def extract_plain_text(html):
    """Extract plain text from HTML content."""
    try:
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        
        # Remove script and style elements
        for element in soup(["script", "style", "table"]):
            element.decompose()
        
        # Get text
        text = soup.get_text(separator="\n", strip=True)
        
        # Clean up multiple newlines
        lines = [line.strip() for line in text.split("\n") if line.strip()]
        return "\n".join(lines)
    except ImportError:
        # Fallback: basic regex-based cleaning
        import re
        text = re.sub(r"<[^>]+>", " ", html)
        text = re.sub(r"\s+", " ", text)
        return text.strip()


def process_page_data(page_data, parsed_data=None):
    """Process raw page data into a clean record."""
    revisions = page_data.get("revisions", [])
    if not revisions:
        return None
    
    rev = revisions[0]
    slots = rev.get("slots", {})
    main_slot = slots.get("main", {})
    # MediaWiki API may return the text under:
    # - formatversion=1: slots.main["*"]
    # - formatversion=2: slots.main["content"]
    wikitext = main_slot.get("content")
    if wikitext is None:
        wikitext = main_slot.get("*", "")
    
    # Skip empty pages
    if not wikitext or len(wikitext.strip()) < 10:
        return None
    
    # Skip redirect pages
    if wikitext.strip().lower().startswith("#redirect"):
        return None
    
    record = {
        "pageid": page_data.get("pageid"),
        "title": page_data.get("title"),
        "ns": page_data.get("ns"),
        "revid": rev.get("revid"),
        "timestamp": rev.get("timestamp"),
        "contentmodel": main_slot.get("contentmodel"),
        "wikitext": wikitext,
        "categories": [c["title"] for c in page_data.get("categories", [])],
    }
    
    # Add parsed content if available
    if parsed_data and "parse" in parsed_data:
        parse = parsed_data["parse"]
        html = parse.get("text", {}).get("*", "")
        if html:
            record["plain_text"] = extract_plain_text(html)
            record["sections"] = [s["line"] for s in parse.get("sections", [])]
            record["displaytitle"] = parse.get("displaytitle", "")
    
    return record


def load_progress():
    """Load crawl progress from file."""
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"completed_namespaces": [], "current_ns": None, "last_title": None, "total_pages": 0}


def save_progress(progress):
    """Save crawl progress to file."""
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(progress, f, ensure_ascii=False, indent=2)


def crawl_namespace(ns_id, ns_info, output_file, progress, include_parsed=True, max_pages=None):
    """Crawl all pages in a namespace."""
    ns_name = ns_info.get("canonical", ns_info.get("*", f"NS{ns_id}"))
    logger.info("=" * 60)
    logger.info(f"Crawling namespace {ns_id}: {ns_name}")
    if max_pages:
        logger.info(f"Limited to {max_pages} pages")
    logger.info("=" * 60)
    
    start_from = None
    if progress.get("current_ns") == ns_id and progress.get("last_title"):
        start_from = progress["last_title"]
        logger.info(f"Resuming from: {start_from}")
    
    batch_pageids = []
    batch_titles = []
    page_count = 0
    total_fetched = 0
    reached_limit = False
    
    writer_cls = JsonlWriter
    writer_kwargs = {"path": output_file}
    if ns_id == 0 and NS0_MAX_SHARD_BYTES is not None:
        writer_cls = JsonlShardWriter
        writer_kwargs = {"base_path": output_file, "max_bytes": NS0_MAX_SHARD_BYTES}

    with writer_cls(**writer_kwargs) as writer:
        for title, pageid in iter_allpages(namespace=ns_id, start_from=start_from):
            batch_pageids.append(pageid)
            batch_titles.append(title)
            total_fetched += 1
            
            # Check if we've reached the page limit
            if max_pages and total_fetched >= max_pages:
                reached_limit = True
            
            if len(batch_pageids) >= 50 or reached_limit:
                # Fetch wikitext content
                data = fetch_page_content_batch(batch_pageids)
                pages = data.get("query", {}).get("pages", {})
                
                for pid, page_data in pages.items():
                    if int(pid) < 0:  # Missing page
                        continue
                    
                    # Optionally fetch parsed content for main namespace
                    parsed_data = None
                    if include_parsed and ns_id == 0:
                        parsed_data = fetch_parsed_content(page_data["pageid"])
                    
                    record = process_page_data(page_data, parsed_data)
                    if record:
                        writer.write(record)
                        page_count += 1
                
                # Update progress
                progress["current_ns"] = ns_id
                progress["last_title"] = batch_titles[-1]
                progress["total_pages"] += len(batch_pageids)
                save_progress(progress)

                if max_pages:
                    pct = (total_fetched / max_pages) * 100 if max_pages else 0
                    logger.info(
                        f"Progress: fetched {total_fetched}/{max_pages} ({pct:.1f}%), "
                        f"saved {page_count}, last: {batch_titles[-1][:50]}..."
                    )
                else:
                    logger.info(
                        f"Progress: fetched {total_fetched}, saved {page_count}, "
                        f"last: {batch_titles[-1][:50]}..."
                    )
                
                batch_pageids = []
                batch_titles = []
                
                if reached_limit:
                    logger.info(f"Reached page limit ({max_pages}), stopping namespace crawl")
                    break
        
        # Process remaining batch
        if batch_pageids:
            data = fetch_page_content_batch(batch_pageids)
            pages = data.get("query", {}).get("pages", {})
            
            for pid, page_data in pages.items():
                if int(pid) < 0:
                    continue
                
                parsed_data = None
                if include_parsed and ns_id == 0:
                    parsed_data = fetch_parsed_content(page_data["pageid"])
                
                record = process_page_data(page_data, parsed_data)
                if record:
                    writer.write(record)
                    page_count += 1
            
            progress["total_pages"] += len(batch_pageids)
    
    logger.info(f"Namespace {ns_id} complete: {page_count} pages saved")

    # If we hit the limit, keep the resume cursor so the next run can continue.
    # If we fully finished the namespace, mark it completed and clear the cursor.
    if reached_limit:
        progress["current_ns"] = ns_id
        progress["last_title"] = batch_titles[-1] if batch_titles else progress.get("last_title")
    else:
        progress["completed_namespaces"].append(ns_id)
        progress["current_ns"] = None
        progress["last_title"] = None

    save_progress(progress)
    
    return page_count


def main():
    logger.info("THWiki Crawler - Touhou Wiki Content Extraction")
    logger.info("=" * 60)
    
    if MAX_PAGES_PER_NAMESPACE:
        logger.info(f"TEST MODE: Limited to {MAX_PAGES_PER_NAMESPACE} pages per namespace")
    
    # Get namespace info
    logger.info("Fetching namespace information...")
    namespaces = get_namespaces()
    
    logger.info("Available namespaces:")
    for ns_id, ns_info in sorted(namespaces.items()):
        name = ns_info.get("canonical", ns_info.get("*", ""))
        logger.info(f"  {ns_id:4d}: {name}")
    
    # Namespaces to crawl (meaningful content)
    # 0 = Main articles (most important)
    # 4 = Project namespace
    # 6 = File (descriptions only, not the actual files)
    # 10 = Template (could be useful for understanding structure)
    # 12 = Help
    # 14 = Category
    # Custom namespaces often start at 100+
    TARGET_NAMESPACES = [0, 4, 12, 14]
    
    # Check for custom namespaces that might have content
    for ns_id in namespaces:
        if ns_id >= 100 and ns_id not in TARGET_NAMESPACES:
            ns_info = namespaces[ns_id]
            # Skip talk namespaces (odd numbers are typically talk)
            if ns_id % 2 == 0:
                TARGET_NAMESPACES.append(ns_id)
    
    TARGET_NAMESPACES = sorted(set(TARGET_NAMESPACES))
    if MAX_NAMESPACES_TO_CRAWL:
        TARGET_NAMESPACES = TARGET_NAMESPACES[:MAX_NAMESPACES_TO_CRAWL]
    logger.info(f"Target namespaces: {TARGET_NAMESPACES}")

    if MAX_PAGES_PER_NAMESPACE:
        logger.info(
            f"Planned crawl upper bound: {len(TARGET_NAMESPACES)} namespaces × "
            f"{MAX_PAGES_PER_NAMESPACE} pages/ns = {len(TARGET_NAMESPACES) * MAX_PAGES_PER_NAMESPACE} pages"
        )
    else:
        logger.info(f"Planned crawl: {len(TARGET_NAMESPACES)} namespaces, unlimited pages/ns")
    
    # Load progress
    progress = load_progress()
    logger.info(f"Total pages crawled so far: {progress['total_pages']}")
    start_total_fetched = progress.get("total_pages", 0)
    
    # Crawl each namespace
    total_saved = 0
    for idx, ns_id in enumerate(TARGET_NAMESPACES, start=1):
        logger.info(f"Namespace {idx}/{len(TARGET_NAMESPACES)}: {ns_id}")
        if ns_id in progress["completed_namespaces"]:
            logger.info(f"Skipping namespace {ns_id} (already completed)")
            continue
        
        if ns_id not in namespaces:
            logger.warning(f"Skipping namespace {ns_id} (not found)")
            continue
        
        ns_info = namespaces[ns_id]
        output_file = OUTPUT_DIR / f"ns_{ns_id}.jsonl"
        
        # Include parsed content only for main namespace (ns=0)
        include_parsed = (ns_id == 0)
        
        count = crawl_namespace(
            ns_id, ns_info, output_file, progress, 
            include_parsed=include_parsed,
            max_pages=MAX_PAGES_PER_NAMESPACE
        )
        total_saved += count

        fetched_this_run = progress.get("total_pages", 0) - start_total_fetched
        if MAX_PAGES_PER_NAMESPACE:
            planned_upper = len(TARGET_NAMESPACES) * MAX_PAGES_PER_NAMESPACE
            pct = (fetched_this_run / planned_upper) * 100 if planned_upper else 0
            logger.info(
                f"Overall progress (this run): fetched {fetched_this_run}/{planned_upper} ({pct:.1f}%), "
                f"saved {total_saved}"
            )
        else:
            logger.info(
                f"Overall progress (this run): fetched {fetched_this_run}, saved {total_saved}"
            )
    
    logger.info("=" * 60)
    logger.info(f"Crawl complete! Total pages: {progress['total_pages']}")
    logger.info(f"Output files in: {OUTPUT_DIR.absolute()}")
    logger.info("=" * 60)


if __name__ == "__main__":
    main()
