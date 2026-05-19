#!/usr/bin/env python3
"""
Count categories from crawled Touhou Wiki data.

This script analyzes all the crawled JSONL files in the data directory,
counting how many pages belong to each category across all namespaces.
"""

import json
import logging
from collections import Counter
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

DATA_DIR = Path("data")
OUTPUT_DIR = Path("output")


def count_categories_in_file(file_path):
    """Count categories in a single JSONL file."""
    categories = []
    page_count = 0
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            for line_num, line in enumerate(f, start=1):
                line = line.strip()
                if not line:
                    continue
                
                try:
                    record = json.loads(line)
                    page_count += 1
                    
                    # Extract categories (it's a list of category titles)
                    page_categories = record.get("categories", [])
                    categories.extend(page_categories)
                    
                except json.JSONDecodeError as e:
                    logger.warning(f"Failed to parse JSON at {file_path}:{line_num}: {e}")
                    continue
    
    except FileNotFoundError:
        logger.error(f"File not found: {file_path}")
        return Counter(), 0
    except Exception as e:
        logger.error(f"Error reading {file_path}: {e}")
        return Counter(), 0
    
    return Counter(categories), page_count


def find_all_data_files():
    """Find all JSONL data files in the data directory."""
    if not DATA_DIR.exists():
        logger.error(f"Data directory not found: {DATA_DIR}")
        return []
    
    # Get all .jsonl files (including both base and part files)
    files = sorted(DATA_DIR.glob("ns_*.jsonl"))
    logger.info(f"Found {len(files)} data files")
    return files


def main():
    logger.info("=" * 70)
    logger.info("Category Counter - Touhou Wiki Crawled Data")
    logger.info("=" * 70)
    
    # Find all data files
    files = find_all_data_files()
    if not files:
        logger.error("No data files found!")
        return
    
    # Count categories across all files
    total_categories = Counter()
    total_pages = 0
    total_category_assignments = 0
    
    for file_path in files:
        logger.info(f"Processing: {file_path.name}")
        file_categories, page_count = count_categories_in_file(file_path)
        
        total_categories.update(file_categories)
        total_pages += page_count
        total_category_assignments += sum(file_categories.values())
        
        logger.info(f"  Pages: {page_count}, Unique categories: {len(file_categories)}, "
                   f"Total assignments: {sum(file_categories.values())}")
    
    logger.info("=" * 70)
    logger.info("Summary Statistics")
    logger.info("=" * 70)
    logger.info(f"Total pages processed: {total_pages:,}")
    logger.info(f"Total unique categories: {len(total_categories):,}")
    logger.info(f"Total category assignments: {total_category_assignments:,}")
    logger.info(f"Average categories per page: {total_category_assignments / total_pages:.2f}")
    
    # Show top categories
    logger.info("")
    logger.info("=" * 70)
    logger.info("Top 50 Most Common Categories")
    logger.info("=" * 70)
    
    for i, (category, count) in enumerate(total_categories.most_common(50), start=1):
        percentage = (count / total_pages) * 100
        logger.info(f"{i:3d}. {category:60s} : {count:6,} pages ({percentage:5.2f}%)")
    
    # Save results to file
    output_file = OUTPUT_DIR / "category_counts.json"
    logger.info("")
    logger.info(f"Saving detailed results to: {output_file}")
    
    results = {
        "total_pages": total_pages,
        "total_unique_categories": len(total_categories),
        "total_category_assignments": total_category_assignments,
        "avg_categories_per_page": total_category_assignments / total_pages if total_pages > 0 else 0,
        "categories": {cat: count for cat, count in total_categories.items()}
    }
    
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    logger.info(f"Results saved successfully!")
    
    # Also save a sorted CSV for easier analysis
    csv_file = OUTPUT_DIR / "category_counts.csv"
    logger.info(f"Saving CSV report to: {csv_file}")
    
    with open(csv_file, "w", encoding="utf-8", newline="") as f:
        f.write("Rank,Category,Count,Percentage\n")
        for i, (category, count) in enumerate(total_categories.most_common(), start=1):
            percentage = (count / total_pages) * 100
            # Escape quotes in category names for CSV
            category_escaped = category.replace('"', '""')
            f.write(f'{i},"{category_escaped}",{count},{percentage:.2f}\n')
    
    logger.info(f"CSV saved successfully!")
    logger.info("=" * 70)


if __name__ == "__main__":
    main()

