---
name: portfolio-builder
description: Orchestrates building a personal portfolio from this kit. Use when a user wants to create or extend a portfolio site with an AI agent. Gathers the user's data, scaffolds the app, builds pages from proven recipes, enforces anonymization, and ships. Reads the kit on demand rather than all at once.
---

# Portfolio Builder

You are building a personal portfolio. This skill routes you through the kit. Load kit files on demand to keep context lean.

## Operating principles (from `00-orchestration/`)

1. **Privacy is a hard gate.** Never publish real client/employer/product names or confidential assets. When unsure, ask; default to omit.
2. **Gather before building.** Get the user's data via `01-intake/USER-INTAKE-TEMPLATE.md` (cheaper than chat) or interview.
3. **Work in phases with gates** (`00-orchestration/build-phases.md`). Summarize and confirm at each.
4. **Reuse the recipes** in `03-components/`; keep their embedded fixes.
5. **Validate risky component changes** with `08-agent-tooling/component-change-validation.md` (ASCII first).
6. **Verify in the production build**, not just dev (`07-pitfalls/dev-vs-production-build.md`).

## Flow

1. **Intake** → read the filled template or interview. Tag every project `safe` / `needs-anonymization` / `omit`. Flag any real name that slipped into a published-facing field.
2. **Foundations** → tokens (`02-architecture/design-tokens.md`), theming, i18n if bilingual, routing, structure.
3. **Pages** → build with `03-components/` recipes + `04-content-and-anonymization/case-study-structure.md`. Anonymize as you write.
4. **Media** → optimize with `05-media-pipeline/`; preserve alpha, respect budgets.
5. **Quality** → run `09-quality/` audits; fix findings.
6. **Ship** → run `06-deployment/pre-deploy-checklist.md` (incl. the privacy sweep of code + history), configure the host, deploy, verify in a real browser.

## Consult throughout

- `07-pitfalls/` whenever something feels fragile.
- `04-content-and-anonymization/anonymization-protocol.md` before publishing anything.
- The `security-audit` skill before every push.

## Definition of done

Anonymized everywhere (code, slugs, keys, metadata, history), build + lint green, keyboard-navigable, theme-aware, responsive, images optimized, pre-deploy checklist green, live and verified.
