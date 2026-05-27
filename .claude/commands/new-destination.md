---
description: Scaffold a new destination page (route, component, i18n keys, SEO metadata)
argument-hint: <slug>
---

Create a new destination page for `$1`.

Steps:

1. Read `docs/SITEMAP.md` and confirm the slug belongs to the southern Korea region.
2. Read `docs/DESIGN.md` and `docs/SEO.md`.

Create:

- `app/[locale]/destinations/$1/page.tsx`:
  - Hero (city skyline / signature image + serif headline)
  - Overview paragraph (1-2 short paragraphs)
  - "What to do" — 6-8 cards (attractions, food, experiences)
  - "Where to stay" — 3 hotel/stay options
  - "How to get there" — chauffeur / KTX / shuttle
  - Suggested itineraries (link to `/itineraries/...`)
  - Map embed (Google Maps, lazy-loaded)
  - JSON-LD `TouristDestination` + `Place`
  - Metadata via `lib/seo.ts`
- `messages/en.json` — namespace `destinations.$1` with all copy keys
- OG image suggestion: `public/og/destinations-$1.jpg` (1200x630)

Use Unsplash placeholders for images: `https://images.unsplash.com/photo-XXX?w=1600&q=80&auto=format`.

After scaffolding, run `pnpm typecheck` and suggest `seo-auditor`.
