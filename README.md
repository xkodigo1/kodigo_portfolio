# Kodigo Portfolio

Strict portfolio repository built on a modern Next.js stack with automated quality gates, visual tooling, and disciplined commit governance.

## Stack

- Next.js 16 with App Router and React Compiler
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Motion for purposeful animation
- Biome for formatting and linting
- Vitest + Testing Library for unit tests
- Playwright for end-to-end smoke coverage
- Storybook + Chromatic for component development and visual review
- Lighthouse CI for performance and accessibility assertions
- Vercel for preview and production deployments

## Development

1. Install dependencies:

```bash
pnpm install
```

2. Start the app:

```bash
pnpm dev
```

3. Run Storybook:

```bash
pnpm storybook
```

## Scripts

- `pnpm dev`: run the Next.js app with Turbopack
- `pnpm build`: production build
- `pnpm start`: serve the production build
- `pnpm lint`: Biome validation
- `pnpm format`: Biome autofix
- `pnpm typecheck`: TypeScript checks
- `pnpm test`: unit tests
- `pnpm test:stories`: Storybook-integrated tests
- `pnpm test:e2e`: Playwright smoke suite
- `pnpm storybook:build`: static Storybook build
- `pnpm lighthouse`: Lighthouse CI assertions
- `pnpm verify`: strict local gate before shipping

## Commit Convention

Commits are mandatory `gitmoji + Conventional Commits`.

Format:

```text
:sparkles: feat(scope): short description
```

Approved type-to-gitmoji pairs:

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

Examples:

```text
:sparkles: feat(hero): launch editorial landing layout
:bug: fix(ci): restore commit-range validation on push
:memo: docs(readme): explain strict development workflow
```

The repo enforces this through:

- local `commit-msg` hook
- PR review checklist
- CI commit history validation

## Workflow Rules

- `main` must stay deployable.
- No direct push to `main`.
- Use topic branches: `feat/*`, `fix/*`, `chore/*`, `design/*`.
- Every relevant change goes through PR.
- Every PR must pass lint, typecheck, unit tests, Storybook checks, Playwright smoke, build, and Lighthouse.
- UI changes must keep mobile and desktop quality aligned.
- Secrets only live in GitHub Secrets or `.env.local`.

## Environment

No runtime environment variables are required for the starter. If analytics, forms, or third-party APIs are added later:

- store local values in `.env.local`
- store CI or production values in GitHub and Vercel secrets
- never commit `.env*`

## CI/CD

GitHub Actions runs:

- commit convention validation
- lint
- typecheck
- unit tests
- Storybook tests and build
- Playwright smoke tests
- production build
- Lighthouse assertions
- CodeQL security analysis

Dependabot is configured weekly for npm and GitHub Actions.

## Structure

```text
.github/
.husky/
scripts/
src/app/
src/components/
src/data/
tests/e2e/
```

## Deployment

Recommended target: Vercel.

- previews from pull requests
- production from `main`
- branch protection enabled for `main`

## Acceptance Bar

A change is not done until:

- the UX looks intentional on mobile and desktop
- the code is typed and formatted
- the tests pass
- the commit history stays readable
- the branch is safe to merge without manual cleanup
