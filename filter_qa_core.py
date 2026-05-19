#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Filter benchmark test QA into a higher-precision Core subset and optional random audit sample.

Example:
  python filter_qa_core.py
  python filter_qa_core.py --sample-size 200 --sample-out output/splits/qa_core_sample_200.jsonl
"""

from __future__ import annotations

import argparse
import json
import logging
import os
import random
from collections import Counter, defaultdict
from typing import Dict, List, Optional

from touhouqa.core_filters import reject_reason_for_core

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
    parent = os.path.dirname(os.path.abspath(path))
    if parent:
        os.makedirs(parent, exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")


def filter_core_rows(
    rows: List[Dict],
    *,
    max_answer_chars: int,
    max_per_page: int,
) -> tuple[List[Dict], Counter, Counter]:
    reject_counts: Counter = Counter()
    per_page: Dict[int, int] = defaultdict(int)
    kept: List[Dict] = []
    page_kept: Counter = Counter()

    for row in rows:
        reason = reject_reason_for_core(row, max_answer_chars=max_answer_chars)
        if reason:
            reject_counts[reason.split(":", 1)[0]] += 1
            continue

        pageid = int(row["source_pageid"])
        if max_per_page > 0 and per_page[pageid] >= max_per_page:
            reject_counts["max_per_page"] += 1
            continue

        per_page[pageid] += 1
        page_kept[pageid] += 1
        kept.append(row)

    return kept, reject_counts, page_kept


def _write_sample_markdown(path: str, rows: List[Dict]) -> None:
    parent = os.path.dirname(os.path.abspath(path))
    if parent:
        os.makedirs(parent, exist_ok=True)
    lines = [
        "# TouhouQA Core — random audit sample",
        "",
        "Mark each row: OK / FIX / DROP. Check answer appears in evidence and question matches page subject.",
        "",
    ]
    for i, row in enumerate(rows, start=1):
        lines.extend([
            f"## {i}. `{row.get('id', '')}`",
            "",
            f"- **Page**: {row.get('source_page_title', '')} (pageid={row.get('source_pageid')})",
            f"- **Categories**: {', '.join(row.get('categories') or [])}",
            "",
            f"**Q:** {row.get('question', '')}",
            "",
            f"**A:** {row.get('answer_canonical', '')}",
            "",
            f"**Evidence:** {row.get('evidence_quote', '')}",
            "",
            "---",
            "",
        ])
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


def sample_rows(rows: List[Dict], *, size: int, seed: int) -> List[Dict]:
    if size <= 0 or not rows:
        return []
    rng = random.Random(seed)
    if size >= len(rows):
        return list(rows)
    indices = rng.sample(range(len(rows)), size)
    return [rows[i] for i in sorted(indices)]


def main() -> None:
    ap = argparse.ArgumentParser(description="Build TouhouQA Core subset from test split.")
    ap.add_argument("--input", default="output/splits/test.jsonl", help="Input benchmark test JSONL.")
    ap.add_argument("--output", default="output/splits/qa_core.jsonl", help="Filtered Core JSONL.")
    ap.add_argument("--report", default="output/splits/qa_core_filter_report.json", help="Filter stats JSON.")
    ap.add_argument("--max-answer-chars", type=int, default=80, help="Max canonical answer length.")
    ap.add_argument("--max-per-page", type=int, default=5, help="Max Core QA per source page (0=unlimited).")
    ap.add_argument("--sample-size", type=int, default=200, help="Random audit sample size (0=skip).")
    ap.add_argument("--sample-out", default="output/splits/qa_core_sample_200.jsonl", help="Audit sample JSONL.")
    ap.add_argument(
        "--sample-md",
        default="output/splits/qa_core_sample_200.md",
        help="Human-readable audit markdown (empty to skip).",
    )
    ap.add_argument("--seed", type=int, default=42, help="RNG seed for sampling.")
    args = ap.parse_args()

    if not os.path.exists(args.input):
        raise SystemExit(f"Input not found: {args.input}")

    rows = _read_jsonl(args.input)
    core, reject_counts, page_kept = filter_core_rows(
        rows,
        max_answer_chars=args.max_answer_chars,
        max_per_page=args.max_per_page,
    )
    _write_jsonl(args.output, core)

    sample: List[Dict] = []
    if args.sample_size > 0:
        sample = sample_rows(core, size=args.sample_size, seed=args.seed)
        _write_jsonl(args.sample_out, sample)
        if args.sample_md:
            _write_sample_markdown(args.sample_md, sample)

    report = {
        "input": args.input.replace("\\", "/"),
        "output": args.output.replace("\\", "/"),
        "filters": {
            "max_answer_chars": args.max_answer_chars,
            "max_per_page": args.max_per_page,
        },
        "stats": {
            "input_qa": len(rows),
            "core_qa": len(core),
            "removed": len(rows) - len(core),
            "retention_rate": round(len(core) / len(rows), 4) if rows else 0.0,
            "core_pages": len(page_kept),
            "sample_size": len(sample),
        },
        "reject_reasons": dict(reject_counts.most_common()),
    }
    with open(args.report, "w", encoding="utf-8") as rf:
        json.dump(report, rf, ensure_ascii=False, indent=2)

    logger.info(
        "Core filter: input=%d core=%d removed=%d (%.1f%% kept) pages=%d",
        len(rows),
        len(core),
        len(rows) - len(core),
        100.0 * len(core) / len(rows) if rows else 0.0,
        len(page_kept),
    )
    logger.info("Top reject reasons: %s", reject_counts.most_common(8))
    logger.info("Wrote %s", args.output)
    logger.info("Wrote %s", args.report)
    if sample:
        logger.info("Wrote audit sample (%d) -> %s", len(sample), args.sample_out)
        if args.sample_md:
            logger.info("Wrote audit markdown -> %s", args.sample_md)


if __name__ == "__main__":
    main()
