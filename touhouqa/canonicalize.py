from __future__ import annotations

import re
from typing import List, Optional, Tuple

from .config import (
    DYNAMIC_MARKERS,
    KEY_BLACKLIST,
    KEY_SUBSTRING_BLACKLIST,
    MAX_ANSWER_CHARS,
    REJECT_MULTI_VALUE_ANSWER,
)
from .utils import dedup_preserve_order


RE_DATE_CN = re.compile(r"(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日")
RE_NUMBER_CM = re.compile(r"^\s*(\d{2,3})\s*(?:厘米|cm)\s*$", re.IGNORECASE)
RE_NUMBER_KG = re.compile(r"^\s*(\d{1,3})\s*(?:公斤|kg)\s*$", re.IGNORECASE)


def canonicalize_date(value: str) -> Optional[str]:
    m = RE_DATE_CN.search(value)
    if not m:
        return None
    y, mo, d = int(m.group(1)), int(m.group(2)), int(m.group(3))
    try:
        return f"{y:04d}-{mo:02d}-{d:02d}"
    except Exception:
        return None


def canonicalize_number_with_unit(value: str) -> Tuple[Optional[str], Optional[str], List[str]]:
    """
    Return (canonical, answer_type, aliases) for simple numeric + unit patterns.
    canonical is numeric string only.
    """
    v = value.strip()

    m = RE_NUMBER_CM.match(v)
    if m:
        n = m.group(1)
        aliases = [v, f"{n}厘米", f"{n} cm"]
        return n, "number_cm", dedup_preserve_order(aliases)

    m = RE_NUMBER_KG.match(v)
    if m:
        n = m.group(1)
        aliases = [v, f"{n}公斤", f"{n} kg"]
        return n, "number_kg", dedup_preserve_order(aliases)

    # Bare number
    m = re.match(r"^\s*(\d{1,4})\s*$", v)
    if m:
        n = m.group(1)
        return n, "number", [n]

    return None, None, []


def is_dynamic_or_sensitive(field: str, raw_value: str) -> Optional[str]:
    f = field.strip()
    if f in KEY_BLACKLIST:
        return f"blacklisted field: {f}"
    for sub in KEY_SUBSTRING_BLACKLIST:
        if sub in f:
            return f"sensitive field contains: {sub}"
    for marker in DYNAMIC_MARKERS:
        if marker in raw_value:
            return f"dynamic marker present: {marker}"
    return None


def is_plausibly_single_answer(clean_answer: str) -> bool:
    """
    Heuristic: reject multi-valued answers (very common with '、', commas).
    Allow parentheses, but avoid lists.
    """
    a = clean_answer.strip()
    if not a:
        return False
    if len(a) > MAX_ANSWER_CHARS:
        return False

    if not REJECT_MULTI_VALUE_ANSWER:
        return True

    # Very rough multi-answer signals (tune later)
    if "\n" in a:
        return False
    if "、" in a or "，" in a:
        return False
    if "," in a:
        return False

    return True


