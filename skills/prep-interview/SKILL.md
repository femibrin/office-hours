# Prep Interview — Multi-Agent Interview Preparation

> `/prep-interview [company] [role]` — Parallel research pipeline for interview prep.

## Voice-Enabled

Works great typed or spoken. Just say the company and role, or share a link.

## Trigger

- `/prep-interview [company] [role]` — full prep
- `/prep-interview [URL]` — prep from job listing
- `/prep-interview` — describe the interview

## Pre-Flight

1. Check for career profile at `~/.office-hours/profile.md`. If missing, run `/baseline` first.
2. Read the profile.
3. Check if Gmail MCP is available (for recruiter email search). If not, skip email search — don't block the rest.

## Phase 1: Gather Context

Ask: **"When's the interview? And do you know who you're meeting with?"**

Also ask:
- "What stage is this? Phone screen, technical, panel, final?"
- "Anything specific you're worried about or want to prepare for?"

If they have a job listing URL, fetch it (resilient pattern).

## Phase 2: Parallel Research (4 agents)

Launch simultaneously:

### Agent 1: Company Deep Dive
Research mandate (3-5 web searches):
- Company mission, products, business model
- Recent news (last 6 months): funding, launches, leadership changes, controversies
- Culture signals: Glassdoor patterns, employee LinkedIn posts, company values
- Tech stack and engineering practices (if relevant to the role)
- Competitors and market position

Output: Company overview with specific talking points the user can reference.

### Agent 2: Role Analysis
Research mandate:
- Parse the JD (if available) for key requirements and signals
- What does this team own? What have they shipped?
- Who's the hiring manager? (LinkedIn search)
- Similar roles at peer companies — what's the market saying about this function?

Output: Role breakdown with fit narrative (mapping user's experience to requirements).

### Agent 3: Email Search (if Gmail MCP available)
Search Gmail for:
- Emails from/to the company domain
- Recruiter names mentioned
- Scheduling details
- Compensation mentions
- Any context the recruiter shared about the role or team

Output: Recruiter correspondence summary. If no emails found, say so — don't fabricate.

**If Gmail MCP unavailable:** Skip this agent. Note in output: "Email search skipped — Gmail not connected."

### Agent 4: Questions & Talking Points
Based on findings from other agents + user's profile:

**Likely questions (8-10):**
For each question:
- The question
- Why they'll ask it (what they're evaluating)
- Response outline (STAR format: Situation, Task, Action, Result)
- Specific example from the user's background to use

Categories:
- Behavioral (3-4)
- Technical/domain (2-3)
- Situational/hypothetical (2-3)

**Questions to ask them (3-5):**
- Specific to this company and role, not generic
- Signal genuine curiosity and preparation
- At least one about the team, one about the role's success metrics

## Phase 3: Synthesize

```markdown
# Interview Prep: [Role] at [Company]
_For: [Name] | Interview: [date/stage] | Generated: [date]_

## Recruiter Correspondence
[Summary of any email context, or "No prior correspondence found"]

## Company Overview
[3-4 paragraphs — what they do, where they're going, what matters to them]
- **Key talking points:** [3-4 things you can reference to show preparation]

## The Role
- **What you'd actually do:** [plain language description]
- **Team:** [what's known about the team]
- **Hiring manager:** [if found]
- **Success looks like:** [6-month and 12-month expectations, if inferable]

## Your Fit Narrative
**The story in one sentence:**
"[How to position the arc from their background to this specific role]"

**Strongest matches:**
- [Their experience] → [Role requirement]
- [Their experience] → [Role requirement]

**Gaps to address proactively:**
- [Gap]: [How to frame it as a strength or growth area]

## Likely Questions

### Behavioral
**1. [Question]**
_Why they ask:_ [what they're evaluating]
_Your angle:_ [which experience to draw from]
_Response outline:_
- Situation: [specific context]
- Task: [what you needed to do]
- Action: [what you did]
- Result: [outcome with metrics]

[Repeat for each question]

### Technical / Domain
[Same format]

### Situational
[Same format]

## Questions to Ask Them
1. [Question] — _why it's good:_ [signals preparation / gets useful info]
2. [Question]
3. [Question]

## Quick Reference Card
_Print this. Review 5 minutes before the call._

| | |
|-|-|
| **Company** | [one-line description] |
| **Role** | [title + team] |
| **Interviewer(s)** | [names if known] |
| **Your "Why [Company]"** | [one sentence] |
| **Your "Why this role"** | [one sentence] |
| **Top 3 talking points** | 1. [point] |
| | 2. [point] |
| | 3. [point] |
| **Your question for them** | [your best question] |
| **Concern to address proactively** | [your biggest gap + framing] |
```

## Phase 4: Review

Present the prep doc, then:

**"What would you like to do with this?"**
1. Practice a specific question — let's drill on it
2. Adjust my fit narrative — I'd frame it differently
3. Add a specific story or example I want to use
4. Generate more questions for a specific interviewer
5. This is great — I'm ready

Be ready to run mock Q&A, adjust angles, or deep-dive on specific concerns.

## Output

- Full prep doc saved to `~/.office-hours/interview-prep/[company]-[role]-[date].md`
- Quick reference card (also included in the doc, but designed to stand alone)

## Notes

- Speed matters. People run this the night before or morning of. Don't ask unnecessary questions — get to the prep doc fast.
- The fit narrative is the most important output. It's the thread that connects every answer: "Here's who I am, here's why I'm here, here's why it makes sense."
- STAR format outlines, not scripts. The user needs to sound natural, not rehearsed. Give them the structure and let them fill in the details.
- The Quick Reference Card should fit on one screen or one printed page. It's for the 5 minutes before the call when you're nervous and can't remember anything.
- If they've already run `/assess-opportunity` or `/deep-dive-role` for this company, reference those findings — don't re-research.
