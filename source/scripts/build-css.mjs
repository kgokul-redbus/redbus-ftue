// Flattens the kit's foundation, Crystal primitive and India bus pattern CSS
// into one shippable stylesheet. The kit's files stay the source of truth; this
// only inlines their @imports, swaps screenshot-crop artwork for small embedded
// crops (see extract-artwork.mjs), and appends the binding's corrections last.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pkg = join(here, '..');
// In the prototype-kit repo the kit is the parent directory; in the portable
// kit its inputs are vendored into ./kit.
const kit = existsSync(join(pkg, 'kit', 'foundations')) ? join(pkg, 'kit') : join(pkg, '..');

const parts = [
  ['foundations/tokens.css', join(kit, 'foundations', 'tokens.css')],
  ['foundations/typography.css', join(kit, 'foundations', 'typography.css')],
  ['components/components.css', join(kit, 'components', 'components.css')],
  ['design-system/styles/pattern-base.css', join(pkg, 'styles', 'pattern-base.css')],
  ['patterns/funnel-system.css', join(kit, 'patterns', 'funnel-system.css')],
  ['patterns/srp-system.css', join(kit, 'patterns', 'srp-system.css')],
];

// The kit paints artwork by pointing background-image at production screenshots
// outside the kit; those paths cannot resolve once uploaded.
const screenshotUrl = /^\s*background-image:\s*url\(["']?[^)"']*pm-prototype-kit[^)"']*["']?\);\s*$/gm;

// Some component states are keyed off the whole-screen device frame
// (`.srp-device[data-ai-state="filled"] .india-ai-filter`), so a component
// rendered outside that frame could never show them. Each hoist re-emits the
// kit's own rule with the state attribute moved onto the component root. The
// declarations are untouched; only the hook changes.
const hoists = {
  'patterns/srp-system.css': [
    { ancestor: '.srp-device', attr: 'data-ai-state', root: '.india-ai-filter' },
    // The card's calibrated look is authored only for the scenario where it is on screen.
    { ancestor: '.srp-device', attr: 'data-scenario', root: '.srp-free-cancel-card' },
  ],
  'patterns/funnel-system.css': [
    { ancestor: '.ff-seats', attr: 'data-has-selection', root: '.ff-seat-tray' },
    { ancestor: '.ff-seats', attr: 'data-has-selection', root: '.ff-seat-selection' },
  ],
};

let hoisted = 0;
function hoistStates(css, rules) {
  return css.replace(/([^{}]+)\{/g, (prelude, selectors) => {
    const list = selectors.split(',');
    const extra = [];
    for (const raw of list) {
      const sel = raw.trim();
      for (const { ancestor, attr, root } of rules) {
        const m = new RegExp(`^${ancestor.replace('.', '\\.')}\\[${attr}="([^"]+)"\\]\\s+${root.replace('.', '\\.')}(.*)$`).exec(sel);
        if (!m) continue;
        // `.india-ai-filter__field` starts with the root's name but is a BEM
        // child, so it becomes a descendant of the root, not a suffix on it.
        const rest = m[2];
        const isChildClass = /^[\w-]/.test(rest);
        extra.push(isChildClass ? `${root}[${attr}="${m[1]}"] ${root}${rest}` : `${root}[${attr}="${m[1]}"]${rest}`);
      }
    }
    if (!extra.length) return prelude;
    hoisted += extra.length;
    return `${selectors.replace(/\s+$/, '')},\n${extra.join(',\n')} {`;
  });
}

let strippedArtwork = 0;
const chunks = parts.map(([label, file]) => {
  let css = readFileSync(file, 'utf8')
    .replace(/^@import\s+url\([^)]*\);\s*$/gm, '')
    .replace(screenshotUrl, () => {
      strippedArtwork += 1;
      return '';
    });
  if (hoists[label]) css = hoistStates(css, hoists[label]);
  return `/* ===== ${label} ===== */\n${css.trim()}\n`;
});

const manifest = JSON.parse(readFileSync(join(here, 'artwork-manifest.json'), 'utf8'));
const artwork = manifest.slots.map((slot) => {
  const data = readFileSync(join(pkg, 'assets', 'artwork', `${slot.id}.jpg`)).toString('base64');
  const url = `url("data:image/jpeg;base64,${data}")`;
  if (slot.selectors) {
    return `${slot.selectors.join(',\n')} {\n  background-image: ${url};\n  background-position: 0 0;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}`;
  }
  return `.${slot.className} {\n  background-image: ${url};\n  background-position: 0 0;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}`;
});
chunks.push(`/* ===== design-system/assets/artwork (extracted product crops) ===== */\n${artwork.join('\n\n')}\n`);

chunks.push(
  `/* ===== design-system/styles/binding-fixes.css ===== */\n${readFileSync(join(pkg, 'styles', 'binding-fixes.css'), 'utf8').trim()}\n`,
);

chunks.push(
  `/* ===== design-system/styles/production-evidence.css ===== */\n${readFileSync(join(pkg, 'styles', 'production-evidence.css'), 'utf8').trim()}\n`,
);

mkdirSync(join(pkg, 'dist'), { recursive: true });
writeFileSync(join(pkg, 'dist', 'india-bus-ds.css'), chunks.join('\n'));
console.log(
  `css: ${parts.length} kit files + ${manifest.slots.length} artwork crops (${strippedArtwork} screenshot urls replaced, ${hoisted} state selectors hoisted) + binding fixes -> dist/india-bus-ds.css`,
);
