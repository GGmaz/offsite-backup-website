import { cp, mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const build = join(root, 'dist');
const manifest = join(root, '.pages-files.json');
const allowed = file => /^(?:index\.html|robots\.txt|sitemap\.xml|favicon\.svg|social-preview-(?:sr|en)\.png|en\/index\.html|(?:_astro|fonts|images)\/[\w.-]+)$/.test(file);

async function filesIn(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix + entry.name;
    if (entry.isDirectory()) files.push(...await filesIn(join(directory, entry.name), relative + '/'));
    else if (entry.isFile()) files.push(relative);
    else throw new Error(`Unsupported build entry: ${relative}`);
  }
  return files.sort();
}

const files = await filesIn(build);
if (!files.includes('index.html') || !files.includes('en/index.html') || files.some(file => !allowed(file))) {
  throw new Error('Unexpected or incomplete build output; root files were not changed.');
}
let previous = [];
try { previous = JSON.parse(await readFile(manifest, 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
if (!Array.isArray(previous) || previous.some(file => typeof file !== 'string' || !allowed(file))) {
  throw new Error('Invalid generated-file manifest; root files were not changed.');
}
for (const file of files) {
  await mkdir(dirname(join(root, file)), { recursive: true });
  await cp(join(build, file), join(root, file));
}
// Remove only obsolete generated files recorded by this script, never source directories.
for (const file of previous.filter(file => !files.includes(file))) {
  await unlink(join(root, file)).catch(error => { if (error.code !== 'ENOENT') throw error; });
}
await writeFile(join(root, '.nojekyll'), '');
await writeFile(manifest, JSON.stringify(files, null, 2) + '\n');
console.log(`Prepared ${files.length} static files at the repository root for GitHub Pages.`);
