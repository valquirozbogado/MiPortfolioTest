# Recipe: Career Timeline (Gantt)

A horizontal Gantt showing roles/projects over time: a fixed-width **label column** on the left and a **track area** with a positioned bar per row.

## Layout model

```
┌─ label (fixed width) ─┐┌─ track (fills rest) ──────────────────┐
│ ⛨ Project One         ││ ███████████████████████████████████████│
│   Role → Lead         ││                                       │
│ ☆ Project Two         ││        █████████                      │
└───────────────────────┘└───────────────────────────────────────┘
```

Bars are positioned with `left: %` and `width: %` computed from dates against a fixed chart start/end.

## The two traps this solved

### 1. Truncated labels
The label column must be **wide enough for the longest title** plus its icon, or titles get an ellipsis. Widen the label column; the extra width comes out of the track, not the text. Set a token like `--label-w: 190px` and size the longest title against it.

Also: the icon goes in the **label**, not inside the bar. Bars can be as narrow as ~20% of the track and already hold a title + period; an icon there crowds or clips them.

### 2. Active items overflowing the right edge
Rows still in progress have no end date, so their bar extends to "now". If "now" maps to 100% and the bar has a minimum width, `left + width` can exceed 100% and the bar gets clipped by the track's `overflow: hidden`.

**Fix:** clamp the "now" position to ~97–98%, not 100%, leaving margin for active bars.

```ts
function nowPercent(): number {
  const ms = Date.now() - CHART_START.getTime();
  const total = CHART_END.getTime() - CHART_START.getTime();
  return Math.max(0, Math.min(97, (ms / total) * 100)); // cap at 97, not 100
}
```

If you change `CHART_END`, re-verify that active bars don't clip.

## Other rules

- Give each bar a `data-slug` and navigate to its case study on click; add an `aria-label` with title + period.
- Tint each bar with the project's palette color and reuse that color for the project's icon (see `icon-system.md`).
- On mobile, stack the label above the track (label column → full width).
- **Invalid token check:** the label column's gutter must reference a token that exists. A gutter set to a non-existent `var(--space-5)` silently collapses to 0. Verify the token.

## This component is high-risk — validate before editing

Timelines mix positioning math, min-widths, and responsive collapse. It's exactly the kind of component that breaks in surprising ways. Before changing layout/dimensions, follow `08-agent-tooling/component-change-validation.md`: sketch the result in ASCII, check the edge cases (shortest bar, active bar, mobile), confirm, then code.
