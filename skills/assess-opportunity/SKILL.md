# Assess Opportunity — Job Listing Analysis

> `/assess-opportunity` — Analyze a job listing. Company research, fit scoring, honest assessment.

## Voice-Enabled

Works great typed or spoken. Share the link or describe the role — the system handles the rest.

## Trigger

- `/assess-opportunity [URL]` — analyze a specific job listing
- `/assess-opportunity [company] [role]` — analyze by name
- `/assess-opportunity` — paste or describe the opportunity

## Pre-Flight

1. Check for career profile at `~/.office-hours/profile.md`. If missing, run `/baseline` first — fit scoring requires knowing who you are.
2. Read the profile.

**Note:** All output from this tool saves automatically. You can close the terminal at any point after completion and find your work at `~/.office-hours/`.

## Phase 1: Get the Opportunity

**If URL provided:**
Use resilient fetch pattern:
1. WebFetch the URL
2. If content is empty/JS-rendered, fall back to browser MCP (init headless → navigate → get_content → close)
3. If both fail, ask: **"That URL didn't load. Can you paste the job description?"**

**If company + role provided:**
Search for the listing. If not found, ask for the URL or JD text.

**If nothing provided:**
Ask: **"What's the opportunity? Share a link, paste the JD, or just describe it."**

## Phase 2: Parallel Research (3 agents)

Launch these simultaneously:

### Agent 1: Company Research
- What does the company do? (in plain language, not marketing copy)
- Stage: startup / growth / enterprise / public
- Recent news (funding, layoffs, product launches, leadership changes)
- Culture signals (Glassdoor, Blind, LinkedIn posts from employees)
- Financial health indicators
- Tech stack and engineering culture (if relevant)

### Agent 2: Role Analysis
- What does this role actually do day-to-day?
- Where does it sit in the org? Who does it report to?
- Team size and composition (if inferable)
- What does success look like in 6 months? 12 months?
- Red flags: vague responsibilities, impossible requirements, title inflation/deflation
- Compensation benchmarks for this role at this company's stage/size

### Agent 3: Fit Assessment
Using the career profile, score fit across:

**Skill match (0-10):**
- Which of their skills directly apply?
- Which requirements are stretches but reachable?
- Which are genuine gaps?

**Experience match (0-10):**
- Does their seniority align with what's expected?
- Do their domains overlap?
- Is the scope comparable to what they've done?

**Direction match (0-10):**
- Does this move them toward one of their stated career directions?
- Or is it a lateral move, or a step backward on a path they care about?

**Energy match (0-10):**
- Based on their energizers and drains, how does this role's day-to-day likely feel?

**Overall Fit: [weighted average]/10**

## Phase 3: Synthesize

```markdown
# Opportunity Assessment: [Role] at [Company]
_For: [Name] | Date: [date]_

## The Role in Plain English
[2-3 sentences — what this person would actually be doing]

## Company Snapshot
- **What they do:** [plain language]
- **Stage:** [startup/growth/enterprise]
- **Size:** [employees, if known]
- **Recent signals:** [news, funding, culture indicators]
- **Financial health:** [what's known]

## Fit Assessment

| Dimension | Score | Key Signal |
|-----------|-------|------------|
| Skill match | X/10 | [strongest match + biggest gap] |
| Experience match | X/10 | [alignment or mismatch] |
| Direction match | X/10 | [does this advance their goals?] |
| Energy match | X/10 | [day-to-day alignment] |
| **Overall** | **X/10** | |

## What Works
- [specific strength → specific requirement]
- [specific strength → specific requirement]

## What's a Stretch
- [gap + how to address it in application/interview]

## Red Flags
- [anything concerning about the listing, company, or fit]

## Compensation Context
- **Benchmarks:** [range for this role/level/market]
- **Their floor:** [from profile, if stated]
- **Assessment:** [above/below/at market]

## The Honest Take
[2-3 sentences — would a good career coach say "go for it," "proceed with caution," or "skip it"? Why?]

## If You Apply
- [Positioning recommendation]
- [Which template/track to use for resume]
- [Key talking points for cover letter or outreach]

## If You Skip
- [What this tells you about what you're looking for]
```

## Phase 4: Discuss

Present the assessment, then:

**"Based on this assessment, what do you want to do?"**
1. Tailor my resume for this role — `/tailor-resume`
2. Deep dive on the company/team — `/deep-dive-role`
3. Bring this to my career board — `/career-board`
4. I have questions about the assessment
5. Skip this one — not the right fit

Be ready to go deeper on red flags, draft outreach, or connect back to their path exploration.

## Output

**Auto-save is mandatory.** Do not ask the user if they want to save. Save automatically and confirm:

> "Saved to `~/.office-hours/assessments/[company]-[role]-[date].md`. You can pick this up anytime — just run Claude Code from the office-hours folder."

- Assessment saved to `~/.office-hours/assessments/[company]-[role]-[date].md`
- Recommendation on whether to proceed

## Notes

- Don't be a cheerleader. A 4/10 fit is a 4/10 fit — say so, explain why, and help them decide if it's still worth pursuing.
- Compensation context matters. If the role is exciting but likely pays 40% below their floor, that's critical information.
- Red flags aren't dealbreakers — they're things to investigate. Frame them that way.
- If fit is strong (8+), proactively suggest next steps: "Want me to tailor your resume for this? Run `/tailor-resume`."
