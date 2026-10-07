# design-sync notes — india-bus-ds

## What this package is

The India bus prototype kit (`codex-india-bus-prototype-kit/`) is a **vanilla
HTML/CSS/JS** kit with no npm package, no React and no Storybook, so the
design-sync converter cannot read it directly. `design-system/` is a thin React
**binding** added for the sync: every component renders the kit's own class
vocabulary (`c-*`, `type-*`) and the kit's CSS remains the source of truth. No
visual rule is reimplemented in JS.

- Component anatomy was transcribed from `components/component-gallery.html`.
- `scripts/build-css.mjs` flattens `foundations/tokens.css`,
  `foundations/typography.css` and `components/components.css` (plus the
  corrections below) into `dist/india-bus-ds.css`; it strips their `@import`
  lines so the output is self-contained.
- `scripts/build-icons.mjs` transcribes the 34 `<symbol>`s from
  `foundations/ions-icons-inline.js` into a typed module, so the binding needs
  no cross-file `<use>` reference (which local-file browsers block anyway).
- Re-run `npm run build` in `design-system/` after ANY edit to the kit's
  foundations or components CSS — the flattened stylesheet is a build artifact.

## SCOPE GAP (resolved 2026-09-17) — never scope from the component gallery alone

**The first sync (2026-09-16) scoped from `components/component-gallery.html`
alone, so it shipped the 43 Crystal *primitives* and none of the India bus
*product patterns*.** The user caught this from the calibration prototype (route
header, Primo/Exclusive feature cards, Filter & Sort rail, AI Smart filter, bus
tuples with offer ribbons, Ask Ray FAB and sheet were all absent). The second
sync (2026-09-17) added the pattern layer: 89 components in total.

The kit has three layers, all now synced:

1. Ions foundations — tokens, type, 34 icons.
2. Crystal primitives — 43 components.
3. **India bus patterns P01–P36** — 34 built by the kit, 46 components. Authoritative inventory:
   `research/pattern-evidence.md` (names + Tier 1/Tier 2 order);
   `research/gems-android-mapping.md` and `research/srp-ions-crystal-map.md`
   (GEMS node evidence per pattern).

Before any future sync, inventory ALL of: `components/`, `patterns/`,
`prototypes/`, and the `research/` pattern taxonomy — the README's "Open these
first" list is the real scope, not the component gallery.

Source-of-truth rules for the pattern layer (from the kit's own README/docs):

- **Active:** `patterns/funnel-system.css` (`ff-*`), `patterns/srp-system.css`
  (`srp-*`, `gems-*`, `india-ai-filter`, `ray-sparkle`), rendered in
  `patterns/full-funnel-system-gallery.html` and
  `prototypes/android-india-bus-system-calibration.html`.
- **Older catalogs — do not use:** `patterns/patterns.css` (`p-*`),
  `patterns/production-patterns.css` (`prod-*`).
- **Legacy — do not use:** `screens/funnel.css` (`f-*`, 412 × 925).
- **Explicitly rejected:** `prototypes/android-india-bus-reusable.html`.
- Exclude calibration-harness chrome from any inventory: golden overlay, scale/
  opacity controls, system inspector/legend/switch, `*-calibration-page`.

Unlike the primitives, most patterns carry behaviour in vanilla JS
(`funnel-system.js` 80 KB, `srp-system.js` 29 KB) — seat map, drag-dismiss
sheets, AI filter states, scrollspy tabs. The CSS is reusable as-is; the JS is
not bundleable as React components and needs porting per pattern.

### What the kit actually built (34 of 36)

- **P18 Contextual education** — no markup, CSS or JS anywhere in the kit.
- **P36 Last-minute boarding filter** — claimed in the gallery text, but no
  markup exists in the active layer; only `p-lmb-*` in the rejected older
  catalog. Neither is synced: do not invent patterns the kit never built.

### Where each pattern's markup lives

- Search results (P01, P03, P04, P11–P17, P19–P21):
  `prototypes/android-srp-system-calibration.html` + `patterns/srp-system.js`.
  The full-funnel page only **iframes** this page.
- Home, location, calendar, seats, details, reviews, boarding/dropping,
  customer (P02, P05–P10, P22–P35):
  `prototypes/android-india-bus-system-calibration.html` +
  `patterns/funnel-system.js`.

### Pattern-layer conventions (established on the search-results batch)

- **Transcribe the kit's DOM exactly** — same classes, nesting and element
  types. Never add wrapper divs and never wrap siblings: both happened once in
  this sync (a label wrapping its field; a div around Ray's bubble+answer) and
  both would have broken the kit's flex/grid layout.
- **Components live in `src/<family>/`** — `srp`, `home`, `seats`, `details`,
  `checkout`. The directory is the group in Claude Design.
- **Artwork is never a screenshot path.** `scripts/artwork-manifest.json` +
  `scripts/extract-artwork.mjs` cut exact 2× crops into `assets/artwork/`;
  `build-css.mjs` strips the kit's `pm-prototype-kit` urls and embeds the
  crops. CSS-painted slots keep their kit selector; `<img>` slots become
  `ib-art-*` classes rendered by the component.
- **Ancestor-keyed states get hoisted, not re-styled.** When the kit styles a
  component state via a screen frame (`.srp-device[data-ai-state] .india-ai-filter`),
  add an entry to `hoists` in `build-css.mjs`; it re-emits the kit's rule with
  the attribute on the component root. BEM children (`__field`) become
  descendants — the first implementation got that wrong.
- **Absolutely positioned surfaces** (FAB, sheets, loaders) anchor to the
  phone canvas: `IonsRoot device` is `position: relative` for this. Say so in
  the component's JSDoc.
- **JSDoc names the pattern ID and the GEMS status** from
  `research/gems-android-mapping.md` ("GEMS `DroidTupple-India`",
  "screenshot-led, no GEMS component").
- **Never invent tones or variants the kit CSS lacks.** GEMS `DroidRating`
  defines Low/Neutral/New, but the kit implements only high and `--mid`.
- **Previews use the kit's own calibrated data** from the calibration HTML
  (Delhi → Ganganagar, Pinky Gudiya, Tantia, ₹904…), inside a 360dp frame.

### Pattern-layer kit defects corrected in `binding-fixes.css`

- **Tuple details trigger collides with the rating pill** — operator block
  capped at 270px with the trigger on its right edge, rating pinned 14px from
  the card edge: ~11px overlap on the kit's own Primo tuple. Capped at 256px.
- **`.srp-ray-result-card` is emitted by `srp-system.js` but never styled** —
  embedded Ray results kept the 176px height and 34px ribbon band, and a naive
  fix exposed absolutely pinned tags/rating. The hook now sizes to content,
  returns tags to flow and moves the rating up 34px. Exposed as
  `BusTuple embedded`.
- **`hidden` is broken across the pattern layer** — classes like
  `.srp-filter-badge { display: grid }` and `.ff-journey__label { display: block }`
  beat the UA `[hidden]` rule (a "0" badge; labels over empty placeholders).
  One scoped `[hidden] { display: none !important }` rule restores it.
- **Screenshot-measured fixed widths break with any non-Roboto font** —
  "Filter & Sort" wrapped (118px), selected chips had no room for their ✕ so
  flex squeezed the drawn AC/sleeper glyphs into bars, "16 Aug" wrapped the
  48px date control, two-line highlights clipped at 49px. Widths are kept as
  minimums and allowed to grow.
- **`.gems-offer-ribbon` is inline-flex**, collapsing the space: "Exclusive5% OFF".
- **Labels left at the UA bold** — `.ff-point-tab strong`, `.ff-passenger strong`,
  `.ff-women strong` never set a weight; production shows them regular (only the
  selected point tab is bold).

### Two binding mistakes worth remembering

- **Cascade ORDER, not just specificity.** The page-scoped control rules
  (`.ff-device button { color: inherit }`) were first appended at the END of
  the bundle at the kit's specificity (0,1,1). On the prototype page they sit
  at the TOP, and later equal-specificity kit rules (`.ff-bottom-nav button
  { color: #66666d }`) beat them. Appending last inverted that and turned the
  Home bottom nav near-black. They now live in `styles/pattern-base.css`,
  emitted BEFORE the pattern stylesheets.
- **`IonsRoot` must not set `font-size`/`line-height`.** The kit's pages leave
  both at the browser default and pattern components (e.g. the policy table in
  the bus-details sheet) inherit it. A forced 24px body line spread their text.

### Production-evidence layer (`styles/production-evidence.css`)

After grading against the real screenshots, the owner chose (2026-09-17) to
**close gaps from evidence**: build what production shows where the kit's
prototype never implemented it, reusing kit palette and Ions icons, but NOT
fabricating assets that don't exist. This file is separate from
`binding-fixes.css` on purpose — fixes correct kit bugs; evidence rules add
what the kit never built. Every rule names its screenshot.

- **`BusRoute` (new)** — production's "Bus route" town chain (`Scroll on bus
  details sheet.jpeg`). The kit had no implementation; its `RouteTimeline` is
  actually production's Boarding/Dropping *points* list and was mislabelled.
- **`RouteTimeline`** — rebuilt to production anatomy: time + date, dark dot on
  a rail that stretches with the row, name + one-line address.
  `DetailSection subtitle` added for the city line.
- **`PolicyTable`** green `ion-check-circle`; **`PassengerCard`** `ion-user`
  avatar; **`ContactDetailsCard`** `ion-location` region pin.
- **`PointTabs boardingChosen/droppingChosen`** — dark text for a chosen point.
- **Sold berths** tint the pillow with the kit's own border tints.
- **`SeatTray photo`** — leading bus-photo tile, reusing the clean operator crop
  (a crop from the peek screenshot would bake in its fade).

### Documented gaps — owner-approved, NOT to be "fixed" without a decision

Ions has no matching icon, or the asset does not exist in evidence:

- Phone, mail, WhatsApp mark (`ContactDetailsCard`); person-add
  (`PassengerCard`); recent-route history and city-buildings
  (`LocationSearch`); seat icon (`TripSummary`); crossed-person on sold berths
  (`SeatMap`) — all keep the kit's text glyphs.
- **Second bus photo** in `BusDetailsSheet` — production shows only an 84px
  sliver of it (the rail runs off-screen), so no honest full crop exists.
- **Low/Neutral/New rating tones** — GEMS defines them; the kit built only
  high and mid. Production shows a red 2.4 in a Ray answer.
- **Home bottom-nav "New" badge** is red in the kit, green in production.

## Kit defects found during the sync (NOT fixed in the kit)

`scripts/validate-base.js` hash-validates the kit's protected files, so the kit's
own CSS was never edited. Corrections live in
`design-system/styles/binding-fixes.css`, which the flattener appends last.

- **`.c-list__title` / `.c-list__support` collapse onto one line.** Both are
  inline `<span>`s (a `<button>` row may only contain phrasing content) and
  nothing in `components.css` sets `display`, so the intended two-line row
  renders as `"Sector 43 Bus Terminal06:15 · Chandigarh"` and the support
  line's `text-overflow: ellipsis` never applies. **The kit's own
  component-gallery.html has this bug too** — worth fixing upstream in
  `components.css` rather than carrying the override forever.
- **`.c-chip__supporting` inherits the chip's 500 weight**, so the large chip's
  supporting line reads as a second label rather than support text.
- **`.c-title-block`'s trailing action shrinks.** It is a flex row and the
  action inherits `flex-shrink: 1`, so a long supporting line squeezes the
  action and wraps its label mid-phrase ("View" / "all").
- **`.c-snackbar` can only ever be half-width.** It centres with `right: 50%`
  and no `left`; with a single inline offset a fixed box shrink-to-fits inside
  the remaining half of the canvas (180px on the 360dp phone), so its own
  `max-width: min(380px, 100vw - 32px)` never applies and every message wraps
  to four or five lines. Fixed by pinning both offsets and centring with auto
  margins. **Note the first attempt — flipping to `left: 50%` — does not work**,
  because the cap is symmetric.

### Defects recorded but NOT fixed (they need design decisions, not CSS)

These are real gaps, but fixing them means inventing brand appearance, which is
the design system owner's call — not the sync's. Previews avoid the affected
states rather than fake them.

- **No `:disabled` styling for `.c-icon-button`, `.c-chip`, `.c-login-button`,
  `.c-search` or `.c-switch`.** Each sets its colours explicitly, so the
  browser's native greying never shows and a disabled control renders
  pixel-identical to an enabled one. A checked-and-disabled Switch shows full
  Ions red. `.c-button` and `.c-stepper__button` DO have disabled rules, and
  native `<select>` / checkbox / `<input type="range">` grey themselves — so
  the gap is specific to those five.
- The kit's own `component-gallery.html` shows all of the above too; every one
  of these is upstream, not a binding artefact.

## Conventions for authoring previews

- Import from `'india-bus-ds'`; one named export per card cell, 3–5 per
  component.
- Phone-width compositions go in `<div style={{ width: 328 }}>` — the kit's
  360dp canvas minus its 16px side padding.
- Content must be real India-bus domain content: Indian city and terminal
  names, 24-hour IST times, `₹` fares, operator names. Never `foo`/`Lorem`.
- Overlay components (`BottomSheet`, `Dialog`, `Snackbar`) render
  `position: fixed` over a scrim; they need `cfg.overrides.<Name>` with
  `cardMode: "single"`, a `primaryStory` and a `viewport`, and their preview
  must pass `open`. The configured `primaryStory` names are `FiltersSheet`,
  `CancelBooking` and `WithAction` — keep those exports or update the config.
- Full-width components (`TopNav`, `Tabs`, `BottomNav`, `Table`, `IonsRoot`,
  `RatingInput`) use `cardMode: "column"` so each export gets a full row.
  Render chrome (`TopNav`/`Tabs`/`BottomNav`) at `width: 360`, not 328 — it is
  full-bleed, unlike content compositions.
- **A `position: fixed` overlay escapes its preview cell.** `BottomSheet`,
  `Dialog` and `Snackbar` previews wrap their content in a frame carrying
  `transform: translateZ(0)`, which makes that wrapper a containing block for
  fixed descendants so the overlay renders inside the captured card.
  `cardMode`/`viewport` alone does NOT achieve this.
- **Selected/active state must be passed as a *controlled* prop.** A capture
  never clicks, so `defaultValue` renders as unselected. Use `value` on
  `RatingInput`, `SegmentedControl`, `Tabs`, `BottomNav` etc. to show a
  selected cell.
- **Hover-only states need an explicit escape hatch.** `Tooltip` takes
  `forceVisible` for exactly this; give its cell ~48px top padding or the
  bubble is clipped.
- `BottomNav`'s `icon` is an icon **id string**, not an `<Icon />` element —
  it is the one icon slot in the system that differs.
- `Divider` carries its own vertical margin; never preview it bare.
- `Carousel` slides are `minmax(240px, 80%)`, so the next slide is always
  partly clipped. That is correct rail behaviour, not a render bug.

## Token names (this cost an authoring iteration)

Unknown custom properties fail **silently** to inherited black, which still
looks plausible in a screenshot — grep the built CSS before using a token name.
There is no `--content-brand-default`; the real ramp is:

- content: `--content-{brand-high,info-high,success-high,warning-high,
  neutral-high,neutral-medium,neutral-low,neutral-inverse}-default` plus
  `--content-disabled-default`
- surface: `--surface-{brand-high,brand-low,info-low,success-low,warning-low,
  neutral-high,neutral-medium,neutral-low,neutral-lowest,overlay}-default`

## Converter gotcha: `[CONFIG_STALE]` is all-or-nothing

Editing `cfg.overrides.<Name>.viewport` (a grade-keyed field) after a full
build leaves that component stale, and `preview-rebuild.mjs` then **aborts the
entire invocation** — blocking unrelated components in the same `--components`
list. Only a full `package-build.mjs` re-stamps it. If a scoped rebuild fails
this way, run the full build once and retry.

## Environment

- Cached playwright browsers on this machine are chromium **1208 / 1217**; the
  matching release is **playwright 1.59.0** (1.60 → 1223, 1.63 → 1243). Install
  that exact version into `.ds-sync/` or the render check fails with
  `Executable doesn't exist`.
- The kit is **not a git repository** and lives under `Downloads/`.

## Known render warns

**The last sync finished with ZERO warnings.** Any warn on a future run is new
— look at it rather than assuming it is expected.

- `[RENDER_THIN]` on unauthored components is expected only while they still
  show the floor card. Nothing is on the floor card today: all 43 components
  have authored previews.
- `[GRID_OVERFLOW]` fired for 32 of 43 components on the first full validate.
  All were `wide`, and all were resolved with `cardMode: "column"` — which is
  why **41 of 43 components carry an override**. This is expected for this DS:
  its cards are phone-width compositions (328–360px), which is simply wider
  than a multi-column grid cell. Only `BottomSheet`/`Dialog`/`Snackbar` differ
  (`cardMode: "single"` with a viewport, because they are overlays). If a newly
  added component flags `wide`, give it `column` too rather than shrinking the
  composition.

## Re-sync risks

- **The binding is hand-written.** If someone adds a component or a class to
  the kit's `components.css`, nothing detects it automatically — the binding
  must be extended by hand. Diff `components.css` against the binding's class
  usage when the kit changes.
- **`binding-fixes.css` is a workaround.** If the kit ever fixes the two
  defects above, delete the corresponding rules or they become dead weight
  (harmless, but misleading).
- **Fonts are deliberately system fonts.** `--font-family-android` resolves to
  Roboto / Noto Sans / Segoe UI / Arial, which the kit chose to stay
  dependency-free. `runtimeFontPrefixes` suppresses `[FONT_MISSING]` for them.
  Rendered designs will use whatever the viewer's OS provides — accepted, not
  an oversight.
- Component count at last sync: **89** (43 Crystal primitives + 46 India bus pattern components covering the 34 patterns the kit built).
