from __future__ import annotations

import logging
from typing import Dict, List, Optional

from .canonicalize import (
    canonicalize_date,
    canonicalize_number_with_unit,
    is_dynamic_or_sensitive,
    is_plausibly_single_answer,
)
from .config import DYNAMIC_MARKERS, FIELD_ALIASES, QUESTION_TEMPLATES
from .models import FactCandidate, QAItem
from .utils import dedup_preserve_order, make_deterministic_id
from .wikitext import extract_fact_templates, iter_definition_list_fields, strip_wikitext_minimal

logger = logging.getLogger(__name__)


def normalize_field_name(field: str) -> str:
    f = field.strip()
    return FIELD_ALIASES.get(f, f)


class TouhouQAExtractorV0:
    def __init__(self) -> None:
        self.no_template_fields: set[str] = set()

    def extract_facts(self, record: Dict) -> List[FactCandidate]:
        wikitext = record.get("wikitext") or ""
        pageid = int(record.get("pageid"))
        title = str(record.get("title"))
        revid = int(record.get("revid"))
        timestamp = str(record.get("timestamp") or "")

        logger.debug(
            "Extracting facts for page '%s' (pageid=%s, revid=%s)", title, pageid, revid
        )

        facts: List[FactCandidate] = []

        for raw_field, raw_block in iter_definition_list_fields(wikitext):
            field = normalize_field_name(raw_field)

            reject_reason = is_dynamic_or_sensitive(field, raw_block)
            if reject_reason:
                logger.debug(
                    "Rejecting field '%s' on page '%s': %s", field, title, reject_reason
                )
                facts.append(FactCandidate(
                    pageid=pageid, title=title, revid=revid, timestamp=timestamp,
                    field=field, raw_value=raw_block, extracted_answer="",
                    evidence_quote=raw_block[:200] + ("…" if len(raw_block) > 200 else ""),
                    rejected=True, reject_reason=reject_reason,
                ))
                continue

            # Prefer {{fact|ANSWER|SOURCE}} if present, otherwise use minimal stripped text.
            fact_templates = extract_fact_templates(raw_block)

            if fact_templates:
                logger.debug(
                    "Field '%s' on page '%s' has %d fact templates",
                    field,
                    title,
                    len(fact_templates),
                )
                for ans, src, evq in fact_templates:
                    ans_clean = strip_wikitext_minimal(ans)
                    facts.append(FactCandidate(
                        pageid=pageid, title=title, revid=revid, timestamp=timestamp,
                        field=field, raw_value=raw_block,
                        extracted_answer=ans_clean,
                        evidence_quote=evq,
                        evidence_source=src,
                    ))
            else:
                # No {{fact}}, try the stripped block as a single answer candidate.
                logger.debug("Field '%s' on page '%s' using stripped block", field, title)
                ans_clean = strip_wikitext_minimal(raw_block)
                evq = raw_block[:200] + ("…" if len(raw_block) > 200 else "")
                facts.append(FactCandidate(
                    pageid=pageid, title=title, revid=revid, timestamp=timestamp,
                    field=field, raw_value=raw_block,
                    extracted_answer=ans_clean,
                    evidence_quote=evq,
                    evidence_source=None,
                ))

        return facts

    def canonicalize_fact(self, fc: FactCandidate) -> FactCandidate:
        """
        Deterministic canonicalization for v0.

        Note: we do not call LLM. We set up a clean place to do so later.
        """
        if fc.rejected:
            logger.debug(
                "Skip canonicalization (already rejected): title=%s field=%s reason=%s",
                fc.title,
                fc.field,
                fc.reject_reason,
            )
            return fc

        field = fc.field
        ans = (fc.extracted_answer or "").strip()
        if not ans:
            fc.rejected = True
            fc.reject_reason = "empty extracted answer"
            logger.debug(
                "Rejecting fact: empty answer title=%s field=%s", fc.title, fc.field
            )
            return fc

        # Hard dynamic check on the answer text too
        for marker in DYNAMIC_MARKERS:
            if marker in fc.raw_value or marker in ans:
                fc.rejected = True
                fc.reject_reason = f"dynamic marker present: {marker}"
                logger.debug(
                    "Rejecting fact: dynamic marker '%s' found title=%s field=%s",
                    marker,
                    fc.title,
                    fc.field,
                )
                return fc

        # Field-specific canonicalization
        if field == "生日":
            iso = canonicalize_date(ans)
            if iso:
                fc.answer_canonical = iso
                fc.answer_aliases = dedup_preserve_order([ans, iso])
                fc.answer_type = "date"
            else:
                fc.rejected = True
                fc.reject_reason = "failed to canonicalize date"
                logger.debug(
                    "Rejecting fact: failed to canonicalize date title=%s field=%s value=%s",
                    fc.title,
                    fc.field,
                    ans,
                )
            return fc

        # Numeric
        n, typ, aliases = canonicalize_number_with_unit(ans)
        if n and typ:
            fc.answer_canonical = n
            fc.answer_aliases = aliases
            fc.answer_type = typ
            logger.debug(
                "Canonicalized numeric fact title=%s field=%s value=%s type=%s",
                fc.title,
                fc.field,
                fc.answer_canonical,
                fc.answer_type,
            )
            return fc

        # Short text / names: keep as-is but enforce single-answer heuristics
        ans2 = ans.replace("\u00a0", " ").strip()
        if not is_plausibly_single_answer(ans2):
            fc.rejected = True
            fc.reject_reason = "not a single short answer (heuristic)"
            logger.debug(
                "Rejecting fact: not single short answer title=%s field=%s value=%s",
                fc.title,
                fc.field,
                ans2,
            )
            return fc

        # If the answer still contains lots of leftover template braces, reject in v0.
        if "{{" in ans2 or "}}" in ans2:
            fc.rejected = True
            fc.reject_reason = "unhandled template remnants"
            logger.debug(
                "Rejecting fact: template remnants title=%s field=%s value=%s",
                fc.title,
                fc.field,
                ans2,
            )
            return fc

        fc.answer_canonical = ans2
        fc.answer_aliases = [ans2]
        fc.answer_type = self._guess_answer_type(field, ans2)
        logger.debug(
            "Canonicalized fact title=%s field=%s answer=%s type=%s",
            fc.title,
            fc.field,
            fc.answer_canonical,
            fc.answer_type,
        )
        return fc

    def _guess_answer_type(self, field: str, answer: str) -> str:
        # Very small heuristic set for v0
        if field in ("本名",):
            return "person_name"
        if field in ("出生地",):
            return "place"
        if field in ("座右铭",):
            return "text_short"
        return "text_short"

    def to_qa_item(self, fc: FactCandidate) -> Optional[QAItem]:
        """
        Generate a QA item only if:
        - canonicalized successfully
        - field has a question template in v0
        """
        if fc.rejected:
            logger.debug(
                "Skipping QA for rejected fact title=%s field=%s reason=%s",
                fc.title,
                fc.field,
                fc.reject_reason,
            )
            return None
        if not fc.answer_canonical or not fc.answer_type:
            logger.debug(
                "Skipping QA: missing canonical answer/title=%s field=%s type=%s",
                fc.title,
                fc.field,
                fc.answer_type,
            )
            return None

        tpl = QUESTION_TEMPLATES.get(fc.field)
        if not tpl:
            # No question template yet; keep in facts output for later LLM/template expansion.
            logger.debug(
                "Skipping QA: no template for field=%s title=%s", fc.field, fc.title
            )
            self.no_template_fields.add(fc.field)
            return None

        question = tpl["q"].format(title=fc.title)
        topic = tpl["topic"]
        answer_type = tpl["type"]

        # If the template expects a specific answer_type, enforce it in v0
        if answer_type != fc.answer_type:
            # Allow "number" for numeric templates if unit was missing
            if not (answer_type.startswith("number") and fc.answer_type in ("number", "number_cm", "number_kg")):
                logger.debug(
                    "Skipping QA: type mismatch title=%s field=%s tpl=%s fact=%s",
                    fc.title,
                    fc.field,
                    answer_type,
                    fc.answer_type,
                )
                return None

        qid = make_deterministic_id(
            str(fc.pageid), str(fc.revid), fc.field, fc.answer_canonical, question
        )

        logger.debug(
            "Emitting QA item %s for title=%s field=%s", qid, fc.title, fc.field
        )
        return QAItem(
            id=qid,
            question=question,
            answer_canonical=fc.answer_canonical,
            answer_aliases=fc.answer_aliases,
            answer_type=answer_type,
            topic=topic,
            source_page_title=fc.title,
            source_pageid=fc.pageid,
            source_oldid=fc.revid,
            source_timestamp=fc.timestamp,
            field=fc.field,
            evidence_quote=fc.evidence_quote,
            evidence_source=fc.evidence_source,
        )


