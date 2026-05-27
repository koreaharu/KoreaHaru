---
description: Scaffold a new service page (route, component, i18n keys, SEO metadata, Prisma seed entry)
argument-hint: <slug> [category]
---

Create a new service page for Kwak Travel. The slug is `$1` and category (optional) is `$2`.

Steps:

1. Read `docs/SITEMAP.md` to confirm where the service belongs.
2. Read `docs/DESIGN.md` and `docs/SEO.md` to follow conventions.
3. Read an existing service page (e.g. `app/[locale]/services/chauffeur/page.tsx` if it exists) for structure reference.

Then create:

- `app/[locale]/services/$1/page.tsx` — server component with:
  - Hero (image + serif headline + 2 CTAs)
  - Feature/option cards (3-4)
  - Booking form section
  - FAQ section (3-5 questions)
  - JSON-LD `Service` schema via `lib/structured-data.ts`
  - Metadata via `lib/seo.ts` builder
- `messages/en.json` — add namespace `services.$1` with: title, hero_title, hero_subtitle, cta_primary, cta_secondary, feature_1_title, feature_1_desc, ... faq_q1, faq_a1, ...
- Add the route to the sitemap config if needed.
- If the service maps to a Prisma `ServiceCategory` enum, propose adding it (don't migrate without asking).

After scaffolding:
- Show the user the file list
- Run `pnpm typecheck` to confirm no type errors
- Suggest invoking `design-critic` and `seo-auditor` on the new page

If the service category is not in `ServiceCategory` enum, ask the user before extending.
