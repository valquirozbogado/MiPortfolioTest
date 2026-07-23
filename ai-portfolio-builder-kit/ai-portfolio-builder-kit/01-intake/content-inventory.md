# Content Inventory

A living checklist the agent maintains during the build. It tracks every piece of content and its readiness. Copy this into the project and keep it updated.

## Text content

| Piece | Source | Status | Privacy |
|---|---|---|---|
| Home hero copy | Intake §1 | ☐ drafted | safe |
| About bio | Intake §1 | ☐ drafted | safe |
| Case study: [alias A] | Intake §5 | ☐ drafted | needs-anonymization |
| … | | | |

## Visual assets

| Asset | Provided? | Optimized? | Framing | Privacy |
|---|---|---|---|---|
| Profile photo | ☐ | ☐ | contained | safe |
| Hero mockup [alias A] | ☐ | ☐ | bare (transparent) | needs-anonymization |
| Before/after set | ☐ | ☐ | gallery | safe/public |
| … | | | | |

**Framing legend:** `bare` = transparent PNG/WebP floating on the page (no frame); `contained` = photo in a framed box; `gallery` = grid + lightbox.

## Links & contact

| Item | Value | Publish? |
|---|---|---|
| Public email | | ☐ approved |
| LinkedIn | | ☐ approved |
| Other social | | ☐ approved |

## Placeholder tracker

Every temporary placeholder on the site, so none ship by accident.

| Location | What's missing | Blocking ship? |
|---|---|---|
| | | |

> **Ship gate:** this tracker must be empty (or every row explicitly accepted by the user) before deploy.

## Privacy ledger

The definitive list of anything that required de-identification, and how it was handled. Also used as the final privacy-sweep reference.

| Original (do NOT store the real value here — describe it) | Alias used | Where it appeared | Handled? |
|---|---|---|---|
| Real name of enterprise client | "a B2B [sector] platform" | case study title, slug, metadata | ☐ |
| Internal product name | "Project 1" | sub-project, URL slug | ☐ |
| … | | | |

> Note: the ledger records that an alias was applied and where — it should **not** itself become a decoder that pairs real names with aliases in the public repo. Keep it local; do not commit it if it contains real values.
