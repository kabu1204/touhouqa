# TouhouQA

Knowledge benchmark for Touhou Project, built from [THWiki](https://thwiki.cc) (thwiki.cc).

- Planned work and v1 release criteria: [docs/ROADMAP.md](docs/ROADMAP.md)
- Leaderboard design (data model and website): [docs/LEADERBOARD.md](docs/LEADERBOARD.md)

## Installation

Requires Python 3.9 or later.

```bash
pip install -e .            # installs the `touhouqa` command
pip install -e '.[dev]'     # additionally installs pytest
```

All commands can also be run without installation as `python -m touhouqa <command>`.

## Pipeline

Run all commands from the repository root; default paths are relative to the current directory.

| Step | Command | Output |
|------|---------|--------|
| 1. Crawl wiki pages | `touhouqa crawl` | `data/ns_*.jsonl` |
| 2. Extract QA (rules, optional LLM) | `touhouqa extract` | `output/qa.jsonl`, `output/facts.jsonl` |
| 3. Deduplicate and build the test split | `touhouqa split` | `output/qa_clean.jsonl`, `output/splits/test.jsonl` |
| 4. Filter the Core subset (optional) | `touhouqa filter-core` | `output/splits/qa_core.jsonl`, audit sample |
| 5. Evaluate predictions | `touhouqa eval --gold output/splits/qa_core.jsonl --predictions preds.jsonl` | JSON report on stdout |

Run `touhouqa <command> --help` for all options of a command.

Predictions format: one JSON object per line, `{"id": "<qa id>", "answer": "<model output>"}`.

This is a **knowledge** benchmark: there is no train split. Holdout pages are listed in `output/splits/split_manifest.json` for internal curation only.

### Utilities

- Category statistics on crawled data: `touhouqa count-categories` → `output/category_counts.json` and `.csv`

## Configuration

Copy `.env.example` to `.env` to configure the OpenAI-compatible API used by `touhouqa extract --llm_generate_qa`.

Category filters, field blacklists and question templates are defined in [touhouqa/config.py](touhouqa/config.py).

## Repository layout

```
touhouqa/                    Python package
├── cli.py                   `touhouqa` command dispatcher
├── config.py                Extraction filters, field aliases, question templates
├── common/                  Shared data models, serialization, JSONL I/O, text helpers
├── wiki/                    THWiki crawler, wikitext parsing, category statistics
├── extraction/              QA extraction pipeline (rule-based extractor, LLM client)
└── benchmark/               Test split, Core subset filter, grading, evaluation
tests/                       pytest suite
leaderboard/                 Benchmark registry, JSON schemas, submitted entries
docs/                        Roadmap and leaderboard design documents
data/, output/               Generated crawl dumps and benchmark files (gitignored)
```

## Development

```bash
pytest
```

Large generated files (`data/*.jsonl`, `output/`) are gitignored; regenerate them locally or use the provided archives.
