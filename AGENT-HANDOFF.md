# Offsite Backup website — implementation handoff

> Update 2026-10-04: The owner now manages Pages publishing from `main` in GitHub settings and requested removal of the project's deployment configuration. The custom Actions workflow and `PAGES_LAUNCH_APPROVED` gate have been removed. Do not recreate them from the original plan below. Keep Astro's origin/base settings for correct URLs. Branch publishing needs generated HTML; `dist/` remains ignored. See the current README for build and publishing details.

## Start here

The user requested this handoff so a new agent in a new session can start coding the website. Implement the plan below; do not restart planning or ask the user to repeat decisions already recorded here. Read any applicable repository instructions first.

This handoff authorizes local website implementation and verification. It does not request pushing commits or publishing immediately. Prepare the deployment workflow, and report launch dependencies before publication. Do not send test emails or other external messages without explicit authorization.

The previous session performed research and planning only. No website code has been implemented. The user explicitly deferred email delivery: build the form, but make its send button do nothing.

## Repository and constraints

- Repository: `https://github.com/GGmaz/offsite-backup-website.git`.
- Working directory: `/home/nikola/Desktop/tata/offsite-backups/offsite-backup-website`.
- Current branch at handoff: `main`.
- Initial repository content: a minimal `README.md` and an untracked `CODEX-QUICKSTART.md`. Preserve existing user files and changes; check status before editing.
- No application, package manifest, or deployment workflow existed during planning.
- Host target: **GitHub Pages**, using this repository and GitHub Actions.
- Primarily static text content: no database, application backend, authentication, checkout, CMS, or backup-service integration.
- Priorities: professional B2B design, clarity, responsiveness, accessibility, SEO, fast loading, and simple maintenance.
- Do not use Sites hosting or introduce another hosting platform automatically.

## Confirmed user decisions

1. Build both **Serbian Latin and English** versions.
2. Serbian is the default at the site root; English lives at `/en/` relative to the deployment base path.
3. Preserve the supplied packages, but qualify contradictory compliance and retention claims.
4. Build a frontend inquiry form. **Clicking Send Inquiry must do nothing in this version.** The user will decide email delivery later; do not integrate Formspree, EmailJS, mailto submission, or any other delivery provider.
5. Package and consultation CTAs can select the appropriate form option and scroll to contact.

## Technology and structure

Use **Astro + TypeScript + plain CSS**, generating static HTML. Use npm, a committed lockfile, and a pinned supported Node LTS version compatible with the chosen stable Astro version. No React or other browser framework is needed.

Suggested structure:

```text
src/
  components/
    Header.astro
    Hero.astro
    ServiceOverview.astro
    Benefits.astro
    TechnicalSpecs.astro
    ArchitectureDiagram.astro
    Pricing.astro
    FAQ.astro
    Contact.astro
    Footer.astro
  layouts/
    SiteLayout.astro
  pages/
    index.astro
    en/index.astro
  content/
    sr.ts
    en.ts
    packages.ts
  config/
    site.ts
  styles/
    global.css
public/
  fonts/
  favicon.svg
  social-preview.png
.github/
  workflows/
    deploy.yml
astro.config.mjs
package.json
README.md
```

Share components between languages. Use typed translation content and store package prices and numerical limits once to prevent divergence. Centralize business information and deployment configuration. Keep browser JavaScript limited to mobile navigation, package selection, and preventing unintended form submission.

## Design direction

Communicate security, reliability, compliance support, and simplicity. Avoid a generic hosting template, excessive effects, invented certifications, customer logos, testimonials, or uptime claims.

- Primary navy: `#0A192F`.
- Main off-white background: `#F8FAFC`.
- Emerald accent: `#10B981`; use a darker shade where necessary for accessible white button text.
- Self-host Inter in WOFF2 with Serbian Latin coverage and `font-display: swap`; include system fallbacks.
- Restrained borders, moderate corner radii, subtle shadows, consistent spacing, and generous whitespace.
- Use small inline SVG icons instead of emoji or a large icon dependency.
- Use a CSS/SVG architecture illustration rather than stock photos or generated artwork.
- Define colors, spacing, widths, and typography as CSS custom properties; use component-scoped styles for specifics.
- Main content width approximately 1,200px. Use fluid spacing and headings with `clamp()`.
- Mobile-first breakpoints around 48rem and 64rem, adjusted if actual translated content needs it.
- Short hover/focus transitions only. Never hide essential content pending an animation. Respect reduced motion, including disabling smooth scrolling.

## Page sections and behavior

Use stable section IDs across languages: `about`, `benefits`, `technical`, `pricing`, `faq`, and `contact`. Offset anchor targets for the sticky header.

### Header

- Text wordmark until the real brand is supplied.
- Links: About the Service, Technical Specifications, Pricing, FAQ.
- Primary CTA: Request a Quote → contact.
- Explicit language switch between equivalent pages; no automatic language redirects.
- Desktop: full horizontal navigation.
- Mobile: accessible toggle with `aria-expanded` and `aria-controls`; expanded links stay in document flow. Close on selection or Escape. Provide usable navigation without JavaScript.

### Hero

English source heading: **Secure Offsite Backup of Video Recordings for Technical Inspections**.

Adapt the original subtitle to describe client-side encryption, rented remote storage, and retention options without claiming universal legal compliance or zero resource usage. Suggested direction: remote encrypted backup designed to support recording retention requirements, with scheduled incremental transfers and packages offering up to 365+ days of retention.

Three highlights:

- Client-side encryption with Restic.
- 365-day retention available with Standard; extended retention with Premium, subject to approved terms.
- Encrypted transfer through WireGuard VPN.

CTAs:

- View Packages & Pricing → pricing.
- Schedule a Consultation → contact, selecting Consultation Required.

Desktop: strong navy hero with a clear text hierarchy and ample space. Mobile: stack text, highlights, and CTAs; avoid fixed heights that clip long Serbian headings.

### About the service

Explain who the service serves, what remote backup protects, and the basic process: configure backups, encrypt and transfer, retain and recover. Keep it concise and use business language. Desktop can show a short three-step sequence; mobile stacks it.

### Benefits

Four cards, two by two on desktop, one column on phones:

1. **Retention support:** automated retention according to the selected package; distinguish Basic's 180 days from Standard's 365 days.
2. **Data privacy:** encryption on the client before upload; explain that recovery needs the customer's encryption key. Zero-knowledge wording depends on confirmed key custody practices.
3. **Scheduled incremental transfers:** scheduling and bandwidth limits reduce disruption; do not claim backups consume no bandwidth or hardware resources.
4. **Disaster recovery:** remote copies help protect against DVR/disk failure, hardware damage, and theft; recovery depends on successful backups and key availability.

No hover-only content.

### Technical specifications

Desktop: two columns, diagram left and explanation right. Mobile: vertical diagram above the text.

Diagram: **Inspection center → client-side encryption → WireGuard tunnel → remote encrypted storage**. Include an equivalent readable text description.

Explain:

- Restic: AES-256 encryption with Poly1305-AES authentication.
- WireGuard: dedicated VPN transfer between customer location and remote server.
- Indicative data volume: approximately 10 GB per inspection line/day, subject to actual recording settings and package limits.
- Automatic retention and storage reclamation in plain language.
- Premium self-service browsing/download capability, with the exact product identity pending confirmation.

The original proposal mentioned `restic forget --keep-daily 365 --prune`. Do not expose this as a customer instruction or imply it guarantees complete year-long recording coverage. It retains available daily snapshots according to grouping and policy; it cannot recover missed backups. No backup commands are implemented by this website.

### Pricing

Three aligned cards on desktop; stack Basic, Standard, Premium on mobile. Each card must show every feature below with clear labels. Avoid a horizontally scrolling table on phones. Emphasize Standard using a visible Recommended label and stronger border, not color alone.

| Feature | Basic | Standard — Recommended | Premium |
| --- | --- | --- | --- |
| Monthly price | €85/month | €140/month | €220/month |
| Storage | Up to 2.5 TB | Up to 5.0 TB — rolling | Up to 10.0 TB |
| Daily growth | Up to 5 GB/day | Up to 10 GB/day | Up to 25 GB/day |
| Retention | 180 days / 6 months | 365 days / 1 year | 365+ days |
| Rotation | Rolling FIFO | Automatic daily rolling retention | Rolling + archive |
| Self-service GUI | No; CLI only | No; CLI only | Included |
| Physical disk disaster recovery | €100/incident | €100/incident | Once per year included; €100 thereafter |
| One-time setup | €50 | €50 | €50 |

Buttons: Choose Basic, Choose Standard, Choose Premium. Use anchor links to contact enhanced with small JavaScript that sets the package dropdown. Keep the selection editable. Without JavaScript, links still reach contact.

Explicitly state Basic does not provide 365-day retention. Do not invent VAT treatment or commercial terms.

### FAQ

Use native `details`/`summary`, permit multiple expanded answers, and keep the reading width comfortable.

Required questions and answer substance:

1. **What happens if I lose my encryption password?** Recovery requires the encryption key/password. Under the proposed customer-controlled key model, the provider cannot decrypt recordings without it; confirm the actual operational model before launch.
2. **What if an inspector requests a recording from eight months ago?** Standard and Premium target retention covering that period once the archive has accumulated, provided the recording was successfully backed up and retained. Basic's 180-day window does not cover eight months. Do not promise a recording exists for every day regardless of failures.
3. **Will backup transfers slow down my connection during inspections?** Transfers can be scheduled outside working periods and bandwidth-limited to reduce disruption; they still use resources.

### Contact and footer

Desktop: business details alongside the form. Mobile: business details first, then a single-column form.

Business details: address, support phone, email, working hours. Use real `tel:` and `mailto:` links only when genuine values are available. Keep missing values visibly marked in development rather than inventing a company identity.

Form fields:

- Full name, required.
- Company / technical inspection center, required.
- Email address, required, `type="email"`.
- Phone number, required, `type="tel"`.
- Package select: Basic, Standard, Premium, Consultation Required; default Consultation Required.
- Message / additional questions, optional textarea.

**Deferred submission behavior:**

- Send Inquiry is `type="button"` with no click handler.
- Prevent implicit form submission through Enter.
- No network request, mail application, validation success flow, or fake success message on click.
- Add a localized notice: “Online inquiries are not available yet. Please contact us by email or phone.”
- Do not persist field values to local storage or send them to logging/analytics.
- Use visible labels, required indicators, appropriate autocomplete, and focus styles.

Footer: company name, copyright, contact links, language links, and back-to-top. No invented legal policy text. Form delivery and any related privacy notice are deferred to a later task.

## SEO, accessibility, and performance

### SEO and bilingual routes

- Render all copy as HTML during the static build.
- Correct document languages: `sr-Latn` and `en`.
- Localized titles, descriptions, social metadata, and one H1 per page.
- Self-referencing canonical URLs and reciprocal `hreflang`; Serbian is `x-default`.
- Generate a sitemap and robots file using the actual deployment origin and base path.
- Add Organization and Service structured data only with confirmed details; omit unsupported facts.
- Include a lightweight favicon and branded social preview; do not delay the rest of implementation for absent branding.
- No analytics, tracking scripts, or cookie banner in v1.

### Accessibility

Target WCAG 2.2 AA: semantic landmarks, skip link, logical headings, visible keyboard focus, sufficient contrast, labeled controls, decorative SVGs hidden from assistive technology, textual recommendation/required states, usable touch targets around 44px, reduced-motion support, and layouts usable at 200% zoom and about 320px width.

### Performance

- No client framework or animation library.
- Small self-hosted fonts with only needed weights/characters, including Serbian Latin diacritics.
- Inline SVG graphics and explicit dimensions for images.
- Aim for an initial compressed page transfer below approximately 250 KB.
- Target Lighthouse scores of at least 95 in performance, accessibility, best practices, and SEO under a documented test configuration. Treat measured results honestly rather than asserting guarantees.

## GitHub Pages deployment

Default URL: `https://ggmaz.github.io/offsite-backup-website/`.

Configure Astro `site` as `https://ggmaz.github.io` and `base` as `/offsite-backup-website`. All assets, language links, metadata URLs, and internal page links must respect the base. English will be at `https://ggmaz.github.io/offsite-backup-website/en/`.

Create a GitHub Actions workflow that:

1. Installs with `npm ci` using the pinned Node version.
2. Runs checks and builds on pull requests without deployment permissions.
3. Builds and deploys main-branch pushes, with manual dispatch supported.
4. Uses official Pages artifact and deployment actions, with appropriately scoped permissions and deployment concurrency.
5. Publishes generated static build output, not source files or a server process.

Document selecting GitHub Actions in repository Pages settings, enabling HTTPS, checking both language routes, and rollback by reverting a commit. A custom domain is deferred; it will require updating base and canonical configuration.

**Launch dependency — hosting eligibility:** GitHub Pages policy restricts sites primarily facilitating commercial transactions. This commercial landing page may fall within that restriction even without checkout. Retain the requested GitHub Pages build/workflow, but flag eligibility for confirmation before actual publication. Do not silently deploy to another provider. See the official policy below.

## Unresolved business content and launch dependencies

Continue local implementation with clearly identified placeholders and qualified copy. Do not block the entire build on missing business details, and do not publish invented facts.

- Brand name, logo, legal business identity, address, phone, email, working hours.
- Applicable country and exact regulation behind retention obligations; approval of compliance wording.
- Approval of Serbian and English copy/technical terminology.
- Whether prices include VAT; billing, contract, cancellation, and overage terms.
- Whether package limits apply per company, site, or inspection line.
- Exact Premium archive duration and meaning of Rolling + Archive.
- Physical recovery disk delivery area, shipping costs, and turnaround.
- Official URL and operational model of “Open Snapshot Browser”; identity was not verified in planning.
- Key custody/recovery practices supporting zero-knowledge claims, particularly for the Premium browser.
- Actual storage sizing and overhead: 10 GB/day × 365 ≈ 3.65 TB; 25 GB/day × 365 ≈ 9.13 TB. Premium has limited headroom at maximum intake before overhead and extended archiving. Do not assume video compression/deduplication will solve this.
- A daily recovery point is not automatically proof that every recording remains recoverable. Avoid unqualified availability guarantees.
- GitHub Pages eligibility for this commercial use.
- Future form provider, destination inbox, privacy requirements, and delivery verification are deliberately deferred. No email integration is part of this task.

## Verification and completion criteria

Run appropriate checks without overbuilding a test suite:

- Astro/TypeScript checks and production build pass.
- Both languages include all sections and consistent package values.
- Base-path assets, anchors, language links, canonical URLs, and sitemap are correct.
- All package and consultation CTAs select the correct option and reach contact.
- Mobile navigation and FAQ are keyboard- and touch-usable.
- Send Inquiry and Enter never submit data, navigate, or show false success.
- Check phone, tablet, and desktop layouts, long Serbian text, and horizontal overflow.
- Check keyboard focus, zoom, contrast, reduced motion, and automated accessibility results.
- Check production-build Lighthouse results when tooling is available.
- Use a small Playwright smoke suite for navigation, locale routes, package selection, and inactive submission. Do not write tests that simply mirror static markup.
- Verify direct loading and refresh of both locale URLs in the production preview; repeat on Pages only when deployment is authorized and eligible.
- Record unresolved content placeholders and launch dependencies in the final report.

Update README with setup, dev/check/build/preview commands, content and translation editing, deployment configuration, rollback, and the deferred contact integration. Finish with a concise summary of implementation, verification actually performed, and remaining launch prerequisites. Do not claim unrun tests passed.

## Reference sources checked during planning

- Astro on GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages limits and commercial-use policy: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Restic retention behavior: https://github.com/restic/restic/blob/master/doc/060_forget.rst
- Restic encryption design: https://restic.readthedocs.io/en/v0.17.3/design.html

Recheck version-specific documentation as needed when choosing dependencies. No requirement to adopt a form provider follows from earlier research; the user's later instruction to leave submission inactive takes precedence.
