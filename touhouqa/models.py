from __future__ import annotations

import dataclasses
from dataclasses import dataclass
from typing import List, Optional


@dataclass
class FactCandidate:
    pageid: int
    title: str
    revid: int
    timestamp: str

    field: str
    raw_value: str          # raw block (wikitext)
    extracted_answer: str   # extracted from {{fact}} or raw_value cleanup

    evidence_quote: str     # small snippet from raw_value
    evidence_source: Optional[str] = None  # e.g., the 2nd param of {{fact|...|SOURCE}}
    section: Optional[str] = None

    # v0 canonicalization
    answer_canonical: Optional[str] = None
    answer_aliases: List[str] = dataclasses.field(default_factory=list)
    answer_type: Optional[str] = None

    # gating flags
    rejected: bool = False
    reject_reason: Optional[str] = None


@dataclass
class QAItem:
    id: str
    question: str
    answer_canonical: str
    answer_aliases: List[str]
    answer_type: str
    topic: str

    source_page_title: str
    source_pageid: int
    source_oldid: int
    source_timestamp: str

    field: str
    evidence_quote: str
    evidence_source: Optional[str] = None


