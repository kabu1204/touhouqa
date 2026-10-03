from __future__ import annotations

import argparse
import threading
import json
import logging
import os
from concurrent.futures import FIRST_COMPLETED, ThreadPoolExecutor, wait
from typing import Dict, List, Optional

try:
    from dotenv import find_dotenv, load_dotenv
except Exception:  # pragma: no cover
    find_dotenv = None
    load_dotenv = None

from ..common.io_utils import iter_input_files, iter_jsonl_skip_bad, read_jsonl
from ..common.logging_utils import setup_logging
from ..common.serialization import fact_candidate_to_dict, qa_item_to_dict
from ..common.text_utils import hash_text
from ..config import CATEGORY_BLACKLIST, CATEGORY_SUBSTRING_BLACKLIST, EXCLUDE_EMPTY_CATEGORIES
from .extractor import TouhouQAExtractorV0
from .llm import OpenAICompatibleChatClient, generate_qa_from_plain_text


logger = logging.getLogger(__name__)

def _normalize_categories(rec: Dict) -> List[str]:
    """
    Normalize record categories to a stable `List[str]`.
    Crawled records typically store categories as a list like ["分类:..."].
    """
    cats = rec.get("categories")
    if not cats:
        return []
    if isinstance(cats, str):
        cats_list = [cats]
    elif isinstance(cats, list):
        cats_list = cats
    else:
        cats_list = [cats]
    out: List[str] = []
    for c in cats_list:
        if c is None:
            continue
        s = str(c).strip()
        if not s:
            continue
        out.append(s)
    return out

def _match_excluded_category(
    rec: Dict,
    *,
    exclude_exact: set[str],
    exclude_substrings: List[str],
) -> Optional[str]:
    """
    Return the first matching category string if the record should be skipped by category filters.
    Otherwise return None.
    """
    cats = rec.get("categories")
    if not cats:
        return None if not EXCLUDE_EMPTY_CATEGORIES else ["EMPTY_CATEGORY_EXCLUDED"]

    if isinstance(cats, str):
        cats_list = [cats]
    elif isinstance(cats, list):
        cats_list = cats
    else:
        cats_list = [str(cats)]

    logger.debug(f"substring blacklist: {exclude_substrings}")
    for c in cats_list:
        if c is None:
            continue
        cs = str(c)
        if cs in exclude_exact:
            return cs
        for sub in exclude_substrings:
            if sub and sub in cs:
                return cs
    return None

def _load_extract_progress(path: str) -> Dict:
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as pf:
                prog = json.load(pf)
            return prog if isinstance(prog, dict) else {}
        except Exception as e:
            logger.warning("Failed to read progress file %s; will recreate (%s).", path, e)
            return {}
    return {}

def _save_extract_progress(path: str, prog: Dict) -> None:
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "w", encoding="utf-8") as pf:
        json.dump(prog, pf, ensure_ascii=False, indent=2)

def _progress_path_for_file(fp: str) -> str:
    """
    Store paths relative to current working directory when possible, normalized to '/'.
    This keeps `data/extract_progress.json` portable across machines.
    """
    try:
        cwd = os.path.abspath(os.getcwd())
        afp = os.path.abspath(fp)
        if os.path.commonpath([cwd, afp]) == cwd:
            rel = os.path.relpath(afp, cwd)
            return rel.replace("\\", "/")
        return afp
    except Exception:
        return fp

def _mark_file_completed(progress_path: str, fp: str) -> None:
    try:
        prog = _load_extract_progress(progress_path)
        completed = prog.get("completed_files")
        if not isinstance(completed, list):
            completed = []
        p = _progress_path_for_file(fp)
        if p not in completed:
            completed.append(p)
        prog["completed_files"] = completed
        _save_extract_progress(progress_path, prog)
    except Exception as e:
        logger.warning("Failed to update progress file %s for %s: %s", progress_path, fp, e)

def _filter_completed_files(files: List[str], progress_path: str) -> List[str]:
    # Best-effort resume: skip already-completed input files listed in data/extract_progress.json
    prog = _load_extract_progress(progress_path)
    completed = prog.get("completed_files", [])
    if isinstance(completed, list) and completed:
        completed_abs = {
            os.path.normcase(os.path.abspath(p))
            for p in completed
            if isinstance(p, str) and p.strip()
        }
        before = len(files)
        files = [fp for fp in files if os.path.normcase(fp) not in completed_abs]
        skipped = before - len(files)
        if skipped:
            logger.info("Skipping %d completed input file(s) from %s", skipped, progress_path)
        if not files:
            logger.info("All matched input files are already completed (per %s); nothing to do.", progress_path)
            return
    return files

def main(argv: Optional[List[str]] = None) -> None:
    setup_logging(logging.DEBUG)
    # Load environment variables from .env (if present) so argparse defaults that use os.getenv
    # will pick them up automatically.
    if load_dotenv is not None and find_dotenv is not None:
        env_path = find_dotenv(usecwd=True)
        if env_path:
            load_dotenv(env_path, override=False)

    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--input",
        nargs="+",
        default=["./data"],
        required=False,
        help="Input JSONL files, globs, or directories (directories scanned recursively for *.jsonl).",
    )
    ap.add_argument("--out_qa", default="./output/qa.jsonl", required=False, help="Output QA JSONL path.")
    ap.add_argument("--out_facts", default="./output/facts.jsonl", required=False, help="Output facts JSONL path.")
    ap.add_argument("--max_pages", type=int, default=0, help="Optional cap on number of page records processed (0 = no cap).")
    ap.add_argument("--print_every", type=int, default=2000, help="Progress print interval (pages).")
    ap.add_argument(
        "--dedup_key",
        choices=["pageid_revid", "pageid", "wikitext"],
        default="pageid_revid",
        help="How to deduplicate page records across shards. "
             "'pageid_revid' skips exact duplicate revisions (default). "
             "'pageid' keeps only the first seen revision per pageid. "
             "'wikitext' deduplicates by (title + wikitext) content hash.",
    )
    ap.add_argument(
        "--dedup_pages",
        dest="dedup_pages",
        action="store_true",
        help="Enable cross-file page-record deduplication (default: enabled).",
    )
    ap.add_argument(
        "--no_dedup_pages",
        dest="dedup_pages",
        action="store_false",
        help="Disable cross-file page-record deduplication.",
    )
    ap.set_defaults(dedup_pages=True)
    ap.add_argument(
        "--log-level",
        default="INFO",
        type=str.upper,
        choices=["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"],
        help="Logging level (default: INFO).",
    )
    ap.add_argument(
        "--llm_generate_qa",
        action="store_true",
        help="Use an OpenAI-compatible LLM to generate QA items from each page's plain_text (optional).",
    )
    ap.add_argument(
        "--llm_model",
        default=os.getenv("OPENAI_MODEL", ""),
        help="LLM model name (e.g., gpt-4o-mini). Can also be set via OPENAI_MODEL env var.",
    )
    ap.add_argument(
        "--llm_base_url",
        default=os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1"),
        help="OpenAI-compatible base URL ending in /v1 (default: https://api.openai.com/v1). "
             "Can also be set via OPENAI_BASE_URL env var.",
    )
    ap.add_argument(
        "--llm_api",
        choices=["responses", "chat_completions", "auto"],
        default=os.getenv("OPENAI_API", "responses"),
        help="Which OpenAI API to use: 'responses' (default), 'chat_completions', or 'auto' (try responses then fallback). "
             "Can also be set via OPENAI_API env var.",
    )
    ap.add_argument(
        "--llm_reasoning_effort",
        default=os.getenv("OPENAI_REASONING_EFFORT", ""),
        help="Reasoning effort for compatible models (optional), e.g. minimal|low|medium|high|xhigh. "
             "Can also be set via OPENAI_REASONING_EFFORT env var. Leave empty to not send.",
    )
    ap.add_argument(
        "--llm_api_key",
        default=os.getenv("OPENAI_API_KEY", ""),
        help="API key (default from OPENAI_API_KEY env var).",
    )
    ap.add_argument("--llm_temperature", type=float, default=0.0, help="LLM sampling temperature (default: 0).")
    ap.add_argument("--llm_max_tokens", type=int, default=12800, help="Max completion tokens per call.")
    ap.add_argument("--llm_timeout_s", type=int, default=60, help="HTTP timeout seconds for LLM calls.")
    ap.add_argument(
        "--llm_parallelism",
        type=int,
        default=int(os.getenv("OPENAI_PARALLELISM", "4")),
        help="Number of parallel LLM requests (default: 4). Use 1 to disable parallelism. "
             "Can also be set via OPENAI_PARALLELISM env var.",
    )
    ap.add_argument(
        "--llm_max_in_flight",
        type=int,
        default=int(os.getenv("OPENAI_MAX_IN_FLIGHT", "0")),
        help="Max in-flight LLM requests before applying backpressure (0 = auto, default 2*parallelism). "
             "Can also be set via OPENAI_MAX_IN_FLIGHT env var.",
    )
    ap.add_argument("--llm_max_qa_per_page", type=int, default=5, help="Max QA items to request per page.")
    ap.add_argument(
        "--llm_text_max_chars",
        type=int,
        default=6000,
        help="Max number of characters from plain_text to send to the LLM per page (truncates).",
    )
    ap.add_argument(
        "--llm_cache_path",
        default="./output/llm_cache.jsonl",
        help="JSONL cache for LLM calls (best-effort).",
    )
    args = ap.parse_args(argv)

    logging.getLogger().setLevel(args.log_level)
    logger.info("Configured log level: %s", args.log_level)

    files = iter_input_files(args.input)
    if not files:
        logger.error("No input files matched: %s", args.input)
        raise SystemExit("No input files matched.")

    progress_path = os.path.join("data", "extract_progress.json")
    files = _filter_completed_files(files, progress_path)

    logger.info(
        "Starting extraction: files=%d out_qa=%s out_facts=%s max_pages=%s print_every=%d",
        len(files),
        args.out_qa,
        args.out_facts,
        args.max_pages if args.max_pages > 0 else "none",
        args.print_every,
    )

    extractor = TouhouQAExtractorV0()

    # Ensure output directories exist.
    os.makedirs(os.path.dirname(os.path.abspath(args.out_qa)), exist_ok=True)
    os.makedirs(os.path.dirname(os.path.abspath(args.out_facts)), exist_ok=True)

    qa_out = open(args.out_qa, "a", encoding="utf-8")
    facts_out = open(args.out_facts, "a", encoding="utf-8")

    # Category filters (edit in touhouqa/config.py)
    exclude_exact = {
        c.strip()
        for c in CATEGORY_BLACKLIST
        if isinstance(c, str) and c.strip()
    }
    exclude_substrings = [
        s.strip()
        for s in CATEGORY_SUBSTRING_BLACKLIST
        if isinstance(s, str) and s.strip()
    ]
    if exclude_exact or exclude_substrings:
        logger.info(
            "Category filters enabled: exact=%d substrings_ascii=%s",
            len(exclude_exact),
            [ascii(s) for s in exclude_substrings],
        )

    llm_client: Optional[OpenAICompatibleChatClient] = None
    llm_conf: Optional[Dict] = None
    llm_executor: Optional[ThreadPoolExecutor] = None
    llm_tls = threading.local()
    llm_futures: List = []
    llm_inflight_keys: set[str] = set()
    llm_cache: Dict[str, List[Dict]] = {}
    llm_qa_total = 0
    if args.llm_generate_qa:
        if not args.llm_model:
            raise SystemExit("--llm_model is required when --llm_generate_qa is enabled.")
        if not args.llm_api_key:
            raise SystemExit("OPENAI_API_KEY (or --llm_api_key) is required when --llm_generate_qa is enabled.")

        llm_conf = {
            "base_url": args.llm_base_url,
            "api_key": args.llm_api_key,
            "model": args.llm_model,
            "api": args.llm_api,
            "reasoning_effort": args.llm_reasoning_effort,
            "timeout_s": args.llm_timeout_s,
            "temperature": args.llm_temperature,
            "max_tokens": args.llm_max_tokens,
        }

        # Create a main-thread client (validates dependencies/config). In parallel mode, worker
        # threads will create their own clients via thread-local storage.
        llm_client = OpenAICompatibleChatClient(**llm_conf)

        llm_workers = max(1, int(args.llm_parallelism))
        if llm_workers > 1:
            llm_executor = ThreadPoolExecutor(max_workers=llm_workers)
            max_in_flight = int(args.llm_max_in_flight) if int(args.llm_max_in_flight) > 0 else (llm_workers * 2)
            logger.info(
                "LLM parallelism enabled: workers=%d max_in_flight=%d api=%s model=%s",
                llm_workers,
                max_in_flight,
                args.llm_api,
                args.llm_model,
            )
        else:
            logger.info("LLM parallelism disabled (workers=1).")

        # Best-effort cache load
        try:
            os.makedirs(os.path.dirname(os.path.abspath(args.llm_cache_path)), exist_ok=True)
            if os.path.exists(args.llm_cache_path):
                for row in iter_jsonl_skip_bad(args.llm_cache_path):
                    k = row.get("key")
                    v = row.get("items")
                    if isinstance(k, str) and isinstance(v, list):
                        llm_cache[k] = v
        except Exception as e:
            logger.warning("Failed to load LLM cache %s: %s", args.llm_cache_path, e)

    seen_page_keys = set()
    pages = 0
    records_read = 0
    dup_pages_skipped = 0
    category_pages_skipped = 0
    facts_total = 0
    qa_total = 0
    rejected_total = 0

    def _is_content_policy_error(e: Exception) -> bool:
        """
        Best-effort detection of "blocked by safety/content policy" errors from LLM providers.

        If detected, we treat the record as "ignored" (skip LLM) and cache an empty result
        to avoid retrying it in future runs.
        """
        try:
            body = getattr(e, "body", None)
            if isinstance(body, dict):
                err = body.get("error")
                if isinstance(err, dict):
                    code = str(err.get("code") or "")
                    typ = str(err.get("type") or "")
                    msg = str(err.get("message") or "")
                    s = f"{code} {typ} {msg}".lower()
                    if "content_policy" in s or "content policy" in s or "policy violation" in s or "safety" in s:
                        return True
        except Exception:
            pass

        s = str(e).lower()
        if "content_policy" in s or "content policy" in s or "policy violation" in s or "safety system" in s:
            return True
        if "safety" in s and ("blocked" in s or "violate" in s or "refus" in s):
            return True
        return False

    def _get_thread_llm_client() -> OpenAICompatibleChatClient:
        c = getattr(llm_tls, "client", None)
        if c is None:
            assert llm_conf is not None
            c = OpenAICompatibleChatClient(**llm_conf)
            llm_tls.client = c
        return c

    def _llm_job(
        cache_key: str,
        *,
        page_title: str,
        pageid: int,
        revid: int,
        timestamp: str,
        text: str,
        categories: List[str],
        max_items: int,
    ):
        try:
            c = _get_thread_llm_client() if llm_executor is not None else llm_client
            assert c is not None
            llm_items = generate_qa_from_plain_text(
                client=c,
                page_title=page_title,
                pageid=pageid,
                revid=revid,
                timestamp=timestamp,
                text=text,
                max_items=max_items,
            )
            items: List[Dict] = []
            for x in llm_items:
                d = qa_item_to_dict(x)
                d["categories"] = categories
                items.append(d)
            return cache_key, items, None, None
        except Exception as e:
            kind = "content_policy" if _is_content_policy_error(e) else "error"
            return cache_key, [], kind, repr(e)

    def _drain_llm_futures(*, wait_for_one: bool = False, wait_for_all: bool = False) -> None:
        nonlocal llm_futures, llm_qa_total, qa_total, file_qa
        if llm_executor is None or not llm_futures:
            return

        if wait_for_all:
            done = llm_futures
            llm_futures = []
        elif wait_for_one:
            done_set, not_done = wait(llm_futures, return_when=FIRST_COMPLETED)
            done = list(done_set)
            llm_futures = list(not_done)
        else:
            done = [f for f in llm_futures if f.done()]
            if not done:
                return
            llm_futures = [f for f in llm_futures if not f.done()]

        for fut in done:
            try:
                cache_key, items, err_kind, err = fut.result()
            except Exception as e:
                logger.warning("LLM future failed unexpectedly: %r", e)
                continue

            llm_inflight_keys.discard(cache_key)

            if err_kind:
                if err_kind == "content_policy":
                    logger.info("LLM blocked by content policy; skipping record (cache_key=%s)", cache_key)
                    llm_cache[cache_key] = []
                    # Best-effort append empty result so we don't retry in future runs.
                    try:
                        with open(args.llm_cache_path, "a", encoding="utf-8") as cf:
                            cf.write(json.dumps({"key": cache_key, "items": [], "error_kind": err_kind}, ensure_ascii=False) + "\n")
                    except Exception as e:
                        logger.warning("Failed to append to LLM cache: %s", e)
                else:
                    logger.warning("LLM request failed (cache_key=%s): %s", cache_key, err)
                continue

            llm_cache[cache_key] = items
            # Best-effort append to cache file
            try:
                with open(args.llm_cache_path, "a", encoding="utf-8") as cf:
                    cf.write(json.dumps({"key": cache_key, "items": items}, ensure_ascii=False) + "\n")
            except Exception as e:
                logger.warning("Failed to append to LLM cache: %s", e)

            for it in items:
                qa_out.write(json.dumps(it, ensure_ascii=False) + "\n")
                qa_total += 1
                llm_qa_total += 1
                file_qa += 1

    try:
        for fp in files:
            file_pages = 0
            file_records = 0
            file_dup_pages = 0
            file_category_pages_skipped = 0
            file_facts = 0
            file_qa = 0
            file_rejected = 0
            reached_max = False

            logger.info("Processing input file: %s", fp)
            for rec in read_jsonl(fp):
                # Keep output moving by draining any completed LLM futures (non-blocking).
                _drain_llm_futures()

                records_read += 1
                file_records += 1

                rec_categories = _normalize_categories(rec)

                # Category-based page skipping (before dedup/extraction).
                matched_cat = _match_excluded_category(
                    rec,
                    exclude_exact=exclude_exact,
                    exclude_substrings=exclude_substrings,
                )
                if matched_cat is not None:
                    category_pages_skipped += 1
                    file_category_pages_skipped += 1
                    logger.debug(
                        "Skipping page by category filter: title=%s pageid=%s matched=%s",
                        rec.get("title"),
                        rec.get("pageid"),
                        matched_cat,
                    )
                    continue

                # Optional cross-file dedup at the page-record level.
                if args.dedup_pages:
                    try:
                        pid = int(rec.get("pageid"))
                        rid = int(rec.get("revid"))
                    except Exception:
                        # If the record is malformed, let the normal extraction path raise a useful error.
                        pid = rec.get("pageid")
                        rid = rec.get("revid")

                    if args.dedup_key == "pageid_revid":
                        key = (pid, rid)
                    elif args.dedup_key == "pageid":
                        key = pid
                    else:
                        title = str(rec.get("title") or "")
                        wikitext = str(rec.get("wikitext") or "")
                        key = ("wikitext", hash_text(title + "\n" + wikitext))

                    if key in seen_page_keys:
                        dup_pages_skipped += 1
                        file_dup_pages += 1
                        continue
                    seen_page_keys.add(key)

                if args.max_pages and pages >= args.max_pages:
                    logger.info("Reached max_pages=%d; stopping early.", args.max_pages)
                    reached_max = True
                    break

                pages += 1
                file_pages += 1

                # Extract
                facts = extractor.extract_facts(rec)
                logger.debug(
                    "Page %s (pageid=%s) yielded %d fact candidates",
                    rec.get("title"),
                    rec.get("pageid"),
                    len(facts),
                )

                # Canonicalize and emit
                for fc in facts:
                    fc = extractor.canonicalize_fact(fc)
                    if fc.rejected:
                        rejected_total += 1
                        file_rejected += 1

                    facts_out.write(json.dumps(fact_candidate_to_dict(fc), ensure_ascii=False) + "\n")
                    facts_total += 1
                    file_facts += 1

                    qa = extractor.to_qa_item(fc)
                    if qa:
                        qa_row = qa_item_to_dict(qa)
                        qa_row["categories"] = rec_categories
                        qa_out.write(json.dumps(qa_row, ensure_ascii=False) + "\n")
                        qa_total += 1
                        file_qa += 1

                # Optional LLM QA generation from unstructured plain text
                if llm_client is not None:
                    text = str(rec.get("plain_text") or "")
                    if text:
                        if args.llm_text_max_chars and len(text) > args.llm_text_max_chars:
                            text = text[: args.llm_text_max_chars]

                        cache_key = hash_text(
                            "|".join([
                                "llm_qa_v3.2",
                                args.llm_model,
                                str(rec.get("pageid")),
                                str(rec.get("revid")),
                                text,
                            ])
                        )

                        if cache_key in llm_cache:
                            for it in llm_cache[cache_key]:
                                if isinstance(it, dict) and "categories" not in it:
                                    it = {**it, "categories": rec_categories}
                                qa_out.write(json.dumps(it, ensure_ascii=False) + "\n")
                                qa_total += 1
                                llm_qa_total += 1
                                file_qa += 1
                        else:
                            title = str(rec.get("title") or "")
                            pageid = int(rec.get("pageid"))
                            revid = int(rec.get("revid"))
                            timestamp = str(rec.get("timestamp") or "")

                            if llm_executor is None:
                                # Sequential mode
                                cache_key2, items, err_kind, err = _llm_job(
                                    cache_key,
                                    page_title=title,
                                    pageid=pageid,
                                    revid=revid,
                                    timestamp=timestamp,
                                    text=text,
                                    categories=rec_categories,
                                    max_items=args.llm_max_qa_per_page,
                                )
                                if err_kind:
                                    if err_kind == "content_policy":
                                        logger.info(
                                            "LLM blocked by content policy; skipping record: title=%s pageid=%s revid=%s",
                                            title,
                                            pageid,
                                            revid,
                                        )
                                        llm_cache[cache_key2] = []
                                        try:
                                            with open(args.llm_cache_path, "a", encoding="utf-8") as cf:
                                                cf.write(json.dumps({"key": cache_key2, "items": [], "error_kind": err_kind}, ensure_ascii=False) + "\n")
                                        except Exception as e:
                                            logger.warning("Failed to append to LLM cache: %s", e)
                                    else:
                                        logger.warning("LLM request failed (cache_key=%s): %s", cache_key2, err)
                                    continue

                                llm_cache[cache_key2] = items
                                # Best-effort append to cache file
                                try:
                                    with open(args.llm_cache_path, "a", encoding="utf-8") as cf:
                                        cf.write(json.dumps({"key": cache_key2, "items": items}, ensure_ascii=False) + "\n")
                                except Exception as e:
                                    logger.warning("Failed to append to LLM cache: %s", e)

                                for it in items:
                                    qa_out.write(json.dumps(it, ensure_ascii=False) + "\n")
                                    qa_total += 1
                                    llm_qa_total += 1
                                    file_qa += 1
                            else:
                                # Parallel mode
                                if cache_key not in llm_inflight_keys:
                                    llm_inflight_keys.add(cache_key)
                                    llm_futures.append(llm_executor.submit(
                                        _llm_job,
                                        cache_key,
                                        page_title=title,
                                        pageid=pageid,
                                        revid=revid,
                                        timestamp=timestamp,
                                        text=text,
                                        categories=rec_categories,
                                        max_items=args.llm_max_qa_per_page,
                                    ))

                                llm_workers = max(1, int(args.llm_parallelism))
                                max_in_flight = int(args.llm_max_in_flight) if int(args.llm_max_in_flight) > 0 else (llm_workers * 2)
                                if len(llm_futures) >= max_in_flight:
                                    # Apply backpressure: wait for at least one LLM result.
                                    _drain_llm_futures(wait_for_one=True)

                if args.print_every and pages % args.print_every == 0:
                    logger.info(
                        "Progress: pages=%s records=%s category_pages_skipped=%s dup_pages_skipped=%s facts=%s qa=%s rejected=%s",
                        f"{pages:,}",
                        f"{records_read:,}",
                        f"{category_pages_skipped:,}",
                        f"{dup_pages_skipped:,}",
                        f"{facts_total:,}",
                        f"{qa_total:,}",
                        f"{rejected_total:,}",
                    )

            # Ensure all LLM work for this file is flushed before printing per-file summary.
            _drain_llm_futures(wait_for_all=True)

            logger.info(
                "File summary: %s pages=%s records=%s category_pages_skipped=%s dup_pages_skipped=%s facts=%s qa=%s rejected=%s",
                fp,
                f"{file_pages:,}",
                f"{file_records:,}",
                f"{file_category_pages_skipped:,}",
                f"{file_dup_pages:,}",
                f"{file_facts:,}",
                f"{file_qa:,}",
                f"{file_rejected:,}",
            )

            if not reached_max:
                # Flush outputs before recording completion so resume state matches what's on disk.
                try:
                    facts_out.flush()
                    qa_out.flush()
                except Exception:
                    pass
                _mark_file_completed(progress_path, fp)

            if reached_max:
                break

    finally:
        # Flush any remaining LLM work before closing outputs (best-effort).
        try:
            _drain_llm_futures(wait_for_all=True)
        except Exception:
            pass
        if llm_executor is not None:
            try:
                llm_executor.shutdown(wait=True)
            except Exception:
                pass
        qa_out.close()
        facts_out.close()

    if llm_client is not None:
        logger.info("LLM QA emitted: %s", f"{llm_qa_total:,}")

    logger.info(
        "Completed extraction: files=%d pages=%s records=%s category_pages_skipped=%s dup_pages_skipped=%s facts=%s qa=%s rejected=%s",
        len(files),
        f"{pages:,}",
        f"{records_read:,}",
        f"{category_pages_skipped:,}",
        f"{dup_pages_skipped:,}",
        f"{facts_total:,}",
        f"{qa_total:,}",
        f"{rejected_total:,}",
    )


