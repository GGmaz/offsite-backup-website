import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const base = '/offsite-backup-website/';
for (const locale of ['', 'en/']) {
  test(`${locale || 'sr'} locale, pricing selection and inactive inquiry`, async ({ page }) => {
    await page.goto(base + locale);
    await expect(page.locator('html')).toHaveAttribute('lang', locale ? 'en' : 'sr-Latn');
    await page.reload();
    for (const pkg of ['Basic', 'Standard', 'Premium', 'consultation']) {
      const packageToggle = page.locator(`[aria-controls="pricing-panel-${pkg}"]`);
      if (await packageToggle.isVisible()) await packageToggle.click();
      await page.locator(`a[data-package="${pkg}"]:visible`).click();
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
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
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
  const context = await browser.newContext({ baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4321', javaScriptEnabled: false, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(base);
  await expect(page.locator('.technical-items')).toBeVisible();
  await expect(page.locator('#pricing-panel-Premium')).toBeVisible();
  await expect(page.locator('.diagram-home .architecture')).toBeVisible();
  await page.locator('#main-nav a[href="#pricing"]').click();
  await page.locator('a[data-package="Basic"]').click();
  const url = page.url();
  await page.locator('#full-name').fill('Private test');
  await page.locator('#full-name').press('Enter');
  await page.locator('.inquiry-fields button').click();
  await expect(page).toHaveURL(url);
  await context.close();
});

for (const locale of ['', 'en/']) {
  test(`${locale || 'sr'} mobile drawers and exclusive accordions`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(base + locale);
    const header = page.locator('.header');
    const menu = page.locator('.menu-toggle');
    const drawer = page.locator('.mobile-drawer');
    await expect(page.locator('.hero-image')).toBeHidden();
    await expect(page.locator('.trust-item')).toHaveCount(5);
    const positions = await page.locator('.trust-item').evaluateAll(items => items.map(item => item.getBoundingClientRect().top));
    expect(positions.every((top, i) => i === 0 || top > positions[i - 1])).toBe(true);
    await page.evaluate(() => window.scrollTo(0, 250));
    await expect(header).toHaveClass(/header-hidden/);
    await page.evaluate(() => window.scrollTo(0, 200));
    await expect(header).not.toHaveClass(/header-hidden/);
    await menu.click();
    await expect(drawer).toBeVisible();
    await expect(page.locator('html')).toHaveClass(/mobile-menu-open/);
    await expect(page.locator('.drawer-close')).toBeFocused();
    await page.screenshot({ path: `test-results/mobile-menu-${locale ? 'en' : 'sr'}-${test.info().project.name}.png` });
    const navLinks = drawer.locator('.nav-links a');
    const linkPositions = await navLinks.evaluateAll(links => links.map(link => link.getBoundingClientRect().top));
    expect(linkPositions.every((top, i) => i === 0 || top > linkPositions[i - 1])).toBe(true);
    await page.keyboard.press('Shift+Tab');
    await expect(drawer.locator('.header-actions > a')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(drawer).toBeHidden();
    await expect(menu).toBeFocused();
    await expect(page.locator('html')).not.toHaveClass(/mobile-menu-open/);
    await menu.click();
    await page.mouse.click(4, 400);
    await expect(drawer).toBeHidden();
    await menu.click();
    await navLinks.nth(1).click();
    await expect(drawer).toBeHidden();
    await expect(page).toHaveURL(/#technical$/);
    const technicalButtons = page.locator('.architecture [data-architecture-toggle]');
    await expect(page.locator('.diagram-home .architecture')).toBeVisible();
    await expect(page.locator('.technical-items')).toBeHidden();
    await expect(technicalButtons).toHaveCount(4);
    await expect(technicalButtons.first()).toHaveCSS('display', 'flex');
    const stepWidths = await technicalButtons.evaluateAll(buttons => buttons.map(button => button.getBoundingClientRect().width));
    expect(Math.max(...stepWidths) - Math.min(...stepWidths)).toBeLessThan(1);
    await expect(technicalButtons.first().locator('.expand-chevron')).toBeVisible();
    await page.locator('#technical').screenshot({ path: `test-results/mobile-technical-${locale ? 'en' : 'sr'}-${test.info().project.name}.png` });
    for (const button of await technicalButtons.all()) await expect(button).toHaveAttribute('aria-expanded', 'false');
    await technicalButtons.first().focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#technical-panel-0')).toBeVisible();
    await expect(page.locator('.architecture figcaption')).toBeVisible();
    await technicalButtons.nth(1).click();
    await expect(page.locator('#technical-panel-0')).toBeHidden();
    await expect(page.locator('#technical-panel-1')).toBeVisible();
    await expect(page.locator('#technical-panel-1 h3')).toHaveCount(1);
    await technicalButtons.nth(2).click();
    await expect(page.locator('#technical-panel-1')).toBeHidden();
    await expect(page.locator('#technical-panel-2')).toBeVisible();
    await technicalButtons.nth(3).click();
    await expect(page.locator('#technical-panel-2')).toBeHidden();
    await expect(page.locator('#technical-panel-3 h3')).toHaveCount(2);
    await technicalButtons.nth(3).click();
    await expect(page.locator('#technical-panel-3')).toBeHidden();
    await expect(technicalButtons.nth(3)).toHaveAttribute('aria-expanded', 'false');
    if (await page.evaluate(() => matchMedia('(hover: none)').matches)) {
      await expect(technicalButtons.nth(3)).toHaveCSS('background-color', 'rgb(255, 255, 255)');
      await expect(technicalButtons.nth(3)).toHaveCSS('border-top-color', 'rgb(220, 229, 240)');
    }
    const prices = page.locator('.pricing-grid [data-accordion-toggle]');
    await expect(prices.first().locator('.expand-chevron')).toBeVisible();
    for (const button of await prices.all()) await expect(button).toHaveAttribute('aria-expanded', 'false');
    await prices.first().click();
    await expect(page.locator('#pricing-panel-Basic')).toBeVisible();
    await prices.nth(1).click();
    await page.locator('#pricing').screenshot({ path: `test-results/mobile-pricing-${locale ? 'en' : 'sr'}-${test.info().project.name}.png` });
    await expect(page.locator('#pricing-panel-Basic')).toBeHidden();
    await expect(page.locator('#pricing-panel-Standard')).toBeVisible();
    const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
    expect(results.violations).toEqual([]);
    await page.screenshot({ path: `test-results/mobile-expanded-${locale ? 'en' : 'sr'}-${test.info().project.name}.png`, fullPage: true });
    await page.setViewportSize({ width: 768, height: 900 });
    await expect(page.locator('.hero-image')).toBeVisible();
    await expect(page.locator('.diagram-home .architecture')).toBeVisible();
    await expect(prices.first()).toBeHidden();
    await expect(technicalButtons.first()).toBeHidden();
    await expect(page.locator('.technical-items')).toBeVisible();
    for (const pkg of ['Basic', 'Standard', 'Premium']) await expect(page.locator(`#pricing-panel-${pkg}`)).toBeVisible();
    await page.setViewportSize({ width: 767, height: 900 });
    await expect(prices.first()).toBeVisible();
    await expect(page.locator('#pricing-panel-Standard')).toBeHidden();
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await menu.click();
    await page.setViewportSize({ width: 1024, height: 900 });
    await expect(drawer).toBeHidden();
    await expect(page.locator('html')).not.toHaveClass(/mobile-menu-open/);
    await expect(page.locator('.header-inner #main-nav')).toHaveCount(1);
  });
}
