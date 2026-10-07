# Adopting the India Bus design system on another Claude account

This kit is **self-contained and offline-portable**. Nothing in it phones home,
and it doesn't need the original prototype-kit repo or its screenshots. Hand
someone this folder (or the zip) and they can put the design system into their
own Claude Design account without redoing any of the work.

There are two paths. Most people want the first.

---

## Path 1 — Upload the finished bundle (a few minutes, no build)

`ds-bundle/` is already in the exact format claude.ai/design consumes. It has
been built, validated and visually verified against the production screenshots
the kit was calibrated to: **89 components**, every preview card rendered and
graded.

**In Claude Code, on the receiving account:**

1. Run `/design-login` once in an interactive `claude` terminal. Uploading
   needs design-system authorization, and non-interactive sessions can't
   grant it.
2. Open a session with this folder as the working directory and say:
   *"Use the design-sync skill to upload the prebuilt bundle in `ds-bundle/` to
   a new Claude Design project."*

   The skill runs its own upload sequence. It creates a design-system project,
   writes `_ds_needs_recompile` first, then all content files, and
   `_ds_sync.json` **last**. The order matters: the sync anchor must only ever
   vouch for a fully applied upload.
3. Open the project. On open, the app registers preview cards from the
   `@dsCard` comment at the top of each `<Name>.html` and reads each
   `<Name>.d.ts` as that component's API contract.

**Don't rename or reorganise anything inside `ds-bundle/`.** The layout is the
contract:

| Path | Role |
|---|---|
| `_ds_bundle.js` | the compiled bundle: every component on `window.IndiaBusDS.*` |
| `styles.css` | the only stylesheet rendered designs receive; it `@import`s `_ds_bundle.css` |
| `_ds_bundle.css` | the kit's real CSS (Ions tokens, typography, Crystal components, India bus patterns) plus the embedded artwork crops and binding corrections |
| `components/<group>/<Name>/` | `.d.ts` (API contract), `.prompt.md` (usage and examples), `.html` (preview card), `.jsx` |
| `_vendor/` | React, loaded by the preview cards; it must be uploaded |
| `_ds_sync.json` | verification anchor, so a later re-sync can skip unchanged components |
| `README.md` | the conventions header the design agent reads first |

A rendered design receives **only** `styles.css`'s `@import` closure plus the JS
bundle. Never "tidy up" by deleting `_ds_bundle.css` or flattening the import.

---

## Path 2 — Rebuild from source (to change or extend it)

`source/` builds standalone. The kit files the build reads are vendored in
`source/kit/`, and the extracted artwork is in `source/assets/artwork/`.

```bash
cd source
npm install
npm run build          # icons -> CSS -> tsc  (writes dist/)
```

To regenerate `ds-bundle/`, ask Claude Code to *"rebuild this design system
with the design-sync skill"*. The skill stages its converter scripts and uses
the committed `source/.design-sync/` config, previews and conventions. The
render check needs playwright plus a matching chromium, and
`source/.design-sync/NOTES.md` records the version mapping that worked here.
Validation must pass before anything is uploaded.

### What's in `source/`

- `src/<group>/`: the React binding. Components render the prototype kit's own
  classes; **no visual rule is reimplemented in JavaScript.**
- `kit/`: vendored copies of the six kit files the build reads (tokens,
  typography, icon sprite, Crystal components CSS, both pattern stylesheets).
  Treat them as read-only upstream.
- `styles/pattern-base.css`: the kit's page-scoped control rules, emitted
  before the pattern CSS so the cascade matches the prototype pages.
- `styles/binding-fixes.css`: corrections to real bugs in the kit's CSS, each
  documented with its cause.
- `styles/production-evidence.css`: things production shows that the kit's
  prototype never built (the Bus route chain, the timeline anatomy, policy
  checks, sold-seat tints). Each rule names its screenshot.
- `assets/artwork/` + `scripts/artwork-manifest.json`: product artwork cropped
  exactly from production screenshots (Primo/Exclusive cards, Ray sparkle,
  services strip, campaign, bus photo). `extract-artwork.mjs` can only be
  re-run where those screenshots exist, but the crops are committed.
- `.design-sync/previews/`: the authored preview compositions. **These took
  the most work.** They carry forward on every re-sync and become the
  `## Examples` in each `.prompt.md`.
- `.design-sync/NOTES.md`: **read this before changing anything.** It covers
  scope history, conventions, every kit defect found, and the owner-approved
  documented gaps.

### If you extend it

The binding is hand-written, so a new pattern in the prototype kit doesn't
appear here automatically. Add the component under `src/<group>/`, export it
from `src/index.ts`, write `.design-sync/previews/<Name>.tsx`, rebuild and
re-validate. The `src/` directory sets the component's group in Claude Design.

---

## What this design system is

The redBus **India bus** booking journey, from Home through Customer
Information, authored at 360 × 800 logical Android dp. It has two layers:

- **India bus patterns (46 components)**, grouped by funnel stage: `home`,
  `srp`, `seats`, `details`, `checkout`. These are the real product surfaces
  (bus result card, AI Smart filter, filter rail, Ask Ray, seat map, bus details,
  boarding/dropping, passenger details), calibrated against production.
- **Crystal primitives (43 components)**: `foundations`, `input`,
  `information`, `navigation`, `feedback`, `persuasion`, `social`.

The kit's taxonomy lists 36 patterns (P01–P36). The kit built 34 of them, and
all 34 are here. P18 (contextual education) and P36 (last-minute boarding
filter) were never implemented by the kit, so they weren't invented.

Payment is deliberately out of scope. `LoginButton` and `RedDeal` carry
restrictions from the source system. A few production icons don't exist in the
Ions set (phone, mail, WhatsApp, seat, history, person-add), so those cards keep
the kit's text glyphs. This is a documented, owner-approved gap; see NOTES.md.
