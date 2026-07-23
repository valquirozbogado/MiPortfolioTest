# Changelog

All notable changes to this kit. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [1.1.0] — 2026-07-15

### Changed
- Head/meta default is now **React 19 native metadata** (`<title>`/`<meta>` hoisting) instead of `react-helmet-async`, which remains the documented fallback for React ≤18 (`02-architecture/tech-stack.md`, `09-quality/seo-and-metadata.md`).

### Added
- **EXIF metadata** added as a leak surface in the anonymization protocol, with guidance that the `sharp` pipeline strips it by default and every published image must go through the pipeline.
- Guidance for the structural pieces without a dedicated recipe — nav/header, footer, contact — in `03-components/README.md`.

## [1.0.0] — 2026

### Added
- Initial release of the AI Portfolio Builder Kit.
- Orchestration layer: agent playbook, build phases, principles.
- Intake system: fill-in template + chat-interview fallback + content inventory.
- Architecture docs: stack, structure, design tokens, theming, i18n.
- Component recipes: figure/image, gallery+lightbox, diagrams, stats panel, icon system, timeline.
- Content & anonymization protocol.
- Media pipeline with a ready-to-adapt image-optimization script.
- Deployment guides (Vercel, Netlify) + pre-deploy checklist.
- Pitfalls library covering CSS/glassmorphism, dev-vs-prod builds, React patterns, and git privacy.
- Agent-tooling docs: skills overview, subagents, component-change validation protocol, reusable skill templates.
- Quality docs: accessibility, performance, SEO, design review.

### Notes
- Distilled from a real production portfolio build. Fully anonymized.
- Primary stack: React 19 + Vite + TypeScript. Core lessons are framework-portable.
