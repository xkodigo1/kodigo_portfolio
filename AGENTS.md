# Repository Rules

This repository is a strict personal portfolio system. Work here as if every change is headed to a public launch surface.

## Target Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion
- Biome
- Vitest
- Playwright
- Storybook
- Vercel

## Core Working Rules

- Keep `main` deployable.
- Do not push directly to `main`.
- Use branches named `feat/*`, `fix/*`, `chore/*`, `design/*`, or `docs/*`.
- Keep scope narrow. Do not mix unrelated refactors with UI work.
- Prefer reusable sections and data-driven content over one-off page markup.
- Preserve the visual language. Do not fall back to generic white-template UI.

## Commit Policy

Commits are mandatory `gitmoji + Conventional Commits`.

Required shape:

```text
:sparkles: feat(scope): short description
```

Allowed pairs:

- `:sparkles: feat`
- `:bug: fix`
- `:memo: docs`
- `:lipstick: style`
- `:recycle: refactor`
- `:zap: perf`
- `:white_check_mark: test`
- `:package: build`
- `:construction_worker: ci`
- `:wrench:` or `:toolbox: chore`
- `:rewind: revert`

Do not write capitalized summaries. Keep descriptions specific and short.

## Quality Gates

Before considering work complete, run or preserve:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm test:stories`
- `pnpm build`
- `pnpm test:e2e` when UI or routing changes

## UI and UX Rules

- Use expressive typography and a deliberate color system.
- Avoid default-looking marketing layouts.
- Keep contrast strong and hierarchy obvious.
- Treat motion as support for hierarchy, not decoration spam.
- Every visible section must have a purpose: explain, prove, or convert.
- Validate on both mobile and desktop assumptions.

## Automation Expectations

- Local hooks must guard staged files, commit format, and push quality.
- CI must fail on lint, typing, tests, or build regressions.
- Lighthouse thresholds are part of the bar, not optional reporting.
- Storybook stories should exist for reusable components worth reviewing in isolation.

## Data and Content

- Prefer editing `src/data/portfolio.ts` for portfolio content changes.
- Keep components generic and content files specific.
- Do not hardcode secrets, private tokens, or private client data.

## Done Criteria

A task is only done when:

- code is clean and typed
- the UI remains intentional
- automation passes or failures are clearly explained
- docs stay aligned with the real repo behavior
