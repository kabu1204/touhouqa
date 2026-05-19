from __future__ import annotations

"""
Centralized configuration/constants for TouhouQA extraction.

Keep these values stable unless you intentionally want to change dataset
behavior. If you need runtime customization, prefer adding CLI flags.
"""

# ----------------------------
# Filtering / safety
# ----------------------------

DYNAMIC_MARKERS = [
    "#durage",
    "#time",
    "现年",
    "截止到",
    "截至到",
    "截至",
    "目前",
    "现在",
    "最近",
]

# Keys/sections that are commonly time-varying, privacy-related, or too narrative.
KEY_BLACKLIST = {
    "年龄",
    "现住所",
    "曾住所",
    "家庭现况",
    "职业",
}

# If the key contains any of these substrings, reject by default (privacy/minors).
KEY_SUBSTRING_BLACKLIST = [
    "子女",
    "孩子",
    "儿子",
    "女儿",
    "配偶",
    "妻子",
    "丈夫",
    "婚",
]

# ----------------------------
# Page-level category filtering (applied in CLI before extraction)
# ----------------------------
#
# Categories in crawled records look like: "分类:同人专辑", "分类:同人志", ...
# Edit these lists to exclude whole domains of pages during extraction.
#
# - Exact match list (full category title strings).
CATEGORY_BLACKLIST = [
    # Example:
    # "分类:同人志",
    "分类:资料",
    "分类:-M",
    "分类:2軒目から始まるラジオ",
    "分类:8BIT MUSIC POWER FINAL",
    "分类:8bit canvas",
    "分类:出版物CD解说",
    "分类:二次角色",
    "分类:JynX作曲",
    "分类:现实人物",
    "分类:使用了翻译表的页面",
]

# - Substring match list (if any category contains the substring, skip the page).
# Default: exclude doujin-related pages ("同人").
# NOTE: don't forget comma!
CATEGORY_SUBSTRING_BLACKLIST = [
    "同人",
    "活动",
    "展会",
    "音乐会",
    "模板",
    "作曲",
    "目录",
    "周边",
    "社团",
    "公司",
    "会社",
]

# Exclude empty categories
EXCLUDE_EMPTY_CATEGORIES = True

# Keep answers reasonably short for SimpleQA-like grading.
# NOTE: this was loosened intentionally in your workspace.
MAX_ANSWER_CHARS = 999999

# If False, we do not reject multi-valued answers by punctuation heuristics.
REJECT_MULTI_VALUE_ANSWER = False


# ----------------------------
# Question templates (v0)
# ----------------------------

QUESTION_TEMPLATES = {
    "本名": {"q": "{title}的本名是什么？", "type": "person_name", "topic": "person"},
    "生日": {"q": "{title}的生日是哪一天（YYYY-MM-DD）？", "type": "date", "topic": "person"},
    "出生地": {"q": "{title}的出生地是哪里？", "type": "place", "topic": "person"},
    "身高": {"q": "{title}的身高是多少（厘米）？", "type": "number_cm", "topic": "person"},
    "座右铭": {"q": "{title}的座右铭是什么？", "type": "text_short", "topic": "person"},
}

# Some pages use slightly different keys; normalize them here.
FIELD_ALIASES = {
    "出生地": "出生地",
    "本名": "本名",
    "笔名、昵称": "笔名、昵称",
    "生日": "生日",
    "身高": "身高",
    "座右铭": "座右铭",
}


# ----------------------------
# IO
# ----------------------------

# Directories to skip when discovering input files (Windows system dirs, etc.)
SKIP_PATH_PATTERNS = [
    "$RECYCLE.BIN",
    "$Recycle.Bin",
    "System Volume Information",
]


