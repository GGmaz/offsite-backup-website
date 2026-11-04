import { test, expect, type Page } from '@playwright/test';

async function fillInquiry(page: Page) {
  for (const [id, value] of Object.entries({
    'full-name': 'Željko Test', company: 'Test company', email: 'client@example.com',
    phone: '+381601234567', message: 'Need a backup for 2 TB. čćšžđ',
  })) await page.locator(`#${id}`).fill(value);
  await page.locator('#package').selectOption('Standard');
}

for (const locale of ['', 'en/']) {
  test(`${locale || 'sr'} contact submission, validation and duplicate protection`, async ({ page }) => {
    await page.goto('/' + locale);
    test.skip(await page.locator('form#inquiry-form').count() === 0, 'Build with PUBLIC_FORMSPREE_ENDPOINT to test delivery UI.');
    const requests: string[] = [];
    let release!: () => void;
    const pending = new Promise<void>(resolve => { release = resolve; });
    await page.route('https://formspree.io/f/**', async route => {
      expect(route.request().method()).toBe('POST');
      expect(route.request().headers().accept).toBe('application/json');
      requests.push(route.request().postData()!);
      await pending;
      await route.fulfill({ json: { ok: true } });
    });
    const button = page.locator('.inquiry-fields button');
    await button.click();
    expect(requests).toHaveLength(0);
    await fillInquiry(page);
    await page.locator('#email').fill('invalid-email');
    await button.click();
    expect(requests).toHaveLength(0);
    await page.locator('#email').fill('client@example.com');
    await button.click();
    await expect(button).toBeDisabled();
    await expect(page.locator('#inquiry-form')).toHaveAttribute('aria-busy', 'true');
    await page.locator('#inquiry-form').evaluate(form => form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
    await expect.poll(() => requests.length).toBe(1);
    for (const value of ['Željko Test', 'Test company', 'client@example.com', '+381601234567', 'Standard', 'Need a backup for 2 TB. čćšžđ', locale ? 'en' : 'sr-Latn']) {
      expect(requests[0]).toContain(value);
    }
    expect(requests[0]).toContain('name="email"');
    expect(requests[0]).toContain('name="_subject"');
    release();
    await expect(page.locator('#inquiry-status')).toHaveAttribute('data-state', 'success');
    await expect(page.locator('#inquiry-status')).toContainText(locale ? 'Your inquiry has been submitted' : 'Vaš upit je poslat');
    await expect(page.locator('#full-name')).toHaveValue('');
    await expect(button).toBeEnabled();
    expect(await page.evaluate(() => localStorage.length)).toBe(0);
  });

  test(`${locale || 'sr'} contact preserves details on rejection, network error and timeout`, async ({ page }) => {
    await page.goto('/' + locale);
    test.skip(await page.locator('form#inquiry-form').count() === 0, 'Build with PUBLIC_FORMSPREE_ENDPOINT to test delivery UI.');
    await fillInquiry(page);
    const status = page.locator('#inquiry-status');
    const button = page.locator('.inquiry-fields button');
    for (const code of [422, 429, 500]) {
      await page.route('https://formspree.io/f/**', route => route.fulfill({ status: code, json: { errors: [{ message: '<script>untrusted</script>' }] } }));
      await button.click();
      await expect(status).toHaveAttribute('data-state', 'error');
      await expect(status).toContainText(locale ? 'could not be submitted' : 'Upit nije poslat');
      await expect(page.locator('#message')).toHaveValue('Need a backup for 2 TB. čćšžđ');
      await expect(button).toBeEnabled();
      await expect(status.locator('script')).toHaveCount(0);
      await page.unroute('https://formspree.io/f/**');
    }
    await page.route('https://formspree.io/f/**', route => route.abort());
    await button.click();
    await expect(status).toContainText(locale ? 'could not confirm' : 'Ne možemo da potvrdimo');
    await expect(button).toBeEnabled();
    await page.unroute('https://formspree.io/f/**');
    await page.clock.install();
    await page.route('https://formspree.io/f/**', () => {});
    await button.click();
    await expect(button).toBeDisabled();
    await page.clock.fastForward(21000);
    await expect(status).toContainText(locale ? 'could not confirm' : 'Ne možemo da potvrdimo');
    await expect(page.locator('#email')).toHaveValue('client@example.com');
    await expect(button).toBeEnabled();
  });
}
