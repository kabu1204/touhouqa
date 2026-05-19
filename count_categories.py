#!/usr/bin/env python3
"""Count categories across crawled THWiki JSONL dumps in data/."""

from __future__ import annotations

import json
import logging
from collections import Counter
from pathlib import Path

from touhouqa.io_utils import iter_jsonl_skip_bad

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

DATA_DIR = Path("data")
OUTPUT_DIR = Path("output")


def count_categories_in_file(file_path: Path) -> tuple[Counter, int]:
    categories: list[str] = []
    page_count = 0
    for record in iter_jsonl_skip_bad(str(file_path)):
        page_count += 1
        page_categories = record.get("categories", [])
        if isinstance(page_categories, list):
            categories.extend(page_categories)
    return Counter(categories), page_count


def main() -> None:
    files = sorted(DATA_DIR.glob("ns_*.jsonl"))
    if not files:
        logger.error("No data files found under %s", DATA_DIR)
        return

    logger.info("Found %d data files", len(files))
    total_categories: Counter = Counter()
    total_pages = 0

    for file_path in files:
        logger.info("Processing: %s", file_path.name)
        file_categories, page_count = count_categories_in_file(file_path)
        total_categories.update(file_categories)
        total_pages += page_count
        logger.info(
            "  pages=%d unique_categories=%d assignments=%d",
            page_count,
            len(file_categories),
            sum(file_categories.values()),
        )

    if total_pages == 0:
        logger.error("No pages processed")
        return

    total_assignments = sum(total_categories.values())
    logger.info(
        "Summary: pages=%s unique_categories=%s avg_per_page=%.2f",
        f"{total_pages:,}",
        f"{len(total_categories):,}",
        total_assignments / total_pages,
    )

    OUTPUT_DIR.mkdir(exist_ok=True)
    results = {
        "total_pages": total_pages,
        "total_unique_categories": len(total_categories),
        "total_category_assignments": total_assignments,
        "avg_categories_per_page": total_assignments / total_pages,
        "categories": dict(total_categories),
    }
    json_path = OUTPUT_DIR / "category_counts.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    logger.info("Wrote %s", json_path)

    csv_path = OUTPUT_DIR / "category_counts.csv"
    with open(csv_path, "w", encoding="utf-8", newline="") as f:
        f.write("Rank,Category,Count,Percentage\n")
        for i, (category, count) in enumerate(total_categories.most_common(), start=1):
            pct = (count / total_pages) * 100
            escaped = category.replace('"', '""')
            f.write(f'{i},"{escaped}",{count},{pct:.2f}\n')
    logger.info("Wrote %s", csv_path)


if __name__ == "__main__":
    main()
