// Cuts the product artwork slots out of the production screenshots so the
// bundle ships small crops instead of whole screens. Output is committed under
// assets/artwork/; re-run only when the screenshots or manifest change.
// Needs playwright (the staged .ds-sync copy is used when present).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pkg = join(here, '..');
const kit = join(pkg, '..');
const manifest = JSON.parse(readFileSync(join(here, 'artwork-manifest.json'), 'utf8'));
const shots = join(kit, manifest.screenshotDir);
const outDir = join(pkg, 'assets', 'artwork');
mkdirSync(outDir, { recursive: true });

const require = createRequire(join(pkg, '.ds-sync', 'package.json'));
const { chromium } = require('playwright');

const browser = await chromium.launch();
const page = await browser.newPage();
const SCALE = 2;

for (const slot of manifest.slots) {
  const b64 = readFileSync(join(shots, slot.shot)).toString('base64');
  const dataUrl = await page.evaluate(
    async ({ src, x, y, w, h, scale }) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      const canvas = document.createElement('canvas');
      canvas.width = w * scale;
      canvas.height = h * scale;
      canvas.getContext('2d').drawImage(img, x * scale, y * scale, w * scale, h * scale, 0, 0, w * scale, h * scale);
      return canvas.toDataURL('image/jpeg', 0.92);
    },
    { src: `data:image/jpeg;base64,${b64}`, x: slot.x, y: slot.y, w: slot.w, h: slot.h, scale: SCALE },
  );
  const file = join(outDir, `${slot.id}.jpg`);
  writeFileSync(file, Buffer.from(dataUrl.split(',')[1], 'base64'));
  console.log(`artwork: ${slot.id} ${slot.w * SCALE}x${slot.h * SCALE} <- ${slot.shot}`);
}

await browser.close();
