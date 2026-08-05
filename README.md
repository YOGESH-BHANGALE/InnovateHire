# InnovateHive Antigravity

A Next.js 14 App Router implementation of the InnovateHive Antigravity website concept.

## Run locally

```bash
npm install
npm run dev
```

The app is in the `frontend/` folder so the repository can keep design/canvas metadata at the workspace root.

## Routes

- `/` — Orbital Overlap home
- `/about` — Mission, timeline, team, and values
- `/services` — Service explorer, process, and stack
- `/products` — Product viewer, walkthrough, and comparison
- `/contact` — Inquiry form and office details
- `/case-studies` — Filterable portfolio
- `/case-studies/[slug]` — Static case-study detail pages

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

The current contact API is provider-agnostic: it validates incoming payloads and returns a success response, ready to be connected to an email or CRM provider.
