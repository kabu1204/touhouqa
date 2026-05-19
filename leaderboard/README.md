# TouhouQA Leaderboard data

Public leaderboard entries and benchmark registry for the TouhouQA knowledge benchmark.

**Design doc:** [docs/LEADERBOARD.md](../docs/LEADERBOARD.md)

## Layout

- `benchmarks/` — frozen benchmark definitions (`touhouqa-core-v1`, etc.)
- `schema/` — JSON Schema for entries and reports
- `data/<benchmark_id>/` — one JSON file per submission (after verification)
- `examples/` — format reference only

## Submit (MVP)

1. Run inference on the public questions file for your target benchmark.
2. Produce `predictions.jsonl` (`id`, `answer` per line).
3. Ask a maintainer to evaluate against hidden gold, or open a PR with predictions + eval report.
4. Add `data/<benchmark_id>/<your-entry-slug>.json` following `schema/entry.schema.json`.

Official prompt templates (when published): `prompts/`.
