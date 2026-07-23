# Component-Change Validation Protocol

A habit that prevents the single most expensive kind of rework: breaking a complex component, fixing it, breaking it again. It came out of a real case where a layout component took 5+ iterations because changes were made without validating them first.

## When to use it

**Before any change that touches layout, dimensions, typography, or iteration over data** in a component. Especially: timelines/charts, anything with `.map()` over positioned elements, responsive collapse, and typography-critical UI.

**Skip it** for trivial edits: typo fixes, renaming a variable, comments, copy tweaks.

## The protocol

1. **Understand the intent.** Restate what the user actually wants changed, in one sentence. Ambiguity here is where most breakage starts.
2. **Visualize with ASCII first.** Sketch the intended result as an ASCII diagram — the layout, the edge cases. This is fast and catches "that won't fit" before any code.
3. **Show the sketch and confirm.** Get a yes before coding. A 10-second confirmation beats a 5-iteration repair.
4. **Check the edge cases explicitly.** List them and answer each:
   - Shortest / narrowest instance (does text still fit?)
   - Active / in-progress instance (does it overflow?)
   - Empty or single-item case
   - Mobile / stacked layout
   - Both themes
   If any answer is "it breaks," stop and rethink before coding.
5. **Then code.**
6. **After: read the whole file and re-verify** against the edge-case list. Confirm you didn't fix one case by breaking another.

## Why ASCII specifically

It's the cheapest possible prototype. It forces you to commit to concrete widths, counts, and wrapping before you've invested in code, and it gives the user something to react to. Most layout disasters are visible in the sketch.

## Example (from the timeline recipe)

```
Intent: put a project icon next to each timeline label without truncating titles.

┌─ label (190px) ──────┐┌─ track ───────────────────────────┐
│ ⛨ Project One        ││ ███████████████████████████████████│
│   Role → Lead        ││                                   │
└──────────────────────┘└───────────────────────────────────┘

Edge cases checked:
- Longest title "Project One" + icon → fits in 190px ✓
- Active bar (no end date) → clamp "now" to 97% so it doesn't clip ✓
- Mobile → label stacks above track ✓
```

Confirm → code → re-verify. This one habit is worth more than any single component recipe.
