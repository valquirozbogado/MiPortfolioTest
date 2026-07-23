# Pitfalls: CSS & Glassmorphism

## 1. Invalid CSS custom property fails silently

**Symptom:** a spacing/gutter looks like it's 0 even though you set it.
**Cause:** you referenced a token that doesn't exist — e.g. `padding-right: var(--space-5)` when the scale only defines `--space-4` and `--space-6`. CSS drops the invalid declaration silently; no error.
**Fix:** verify the token exists before using it (grep your tokens file). Keep the spacing scale complete.
**Rule:** an undefined `var()` is a silent no-op, not an error. Treat token names as an API you must check.

## 2. `backdrop-filter` with `z-index: -1` doesn't blur

**Symptom:** a glass surface shows its translucent tint, but nothing behind it is actually blurred.
**Cause:** putting the blurred pseudo-element at `z-index: -1` pushes it behind the backdrop root; the browser hands `backdrop-filter` an **empty backdrop**, so there's nothing to blur.
**Fix:** stack the glass layer at `z-index: 0` and lift the element's real content to `z-index: 1`:
```css
.header::before { z-index: 0; backdrop-filter: blur(8px); /* the glass */ }
.header > *     { position: relative; z-index: 1;         /* content above */ }
```
**Rule:** `backdrop-filter` needs a non-negative stacking position with real content behind it.

## 3. Overlay trapped under the header

**Symptom:** a lightbox/modal renders *under* the fixed header or a toolbar despite a huge `z-index`.
**Cause:** it's inside an element that creates its own **stacking context** (transformed/positioned ancestor). `z-index` only competes within the same context.
**Fix:** render the overlay through a **portal to `document.body`** so it escapes the parent context (see `03-components/gallery-lightbox.md`).
**Rule:** full-screen overlays belong at the `body` level, not nested in page content.

## 4. Diffused / feathered border instead of a hard line

**Symptom:** you want a glass bar's bottom edge to fade out, not cut sharply.
**Cause:** a normal `border-bottom` is a hard line; the glass background clips at a rectangle.
**Fix:** put the glass in a pseudo-element and apply a `mask-image` gradient so it fades:
```css
.header::before {
  background: var(--glass-bg);
  backdrop-filter: blur(8px) saturate(125%);
  mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
}
```
Note: `mask-image` **is** a case where you write both the standard and `-webkit-` versions (they're not deduplicated the way `backdrop-filter` is — see the dev-vs-prod pitfall). The mask affects everything the element paints, which is why the glass lives in a pseudo-element, not on the header itself (or the buttons would fade too).
**Rule:** feather with a mask on a dedicated layer, not with a border.

## 5. Glass tint wrong in one theme

**Symptom:** the glass looks fine in light mode, muddy in dark.
**Cause:** one hardcoded translucent color can't serve both backgrounds.
**Fix:** tokenize per theme — `--glass-bg: rgba(255,255,255,.72)` in light, `rgba(10,10,10,.68)` in dark.
**Rule:** translucent surfaces need per-theme alpha, defined as tokens.

## 6. Scroll-reveal / on-scroll UI needs a threshold

**Symptom:** a scroll-triggered header state flickers at the very top.
**Fix:** trigger past a small threshold (`scrollY > 8`), use a **passive** scroll listener, and only update state when the boolean actually flips.
**Rule:** debounce intent with a threshold; keep scroll listeners passive.
