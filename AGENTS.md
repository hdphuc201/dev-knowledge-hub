# AGENTS

## Repository rules for Codex sessions

- Read `docs/MASTER_PLAN.md` before implementing work.
- Read `docs/EXECUTION_STATE.md` to identify the exact next task.
- Read `docs/TASKS.md` to understand the full Phase 00 breakdown.
- Execute only one task at a time unless a task explicitly states otherwise.
- Update repository memory files after each completed task.
- Add validation for the task being completed.
- Do not implement business features during Phase 00.
- Do not introduce secrets into the repository.

## Current focus

- Active phase: `Phase 00`
- Active objective: bootstrap repository structure and project memory incrementally.

## Token-Efficient Context Loading

### Always read

At the beginning of a task, read only:

1. `AGENTS.md`
2. `docs/EXECUTION_STATE.md`
3. The exact current task section from the active phase file
4. `git status --short`
5. Source files directly related to the current task

### Read conditionally

Read these only when relevant:

- Search `docs/DECISIONS.md` by task ID, module name, or technical keyword.
- Search `docs/RISKS.md` only for open risks related to the current task.
- Search `docs/TEST_MATRIX.md` only for the current feature or test area.
- Read `docs/MASTER_PLAN.md` only when the task requires product-level or architecture-level clarification.
- Read `docs/SESSION_LOG.md` only when recovering missing implementation history.

### Search before reading

Use targeted search commands such as `rg`, exact headings, task IDs, filenames, or limited line ranges.

Do not print or read an entire large document when a small relevant section is sufficient.

### Source inspection

Inspect only:

- files expected to change
- their direct imports
- shared components or contracts they depend on
- relevant tests

Do not scan unrelated feature directories.

### Memory updates

After a task:

- Always update `docs/EXECUTION_STATE.md`.
- Update `docs/TASKS.md` only when task status changes.
- Add a short entry to `docs/SESSION_LOG.md`.
- Update `docs/DECISIONS.md` only when an architectural or technical decision was made.
- Update `docs/RISKS.md` only when a blocker, risk, or unresolved issue exists.
- Update `docs/TEST_MATRIX.md` only when tests were added, changed, removed, or executed for a new area.

### Output limits

Task reports should contain only:

- task status
- files changed
- important implementation decisions
- tests and validation results
- known limitations
- exact next task

Do not repeat the complete project description, phase description, or previously recorded decisions.
