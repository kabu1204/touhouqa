# TouhouQA Roadmap

Knowledge benchmark for [Touhou Project](https://thwiki.cc), sourced from THWiki. This document tracks what exists today and planned work toward a **publishable, frozen v1 benchmark**.

**Principles**

- **Knowledge eval only** — measure what models already know; no train split for fine-tuning.
- **Evidence-grounded** — answers traceable to wiki text (`evidence_quote`, page revision metadata).
- **Page-level splits** — all QA from the same wiki page live in one split (no leakage across test / holdout).

---

## Current status (baseline)

| Component | Status | Notes |
|-----------|--------|--------|
| Wiki crawl (`crawl.py`) | Done | ~105k pages, 10 namespaces; main ns sharded in `data/` |
| QA extraction (`extract.py`) | Done | Rules (infobox) + optional LLM from `plain_text` |
| Raw QA pool | Done | `output/qa.jsonl` — ~23.2k items |
| Dedup + test split (`prepare_qa_splits.py`) | Done | `qa_clean.jsonl`, `splits/test.jsonl` (~3.4k QA, 903 pages) |
| Grading (`touhouqa/grading.py`, `eval.py`) | Done | Exact match on canonical + aliases |
| Baseline model runs | Not started | — |
| Public release package | Not started | — |
| Quality audit / Core subset | Done | `qa_core.jsonl` (~2.5k QA); sample audit in `output/splits/` |
| Leaderboard design | Done | [docs/LEADERBOARD.md](docs/LEADERBOARD.md), `leaderboard/` schemas |
| Leaderboard website | Not started | Static site reading `leaderboard/data/` |

---

## Phase 0 — Stabilize pipeline (maintenance)

**Goal:** Reproducible builds from crawl → benchmark test set.

- [x] Crawl with resume (`data/crawl_progress.json`)
- [x] Extract with category filters ([touhouqa/config.py](touhouqa/config.py))
- [x] Dedup + page-level test split + manifest ([prepare_qa_splits.py](prepare_qa_splits.py))
- [x] Eval CLI ([eval.py](eval.py))
- [ ] Pin benchmark version in manifest (`benchmark_version`, `created_at`, git commit hash)
- [ ] Document full reproduce steps in [README.md](README.md) (data archive + env vars)

---

## Phase 1 — Dataset quality (v1 blocker)

**Goal:** A **Core** benchmark subset that maintainers trust (~1k–3k QA), not just maximal volume.

| Task | Priority | Description |
|------|----------|-------------|
| Automated QA filters | High | Drop low-value / noisy items (overlong answers, non–page-subject questions, weak evidence) |
| Category-aware curation | High | Prefer official content (角色 / 作品 / 原曲); tighten filters for 二次设定、考据、同人 |
| Per-page cap | Medium | e.g. max 3–5 QA per page after dedup to reduce single-page dominance |
| Human spot-check | High | Sample 200–500 items; target >95% accept rate on Core |
| `qa_core.jsonl` | High | Frozen subset derived from `test.jsonl` or holdout, with explicit inclusion rules |
| Dedup v2 | Low | Near-duplicate questions (embedding or fuzzy match), not only exact (Q, A) |

**Non-goals for Phase 1:** More crawling, more LLM regeneration on full wiki.

---

## Phase 2 — Benchmark packaging (v1 release)

**Goal:** Others can run the benchmark without access to hidden answers in the wild.

| Task | Priority | Description |
|------|----------|-------------|
| `test_questions.jsonl` | High | Public: `id`, `question` only |
| Hidden gold | High | Answers for organizers / HF dataset gated tab; not in public git |
| Dataset card | High | Size, language, sources, known biases, THWiki attribution |
| License / attribution | High | THWiki terms, crawl etiquette, derivative dataset policy |
| Host artifacts | Medium | Hugging Face Datasets or release tarball (`data.tar.gz` pattern) |
| Freeze manifest | High | Immutable `split_manifest.json` + checksums for `test.jsonl` / Core |

---

## Phase 3 — Evaluation harness

**Goal:** One-command baselines and comparable leaderboard numbers.

| Task | Priority | Description |
|------|----------|-------------|
| `run_benchmark.py` | High | Load questions → call OpenAI-compatible API → write `predictions.jsonl` → invoke `eval.py` |
| Prompt template | High | Fixed system/user prompt (Chinese), temperature 0, documented |
| Baseline models | High | 2–3 tiers (e.g. small / mid / strong) on **Core** and full test |
| Report by domain | Medium | Breakdown from `categories` → `character` / `music` / `work` / `spellcard` / `other` |
| Grading extensions | Low | Optional fuzzy match for names; date normalization in [touhouqa/grading.py](touhouqa/grading.py) |
| Leaderboard data + site | High | [docs/LEADERBOARD.md](docs/LEADERBOARD.md): PR submissions → `leaderboard/data/`; Astro/Next static site |
| `build_entry.py` | Medium | `eval_report.json` → `entry.json` draft |
| `touhouqa/domains.py` | Medium | `by_domain` breakdown for table sparklines |
| `verify_submission.py` | Medium | PR CI: predictions coverage + re-run `eval.py` |

---

## Phase 4 — Extraction improvements (v1.1+)

**Goal:** Higher precision without relying only on LLM plain-text extraction.

| Task | Priority | Description |
|------|----------|-------------|
| Expand rule templates | Medium | 种族、能力、初登场、主题曲等 + [QUESTION_TEMPLATES](touhouqa/config.py) |
| Infobox / template parsers | Medium | Parse common `{{…}}` blocks beyond definition lists |
| LLM as validator | Low | Second pass: “is this QA answerable from evidence only?” |
| Regeneration policy | Low | Re-run LLM only on holdout pages missing Core coverage |

---

## Phase 5 — Community & longevity

**Goal:** Sustainable benchmark after v1.

- [ ] **v2 test draw** — new page sample from `holdout_pageids` (new seed, document in manifest)
- [ ] **Living wiki** — policy for THWiki edits (freeze `source_oldid` vs periodic refresh)
- [ ] **Hard subset** — expert-verified tier for research comparisons
- [ ] **Multilingual** — optional JA/ZH parallel questions where wiki has stable translations
- [ ] **Contamination notes** — document overlap risk with common pretraining corpora (best-effort)

---

## Suggested timeline

```text
Now          Phase 1 (quality + Core)     Phase 2–3 (release + baselines)     Phase 4+
────────     ────────────────────────     ─────────────────────────────     ────────
pipeline     filters, audit, qa_core      test_questions, HF, run_benchmark  rules / v2
frozen       2–4 weeks                    2–3 weeks                          ongoing
```

---

## Version targets

| Version | Scope | Exit criteria |
|---------|--------|----------------|
| **v0.1** (current) | Internal test split + eval | `test.jsonl` + `eval.py` work end-to-end |
| **v1.0** | Public benchmark | `qa_core` + `test_questions` + baselines + dataset card |
| **v1.1** | Quality + coverage | Higher precision rules; domain breakdown in reports |
| **v2.0** | New test draw | Fresh holdout → new frozen test; v1 remains comparable |

---

## How to contribute (when open)

1. Run quality filters on a branch; report precision/recall on a labeled sample.
2. Propose new `QUESTION_TEMPLATES` with wikitext examples from THWiki.
3. Submit baseline results via PR adding `leaderboard/data/<benchmark_id>/<slug>.json` (see [docs/LEADERBOARD.md](docs/LEADERBOARD.md)).

For day-to-day commands, see [README.md](README.md).
