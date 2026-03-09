# Deep Dive Role — Thorough Role & Company Research

> `/deep-dive-role` — Go deep on a specific role, team, or company. Research-heavy, no resume output.

## Voice-Enabled

Works great typed or spoken. Just say the company and role, or describe what you're curious about.

## Trigger

- `/deep-dive-role [company] [role]` — research a specific position
- `/deep-dive-role [company]` — research the company broadly (what roles exist, what it's like to work there)
- `/deep-dive-role [URL]` — research from a job listing URL

## Pre-Flight

1. Career profile at `~/.office-hours/profile.md` is helpful but not required for this skill. If it exists, read it to personalize the research. If not, proceed — this skill works standalone.

## Phase 1: Clarify Scope

If the user gave a specific role, confirm: **"Got it — deep dive on [Role] at [Company]. Anything specific you want me to focus on, or should I go broad?"**

Present focus options:

**"What do you want to focus on?"**
1. The team — who runs it, what they've shipped
2. The culture — what it's actually like to work there
3. The trajectory — where this role leads in 2-3 years
4. The market — how this compares to similar roles elsewhere
5. All of the above (takes longer but more thorough)

## Phase 2: Research (5 parallel streams)

### Stream 1: Company Deep Dive
- Mission, products, business model (in plain language)
- Leadership team — who are the key people, what's their background
- Recent news: funding, acquisitions, product launches, controversies
- Competitors and market position
- Tech stack and engineering practices (if relevant)
- Employee count, growth trajectory, office locations

### Stream 2: Team & Org Research
- Who leads this team? (LinkedIn, company blog, conference talks)
- What has this team shipped recently?
- How does this team fit into the broader org?
- Open roles on the same team (signals growth vs. backfill)
- Former employees — where did they go? (signals about the experience)

### Stream 3: Culture & Employee Experience
- Glassdoor reviews (look for patterns, not outliers)
- Blind posts (if available)
- LinkedIn posts from current employees (tone, what they share)
- Company values — are they performative or practiced?
- Remote/hybrid/in-office policy and how it actually works
- DEI signals (genuine vs. checkbox)

### Stream 4: Role Trajectory
- Where do people in this role typically go next?
- What does the promotion path look like?
- Is this a role that builds transferable skills or company-specific ones?
- How long do people typically stay? (LinkedIn tenure patterns)

### Stream 5: Market Context
- How does this company's version of this role compare to peers?
- Compensation benchmarks (Levels.fyi, Glassdoor, Blind)
- Is this function growing or shrinking industry-wide?
- What are the best companies for this role right now?

## Phase 3: Synthesize

```markdown
# Deep Dive: [Role] at [Company]
_Date: [date]_

## Company Overview
[3-5 paragraphs — what they do, where they are, where they're going. No marketing language.]

## Leadership
- **CEO:** [name, background, tenure]
- **Team lead (if known):** [name, background]
- **Key signal:** [what leadership tells you about the company's direction]

## The Team
- **What they own:** [products, features, or functions]
- **Recent work:** [what they've shipped or announced]
- **Team size:** [known or estimated]
- **Open roles:** [other positions on this team — growth signal]

## The Role — What You'd Actually Do
[2-3 paragraphs. Strip away the JD language and describe the day-to-day reality.]

## Culture — What It's Actually Like
- **Consistent signals:** [patterns across sources]
- **Watch-outs:** [recurring complaints or concerns]
- **Work style:** [remote policy, hours, pace]
- **DEI:** [genuine efforts vs. performative]

## Where This Role Leads
- **Typical next steps:** [promotion path, lateral moves]
- **Skills you'd build:** [transferable vs. company-specific]
- **Alumni trajectory:** [where do people go after?]

## Market Context
- **Comp range:** [benchmarks]
- **Peer companies for this role:** [who else to look at]
- **Market trend:** [growing/shrinking/stable function]

## Key People to Know About
- [Person]: [why they matter — hiring manager, skip-level, thought leader on the team]

## Sources
- [List of sources used, with dates]
```

## Phase 4: Connect to Profile (if available)

If a career profile exists, add a section:

```markdown
## How This Maps to Your Background
- **Strongest connections:** [specific experience → specific aspect of role]
- **Growth areas:** [what you'd learn here that you don't have now]
- **Positioning angle:** [how to frame your background for this team]
```

## Phase 5: Discuss

Present the deep dive, then:

**"What would you like to do with this?"**
1. Assess my fit for this role — `/assess-opportunity`
2. Prep for an interview here — `/prep-interview`
3. Compare to a similar role at another company
4. Dig deeper into something specific
5. I'm good — this is what I needed

Be ready to research specific people, compare companies, or transition to other skills.

## Output

- Deep dive saved to `~/.office-hours/deep-dives/[company]-[role]-[date].md`

## Notes

- This is research, not assessment. Don't score fit unless asked — that's what `/assess-opportunity` does.
- Prioritize insider signal over official messaging. Glassdoor patterns, LinkedIn behavior, and alumni trajectories reveal more than career pages.
- If you can't find information, say so. "I couldn't find details about the team structure" is better than guessing.
- Name specific sources and dates. Research goes stale fast.
