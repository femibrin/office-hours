# Resume Tailor -- Template-Based Resume Tailoring Pipeline

An end-to-end pipeline that fetches a job description, scores fit, selects the right resume template, tailors content to match the role, generates a formatted document, and updates a job search tracker.

## Problem Statement

Tailoring a resume for each application is one of those tasks that's important enough to do well but tedious enough that most people cut corners. The result is either a generic resume sent everywhere or hours spent manually rewriting bullets. Neither is good.

This tool solves it by maintaining a library of pre-optimized resume templates (by role type and edit intensity), scoring each job for fit before investing effort, and automating the tailoring + formatting + tracking pipeline end to end.

## Architecture

```
Input: Job Listing URL (or pasted JD text)
        |
        v
  +---------------+
  | URL Fetcher   |  <-- WebFetch -> Browser fallback -> Manual paste
  +---------------+
        |
        v
  +---------------+
  | JD Analyzer   |  <-- Extracts requirements, maps to role type
  +---------------+      Scores fit (1-10), flags disqualifiers
        |
        |  Fit < 7? --> Present assessment, ask user whether to proceed
        |
        v
  +-------------------+
  | Template Selector  |  <-- Picks template by role type + edit intensity
  +-------------------+
        |
        v
  +-------------------+
  | Resume Tailorer    |  <-- Reorders bullets, mirrors JD keywords,
  +-------------------+      applies rubric criteria, enforces one-page limit
        |
        v
  +---------+    +------------------+
  | .md     | -> | DOCX Generator   |  <-- Python script preserving
  | output  |    | (exact formatting)|      exact fonts/margins/bullets
  +---------+    +------------------+
        |
        v
  +-------------------+
  | Tracker Update     |  <-- Google Sheets MCP: company, role, fit score,
  +-------------------+      template used, file path, status
```

## Key Features

- **Fit scoring**: Every job is scored 1-10 before a resume is generated. Scores below 7 trigger a discussion -- don't waste time on poor fits. Scoring considers disqualifiers (domain mismatch, seniority gap) and boosters (AI/ML emphasis, strategy/ops background valued).
- **Template selection logic**: Signal-based routing to the right template. "Corporate Strategy" in the JD routes to the Strategy template. "Operating Partner" routes to PE Operations. Mentions of "hands-on implementation" favor the Moderate Edit variant; "executive stakeholder management" favors the Heavy Rewrite.
- **Rubric enforcement**: Each template type has a review rubric. Tailored resumes are checked against rubric criteria for format, metrics prominence, and language calibration.
- **One-page enforcement**: The pipeline enforces a strict one-page limit. When content overflows, it follows a defined trimming hierarchy: drop supplementary sections first, then lower-impact bullets, then tighten language.
- **DOCX generation**: A custom Python script generates Word documents with exact formatting (specific fonts, margins, native bullets, right-aligned tabs). No pandoc approximations.
- **Tracker integration**: After generation, the tool updates a Google Sheets tracker via MCP with company, role, fit score, template used, file path, and status. Deduplicates by company + role.
- **Tailoring preferences**: A codified set of rules about section titles, metric accuracy, bullet ordering, and terminology that are always applied. These prevent the drift that happens when you manually tailor.

## Example Output (Redacted)

```markdown
## Resume Tailored for: Senior PM, AI Products at [Company]

**Template Used:** Product - Moderate Edit
**Reasoning:** JD emphasizes "end-to-end product lifecycle" and "LLM fluency,"
  which maps to the Product template. "Hands-on" and "implementation" signals
  favor the Moderate Edit variant over Heavy Rewrite.

**Fit Score:** 8/10
- Boosters: AI/ML experience required (+2), cross-functional leadership (+1),
  enterprise context valued (+1)
- Risks: Developer tools domain is adjacent but not exact (-1),
  no mention of financial services as a plus (-1)

## Customization Summary
1. Reordered current role bullets to lead with AI product delivery metrics
2. Strengthened prior role bullets emphasizing platform thinking
3. Added keywords: "agentic experiences," "0-to-1," "experimentation"
4. Dropped community involvement section to maintain one-page limit
```

## What This Demonstrates

| AI PM Competency | How This Tool Shows It |
|-----------------|----------------------|
| **Decision logic** | Fit scoring with defined boosters/disqualifiers prevents wasted effort |
| **Template architecture** | Signal-based routing to pre-optimized templates is a product design pattern |
| **Integration design** | Google Sheets MCP for tracker, custom Python for DOCX, browser fallback for URL fetch |
| **Quality enforcement** | Rubric-based review and one-page enforcement codify quality standards |
| **End-to-end thinking** | Covers the full workflow: fetch, analyze, score, tailor, format, track |

---

> Full skill definition coming soon.
