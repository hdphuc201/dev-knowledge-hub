# Test Matrix

## Phase 00 baseline

| Area                   | Validation target                                                                                      | Status  |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Project memory         | Required memory files exist and identify exact next task                                               | PASS    |
| Repository memory docs | `docs/*.md` are trackable in Git                                                                       | PASS    |
| Workspace install      | `pnpm install` succeeds                                                                                | PASS    |
| Web app                | Dev/build baseline succeeds                                                                            | PASS    |
| API app                | Dev/build baseline succeeds                                                                            | PENDING |
| Database               | PostgreSQL container healthy                                                                           | PENDING |
| Quality gates          | Root commands execute successfully for the web workspace package; Turbo command still fails on Windows | PARTIAL |
