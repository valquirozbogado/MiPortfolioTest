# 01 · Intake

Before any building, the agent needs the user's data. This folder is how it gets it.

| File | Purpose |
|---|---|
| `USER-INTAKE-TEMPLATE.md` | The user fills this in. The agent reads it once. **Cheapest path — recommended.** |
| `intake-guide.md` | How the agent interprets the template, plus a chat-interview fallback for users who won't fill a form. |
| `content-inventory.md` | The asset checklist: what text, images, and links exist — and which touch confidential work. |

## Why a template instead of a chat

A long back-and-forth interview burns tokens and the user's patience. A structured document the user completes on their own time, then the agent reads in one pass, is dramatically cheaper and produces more complete data. Use the template first. Fall back to chat only for gaps or for users who prefer talking.

## The privacy tag — non-negotiable

Every project the user lists must be tagged:

- **`safe`** — public work, personal projects, open-source, anything with no confidentiality constraint.
- **`needs-anonymization`** — real work for an employer/client that must be de-identified before it appears.
- **`omit`** — too sensitive to show at all, even anonymized.

The agent must not render any `needs-anonymization` item until it has been through `04-content-and-anonymization/anonymization-protocol.md`.
