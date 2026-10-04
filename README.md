# Offsite Backup website

A bilingual, static Astro + TypeScript website for remote video backup at technical inspection centers. Serbian Latin is the default; English is at `/en/`. Shared components and plain CSS keep the browser payload small. No backend, analytics, email delivery or service integration is included.

## Local development

Use the exact Node LTS version in `.nvmrc` (22.20.0), with npm 10 or newer:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open `http://localhost:4321/offsite-backup-website/`, or append `en/` for English.

```sh
npm run check       # Astro and TypeScript diagnostics
npm run build       # Static output in dist/ and the tracked Pages files at root
npm run preview     # Preview the production build
npx playwright install chromium
npm test            # Production browser smoke tests and axe accessibility checks
npm run test:pages   # Root export and safe stale-file cleanup checks
npm run audit       # Lighthouse; start the production preview first
```

Astro 7 may start a background preview when run by an agent. `npm run preview -- stop` stops it. Use `npm run preview -- --ignore-lock --host 127.0.0.1` for a foreground instance. Tests manage their own preview unless one is already available. Set `CHROME_PATH=/path/to/chrome` for an existing Chrome installation; otherwise Playwright uses its installed Chromium. Set `ASTRO_TELEMETRY_DISABLED=1` to disable Astro tooling telemetry, as CI does.

Set `PLAYWRIGHT_BASE_URL` to test an already-running static server with the same site base path.

Lighthouse writes local HTML/JSON reports to `reports/`; Playwright screenshots go to `test-results/`. Both directories are ignored by Git. `npm audit` is the dependency security audit; `npm run audit` measures page quality.

## Codex push shortcut

Invoke `$push` in Codex to stage all repository changes, create a short descriptive commit, and push the current branch. The repo-scoped skill lives in `.agents/skills/push/SKILL.md` and travels with the repository.

## Content and configuration

- `src/content/sr.ts` and `en.ts`: translations checked against a common TypeScript interface.
- `src/content/packages.ts`: shared prices, storage, daily growth, retention, setup and physical recovery prices.
- `src/config/site.ts`: site origin, deployment base, wordmark and genuine business contact details. Empty business fields render visible launch placeholders. Add real values here to enable phone/email links in the contact area and footer.
- `src/components/`: shared page sections and small browser interactions.
- `src/styles/global.css`: design tokens, base typography and accessible controls. Section styling is scoped to each component.
- `public/fonts/`: self-hosted Inter variable WOFF2 Latin and Latin Extended subsets, with the OFL license. Serbian č, ć, š, ž and đ are covered. Font URLs use the configured deployment base.
- `public/social-preview-sr.png`, `social-preview-en.png` and `favicon.svg`: local brand assets.

All language links, fonts, metadata and public assets follow `site.base`. The layout supplies canonical, reciprocal `hreflang`, social metadata and correct document language. Static sitemap and robots endpoints use the same configuration. Organization/Service structured data is deliberately deferred until the legal identity and business facts are confirmed.

Package and consultation links select an editable inquiry option and scroll to contact. Without JavaScript they remain ordinary anchors. Mobile navigation stays in document flow; with JavaScript its button supports Escape and closes after link selection. FAQ uses native disclosure controls.

## Inquiry delivery is deferred

The Send inquiry button is `type="button"` and has no click handler. The input group is a labeled `fieldset` with no form owner, so Enter cannot submit even when JavaScript is disabled. An additional key handler prevents Enter in single-line fields. There is no endpoint, field logging, local storage, mailto submission, validation success flow or fake confirmation. Visible labels and notices explain that online inquiries are not available yet.

Delivery integration, destination inbox, related privacy text and actual sending tests require a separate authorized task. Contact details are currently missing, and must be supplied before launch.

## GitHub Pages deployment

Configured production URLs:

- Serbian: `https://ggmaz.github.io/offsite-backup-website/`
- English: `https://ggmaz.github.io/offsite-backup-website/en/`

The repository owner manages GitHub Pages publishing from `main` in GitHub settings. The project contains no custom deployment workflow or publication gate.

`npm run build` compiles Astro into `dist/`, then copies the generated pages and assets to the repository root for **main / (root)** branch publishing. The root `.nojekyll` file disables Jekyll processing so Astro source frontmatter is not treated as YAML. Generated root files are committed alongside source; `dist/` remains ignored.

After editing content, run `npm run check` and `npm run build`, then commit and push all changes. Edit `src/` and `public/`, not generated root HTML/assets. `scripts/prepare-pages.mjs` records generated files in `.pages-files.json` and removes only obsolete files listed there. The `$push` shortcut rebuilds before staging so published files stay current.

The Astro origin and base path are retained for correct asset links, locale routes and canonical URLs. A custom domain would require updating `site.origin` and `site.base`. After pushing, check both locale routes, direct refresh, fonts and package CTAs. Roll back with a revert and rebuild before pushing.

## Launch dependencies

The website visibly marks missing business details and qualifies retention/compliance statements. Confirm before launch:

- Brand, logo, legal identity, address, support phone/email and working hours.
- Country, applicable recording regulation and approval of Serbian/English commercial and technical copy. Basic retains 180 days, so it cannot meet a 365-day requirement.
- VAT treatment, billing, contract, cancellation, overages and whether limits apply per company, site or inspection line.
- Premium archive duration and rolling/archive meaning. At maximum intake, 25 GB/day × 365 is about 9.13 TB before overhead, leaving limited extended-archive headroom within 10 TB. Do not assume video deduplication resolves capacity limits.
- Key custody and recovery practices, especially the Premium browser. The product identity/URL and operational model of the proposed “Open Snapshot Browser” remain unverified; the site avoids naming it.
- Physical disk recovery delivery area, shipping costs and turnaround.
- GitHub Pages commercial hosting eligibility, and future inquiry delivery/privacy requirements.

### Dependency audit limitation

At implementation verification on 2026-10-03, `npm audit` reported one high-severity upstream issue in `http-cache-semantics@4.2.0` (also attributed to direct dependent Astro): [GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp), concerning cross-user HTTP cache responses. npm’s latest release remained 4.2.0 and no patched version was available. Its suggested forced fix downgrades Astro to 2.10.9, which is inappropriate for this project. The deployed output is static files with no Astro server, authentication or cross-user response cache. Recheck the advisory and upgrade the dependency when a supported fix becomes available; do not expose the development/preview server publicly.

Measured verification is recorded in [VERIFICATION.md](VERIFICATION.md).
