# Design Review

A self-review rubric for what automated checks miss. Run it as if you were a recruiter seeing the site for the first time.

## The 30-second test

Open the home page. In 30 seconds, can a stranger tell **who you are, what you do, and see evidence of it?** If the first screen is a wall of text, it fails. Fix the hierarchy: outcome first, evidence early.

## Visual system

- [ ] **One accent color**, used consistently. No random palette drift.
- [ ] **Consistent spacing** — everything on the token scale; no arbitrary pixel values.
- [ ] **Type hierarchy is clear** — display / heading / body / mono each do one job.
- [ ] **Alignment and rhythm** — content sits on a consistent max-width and vertical rhythm.
- [ ] **Both themes look intentional**, not just "inverted."

## Content

- [ ] Every page **leads with the outcome**, not chronology.
- [ ] Case studies **show** (visuals) before they **tell** (prose).
- [ ] **No placeholder rectangles** anywhere.
- [ ] Copy is tight; no restated sentences or generic filler.
- [ ] One **memorable detail** per case study.

## Interaction

- [ ] Hover/focus states exist and are consistent.
- [ ] The gallery/lightbox feels solid (keyboard, scroll isolation, dark backdrop).
- [ ] Nothing shifts layout unexpectedly (no CLS on image load, no border-jump on scroll states).
- [ ] Motion is subtle and respects reduced-motion.

## Responsive

- [ ] Test at ~375px, ~768px, ~1200px.
- [ ] No horizontal scroll on the page body.
- [ ] Wide content (tables, diagrams, timelines) scrolls **inside its own container**, not the page.
- [ ] Timelines/diagrams collapse sensibly (stack, rotate arrows).

## The privacy pass (again)

- [ ] Nothing confidential visible in copy, images, titles, URLs.
- [ ] Only the owner's approved public identity is exposed.

## Final gut check

Would *you* hire this person from this site? If a section makes you hesitate, it's either unclear, unfinished, or unnecessary — fix or cut it.
