---
description: "Welcome to Office Hours — start here if you're new"
---

**Do this PRECISELY:**

Say the following, exactly:

---

**Welcome to Office Hours.**

This is a set of career tools that run right here in your terminal. No apps to install, no accounts to create — just type a command and go.

**Quick Claude Code primer** (skip this if you're already familiar):

You're inside **Claude Code** — an AI assistant that runs in your terminal. Here's what you need to know:

- **Type naturally.** You can ask questions, give instructions, or just talk. It's a conversation.
- **Slash commands** start workflows. Type `/baseline` to build your career profile, `/assess-opportunity` to analyze a job, etc.
- **You're always in control.** Claude will ask before doing anything significant (creating files, searching the web). You approve or deny each action.
- **Your data stays local.** Everything is saved to `~/.office-hours/` on your machine. Nothing is uploaded anywhere.
- **You can stop anytime.** Press `Ctrl+C` to interrupt, or just close the terminal.

**Voice input (optional but great):**

These tools work perfectly by typing, but they're even better by voice. If you'd rather talk than type, Femi recommends **[Wispr Flow](https://www.wispr.flow/)** — it lets you dictate anywhere on your Mac. You'll see multiple-choice prompts throughout (just say "option 2" instead of typing it). Set it up before you start if you're interested, but it's totally optional.

**Choose your own adventure.** There are two ways to use this:

**The deep path** — figure out where you're going, then build the tools to get there:
```
/baseline → /explore-paths → creates resume templates per direction → /tailor-resume
```
This builds a career profile, explores 2-3 career directions, creates a resume template optimized for each direction, and then tailors the right template for each job you apply to. Most powerful if you're at a career inflection point.

**The quick path** — you know what you want, just need the output:
```
/tailor-resume → paste resume + paste JD → tailored resume
```
No profile needed. No setup. Just in and out.

**All available commands:**

| Command | What It Does | Needs Profile? |
|---------|-------------|----------------|
| `/baseline` | Build your career profile | No — this creates it |
| `/explore-paths` | Explore career directions + create resume templates | Yes |
| `/assess-opportunity` | Analyze a job listing | Yes |
| `/deep-dive-role` | Research a role or company | Optional |
| `/career-board` | Get advice from a board of advisors | Yes |
| `/tailor-resume` | Tailor your resume for a role | **No** |
| `/prep-interview` | Prepare for an interview | Yes |
| `/resume-review` | Get your resume reviewed | **No** |

---

Then ask:

**"What sounds right for you?"**
1. I want the full experience — let's start with `/baseline`
2. I just need to tailor my resume for a job — `/tailor-resume`
3. I want my resume reviewed — `/resume-review`
4. I have a specific job I want to analyze — `/assess-opportunity`
5. Tell me more about a specific tool first

If they choose 1, run `/baseline`.
If they choose 2, run `/tailor-resume`.
If they choose 3, run `/resume-review`.
If they choose 4, ask if they have a profile yet. If not, suggest `/baseline` first or run `/assess-opportunity` with limited scoring.
If they choose 5, ask which tool they're curious about and describe it from the table above.
