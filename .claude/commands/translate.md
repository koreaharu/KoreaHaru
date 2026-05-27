---
description: Find and fill missing i18n keys for a target locale
argument-hint: <locale>
---

Run the translator subagent for locale `$1` (one of: ja, zh-CN, zh-TW, vi, th, ko).

Steps:

1. Compare keys in `messages/en.json` vs `messages/$1.json`.
2. List missing keys.
3. Invoke the `translator` subagent to propose translations matching the brand voice (`docs/BRAND.md`).
4. Show the proposed translations to the user before writing.
5. After user approval, write to `messages/$1.json`, preserving existing keys.

If `messages/$1.json` doesn't exist, create it with the same structure as en.json.

Don't overwrite keys that already have a non-empty value unless the user explicitly asks.
