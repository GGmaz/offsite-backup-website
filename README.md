# Offsite Backup website

A bilingual, static Astro + TypeScript website for encrypted offsite backup of business data. Serbian Latin is the default; English is at `/en/`. Shared components and plain CSS keep the browser payload small. No backend or analytics is included. Contact inquiries use Formspree once its public endpoint is configured.

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
- `src/content/references.ts`: six client cards before contact, using short names only. Optional website links open in a new tab; missing logos use a text wordmark. Supplied logos are in `public/images/reference-*`. AB & CO links to `https://abco.co.rs/`, supplied by the site owner.
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

## Contact form email delivery (Formspree)

The integration uses `https://formspree.io/f/mbggwlnl` for the business inbox. Microsoft 365 quarantined previous notifications as phishing; they were manually released. An administrator allow submission has been prepared in Microsoft Defender; fresh inbox delivery needs confirmation after it is submitted and takes effect. The recipient is configured in Formspree, **not** by the website's displayed business email. Set the dashboard notification recipient to `info@ebackup.pro` and verify the address when prompted. No mailbox password, SMTP credentials, paid plan or private API key is needed for basic notifications (subject to Formspree's current free submission quota).

### Activate

1. Register at <https://formspree.io/register>, choose the free plan and create a form named `eBackup inquiries`.
2. Set up email notifications to `info@ebackup.pro`; complete any account/address verification.
3. Copy the public Integration endpoint, such as `https://formspree.io/f/xxxxxxxx`, into `site.formspreeEndpoint` in `src/config/site.ts`. Alternatively set `PUBLIC_FORMSPREE_ENDPOINT` at build time; it overrides the file value. The URL is public and is included in generated HTML. Only Formspree `/f/` endpoints are accepted; an invalid value fails the build.
4. In the form's **Settings → Spam protection**, turn **reCAPTCHA off** for this implementation, which sends AJAX requests without a CAPTCHA token. Use Formspree's basic spam filtering and restrict the form to `ebackup.pro` in its domain settings. Use a separate test form or temporarily permit the local origin for real local delivery checks. A custom CAPTCHA widget/token integration can be added later if needed. Do not enable a CAPTCHA requirement without adding its client integration.
5. Run `npm run check` and `npm run build`. Publish the generated files with explicit Git authorization (`$push`).
6. Submit a clearly labeled test inquiry from **each published language**. Confirm the full name, company, email, phone, package, message and language arrive at `info@ebackup.pro`; check Spam too. Click Reply and verify it addresses the test client email. The input named `email` supplies Formspree's Reply-To. Confirm the inquiry appears in the Formspree dashboard. Website acceptance confirms Formspree received the request, not inbox delivery.

With no endpoint the input group has no form owner, the button does not submit, and the existing unavailable notice and direct email link remain visible, including without JavaScript. Once configured, it becomes a native POST form. JavaScript adds localized sending/success/error status, native required/email validation, field length limits, a 20-second request timeout and protection against simultaneous submissions. Success clears the form only after Formspree returns an explicit `ok: true` response. Rejections and network errors preserve the fields. An ambiguous network/timeout result asks the visitor to contact support before resending; there are no automatic retries. Without JavaScript the native POST navigates to Formspree's response page.

Client details are sent only on submission, with no field logging or browser storage. A short Serbian/English notice explains the purpose and Formspree processing and links its privacy policy. Review the site's broader privacy information against your actual business identity and retention practices before launch. Automatic emails to the client are not configured.

References: [HTML forms](https://help.formspree.io/articles/building-your-form/building-an-html-form), [Reply-To](https://help.formspree.io/articles/building-your-form/email-reply-to-address/), [CAPTCHA settings](https://help.formspree.io/articles/form-and-project-settings/recaptcha-settings), [domain restriction](https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain).

### Test the integration without sending email

The contact browser tests intercept all Formspree requests and simulate acceptance, rejection, network failures and timeouts. Build with a fixture endpoint to exercise the active form, then rebuild with your actual configuration before publishing:

```sh
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/testfixture npm run build
PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 CHROME_PATH=/usr/bin/google-chrome npm test
npm run build
```

Use a free test port to avoid reusing an unrelated preview. Contact delivery tests explicitly skip when the build has no configured endpoint; the remaining tests verify the inactive fallback. Never publish the fixture build. A mocked test does not establish email delivery; complete step 6 with the real endpoint after publication.

## GitHub Pages deployment

Configured production URLs:

- Serbian: `https://ebackup.pro/`
- English: `https://ebackup.pro/en/`

The repository owner manages GitHub Pages publishing from `main` in GitHub settings. The project contains no custom deployment workflow or publication gate.

`npm run build` compiles Astro into `dist/`, then copies the generated pages and assets to the repository root for **main / (root)** branch publishing. The root `.nojekyll` file disables Jekyll processing so Astro source frontmatter is not treated as YAML. Generated root files are committed alongside source; `dist/` remains ignored.

After editing content, run `npm run check` and `npm run build` to refresh the published files. Commit and push only with explicit permission, such as `$push`. Edit `src/` and `public/`, not generated root HTML/assets. `scripts/prepare-pages.mjs` records generated files in `.pages-files.json` and removes only obsolete files listed there. The `$push` shortcut runs only the three Git commands; rebuilding is a separate step.

The configured custom domain is `ebackup.pro`: `site.origin` is `https://ebackup.pro`, `site.base` is `/`, and `public/CNAME` is copied into the root export. If the domain or deployment path changes, update these together and rebuild. These files describe the intended deployment; they do not verify live DNS or GitHub Pages settings. After pushing, check both locale routes, direct refresh, fonts and package CTAs. Roll back with a revert and rebuild before pushing.

## Launch dependencies

Contact phone/email and the brand logo are configured. The inquiry form has an endpoint configured but requires verification of Formspree settings and real inbox delivery, legal identity is not configured, and the FAQ still contains pre-launch wording about key custody and recovery. Confirm remaining operational and commercial details before launch:

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
