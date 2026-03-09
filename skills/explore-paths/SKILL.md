# Explore Paths — Career Direction Discovery

> `/explore-paths` — Deep dive into where you've been and where you could go.

## Voice-Enabled

Works great typed or spoken. If you use [Wispr Flow](https://www.wispr.flow/) or another voice tool, just talk through your thinking — the system organizes it.

## Trigger

User runs `/explore-paths` with optional context:
- `/explore-paths` — open exploration
- `/explore-paths "I'm thinking about product management"` — focused exploration
- `/explore-paths "Should I stay in consulting or try something new?"` — comparative

## Pre-Flight

1. Check for career profile at `~/.office-hours/profile.md`. If missing, run `/baseline` first.
2. Read the profile to ground the exploration.

## Phase 1: Understand the Exploration

If the user provided context, acknowledge it and build from there.

If not, present:

**"What's driving the exploration?"**
1. I got an offer or opportunity and I'm not sure if it's the right move
2. I'm feeling stuck and want to see what's out there
3. I know I want a change but I'm not sure what direction
4. I'm happy but curious — what else could I do with my background?
5. Something specific happened — let me explain

Follow up based on their choice with 1-2 deepening questions. Examples:
- "Are there directions you've been curious about but haven't seriously considered?"
- "Is there a version of your career that excites you but feels unrealistic?"
- "What would you do if credentials and experience weren't a factor?"

## Phase 2: Map the Landscape

Based on their profile and exploration context, identify **3-5 realistic career directions**. For each:

### Research Phase (use web search)
- What does this path actually look like day-to-day?
- What's the typical entry point for someone with their background?
- What's the compensation range at their level?
- What's the market demand right now?
- Who are the people succeeding in this space, and what do their backgrounds look like?

### Fit Analysis
- **Transferable skills**: What from their background directly applies?
- **Gaps**: What's missing, and how hard is it to close?
- **Credibility bridge**: How do they tell the story of "why this path" given where they've been?
- **Timeline**: How long to be competitive? 3 months? 1 year? 3 years?
- **Risk profile**: What are they giving up? What's the downside?

## Phase 3: Build the Path Map

Create a structured comparison:

```markdown
# Career Path Exploration
_For: [Name] | Date: [date]_

## Your Starting Position
[1-2 sentences grounding where they are now, from profile]

## Paths Explored

### Path 1: [Direction]
**Fit Score: [X/10]**

**Why this could work:**
- [transferable skill + evidence]
- [market signal]

**What's missing:**
- [gap + how to close it]
- [credibility challenge + positioning strategy]

**Entry strategy:**
- [Specific, actionable first steps]
- [Timeline to competitive]

**Compensation range:** [range at their level]

**The honest assessment:**
[1-2 sentences — would a good career coach encourage this?]

---
[Repeat for each path]

## Comparison Matrix
| Factor | Path 1 | Path 2 | Path 3 |
|--------|--------|--------|--------|
| Fit with skills | | | |
| Gap to close | | | |
| Time to competitive | | | |
| Comp trajectory | | | |
| Energy alignment | | | |
| Risk level | | | |

## What I'd Push Back On
[Things the user might be over- or under-weighting]

## Suggested Next Steps
1. [Most impactful action for their top path]
2. [De-risking action]
3. [Learning/exploration action]
```

## Phase 4: Discuss

Present the path map. Ask: **"What resonates? What feels off?"**

This is a conversation, not a deliverable drop. Be ready to:
- Go deeper on any path they're curious about
- Challenge assumptions ("You said you want to avoid management, but your strongest signals are all leadership moments")
- Reframe ("You keep calling it a 'pivot' but this is actually a natural extension of what you've been doing")

## Phase 5: Create Resume Templates (Optional but Powerful)

After the path exploration, if 2-3 directions emerged, offer:

**"You've identified [2-3] career directions. Want me to create a resume template for each one?"**
1. Yes — create templates for all [N] directions
2. Just the top [1-2] — I'm most serious about those
3. Not yet — I want to think about it first

**If they say yes:**

For each direction, create a version of their resume that emphasizes the parts of their background most relevant to that path. The structure and formatting stay identical — only the bullet content, ordering, and skills line change.

Example for someone with finance + ops + strategy experience:
- **Strategy template:** Leads with strategic planning, executive communication, cross-functional leadership. Deemphasizes tactical/operational work.
- **Operations template:** Leads with process design, scaling, efficiency gains, team management. Highlights operational metrics.
- **Entrepreneurship/startup template:** Leads with 0-to-1 building, P&L exposure, initiative ownership. Emphasizes scrappiness and breadth.

Save templates to:
- `~/.office-hours/templates/[direction-1]-resume.md`
- `~/.office-hours/templates/[direction-2]-resume.md`
- `~/.office-hours/templates/[direction-3]-resume.md`

Also keep the original as `~/.office-hours/templates/base-resume.md` if not already saved.

Tell them: **"You now have [N] resume templates. When you run `/tailor-resume`, the system will automatically pick the best template for each job listing based on the JD signals. You can also override and choose manually."**

This is the highest-leverage output of the exploration — it turns career direction into resume infrastructure.

## Output

- Path exploration document saved to `~/.office-hours/explorations/[date]-paths.md`
- Resume templates per direction (if created) saved to `~/.office-hours/templates/`
- Updated profile if new aspirations or constraints emerged

## Notes

- Don't limit to "standard" career paths. If someone's background suggests an unusual but credible direction, surface it.
- Be honest about fit. A path that scores 4/10 isn't encouraging — it's a reality check with a plan.
- Always ground in their actual experience, not generic advice. "You should learn to code" is useless. "Your program scaling experience maps directly to growth PM — here's how to position it" is useful.
- The best career conversations surface things people already know but haven't said out loud yet. Listen for that.
