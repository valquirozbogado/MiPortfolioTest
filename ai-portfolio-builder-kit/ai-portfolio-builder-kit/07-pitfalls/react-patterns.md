# Pitfalls: React Patterns

## 1. Reassigning a variable during render

**Symptom:** lint error like "Cannot reassign variable after render completes" / `react-hooks/immutability`, or subtly inconsistent renders.
**Cause:** mutating a running counter during `.map()` to compute indices:
```tsx
let offset = 0;
{groups.map(g => { const base = offset; offset += g.images.length; /* … */ })}
```
**Fix:** derive the value purely instead of mutating during render:
```tsx
const flat = groups.flatMap(g => g.images);
// later: flat.findIndex(x => x.id === image.id)
```
**Rule:** render must be a pure function of props/state. Compute, don't mutate, during render.

## 2. Overlays must portal out

Covered in `css-and-glassmorphism.md` #3 — modals/lightboxes render via `createPortal(node, document.body)` to escape parent stacking contexts. Lock `body` scroll while open; restore on close.

## 3. Missing/unstable keys in lists

**Symptom:** wrong item animates, state attaches to the wrong row, or React warns.
**Fix:** use a stable unique key (an id or unique asset path), never the array index for lists that reorder or filter.

## 4. Effects that touch the document need cleanup

Key handlers, `body` overflow locks, scroll listeners, observers — always remove them in the effect's cleanup, and restore prior values:
```tsx
useEffect(() => {
  const prev = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onKey);
  return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
}, [deps]);
```

## 5. Fast-Refresh warnings from context files

**Symptom:** HMR logs "Could not Fast Refresh (incompatible export)."
**Cause:** a file exports both a component and non-component values (e.g. a context + its hook).
**Impact:** harmless in dev (just a full reload); not a production issue. Optionally split hooks/constants into their own file to silence it.
**Rule:** don't chase this one during a deadline — it doesn't affect the shipped site.

## 6. Icon libraries in the wrong dependency bucket

**Symptom:** works locally, fails in a clean production install.
**Cause:** app imports a lib listed under `devDependencies`.
**Fix:** move app-imported libraries (icons, router, animation) to `dependencies`. See `02-architecture/tech-stack.md`.
