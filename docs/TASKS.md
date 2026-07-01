# Phase 00 Tasks

## Status legend

- `TODO`: not started
- `DONE`: completed and validated

## Task list

| ID      | Status | Task                                                                                                                                               | Expected validation                                                            |
| ------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| P00-001 | DONE   | Bootstrap canonical project memory and planning documents, including `docs/MASTER_PLAN.md`, `AGENTS.md`, `PLANS.md`, and initial docs state files. | Required files exist and contain next-task handoff information.                |
| P00-002 | DONE   | Initialize root workspace with `pnpm` workspaces, Turborepo, root `package.json`, shared `tsconfig`, and root commands.                            | `pnpm install` succeeds and root scripts resolve.                              |
| P00-003 | DONE   | Scaffold `apps/web` with Next.js App Router and connect it to the workspace.                                                                       | `pnpm --filter web build` or equivalent baseline command succeeds.             |
| P00-004 | DONE   | Scaffold `apps/api` with NestJS REST API and connect it to the workspace.                                                                          | API build or test baseline succeeds.                                           |
| P00-005 | DONE   | Create shared packages: `ui`, `api-client`, `database`, `markdown`, and `shared` with strict TypeScript configuration.                             | Package builds or typechecks succeed.                                          |
| P00-006 | DONE   | Configure repository-wide ESLint, Prettier, and formatting scripts.                                                                                | `pnpm lint` and `pnpm format:check` succeed.                                   |
| P00-007 | DONE   | Add Docker Compose PostgreSQL setup, `.env.example`, and Prisma baseline configuration.                                                            | PostgreSQL service config validates and env template contains no real secrets. |
| P00-008 | DONE   | Add test baseline across workspace and root `pnpm test` orchestration.                                                                             | Root test command succeeds.                                                    |
| P00-009 | TODO   | Add GitHub Actions quality workflow for install, format, lint, typecheck, test, and build.                                                         | Workflow file is syntactically valid and references existing scripts.          |
| P00-010 | TODO   | Create `codex-plan/` phase files and record dependency version decisions with rationale.                                                           | Phase files and decision records exist and are cross-referenced.               |
| P00-011 | TODO   | Run clean-install and end-to-end bootstrap verification for Phase 00 completion criteria.                                                          | Install, build, lint, typecheck, test, Docker, and dev-server checks pass.     |
