# Baseline — Career Profile Intake

> `/baseline` — Build your career profile. Run this first. Every other skill uses it.

## Voice-Enabled

Works great typed or spoken. If you use [Wispr Flow](https://www.wispr.flow/) or another voice tool, just talk naturally — the system extracts what it needs. No forms to fill out.

## Trigger

- User runs `/baseline`
- Or: any other Office Hours skill is run and no profile exists at `~/.office-hours/profile.md`

## Pre-Flight

1. Check if `~/.office-hours/` directory exists. Create it if not.
2. Check if `~/.office-hours/profile.md` exists. If it does, ask: "You already have a profile. Want to update it or start fresh?"

## Phase 1: Gather Materials

Ask the user to provide **any combination** of:
- A resume (PDF, text, or pasted)
- A LinkedIn profile URL
- A written summary of their career so far
- Just start talking about their background

Present these options:

**"How would you like to get started?"**
1. Paste my resume
2. Share a LinkedIn URL
3. Just talk through my background
4. Point to a file on my machine

Wait for their choice. If they skip the menu and just start talking, that works too — roll with it.

If they choose 2, use the resilient fetch pattern (WebFetch → browser MCP → ask for paste).
If they choose 4, ask for the file path and read it.

## Phase 2: Extract the Profile

From whatever they provided, extract:

### Experience Arc
- Not just titles — the trajectory. Where did they start? What patterns emerge? What's accelerating or shifting?
- Map transitions: what caused each move? (Promoted? Recruited? Pivoted? Laid off? Pulled toward something?)

### Core Skills
- The obvious ones (project management, data analysis, etc.)
- The ones between the lines ("grew a program from 5 to 500 students" = growth operations, community building, not just "education")

### Domains
- Industries and functional areas where they have credibility
- Adjacent domains they could enter with positioning

### Seniority & Scope
- Managing people? Budgets? Programs? Strategy? All of the above?
- IC vs. manager vs. leader vs. executive — and which do they prefer?

### Stated Aspirations
- What have they said they want? (If present in materials)
- What's implied by their choices?

### Open Questions
- What's unclear or in tension about their trajectory?
- Where do their stated goals conflict with their revealed preferences?

## Phase 3: Deepen with Questions

After extracting what you can, ask these — conversationally, not as a checklist. Skip any that were already answered:

**Career direction:**
- "What are 2-3 directions you could see yourself going? They don't have to be realistic yet."
- "What parts of your career have you enjoyed most — and what are you ready to leave behind?"

**Hidden strengths:**
- "Is there anything in your background that you feel is undervalued or hard to translate?"
- "What do people come to you for — not your job title, but what they actually ask you about?"

**Constraints and preferences:**
- "Any non-negotiables? Geography, remote, comp floor, industry, team size?"
- "What does a great day at work actually look like for you?"

**Energy and motivation:**
- "When was the last time you were genuinely excited about your work? What was happening?"
- "What drains you fastest?"

Let the conversation be natural. Don't ask all of these — pick the ones that fill gaps in what they already shared. 3-5 follow-up questions max.

When asking about career direction, offer multiple-choice options based on what you've learned:

**"Based on what you've shared, I see a few possible directions. Which resonates most?"**
1. [Direction inferred from their background]
2. [Direction inferred from their background]
3. [Direction inferred from their background]
4. Something else — let me describe it
5. I'm not sure yet — that's what I'm trying to figure out

This makes it easier to respond (especially by voice) and surfaces options they might not have articulated.

## Phase 4: Generate Profile

Write the profile to `~/.office-hours/profile.md` using this structure:

```markdown
# Career Profile
_Generated: [date] | Last updated: [date]_

## Experience Arc
[2-3 paragraph narrative of their trajectory — not a resume rewrite, but the story]

## Core Skills
- [Skill]: [evidence]
- [Skill]: [evidence]
...

## Domains
- [Domain]: [level of credibility — deep/moderate/adjacent]
...

## Seniority & Scope
[Current level, what they manage, IC vs. management preference]

## Career Directions (Self-Identified)
1. [Direction]: [why it appeals, how realistic]
2. [Direction]: [why it appeals, how realistic]
3. [Direction]: [why it appeals, how realistic]

## Strengths (Including Hidden Ones)
- [Strength]: [evidence]
...

## What Energizes / What Drains
- Energizers: [list]
- Drains: [list]

## Non-Negotiables
- [constraint]
...

## Open Questions
- [tension or uncertainty in their trajectory]
...

## Raw Materials
- [What they provided: resume, LinkedIn, verbal, etc.]
- [Date of most recent input]
```

## Phase 5: Confirm

Show the user their profile. Ask: **"Does this feel right? Anything I'm missing or got wrong?"**

Incorporate any corrections. Save the final version.

Then present next steps:

**"Your profile is saved. What would you like to do next?"**
1. Explore career paths — `/explore-paths`
2. Assess a specific job opportunity — `/assess-opportunity`
3. Deep dive on a role or company — `/deep-dive-role`
4. Get my resume reviewed — `/resume-review`
5. I'm good for now

This gives them a clear on-ramp to the rest of the toolkit.

## Output

- `~/.office-hours/profile.md` — the career profile
- Confirmation message with next steps

## Notes

- This is the foundation. Every other skill checks for this file first.
- The profile should feel like talking to a good career coach, not filling out a form.
- Don't over-structure the conversation. Let them talk. Extract signal from noise.
- If they provide minimal input, that's okay — build what you can and note what's missing.
