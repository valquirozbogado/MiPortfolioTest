# Build Phases

Six phases, each with an entry condition and an exit gate. Do not cross a gate without meeting it. Summarize and confirm with the user at each gate.

---

## Phase 0 — Setup

**Do:** Confirm the target stack (default: React 19 + Vite + TypeScript). Initialize the project. Set up the linter and a `.gitignore` that covers `node_modules/`, `dist/`, `.env`, `.env.local`, `.env*.local`.

**Gate:** Empty app builds and runs. Git repo initialized on a working branch (not committing to the default branch directly unless the user says so).

---

## Phase 1 — Intake

**Do:** Get the user's data via `01-intake/USER-INTAKE-TEMPLATE.md` (preferred) or interview. Build the content inventory (`01-intake/content-inventory.md`): what text, images, and links exist, and — critically — **which of them touch confidential work.**

**Gate:** You have enough to write every page. Every project is tagged `safe` / `needs-anonymization` / `omit`. No building has started yet.

---

## Phase 2 — Foundations

**Do:** Lay down the design token system (`02-architecture/design-tokens.md`), theming (`theming.md`), i18n if bilingual (`i18n.md`), routing, and the folder structure (`project-structure.md`).

**Gate:** Tokens resolve in both themes. Theme toggle works. Routes render placeholders. No hard-coded colors or spacing yet — everything references tokens.

---

## Phase 3 — Pages & components

**Do:** Build pages using the `03-components/` recipes and the content structure in `04-content-and-anonymization/case-study-structure.md`. Apply the anonymization protocol to every piece of client content **as you write it**, not after.

Use placeholder blocks for any asset the user hasn't delivered yet — but make them obviously temporary, and remove every one before shipping.

**Gate:** All pages render with real (anonymized) content. Any remaining placeholders are tracked in a list. Component changes that touched layout were ASCII-validated first.

---

## Phase 4 — Media

**Do:** Optimize and wire real images using `05-media-pipeline/`. Respect format/size budgets. Preserve transparency where the asset needs it (don't bake backgrounds or blur into transparent PNGs).

**Gate:** Every image is optimized, within budget, correctly framed or bare, and lazy-loaded except the hero.

---

## Phase 5 — Quality

**Do:** Run the `09-quality/` audits — accessibility, performance, SEO/metadata — and the self design-review. Fix findings.

**Gate:** Keyboard nav works end to end. Contrast passes. Titles/OG/metadata are set and **anonymized**. Bundle and images within budget.

---

## Phase 6 — Ship

**Do:** Run `06-deployment/pre-deploy-checklist.md`, including a privacy sweep of code **and git history**. Configure the host (`vercel.md` / `netlify.md`). Deploy.

**Gate:** Production build passes. Privacy sweep is clean. Site is live and verified in a real browser (hard-refresh to dodge cache). Auto-deploy confirmed with a real push.

---

## A note on iteration

Real builds loop back. Expect Phase 3 ↔ Phase 4 to interleave as the user reacts to seeing their content. That's normal. What must **not** loop backward is privacy: once something confidential is caught, it's fixed everywhere (code + history) before continuing.
