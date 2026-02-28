# Career Board -- Personal Board of Directors + Path Assessment

A multi-agent system that helps you build and consult a personal board of directors tailored to your career moment. Instead of generic advice, it asks the questions a good career coach would ask first, assembles the right advisors for your situation, and produces a research-backed recommendation.

## Problem Statement

Most career decisions get made one of two ways: alone in your head, or by polling friends who all share your blind spots. The "personal board of directors" concept -- popularized by programs like MLT, I4RC, and countless professional development offices -- is powerful in theory. In practice, most people don't have seven advisors on speed dial who will drop everything to think deeply about their situation.

Even when you do have great advisors, you're limited by who you know. A nonprofit director deciding whether to launch a capital campaign doesn't need the same board as a public health researcher weighing a move into policy. A fire captain considering emergency management leadership needs different counsel than a chef opening a second location. But building the right board for each moment? That's the part nobody teaches you.

This tool does three things:
1. **Asks the right questions first** -- clarifies what you're actually deciding and what kind of thinking you need
2. **Assembles a board that fits the moment** -- different career moments need different perspectives
3. **Runs a structured deliberation** -- each board member researches independently, forms a position, and disagrees where it matters

## Architecture

```
  Resume / LinkedIn / Career Summary
        |
        v
  +---------------+
  |    Baseline    |  <-- Who are you? Parse background, extract
  +---------------+      skills, map experience, identify strengths
        |
        v
  Your Career Profile (stored for future sessions)
  - Experience arc, key skills, domains, seniority
  - Stated aspirations and open questions
  - Strengths, gaps, and patterns
        |
        v
  "I have a career moment"
        |
        v
  +---------------+
  |  Career Coach  |  <-- Introspective questions to clarify the moment
  +---------------+      (informed by your baseline)
        |
        v
  What kind of moment?
  +--------+--------+--------+--------+
  |        |        |        |        |
  v        v        v        v        v
 Path    Offer    Pivot   Negoti-  "What
 Check   Eval     Plan    ation    do I
                                   want?"
        |
        v
  +----------------+
  | Board Assembly |  <-- Selects personas based on moment + your profile
  +----------------+
        |
        v
  Fan out to parallel agents (4-7)
   +----+----+----+----+----+
   |    |    |    |    |    |
   v    v    v    v    v    v
  [Board Member 1] ... [Board Member N]
   Each member:
   1. Receives your profile + persona + analytical lens
   2. Researches (web search, source reading)
   3. Forms evidence-based position
   4. Returns structured analysis
        |
        v
  +---------------+
  |  Synthesizer  |  <-- Agreements, clashes, recommendation
  +---------------+
        |
        v
  Decision Brief + Board Rationale
```

## Step 1: Baseline — Who Are You?

Before any board can advise you, it needs to know who you are. The system starts by building a career profile from whatever you provide — a resume, a LinkedIn URL, or just a few paragraphs about your background.

**What you provide (any of these):**
- A resume or CV (PDF, text, or pasted)
- A LinkedIn profile URL
- A written summary of your career so far

**What the system extracts:**
- **Experience arc** — your trajectory, not just your title history. Where did you start, what patterns emerge, what's accelerating?
- **Core skills** — both the ones you'd list on a resume and the ones that show up between the lines (e.g., "ran a tutoring program from 15 to 200 students" = growth operations, not just teaching)
- **Domains** — the industries and functional areas where you have credibility
- **Seniority and scope** — are you managing people, budgets, programs, strategy, or all of the above?
- **Stated aspirations** — what you've said you want (if present in your materials)
- **Open questions** — what's unclear or in tension about your trajectory

**What you add:**
- What are the 2-3 directions you could see yourself going?
- What parts of your career have you enjoyed most — and what are you ready to leave behind?
- Is there anything in your background that you feel is undervalued or hard to translate?

This profile is stored and reused across sessions. You build it once, and every future board session starts with full context about who you are.

## Step 2: The Career Moment

With your baseline established, the system asks about the specific moment you're navigating. This is where most AI tools start — but without the baseline, the advice is generic. With it, the questions get sharper and the board gets smarter.

### Discovery Questions

**Understanding the moment:**
- What's the decision or situation you're navigating?
- Is this time-sensitive, or are you in exploration mode?
- What would a great outcome look like in 6 months? In 3 years?

**Understanding what's missing:**
- When you think about this decision, what keeps you up at night?
- Whose opinion would matter most to you right now -- and why?
- What kind of pushback would actually be helpful? (Reality check? Encouragement? Data?)

**Understanding the opportunity (if applicable):**
- Share the job description, role overview, or opportunity details
- What's your experience level in this space? (Breaking in / Established / Senior)

These answers — combined with your baseline profile — determine everything downstream: which board members show up, what they research, and how they frame their analysis. There are no hardcoded career tracks. The system discovers your world from your profile and adapts accordingly.

## Career Moments

| Moment | What It Means | Board Composition |
| --- | --- | --- |
| **Path Check** | "Which direction fits this opportunity?" | Domain Expert + Skeptic + Pattern Matcher + Mirror |
| **Offer Evaluation** | "Should I take this?" | Negotiator + Skeptic + Narrator + Connector + Compass |
| **Pivot Planning** | "How do I transition to X?" | Bridge Builder + Domain Expert + Pattern Matcher + Narrator |
| **Negotiation** | "How do I position for what I want?" | Negotiator + Skeptic + Mirror + Connector |
| **Direction Finding** | "What do I actually want?" | Compass + Mirror + Pattern Matcher + Narrator |

## Board Members

Board composition adapts to your moment and context. These are the available personas:

| Persona | Analytical Lens | Recurring Question |
| --- | --- | --- |
| **Pattern Matcher** | Compares your situation to career archetypes and market patterns | "What usually happens when someone in this position makes this choice?" |
| **Skeptic** | Stress-tests assumptions, finds the hidden risks | "What's the version of this that goes wrong, and how likely is it?" |
| **Narrator** | Thinks about positioning, visibility, and how this reads on your story | "How does this chapter of your career read to the people who matter?" |
| **Connector** | Maps relationship and network implications | "Who do you gain access to -- and who do you lose?" |
| **Mirror** | Reflects your stated values back against your actual choices | "Does this align with what you said mattered to you last time?" |
| **Compass** | Long-term direction and alignment with life goals | "In 10 years, which version of you is happiest with this decision?" |
| **Negotiator** | Compensation, leverage, and positioning tactics | "What's your walk-away number, and do you actually mean it?" |
| **Bridge Builder** | Transition planning, skill gap analysis, credibility building | "What's the shortest credible path from where you are to where you want to be?" |
| **Domain Expert** | Deep knowledge of the world you're entering or operating in | "What do insiders in this space actually value vs. what outsiders assume?" |

### How the Domain Expert Adapts

The Domain Expert isn't a fixed persona -- it reshapes itself based on your context and the opportunity you're evaluating. Some examples:

- **Nonprofit fundraising**: Evaluates through donor relations, grant strategy, board governance, and mission alignment
- **Corporate leadership**: Evaluates through executive presence, P&L ownership, cross-functional influence, and succession dynamics
- **Entrepreneurship**: Evaluates through market timing, unit economics, founder-market fit, and funding landscape
- **Public sector / policy**: Evaluates through stakeholder mapping, regulatory landscape, budget cycles, and coalition building
- **Creative / culinary / hospitality**: Evaluates through brand positioning, operational scalability, market differentiation, and talent pipeline
- **Healthcare / education**: Evaluates through credentialing requirements, institutional dynamics, impact measurement, and career ladders

The system infers this from your discovery answers. You don't select from a menu -- the Domain Expert is constructed to match your world.

Other personas adapt their research patterns too. The Skeptic searches for different failure modes in a nonprofit capital campaign than in a tech career pivot. The Narrator frames positioning differently for a public sector leader than for a startup founder.

## Path Assessment Mode

When the moment is "Path Check," the board focuses on evaluating where an opportunity fits relative to your career directions. The directions aren't predetermined -- they come from your discovery answers. The system identifies the 2-4 paths that are realistic for your background and scores the opportunity against each one.

### Example: Former Management Consultant

**Background:** 5 years at a consulting firm. Led client engagements in financial services. Strong in structured problem-solving, exec communication, and cross-functional workstreams. Considering what's next.

```
┌──────────────────────────────────────────────────────────────┐
│ Path Fit Assessment                                          │
├────────────────────┬───────┬────────────────────────────────-┤
│ Direction          │ Fit   │ Key Signal                      │
├────────────────────┼───────┼────────────────────────────────-┤
│ Corporate Strategy │ 90%   │ Exec fluency + structured       │
│                    │       │ problem-solving translate direct │
│ Product Management │ 65%   │ Analytical rigor is there, but  │
│                    │       │ no shipping experience           │
│ Operations (PE)    │ 70%   │ Strong on process, needs P&L    │
│                    │       │ ownership narrative              │
└────────────────────┴───────┴────────────────────────────────-┘

Strongest direction: Corporate Strategy
Positioning adjustments: Lead with client impact stories, not
  methodology. Strategy teams want judgment, not frameworks.
Gaps to close: For Product -- build a side project or internal
  product initiative to demonstrate shipping. For Ops -- seek
  a rotation or project with direct P&L exposure.
```

### Example: Former Educator Exploring a Pivot

**Background:** 8 years as a high school math teacher. Department chair for 3 years. Ran a tutoring program that grew from 15 to 200 students. Passionate about education but ready for a new challenge.

```
┌──────────────────────────────────────────────────────────────┐
│ Path Fit Assessment                                          │
├──────────────────────┬───────┬──────────────────────────────-┤
│ Direction            │ Fit   │ Key Signal                    │
├──────────────────────┼───────┼──────────────────────────────-┤
│ Education Consulting │ 80%   │ Deep domain expertise +       │
│                      │       │ program scaling experience    │
│ EdTech Startup       │ 60%   │ User insight is strong, but   │
│                      │       │ needs product/biz language    │
│ School Ops / Admin   │ 75%   │ Department chair + program    │
│                      │       │ growth = ops credibility      │
└──────────────────────┴───────┴──────────────────────────────-┘

Strongest direction: Education Consulting
Positioning adjustments: Frame the tutoring program as a
  "0-to-200 user growth story" -- that's startup language
  dressed in education experience.
Gaps to close: For EdTech -- partner with a builder or take a
  product course to learn roadmap and prioritization vocabulary.
  For School Ops -- get budget management exposure, even if it
  means volunteering for the school's finance committee.
```

### Example: Public Sector Professional Weighing Options

**Background:** 6 years at a federal agency in community health. Led a multi-city program rollout. Strong in stakeholder management, grant compliance, and coalition building. Exploring whether to stay in government, go nonprofit, or move to the private sector.

```
┌──────────────────────────────────────────────────────────────┐
│ Path Fit Assessment                                          │
├─────────────────────┬───────┬───────────────────────────────-┤
│ Direction           │ Fit   │ Key Signal                     │
├─────────────────────┼───────┼───────────────────────────────-┤
│ Nonprofit Leadership│ 85%   │ Mission alignment + program    │
│                     │       │ management + grant fluency     │
│ Gov't Senior Exec   │ 75%   │ Strong track record, but needs │
│                     │       │ SES-level visibility           │
│ Healthcare Corp     │ 50%   │ Domain knowledge transfers,    │
│                     │       │ but no P&L or commercial exp   │
└─────────────────────┴───────┴───────────────────────────────-┘

Strongest direction: Nonprofit Leadership
Positioning adjustments: Translate "multi-city rollout" into
  scale and impact language -- "managed $X budget across Y
  sites reaching Z people." Nonprofits value government
  credibility more than the private sector does.
Gaps to close: For Corporate -- seek a fellowship or detail
  assignment that gives you commercial exposure. For Gov't
  Senior Exec -- build relationships with SES leaders and
  seek an acting role or detail at a higher grade.
```

The board members then deliberate on the fit assessment -- the Pattern Matcher compares to archetypes, the Skeptic challenges the scoring, the Bridge Builder maps what's needed to close gaps.

## Session Formats

| Format | Members | Duration | Best For |
| --- | --- | --- | --- |
| **Full Board** | 5-7 | Comprehensive | Big decisions, offer evaluation, annual career review |
| **Duo** | 2 | Focused | Quick gut-check between two competing perspectives |
| **Sprint Check** | 3 | Quick | Weekly accountability -- what moved, what stalled, what's next |

## Example Outputs (Anonymized)

### Example 1: Corporate Offer Evaluation

```markdown
# Career Board: Should I leave enterprise AI for a startup PM role?
_Moment: Offer Evaluation_

## Your Situation (as you described it)
- 2 years into current role, strong results in process improvement
- Startup offer: Series B, AI infrastructure, VP title
- Concern: giving up enterprise credibility for startup risk

## Board Summary
| Member      | Position    | Confidence |
|-------------|-------------|------------|
| Negotiator  | Conditional | High       |
| Skeptic     | Against     | High       |
| Narrator    | For         | Medium     |
| Connector   | For         | High       |
| Compass     | Conditional | Medium     |

## Where They Clash
- Skeptic vs. Narrator: "Series B in 2026 AI infra has a 40%
  chance of down round within 18 months" vs. "The narrative of
  going from Fortune 100 to startup VP is powerful for your brand"
- Negotiator vs. Compass: "Push for accelerated vesting as a hedge"
  vs. "If you need a hedge, is this really where you want to be?"

## Synthesis
The core trade-off is credibility consolidation vs. trajectory
acceleration...
```

### Example 2: Nonprofit Career Pivot

```markdown
Something else that's going to be important here is the agent likely needs a baseline of who they are, right? Like a current resume, some career aspirations, right? I think there needs to be more of an input flow to get this started, if that makes sense. # Career Board: Should I leave teaching to lead fundraising at an education nonprofit?
_Moment: Pivot Planning_

## Your Situation (as you described it)
- 8 years as a high school teacher, department chair for 3
- Offered Director of Development role at an education nonprofit
- Passion for the mission, but no formal fundraising experience
- Concern: leaving a career where I'm excellent for one where I'm unproven

## Board Summary
| Member         | Position    | Confidence |
|----------------|-------------|------------|
| Bridge Builder | For         | High       |
| Domain Expert  | Conditional | Medium     |
| Pattern Matcher| For         | High       |
| Narrator       | For         | High       |

## Where They Clash
- Bridge Builder vs. Domain Expert: "Your community relationships
  and storytelling skills are 70% of what great fundraisers do" vs.
  "Major gift cultivation and grant writing are learnable but take
  18+ months to build real competence"
- Pattern Matcher vs. Domain Expert: "Teachers who move into
  nonprofit leadership have a strong success pattern when the
  mission aligns" vs. "Director of Development specifically requires
  donor pipeline management -- ask for a 6-month learning runway"

## Synthesis
The board sees a strong fit with one critical condition: negotiate
a transition plan that accounts for the fundraising skill gap...
```

## What This Demonstrates

| Competency | How This Tool Shows It |
| --- | --- |
| **User research thinking** | Discovery questions before solutions -- understanding the problem before assembling the board |
| **Agent orchestration** | Dynamic board assembly based on user context, not fixed personas |
| **Personalization at scale** | Board composition, research mandates, and output framing all adapt to the user's world |
| **Information architecture** | Structured output that's scannable under decision pressure |
| **Domain modeling** | Career moments, persona lenses, and domain expertise encoded as a composable system |
| **Inclusive design** | Works across industries, career stages, and professional backgrounds -- not locked to any single track |

---

> Full skill definition coming soon.
