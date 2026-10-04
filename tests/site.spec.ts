import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const base = '/offsite-backup-website/';
for (const locale of ['', 'en/']) {
  test(`${locale || 'sr'} locale, pricing selection and inactive inquiry`, async ({ page }) => {
    await page.goto(base + locale);
    await expect(page.locator('html')).toHaveAttribute('lang', locale ? 'en' : 'sr-Latn');
    await page.reload();
    for (const pkg of ['Basic', 'Standard', 'Premium', 'consultation']) {
      await page.locator(`a[data-package="${pkg}"]`).click();
      await expect(page.locator('#package')).toHaveValue(pkg);
      await expect(page).toHaveURL(new RegExp(`${locale}#contact$`));
    }
    await page.locator('#package').selectOption('Basic');
    await expect(page.locator('#package')).toHaveValue('Basic');
    for (const [id, value] of [['full-name', 'Test Person'], ['company', 'Test Center'], ['email', 'test@example.com'], ['phone', '+381123456']]) await page.locator(`#${id}`).fill(value);
    const requests: string[] = [];
    page.on('request', req => requests.push(req.url()));
    const url = page.url();
    await page.locator('.inquiry-fields button').click();
    for (const id of ['full-name', 'company', 'email', 'phone']) await page.locator(`#${id}`).press('Enter');
    await expect(page).toHaveURL(url);
    expect(requests).toEqual([]);
    expect(await page.evaluate(() => localStorage.length)).toBe(0);
    const summary = page.locator('summary').first();
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('details').first()).toHaveAttribute('open', '');
    const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
    expect(results.violations).toEqual([]);
  });
}
test('language links, mobile navigation and responsive widths', async ({ page }) => {
  await page.goto(base);
  const menu = page.locator('.menu-toggle');
  if (await menu.isVisible()) {
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await menu.click();
    await page.locator('#main-nav a[href="#technical"]').click();
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await menu.click();
  }
  await page.locator('.languages a[lang="en"]').click();
  await expect(page).toHaveURL(base + 'en/');
  if (await menu.isVisible()) await menu.click();
  await page.locator('.languages a[lang="sr-Latn"]').click();
  await expect(page).toHaveURL(base);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  for (const locale of ['', 'en/']) {
    await page.goto(base + locale);
    for (const width of [320, 375, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: `test-results/layout-${locale ? 'en' : 'sr'}-${test.info().project.name}-${width}.png`, fullPage: true });
    }
    // 1280px display at 200% browser zoom exposes a 640px CSS viewport.
    await page.setViewportSize({ width: 640, height: 450 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/zoom-${locale ? 'en' : 'sr'}-${test.info().project.name}.png`, fullPage: true });
  }
});
test('assets and SEO use the deployment base', async ({ page, request }) => {
  const errors: string[] = [];
  page.on('response', response => { if (response.status() >= 400) errors.push(response.url()); });
  for (const locale of ['', 'en/']) {
    await page.goto(base + locale);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://ggmaz.github.io${base}${locale}`);
    await expect(page.locator('h1')).toHaveCount(1);
    const urls = await page.locator('link[rel="alternate"]').evaluateAll(links => links.map(link => link.getAttribute('href')));
    expect(urls).toEqual([`https://ggmaz.github.io${base}`, `https://ggmaz.github.io${base}en/`, `https://ggmaz.github.io${base}`]);
  }
  expect(errors).toEqual([]);
  const sitemap = await request.get(base + 'sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain(`https://ggmaz.github.io${base}en/`);
  expect(await (await request.get(base + 'robots.txt')).text()).toContain(`https://ggmaz.github.io${base}sitemap.xml`);
});
test('without JavaScript navigation and inert fields still work', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321' + base);
  await page.locator('#main-nav a[href="#pricing"]').click();
  await page.locator('a[data-package="Basic"]').click();
  const url = page.url();
  await page.locator('#full-name').fill('Private test');
  await page.locator('#full-name').press('Enter');
  await page.locator('.inquiry-fields button').click();
  await expect(page).toHaveURL(url);
  await context.close();
});
