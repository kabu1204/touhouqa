# Category Counter for TouhouQA Crawled Data

## Overview

The `count_categories.py` script analyzes all crawled Touhou Wiki data to count and report category statistics.

## Usage

```bash
python count_categories.py
```

## What It Does

1. **Scans all JSONL files** in the `data/` directory (including all namespace files and part files)
2. **Extracts category information** from each page record
3. **Aggregates statistics** across all pages
4. **Generates comprehensive reports** with category counts and rankings

## Output Files

### 1. `data/category_counts.json`
A JSON file containing:
- Total pages processed
- Total unique categories
- Total category assignments
- Average categories per page
- Complete dictionary of all categories with their counts

### 2. `data/category_counts.csv`
A CSV file with ranked categories containing:
- Rank (1 to N)
- Category name
- Page count
- Percentage of total pages

## Statistics from Latest Run

- **Total Pages**: 88,985
- **Unique Categories**: 13,062
- **Total Category Assignments**: 782,486
- **Average Categories per Page**: 8.79

## Top Categories

The most common categories in the dataset are:

1. **分类:有首发展会的同人作品** (49,050 pages, 55.12%) - Doujin works with debut conventions
2. **分类:有封面角色的同人作品** (48,672 pages, 54.70%) - Doujin works with cover characters
3. **分类:一般向同人作品** (47,941 pages, 53.88%) - General audience doujin works
4. **分类:同人志** (27,778 pages, 31.22%) - Doujin magazines
5. **分类:同人专辑** (23,178 pages, 26.05%) - Doujin albums

## Features

- **Progress logging**: Real-time progress updates during processing
- **Error handling**: Gracefully handles malformed JSON and missing files
- **Comprehensive statistics**: Multiple output formats for different use cases
- **Performance**: Efficiently processes large datasets with streaming JSON parsing

## Notes

- The script processes all `ns_*.jsonl` files in the data directory
- Empty lines in JSONL files are automatically skipped
- Malformed JSON records are logged but don't stop processing
- Categories are prefixed with "分类:" (Chinese for "Category:")

