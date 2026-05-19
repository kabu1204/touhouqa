#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Score model predictions against a TouhouQA gold JSONL (typically output/splits/test.jsonl).

Predictions JSONL format (one object per line):
  {"id": "<qa id>", "answer": "<model output>"}

Example:
  python eval.py --gold output/splits/test.jsonl --predictions preds.jsonl
"""

from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from typing import Dict, List

from touhouqa.grading import is_answer_correct
from touhouqa.io_utils import load_jsonl_by_id


def evaluate(*, gold: Dict[str, Dict], predictions: Dict[str, Dict]) -> Dict:
    correct = 0
    missing = 0
    wrong_ids: List[str] = []
    by_topic_correct: Dict[str, int] = defaultdict(int)
    by_topic_total: Dict[str, int] = defaultdict(int)
    gold_ids = set(gold)

    for qid, g in gold.items():
        topic = str(g.get("topic") or "unknown")
        by_topic_total[topic] += 1

        pred_row = predictions.get(qid)
        if pred_row is None:
            missing += 1
            if len(wrong_ids) < 20:
                wrong_ids.append(qid)
            continue

        if is_answer_correct(prediction=str(pred_row.get("answer") or ""), gold=g):
            correct += 1
            by_topic_correct[topic] += 1
        elif len(wrong_ids) < 20:
            wrong_ids.append(qid)

    total = len(gold)
    by_topic = {
        topic: {
            "correct": by_topic_correct[topic],
            "total": n,
            "accuracy": (by_topic_correct[topic] / n) if n else 0.0,
        }
        for topic, n in sorted(by_topic_total.items())
    }

    return {
        "total": total,
        "correct": correct,
        "accuracy": (correct / total) if total else 0.0,
        "missing_predictions": missing,
        "extra_predictions": sum(1 for k in predictions if k not in gold_ids),
        "by_topic": by_topic,
        "sample_wrong_ids": wrong_ids,
    }


def main() -> None:
    ap = argparse.ArgumentParser(description="Evaluate TouhouQA predictions.")
    ap.add_argument("--gold", required=True, help="Gold QA JSONL (e.g. output/splits/test.jsonl).")
    ap.add_argument("--predictions", required=True, help="Model predictions JSONL.")
    ap.add_argument("--verbose", action="store_true", help="Print sample wrong/missing ids to stderr.")
    args = ap.parse_args()

    gold = load_jsonl_by_id(args.gold)
    if not gold:
        raise SystemExit(f"No gold rows loaded from {args.gold}")

    report = evaluate(gold=gold, predictions=load_jsonl_by_id(args.predictions))
    print(json.dumps(report, ensure_ascii=False, indent=2))

    if args.verbose and report.get("sample_wrong_ids"):
        print("Sample wrong/missing ids:", file=sys.stderr)
        for qid in report["sample_wrong_ids"]:
            print(f"  {qid}", file=sys.stderr)


if __name__ == "__main__":
    main()
