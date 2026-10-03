from __future__ import annotations

import hashlib
import re
import uuid
from typing import List


_UUID_NAMESPACE = uuid.UUID("12345678-1234-5678-1234-567812345678")


def make_deterministic_id(*parts: str) -> str:
    """
    Stable UUID-like ID based on content.
    """
    payload = "|".join(parts)
    return str(uuid.uuid5(_UUID_NAMESPACE, payload))


def hash_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def normalize_ws(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def dedup_preserve_order(items: List[str]) -> List[str]:
    seen = set()
    out: List[str] = []
    for it in items:
        it2 = it.strip()
        if not it2:
            continue
        if it2 in seen:
            continue
        seen.add(it2)
        out.append(it2)
    return out


