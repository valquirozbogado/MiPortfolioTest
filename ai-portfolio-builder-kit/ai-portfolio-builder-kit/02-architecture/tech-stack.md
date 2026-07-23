# Tech Stack

The stack this kit is built around, and why each piece. All choices are defaults — swap where you have a good reason.

## Core

| Layer | Choice | Why |
|---|---|---|
| Framework | **React 19** | Ubiquitous, great agent support, huge ecosystem |
| Build tool | **Vite** | Fast dev server + HMR; sensible production builds via esbuild/Rollup |
| Language | **TypeScript** | Catches wiring mistakes; typed i18n keys prevent broken translations |
| Styling | **CSS Modules + custom properties** | Scoped classes, zero runtime, tokens for theming. No CSS-in-JS overhead |
| Routing | **react-router-dom** | Standard client-side routing for multi-page portfolios |
| Head/meta | **React 19 native metadata** | React 19 hoists `<title>`/`<meta>`/`<link>` rendered in any component into `<head>` — no library needed. (Only reach for `react-helmet-async` on React ≤18.) Critical for SEO + privacy |

## Supporting

| Need | Choice | Notes |
|---|---|---|
| Icons | **lucide-react** + **react-icons** | Lucide for semantic UI icons; react-icons (`si`) for tech-brand logos |
| Animation | **gsap** (optional) | Only if you need scroll-reveals or timeline motion; otherwise CSS |
| Contact form | **@formspree/react** (or similar) | No backend needed; check their privacy terms |
| Image processing | **sharp** (dev-only) | Batch-optimize source images to WebP. See `05-media-pipeline/` |

## Dependency hygiene

**Put a library in `dependencies` if app code imports it, `devDependencies` if only build/tooling uses it.** A common mistake: installing an icon or UI library as a devDependency, then importing it in a component. It works locally (dev installs everything) but can break a production install that skips devDependencies. Icon libraries, router, animation → `dependencies`. Linters, `sharp`, type packages → `devDependencies`.

## Scripts (package.json)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

`build` runs the type-checker **before** bundling — a type error fails the build instead of shipping broken code.

## Portability

- **Astro / Svelte / Vue:** the token system, theming, and content structure port directly; only component syntax changes.
- **Plain HTML/CSS/JS:** you lose typed i18n and components, but the design-token layer, image pipeline, anonymization, and deployment guidance all still apply.
- The **pitfalls** in `07-pitfalls/` are mostly framework-agnostic (CSS minification, git privacy, backdrop-filter) — read them regardless of stack.
