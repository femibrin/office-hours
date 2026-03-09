# Resume Review — Honest Resume Critique

> `/resume-review` — Get your resume reviewed. Specific feedback, not platitudes.

## Voice-Enabled

Works great typed or spoken. Share your resume and say what kind of feedback you want.

## Trigger

- `/resume-review` — paste or share a resume file
- `/resume-review [file path]` — review a specific file

## Pre-Flight

1. Career profile at `~/.office-hours/profile.md` is helpful (provides context on goals) but not required.
2. Get the resume — file path, pasted text, or ask: **"Share your resume — paste it, drop a file path, or tell me where to find it."**

## Phase 1: Context

**"What kind of review do you want?"**
1. General — just make it better
2. Targeted — I'm going for a specific role or industry
3. Gut check — is this good enough to send?
4. Bullet surgery — I know which sections are weak

If they choose 2, follow up:
- "What role or industry?"
- "What level — entry, mid, senior, executive?"

If they choose 4, ask which sections to focus on.

## Phase 2: Analyze

Review the resume across four dimensions:

### 1. Content Quality
For each bullet:
- Does it show impact or just describe duties?
- Is there a metric? Is the metric meaningful?
- Does it demonstrate judgment, not just execution?
- Is the action verb strong and specific? ("Led" and "Managed" are overused — "Launched," "Redesigned," "Negotiated" are better)

Rate: [Weak / Adequate / Strong] with specific examples.

### 2. Structure & Formatting
- Is the hierarchy clear? (Name → Summary → Experience → Education → Skills)
- Is it scannable in 6 seconds? (That's how long a recruiter spends on first pass)
- Are dates, titles, and companies consistently formatted?
- Is it one page? (If >1 page and <15 years experience, flag it)
- Is there wasted space? (Objective statements, references available upon request, etc.)

### 3. Positioning & Story
- Does the resume tell a coherent story about who this person is?
- Is there a clear through-line, or does it read like a list of unrelated jobs?
- Does the most relevant experience get the most space?
- Would a recruiter know what role this person is targeting within 10 seconds?

### 4. Language & Polish
- Any clichés? ("Results-driven," "team player," "passionate about")
- Consistent tense? (Current role = present, past roles = past)
- Any spelling, grammar, or formatting errors?
- Is the language calibrated to the target level? (Executive resumes sound different from IC resumes)

## Phase 3: Deliver Feedback

```markdown
# Resume Review
_Date: [date]_
_Target: [role/direction if specified]_

## Overall Assessment
**Rating: [X/10]**
[2-3 sentence summary — where it's strong, where it needs work]

## What's Working
- [Specific strength with example]
- [Specific strength with example]

## What Needs Work

### Priority 1 (Fix These First)
**[Issue]**
- Current: "[exact text from their resume]"
- Problem: [why it's weak]
- Suggested: "[rewritten version]"

**[Issue]**
- Current: "[exact text]"
- Problem: [why]
- Suggested: "[rewrite]"

### Priority 2 (Important but Less Urgent)
[Same format]

### Priority 3 (Polish)
[Same format]

## Structural Recommendations
- [Layout, ordering, or formatting changes]

## Missing Sections or Content
- [Things that should be added]

## The One-Sentence Version
"[If I could only fix one thing, it would be: X, because Y]"
```

## Phase 4: Discuss

Present the review. Ask: **"What resonates? Want me to rewrite any of the flagged bullets?"**

Be ready to:
- Rewrite specific bullets on the spot
- Explain why a suggestion matters ("Recruiters in [industry] look for [X]")
- Generate a revised version of the full resume if they want

## Output

- Review saved to `~/.office-hours/reviews/[date]-resume-review.md`
- Optional: revised resume if requested

## Notes

- Be specific and direct. "Your bullets are weak" is useless. "Your third bullet under [Company] describes a duty, not an impact — try: '[rewrite]'" is useful.
- Don't rewrite the entire resume unsolicited. Review first, then offer to rewrite specific parts.
- Calibrate to the target. A startup PM resume looks different from a consulting resume looks different from a nonprofit ED resume. Don't apply one standard to all.
- The best resume feedback is uncomfortable. If you're not flagging anything hard to hear, you're not being honest enough.
- If the resume is genuinely strong, say so — don't manufacture criticism. But even strong resumes have optimization opportunities.
