# Codex for Claude Code users

Codex can inspect a repository, edit code, run commands and tests, review changes, and delegate work. **Model choice, Plan mode, and permissions are separate controls.** Availability and labels vary by client and account.

## Change models

- **App / IDE:** use the model control below the message box. If you see a Power control, open **Advanced**.
- **CLI:** run `/model`; check the selection with `/status`.
- **At launch:** `codex -m <model-id>`.

Choose **Luna** for focused tasks, **Sol** for general development, and **Astra** for the hardest work, when available. This resembles choosing between Haiku, Sonnet, and Opus, but isn't a performance equivalence. Start with default reasoning effort; increase it for difficult debugging or planning.

## Familiar concepts

| Claude Code concept | Codex equivalent |
| --- | --- |
| `CLAUDE.md` | `AGENTS.md` for persistent project instructions |
| Personal / project settings | `~/.codex/config.toml` / `.codex/config.toml` |
| Plan mode | Plan mode; `/plan` in CLI |
| Autonomous execution | Normal execution within granted permissions |
| Subagents | Subagents and custom agent configurations |
| Skills / reusable commands | Skills containing a `SKILL.md` |
| MCP, hooks, plugins | MCP integrations, hooks, and plugins |

## Planning and permissions

- **Plan mode:** investigate and propose an approach before implementation. Example: `/plan Propose a retry strategy for failed backups`.
- **Normal execution:** ask Codex to implement, test, and fix a task.
- **Manual workflow:** say “Explain the changes first and wait for approval before editing.” Use read-only permissions when you need an enforced editing restriction.

The permissions menu controls access separately:

- **Ask for approval:** work within the workspace; request approval to cross certain boundaries.
- **Approve for me / Auto-review:** an automatic reviewer evaluates approval requests without expanding the workspace boundary.
- **Full access:** broader local access, when enabled and permitted.
- **Read-only:** inspection without local edits through supported CLI/profile controls.

Use the app's permissions control or CLI `/permissions`.

## Agents and skills

**Subagents** handle independent tasks in parallel. Ask explicitly:

> Use subagents to inspect the backup logic, review security, and identify missing tests. Summarize before editing.

They use additional tokens. CLI `/agent` lets you inspect agent threads. `AGENTS.md` provides instructions; it does not itself create agents.

**Skills** package reusable workflows with instructions and optional scripts. Project skills typically live at `.agents/skills/<name>/SKILL.md`. Invoke them with `/skills` or `$skill-name` in CLI/IDE; Codex can also select relevant skills automatically.

> Use $skill-creator to create a skill for reviewing backup configuration.

Put standing rules such as “Use pnpm” and “Run relevant tests” in `AGENTS.md`. CLI `/init` creates a starting scaffold.

## Handy CLI commands

| Command | Purpose |
| --- | --- |
| `/model`, `/status` | Select model; inspect session |
| `/plan`, `/permissions` | Control workflow and access |
| `/diff`, `/review` | Inspect changes; request review |
| `/skills`, `/mcp` | Browse skills and connected tools |
| `/compact` | Summarize a long conversation |
| `/resume`, `/fork` | Continue or branch a conversation |
| `/goal` | Set a persistent task objective |

For scripts or CI: `codex exec "your task"`. App and IDE command availability differs.

## Import your Claude Code setup

Use **`/import` in CLI** or **Settings → Import** in the desktop app. Import supported instructions, settings, skills, plugins, MCP configuration, hooks, subagents, and recent chats. Your original setup stays intact; review imported permissions and integrations.

First task to try:

> Explain this repository and how to run it. Don't edit anything yet. Then suggest a small improvement and help me implement and test it.

## Official references

[Models](https://learn.chatgpt.com/docs/models) · [CLI commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli) · [Permissions](https://learn.chatgpt.com/docs/permission-modes) · [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) · [Skills](https://learn.chatgpt.com/docs/build-skills) · [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) · [Import](https://learn.chatgpt.com/docs/import)
