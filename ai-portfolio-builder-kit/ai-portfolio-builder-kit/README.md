# AI Portfolio Builder Kit

A complete, agent-ready knowledge base for building a **professional UX/UI (or developer) portfolio** with an AI coding agent — Claude Code, Antigravity, Cursor, or any capable agent.

You hand this folder to your agent. The agent reads it top-down, interviews you (or reads a template you fill in), and builds your portfolio using patterns that are already proven in production.

This kit is **distilled from a real portfolio build**: every pattern here shipped, every pitfall documented here was actually hit and fixed. It is fully **anonymized** — it contains no personal data, no client names, no project specifics. You supply those.

---

## What this is (and isn't)

| It **is** | It **is not** |
|---|---|
| A reusable playbook + component recipes + pitfalls | A theme you install with one command |
| Opinionated defaults (React + Vite + TypeScript) | Framework-locked — core lessons port anywhere |
| A system for an agent to follow and adapt | A finished website |
| Privacy-first by design | A place to store your real data |

---

## How to use it (3 steps)

1. **Give the whole folder to your agent.** Point it at `INDEX.md` and tell it: *"Read this kit and build my portfolio. Start with `00-orchestration/agent-playbook.md`."*
2. **Feed it your data.** Either fill in `01-intake/USER-INTAKE-TEMPLATE.md` (cheaper on tokens — recommended) or let the agent interview you.
3. **Let it build in phases.** The agent follows `00-orchestration/build-phases.md`, checking in at each gate.

---

## The one unbreakable rule

> **Never publish sensitive data.** Real client names, employer names under NDA, internal product names, personal contact details beyond what you intentionally expose, or confidential screenshots must never reach the code, the git history, or the deployed site.

This is not a suggestion. See `04-content-and-anonymization/anonymization-protocol.md`. The kit itself follows this rule so you can read it as a worked example.

---

## Map

Start at [`INDEX.md`](./INDEX.md) for the full orchestration map. The short version:

- `00-orchestration/` — how the agent should operate
- `01-intake/` — gather your data
- `02-architecture/` — stack & foundations
- `03-components/` — proven UI recipes
- `04-content-and-anonymization/` — what to write & how to stay safe
- `05-media-pipeline/` — image optimization
- `06-deployment/` — ship it
- `07-pitfalls/` — the mistakes, pre-solved
- `08-agent-tooling/` — skills, subagents, validation
- `09-quality/` — accessibility, performance, SEO, review

License: [MIT](./LICENSE).
