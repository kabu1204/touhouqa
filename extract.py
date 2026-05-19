#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Backwards-compatible CLI entrypoint.

The implementation lives in the `touhouqa/` package (split into modules like
`touhouqa/llm.py`, `touhouqa/extractor.py`, etc.) for better readability and
maintainability.
"""

from touhouqa.cli_extract import main


if __name__ == "__main__":
    main()


