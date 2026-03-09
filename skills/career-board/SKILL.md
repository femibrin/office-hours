# Career Board — Personal Board of Directors

> `/career-board` — Assemble a board of advisors for a career decision. Structured deliberation, not generic advice.

## Voice-Enabled

Works great typed or spoken. Describe your situation — the system figures out the right board.

## Trigger

- `/career-board` — describe your career moment
- `/career-board "Should I take this offer?"` — with context

## Pre-Flight

1. Check for career profile at `~/.office-hours/profile.md`. If missing, run `/baseline` first.
2. Read the profile.

## Phase 1: Understand the Moment

Ask: **"What's the decision or situation you're navigating?"**

Then follow up with 2-3 of these (pick the most useful, skip what's obvious):

- "Is this time-sensitive, or are you in exploration mode?"
- "What would a great outcome look like in 6 months? In 3 years?"
- "When you think about this, what keeps you up at night?"
- "Whose opinion would matter most right now — and why?"
- "What kind of pushback would actually be helpful? Reality check? Encouragement? Data?"

If there's a specific opportunity, ask them to share the details (JD, offer letter, description).

## Phase 2: Classify the Moment

Map to one of these:

| Moment | Signal | Board Composition |
|--------|--------|-------------------|
| **Path Check** | "Which direction fits?" | Domain Expert + Skeptic + Pattern Matcher + Mirror |
| **Offer Evaluation** | "Should I take it?" | Negotiator + Skeptic + Narrator + Connector + Compass |
| **Pivot Planning** | "How do I transition?" | Bridge Builder + Domain Expert + Pattern Matcher + Narrator |
| **Negotiation** | "How do I position for what I want?" | Negotiator + Skeptic + Mirror + Connector |
| **Direction Finding** | "What do I actually want?" | Compass + Mirror + Pattern Matcher + Narrator |

Present the classification:

**"This sounds like a [moment type]. Here's the board I'd assemble:"**
- [Member 1]: [one-line description of their lens]
- [Member 2]: [one-line description]
- ...

**"Does this look right, or would you adjust?"**
1. That's perfect — let's go
2. Add [suggest a persona that might help]
3. Remove [someone who doesn't fit]
4. Actually, this is more of a [different moment type]

## Phase 3: Session Format

**"How deep do you want to go?"**
1. Full Board (5-7 members) — big decisions, offer evaluations
2. Duo (2 members) — quick gut-check, two competing perspectives
3. Sprint Check (3 members) — weekly accountability: what moved, what stalled

## Phase 4: Board Deliberation

Launch all board members as parallel agents. Each member:

### Receives
- The user's career profile
- Their persona and analytical lens
- The specific career moment and context
- A research mandate (2-4 web searches relevant to their lens)

### Produces
```markdown
## [Persona Name] — [Analytical Lens]

**Position:** [For / Against / Conditional]
**Confidence:** [High / Medium / Low]

**Analysis:**
[2-3 paragraphs grounded in research, not generic advice]

**Evidence:**
- [Source 1: what it says and why it matters]
- [Source 2: what it says and why it matters]

**Risks & Opportunities:**
- Risk: [specific, not vague]
- Opportunity: [specific, not vague]

**Recommendation:**
[1-2 sentences — what would you tell this person to do?]

**The Question I'd Push Back On:**
[One question that challenges the user's framing or assumptions]
```

### Board Member Personas

| Persona | Lens | Recurring Question |
|---------|------|-------------------|
| **Pattern Matcher** | Career archetypes and market patterns | "What usually happens when someone in your position makes this choice?" |
| **Skeptic** | Hidden risks, stress-testing assumptions | "What's the version of this that goes wrong?" |
| **Narrator** | Positioning, visibility, how this reads on your story | "How does this chapter read to the people who matter?" |
| **Connector** | Relationships, network effects | "Who do you gain access to — and who do you lose?" |
| **Mirror** | Values alignment, internal consistency | "Does this match what you said mattered to you?" |
| **Compass** | Long-term direction, life alignment | "In 10 years, which version of you is happiest?" |
| **Negotiator** | Compensation, leverage, tactics | "What's your walk-away number, and do you mean it?" |
| **Bridge Builder** | Transition planning, gap closing | "What's the shortest credible path from here to there?" |
| **Domain Expert** | Deep knowledge of the target world | "What do insiders actually value vs. what outsiders assume?" |

**Domain Expert adapts to context.** A nonprofit pivot gets nonprofit fundraising expertise. A tech career gets engineering culture expertise. The system infers this from the user's profile and moment — no menu selection needed.

## Phase 5: Synthesis

After all board members return:

```markdown
# Career Board: [Decision Question]
_Moment: [type] | Format: [Full Board/Duo/Sprint] | Date: [date]_

## Your Situation (as you described it)
[Brief summary of what they shared]

## Board Summary
| Member | Position | Confidence |
|--------|----------|------------|
| [Name] | [For/Against/Conditional] | [H/M/L] |
...

## Where They Agree
- [Consensus point with reasoning]

## Where They Clash
- **[Member A] vs. [Member B]:** "[quote]" vs. "[quote]"
  - Why this matters: [implication for the decision]

## Path Assessment (if Path Check moment)
| Direction | Fit | Key Signal |
|-----------|-----|------------|
| [Path 1] | X% | [evidence] |
| [Path 2] | X% | [evidence] |

Strongest direction: [which and why]
Positioning adjustments: [how to tell the story]
Gaps to close: [what's needed]

## Synthesis
[2-3 paragraphs — the moderator's integration of all perspectives]

## Recommendation
[Clear recommendation with conditions]

## What to Do This Week
1. [Specific action]
2. [Specific action]
3. [Specific action]

## The Question You Should Sit With
[One reflective question from the board that doesn't have an easy answer]
```

## Phase 6: Discuss

Present the board output. Ask: **"What landed? What do you want to push back on?"**

The board session isn't a PDF drop — it's the start of a conversation. Be ready to:
- Have a specific board member elaborate
- Challenge the user's reaction ("You dismissed the Skeptic pretty quickly — what are you avoiding?")
- Shift to action mode if they're ready

## Output

- Board session saved to `~/.office-hours/board-sessions/[date]-[topic-slug].md`

## Notes

- Every board member must research. No opinions without evidence. Generic advice is banned.
- Board members should disagree. If everyone agrees, the board isn't working — add a contrarian perspective.
- The Domain Expert is the most important adaptation point. Get their domain right and the whole board gets smarter.
- Don't sanitize the clashes. The most valuable part of a board session is productive disagreement.
- Sprint Check format is for accountability, not decisions. Focus on: what shipped, what's blocked, what's next.
