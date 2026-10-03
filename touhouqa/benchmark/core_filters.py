from __future__ import annotations

import re
from typing import Dict, List, Optional, Tuple

from ..config import CATEGORY_BLACKLIST, CATEGORY_SUBSTRING_BLACKLIST

# Stricter than extraction: drop noisy page types from the public Core benchmark.
CORE_CATEGORY_SUBSTRING_BLACKLIST = [
    *CATEGORY_SUBSTRING_BLACKLIST,
    "二次设定",
    "考据",
    "待完成",
    "现实人物",
    "出版物",
    "使用了翻译表",
    "含有受损",
]

CORE_TITLE_SUBSTRING_BLACKLIST = [
    "/分析与考据",
    "/二次设定",
    "/游戏解说",
    "/攻略",
]

# Questions that are often subjective or multi-answer.
CORE_QUESTION_SUBSTRING_BLACKLIST = [
    "直译",
    "寓意",
    "象征",
    "如何理解",
    "你认为",
    "印象",
    "评价",
]

CORE_ANSWER_SUBSTRING_BLACKLIST = [
    "或者",
    "多种解释",
    "各种各样的",
]

_RE_QUESTION_PREFIX = re.compile(r"^【(.+?)】")


def _normalize_categories(row: Dict) -> List[str]:
    cats = row.get("categories")
    if not cats:
        return []
    if isinstance(cats, str):
        return [cats]
    return [str(c) for c in cats if c is not None]


def reject_reason_for_core(row: Dict, *, max_answer_chars: int) -> Optional[str]:
    """Return a rejection reason string, or None if the row passes Core filters."""
    cats = _normalize_categories(row)
    if not cats:
        return "empty_categories"

    for c in cats:
        if c in CATEGORY_BLACKLIST:
            return f"category_exact:{c}"
        for sub in CORE_CATEGORY_SUBSTRING_BLACKLIST:
            if sub and sub in c:
                return f"category_substring:{sub}"

    title = str(row.get("source_page_title") or "")
    for sub in CORE_TITLE_SUBSTRING_BLACKLIST:
        if sub in title:
            return f"title_substring:{sub}"

    question = str(row.get("question") or "").strip()
    answer = str(row.get("answer_canonical") or "").strip()
    evidence = str(row.get("evidence_quote") or "").strip()

    if not question or not answer or not evidence:
        return "missing_q_a_evidence"

    m = _RE_QUESTION_PREFIX.match(question)
    if not m:
        return "missing_question_prefix"
    prefix_title = m.group(1).strip()
    if prefix_title != title.strip():
        return "question_title_mismatch"

    if len(answer) > max_answer_chars:
        return f"answer_too_long:{len(answer)}"

    if len(evidence) < 4:
        return "evidence_too_short"

    if answer not in evidence:
        return "answer_not_in_evidence"

    q_lower = question
    for sub in CORE_QUESTION_SUBSTRING_BLACKLIST:
        if sub in q_lower:
            return f"question_substring:{sub}"

    for sub in CORE_ANSWER_SUBSTRING_BLACKLIST:
        if sub in answer:
            return f"answer_substring:{sub}"

    for marker in ("目前", "现在", "最近", "截至"):
        if marker in evidence or marker in answer:
            return f"dynamic:{marker}"

    return None
