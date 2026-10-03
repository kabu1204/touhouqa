from __future__ import annotations

import re
from typing import Iterator, List, Optional, Tuple


# ----------------------------
# Wikitext parsing helpers (deterministic)
# ----------------------------

RE_DEF_LINE = re.compile(r"^;([^:\n]{1,80}):\s*(.*)$")
RE_HEADING = re.compile(r"^==+.*?==+\s*$")

RE_INTERNAL_LINK = re.compile(r"\[\[([^|\]]+)\|([^\]]+)\]\]|\[\[([^\]]+)\]\]")
RE_FILE_LINK = re.compile(r"\[\[(?:文件|File):[^\]]+\]\]", re.IGNORECASE)
RE_REF = re.compile(r"<ref[^>/]*?>.*?</ref\s*>|<ref\s*/\s*>", re.IGNORECASE | re.DOTALL)
RE_HTML_TAG = re.compile(r"</?[^>]+?>")
RE_BOLD_ITALIC = re.compile(r"'''+|''+")

RE_RUBY_JA = re.compile(r"\{\{ruby-ja\|([^|{}]+)\|([^|{}]+)\}\}")


def iter_definition_list_fields(wikitext: str) -> Iterator[Tuple[str, str]]:
    """
    Extract fields from definition list blocks:
      ;字段: 值
      : continuation lines
      * bullets
    We gather continuation lines until the next ;字段: or heading.
    """
    lines = wikitext.splitlines()
    i = 0
    while i < len(lines):
        m = RE_DEF_LINE.match(lines[i])
        if not m:
            i += 1
            continue

        key = m.group(1).strip()
        first_value = m.group(2).strip()
        cont: List[str] = []
        j = i + 1
        while j < len(lines):
            line = lines[j]
            if RE_DEF_LINE.match(line) or RE_HEADING.match(line):
                break
            # treat most lines as continuation if they start with :,*,# or are non-empty.
            if line.startswith((":","*","#")) or line.strip() != "":
                cont.append(line)
            # if it's blank, keep it only if we already have continuation content
            elif cont:
                cont.append(line)
            j += 1

        block = first_value
        if cont:
            block = (block + "\n" + "\n".join(cont)).strip()
        yield key, block
        i = j


def strip_wikitext_minimal(text: str) -> str:
    """
    Minimal rendering: remove the most common wikitext markup while trying to preserve content.
    This is intentionally conservative; we avoid aggressive transformations that might change meaning.
    """
    if not text:
        return ""

    # Remove file links
    text = RE_FILE_LINK.sub("", text)

    # Remove refs
    text = RE_REF.sub("", text)

    # Ruby: default to kanji (param1).
    text = RE_RUBY_JA.sub(r"\1", text)

    # Internal links: [[A|B]] -> B, [[A]] -> A
    def _link_repl(m: re.Match) -> str:
        if m.group(2) is not None:
            return m.group(2)
        return m.group(3) or ""

    text = RE_INTERNAL_LINK.sub(_link_repl, text)

    # Bold/italic markup
    text = RE_BOLD_ITALIC.sub("", text)

    # Remove remaining HTML tags
    text = RE_HTML_TAG.sub("", text)

    # Collapse whitespace
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\s*\n\s*", "\n", text).strip()

    return text


def extract_fact_templates(text: str) -> List[Tuple[str, Optional[str], str]]:
    """
    Extract {{fact|ANSWER|SOURCE}} templates using a simple brace-depth parser.
    Returns list of (answer, source, evidence_quote).

    This handles nested templates reasonably by tracking {{ }} depth.
    """
    out: List[Tuple[str, Optional[str], str]] = []
    if not text:
        return out

    needle = "{{fact|"
    idx = 0
    while True:
        start = text.find(needle, idx)
        if start < 0:
            break

        # Parse until the matching "}}" at depth 1
        depth = 0
        j = start
        while j < len(text):
            if text.startswith("{{", j):
                depth += 1
                j += 2
                continue
            if text.startswith("}}", j):
                depth -= 1
                j += 2
                if depth == 0:
                    break
                continue
            j += 1

        if depth != 0:
            # Unbalanced; stop scanning.
            break

        template_text = text[start:j]
        idx = j

        # template_text like "{{fact|...|...}}"
        inner = template_text[len("{{fact|"):-2]  # remove "{{fact|" and "}}"

        # Split by '|' only at depth=0
        parts: List[str] = []
        buf: List[str] = []
        k = 0
        sub_depth = 0
        while k < len(inner):
            if inner.startswith("{{", k):
                sub_depth += 1
                buf.append("{{")
                k += 2
                continue
            if inner.startswith("}}", k):
                sub_depth = max(0, sub_depth - 1)
                buf.append("}}")
                k += 2
                continue
            if inner[k] == "|" and sub_depth == 0:
                parts.append("".join(buf))
                buf = []
                k += 1
                continue
            buf.append(inner[k])
            k += 1
        parts.append("".join(buf))

        answer = parts[0].strip() if parts else ""
        source = parts[1].strip() if len(parts) > 1 else None
        # Evidence quote: keep the exact template substring (short)
        evidence_quote = template_text[:200] + ("…" if len(template_text) > 200 else "")
        out.append((answer, source, evidence_quote))

    return out


