from __future__ import annotations

import json
import logging
from typing import Any, List, Optional

from ..common.models import QAItem
from ..common.text_utils import make_deterministic_id, normalize_ws

logger = logging.getLogger(__name__)


def _extract_json_array_from_text(text: str) -> Optional[list]:
    """
    Best-effort JSON extractor for LLM responses.
    We ask the model to output a JSON array, but it may wrap it in markdown fences.
    """
    if not text:
        return None
    text = text.strip()

    # Strip common markdown fences
    if text.startswith("```"):
        parts = text.splitlines()
        # Drop first fence line
        if parts:
            parts = parts[1:]
        # Drop trailing fence line if present
        if parts and parts[-1].strip().startswith("```"):
            parts = parts[:-1]
        text = "\n".join(parts).strip()

    start = text.find("[")
    end = text.rfind("]")
    logger.debug(f"start: {start}, end: {end} ({len(text)})")
    if start < 0 or end <= start:
        return None
    snippet = text[start : end + 1]
    try:
        data = json.loads(snippet)
    except Exception:
        return None
    return data if isinstance(data, list) else None


class OpenAICompatibleChatClient:
    """
    Minimal OpenAI-compatible client using the official OpenAI Python SDK.

    Supports:
    - Responses API (`/v1/responses`) via `client.responses.create(...)`
    - Chat Completions API (`/v1/chat/completions`) via `client.chat.completions.create(...)`
    """

    def __init__(
        self,
        *,
        base_url: str,
        api_key: str,
        model: str,
        api: str = "responses",
        reasoning_effort: Optional[str] = None,
        timeout_s: int = 60,
        temperature: float = 0.2,
        max_tokens: int = 800,
    ):
        self.base_url = (base_url or "").rstrip("/")
        self.api_key = api_key
        self.model = model
        self.api = (api or "").strip().lower()
        eff = (reasoning_effort or "").strip().lower()
        self.reasoning_effort = eff if eff else None
        self.timeout_s = timeout_s
        self.temperature = temperature
        self.max_tokens = max_tokens
        if self.api not in {"responses", "chat_completions", "auto"}:
            raise ValueError("api must be one of: responses, chat_completions, auto")
        try:
            from openai import OpenAI
        except Exception as e:  # pragma: no cover
            raise RuntimeError(
                "openai package is required for --llm_generate_qa. Install it via: pip install openai"
            ) from e

        # NOTE: base_url should typically end with "/v1" for OpenAI-compatible servers.
        self._client = OpenAI(
            api_key=self.api_key,
            base_url=self.base_url,
            timeout=self.timeout_s,
        )

    def chat(self, *, system: str, user: str) -> str:
        if self.api == "chat_completions":
            return self._chat_via_chat_completions(system=system, user=user)
        if self.api == "responses":
            return self._chat_via_responses(system=system, user=user)

        # auto: try Responses first, then fall back to Chat Completions if the server
        # doesn't support /v1/responses (common for OpenAI-compatible gateways).
        try:
            return self._chat_via_responses(system=system, user=user)
        except Exception as e:
            status = getattr(e, "status_code", None)
            if status is None:
                status = getattr(getattr(e, "response", None), "status_code", None)
            if status == 404:
                logger.warning(
                    "Responses API not supported by %s; falling back to Chat Completions API (error=%r)",
                    self.base_url,
                    e,
                )
                return self._chat_via_chat_completions(system=system, user=user)
            raise

    def _chat_via_responses(self, *, system: str, user: str) -> str:
        kwargs: dict = {
            "model": self.model,
            "instructions": system,
            "input": user,
            "temperature": self.temperature,
            "max_output_tokens": self.max_tokens,
        }
        if self.reasoning_effort is not None:
            kwargs["reasoning"] = {"effort": self.reasoning_effort}
        try:
            resp = self._client.responses.create(**kwargs)
        except TypeError:
            # Older SDK versions may not accept `reasoning`; retry without it.
            kwargs.pop("reasoning", None)
            resp = self._client.responses.create(**kwargs)

        # Preferred: SDK convenience property.
        out_text = getattr(resp, "output_text", None)
        if isinstance(out_text, str) and out_text:
            return out_text

        # Fallback: best-effort extraction from the structured response.
        return _extract_output_text_from_response(resp)

    def _chat_via_chat_completions(self, *, system: str, user: str) -> str:
        kwargs: dict = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system},
                {"role": "user", "content": user},
            ],
            "temperature": self.temperature,
            "max_tokens": self.max_tokens,
        }
        if self.reasoning_effort is not None:
            kwargs["reasoning_effort"] = self.reasoning_effort
        try:
            resp = self._client.chat.completions.create(**kwargs)
        except TypeError:
            # Older SDK versions may not accept `reasoning_effort`; retry without it.
            kwargs.pop("reasoning_effort", None)
            resp = self._client.chat.completions.create(**kwargs)
        try:
            choices = getattr(resp, "choices", None) or []
            msg = (choices[0].message if choices else None)
            content = getattr(msg, "content", None)
            return content or ""
        except Exception:
            return ""


def _extract_output_text_from_response(resp: Any) -> str:
    """
    Best-effort extraction of text from a Responses API object.

    We primarily rely on `resp.output_text`, but keep this as a defensive fallback
    for older SDK versions / alternate response shapes.
    """
    try:
        chunks: List[str] = []
        output = getattr(resp, "output", None) or []
        for item in output:
            content = getattr(item, "content", None)
            if content is None and isinstance(item, dict):
                content = item.get("content")
            content = content or []

            for c in content:
                if isinstance(c, dict):
                    if c.get("type") in ("output_text", "text") and isinstance(c.get("text"), str):
                        chunks.append(c["text"])
                else:
                    c_type = getattr(c, "type", None)
                    c_text = getattr(c, "text", None)
                    if c_type in ("output_text", "text") and isinstance(c_text, str):
                        chunks.append(c_text)
        return "".join(chunks)
    except Exception:
        return ""


def generate_qa_from_plain_text(
    *,
    client: OpenAICompatibleChatClient,
    page_title: str,
    pageid: int,
    revid: int,
    timestamp: str,
    text: str,
    max_items: int,
) -> List[QAItem]:
    """
    Use an LLM to extract short, answerable QA pairs from the given plain text.

    Guardrails:
    - Model must output a JSON array.
    - evidence_quote must be copied verbatim from the provided text (whitespace-normalized check).
    - answer must appear verbatim inside evidence_quote.
    """
    if not text:
        return []

    system = (
        "You are a strict information extraction system for building a Touhou Project knowledge benchmark dataset. "
        "Only extract facts explicitly stated in the provided text. "
        "Do not use outside knowledge. Do not paraphrase evidence quotes."
    )
    user = (
        "Context: These QA pairs will be used as a Touhou Project knowledge benchmark.\n"
        "Goal: Prefer meaningful, distinctive facts that help evaluate Touhou-related knowledge.\n"
        "Task: Create up to the number specified by Max items in Inputs high-quality QA pairs in Chinese.\n"
        "Output: a JSON array. Each item MUST have keys:\n"
        '  - "question": string\n'
        '  - "answer": string (short)\n'
        '  - "evidence_quote": string (a DIRECT quote copied from the text)\n'
        "Rules:\n"
        "- The question MUST be self-contained.\n"
        "- IMPORTANT: Each question MUST start with the exact Required question prefix in Inputs.\n"
        "- Do NOT use pronouns or vague references like 这/该/此/本页/本文/上述/他/她/它.\n"
        "- Prefer facts about the main subject (the Page title). Avoid QA about other entities unless the relation is explicit.\n"
        "- Avoid low-value catalog/infobox trivia.\n"
        "- If the only extractable items are low-value trivia, output [].\n"
        "- The answer must appear verbatim inside evidence_quote.\n"
        "- evidence_quote must appear verbatim inside the provided Text.\n"
        "- Avoid time-varying claims (e.g., 目前/现在/最近/截至).\n"
        "- Avoid sensitive or personal info.\n"
        "- If no good items, output [].\n"
        "Return ONLY JSON.\n"
        "\n"
        "Inputs:\n"
        f"Max items: {max_items}\n"
        f"Page title (main subject): {page_title}\n"
        f"Required question prefix: 【{page_title}】\n"
        f"Text:\n{text}\n"
    )

    raw = client.chat(system=system, user=user)
    arr = _extract_json_array_from_text(raw)
    if not arr:
        return []

    text_norm = normalize_ws(text)

    out: List[QAItem] = []
    for obj in arr:
        if not isinstance(obj, dict):
            continue
        q = str(obj.get("question") or "").strip()
        a = str(obj.get("answer") or "").strip()
        ev = str(obj.get("evidence_quote") or "").strip()
        if not q or not a or not ev:
            continue

        # Ensure the question is self-contained by injecting page title context if missing.
        # We prefer the model to follow the "【{page_title}】" prefix rule, but keep this
        # fallback for robustness.
        if page_title and page_title not in q:
            prefix = f"【{page_title}】"
            q2 = q.lstrip()
            q2_lower = q2.lower()
            needs_de = True
            if q2.startswith(("这", "该", "本", "此")):
                needs_de = False
            if "的" in q2[:6]:
                needs_de = False
            if q2_lower.startswith(("tr.", "track")) or q2.startswith(("Tr.", "TR.", "曲目", "音轨", "歌曲")):
                needs_de = False
            q = prefix + (("的" + q2) if needs_de else q2)

        if a not in ev:
            continue
        if normalize_ws(ev) not in text_norm:
            continue

        qid = make_deterministic_id(str(pageid), str(revid), "llm", q, a, ev)
        out.append(QAItem(
            id=qid,
            question=q,
            answer_canonical=a,
            answer_aliases=[a],
            answer_type="text_short",
            topic="llm",
            source_page_title=page_title,
            source_pageid=pageid,
            source_oldid=revid,
            source_timestamp=timestamp,
            field="llm_plain_text",
            evidence_quote=ev,
            evidence_source=None,
        ))

    return out


