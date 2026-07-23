# Intake Guide (for the agent)

How to turn the filled template into a build plan — and how to interview if there's no template.

## Reading a completed template

1. **Privacy pass first.** Before anything else, scan every project's privacy tag. Flag any field where the user may have accidentally written a real client/product name despite the warning (a real company name in an "alias" field, a logo they may not have rights to). Surface these back to the user before building.
2. **Rank projects.** Best/most-relevant first. A portfolio front-loads its strongest evidence.
3. **Gap list.** Note missing assets (from section 7) — these become tracked placeholders, not blockers.
4. **Derive the design system.** Turn sections 3–4 (voice, audience, aesthetic, accent color, theme) into concrete tokens (`02-architecture/design-tokens.md`).
5. **Confirm the plan.** Summarize back: pages you'll build, projects and their privacy handling, the visual direction, and what you still need from the user.

## Interview fallback (no template)

Only if the user won't fill the template. Keep it tight — one topic at a time, don't dump all questions at once. Suggested order:

1. Identity + one-line pitch.
2. Audience + tone + languages.
3. Walk through projects one at a time. For each, immediately ask the **privacy tag** and, if not `safe`, agree on an alias on the spot.
4. Visual direction (accent, light/dark, aesthetic words).
5. Contact/links they want public.
6. What assets they have vs. need.

After the interview, **write the answers back into a copy of the template** so there's a durable record and you don't re-ask.

## Turning intake into pages

A typical map:

| Intake input | Becomes |
|---|---|
| Identity + bio | Home hero + About page |
| Projects (ranked) | Case study pages (+ sub-project pages) |
| Career timeline | Timeline/Gantt component on the Works page |
| Metrics + testimonials | Stats panel inside the relevant case study |
| Contact + links | Contact section + footer |
| Visual direction | Design tokens + theming |

## Red flags to stop and ask about

- A real company/product name in any published-facing field.
- A screenshot described as "internal" or "from work" without a clear right to publish.
- Testimonials with real names but no stated permission.
- A logo the user "found" rather than owns or is licensed to use.

When you hit one, don't guess — ask. Privacy is a gate.
