import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { mkdir, writeFile } from 'node:fs/promises';
const chrome = await launch({ chromePath: process.env.CHROME_PATH, chromeFlags: ['--headless', '--no-sandbox'] });
try {
  await mkdir('reports', { recursive: true });
  for (const locale of ['', 'en/']) {
    const result = await lighthouse(`http://127.0.0.1:4321/offsite-backup-website/${locale}`, {
      port: chrome.port, output: ['html', 'json'], onlyCategories: ['performance','accessibility','best-practices','seo'],
    });
    const label = locale ? 'en' : 'sr';
    await writeFile(`reports/lighthouse-${label}.html`, result.report[0]);
    await writeFile(`reports/lighthouse-${label}.json`, result.report[1]);
    console.log(label, Object.fromEntries(Object.entries(result.lhr.categories).map(([key, value]) => [key, value.score * 100])));
  }
} finally { chrome.kill(); }
