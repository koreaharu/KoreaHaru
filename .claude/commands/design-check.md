---
description: Run design system compliance check on changed files
argument-hint: [path]
---

Run the `design-critic` subagent on `$1` (defaults to recently changed `.tsx` and `.css` files if no path given).

It will:
1. Read `docs/DESIGN.md`.
2. Scan for token violations, banned classes (gradients, glassmorphism, large shadows, large radii), animation rule breaches, typography misuse.
3. Return a markdown report with file:line citations.

If no path is given, infer from `git diff --name-only` (or recently edited files in this session).
