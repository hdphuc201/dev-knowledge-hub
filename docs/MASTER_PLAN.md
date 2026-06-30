# Master Plan

## Product

- Product name: `Phuc Dev Notes`
- Repository name: `dev-knowledge-hub`
- Purpose: personal technical knowledge hub for Frontend, Backend, Database, Testing, AI, Dev Tools, and Software Development knowledge.

## Phase 00 Scope

This phase is limited to repository bootstrap and project memory.

### Required architecture target

- `pnpm` workspaces
- Turborepo
- `apps/web`: Next.js App Router
- `apps/api`: NestJS REST API
- `packages/ui`: shared design system
- `packages/api-client`: OpenAPI-generated API client
- `packages/database`: Prisma and PostgreSQL
- `packages/markdown`: safe Markdown renderer
- `packages/shared`: shared constants, schemas, and utilities
- TypeScript strict mode

### Phase 00 deliverables

1. Initialize `pnpm` workspace and Turborepo.
2. Create `apps/web` with Next.js App Router.
3. Create `apps/api` with NestJS.
4. Create shared packages.
5. Configure TypeScript strict mode.
6. Configure ESLint and Prettier.
7. Configure Docker Compose with PostgreSQL.
8. Create `.env.example` with no real secrets.
9. Configure test baseline.
10. Configure GitHub Actions quality workflow.
11. Create repository memory files:

- `AGENTS.md`
- `PLANS.md`
- `docs/TASKS.md`
- `docs/EXECUTION_STATE.md`
- `docs/DECISIONS.md`
- `docs/SESSION_LOG.md`
- `docs/RISKS.md`
- `docs/TEST_MATRIX.md`

12. Create phase files in `codex-plan/`.
13. Add root commands:

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm format`
- `pnpm format:check`
- `pnpm check`

14. Verify clean install from scratch.
15. Record selected dependency versions and rationale.

### Constraints

- Do not implement business features in this phase.
- Do not implement Authentication, Article, Topic, or Admin features in this phase.
- Do not push code.
- Do not deploy.
- Do not create cloud accounts.
- Do not add unnecessary libraries.
- Do not commit secrets.

### Completion gate

Phase 00 is complete only when:

- `pnpm install` succeeds.
- Web and API development servers can run.
- PostgreSQL container is healthy.
- `format`, `lint`, `typecheck`, `test`, and `build` all pass.
- No secrets exist in the repository.
- A new Codex session can inspect repository memory and determine the exact next task.
