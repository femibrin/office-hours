# Tailor Resume — Template-Based Resume Customization

> `/tailor-resume` — Tailor your resume for a specific job listing.

## Voice-Enabled

Works great typed or spoken. Share the link and say what you're thinking — the system handles the rest.

## Trigger

- `/tailor-resume [URL]` — tailor for a specific listing
- `/tailor-resume` — paste or describe the opportunity

## Pre-Flight

1. Check for career profile at `~/.office-hours/profile.md`.
   - If it exists, read it — it makes fit scoring and template selection smarter.
   - **If it doesn't exist, that's fine — this tool works without it.** Skip fit scoring's "direction match" dimension and template auto-selection. Just work from the resume and JD directly.
2. Check for the user's base resume:
   - Check `~/.office-hours/templates/` for any `.md` resume files
   - If a base resume exists, use it
   - If none exist, ask:

   **"I need your current resume to work from. How would you like to provide it?"**
   1. Paste my resume
   2. Point to a file on my machine (Word, PDF, or markdown)
   3. I don't have a resume yet — start from a blank template

   If they choose 1 or 2, save to `~/.office-hours/templates/base-resume.md`
   If they choose 3, copy the blank template from `templates/resume-template.md` in this repo to `~/.office-hours/templates/base-resume.md` and walk them through filling it in before tailoring.

**Note:** All output from this tool saves automatically. You can close the terminal at any point after completion and find your work at `~/.office-hours/`.

## Phase 1: Get the Job Description

**If URL provided:**
Use resilient fetch pattern:
1. WebFetch the URL
2. If empty/JS-rendered, fall back to browser MCP
3. If both fail, ask for paste

**If no URL:**
Ask: **"Share the job listing — link, paste, or just describe the role and company."**

Extract from the JD:
- Company, role title, level
- Key requirements (must-have vs. nice-to-have)
- Technical requirements
- Domain/industry context
- Keywords and language patterns
- Team and reporting structure (if mentioned)

## Phase 2: Score Fit (if profile exists)

If no career profile exists, skip the fit scoring and go straight to Phase 3. The user came here to tailor a resume, not to get career advice.

If a profile exists, score:

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Skill match | X/10 | [specific matches and gaps] |
| Experience match | X/10 | [seniority, scope, domain] |
| Direction match | X/10 | [does this advance their goals?] |

**Overall Fit: X/10**

**Boosters** (things that increase fit):
- [e.g., "AI/ML experience required — you have this"]

**Risks** (things that decrease fit):
- [e.g., "Requires 3+ years in developer tools — adjacent but not direct"]

**If fit < 7:** Present the assessment and ask: **"This scores [X]/10. The main gaps are [gaps]. Want to proceed anyway, or skip this one?"**

## Phase 3: Select Template Strategy

**If the user has multiple resume templates** (created via `/explore-paths` or manually):
Select the best template based on JD signals. Explain the choice:

**"You have [N] resume templates. For this role, I'd use your [direction] template because [reason]. Sound right?"**
1. Yes, use that one
2. Use a different template — [show list]
3. Just use my base resume

**If the user has one template/resume**, use it.

**If the user has no saved resume**, they provided one in Phase 1 — use that.

Determine edit intensity:
- **Light touch**: Role is very similar to current position. Reorder bullets, mirror keywords, minimal rewrites.
- **Moderate edit**: Good fit but different emphasis needed. Rewrite some bullets, adjust framing, add relevant keywords.
- **Heavy rewrite**: Different domain or function. Major reframing of experience, new bullet angles, significant keyword integration.

Present the plan:

**"Here's my approach:"**
- Template: [which one]
- Edit intensity: [light/moderate/heavy]
- Main adjustments: [list top 3 changes]

**"How does that sound?"**
1. Go for it
2. I want a heavier rewrite — really reshape it for this role
3. Keep it lighter — just adjust emphasis, don't rewrite
4. Let me give you more context first

## Phase 4: Tailor

Apply these principles:

### Core Principle: Update Bullets, Not Formatting

**The user's resume formatting is sacred.** Do not change:
- Section order or structure
- Font choices, margins, or layout
- Header/contact info formatting
- Company names, titles, or dates
- The overall visual structure

**What you DO change:**
- Bullet content — rewrite to emphasize relevance to this specific role
- Bullet order — lead with the most relevant experience in each section
- Keywords — mirror the JD's terminology where authentic
- Skills line — swap in the most relevant 6-8 items

### Content Adjustments
- **Lead with relevance**: Reorder bullets so the most relevant experience is first in each section
- **Mirror language**: Use the JD's terminology where authentic (don't force jargon you wouldn't actually use)
- **Quantify impact**: Every bullet should have a number if possible. If the original doesn't, ask or estimate.
- **Show, don't tell**: "Led cross-functional team of 8 to ship AI feature in 6 weeks" not "Strong cross-functional leadership skills"

### What NOT to Do
- Don't change the resume's structure or formatting — only the content
- Don't fabricate experience or inflate metrics
- Don't add skills you don't have
- Don't remove substantial experience without asking
- Don't use buzzwords that don't reflect real experience
- Don't exceed one page unless the user explicitly wants a longer format

### Structure (only if building from the blank template)
- One page maximum (default)
- Skills/tools line: 6-8 most relevant items, mirroring JD keywords
- Each role: 3-5 bullets, strongest first
- Education: minimal unless recently graduated or JD emphasizes credentials

## Phase 5: Output

Generate the tailored resume as markdown:

```markdown
## Customization Summary
- **Template used:** [which template]
- **Edit intensity:** [light/moderate/heavy]
- **Fit score:** [X/10]

### Key Changes
1. [What changed and why]
2. [What changed and why]
3. [What changed and why]

### Keywords Added
- [keyword from JD integrated naturally]

---

[Full tailored resume in markdown]
```

Save to `~/.office-hours/tailored-resumes/[company]-[role]-[date].md`

### DOCX Generation (if requested or if tools available)

If the user wants a Word document:
1. Check if pandoc is available: `which pandoc`
2. If available, convert markdown to docx with reasonable formatting
3. If not available, tell the user how to convert manually

## Phase 6: Review Together

Present the tailored resume. Ask: **"How does this feel? Anything I over-rotated on or missed?"**

Common adjustments:
- "Can you make the [company] section stronger?"
- "I don't want to lead with [X], swap it with [Y]"
- "Add [specific experience] — I forgot to mention it"

Incorporate feedback and regenerate.

## Output

**Auto-save is mandatory.** Do not ask the user if they want to save. Save automatically and confirm:

> "Saved to `~/.office-hours/tailored-resumes/[company]-[role]-[date].md`. You can pick this up anytime — just run Claude Code from the office-hours folder."

- Tailored resume saved to `~/.office-hours/tailored-resumes/[company]-[role]-[date].md`
- Optional DOCX if tools are available
- Customization summary

## Notes

- The goal is a resume that reads like they wrote it for this specific role — not a generic template with swapped keywords.
- Preserve the user's voice. If their resume is direct and metrics-heavy, keep it that way. If it's narrative, maintain that style.
- One page is the default. Two pages only if the user asks or has 15+ years of highly relevant experience.
- Don't trim content aggressively without asking. Default to full-length. When the user says "tailor," adjust emphasis and language but preserve all substantive experience unless told to cut.
- If the user has run `/assess-opportunity` for this role, reference that assessment — don't re-research.
