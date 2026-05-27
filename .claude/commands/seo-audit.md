---
description: Run SEO audit on a specific page route
argument-hint: <route>
---

Audit the page at route `$1` (e.g., `/services/chauffeur`) for SEO compliance.

Invoke the `seo-auditor` subagent. It will:
1. Read `docs/SEO.md` and `docs/I18N.md`.
2. Locate the page file(s) under `app/[locale]$1/page.tsx`.
3. Verify metadata, OG tags, JSON-LD, hreflang, alt text, heading hierarchy.
4. Return a checklist with pass/fail per item and required fixes.

If the dev server is running, also curl `http://localhost:3000/en$1` to inspect rendered HTML.
