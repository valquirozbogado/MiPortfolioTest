# Case Study Structure

A case study is a story with evidence. This is a reliable skeleton — adapt section names to the project.

## The arc

1. **Hook / hero** — one strong, anonymized visual before any text. First impression = "portfolio," not "blog."
2. **Context** — what the product/role was, in a sentence or two. Anonymized ("a B2B platform in [sector]").
3. **The problem** — the real challenge you faced. Specific, honest.
4. **What you did** — your decisions and process. This is the substance. Use a code-drawn diagram if the process is worth showing.
5. **Evidence** — screenshots (de-identified), a stats panel with real numbers, before/after, testimonials.
6. **Impact** — what changed. Connect the metrics to the story rather than re-listing them.
7. **Reflection** — what you learned / would do differently. Signals maturity.

## Rules that make it land

- **Lead with the outcome**, not the chronology. The reader wants "what changed" up front.
- **Show, then tell.** A before/after gallery or a process diagram carries more than paragraphs describing them.
- **One memorable detail per study.** The anecdote people repeat. It makes the work human and sticky.
- **Cut ruthlessly.** If a paragraph doesn't advance the story or add evidence, remove it. Density kills case studies.
- **Sub-projects** for large engagements: break a big role into a few focused sub-cases, each with its own alias and privacy tag.

## Content as data

Store case studies as typed data in `src/data/`, not inline JSX (see `02-architecture/project-structure.md`). Each study: `slug` (anonymized!), `title`, `subtitle`, `role`, `period`, `type`, `sections[]`, optional `subProjects[]`, and SEO fields. Bilingual? Return the right set via `getCaseStudies(lang)`.

## Privacy checkpoints specific to case studies

- The **slug** is anonymized (it's in the URL bar).
- The **SEO title/description** is anonymized (browser tab + search + social preview).
- Every **screenshot** is de-identified or omitted.
- Every **testimonial** is permission-cleared and name-stripped as needed.
- **Metrics** are real but never paired with a real client identifier.

## Don't ship placeholders

During the build you'll stub missing assets. Every placeholder must be tracked (`01-intake/content-inventory.md`) and **removed before shipping**. A shipped placeholder rectangle reads as unfinished — worse than a shorter, complete page.
