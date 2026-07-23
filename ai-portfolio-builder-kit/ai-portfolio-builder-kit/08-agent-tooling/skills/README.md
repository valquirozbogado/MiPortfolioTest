# Reusable Skill Templates

Drop-in, **anonymized** skill files. If your agent supports skills (e.g. Claude Code, where skills live in `.claude/skills/<name>/SKILL.md`), copy a folder, fill in your specifics, and invoke it. If not, read them as procedures.

| Skill | Purpose |
|---|---|
| `security-audit.md` | Pre-push privacy & credential sweep. **Run before every deploy.** |
| `portfolio-builder.md` | Orchestrates a portfolio build using this whole kit |

## Important: keep identity out of shared skills

These templates are deliberately free of any personal data so they're safe to publish. If you customize one with your own real details (your name, your repo, your client tokens), that customized copy is **private** — keep it in your local `.claude/` and never commit it to a public repo. The anonymization protocol applies to your tooling too.
