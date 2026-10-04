import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

test('Pages export preserves source, refreshes output and removes only stale generated assets', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pages-export-'));
  try {
    for (const dir of ['scripts', 'src', 'dist/en', 'dist/_astro']) await mkdir(join(root, dir), { recursive: true });
    await cp(new URL('../scripts/prepare-pages.mjs', import.meta.url), join(root, 'scripts/prepare-pages.mjs'));
    await writeFile(join(root, 'src/keep.txt'), 'source stays');
    await writeFile(join(root, 'dist/index.html'), '<h1>Serbian</h1>');
    await writeFile(join(root, 'dist/en/index.html'), '<h1>English</h1>');
    await writeFile(join(root, 'dist/_astro/old.css'), 'old');
    const run = () => execFileSync(process.execPath, [join(root, 'scripts/prepare-pages.mjs')], { stdio: 'pipe' });
    run();
    assert.equal(await readFile(join(root, '.nojekyll'), 'utf8'), '');
    assert.equal(await readFile(join(root, 'en/index.html'), 'utf8'), '<h1>English</h1>');
    await rm(join(root, 'dist/_astro/old.css'));
    await writeFile(join(root, 'dist/_astro/new.css'), 'new');
    run();
    await assert.rejects(readFile(join(root, '_astro/old.css')), { code: 'ENOENT' });
    assert.equal(await readFile(join(root, 'src/keep.txt'), 'utf8'), 'source stays');
    assert.equal(await readFile(join(root, '_astro/new.css'), 'utf8'), 'new');
    // Reject manifest entries that could overwrite or delete source files.
    await writeFile(join(root, '.pages-files.json'), '["src/keep.txt"]');
    assert.throws(run, /Invalid generated-file manifest/);
    assert.equal(await readFile(join(root, 'src/keep.txt'), 'utf8'), 'source stays');
  } finally { await rm(root, { recursive: true, force: true }); }
});
