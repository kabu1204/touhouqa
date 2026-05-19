from __future__ import annotations

import glob
import json
import logging
import os
from typing import Dict, Iterable, Iterator, List

from .config import SKIP_PATH_PATTERNS

logger = logging.getLogger(__name__)


def iter_input_files(inputs: List[str]) -> List[str]:
    files: List[str] = []
    for p in inputs:
        if os.path.isdir(p):
            logger.debug("Scanning directory for *.jsonl: %s", p)
            files.extend(sorted(glob.glob(os.path.join(p, "**/*.jsonl"), recursive=True)))
        else:
            files.extend(sorted(glob.glob(p)))

    # Dedup preserve order, skip system directories
    seen = set()
    out: List[str] = []
    skipped = 0
    for f in files:
        af = os.path.abspath(f)
        if af in seen:
            continue
        # Skip files in system directories
        skip = False
        for pat in SKIP_PATH_PATTERNS:
            if pat in af:
                logger.debug("Skipping file in system directory: %s", af)
                skip = True
                skipped += 1
                break
        if skip:
            continue
        seen.add(af)
        out.append(af)
    if skipped:
        logger.info("Skipped %d files in system directories (e.g. $RECYCLE.BIN)", skipped)
    return out


def read_jsonl(path: str) -> Iterator[Dict]:
    with open(path, "r", encoding="utf-8") as f:
        for line_no, line in enumerate(f, start=1):
            line = line.strip()
            if not line:
                continue
            try:
                yield json.loads(line)
            except Exception as e:
                logger.exception("Failed to parse JSON at %s:%s", path, line_no)
                raise RuntimeError(f"Failed to parse JSON at {path}:{line_no}: {e}") from e


def write_jsonl(path: str, rows: Iterable[Dict]) -> None:
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")


def load_jsonl_by_id(path: str, *, id_key: str = "id") -> Dict[str, Dict]:
    """Load JSONL rows into a dict keyed by ``id_key`` (last row wins on duplicates)."""
    out: Dict[str, Dict] = {}
    for row in read_jsonl(path):
        qid = row.get(id_key)
        if qid:
            out[str(qid)] = row
    return out


def iter_jsonl_skip_bad(path: str) -> Iterator[Dict]:
    """Yield parsed JSONL rows; skip malformed lines with a warning."""
    with open(path, "r", encoding="utf-8") as f:
        for line_no, line in enumerate(f, start=1):
            line = line.strip()
            if not line:
                continue
            try:
                yield json.loads(line)
            except json.JSONDecodeError:
                logger.warning("Skipping bad JSON at %s:%s", path, line_no)


