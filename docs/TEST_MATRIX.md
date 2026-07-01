# Test Matrix

## Phase 00 baseline

| Area                    | Validation target                                                                                 | Status  |
| ----------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Project memory          | Required memory files exist and identify exact next task                                          | PASS    |
| Repository memory docs  | `docs/*.md` are trackable in Git                                                                  | PASS    |
| Workspace install       | `pnpm install` succeeds                                                                           | PASS    |
| Web app                 | Dev/build baseline succeeds                                                                       | PASS    |
| API app                 | Dev/build baseline succeeds                                                                       | PASS    |
| Shared packages         | Build/typecheck baseline succeeds                                                                 | PASS    |
| Shared package tests    | `packages/shared` unit test passes                                                                | PASS    |
| Workspace test baseline | `web`, `api`, `shared`, `ui`, `api-client`, `database`, and `markdown` all execute baseline tests | PASS    |
| Formatting foundation   | Root Prettier checks and workspace lint scripts succeed                                           | PASS    |
| Database baseline       | Compose config plus Prisma validate/generate succeed                                              | PASS    |
| Database                | PostgreSQL container healthy                                                                      | PENDING |
| Quality gates           | Root commands execute successfully for the current workspace set                                  | PASS    |
