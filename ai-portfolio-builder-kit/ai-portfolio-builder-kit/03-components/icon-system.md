# Recipe: Icon System

Two icon needs, one principle: **a single source of truth per concern**, so the same project always shows the same icon everywhere.

## 1. Semantic project icons (shared component)

Projects appear in multiple places (home list, timeline, cards). If each place maps its own icon, they drift out of sync. Centralize:

```tsx
import { GraduationCap, HeartHandshake, Shield, Sparkles } from 'lucide-react';

// No brand logos available → semantic icons, tinted with each project's color.
const ICONS = {
  'project-one':   { Icon: Shield,        color: '#1A47E8' },
  'project-two':   { Icon: GraduationCap, color: '#7BA7BC' },
  'project-three': { Icon: HeartHandshake, color: '#A89BC2' },
  'project-four':  { Icon: Sparkles,      color: '#0D7377' },
} as const;

export function ProjectIcon({ slug, size = 15, className }) {
  const entry = ICONS[slug as keyof typeof ICONS];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon size={size} color={color} className={className} aria-hidden="true" />;
}
```

Every surface (home, timeline, cards) imports `ProjectIcon` — change the mapping once, it updates everywhere.

## 2. Tech-stack logos (react-icons)

For real technology logos, use `react-icons/si` (Simple Icons). Normalize keys so `"React 19"` and `"React Router"` resolve correctly, and fall back to a generic icon for anything without a brand mark:

```tsx
import { Sparkles } from 'lucide-react';
import { SiReact, SiVite, SiTypescript, SiSupabase, SiNetlify, SiReactrouter } from 'react-icons/si';

const ICONS: Record<string, React.ComponentType<{size?:number}>> = {
  react: SiReact, react19: SiReact, reactrouter: SiReactrouter,
  vite: SiVite, typescript: SiTypescript, supabase: SiSupabase, netlify: SiNetlify,
};
export function TechIcon({ tech, size = 14 }) {
  const key = tech.toLowerCase().replace(/[\s.-]/g, '');
  const Icon = ICONS[key] ?? Sparkles;       // generic fallback for unknown tools
  return <Icon size={size} aria-hidden="true" />;
}
```

## Rules

- **`aria-hidden="true"`** on decorative icons; the adjacent text carries meaning.
- **No real brand logos you don't have rights to.** Semantic icons (a shield, a graduation cap) sidestep both the licensing and the anonymization problem — you're not implying a specific company.
- **Tint semantic icons** with the project's palette color so the icon ties the label to its timeline bar / card.
- Put icon libraries in **`dependencies`**, not devDependencies (app code imports them).

## Where NOT to put an icon

Inside a tight, variable-width container that already holds text (e.g. a short timeline bar). It crowds or truncates. Put the icon in the adjacent fixed-width label instead. See `timeline.md`.
