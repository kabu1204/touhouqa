"""
Unified command-line entry point.

Usage:
  touhouqa <command> [options]
  python -m touhouqa <command> [options]

Run `touhouqa <command> --help` for the options of a single command.
"""

from __future__ import annotations

import importlib
import sys
from typing import Dict, List, Optional, Tuple

# command -> (module providing `main(argv)`, one-line description), in pipeline order.
COMMANDS: Dict[str, Tuple[str, str]] = {
    "crawl": ("touhouqa.wiki.crawler", "Crawl THWiki pages into data/ns_*.jsonl."),
    "extract": ("touhouqa.extraction.pipeline", "Extract QA items (rules + optional LLM) into output/qa.jsonl."),
    "split": ("touhouqa.benchmark.splits", "Deduplicate QA and create the page-level test split."),
    "filter-core": ("touhouqa.benchmark.core_subset", "Filter the test split into the Core subset."),
    "eval": ("touhouqa.benchmark.evaluate", "Score model predictions against a gold JSONL."),
    "count-categories": ("touhouqa.wiki.category_stats", "Count categories across crawled dumps."),
}


def _usage() -> str:
    width = max(len(name) for name in COMMANDS)
    lines = ["usage: touhouqa <command> [options]", "", "commands:"]
    lines += [f"  {name:<{width}}  {desc}" for name, (_, desc) in COMMANDS.items()]
    lines += ["", "Run `touhouqa <command> --help` for command-specific options."]
    return "\n".join(lines)


def main(argv: Optional[List[str]] = None) -> None:
    args = list(sys.argv[1:] if argv is None else argv)
    if not args or args[0] in ("-h", "--help"):
        print(_usage())
        return
    command, rest = args[0], args[1:]
    if command not in COMMANDS:
        print(f"touhouqa: unknown command '{command}'\n", file=sys.stderr)
        print(_usage(), file=sys.stderr)
        raise SystemExit(2)
    module_name, _ = COMMANDS[command]
    sys.argv = [f"touhouqa {command}", *rest]
    importlib.import_module(module_name).main(rest)


if __name__ == "__main__":
    main()
