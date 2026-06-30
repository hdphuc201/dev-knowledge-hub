# Codex Phase Prompts — Dev Knowledge Hub

## Recommended repository naming

- Repository: `dev-knowledge-hub`
- Product name: `Phuc Dev Notes`
- Alternative branded repository: `phuc-dev-hub`
- Suggested package namespace: `@dev-knowledge-hub/*`

Use `dev-knowledge-hub` if the repository may become public or reusable.
Use `phuc-dev-hub` if personal branding is the top priority.

---

# How to use these prompts

1. Create the repository.
2. Add the master plan to `docs/MASTER_PLAN.md`.
3. Start with Phase 00 only.
4. Paste one phase prompt into Codex.
5. Let Codex break the phase into small tasks.
6. Execute one task at a time.
7. Do not start the next phase until all exit gates pass.
8. Review commits manually before pushing.

Codex must maintain:

```text
AGENTS.md
PLANS.md
docs/MASTER_PLAN.md
docs/TASKS.md
docs/EXECUTION_STATE.md
docs/DECISIONS.md
docs/SESSION_LOG.md
docs/RISKS.md
docs/TEST_MATRIX.md
```

---

# Shared rules for every phase

Paste these rules together with every phase prompt if Codex starts a new session:

```text
Before changing code:
1. Read AGENTS.md.
2. Read PLANS.md.
3. Read docs/MASTER_PLAN.md.
4. Read docs/EXECUTION_STATE.md.
5. Read docs/DECISIONS.md.
6. Read docs/RISKS.md.
7. Read docs/TEST_MATRIX.md.
8. Read the active phase file.
9. Inspect the existing repository and tests.

Execution rules:
- Work on one small task at a time.
- Do not implement features from later phases.
- Do not silently expand scope.
- Keep TypeScript strict mode enabled.
- Reuse shared UI components.
- Do not create duplicate Button, Dialog, Table, Badge, FormField, Toast, or layout components.
- Do not introduce random colors or a second design system.
- Do not manually duplicate backend DTO types in the frontend.
- Keep controllers free of business logic.
- Do not access Prisma from controllers.
- Treat Markdown as untrusted content.
- Do not execute arbitrary JSX or JavaScript from stored content.
- Add tests for every behavior change.
- Run required validation before marking a task complete.
- Update repository memory files after every completed task.
- Do not push, deploy, create cloud accounts, or expose secrets.
- Stop and record blockers rather than using unsafe workarounds.

At the end of each task, report:
- Goal completed
- Files changed
- Tests added
- Validation commands and results
- Known limitations
- Exact next task
```

---

# Phase 00 — Repository Bootstrap

```text
Start Phase 00: Repository Bootstrap and Project Memory.

Project:
A production-quality personal technical knowledge hub named "Phuc Dev Notes".

Repository:
dev-knowledge-hub

Technology direction:
- pnpm workspaces
- Turborepo
- apps/web: Next.js App Router
- apps/api: NestJS REST API
- packages/ui
- packages/api-client
- packages/database
- packages/markdown
- packages/shared
- PostgreSQL
- Prisma
- TypeScript strict mode

Your first responsibility is not to build product features.
Your responsibility is to create a clean, reproducible repository foundation and a durable project-memory workflow for later Codex sessions.

Required work:
1. Inspect the empty or current repository.
2. Create the monorepo structure.
3. Bootstrap apps/web and apps/api using current stable compatible versions from official documentation.
4. Create the shared package folders.
5. Configure pnpm workspaces and Turborepo.
6. Configure root TypeScript, ESLint, Prettier, and shared scripts.
7. Add Docker Compose with PostgreSQL.
8. Add `.env.example` without secrets.
9. Add baseline unit-test configuration.
10. Add baseline GitHub Actions quality workflow.
11. Create:
   - AGENTS.md
   - PLANS.md
   - docs/MASTER_PLAN.md placeholder if missing
   - docs/TASKS.md
   - docs/EXECUTION_STATE.md
   - docs/DECISIONS.md
   - docs/SESSION_LOG.md
   - docs/RISKS.md
   - docs/TEST_MATRIX.md
12. Create phase files under `codex-plan/`.
13. Add root commands for:
   - dev
   - build
   - lint
   - typecheck
   - test
   - format
   - format:check
   - check
14. Verify a clean install from scratch.
15. Record all selected dependency versions and the reason for the chosen versions.

Restrictions:
- Do not implement authentication.
- Do not implement database business models.
- Do not implement article pages.
- Do not implement Admin screens.
- Do not add unnecessary libraries.
- Do not deploy anything.

Required output:
1. Propose a small task breakdown for Phase 00.
2. Implement only the first incomplete task.
3. Update repository memory files.
4. Run the relevant validation.
5. Record the exact next task.

Phase 00 exit gate:
- `pnpm install` succeeds.
- Web and API development servers start.
- PostgreSQL container becomes healthy.
- Formatting, lint, typecheck, tests, and builds pass.
- No secrets are committed.
- A new Codex session can determine the exact next action from repository files.
```

---

# Phase 01 — Architecture and Design System

```text
Start Phase 01: Architecture and Design System.

Read all repository memory files and confirm Phase 00 exit gates still pass.

Goal:
Create a shared UI foundation and architectural conventions before building product features. The public website and Admin must follow one visual system. Backend modules and API responses must also follow one convention.

Required work:
1. Create architecture decision records for:
   - monorepo dependency boundaries
   - public vs Admin rendering strategy
   - Markdown storage and rendering strategy
   - API contract generation
   - backend module layering
2. Define semantic design tokens for:
   - backgrounds
   - surfaces
   - foreground
   - muted text
   - borders
   - primary
   - success
   - warning
   - danger
   - information
   - code blocks
3. Create `packages/ui`.
4. Configure shadcn/ui and accessible Radix primitives.
5. Create shared variants for:
   - Button
   - Input
   - Textarea
   - Select
   - Badge
   - Card
   - Alert
   - Dialog
   - Sheet
   - Tooltip
   - Accordion
   - Tabs
   - Dropdown
   - FormField
   - EmptyState
   - ErrorState
   - Skeleton
6. Create Storybook for shared UI components.
7. Create the public application shell:
   - header
   - left navigation region
   - main content region
   - right table-of-contents region
8. Create the Admin application shell:
   - Admin header
   - Admin sidebar
   - page header
   - content container
9. Create `/admin/ui-lab` for integrated visual states.
10. Create article typography examples:
   - headings
   - paragraphs
   - lists
   - tables
   - inline code
   - code blocks
   - quotes
   - callouts
11. Define responsive behavior for desktop, tablet, and mobile.
12. Add accessibility tests for shared interactive components.
13. Add lint rules or conventions that prevent deep cross-feature imports and duplicated primitives.
14. Document backend folder structure and standard API error/pagination contracts.

Restrictions:
- Do not build real article CRUD.
- Do not build authentication.
- Do not connect UI examples to production APIs.
- Do not add page-specific colors outside the design tokens.
- Do not create multiple component variants without a documented need.

Required output:
1. Break Phase 01 into small task IDs.
2. Implement only the first incomplete task.
3. Add tests and Storybook stories.
4. Update repository memory files.
5. Run the required checks.
6. Record the exact next task.

Phase 01 exit gate:
- Public and Admin shells work on desktop and mobile.
- Shared components are documented in Storybook.
- Keyboard navigation works.
- UI examples use semantic tokens only.
- Architecture decisions and dependency boundaries are documented.
```

---

# Phase 02 — Backend and Database Foundation

```text
Start Phase 02: Backend and Database Foundation.

Read all repository memory files and verify Phases 00 and 01 exit gates.

Goal:
Establish a stable NestJS, Prisma, PostgreSQL, validation, logging, migration, OpenAPI, and integration-testing foundation before adding business modules.

Required work:
1. Configure NestJS application bootstrap.
2. Add environment-variable validation.
3. Create `packages/database`.
4. Configure Prisma with PostgreSQL.
5. Define the migration workflow.
6. Define the seed workflow.
7. Add global DTO validation.
8. Add a standard exception filter.
9. Add standard API error objects with:
   - type
   - title
   - status
   - code
   - detail
   - requestId
   - field errors
10. Add request ID middleware/interceptor.
11. Add structured logging.
12. Add health and readiness endpoints.
13. Configure Swagger/OpenAPI.
14. Generate `packages/api-client` from OpenAPI.
15. Add a schema/client drift check.
16. Create integration test database utilities.
17. Add baseline API integration tests.
18. Document migration and rollback commands.
19. Confirm app startup fails clearly when required configuration is missing.

Restrictions:
- Do not add authentication yet.
- Do not add Article, Topic, Tag, or Series business logic.
- Do not expose raw Prisma types to the frontend.
- Do not access Prisma from controllers.
- Do not commit generated secrets or local database data.

Required output:
1. Break Phase 02 into task IDs.
2. Implement one task at a time.
3. Add tests for every infrastructure behavior.
4. Update memory files after each task.
5. Record exact commands and results.

Phase 02 exit gate:
- Migration runs from an empty database.
- Seed command runs.
- Health endpoint works.
- OpenAPI is generated.
- Frontend API client generation works.
- Integration tests use an isolated database.
- Standard error responses are verified.
```

---

# Phase 03 — Authentication and Admin Access

```text
Start Phase 03: Authentication and Admin Access.

Goal:
Secure the Admin application before implementing content mutations.

Authentication strategy:
- email and password
- secure HttpOnly cookies
- short-lived access session
- rotating refresh session
- server-side authorization
- initial single ADMIN user
- schema remains ready for EDITOR role

Required work:
1. Design User, Session, and role models.
2. Add database migrations.
3. Add an admin seed command.
4. Implement login.
5. Implement access-session validation.
6. Implement refresh-session rotation.
7. Implement logout and session invalidation.
8. Implement `/me`.
9. Add role guards and authorization policies.
10. Add login rate limiting.
11. Configure Helmet/security headers.
12. Configure a strict CORS allowlist.
13. Implement CSRF protection appropriate to cookie authentication.
14. Build Admin login page.
15. Protect all `/admin` routes.
16. Add session-expiration handling.
17. Add change-initial-password requirement if a seeded password is used.
18. Add audit events for login success, login failure, refresh, and logout.
19. Add backend integration tests.
20. Add Playwright authentication flows.

Restrictions:
- Do not store tokens in localStorage.
- Do not rely on frontend route hiding for security.
- Do not implement public registration.
- Do not implement OAuth in v1.
- Do not expose password hashes or session secrets.

Phase 03 exit gate:
- Valid admin can log in and access Admin.
- Invalid login is rate limited.
- Refresh rotation is tested.
- Logout invalidates the session.
- Unauthorized users cannot access Admin APIs or routes.
- Production cookie configuration is secure.
```

---

# Phase 04 — Topics, Tags, Series, Navigation, and Settings

```text
Start Phase 04: Content Taxonomy and Navigation.

Goal:
Build the structured information architecture before implementing articles.

Required domains:
- Topic hierarchy
- Tags
- Series
- Navigation items
- Site settings

Required work:
1. Design and migrate Topic.
2. Support parent-child topic hierarchy.
3. Prevent hierarchy cycles.
4. Design and migrate Tag.
5. Design and migrate Series.
6. Design and migrate NavigationItem.
7. Design and migrate SiteSetting.
8. Implement public read APIs.
9. Implement Admin CRUD APIs.
10. Implement sorting/reordering operations.
11. Implement unique slug validation.
12. Build Admin Topic management.
13. Build Admin Tag management.
14. Build Admin Series management.
15. Build Admin Navigation management.
16. Build Site Settings page.
17. Render the public sidebar from database data.
18. Add loading, empty, error, and success states.
19. Add cache invalidation after Admin changes.
20. Add unit, integration, component, and E2E tests.

Backend requirements:
- Use controller, service/use-case, repository, and mapper layers.
- Use DTO validation.
- Use standard error codes.
- Add authorization to every Admin mutation.
- Add audit logs to every change.

Restrictions:
- Do not implement Article CRUD yet.
- Do not hard-code the final sidebar into components.
- Do not use Tags as a replacement for Topics.
- Do not permit cyclic or invalid trees.

Phase 04 exit gate:
- Admin can manage topics, tags, series, navigation, and settings.
- Nested navigation is read from the database.
- Reordering persists.
- Cyclic topic and navigation relationships are rejected.
- Public APIs expose only visible data.
```

---

# Phase 05 — Articles, Markdown, Media, and Revisions

```text
Start Phase 05: Article Authoring System.

Goal:
Implement the complete Admin authoring workflow and safe technical Markdown pipeline.

Article lifecycle:
IDEA → DRAFT → IN_REVIEW → PUBLISHED → NEEDS_REVIEW → ARCHIVED

Required work:
1. Design and migrate Article.
2. Add article-topic relations.
3. Add article-tag relations.
4. Add ordered series relations.
5. Add article status transition rules.
6. Add technical maintenance fields:
   - lastReviewedAt
   - reviewAfter
   - testedWith
   - versionNote
   - isEvergreen
   - sourceReferences
7. Implement Article CRUD.
8. Implement unique slugs.
9. Implement slug redirect history.
10. Create `packages/markdown`.
11. Support:
   - GitHub-flavored Markdown
   - heading IDs
   - table of contents
   - syntax highlighting
   - code-copy metadata
   - callout directives
   - accordion directives
   - tabs directives
12. Sanitize unsafe HTML and URLs.
13. Do not execute arbitrary MDX, JSX, or scripts.
14. Extract plain text for search.
15. Calculate reading time.
16. Validate unsupported directives before publishing.
17. Design and migrate ArticleRevision.
18. Create revisions for meaningful saves.
19. Implement revision history and restore.
20. Protect against stale autosave overwrites.
21. Design and migrate MediaAsset.
22. Implement object-storage abstraction.
23. Validate upload type, size, dimensions, and image metadata.
24. Require alt text before image use.
25. Build Admin article list.
26. Build create/edit article page.
27. Integrate the Markdown editor.
28. Add autosave and manual save states.
29. Add exact public preview.
30. Add publish checklist.
31. Add audit logs.
32. Add backend, component, and E2E tests.

Restrictions:
- Do not use arbitrary executable MDX from the database.
- Do not render unsanitized HTML.
- Do not permit publishing without required fields.
- Do not overwrite newer content with an older browser tab.
- Do not load the editor library on public pages.

Phase 05 exit gate:
- Admin can create, save, preview, publish, edit, archive, and restore an article.
- Unsafe Markdown is rejected or sanitized.
- Revisions are reliable.
- Autosave conflict behavior is tested.
- Slug changes preserve old URLs through redirects.
```

---

# Phase 06 — Public Knowledge Website

```text
Start Phase 06: Public Knowledge Website.

Goal:
Build the complete reader-facing website using the existing taxonomy, article APIs, design system, and Markdown renderer.

Required pages:
- Home
- Start Here
- Topic page
- Tag page
- Series page
- Article page
- About
- 404
- Error page

Required work:
1. Build the public header.
2. Build persistent desktop sidebar.
3. Build mobile navigation drawer.
4. Build right-side table of contents.
5. Build Home page sections:
   - introduction
   - global search entry
   - knowledge areas
   - featured articles
   - recently published
   - recently updated
   - active series
   - Start Here
6. Build Topic pages.
7. Build Tag pages.
8. Build Series pages with ordered article navigation.
9. Build Article page.
10. Show:
   - breadcrumb
   - title
   - excerpt
   - article type
   - reading time
   - published date
   - updated date
   - last reviewed date
   - tested versions
   - review warning
11. Add code copy buttons.
12. Add heading anchors.
13. Add callout, accordion, and tabs rendering.
14. Add previous and next article navigation.
15. Add related articles.
16. Add reading progress.
17. Add responsive tables and code blocks.
18. Add loading, empty, error, and not-found states.
19. Use server-first rendering.
20. Add caching and revalidation after publishing.
21. Verify public bundles do not include Admin editor code.
22. Add component, accessibility, responsive, and E2E tests.

Restrictions:
- Public pages must only expose published content.
- Draft previews require secure signed or authenticated access.
- Do not add a second Markdown renderer.
- Do not duplicate public and Admin preview styles.
- Do not convert all pages into Client Components.

Phase 06 exit gate:
- Published content is browsable on desktop and mobile.
- Drafts never appear publicly.
- Sidebar and TOC work with keyboard navigation.
- Public article rendering matches Admin preview.
- Admin editor code is absent from public bundles.
```

---

# Phase 07 — Search, SEO, RSS, and Discovery

```text
Start Phase 07: Search, SEO, and Content Discovery.

Goal:
Make published content easy to find inside the site and discoverable by search engines.

Search strategy:
Use PostgreSQL full-text search first. Do not add an external search service unless measurements prove it is necessary.

Required work:
1. Add search indexes for:
   - title
   - excerpt
   - plain article content
   - topic names
   - tag names
   - series titles
2. Add fuzzy or prefix title matching where appropriate.
3. Define search ranking rules.
4. Implement public search API.
5. Exclude non-published content.
6. Add topic, tag, type, series, and date filters.
7. Build Search page.
8. Build Ctrl/Cmd + K command palette.
9. Add debounced search.
10. Synchronize filters to URL.
11. Store recent searches locally.
12. Generate per-page metadata.
13. Add canonical URLs.
14. Add Open Graph metadata/images.
15. Add Article structured data.
16. Add Breadcrumb structured data.
17. Add sitemap.
18. Add robots rules.
19. Add RSS feed.
20. Add redirect tests for old article slugs.
21. Add noindex rules for Admin, previews, and drafts.
22. Add internal-link validation.
23. Add search relevance tests.
24. Add SEO validation tests.

Restrictions:
- Do not expose drafts through search.
- Do not add Elasticsearch, Algolia, Meilisearch, or OpenSearch in v1.
- Do not generate duplicate canonical URLs.
- Do not index Admin or preview pages.

Phase 07 exit gate:
- Search returns relevant published results.
- Filters work and are URL shareable.
- Sitemap and RSS validate.
- Canonical and structured metadata are correct.
- Old slugs redirect.
- Admin and preview pages are not indexed.
```

---

# Phase 08 — Admin Operations and Knowledge Maintenance

```text
Start Phase 08: Admin Operations and Content Maintenance.

Goal:
Make the knowledge base sustainable as content grows and technical information becomes outdated.

Required work:
1. Build Admin dashboard metrics.
2. Build Review Queue.
3. Mark articles as NEEDS_REVIEW when review dates pass.
4. Add stale-content reports.
5. Add missing SEO metadata report.
6. Add missing image-alt report.
7. Add broken internal-link report.
8. Add incomplete draft report.
9. Add recently changed articles.
10. Add article list filters.
11. Add saved Admin views if practical.
12. Add safe bulk status actions.
13. Build Media Library.
14. Build Audit Log viewer.
15. Add content export:
   - Markdown
   - JSON metadata
16. Add database-driven site settings.
17. Add confirmation dialogs for destructive actions.
18. Add permission checks to all bulk actions.
19. Add background-safe review calculations without introducing a queue system unless necessary.
20. Add integration and E2E tests.

Restrictions:
- Do not add AI article generation yet.
- Do not add comments, likes, or public users.
- Do not add Redis only for review-date calculations.
- Do not physically delete referenced media.
- Do not perform bulk destructive actions without confirmation and audit logs.

Phase 08 exit gate:
- Admin can identify stale, broken, incomplete, and missing-metadata content.
- Export works.
- Audit history is visible.
- Bulk operations are safe, authorized, and tested.
```

---

# Phase 09 — Testing, Security, Accessibility, and Performance

```text
Start Phase 09: Quality Hardening.

Goal:
Harden the entire product before deployment.

Required work:
1. Audit critical business rules and fill unit-test gaps.
2. Complete API integration tests.
3. Complete required Playwright flows.
4. Add accessibility scans using axe.
5. Add Lighthouse CI.
6. Define performance budgets.
7. Audit public JavaScript bundles.
8. Add Markdown XSS and unsafe URL tests.
9. Add authentication abuse tests.
10. Add rate-limit tests.
11. Add upload abuse tests.
12. Add authorization bypass tests.
13. Add dependency and secret scanning.
14. Verify logs do not leak passwords, cookies, tokens, or secrets.
15. Verify Content Security Policy.
16. Verify CORS and cookie settings.
17. Verify database migration from a clean database.
18. Rehearse database backup and restore.
19. Test broken deployment rollback instructions locally or in staging.
20. Remove dead code and duplicated components.
21. Review all loading, empty, error, disabled, and success states.
22. Update the security checklist and risk register.

Required E2E flows:
- Admin login
- Create topic
- Create draft
- Preview draft
- Publish article
- Find article through sidebar
- Find article through search
- Edit article
- Restore revision
- Verify old slug redirect
- Verify unauthorized Admin rejection
- Verify mobile navigation
- Verify theme persistence

Restrictions:
- Do not lower test thresholds merely to pass CI.
- Do not silence security warnings without recording a justified exception.
- Do not skip accessibility failures without a documented decision.
- Do not proceed to deployment with unresolved critical or high-risk defects.

Phase 09 exit gate:
- All CI gates pass.
- Critical user flows pass E2E.
- No unresolved critical security issue remains.
- Accessibility blockers are resolved.
- Performance budgets pass.
- Backup and restore are proven.
```

---

# Phase 10 — Deployment and Observability

```text
Start Phase 10: Deployment and Observability.

Goal:
Create a reproducible staging and production deployment without coupling application code to one hosting provider.

Required work:
1. Create production Dockerfile for the API.
2. Create production build configuration for the Web app.
3. Create environment-variable documentation.
4. Configure managed PostgreSQL requirements.
5. Configure object storage requirements.
6. Configure domain and TLS requirements.
7. Define the database migration release step.
8. Add health and readiness probes.
9. Add structured log collection.
10. Add error monitoring.
11. Add uptime monitoring.
12. Add database backup retention policy.
13. Create staging deployment instructions.
14. Create production deployment instructions.
15. Create rollback instructions.
16. Add smoke tests against staging.
17. Run E2E tests against staging.
18. Verify Admin and public caching behavior.
19. Verify secrets are injected securely.
20. Verify no secrets exist in repository history.
21. Record all infrastructure decisions in ADRs.

Restrictions:
- Do not create cloud resources without explicit user approval.
- Do not commit real credentials.
- Do not hard-code provider-specific URLs into domain logic.
- Do not deploy production before staging exit gates pass.
- Do not run destructive migrations without a backup and rollback plan.

Phase 10 exit gate:
- Staging deployment is reproducible.
- Health checks and monitoring work.
- Migrations run safely.
- Secrets remain outside the repository.
- Staging E2E tests pass.
- Rollback steps are documented and rehearsed.
```

---

# Phase 11 — Version 1 Content and Release

```text
Start Phase 11: Version 1 Release.

Goal:
Prepare real content, validate the complete product, and release the first stable version.

Required work:
1. Create the final topic hierarchy.
2. Create the final sidebar navigation.
3. Create Start Here.
4. Create About.
5. Publish at least 8 to 12 real technical articles.
6. Include a mix of:
   - tutorials
   - comparisons
   - troubleshooting notes
   - learning notes
   - project case studies
7. Review every article for:
   - title
   - excerpt
   - slug
   - primary topic
   - tags
   - tested versions
   - sources
   - SEO title
   - SEO description
   - image alt text
   - last reviewed date
8. Verify all internal links.
9. Verify all slug redirects.
10. Verify RSS and sitemap.
11. Run the full test suite against staging.
12. Run accessibility and Lighthouse checks.
13. Run the release checklist.
14. Prepare release notes.
15. Prepare the production deployment command sequence.
16. Do not deploy or push until the user explicitly approves.
17. After approval, deploy production.
18. Tag the release.
19. Record post-release defects and v2 backlog.

Suggested initial articles:
- React 18 vs React 19
- Server Components vs Client Components
- How to structure a React feature
- Reusable TanStack Table architecture
- NestJS Controller vs Service vs Repository
- Prisma migration workflow
- PostgreSQL full-text search
- Git rebase in a real project
- PowerShell profile errors
- WSL vs full Linux
- How to use Codex CLI effectively
- Building a Chrome extension with WXT

Phase 11 exit gate:
- Full content lifecycle works.
- Public browsing and search work.
- UI and backend conventions remain consistent.
- Mobile experience is complete.
- SEO essentials pass.
- Backup and rollback are documented.
- Critical flows pass automated tests.
- Production release is tagged and documented.
```

---

# Prompt to continue the current phase

Use this after the first Codex session of a phase:

```text
Continue the current project phase.

Before changing code:
1. Read AGENTS.md.
2. Read docs/EXECUTION_STATE.md.
3. Read docs/SESSION_LOG.md.
4. Read docs/DECISIONS.md.
5. Read docs/RISKS.md.
6. Read docs/TEST_MATRIX.md.
7. Read the active phase file.
8. Inspect the latest commits and working tree.

Then:
- Identify the exact next incomplete task recorded in EXECUTION_STATE.md.
- Confirm its scope and acceptance criteria.
- Implement only that task.
- Add or update tests.
- Run targeted validation plus the required repository checks.
- Update all repository memory files.
- Create one focused conventional commit only if all gates pass.
- Do not start the following task in the same run.

At the end report:
- completed task
- changed files
- tests
- command results
- limitations
- exact next task
```

---

# Prompt to close a phase

```text
Review and close the current phase.

Do not implement new features.

Required work:
1. Read the active phase file and all repository memory files.
2. Compare every task and acceptance criterion with the current code.
3. Run the complete phase validation suite.
4. Run all manual verification steps that can be performed locally.
5. Identify incomplete, partially implemented, undocumented, or untested items.
6. Fix only issues that belong to the current phase.
7. Update:
   - docs/TASKS.md
   - docs/EXECUTION_STATE.md
   - docs/SESSION_LOG.md
   - docs/RISKS.md
   - docs/TEST_MATRIX.md
   - docs/DECISIONS.md when needed
8. Write a phase summary containing:
   - completed capabilities
   - architecture decisions
   - test totals
   - manual checks
   - deferred work
   - known risks
9. Create one focused phase-closeout commit only if all exit gates pass.
10. Record the next phase as the exact next action, but do not start it.

Return:
- Phase status: PASS or BLOCKED
- Exit gate results
- Validation results
- Deferred items
- Exact next action
```
