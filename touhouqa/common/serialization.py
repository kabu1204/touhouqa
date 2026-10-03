from __future__ import annotations

from typing import Dict

from .models import FactCandidate, QAItem


def qa_item_to_dict(q: QAItem) -> Dict:
    return {
        "id": q.id,
        "question": q.question,
        "answer_canonical": q.answer_canonical,
        "answer_aliases": q.answer_aliases,
        "answer_type": q.answer_type,
        "topic": q.topic,
        "source_page_title": q.source_page_title,
        "source_pageid": q.source_pageid,
        "source_oldid": q.source_oldid,
        "source_timestamp": q.source_timestamp,
        "field": q.field,
        "evidence_quote": q.evidence_quote,
        "evidence_source": q.evidence_source,
    }


def fact_candidate_to_dict(fc: FactCandidate) -> Dict:
    return {
        "pageid": fc.pageid,
        "title": fc.title,
        "revid": fc.revid,
        "timestamp": fc.timestamp,
        "field": fc.field,
        "raw_value": fc.raw_value,
        "extracted_answer": fc.extracted_answer,
        "answer_canonical": fc.answer_canonical,
        "answer_aliases": fc.answer_aliases,
        "answer_type": fc.answer_type,
        "evidence_quote": fc.evidence_quote,
        "evidence_source": fc.evidence_source,
        "rejected": fc.rejected,
        "reject_reason": fc.reject_reason,
    }


