# Project Structure

A layout that scales from a one-pager to a multi-case-study portfolio without reshuffling.

```
project-root/
├── public/                 # static assets served as-is (favicon, robots.txt)
├── scripts/                # one-off tooling (e.g. optimize-images.cjs)
├── src/
│   ├── assets/             # imported images (processed by the bundler)
│   │   └── works/          # optimized project images (WebP)
│   ├── components/
│   │   ├── layout/         # Header, Footer, shell
│   │   ├── ui/             # Button, Input — primitives
│   │   ├── Figure/         # one folder per component: .tsx + .module.css
│   │   ├── Gallery/
│   │   ├── Timeline/
│   │   └── …
│   ├── context/            # ThemeContext (theme + language)
│   ├── data/               # content as typed data (case studies, timeline, media)
│   ├── hooks/              # useScrollReveal, etc.
│   ├── i18n/               # translations dictionary + types
│   ├── pages/              # one file per route
│   ├── index.css           # design tokens + resets + global base
│   └── main.tsx            # entry
├── .gitignore
├── package.json
└── vite.config.ts
```

## Conventions

- **One folder per component**, containing `Component.tsx` and `Component.module.css`. Keeps styles local and movable.
- **Content lives in `src/data/`, not hard-coded in JSX.** Case studies, the timeline, and media manifests are typed data structures. This makes anonymization a matter of editing data, and makes bilingual content a function of `data(lang)`.
- **Images are imported, not string-referenced**, so the bundler fingerprints and optimizes them. Keep a small `data/media.ts` that imports every asset and exports typed references.
- **Tokens live in `index.css`** and nothing else defines colors/spacing. Components reference `var(--token)`.
- **Pages are thin.** A page composes components and pulls from `data/`; it shouldn't contain business logic or long copy.

## Why content-as-data matters for this kit

Because privacy is central: when a client name must change to an alias, you edit one entry in `data/`, not scattered JSX. When you go bilingual, `getCaseStudies('es' | 'en')` returns the right set. When you anonymize a slug, it's one field. Centralized content = safe, cheap edits.

## The backup trap

**Never keep a working copy of `src/` inside the project tree** (e.g. `src_backup_2026/`). Vite's file watcher will try to watch it and can crash with `EBUSY`, and it pollutes search/build. Put backups **outside** the repo, or use git branches/stashes.
