# Master Index & Orchestration Map

This is the routing table for the kit. An agent should load files **on demand** as it moves through the build, not all at once — that keeps context lean.

## Reading order for an agent

```
START
  │
  ├─ 00-orchestration/agent-playbook.md    ← read first, always
  ├─ 00-orchestration/principles.md         ← the do's and don'ts
  ├─ 00-orchestration/build-phases.md       ← the ordered plan
  │
  ├─ PHASE 1  01-intake/*                    ← get the user's data
  ├─ PHASE 2  02-architecture/*              ← scaffold foundations
  ├─ PHASE 3  03-components/* + 04-content/* ← build pages
  ├─ PHASE 4  05-media-pipeline/*            ← optimize assets
  ├─ PHASE 5  09-quality/*                   ← audit
  ├─ PHASE 6  06-deployment/*                ← ship
  │
  └─ 07-pitfalls/*  +  08-agent-tooling/*    ← consult throughout
```

## Full file map

### 00 — Orchestration (`00-orchestration/`)
| File | Purpose |
|---|---|
| `agent-playbook.md` | System-prompt-style operating instructions for the building agent |
| `build-phases.md` | Ordered phases with entry/exit gates |
| `principles.md` | Core do's / don'ts and the design philosophy |

### 01 — Intake (`01-intake/`)
| File | Purpose |
|---|---|
| `USER-INTAKE-TEMPLATE.md` | The fill-in document the end user completes |
| `intake-guide.md` | How the agent uses the template, plus a chat-interview fallback |
| `content-inventory.md` | Checklist of assets the user must provide |

### 02 — Architecture (`02-architecture/`)
| File | Purpose |
|---|---|
| `tech-stack.md` | The proven stack and why each piece |
| `project-structure.md` | Folder layout and conventions |
| `design-tokens.md` | The CSS custom-property token system |
| `theming.md` | Light/dark theming that survives the build |
| `i18n.md` | Type-safe bilingual content |

### 03 — Components (`03-components/`)
| File | Purpose |
|---|---|
| `figure-image.md` | Framed / bare image with caption |
| `gallery-lightbox.md` | Grid + full-screen lightbox (portal, keyboard, scroll) |
| `diagrams.md` | Code-drawn process & timeline diagrams |
| `stats-panel.md` | Metrics + bar charts + testimonials |
| `icon-system.md` | Shared semantic icons and tech logos |
| `timeline.md` | Gantt-style career timeline |

### 04 — Content & Anonymization (`04-content-and-anonymization/`)
| File | Purpose |
|---|---|
| `anonymization-protocol.md` | **The unbreakable rule, operationalized** |
| `case-study-structure.md` | How to structure a case study that lands |
| `copywriting.md` | Voice, length, what recruiters scan for |

### 05 — Media Pipeline (`05-media-pipeline/`)
| File | Purpose |
|---|---|
| `image-optimization.md` | WebP, sizing, alpha, budgets |
| `scripts/optimize-images.cjs` | Ready-to-adapt batch script (sharp) |

### 06 — Deployment (`06-deployment/`)
| File | Purpose |
|---|---|
| `vercel.md` / `netlify.md` | Config + gotchas per host |
| `pre-deploy-checklist.md` | Gate before every push |

### 07 — Pitfalls (`07-pitfalls/`)
| File | Purpose |
|---|---|
| `css-and-glassmorphism.md` | Invalid tokens, backdrop-filter, stacking |
| `dev-vs-production-build.md` | Why it works in dev and breaks in prod |
| `react-patterns.md` | Render purity, portals, keys |
| `git-privacy-and-history.md` | Slugs, history rewrite, orphan commits |

### 08 — Agent Tooling (`08-agent-tooling/`)
| File | Purpose |
|---|---|
| `skills-overview.md` | Which skills help and when |
| `subagents.md` | Parallel exploration, forks, delegation |
| `component-change-validation.md` | The ASCII-first change protocol |
| `skills/*` | Clean, reusable skill templates |

### 09 — Quality (`09-quality/`)
| File | Purpose |
|---|---|
| `accessibility.md` | Keyboard, ARIA, contrast, motion |
| `performance.md` | Bundle, images, lazy-loading |
| `seo-and-metadata.md` | Titles, OG, structured data |
| `design-review.md` | Self-review rubric before shipping |
