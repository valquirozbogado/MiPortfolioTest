# 03 · Component Recipes

Each file is a **battle-tested recipe**: the component's purpose, the code, and — most valuable — the specific traps it already solved so you don't rediscover them.

| File | Component | Key trap it solves |
|---|---|---|
| `figure-image.md` | Image with caption | Framed vs. bare (transparent) images |
| `gallery-lightbox.md` | Grid + full-screen viewer | Stacking context, scroll isolation, keyboard |
| `diagrams.md` | Process & evolution diagrams | Draw with code, not AI images or screenshots |
| `stats-panel.md` | Metrics + bars + quotes | Bars scaled to max, not to 100 |
| `icon-system.md` | Semantic icons + tech logos | One shared source of truth across pages |
| `timeline.md` | Career Gantt | Label width, active-item overflow |

**How to use:** adapt the code to the user's tokens and content. Don't copy blindly — but do keep the fixes. The comments in each recipe mark *why* a line exists; preserve those.

## Structural pieces without a recipe (build these too)

Nav/header, footer, and the contact section have no dedicated recipe — they're simple enough that any capable agent builds them well. They still must follow the kit's rules:

- **Nav/header:** sticky is fine; keyboard-reachable links with visible focus; current route indicated (`aria-current="page"`); theme toggle lives here (see `02-architecture/theming.md`). If it uses `backdrop-filter`, read `07-pitfalls/css-and-glassmorphism.md` first.
- **Footer:** owner's public identity only (approved name + links); no client names ever. Keep it short.
- **Contact:** prefer a `mailto:`/link CTA over a form; if a form is required, use a no-backend service (see `02-architecture/tech-stack.md`) and label every field (see `09-quality/accessibility.md`). Only the contact info the user approved as public appears here.

All three reference design tokens only — no raw hex or pixel values.
