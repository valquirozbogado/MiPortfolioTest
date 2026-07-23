# Performance

A portfolio should feel instant. The biggest wins are images and fonts, not micro-optimizations.

## Images (the #1 lever)

- Optimized WebP within the budgets in `05-media-pipeline/image-optimization.md`.
- **Hero:** `loading="eager"` + `fetchPriority="high"`. It's the first paint.
- **Everything else:** `loading="lazy"` + `decoding="async"`.
- Serve thumbnails in galleries; load the full image only in the lightbox.
- Don't ship a 3000px image to display it at 400px. Cap width to display size (×2 max for retina).

## Fonts

- Load **only the weights you use.** Each extra weight is a request and bytes.
- Use `font-display: swap` so text renders immediately with a fallback.
- Self-host or use a performant provider; avoid layout shift by reserving space.

## JavaScript / bundle

- Keep an eye on bundle size (`npm run build` prints it). A portfolio rarely needs a large JS payload.
- Bring in heavy libraries (animation, etc.) only where actually used. If GSAP is only on one page, that's fine; if it's imported globally for one effect, reconsider.
- Prefer CSS for simple transitions over JS animation.

## Rendering

- Compositor-friendly animations (`transform`, `opacity`), never animating `width`/`top`/`left` in loops.
- Passive scroll listeners; update state only on meaningful change (threshold), not every scroll tick.
- Avoid layout thrash: don't read then write layout properties in a loop.

## Quick audit

1. Run Lighthouse (mobile profile). Aim for green on Performance.
2. Check the largest asset in `dist/` — is any image oversized?
3. Throttle to "Fast 3G" in devtools and load the home page — is the hero visible quickly? Does anything block?
