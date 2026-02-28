# Interview Prep -- Multi-Agent Interview Preparation

A parallel research pipeline that produces a comprehensive interview preparation packet by combining company research, role analysis, email correspondence search, and tailored question generation.

## Problem Statement

Interview preparation is time-consuming and scattered. You end up with 15 browser tabs, half-remembered Glassdoor reviews, and generic "tell me about yourself" prep. The highest-value preparation -- checking if a recruiter already shared context via email, mapping your specific experience to the job requirements, generating questions tailored to this exact role -- is the part most people skip because it takes too long.

This tool does all of it in parallel, in under 3 minutes, and produces a print-ready reference card for day-of review.

## Architecture

```
Input: Company + Role (or Job Listing URL)
        |
        v
  +-------------+
  | Orchestrator |  <-- Parses input, validates URL, launches agents
  +-------------+
        |
   +----+----+----+----+
   |         |         |         |
   v         v         v         v
[Company]  [Role]   [Email]  [Questions]
Deep Dive  Analysis  Search   Generator
   |         |         |         |
   |  WebSearch x3     |  Gmail  |  Based on
   |  Glassdoor        |  MCP    |  all other
   |  News/culture     |  query  |  agents'
   |                   |         |  findings
   +----+----+----+----+
        |
        v
  +-------------+
  | Synthesizer |  <-- Combines into interview prep doc
  +-------------+
        |
        v
  Interview Prep Doc + Quick Reference Card
```

## Key Features

- **Parallel research agents**: Four agents run simultaneously -- company deep dive, role analysis, email correspondence search, and question generation.
- **Email integration**: Searches Gmail for recruiter correspondence related to the company. Surfaces recruiter names, scheduling details, compensation mentions, and context they've shared. This is often the most valuable personalization source.
- **Fit narrative**: Maps your specific experience to the job requirements, identifying strongest matches and gaps to address proactively.
- **Tailored questions**: Generates 8-10 likely interview questions (behavioral, technical, situational) with STAR-format response outlines, plus 3-5 questions to ask the interviewer -- all specific to this company and role.
- **Quick Reference Card**: A print-friendly summary with interviewer names, key talking points, company values to reference, and your "Why [Company]?" in one sentence.
- **URL or text input**: Accepts a job listing URL (fetched automatically) or company + role as text. Falls back gracefully if the URL is behind an auth wall.

## Example Output (Redacted)

```markdown
# Interview Prep: Senior PM, AI Platform at [Company]
_Generated 2026-02-20_

## Recruiter Correspondence
[Recruiter Name] reached out via LinkedIn on 2026-02-10. Key details shared:
- Team size: ~15, reporting to VP of Product
- Focus area: developer-facing AI tools
- Process: phone screen -> technical, panel, leadership

## Company Overview
- **What they do:** Enterprise AI platform for [domain]
- **Recent news:** Series D at $2.1B valuation (Jan 2026), expanded to EMEA
- **Culture signals:** "Builder culture," strong async communication, eng-led product decisions

## Your Fit Narrative
- **Strongest matches:** AI product development, cross-functional leadership, enterprise GTM
- **Gaps to address:** No direct experience with developer tools (mitigate with platform thinking)

## Likely Questions & Responses
### Behavioral
1. **Tell me about a time you shipped an AI product under tight constraints.**
   _Response outline: [Specific project] -- 6-week MVP timeline, cross-functional..._

### Questions to Ask Them
1. How does the PM team influence the technical roadmap vs. engineering-led decisions?
```

## What This Demonstrates

| AI PM Competency | How This Tool Shows It |
|-----------------|----------------------|
| **Multi-source synthesis** | Combines web research, email data, and job description into a unified narrative |
| **MCP integration** | Gmail search via Zapier MCP for recruiter correspondence |
| **User-centered design** | Quick Reference Card optimized for the actual use case (reviewing 5 min before the call) |
| **Graceful degradation** | Falls back from URL fetch to browser to manual paste; skips email search if Gmail MCP is down |
| **Parallel execution** | Four independent agents run simultaneously, reducing wall-clock time |

---

> Full skill definition coming soon.
