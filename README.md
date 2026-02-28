# Career Repo

> Name TBD -- working title only.

AI-powered career preparation tools built with [Claude Code](https://docs.anthropic.com/en/docs/claude-code). By trade, I'm a Product Manager - my day to day is focusing on building AI tools for underwriters. Outside of work, I really value professional developmennt. I've been the recipient of great mentoring, coaching, and peer groups. I find that this is one of the most natural places I add value to my friends and to my network... and since I'm finding ways to tinker with Claude - this is where I'm starting. I'm building multi-agent systems that encode how I actually think about career positioning, built on a decade of coaching, mentoring, and professional development work.

I've been doing this work since undergrad -- career center coaching, casing hundreds of students through Deloitte & MLT, leading professional development efforts at Wharton. These tools automate the preparation workflow I've refined through years of helping people (and myself) navigate high-stakes career moments.

**Femi Brinson** -- Senior Product Strategist at a Fortune 100 insurer, leading AI product development for a $1B+ underwriting book. Ex-Google (Strategy & Ops), Wharton MBA.

---

## Projects

| Project | What It Does | Key Differentiator |
|---------|-------------|-------------------|
| [Interview Prep](./interview-prep/) | Company + role research with recruiter correspondence search | Parallel agents for company, role, email, and question generation -- produces a day-of reference card |
| [Resume Tailor](./resume-tailor/) | Template-based resume tailoring from job descriptions | Fit scoring, template selection across three career tracks, automated tracker updates |

**Coming soon:**
- **Path Assessment** -- Helps you evaluate which career track fits a given opportunity (Product vs. Strategy vs. PE Operations) and how to position accordingly.

---

## How These Work

Each project is a **Claude Code skill** -- a markdown file that defines a multi-step workflow with tool access, agent orchestration, and structured output. Skills are invoked as slash commands (`/prep-interview`, `/tailor-resume`) and executed by Claude Code's agent runtime.

The key building blocks:

- **Multi-agent fan-out** -- Parallel sub-agents with distinct system prompts that research independently and return structured results
- **MCP integrations** -- Gmail search for recruiter correspondence, Google Sheets for tracking, browser automation for job description fetching
- **Three career tracks** -- Product, Strategy, and PE Operations, each with dedicated resume templates and positioning logic
- **Pre-flight checks** -- Verify dependencies before doing expensive work. Fail fast, fail cheap.

No custom infrastructure. No deployment pipeline. Just markdown skill definitions, a local filesystem, and a model that can follow instructions.

---

## Architecture Philosophy

**Research before opinion.** Every agent has a research mandate. Before forming a position, agents execute web searches, fetch sources, and extract evidence. Generic advice is banned. Specific, sourced insights are expected.

**Structured output, not free text.** Every tool produces output in a defined schema -- fit narratives, question-response outlines, reference cards. Outputs are comparable across runs and scannable under pressure.

**The coach's instinct.** Good career preparation isn't just research -- it's asking the right questions first. What are you most worried about? Where's the gap in your story? What does this interviewer actually care about? These tools are built to guide the thinking, not just produce answers.

---

## Quick Start

**Preparing for an interview:**
```
> /prep-interview Acme "Senior PM, AI Platform"

--> 4 agents run in parallel (company, role, email search, questions)
--> Output: interview prep doc + quick reference card
--> Includes: recruiter email context, fit narrative, likely questions with STAR outlines
```

**Tailoring a resume:**
```
> /tailor-resume

--> Reads job description, selects best career track (Product/Strategy/PE Ops)
--> Scores fit, tailors from the matching template
--> Output: tailored resume + fit score + tracker update
```

---

## FAQ

**How is this different from using ChatGPT or Claude directly?**

Prompting a model once gives you a single-pass answer. These tools orchestrate multiple agents in parallel, each with distinct instructions and research mandates. The interview prep agent doesn't just "research a company" -- it runs four independent agents that combine company analysis, role mapping, recruiter email search, and tailored question generation into a unified prep document.

**Can I use these without Claude Code?**

The architecture patterns are transferable to any agent framework. The skill files themselves are Claude Code-specific. The READMEs document the design decisions and schemas so you can rebuild the workflows on other platforms.

**Are these production-ready?**

They're daily-use ready. I've used them for real interview prep and resume tailoring throughout an active job search. They're power-user tools for individual career preparation, designed to be forked and adapted.

---

## License

MIT
