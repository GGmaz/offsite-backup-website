# Offsite Backup website

A bilingual, static Astro + TypeScript website for encrypted offsite backup of business data. Serbian Latin is the default; English is at `/en/`. Shared components and plain CSS keep the browser payload small. No backend, analytics, email delivery or service integration is included.

## Local development

Use the exact Node LTS version in `.nvmrc` (22.20.0), with npm 10 or newer:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open `http://localhost:4321/`, or `http://localhost:4321/en/` for English. The configured base path is `/`.

```sh
npm run check       # Astro and TypeScript diagnostics
npm run build       # Static output in dist/ and the tracked Pages files at root
npm run preview     # Preview the production build
npx playwright install chromium
npm test            # Production browser smoke tests and axe accessibility checks
npm run test:pages   # Root export and safe stale-file cleanup checks
npm run audit       # Lighthouse; start the production preview first
```

Astro 7 may start development and preview servers in the background when run by an agent. Use `npm run dev -- status` to inspect the development server and `npm run dev -- stop` to stop it. `npm run preview -- stop` stops the preview server. Use `npm run preview -- --ignore-lock --host 127.0.0.1` for a foreground instance. Tests manage their own preview unless one is already available. Set `CHROME_PATH=/path/to/chrome` for an existing Chrome installation; otherwise Playwright uses its installed Chromium. Set `ASTRO_TELEMETRY_DISABLED=1` to disable Astro tooling telemetry.

Set `PLAYWRIGHT_BASE_URL` to use another test server URL, for example `http://127.0.0.1:4322` when development already uses port 4321. Tests reuse an existing server at that URL; otherwise they start a production preview there. For production verification, use a free port or an already-running production/static server. The Lighthouse script currently targets port 4321.

Lighthouse writes local HTML/JSON reports to `reports/`; Playwright screenshots go to `test-results/`. Both directories are ignored by Git. `npm audit` is the dependency security audit; `npm run audit` measures page quality.

## Codex push shortcut

Send `$push` to Codex to authorize `git add .`, `git commit -m "<generated short message>"`, then `git push`. The repository instructions in `AGENTS.md` map this text command to `.agents/skills/push/SKILL.md`. The skill is explicit-only. Coding requests and earlier push requests do not authorize staging, committing or pushing later changes.

## Content and configuration

- `src/content/sr.ts` and `en.ts`: current Serbian/English copy, checked against a common TypeScript interface.
- `src/content/packages.ts`: shared monthly prices, storage limits, setup and physical recovery prices, plus graphical-access and recommended-package flags. Retention wording and other translated package text live in the locale content files.
- `src/config/site.ts`: site origin, deployment base, brand name and business contact details. Support phone is `+381604740388`; email is `info@ebackup.pro`. Both appear as clickable links in the contact section and footer. Empty contact values are hidden; address and working hours are currently omitted. The empty legal name does not render a placeholder in the footer.
- `src/components/`: shared page sections and small browser interactions.
- `src/styles/global.css`: design tokens, base typography and accessible controls. Section styling is scoped to each component.
- `public/fonts/`: self-hosted Inter variable WOFF2 Latin and Latin Extended subsets, with the OFL license. Serbian č, ć, š, ž and đ are covered. Font URLs use the configured deployment base.
- `public/images/lan-ict-logo.png`: shared header/footer logo. The footer uses three columns on desktop (brand, contact, quick links), stacked on mobile, with language links in the bottom row.
- `public/social-preview-sr.png`, `social-preview-en.png` and `favicon.svg`: local brand assets.
- `public/CNAME`: custom domain for the generated GitHub Pages export (`ebackup.pro`).

All language links, fonts, metadata and public assets follow `site.base`. The layout supplies canonical, reciprocal `hreflang`, social metadata and correct document language. Static sitemap and robots endpoints use the same configuration. Organization/Service structured data is deliberately deferred until the legal identity and business facts are confirmed.

Package and consultation links select an editable inquiry option and scroll to contact. Without JavaScript they remain ordinary anchors. With JavaScript, mobile navigation opens in a modal drawer with keyboard focus handling, Escape and close controls; selecting a link closes it. The mobile header hides while scrolling down and returns while scrolling up. Without JavaScript, navigation stays in document flow. Technical specifications and pricing use accordions on mobile; without JavaScript their content remains visible. FAQ uses native disclosure controls.

Current package display:

| Package | Monthly price | Storage | Retention |
| --- | ---: | --- | --- |
| Basic | €85 | Up to 2.5 TB | Agreed number of days |
| Standard | €140 | Up to 5.0 TB | 365 days |
| Premium | €220 | From 5 to 15 TB | 365 + agreed number of days |

Setup is €50 for every package. Physical disk recovery costs €100 per case for Basic/Standard; Premium includes one case per year, then €100 per case. Only Premium includes graphical access. Keep these values aligned with the shared package configuration and both translations.

## Inquiry delivery is deferred

The Send inquiry button is `type="button"` and has no click handler. The input group is a labeled `fieldset` with no form owner, so Enter cannot submit even when JavaScript is disabled. An additional key handler prevents Enter in single-line fields. There is no endpoint, field logging, local storage, mailto submission, validation success flow or fake confirmation. Visible labels and notices explain that online inquiries are not available yet.

Delivery integration, destination inbox configuration, related privacy text and actual sending tests require a separate authorized task. The published contact links already point to the support phone and `info@ebackup.pro`; adding them does not enable online inquiry delivery.

## GitHub Pages deployment

Configured production URLs:

- Serbian: `https://ebackup.pro/`
- English: `https://ebackup.pro/en/`

The repository owner manages GitHub Pages publishing from `main` in GitHub settings. The project contains no custom deployment workflow or publication gate.

`npm run build` compiles Astro into `dist/`, then copies the generated pages and assets to the repository root for **main / (root)** branch publishing. The root `.nojekyll` file disables Jekyll processing so Astro source frontmatter is not treated as YAML. Generated root files are committed alongside source; `dist/` remains ignored.

After editing content, run `npm run check` and `npm run build` to refresh the published files. Commit and push only with explicit permission, such as `$push`. Edit `src/` and `public/`, not generated root HTML/assets. `scripts/prepare-pages.mjs` records generated files in `.pages-files.json` and removes only obsolete files listed there. The `$push` shortcut runs only the three Git commands; rebuilding is a separate step.

The configured custom domain is `ebackup.pro`: `site.origin` is `https://ebackup.pro`, `site.base` is `/`, and `public/CNAME` is copied into the root export. If the domain or deployment path changes, update these together and rebuild. These files describe the intended deployment; they do not verify live DNS or GitHub Pages settings. After pushing, check both locale routes, direct refresh, fonts and package CTAs. Roll back with a revert and rebuild before pushing.

## Launch dependencies

Contact phone/email and the brand logo are configured. The inquiry form remains inactive, legal identity is not configured, and the FAQ still contains pre-launch wording about key custody and recovery. Confirm remaining operational and commercial details before launch:

- Legal identity and approval of Serbian/English commercial and technical copy. Address and working hours are intentionally not displayed.
- Applicable retention and compliance requirements for each customer. Basic has an agreed retention period; the previous fixed 180-day description is obsolete.
- VAT treatment, billing, contract, cancellation, overages and whether limits apply per company or site.
- Premium archive duration, the meaning of the 5–15 TB range and capacity planning for the customer's actual data volume. The previous 10 TB ceiling and fixed daily-intake assumptions are no longer the displayed package specification.
- Key custody and recovery practices, especially Premium graphical access. The site does not identify a specific browser product or integration.
- Physical disk recovery delivery area, shipping costs and turnaround.
- Hosting suitability for the intended use, and future inquiry delivery/privacy requirements.

### Historical verification and dependency audit

[VERIFICATION.md](VERIFICATION.md) records dated checks and measurements. Its test counts, exported-file counts and Lighthouse scores describe those runs, not a fresh verification of the current tree.

The dependency audit recorded on 2026-10-03 reported a high-severity issue in `http-cache-semantics@4.2.0` ([GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp)). That finding and the then-available remediation are historical; current advisory status has not been rechecked as part of this README update. Run `npm audit` to reassess the installed dependency tree before making upgrade decisions. The deployed build consists of static files and does not run an Astro server.
