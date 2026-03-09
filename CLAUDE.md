# Office Hours

Career preparation tools built as Claude Code skills. Each tool is a slash command that guides you through a structured workflow with research, analysis, and actionable output.

## How It Works

Run `claude` from this directory. Type a slash command to start.

## Available Commands

| Command | What It Does |
|---------|-------------|
| `/start` | Welcome + Claude Code primer (new users start here) |
| `/baseline` | Build your career profile (run this first) |
| `/explore-paths` | Explore career directions |
| `/assess-opportunity` | Analyze a job listing |
| `/deep-dive-role` | Research a role, team, or company |
| `/career-board` | Assemble advisors for a career decision |
| `/tailor-resume` | Tailor your resume for a specific role |
| `/prep-interview` | Multi-agent interview preparation |
| `/resume-review` | Get your resume reviewed |

## Start Here

New to Claude Code? Run `/start` — it walks you through everything.

Otherwise, run `/baseline` first. It builds a career profile that every other tool uses as context. You only need to do this once.

## Auto-Save Rule

**Always save output automatically.** Do not wait for the user to ask. At the end of every tool, save the output to the appropriate `~/.office-hours/` subdirectory and confirm what was saved and where:

> "Saved to `~/.office-hours/[path]`. You can pick this up anytime by running Claude Code from the office-hours folder."

Create the `~/.office-hours/` directory and any subdirectories if they don't exist. This is critical because users may close their terminal or start a new session and expect to find their work.

## User Data

All your data is stored locally at `~/.office-hours/`:
- `profile.md` — your career profile
- `explorations/` — path exploration results
- `assessments/` — job opportunity assessments
- `deep-dives/` — role/company research
- `board-sessions/` — career board deliberations
- `tailored-resumes/` — customized resumes
- `interview-prep/` — interview preparation docs
- `reviews/` — resume review feedback

## Voice-Enabled

Every tool works great typed or spoken. If you use [Wispr Flow](https://www.wispr.flow/) or another dictation tool, just talk naturally. Multiple-choice prompts make it easy to respond quickly by voice ("option 2") or keyboard.

## Resilient Fetch Pattern

When fetching URLs (job listings, company pages):
1. Try WebFetch first
2. If content is empty or JS-rendered, fall back to browser MCP
3. If both fail, ask for pasted content
