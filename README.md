# TouhouQA

Knowledge benchmark for Touhou Project, built from [THWiki](https://thwiki.cc) (thwiki.cc).

See [ROADMAP.md](ROADMAP.md) for planned work and v1 release criteria.

Leaderboard design (data model + website): [docs/LEADERBOARD.md](docs/LEADERBOARD.md).

## Pipeline

1. **Crawl** wiki pages: `python crawl.py` → `data/*.jsonl`
2. **Extract** QA (rules + optional LLM): `python extract.py` → `output/qa.jsonl`
3. **Prepare benchmark split**: `python prepare_qa_splits.py` → `output/qa_clean.jsonl`, `output/splits/test.jsonl`
4. **Filter Core subset** (optional): `python filter_qa_core.py` → `output/splits/qa_core.jsonl` + random audit sample
5. **Evaluate** predictions: `python eval.py --gold output/splits/qa_core.jsonl --predictions preds.jsonl`

Predictions format: `{"id": "<qa id>", "answer": "<model output>"}` per line.

This is a **knowledge** benchmark: there is no train split. Holdout pages are listed in `output/splits/split_manifest.json` for internal curation only.

## Configuration

Copy `env.example` to `.env` for OpenAI-compatible API settings when using `--llm_generate_qa`.

Category filters and field blacklists: [touhouqa/config.py](touhouqa/config.py).

## Utilities

- **Category stats** on crawled data: `python count_categories.py` → `output/category_counts.json` / `.csv`

## Data layout

Large generated files (`data/*.jsonl`, `output/`) are gitignored; regenerate locally or use provided archives.
