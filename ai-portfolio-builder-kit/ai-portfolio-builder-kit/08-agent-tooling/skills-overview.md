# Skills Overview

Skills are packaged, reusable procedures an agent can invoke. If your agent supports them (e.g. Claude Code's Skill system), these categories map cleanly onto the build phases. If it doesn't, run them as manual checklists.

> All skill templates in `skills/` are **anonymized and generalized** — they contain no personal data. Adapt them to your own identity and workflow.

## Skill categories that help build a portfolio

| Category | When | What it does |
|---|---|---|
| **Frontend / UI generation** | Phase 3 | Produce distinctive, production-grade UI; avoid generic "AI-looking" layouts |
| **Design-system work** | Phase 2 | Establish tokens, scales, component conventions |
| **UX/UI audit** | Phase 5 | Heuristic + visual review of the built site |
| **Baseline UI checks** | Phase 3–5 | Validate animation durations, typography scale, a11y of components |
| **Accessibility fixer** | Phase 5 | ARIA, keyboard nav, focus, contrast, form errors |
| **Metadata / SEO fixer** | Phase 5 | Titles, descriptions, canonical, OG, Twitter cards, JSON-LD, favicons |
| **Motion-performance fixer** | Phase 5 | Layout thrashing, compositor properties, scroll-linked motion |
| **Data-viz** | Phase 3 | Charts/stat tiles that read as one system (for a stats panel) |
| **Deployment fixer** | Phase 6 | TypeScript/build/host issues before shipping |
| **Security / privacy audit** | Phase 6 (and before every push) | Detect leaked personal data, credentials, sensitive files |

## The two you should treat as mandatory

1. **A privacy/security audit before every push.** This is the enforcement arm of the anonymization protocol. Template: `skills/security-audit.md`.
2. **A component-change validator for risky edits.** See `component-change-validation.md`.

## Building your own skill

If your agent supports authoring skills, encode the repetitive parts of *your* workflow (e.g. your image pipeline, your deploy sweep) as skills so they're one command next time. Keep any skill that touches your identity **local and private** — never publish a skill file containing your real data. The templates here are deliberately identity-free so they're safe to share.
