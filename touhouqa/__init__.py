"""
TouhouQA: a knowledge benchmark for Touhou Project built from THWiki.

Subpackages:
  common      Shared data models, serialization, JSONL I/O and text helpers.
  wiki        THWiki crawler, wikitext parsing and category statistics.
  extraction  Rule-based and LLM-based QA extraction pipeline.
  benchmark   Deduplication / test split, Core subset filtering, grading and evaluation.

Command-line usage: `touhouqa <command>` or `python -m touhouqa <command>` (see `touhouqa.cli`).
"""

__version__ = "0.1.0"
