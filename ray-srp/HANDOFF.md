# redBus AI Smart Filter — Prototype Handoff

Everything needed to continue this work in another environment / account. This
prototype recreates the redBus bus **search-results page (SRP)** with an **AI
smart filter** ("RAY" = redBus AI) docked at the bottom.

---

## 1. What this is

A high-fidelity, interactive **Vite + React** prototype of three mobile screens,
built inside a phone device frame:

1. **Home** — redBus home page (only needs to *feel right*; drives the flow).
2. **Loading** — SRP skeleton (feel right; the transition state).
3. **SRP** — the search-results page. **This is the pixel-perfect focus**, and
   the **AI smart filter widget** at the bottom is where all the real work is.

Flow: **Home → tap "Search buses" → Loading (~1.6s) → SRP**. The filter widget
then introduces itself with an animation a beat after the results settle.

---

## 2. Source design (Figma)

- **File:** `Reduce OOPs - Recommend` — key `GGXRzzPZFkGNLQpbi7DUEZ`
- **Link:** https://www.figma.com/design/GGXRzzPZFkGNLQpbi7DUEZ/Reduce-OOPs---Recommend?node-id=2893-3183
- **Parent frame:** `2893:3183` "For prototype"
- **Screen node IDs:**
  - Home page → `2883:12128`
  - Loading state → `2883:3601`
  - SRP (plain) → `2883:2365`
  - **SRP with AI filter widget → `2740:1345`** (the one built)
  - **Filter container → `2883:2881`** (the widget itself)
  - Result card (Tuple1) → `2740:1491`
  - Offers strip → `2740:1350`
- To re-pull assets/specs you need the **Figma MCP server** connected; Figma
  asset download URLs expire after ~7 days, **but every image is already saved
  in `public/assets/`**, so you don't need Figma to run or edit this.

---

## 3. Run it

```bash
npm install
npm run dev        # Vite dev server on http://localhost:5173
```

- Direct-load a screen with a hash: `#home`, `#loading`, `#srp`
  (e.g. `http://localhost:5173/#srp`). No hash = Home.
- `.claude/launch.json` defines the preview config named `redbus-prototype`.

**Stack:** Vite 5 + React 18, plain CSS (no framework). Fonts: Inter + Noto Sans
Kannada from Google Fonts (loaded in `index.html`).

---

## 4. File map

```
index.html                  Google Fonts, #root mount
src/main.jsx                React entry
src/App.jsx                 screen router (home|loading|srp) + phone frame wrapper
src/styles/global.css       design tokens, .stage/.phone/.device frame, type helpers
src/screens/
  Home.jsx / .css           redBus home (emoji/CSS approximations; "feel right")
  Loading.jsx / .css        shimmer skeleton SRP
  SRP.jsx / .css            THE screen: header, offers, results, RAY header, all state
src/components/
  FilterWidget.jsx / .css   ★ THE widget — field, chips, gradient, blur, states
  Keyboard.jsx / .css       simulated iOS/Gboard keyboard (inputMode=none driven)
  ResultCard.jsx / .css     bus result card (Primo, redDeal tags, rating, props)
  OffersStrip.jsx / .css    horizontal offers cards (uses real cropped images)
  RtcEntry.jsx / .css        KSRTC entry card (NOTE: not currently rendered on SRP)
  StatusBar.jsx             Android-style status bar (9:30, notch, wifi/battery)
  Icons.jsx                 all inline SVG icons (sparkle, mic, filter, plus, send…)
public/assets/              offer illustrations, rtc logo, icon SVGs (see below)
```

`RtcEntry` exists but was **removed from the SRP render** on request — keep the
component in case it's wanted back.

---

## 5. Design tokens (`src/styles/global.css`)

| Token | Value |
|---|---|
| Brand red (primary) | `#d63941` |
| Purple (primary) | `#7e3af1` |
| Text primary | `#1d1d1d` |
| Text secondary | `rgba(29,29,29,0.69)` |
| Text tertiary | `rgba(29,29,29,0.62)` |
| Component white / disabled / tertiary | `#ffffff` / `#e6e6e6` / `#fafafb` |
| Stroke inverse / weak / weaker | `#f4f4f4` / `#b0b0b0` / `#e6e6e6` |
| Success primary / tertiary | `#007b28` / `#dbf4d7` |
| Radius full / 2xl | `999px` / `16px` |
| Elevation 2 | `0 2px 2px rgba(0,0,0,.08), 0 4px 4px rgba(0,0,0,.08)` |

Type styles mirror Figma (`t-body-r` 16/22 −0.18, `t-subhead-r` 14/20, etc.).
**The brand gradient** used everywhere is `linear-gradient(…, #d63941, #7e3af1)`.

---

## 6. The filter widget — full behaviour spec

The widget (`FilterWidget.jsx`) is bottom-anchored; SRP owns all state and passes
it in. Everything below is implemented and verified.

### Layout (pixel-perfect to Figma node 2883:2881)
- **Row 1 — free-text field**: 336px wide, 48px tall (54px when typing),
  rounded-full. Left: AI **sparkle** icon (24px, red→purple gradient) + text.
  Right trailing button (mic / send / clear).
- **Row 2 — chips**: an **All-filters** icon button (filter funnel, drawn upright)
  + horizontally-scrolling suggestion chips. **40px tap target wrapping a 32px
  visual pill.** First chip is the AI suggestion (sparkle icon), rest are quick
  filters (`+` icon). Full-bleed: first chip aligns at 12px, chips flow off the
  right screen edge. **4px** real gap between the two rows. **16px** bottom padding.
- **Progressive backdrop blur**: 6 stacked masked layers (0.5→16px) so the blur
  ramps from sharp at the top to blurriest at the very bottom.
- **Separation gradient** (`.fw-tint`): `linear-gradient(to top, rgba(0,0,0,.3),
  transparent)` across the whole widget (the design's 30% black overlay).
- **Mic button**: raised circle with a **vertical gradient stroke** `#f4f4f4`(top)
  → `#b0b0b0`(bottom) via padding-box/border-box (not a flat border).

### Introduction (on screen load only)
- Widget starts hidden below the fold and **rises up** ~900ms after the SRP loads.
- **`.fw-highlight`** — a flowing brand gradient (`#d63941`↔`#7e3af1`, 0.62 alpha,
  `background-size:280%`, `fwFlow` animation) across the **entire widget
  background** (`top:-64px`, masked to fade toward the top). Its opacity is
  toggled by the **`.fw--glow`** class (0.95, 0.5s transition).
- The placeholder **"Ask your preference" types itself in** (typewriter, ~55ms/char,
  blinking caret) starting ~1.25s after reveal — synced with the gradient, **once**.

### Idle field
- Placeholder color is **`rgba(29,29,29,0.69)`** (#1d1d1d @ 69%).

### Typing (keyboard open)
- Tap the field → the **simulated keyboard** (`Keyboard.jsx`, 300px tall, iOS/Gboard
  style, number row + QWERTY + symbols page + shift + space + send) slides up. The
  field **enlarges to 54px and floats above the keyboard** (`bottom: KB_HEIGHT`),
  and **chips hide**. A **scrim** dims the results (tap to dismiss).
- The field is a **real `<input>` with `inputMode="none"`** — so cursor, text
  selection, `cmd/ctrl+A`, delete-selection and space all behave **natively** and
  no native mobile keyboard appears. On-screen keys drive it via
  `document.execCommand('insertText' | 'delete')`; keyboard buttons use
  `onMouseDown preventDefault` so they don't steal focus. Enter → send, Esc → close.
- **Active field visual: WHITE fill**; the brand gradient lives on the **widget
  background behind it** (the same `.fw-highlight`, activated while typing).
- Trailing button: **mic while empty → active gradient send once there's text.**

### Chip tap → immediate filter (with fly animation)
- Tapping a chip animates a **clone of the pill flying from the chips row up into
  the input field** (`.fw-fly`, fixed-position, measured with `getBoundingClientRect`).
  As it lands the **pill background + icon fade out while the text stays**.
- On landing (~380ms) the query is **applied and RAY filters immediately** (it does
  **not** wait for the user to press send). The tapped chip is **removed from the
  row** (`usedChipId`) until cleared.

### Send flow
- Send → keyboard closes → **filtering** state shows 3 shimmer skeleton cards
  (~1.6s) with the widget gradient glowing → filtered results + RAY header appear.

### RAY result header (`.srp-rayhead`)
- After a filter is applied: just the **RAY sparkle logo inline** with one plain
  line in `#1d1d1d`:
  *"Here are the **N buses** that best match your preference — **"{query}"**."*
  (Deliberately trimmed — no "RAY"/"redBus AI" wordmarks, no ranking explanation.)

### Gradient lifecycle (important)
- Gradient is **ON** during: the intro, active typing, and chip-fill/filtering
  **+ ~1s linger** after results appear. It **fades OFF** on the settled filtered
  listing view and at idle. Driven by `glow` (on in `runFilter`, off at **2700ms**)
  plus `inUse = typing || draft` — note **`applied` is intentionally NOT** a
  persistent "on" condition, so the results view isn't permanently tinted.

### Clear (×)
- On the applied view the trailing button is a **clear ×** → resets `applied`,
  `prompt`, `usedChipId` back to the idle placeholder.

---

## 7. SRP state model (`src/screens/SRP.jsx`)

State: `reveal`, `typing`, `prompt`, `applied`, `filtering`, `glow`, `typedPh`,
`phTyping`, `flying`, `usedChipId`, and `inputRef`.

Key handlers: `openKeyboard`, `closeKeyboard`, `onKey`/`onBackspace` (execCommand
on the input), `runFilter` (filtering 1.6s + glow linger to 2.7s), `onSend`,
`onClear`, `onChipTap` (fly + immediate apply/filter). A `useEffect` runs the
intro (reveal+glow) and the placeholder typewriter.

Data: `RESULTS` (3 default cards) and `FILTERED` (2 "AC Sleeper under ₹700" match
cards). `FILTERED` and the RAY copy are **tailored to the AC-sleeper demo** — see
Next Steps.

---

## 8. Assets (`public/assets/`)

Offer illustrations: `offer_nuego.png` (a full-phone screenshot cropped by CSS
transforms in OffersStrip.css), `offer_clock/newop/early/return/handpicked/women.png`,
plus `offer_newop_mask.svg` / `offer_notch.svg`. Operator: `rtc_logo.png`.
Icon SVGs (`ai16/ai24/mic/filter/add/chevron_right/star/primo*.svg`) were pulled
from Figma but **most icons are re-drawn inline in `Icons.jsx`** — the widget/UI
does not depend on the SVG files except where referenced (offers, rtc logo).

---

## 9. Gotchas / notes for the next session

- **Home** was unified to **800px** height (was 836) so the phone frame doesn't
  resize between screens; Home scrolls.
- During dev the desktop **screenshot tool served stale frames** and automated
  ref-clicks hit reindexed refs — verify behaviour via **DOM inspection**
  (`document.querySelector` + computed styles), which is authoritative.
- A stale `<SRP>` React error with an old HMR timestamp may appear in the console
  after rapid edits; it's harmless (mid-edit reload artifact), not a runtime bug.
- `@property --fw-*` and layered `background-clip` gradients are used; target a
  Chromium-based browser (the prototype's audience).

## 10. Suggested next steps

1. **Wire RAY to a real backend/LLM.** The RAY header copy and `FILTERED` set are
   demo-tailored to "AC Sleeper under ₹700"; real query parsing is needed for
   arbitrary free-text and for the quick-filter chips (AC, Sleeper, Single seat,
   Toilet). Model IDs if you build with Claude: Opus 4.8 `claude-opus-4-8`,
   Sonnet `claude-sonnet-5`, Haiku `claude-haiku-4-5-20251001`.
2. Make the filtered results actually reflect the query (currently a fixed set).
3. Home/Loading are approximations — raise their fidelity only if the demo needs it.
4. Consider restoring `RtcEntry` on the SRP if the KSRTC entry is wanted.

---

*Prototype built for gokulkalyanaraman@gmail.com. Pixel-perfect focus: SRP + the
bottom AI smart filter widget.*
