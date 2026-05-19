#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Deduplicate QA items and carve out a page-level test benchmark split.

Typical workflow:
  python prepare_qa_splits.py
  python eval.py --gold output/splits/test.jsonl --predictions preds.jsonl

This is a knowledge benchmark: no train split is produced.
"""

from __future__ import annotations

import argparse
import json
import logging
import os
import random
from collections import defaultdict
from typing import Dict, List, Set, Tuple

from touhouqa.grading import dedup_key_for_row

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)


def _read_jsonl(path: str) -> List[Dict]:
    rows: List[Dict] = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            rows.append(json.loads(line))
    return rows


def _write_jsonl(path: str, rows: List[Dict]) -> None:
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")


def _dedupe_rows(rows: List[Dict], *, max_per_page: int) -> Tuple[List[Dict], int]:
    seen_keys: Set[Tuple[str, str]] = set()
    per_page: Dict[int, int] = defaultdict(int)
    clean: List[Dict] = []
    removed = 0

    for row in rows:
        key = dedup_key_for_row(row)
        if not key[0] or not key[1]:
            removed += 1
            continue
        if key in seen_keys:
            removed += 1
            continue

        pageid = int(row.get("source_pageid"))
        if max_per_page > 0 and per_page[pageid] >= max_per_page:
            removed += 1
            continue

        seen_keys.add(key)
        per_page[pageid] += 1
        clean.append(row)

    return clean, removed


def _split_by_page(
    rows: List[Dict],
    *,
    test_ratio: float,
    seed: int,
) -> Tuple[Set[int], Set[int]]:
    page_ids = sorted({int(r["source_pageid"]) for r in rows})
    rng = random.Random(seed)
    rng.shuffle(page_ids)

    n_test = max(1, int(len(page_ids) * test_ratio))
    test_ids = set(page_ids[:n_test])
    holdout_ids = set(page_ids[n_test:])
    return test_ids, holdout_ids


def main() -> None:
    ap = argparse.ArgumentParser(description="Dedupe QA and create page-level test split.")
    ap.add_argument("--input", default="output/qa.jsonl", help="Input QA JSONL.")
    ap.add_argument("--out-clean", default="output/qa_clean.jsonl", help="Deduped full QA output.")
    ap.add_argument("--out-dir", default="output/splits", help="Directory for test split and manifest.")
    ap.add_argument("--test-ratio", type=float, default=0.15, help="Fraction of pages in test (default 0.15).")
    ap.add_argument("--seed", type=int, default=42, help="RNG seed for page shuffle.")
    ap.add_argument("--max-per-page", type=int, default=0, help="Max QA per page after dedup (0 = unlimited).")
    ap.add_argument(
        "--write-holdout",
        action="store_true",
        help="Also write holdout.jsonl (not for model training; internal curation only).",
    )
    args = ap.parse_args()

    if not os.path.exists(args.input):
        raise SystemExit(f"Input not found: {args.input}")

    rows = _read_jsonl(args.input)
    clean, removed_dup = _dedupe_rows(rows, max_per_page=args.max_per_page)
    _write_jsonl(args.out_clean, clean)

    test_pageids, holdout_pageids = _split_by_page(
        clean, test_ratio=args.test_ratio, seed=args.seed
    )

    test_rows: List[Dict] = []
    holdout_rows: List[Dict] = []
    for row in clean:
        pid = int(row["source_pageid"])
        if pid in test_pageids:
            test_rows.append(row)
        elif args.write_holdout:
            holdout_rows.append(row)

    out_dir = args.out_dir
    test_path = os.path.join(out_dir, "test.jsonl")
    _write_jsonl(test_path, test_rows)

    if args.write_holdout:
        _write_jsonl(os.path.join(out_dir, "holdout.jsonl"), holdout_rows)

    manifest = {
        "benchmark_type": "knowledge",
        "seed": args.seed,
        "test_ratio": args.test_ratio,
        "input": args.input.replace("\\", "/"),
        "out_clean": args.out_clean.replace("\\", "/"),
        "dedup_key": "normalized_question+answer_canonical",
        "stats": {
            "input_qa": len(rows),
            "deduped_qa": len(clean),
            "removed_duplicates": removed_dup,
            "test_pages": len(test_pageids),
            "holdout_pages": len(holdout_pageids),
            "test_qa": len(test_rows),
            "holdout_qa": len(clean) - len(test_rows),
        },
        "test_pageids": sorted(test_pageids),
        "holdout_pageids": sorted(holdout_pageids),
    }
    manifest_path = os.path.join(out_dir, "split_manifest.json")
    os.makedirs(os.path.abspath(out_dir), exist_ok=True)
    with open(manifest_path, "w", encoding="utf-8") as mf:
        json.dump(manifest, mf, ensure_ascii=False, indent=2)

    stats = manifest["stats"]
    logger.info(
        "Done: input_qa=%d deduped=%d removed=%d | pages test=%d holdout=%d | qa test=%d holdout=%d",
        stats["input_qa"],
        stats["deduped_qa"],
        stats["removed_duplicates"],
        stats["test_pages"],
        stats["holdout_pages"],
        stats["test_qa"],
        stats["holdout_qa"],
    )
    logger.info("Wrote %s", args.out_clean)
    logger.info("Wrote %s", test_path)
    logger.info("Wrote %s", manifest_path)


if __name__ == "__main__":
    main()
