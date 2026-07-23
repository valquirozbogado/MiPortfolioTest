# Recipe: Stats Panel (metrics + bars + testimonials)

The strongest evidence in a case study: real numbers, what people valued (as bars), and a few quotes.

## Three parts

1. **Stat tiles** — a few big numbers (e.g. a rating, a volume, a scale) with short labels.
2. **Strength bars** — a horizontal bar list showing what was valued most, each with its percentage.
3. **Testimonials** — a handful of real quotes that reinforce the story.

## The one crucial detail: scale bars to the max, not to 100

If the largest value is 23%, drawing every bar as a fraction of 100 makes them all look nearly empty and communicates nothing. **Scale each bar's width against the maximum value in the set**, and always print the exact percentage next to it so precision isn't lost.

```tsx
const max = Math.max(...data.strengths.map(s => s.percent));
// …
<span className={styles.barFill} style={{ width: `${(strength.percent / max) * 100}%` }} />
<span className={styles.barPercent}>{strength.percent}%</span>
```

## Data shape (bilingual-ready)

```ts
export interface ImpactData {
  stats: { value: string; label: string }[];
  strengths: { label: string; percent: number }[];
  testimonials: { quote: string }[];
  // titles/notes as strings so they can be translated
}
export function getImpact(lang: Language): ImpactData { /* return EN or ES set */ }
```

## Content rules

- **Curate testimonials.** A portfolio shows the strongest, on-message quotes — not a raw feedback dump. Pick the ones that reinforce your narrative.
- **Don't publish a stat that doesn't add up.** If a distribution's parts don't sum sensibly (e.g. three percentages that total 86% with no explanation), leave it out or explain the remainder. A number that looks like an error undermines the rest.
- **Rewrite surrounding copy** so the prose doesn't repeat the numbers the panel already shows — connect them to the story instead ("what they valued most was exactly what the method aimed to produce").

## Privacy

- Strip real names from testimonials unless you have explicit permission to use them.
- Numbers are usually safe, but a metric paired with a real client name is not — keep the client anonymized.
- Never paste a screenshot of an internal analytics dashboard; re-present the numbers as your own styled component.
