# Decisions

## D-0001 Canonical master plan location

- Date: `2026-06-30`
- Decision: use `docs/MASTER_PLAN.md` as the canonical plan file for repository execution.
- Rationale: the repository did not contain `docs/MASTER_PLAN.md`, but future Codex sessions need a stable path mandated by the execution rules.

## D-0002 Phase 00 task ordering

- Date: `2026-06-30`
- Decision: complete project-memory bootstrap before workspace scaffolding.
- Rationale: this enables deterministic handoff, exact next-task tracking, and compliance with the one-task-per-turn rule.

## D-0003 Root command behavior before workspace packages exist

- Date: `2026-06-30`
- Decision: root `dev`, `build`, `lint`, and `test` commands should resolve successfully as explicit no-ops until `apps/*` or `packages/*` contain real workspace packages.
- Rationale: `P00-002` must add stable root commands without prematurely scaffolding `apps/web` or `apps/api`, and plain `turbo run` would fail before workspace packages exist.

## D-0004 Root toolchain versions for bootstrap

- Date: `2026-06-30`
- Decision: use `pnpm@10.18.3`, `turbo@2.10.1`, `typescript@5.9.3`, and `prettier@3.9.4` for the root bootstrap.
- Rationale: `typescript@6` produced ecosystem peer mismatches during workspace expansion, so the root was normalized to the latest stable `5.x` release that remained broadly compatible with current workspace tooling.

## D-0005 Web app bootstrap stack

- Date: `2026-06-30`
- Decision: scaffold `apps/web` with `next@16.2.9`, `react@19.2.7`, `react-dom@19.2.7`, `eslint@9.39.4`, App Router, flat ESLint config using `eslint-config-next`, and Vitest plus Testing Library for the initial rendering test.
- Rationale: Next.js official docs list `16.2.9` as the latest version and recommend App Router, ESLint CLI with `eslint-config-next`, and Vitest with Testing Library for manual setup. `eslint@9.39.4` was selected because the Next lint stack does not yet advertise compatibility with `eslint@10`.

## D-0006 Root orchestration after first workspace package

- Date: `2026-06-30`
- Decision: keep `turbo.json` and Turbo-compatible package scripts in place, but run root commands with recursive `pnpm` workspace scripts for now.
- Rationale: Turbo execution proved unstable in this Windows environment during validation, while recursive `pnpm` reliably detects and runs the web package without changing the monorepo structure or the app-level task contract.

## D-0007 Track repository memory docs

- Date: `2026-06-30`
- Decision: update `.gitignore` so `docs/*.md` files are tracked while non-markdown or generated outputs under `docs/` remain ignored.
- Rationale: the repository memory files are required for Phase 00 handoff and must be versioned so future Codex sessions can recover the exact next task.
