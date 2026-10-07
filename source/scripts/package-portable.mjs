// Assembles the offline-shareable adoption kit: the upload-ready bundle plus
// the source needed to rebuild or extend it, with nothing machine-specific.
import { cpSync, mkdirSync, rmSync, existsSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pkg = join(here, '..');
const kit = join(pkg, '..');
const out = join(kit, 'india-bus-design-system');

if (!existsSync(join(pkg, 'ds-bundle', '_ds_bundle.js'))) {
  throw new Error('ds-bundle/ is missing or incomplete — run the converter build first');
}

rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'source'), { recursive: true });

// 1. The upload-ready bundle, minus local-only artifacts.
const localOnly = new Set(['_screenshots', '.render-check.json', '.sync-diff.json', '.review.html',
  '.ds-build-meta.json', '.pkg-entry.mjs', '.bundle-entry.mjs', '.resync-verdict.json']);
cpSync(join(pkg, 'ds-bundle'), join(out, 'ds-bundle'), {
  recursive: true,
  filter: (src) => {
    const rel = relative(join(pkg, 'ds-bundle'), src);
    if (!rel) return true;
    return !localOnly.has(rel.split(/[\\/]/)[0]);
  },
});

// 2. Source needed to rebuild or extend, including the extracted artwork crops
//    (the screenshots they came from are not portable).
for (const entry of ['src', 'scripts', 'styles', 'assets', 'package.json', 'tsconfig.json']) {
  cpSync(join(pkg, entry), join(out, 'source', entry), { recursive: true });
}

// 2b. The kit files the build reads, vendored so source/ builds standalone.
//     build-css.mjs and build-icons.mjs prefer ./kit when it exists.
for (const file of [
  'foundations/tokens.css',
  'foundations/typography.css',
  'foundations/ions-icons-inline.js',
  'components/components.css',
  'patterns/funnel-system.css',
  'patterns/srp-system.css',
]) {
  cpSync(join(kit, file), join(out, 'source', 'kit', file));
}

// 3. Durable sync inputs: config, notes, authored previews. Never the caches.
for (const entry of ['config.json', 'NOTES.md', 'previews', 'conventions.md']) {
  const from = join(pkg, '.design-sync', entry);
  if (existsSync(from)) cpSync(from, join(out, 'source', '.design-sync', entry), { recursive: true });
}

cpSync(join(pkg, 'ADOPT.md'), join(out, 'ADOPT.md'));

const count = (dir) => {
  let n = 0;
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    n += statSync(p).isDirectory() ? count(p) : 1;
  }
  return n;
};

const components = readdirSync(join(out, 'ds-bundle', 'components'))
  .flatMap((g) => readdirSync(join(out, 'ds-bundle', 'components', g)));

writeFileSync(
  join(out, 'MANIFEST.json'),
  `${JSON.stringify(
    {
      name: 'india-bus-ds',
      globalName: 'IndiaBusDS',
      components: components.length,
      groups: readdirSync(join(out, 'ds-bundle', 'components')),
      files: count(out),
      builtAt: new Date().toISOString(),
      adopt: 'See ADOPT.md — Path 1 uploads ds-bundle/ as-is; Path 2 rebuilds from source/.',
    },
    null,
    2,
  )}\n`,
);

console.log(`portable kit -> ${out}`);
console.log(`  ${components.length} components, ${count(out)} files`);
