# Office Hours

AI-powered tools for people navigating what's next. Built for community, powered by [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Office Hours started the way a lot of good things start — with people showing up for each other. Courtnee and I have always held "office hours" — the kind where you text your friend "hey, can I get 30 minutes?" and end up talking through a career decision, rewriting resume bullets, or prepping for an interview. We both believe that your ~network~ community is your most valuable asset, and that showing up for people is how you build it.

These tools are that practice, systematized. They encode how I actually think about career positioning, built on a decade of coaching, mentoring, and professional development work. The career tools are where we started, but Office Hours is bigger than that — it's a way our community gives back, making the kind of coaching that used to require knowing the right people accessible to everyone in our circle. In the spirit of that, when you use it... leave me / us some feedback! 

**Femi Brinson** — Senior Product Manager building AI products at a Fortune 100 insurer. Ex-Google (Strategy & Ops), Wharton MBA.

---

## Getting Started

New to all of this? Start here. You don't need to be technical.

1. **[What Is a Terminal?](./docs/00-what-is-a-terminal.md)** — 2 minutes. Covers what a terminal is, how to open one, and the 5 commands you need.
2. **[Installation](./docs/02-installation.md)** — 15 minutes. Install Node.js, Claude Code, and get your Claude subscription. Works on Mac and Windows.
3. **[Your First Session](./docs/03-first-session.md)** — What to expect when you type `/start`.

Or read the **[full introduction](./docs/01-introduction.md)** for an overview of everything Office Hours can do.

**New to Claude Code?** These resources will get you up to speed:
- [Claude Code for Everyone](https://ccforeveryone.com/) — Carl Vellotti's intro course, built for non-technical users
- [Claude Code Tutorial for Beginners (2026)](https://dev.to/ayyazzafar/claude-code-tutorial-for-beginners-2026-from-installation-to-building-your-first-project-1lma)
- [How to Start with Claude Code (The Easiest Way)](https://theaibreak.substack.com/p/tutorial-how-to-start-with-claude) — browser-based, no terminal needed to try it
- [Official Claude Code Docs](https://code.claude.com/docs/en/quickstart)

---

## Quick Start

```bash
# 1. Install Claude Code (if you haven't)
# Visit: https://docs.anthropic.com/en/docs/claude-code

# 2. Clone this repo
git clone https://github.com/femibrin/office-hours.git
cd office-hours

# 3. Start Claude Code
claude

# 4. Type /start — it'll walk you through everything
/start
```

That's it. No dependencies, no API keys beyond Claude Code. `/start` gives you a primer on Claude Code, shows you all the tools, and gets you going.

**Voice input (optional):** These tools work great by typing, but even better by voice. If you'd rather talk than type, check out [Wispr Flow](https://www.wispr.flow/) — it lets you dictate anywhere on your Mac. You'll see multiple-choice prompts throughout (just say "option 2"). Femi uses it daily and recommends setting it up before you start.

---

## Tools

| Command | What It Does |
|---------|-------------|
| `/start` | **Start here** — Claude Code primer + toolkit overview |
| `/baseline` | Build your career profile — the foundation everything else uses |
| `/explore-paths` | Deep dive into career directions: where you've been, where you could go |
| `/assess-opportunity` | Analyze a job listing: company research, fit scoring, honest assessment |
| `/deep-dive-role` | Thorough research on a role, team, or company |
| `/career-board` | Assemble a personal board of directors for a career decision |
| `/tailor-resume` | Tailor your resume for a specific job listing |
| `/prep-interview` | Multi-agent interview prep: company, role, email search, questions |
| `/resume-review` | Resume critique with specific, actionable feedback |

### Choose Your Own Adventure

**The deep path** — figure out where you're going, then build the infrastructure to get there:

```
/baseline          → Build your career profile (once)
    ↓
/explore-paths     → Explore 2-3 career directions
    ↓                 → Creates a resume template for each direction
/assess-opportunity → Analyze a specific role
    ↓
/tailor-resume     → Auto-selects the best template and tailors it
    ↓
/prep-interview    → Prepare for the interview
```

This is the most powerful flow. After `/explore-paths`, you'll have resume templates optimized for each career direction — so every time you run `/tailor-resume`, the system picks the right template and tailors from there. Same as having three versions of your resume ready to go.

**The quick path** — you know what you want, just need the output:

```
/tailor-resume     → Paste your resume + paste a JD → get a tailored resume
/resume-review     → Paste your resume → get specific feedback
```

No profile, no templates, no setup. Just in and out.

---

## How These Work

Each tool is a **Claude Code slash command** backed by a skill file — a markdown document that defines a multi-step workflow with research mandates, structured output, and decision points.

When you type `/assess-opportunity`, Claude Code reads the skill definition and executes it: fetching the job listing, running parallel research agents, scoring your fit, and presenting the results with clear next steps.

**Key patterns:**

- **Multiple-choice prompts** — At every decision point, you get numbered options. Easy to respond by voice ("option 2") or keyboard. You can always ignore the menu and just talk.
- **Bring your own resume** — If you have a resume, the tools update your bullets and positioning without touching your formatting. If you don't have one yet, there's a blank template to start from.
- **Parallel agents** — Interview prep runs 4 research agents simultaneously. Career board launches 5-7 advisors at once. Research happens fast.
- **Profile-aware** — Once you run `/baseline`, every tool knows your background, skills, aspirations, and constraints. No re-explaining yourself.
- **Resilient fetching** — Job listing URLs get fetched automatically, with fallback to browser automation, with fallback to "just paste it."
- **Local storage** — All your data stays on your machine at `~/.office-hours/`. Nothing leaves your laptop.

---

## Voice-Enabled

Every tool is designed to work well with voice input. If you use [Wispr Flow](https://www.wispr.flow/) or another dictation tool, just talk naturally — the system extracts what it needs. Multiple-choice prompts make it especially easy: just say "option 3" or describe what you want.

You don't need voice tools. Everything works perfectly typed. But if you're the kind of person who thinks better out loud, these tools are built for that.

---

## Architecture

```
office-hours/
├── .claude/
│   └── commands/          ← Slash command entry points
│       ├── start.md           ← Start here (Claude Code primer)
│       ├── baseline.md
│       ├── assess-opportunity.md
│       ├── deep-dive-role.md
│       ├── career-board.md
│       ├── tailor-resume.md
│       ├── prep-interview.md
│       └── resume-review.md
├── skills/                ← Full skill definitions
│   ├── baseline/
│   ├── explore-paths/
│   ├── assess-opportunity/
│   ├── deep-dive-role/
│   ├── career-board/
│   ├── tailor-resume/
│   └── resume-review/
├── templates/
│   └── resume-template.md ← Blank resume for users who don't have one
├── CLAUDE.md              ← Project context for Claude Code
└── README.md
```

The commands in `.claude/commands/` are thin wrappers — they load the corresponding skill file and execute it. The skill files in `skills/` contain the full workflow logic: phases, prompts, output schemas, and agent orchestration instructions.

---

## What Makes This Different

**Research before opinion.** Every agent has a research mandate. Before forming a position, agents execute web searches, fetch sources, and extract evidence. Generic advice is banned. Specific, sourced insights are expected.

**Structured output, not free text.** Every tool produces output in a defined schema — fit scores, path assessments, board deliberations, reference cards. Outputs are comparable across runs and scannable under pressure.

**The coach's instinct.** Good career preparation isn't just research — it's asking the right questions first. What are you most worried about? Where's the gap in your story? What does this interviewer actually care about? These tools guide the thinking, not just produce answers.

**Profile-aware.** Run `/baseline` once and every tool starts from a deep understanding of who you are, what you've done, and where you want to go. No cold starts.

---

## Requirements

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) (free to install, requires a Claude plan, $20/month)
- That's it

**Optional but nice:**
- [Wispr Flow](https://www.wispr.flow/) or another voice input tool
- Gmail MCP connection (for recruiter email search in `/prep-interview`)
- Browser MCP (for fetching JS-rendered job listings)

---

## FAQ

**How is this different from using ChatGPT or Claude directly?**

Prompting a model once gives you a single-pass answer. These tools orchestrate multi-step workflows with parallel research agents, structured scoring, and profile-aware context. The interview prep tool doesn't just "research a company" — it runs four independent agents that combine company analysis, role mapping, email correspondence search, and tailored question generation into a unified prep document.

**Can I use these without Claude Code?**

The architecture patterns are transferable to any agent framework. The skill files themselves are Claude Code-specific. They're well-documented enough that you could rebuild the workflows on other platforms.

**Is my data private?**

Yes. Everything stays on your machine at `~/.office-hours/`. Nothing is sent anywhere except through Claude Code's normal model calls. No analytics, no tracking, no external storage.

**Can I customize the tools?**

Fork the repo and edit the skill files. They're just markdown — readable and modifiable. Want to add a new board member persona? Edit `skills/career-board/SKILL.md`. Want to change the fit scoring criteria? Edit `skills/assess-opportunity/SKILL.md`.

---

## License

MIT
