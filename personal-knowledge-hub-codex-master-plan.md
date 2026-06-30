# Personal Knowledge Hub — Codex Master Plan

**Project type:** Personal technical knowledge base + blog + admin CMS  
**Primary language:** Vietnamese, with technical terms preserved in English  
**Backend requirement:** Node.js  
**Plan date:** 2026-06-30

---

## 1. Product vision

Build a personal website that stores, organizes, and publishes everything learned about:

- Frontend
- Backend
- Databases
- DevOps and tooling
- AI tools and AI-assisted development
- Testing
- Git and developer workflow
- Troubleshooting notes
- Comparisons between technologies and versions
- Step-by-step installation and usage guides

This product should not be treated as a generic chronological blog. It should be a **personal knowledge hub** with structured navigation, searchable content, topic series, article lifecycle management, and a dedicated admin CMS.

### Main goals

1. Make learned knowledge easy to record.
2. Make old knowledge easy to find again.
3. Make technical articles pleasant to read.
4. Preserve consistency across the entire UI.
5. Preserve consistency across backend modules and API contracts.
6. Make content maintainable when libraries and versions change.
7. Build the system as a real full-stack learning project.

---

## 2. Key product decisions

### 2.1 Public URLs must remain stable

Use stable article routes:

```text
/articles/react-18-vs-react-19
/articles/how-to-install-postgresql-on-windows
/articles/how-i-use-codex-cli
```

Do not put category names into the canonical article URL because categories may change later.

Category and topic landing pages:

```text
/topics/frontend
/topics/react
/topics/backend
/topics/nodejs
/topics/ai
/tags/typescript
/series/react-deep-dive
```

### 2.2 Markdown is the source of truth

Store article content as Markdown rather than arbitrary HTML or executable MDX.

Reasons:

- Ideal for code-heavy technical content.
- Easy to export and back up.
- Easy to diff in revision history.
- Does not execute arbitrary JSX from database content.
- Can support custom directives for callouts, tabs, accordions, and embeds.
- Can later be migrated to files or another CMS.

Recommended admin editor:

- MDXEditor in Markdown-only mode, or
- CodeMirror 6 with split preview if MDXEditor customization becomes a blocker.

The stored value remains Markdown.

### 2.3 Custom article blocks

Support these blocks in the renderer:

```md
:::note
Important information.
:::

:::warning
This command deletes data.
:::

:::accordion{title="Why does this happen?"}
Detailed explanation.
:::

:::tabs
:::tab{label="pnpm"}
pnpm add package-name
:::
:::tab{label="npm"}
npm install package-name
:::
:::
```

Do not allow arbitrary React components from article content in v1.

### 2.4 Technical content lifecycle

Every article should have a lifecycle:

```text
IDEA → DRAFT → IN_REVIEW → PUBLISHED → NEEDS_REVIEW → ARCHIVED
```

Important technical maintenance fields:

- `lastReviewedAt`
- `testedWith`
- `versionNote`
- `sourceReferences`
- `isEvergreen`
- `reviewAfter`
- `outdatedReason`

This prevents old tutorials from silently becoming misleading.

### 2.5 Single administrator first

Start with one admin account, but keep roles in the schema:

- `ADMIN`
- `EDITOR`

Do not build public user registration, social login, comments, likes, or bookmarks in v1.

---

## 3. Target user experience

## 3.1 Desktop public layout

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Header: Logo | Search | GitHub | Theme                              │
├──────────────────┬───────────────────────────────┬───────────────────┤
│ Left sidebar     │ Main article/content          │ On this page      │
│                  │                               │                   │
│ Home             │ Breadcrumb                    │ H2 heading        │
│ Frontend         │ Title                         │ H2 heading        │
│   React          │ Summary                       │   H3 heading      │
│   Next.js        │ Metadata                      │ H2 heading        │
│   CSS            │ Article                       │                   │
│ Backend          │ Related articles              │ Reading progress  │
│   Node.js        │ Previous / Next               │                   │
│   NestJS         │                               │                   │
│ AI               │                               │                   │
└──────────────────┴───────────────────────────────┴───────────────────┘
```

Recommended dimensions:

- Left navigation: 272–288 px
- Article reading width: 720–800 px
- Right table of contents: 220–256 px
- Maximum shell width: 1500–1600 px

## 3.2 Responsive behavior

### Desktop

- Persistent left sidebar.
- Persistent right table of contents.
- Search button supports `Ctrl/Cmd + K`.

### Tablet

- Left sidebar collapsible.
- Right table of contents becomes a dropdown or drawer.

### Mobile

- Header with menu button.
- Navigation opens in a sheet/drawer.
- Table of contents appears as an accordion above article content.
- Code blocks scroll horizontally.
- No content should cause horizontal page overflow.

---

## 4. Information architecture

## 4.1 Main navigation

```text
Home
Start Here
Frontend
  HTML & Accessibility
  CSS & UI
  JavaScript
  TypeScript
  React
  Next.js
  State Management
Backend
  Node.js
  NestJS
  API Design
  Authentication
Database
  PostgreSQL
  Prisma
  SQL
Testing
  Unit Testing
  Integration Testing
  E2E / Playwright
AI & Automation
  ChatGPT
  Codex CLI
  Gemini CLI
  Prompting
  AI Workflows
Dev Tools
  Git
  VS Code
  Windows / PowerShell
  Linux / WSL
Projects & Case Studies
Troubleshooting
About
```

The menu must be database-driven so it can be reordered from Admin.

## 4.2 Content taxonomy

Use these structures for different purposes:

- **Area:** top-level knowledge domain, such as Frontend or Backend.
- **Topic:** React, Node.js, PostgreSQL, AI.
- **Series:** ordered set of articles.
- **Tag:** flexible labels, such as performance, beginner, comparison.
- **Article type:** tutorial, comparison, explanation, troubleshooting, reference, case study, opinion.

Do not use tags as a replacement for structured topics.

## 4.3 Suggested article templates

### Tutorial

1. Problem or goal
2. Prerequisites
3. Installation
4. Step-by-step implementation
5. Explanation
6. Common errors
7. Final result
8. References
9. Tested versions

### Comparison

1. Executive summary
2. Comparison table
3. Important changes
4. Code before and after
5. Migration risks
6. Who should upgrade
7. Recommendation
8. References

### Troubleshooting

1. Error message
2. Environment
3. Root cause
4. Fix
5. Verification
6. Prevention

### Learning note

1. What I learned
2. Why it matters
3. Small example
4. What I still need to learn
5. Related notes

---

## 5. Scope

## 5.1 Version 1 — required

### Public website

- Home page
- Latest articles
- Recently updated articles
- Topic pages
- Tag pages
- Series pages
- Article detail page
- Nested sidebar navigation
- Responsive mobile navigation
- Right-side table of contents
- Global search
- Command palette
- Dark and light themes
- Code syntax highlighting
- Copy code button
- Heading anchor links
- Callout blocks
- Accordion blocks
- Tabs blocks
- Previous and next article
- Related articles
- Reading time
- Article version/review status
- RSS feed
- Sitemap
- Robots file
- Open Graph metadata
- Custom 404 and error pages

### Admin website

- Secure admin login
- Dashboard
- Article list
- Create article
- Edit article
- Autosave draft
- Preview unpublished article
- Publish/unpublish/archive
- Revision history
- Restore a revision
- Topic management
- Tag management
- Series management
- Navigation management
- Media upload
- Site settings
- Article review status
- Article search and filters
- Slug validation and redirect management

### Backend

- Authentication
- Role authorization
- Article CRUD
- Topic CRUD
- Tag CRUD
- Series CRUD
- Navigation CRUD
- Revision history
- Media metadata
- Site settings
- Search
- Health check
- Audit log
- OpenAPI documentation
- Standard error handling
- Rate limiting
- Structured logs

## 5.2 Later versions

Do not include these in the MVP unless all v1 acceptance gates pass:

- Public accounts
- Comments
- Likes
- Bookmarks
- Newsletter sending
- AI-generated article drafts
- RAG chatbot over published articles
- Collaborative editing
- Multi-author workflow
- Full multilingual translations
- Live code playground
- Mermaid diagrams
- Offline/PWA mode
- External search engine
- Mobile application

---

## 6. Technology stack

Always install the current stable versions during bootstrap, verify compatibility from official documentation, and commit the lockfile. Do not hard-code old version numbers in planning documents.

## 6.1 Repository

- pnpm workspaces
- Turborepo
- TypeScript strict mode
- ESLint
- Prettier
- Husky + lint-staged
- Commitlint
- GitHub Actions

## 6.2 Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui accessible primitives
- Radix primitives where needed
- Lucide icons
- class-variance-authority
- next-themes
- TanStack Query for Admin mutations and client-side server state
- React Hook Form
- Zod for frontend forms
- MDXEditor or CodeMirror for Markdown authoring
- react-markdown/remark/rehype pipeline for safe rendering
- Shiki for server-side code highlighting

## 6.3 Backend

- Node.js Active LTS
- NestJS
- REST API
- PostgreSQL
- Prisma ORM
- Swagger/OpenAPI
- class-validator and class-transformer
- Passport or custom Nest guards for authentication
- Pino-compatible structured logging
- Secure HTTP-only cookie authentication
- Object storage adapter for images

## 6.4 Testing

- Vitest for packages and frontend unit tests
- React Testing Library
- Jest or Vitest for NestJS according to the generated project baseline
- Supertest for API integration tests
- Playwright for end-to-end tests
- Testcontainers for database integration tests when practical
- axe accessibility checks
- Lighthouse CI for key public routes

## 6.5 Local infrastructure

Use Docker Compose for:

- PostgreSQL
- Optional S3-compatible local object storage
- Optional mail catcher for future email features

Redis is not required in v1.

---

## 7. Monorepo structure

```text
personal-knowledge-hub/
├─ apps/
│  ├─ web/
│  │  ├─ app/
│  │  │  ├─ (public)/
│  │  │  ├─ admin/
│  │  │  └─ api/                 # only BFF/metadata/feed helpers if needed
│  │  ├─ features/
│  │  ├─ components/
│  │  └─ lib/
│  └─ api/
│     ├─ src/
│     │  ├─ modules/
│     │  ├─ common/
│     │  ├─ config/
│     │  └─ main.ts
│     └─ test/
├─ packages/
│  ├─ ui/
│  ├─ api-client/                # generated from OpenAPI
│  ├─ database/
│  ├─ markdown/
│  ├─ shared/
│  ├─ eslint-config/
│  └─ typescript-config/
├─ infra/
│  ├─ docker/
│  └─ compose.yaml
├─ docs/
│  ├─ architecture/
│  ├─ product/
│  ├─ api/
│  ├─ TASKS.md
│  ├─ EXECUTION_STATE.md
│  ├─ DECISIONS.md
│  ├─ SESSION_LOG.md
│  ├─ RISKS.md
│  └─ TEST_MATRIX.md
├─ codex-plan/
│  ├─ PHASE_00_BOOTSTRAP.md
│  ├─ PHASE_01_ARCHITECTURE_DESIGN_SYSTEM.md
│  ├─ PHASE_02_BACKEND_FOUNDATION.md
│  ├─ PHASE_03_AUTH_ADMIN_SHELL.md
│  ├─ PHASE_04_CONTENT_TAXONOMY.md
│  ├─ PHASE_05_EDITOR_MEDIA_REVISIONS.md
│  ├─ PHASE_06_PUBLIC_SITE.md
│  ├─ PHASE_07_SEARCH_SEO_DISCOVERY.md
│  ├─ PHASE_08_ADMIN_OPERATIONS.md
│  ├─ PHASE_09_QUALITY_SECURITY.md
│  ├─ PHASE_10_DEPLOYMENT.md
│  └─ PHASE_11_RELEASE.md
├─ AGENTS.md
├─ PLANS.md
├─ package.json
├─ pnpm-workspace.yaml
└─ turbo.json
```

### Dependency boundaries

- `apps/web` may import `packages/ui`, `packages/api-client`, `packages/markdown`, and `packages/shared`.
- `apps/web` must not import Prisma or `packages/database`.
- `apps/api` may import `packages/database` and `packages/shared`.
- `packages/ui` must not know about business domains.
- `packages/api-client` is generated from the API OpenAPI schema.
- Feature code must not use deep relative imports across feature boundaries.

---

## 8. UI consistency rules

## 8.1 Design tokens

Define semantic tokens once:

- Background
- Surface
- Elevated surface
- Border
- Foreground
- Muted foreground
- Primary
- Primary foreground
- Success
- Warning
- Danger
- Information
- Code background

Define consistent scales:

- Spacing
- Border radius
- Shadows
- Typography
- Container widths
- Z-index layers
- Motion duration

Feature code must use semantic tokens. Do not introduce random hex colors or arbitrary one-page styling.

## 8.2 Typography

Recommended roles:

- UI sans-serif font for interface.
- Readable sans-serif or serif option for long article text.
- Monospace font for code.

Required article typography:

- Clear heading hierarchy.
- Paragraph line height around 1.7–1.85.
- Article font size around 17–18 px on desktop.
- Maximum readable line length.
- Distinct inline code and code block styles.
- Consistent table, quote, list, and callout styles.

## 8.3 Shared components

All pages must use shared components:

```text
AppShell
PublicHeader
AdminHeader
Sidebar
MobileNavigation
Breadcrumb
PageHeader
ArticleCard
ArticleMeta
TopicBadge
StatusBadge
SearchDialog
EmptyState
ErrorState
ConfirmDialog
DataTable
Pagination
FormField
MarkdownRenderer
CodeBlock
Callout
AccordionBlock
TabsBlock
TableOfContents
MediaPicker
```

## 8.4 UI enforcement

- Build `packages/ui`.
- Add Storybook for shared UI.
- Add an Admin UI Lab route for integrated states.
- Use CVA variants for Button, Badge, Alert, Card, and input states.
- No duplicated Button, Modal, Badge, Table, or FormField implementations.
- Every interactive component must support keyboard navigation.
- Every feature must implement loading, empty, error, and success states.
- Use one icon library only.
- Use one toast system only.
- Use one form error pattern only.
- Use one confirmation pattern for destructive actions.

---

## 9. Backend consistency rules

## 9.1 Module pattern

Every backend domain follows:

```text
module/
├─ controllers/
├─ services/
├─ repositories/
├─ dto/
├─ entities-or-mappers/
├─ policies/
├─ tests/
└─ module.ts
```

Flow:

```text
Controller → Service/Use Case → Repository → Prisma → PostgreSQL
```

Rules:

- Controllers contain no business logic.
- Controllers never access Prisma directly.
- Services do not return raw Prisma models to public endpoints.
- Repositories contain persistence details.
- DTOs validate all external input.
- Response mappers control exposed fields.
- Authorization is enforced by guards/policies, not UI visibility.
- Transactions are explicit for multi-write operations.
- Database migrations are immutable after merging.

## 9.2 API conventions

Base path:

```text
/api/v1
```

Examples:

```text
GET    /api/v1/articles
GET    /api/v1/articles/:slug
GET    /api/v1/topics
GET    /api/v1/search?q=react

POST   /api/v1/admin/articles
PATCH  /api/v1/admin/articles/:id
POST   /api/v1/admin/articles/:id/publish
POST   /api/v1/admin/articles/:id/unpublish
POST   /api/v1/admin/articles/:id/archive
GET    /api/v1/admin/articles/:id/revisions
POST   /api/v1/admin/articles/:id/revisions/:revisionId/restore
```

Pagination:

```json
{
  "items": [],
  "pageInfo": {
    "page": 1,
    "pageSize": 20,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

Error shape:

```json
{
  "type": "https://example.com/problems/validation-error",
  "title": "Validation failed",
  "status": 400,
  "code": "VALIDATION_ERROR",
  "detail": "One or more fields are invalid.",
  "requestId": "request-id",
  "errors": {
    "title": ["Title is required"]
  }
}
```

Use consistent machine-readable error codes.

## 9.3 Contract synchronization

- Generate OpenAPI from NestJS.
- Generate the frontend TypeScript API client from OpenAPI.
- Commit the generated client only if the chosen generator workflow is deterministic.
- CI must fail if the API schema and generated client are out of sync.
- Do not manually duplicate backend response types inside frontend features.

---

## 10. Database design

## 10.1 Main entities

### User

- id
- email
- passwordHash
- displayName
- role
- isActive
- lastLoginAt
- createdAt
- updatedAt

### Article

- id
- title
- slug
- excerpt
- contentMarkdown
- contentPlainText
- coverImageId
- status
- articleType
- language
- readingTimeMinutes
- featured
- publishedAt
- lastReviewedAt
- reviewAfter
- testedWith
- versionNote
- isEvergreen
- seoTitle
- seoDescription
- canonicalUrl
- createdById
- updatedById
- createdAt
- updatedAt
- deletedAt

### ArticleRevision

- id
- articleId
- title
- excerpt
- contentMarkdown
- metadataSnapshot
- revisionNumber
- changeSummary
- createdById
- createdAt

### Topic

- id
- name
- slug
- description
- parentId
- icon
- sortOrder
- isVisible
- createdAt
- updatedAt

### ArticleTopic

- articleId
- topicId
- isPrimary

### Tag

- id
- name
- slug

### ArticleTag

- articleId
- tagId

### Series

- id
- title
- slug
- description
- coverImageId
- status
- createdAt
- updatedAt

### SeriesArticle

- seriesId
- articleId
- position

### NavigationItem

- id
- label
- type
- destination
- parentId
- sortOrder
- icon
- isVisible
- requiredRole

### MediaAsset

- id
- storageKey
- originalFilename
- mimeType
- sizeBytes
- width
- height
- altText
- caption
- uploadedById
- createdAt

### SlugRedirect

- id
- entityType
- oldSlug
- newSlug
- createdAt

### SiteSetting

- key
- valueJson
- updatedById
- updatedAt

### AuditLog

- id
- actorId
- action
- entityType
- entityId
- beforeJson
- afterJson
- requestId
- createdAt

## 10.2 Important indexes

- Unique index on article slug.
- Index on article status and publishedAt.
- Index on updatedAt.
- Unique index on topic slug.
- Unique index on tag slug.
- Unique index on series slug.
- Composite indexes for join tables.
- Full-text search GIN index.
- Trigram index for fuzzy title matching if enabled.
- Index on `lastReviewedAt` and `reviewAfter`.

## 10.3 Delete behavior

- Articles use soft delete.
- Topics cannot be deleted while used unless reassigned.
- Media cannot be physically deleted while referenced.
- Tags may be deleted only after relation cleanup.
- Audit logs are append-only.

---

## 11. Authentication and security

### Authentication approach

- Admin login by email and password.
- Password hash using a modern password hashing algorithm supported by the selected Node library.
- Short-lived access session.
- Rotating refresh session.
- Store tokens only in `HttpOnly`, `Secure`, and appropriate `SameSite` cookies.
- Do not store auth tokens in localStorage.
- Protect all admin mutations with CSRF protection appropriate to the cookie strategy.
- Logout invalidates the refresh session.
- Admin account seed must require changing the initial password.

### Security requirements

- Helmet/security headers.
- Strict CORS allowlist.
- Rate limiting on login, search, uploads, and write endpoints.
- Input validation.
- File MIME and size validation.
- Image processing strips unsafe metadata.
- Markdown rendering must sanitize unsafe HTML.
- No executable JavaScript from article content.
- Server-side authorization for every admin action.
- Secrets only through environment variables or secret manager.
- `.env.example` contains names, never real values.
- Request ID on every API request.
- Audit all content changes.
- Dependency audit in CI.
- Production database backups.
- Content Security Policy suitable for the final hosting setup.

---

## 12. Markdown pipeline

Create `packages/markdown` so Public and Admin Preview use the same renderer.

Pipeline responsibilities:

1. Parse Markdown.
2. Support GitHub-flavored Markdown.
3. Parse custom directives.
4. Extract heading tree.
5. Generate stable heading IDs.
6. Generate table of contents.
7. Highlight code server-side.
8. Add copy-code metadata.
9. Sanitize unsafe nodes.
10. Produce estimated reading time.
11. Extract plain text for search.
12. Validate unsupported blocks before publishing.

Required tests:

- Heading IDs
- Duplicate headings
- Code blocks
- Tables
- Links
- Images
- Callouts
- Tabs
- Accordions
- Unsafe HTML
- Script injection
- Malformed directives
- Very long code lines

---

## 13. Search strategy

Start with PostgreSQL search.

Search fields:

- title
- excerpt
- plain article content
- topic names
- tag names
- series title

Ranking priority:

1. Exact title match
2. Title prefix/fuzzy match
3. Topic or tag match
4. Excerpt match
5. Body match
6. Recently reviewed content boost

Search filters:

- topic
- tag
- article type
- series
- published date
- recently updated

Do not add Elasticsearch, OpenSearch, Algolia, or Meilisearch in v1. Add an external search service only after measurement proves PostgreSQL is insufficient.

---

## 14. Public pages

## 14.1 Home

Sections:

- Short personal introduction
- Search
- Knowledge areas
- Featured articles
- Recently published
- Recently updated
- Active series
- “Start here” learning paths
- GitHub/profile links

## 14.2 Topic page

- Topic description
- Child topics
- Featured articles
- All published articles
- Filters and sort
- Related series

## 14.3 Article page

Order:

1. Breadcrumb
2. Status notice if content needs review
3. Title
4. Excerpt
5. Metadata
6. Tested version information
7. Article content
8. References
9. Last reviewed date
10. Series navigation
11. Previous/next
12. Related content

## 14.4 Search

- Keyboard accessible.
- Debounced query.
- URL-synchronized filters.
- Highlight matched title fragments.
- Empty suggestions.
- Recent searches stored locally.
- Public search only returns published articles.

---

## 15. Admin pages

```text
/admin
/admin/articles
/admin/articles/new
/admin/articles/:id/edit
/admin/topics
/admin/tags
/admin/series
/admin/navigation
/admin/media
/admin/review-queue
/admin/settings
/admin/audit-logs
/admin/ui-lab
```

## 15.1 Editor layout

```text
┌───────────────────────────────────────────────────────────────┐
│ Back | Draft status | Save | Preview | Publish               │
├──────────────────────────────────┬────────────────────────────┤
│ Main editor                      │ Article settings           │
│                                  │                            │
│ Title                            │ Status                     │
│ Excerpt                          │ Topic                      │
│ Markdown editor                  │ Tags                       │
│                                  │ Series                     │
│                                  │ SEO                        │
│                                  │ Review metadata            │
└──────────────────────────────────┴────────────────────────────┘
```

Editor requirements:

- Autosave with visible state.
- Manual save.
- Dirty state warning.
- Slug preview.
- Duplicate slug check.
- Preview using the exact public renderer.
- Word count.
- Reading time.
- Heading outline.
- Broken internal link warning.
- Unsupported directive warning.
- Image alt text requirement.
- Publish checklist.
- Restore revisions.

---

## 16. Performance and SEO

### Public rendering

- Prefer Server Components for public content.
- Fetch article data on the server.
- Cache published content.
- Revalidate affected pages after publish/update.
- Keep Admin dynamic and authenticated.
- Avoid sending editor libraries to public pages.

### SEO

- Per-article title and description.
- Canonical URL.
- Open Graph image.
- Article structured data.
- Breadcrumb structured data.
- Sitemap.
- Robots rules.
- RSS feed.
- Redirect old slugs.
- Noindex admin, previews, drafts, and internal API pages.

### Performance budgets

Set budgets during Phase 01 and enforce later:

- Minimize public JavaScript.
- Editor bundle loads only inside Admin.
- Images use responsive optimization.
- Article page has no layout shift from images.
- Search dialog is lazy loaded.
- Sidebar remains usable without animation.
- Meet agreed Lighthouse thresholds before release.

---

## 17. Testing strategy

## 17.1 Unit tests

- Slug generation
- Reading time
- Markdown directives
- TOC extraction
- Validation schemas
- Status transitions
- Permission policies
- Search ranking helpers
- API mappers

## 17.2 Backend integration tests

- Login and refresh
- Unauthorized and forbidden access
- Article CRUD
- Publish flow
- Revision creation
- Revision restore
- Topic hierarchy
- Slug redirect
- Search
- Upload validation
- Audit log creation
- Transaction rollback

## 17.3 Frontend component tests

- Sidebar nested navigation
- Mobile menu
- Search dialog
- Article card states
- Article renderer
- Editor save states
- Publish checklist
- Data table filters
- Error and empty states

## 17.4 End-to-end tests

Required Playwright flows:

1. Admin logs in.
2. Admin creates a topic.
3. Admin creates a draft article.
4. Admin previews the draft.
5. Admin publishes it.
6. Public user can find it through sidebar.
7. Public user can find it through search.
8. Article metadata and TOC render.
9. Admin edits article.
10. Revision history is created.
11. Admin restores prior revision.
12. Old slug redirects correctly.
13. Unauthorized user cannot access Admin.
14. Mobile navigation works.
15. Theme persists.

---

## 18. CI gates

Every pull request must run:

```text
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm test:integration
pnpm build
pnpm api:check
pnpm e2e:smoke
```

Release branch additionally runs:

```text
pnpm e2e
pnpm lighthouse
pnpm dependency:audit
pnpm migration:check
```

No phase is complete while a required gate is failing.

---

# 19. Implementation roadmap

## Phase 00 — Bootstrap and repository memory

### Goals

- Create monorepo.
- Establish Codex operating rules.
- Lock quality tooling.
- Create local infrastructure.
- Record all decisions in repository files.

### Tasks

1. Initialize Git repository.
2. Initialize pnpm workspace and Turborepo.
3. Create `apps/web`, `apps/api`, and package folders.
4. Configure TypeScript strict mode.
5. Configure ESLint and Prettier.
6. Configure commitlint and lint-staged.
7. Configure Docker Compose with PostgreSQL.
8. Add `.env.example`.
9. Add baseline CI.
10. Create repository memory files.
11. Create all phase files.
12. Record selected dependency versions after checking current official docs.
13. Add root commands.
14. Verify clean install from scratch.

### Exit gate

- Install succeeds.
- Development servers start.
- PostgreSQL health check passes.
- Lint/typecheck/test/build baseline passes.
- No secrets are committed.
- `docs/EXECUTION_STATE.md` contains exact next action.

---

## Phase 01 — Architecture and design system

### Goals

- Prevent UI inconsistency before feature work.
- Define application shells.
- Define API and backend conventions.

### Tasks

1. Write architecture decision records.
2. Define design tokens.
3. Create `packages/ui`.
4. Install and configure accessible primitives.
5. Build core components and variants.
6. Add Storybook.
7. Build public shell.
8. Build admin shell.
9. Build responsive sidebar prototypes.
10. Build article typography page.
11. Build Admin UI Lab.
12. Document backend module template.
13. Document API error and pagination shapes.
14. Define dependency boundaries and lint rules.
15. Add accessibility tests for core components.

### Exit gate

- Public and Admin shells work on desktop/mobile.
- Shared components are visible in Storybook.
- No raw random colors in feature examples.
- Keyboard navigation passes.
- Architecture and UI decisions are documented.

---

## Phase 02 — Backend and database foundation

### Goals

- Establish reliable NestJS, Prisma, PostgreSQL, logging, validation, and OpenAPI foundations.

### Tasks

1. Configure NestJS app.
2. Configure environment validation.
3. Configure Prisma package.
4. Create initial database schema.
5. Create migration workflow.
6. Add seed workflow.
7. Add global validation.
8. Add standard exception filter.
9. Add request IDs.
10. Add structured logging.
11. Add health endpoint.
12. Configure Swagger/OpenAPI.
13. Add API client generation.
14. Add API schema drift check.
15. Add integration test database workflow.

### Exit gate

- Database migration runs from empty database.
- Seed runs.
- Health endpoint works.
- OpenAPI is generated.
- API client is generated.
- Integration test can create and roll back data.
- Error shape matches contract.

---

## Phase 03 — Authentication and Admin shell

### Goals

- Secure Admin before content mutation features.

### Tasks

1. Implement User and Session models.
2. Add admin seed command.
3. Implement login.
4. Implement refresh session rotation.
5. Implement logout.
6. Implement `me`.
7. Add role guards.
8. Add rate limiting.
9. Add Helmet and CORS.
10. Add CSRF protection strategy.
11. Build Admin login UI.
12. Protect Admin routes.
13. Build Admin navigation.
14. Add session expiration UX.
15. Add auth integration and E2E tests.

### Exit gate

- Valid admin can log in.
- Invalid login is rate limited.
- Cookies are secure under production configuration.
- Unauthorized users cannot open Admin.
- Refresh rotation and logout invalidation are tested.

---

## Phase 04 — Content taxonomy and navigation

### Goals

- Establish Topics, Tags, Series, Navigation, and Site Settings before articles.

### Tasks

1. Implement Topic model and hierarchy.
2. Implement Tag model.
3. Implement Series model.
4. Implement NavigationItem model.
5. Implement SiteSetting model.
6. Add public read APIs.
7. Add admin CRUD APIs.
8. Add reorder operations.
9. Build Admin topic management.
10. Build Admin tag management.
11. Build Admin series management.
12. Build Admin navigation editor.
13. Build sidebar from API data.
14. Add cache invalidation.
15. Add validation for cycles and duplicate slugs.

### Exit gate

- Nested topics work.
- Navigation order can be changed.
- Cyclic trees are rejected.
- Public sidebar reads database configuration.
- CRUD and permissions are tested.

---

## Phase 05 — Article editor, media, and revisions

### Goals

- Complete the core authoring workflow.

### Tasks

1. Implement Article model.
2. Implement article status machine.
3. Implement article CRUD.
4. Implement unique slug and redirect logic.
5. Implement Markdown package.
6. Implement ArticleRevision.
7. Create revision on meaningful save.
8. Implement restore revision.
9. Implement autosave API.
10. Implement media metadata and storage adapter.
11. Implement upload validation.
12. Build article list.
13. Build create/edit form.
14. Integrate Markdown editor.
15. Build exact public preview.
16. Add publish checklist.
17. Add source/version/review fields.
18. Add audit logs.
19. Add editor component and E2E tests.

### Exit gate

- Admin creates, saves, previews, publishes, edits, and restores an article.
- Unsafe Markdown is rejected or sanitized.
- Images require alt text.
- Revision history is accurate.
- Slug changes create redirects.
- Autosave does not overwrite newer content.

---

## Phase 06 — Public knowledge website

### Goals

- Deliver the reader-facing product.

### Tasks

1. Build home page.
2. Build topic pages.
3. Build tag pages.
4. Build series pages.
5. Build article page.
6. Add left sidebar.
7. Add mobile navigation.
8. Add right TOC.
9. Add reading progress.
10. Add code copy buttons.
11. Add article blocks.
12. Add previous/next navigation.
13. Add related articles.
14. Add review/outdated notices.
15. Add loading, error, empty, and not-found states.
16. Implement server rendering and cache policy.
17. Add responsive and accessibility tests.

### Exit gate

- All published content routes work.
- Drafts never appear publicly.
- Navigation works on keyboard and mobile.
- Public pages do not load Admin editor bundles.
- Article renderer matches Admin preview.

---

## Phase 07 — Search, SEO, and discovery

### Goals

- Make content discoverable internally and externally.

### Tasks

1. Add full-text search index.
2. Add title fuzzy matching.
3. Implement public search API.
4. Build search page.
5. Build command palette.
6. Add search filters.
7. Add recent searches locally.
8. Add metadata generation.
9. Add canonical URLs.
10. Add Open Graph images.
11. Add structured data.
12. Add sitemap.
13. Add robots rules.
14. Add RSS feed.
15. Add internal link validation.
16. Add redirect behavior tests.

### Exit gate

- Search returns relevant published results.
- Drafts are excluded.
- Key pages have correct metadata.
- Sitemap and RSS validate.
- Old slugs redirect.
- Admin and preview routes are noindex.

---

## Phase 08 — Admin operations and content maintenance

### Goals

- Make the site sustainable over time.

### Tasks

1. Build Admin dashboard metrics.
2. Build review queue.
3. Add `NEEDS_REVIEW` automation based on dates.
4. Add bulk status operations.
5. Add filters and saved views.
6. Build media library.
7. Add broken-link report.
8. Add missing-alt report.
9. Add unpublished draft report.
10. Add stale article report.
11. Build audit log viewer.
12. Add content export to Markdown/JSON.
13. Add database-driven settings page.

### Exit gate

- Admin can find stale and incomplete content.
- Content can be exported.
- Audit history is visible.
- Bulk actions are permission-protected and confirmed.

---

## Phase 09 — Quality, security, accessibility, and performance

### Goals

- Harden the entire product before deployment.

### Tasks

1. Complete unit coverage for critical business rules.
2. Complete API integration suite.
3. Complete required Playwright suite.
4. Add accessibility scans.
5. Add Lighthouse CI.
6. Add dependency/security scanning.
7. Add upload abuse tests.
8. Add auth abuse tests.
9. Add Markdown XSS tests.
10. Add database backup/restore rehearsal.
11. Add performance budgets.
12. Remove dead code and duplicated components.
13. Verify logs do not leak secrets.
14. Verify production CSP.
15. Run migration rehearsal from clean database.

### Exit gate

- All CI gates pass.
- No critical/high known vulnerability remains without recorded exception.
- Accessibility blockers are resolved.
- Performance budgets pass.
- Backup restore is proven.
- Security checklist is signed in repository docs.

---

## Phase 10 — Deployment and observability

### Goals

- Deploy repeatably without coupling architecture to one provider.

### Tasks

1. Create production Dockerfile for API.
2. Create production build configuration for Web.
3. Provision managed PostgreSQL.
4. Provision object storage.
5. Configure domain and TLS.
6. Configure environment secrets.
7. Configure database migration release step.
8. Configure health/readiness probes.
9. Configure structured log collection.
10. Configure error monitoring.
11. Configure uptime monitoring.
12. Configure backups and retention.
13. Create staging environment.
14. Run staging E2E tests.
15. Document rollback process.

### Exit gate

- Staging deployment is reproducible.
- Production secrets are not in repository.
- Migrations run safely.
- Health checks and monitoring work.
- Rollback has been tested or rehearsed.

---

## Phase 11 — Version 1 release

### Goals

- Seed real content and publish a stable first version.

### Tasks

1. Create initial topic hierarchy.
2. Create site navigation.
3. Publish at least 8–12 real articles.
4. Create a Start Here page.
5. Create About page.
6. Review metadata for all articles.
7. Review all images and alt text.
8. Run full E2E suite against staging.
9. Run release checklist.
10. Deploy production.
11. Tag release.
12. Record post-release issues and v2 backlog.

### Version 1 acceptance criteria

- Admin can manage the full content lifecycle.
- Public user can browse and search content.
- UI is consistent across all routes.
- Backend follows one module and error convention.
- Mobile experience is complete.
- SEO essentials work.
- Content can be backed up and exported.
- Deployment and rollback are documented.
- Critical flows are covered by automated tests.

---

# 20. Suggested first articles

1. React 18 vs React 19: important differences
2. Server Components and Client Components explained
3. How I structure a React feature
4. TanStack Table: reusable DataTable architecture
5. How to prevent text wrapping in table headers
6. Node.js project structure for maintainable APIs
7. NestJS Controller vs Service vs Repository
8. PostgreSQL full-text search basics
9. Prisma migrations: safe workflow
10. Git rebase explained with a real workflow
11. PowerShell profile errors and how to fix them
12. WSL vs a full Linux installation
13. How to use Codex CLI effectively
14. How to keep AI coding agents from losing project context
15. Playwright testing from Google Sheet test cases
16. Building a Chrome extension with WXT
17. Google OAuth in a Chrome MV3 extension
18. Common mistakes when using AI-generated code

---

# 21. Codex operating rules

Codex must follow these rules for the entire project:

1. Read `AGENTS.md`.
2. Read `docs/EXECUTION_STATE.md`.
3. Read the active phase file.
4. Inspect the repository before proposing edits.
5. Work on one task at a time.
6. Do not silently expand task scope.
7. Use official documentation when a dependency or API is uncertain.
8. Record architectural decisions in `docs/DECISIONS.md`.
9. Record blockers in `docs/RISKS.md`.
10. Update `docs/SESSION_LOG.md` after every completed task.
11. Update `docs/TEST_MATRIX.md` when tests are added.
12. Keep the exact next action in `docs/EXECUTION_STATE.md`.
13. Run required validation commands before marking a task complete.
14. Do not push, publish, create cloud resources, or expose secrets.
15. Do not modify unrelated files.
16. Do not create a local duplicate of an existing shared UI component.
17. Do not bypass API contracts with ad-hoc frontend types.
18. Do not access Prisma outside the approved backend data layer.
19. Do not merge phases with failing gates.
20. Create focused conventional commits only after task gates pass.

---

# 22. Master prompt for Codex

Copy the following prompt into Codex after creating the repository and adding this plan:

```text
You are implementing a production-quality personal technical knowledge hub.

The repository is a pnpm + Turborepo monorepo with:
- apps/web: Next.js App Router
- apps/api: NestJS REST API
- packages/ui: shared design system
- packages/api-client: OpenAPI-generated client
- packages/database: Prisma/PostgreSQL
- packages/markdown: safe technical Markdown renderer
- packages/shared: framework-neutral constants and helpers

Before changing code:
1. Read AGENTS.md.
2. Read PLANS.md.
3. Read docs/EXECUTION_STATE.md.
4. Read docs/DECISIONS.md.
5. Read docs/RISKS.md.
6. Read docs/TEST_MATRIX.md.
7. Read the currently active file in codex-plan/.
8. Inspect the relevant existing implementation and tests.

Execution rules:
- Work on exactly one task from the active phase.
- Do not implement later-phase features.
- Preserve all documented UI and backend conventions.
- Use TypeScript strict mode.
- Reuse packages/ui components.
- Do not introduce raw colors, duplicate primitives, or page-specific design systems.
- Keep public pages server-first and do not ship Admin editor code publicly.
- Treat Markdown from the database as untrusted.
- Do not execute arbitrary MDX/JSX from article content.
- Controllers contain no business logic.
- Controllers and services do not access Prisma directly unless the approved architecture document explicitly permits it.
- All request inputs require DTO validation.
- All API changes must update OpenAPI and the generated API client.
- All write operations require server-side authorization.
- Add or update tests with every behavior change.
- Use official docs for current framework behavior.
- Do not push, deploy, create accounts, or reveal secrets.
- Stop and document blockers instead of inventing unsafe workarounds.

For the selected task:
1. Restate the goal.
2. List files expected to change.
3. Identify risks.
4. Implement the smallest complete change.
5. Add tests.
6. Run the task validation commands.
7. Update docs/SESSION_LOG.md.
8. Update docs/TEST_MATRIX.md.
9. Update docs/EXECUTION_STATE.md with:
   - completed task
   - validation results
   - exact next task
10. Create one focused conventional commit only when all gates pass.

At the end, report:
- What changed
- Files changed
- Tests added
- Commands run and results
- Known limitations
- Exact next action
```

---

# 23. Prompt template for each task

```text
Implement task: <TASK-ID AND NAME>

Required reading:
- AGENTS.md
- docs/EXECUTION_STATE.md
- docs/DECISIONS.md
- active phase file

Scope:
<ONE SMALL, SPECIFIC TASK>

Acceptance criteria:
- <criterion 1>
- <criterion 2>
- <criterion 3>

Required tests:
- <test 1>
- <test 2>

Validation:
- pnpm format:check
- pnpm lint
- pnpm typecheck
- <targeted tests>
- <targeted build>

Restrictions:
- Do not touch unrelated features.
- Do not implement later tasks.
- Do not duplicate shared UI components.
- Do not change an established contract without an ADR.
- Do not push or deploy.
- Update repository memory files after completion.
```

---

# 24. Definition of Done

A task is complete only when:

- Acceptance criteria are satisfied.
- Tests cover the new behavior.
- Formatting passes.
- Lint passes.
- Type checking passes.
- Targeted tests pass.
- Relevant build passes.
- No secret is committed.
- Accessibility states are considered.
- Loading, error, empty, and success states are handled where applicable.
- API documentation is updated where applicable.
- Repository memory files are updated.
- The exact next action is recorded.
- The change is committed with a focused conventional commit.

A phase is complete only when:

- Every task is complete.
- Phase exit gate passes.
- Full required checks pass.
- Manual verification checklist passes.
- Risks and deferred work are recorded.
- Phase summary is committed.
