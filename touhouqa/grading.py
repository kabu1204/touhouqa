from __future__ import annotations

import re
import unicodedata
from typing import Dict, Set

from .utils import normalize_ws

_TRAILING_PUNCT_RE = re.compile(r"^[.。．,，;；:：!！?？]+|[.。．,，;；:：!！?？]+$")


def normalize_answer(text: str) -> str:
    """
    Normalize an answer string for dedup keys and grading comparison.
    """
    if not text:
        return ""
    s = unicodedata.normalize("NFKC", str(text))
    s = normalize_ws(s)
    s = _TRAILING_PUNCT_RE.sub("", s).strip()
    # Case-fold ASCII letters only; leave CJK unchanged.
    return s.casefold()


def _gold_answer_variants(gold: Dict) -> Set[str]:
    variants: Set[str] = set()
    canonical = gold.get("answer_canonical")
    if canonical is not None and str(canonical).strip():
        variants.add(normalize_answer(str(canonical)))
    aliases = gold.get("answer_aliases") or []
    if isinstance(aliases, str):
        aliases = [aliases]
    for a in aliases:
        if a is not None and str(a).strip():
            variants.add(normalize_answer(str(a)))
    variants.discard("")
    return variants


def is_answer_correct(*, prediction: str, gold: Dict) -> bool:
    pred = normalize_answer(prediction)
    if not pred:
        return False
    return pred in _gold_answer_variants(gold)


def dedup_key_for_row(row: Dict) -> tuple[str, str]:
    q = normalize_answer(str(row.get("question") or ""))
    a = normalize_answer(str(row.get("answer_canonical") or ""))
    return q, a
