# Building with the India Bus design system

This is the redBus **India bus** booking journey, Home through Customer
Information, for an Android phone at **360 × 800 logical dp**. It has two
layers, and you should prefer the higher one:

1. **India bus patterns**: the real product surfaces (bus result card, AI Smart
   filter, seat map, Ask Ray…), calibrated against production screenshots.
2. **Crystal primitives**: generic controls (`Button`, `Chip`, `TextField`…) for
   anything the patterns don't cover.

## Build screens from the patterns

Never rebuild a product surface from primitives: a bus card made of `List` and
`Tag` looks generic, while `BusTuple` looks like redBus. Groups match the funnel:

- **`home`**: `HomeServices`, `JourneySearch` + `HomeSearchButton`,
  `WomenBookingToggle`, `HomeCampaign`, `HomeOffers`, `HomeBottomNav`,
  `LocationSearch`
- **`srp`**: `RouteHeader`, `ResultModeTabs`, `FeatureCardRail`/`FeatureCard`,
  `FilterRail` (`FilterSortChip` then `FilterChip`s), `AiSmartFilter`,
  `BusTuple` (+ `BusRating`, `OfferRibbon`), `ResultsLoader`, `FilterSheet`,
  `DateSheet` (also Home's calendar), `FreeCancellationCard`, `EndOfResults`,
  `RayFab`, `RaySheet`
- **`seats`**: `SeatMap`, `SeatTray`, `SeatSelectionFooter`, `SeatPill`, `FareSheet`
- **`details`**: `BusDetailsSheet` with `DetailSection`s holding `PolicyTable`,
  `PolicyList`, `BusRoute`, `RouteTimeline`, `ReviewsExplorer`/`ReviewTuple`
- **`checkout`**: `PointTabs`, `PointList`/`PointRow`, `TripSummary`,
  `ContactDetailsCard`, `PassengerCard`

Sheets, loaders, `RayFab`, `SeatMap` and `SeatTray` are **absolutely positioned
against the phone**, so render them as direct children of `IonsRoot device`:

```jsx
<IonsRoot device style={{ height: 800, background: '#f6f5fa' }}>
  <RouteHeader from="Delhi" to="Ganganagar (Sri Ganganagar)" busCount={7} date="9 Jul" day="Thu" />
  <ResultModeTabs />
  <FilterRail>
    <FilterSortChip count={1} />
    <FilterChip kind="ac" selected />
    <FilterChip kind="sleeper" />
  </FilterRail>
  <div style={{ display: 'grid', gap: 'var(--spacing-lg)', padding: 'var(--spacing-xl)' }}>
    <BusTuple
      departure="21:30" arrival="05:51" duration="8h 21m" seats={15}
      previousFare="₹952" fare="₹904" operator="Tantia Travels & Cargo" busType="AC Sleeper (2+1)"
      ribbon={<OfferRibbon value="5% OFF" />} rating={<BusRating value="4.2" count={118} />}
      tags={['Toilet', '97% On Time']}
    />
  </div>
  <RayFab />
</IonsRoot>
```

Pattern components are fixed to the 360dp canvas (e.g. `BusTuple` is 328dp).
Don't stretch them to desktop widths. Pass selected or open states as props
(`selected`, `open`, `state`, `value`); the components are controlled.

## The styling idiom: tokens and role classes, no utility CSS

There is **no Tailwind, no utility classes, and no style props**. Don't invent
`p-4` or `gap-md`; nothing will resolve them. Instead:

- **Typography** comes from `<Text role>`: `extra-large-title` · `large-title` ·
  `title-1` · `title-2` · `title-3` · `body` · `label` · `caption`, plus `strong`
  and `tabular` (use `tabular` for fares, times and seat counts). Never set
  `fontSize` by hand.
- **Your own layout glue** uses `var(--*)` tokens in inline styles. An unknown
  name fails silently to black. The real ones:
  - spacing `--spacing-xs` 4 · `sm` 6 · `md` 8 · `lg` 12 · `xl` 16 · `2xl` 20 · `3xl` 24 · `4xl` 32
  - radius `--radius-md` 8 · `xl` 12 · `2xl` 16 · `--radius-full`
  - surface `--surface-neutral-lowest-default` (cards) · `--surface-neutral-medium-default` (page)
  - content `--content-neutral-high-default` · `--content-neutral-medium-default` · `--content-brand-high-default`
  - border `--border-neutral-low-default`

Brand red is `--action-primary-surface-default` (#d84e55). Use it for the one
primary action per screen. `<IonsRoot theme="dark">` re-points every token.

Icons are `<Icon name="ion-…" />` from a fixed set of 34 (`ion-bus`, `ion-search`,
`ion-calendar`, `ion-location`, `ion-star`, `ion-filter`, `ion-user`,
`ion-check-circle`…). Strokes inherit `currentColor`. There are no phone, mail,
WhatsApp, seat or history icons, and some cards keep text glyphs for those.
Don't invent SVGs to fill the gap.

## Rules carried from the source system

- **Payment is out of scope.** The journey stops at Customer Information.
- **Restricted:** `LoginButton` (approved providers only) and `RedDeal`
  (genuine redDeal inventory only).
- **Never recreate product artwork** (Primo/Exclusive cards, campaign banners,
  bus photos, Ray sparkle) from shapes and text. The components ship the real art.
- Ratings come in `high` and `mid` tones only; there is no low tone.
- One filled primary action per screen. Use `BottomSheet` for secondary controls
  and `Dialog` only for blocking decisions.

## Where the truth is

- **`_ds/<folder>/styles.css`** and its imports: token values.
- **`components/<group>/<Name>/<Name>.prompt.md`**: props plus worked examples.
  The examples are verified compositions using production data, so adapt one
  rather than inventing a new pattern.

# IndiaBusDS (india-bus-ds@1.0.0)

This design system is the published india-bus-ds React library, bundled as a single
browser global. All 89 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.IndiaBusDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.IndiaBusDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AiSmartFilter } = window.IndiaBusDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AiSmartFilter />);
```

## Tokens

136 CSS custom properties from india-bus-ds. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (24): `--surface-neutral-lowest-default`, `--surface-neutral-low-default`, `--surface-neutral-medium-default`, …
- **typography** (1): `--font-family-android`
- **radius** (11): `--radius-none`, `--radius-2xs`, `--radius-xs`, …
- **shadow** (4): `--elevation-level-0`, `--elevation-level-1`, `--elevation-level-2`, …
- **other** (96): `--ion-red-50`, `--ion-red-100`, `--ion-red-200`, …

## Components

### srp
- `AiSmartFilter` — P14 AI Smart filter  no GEMS component exists this is the screenshot-led
- `BusRating` — GEMS DroidRating (Bus LOB, Amount true) as nested in the bus result
- `BusTuple` — P15 bus result card  GEMS DroidTupple-India (Live). Time pair, duration
- `DateSheet` — P17 date-selection sheet  screenshot-led, no GEMS component. Bottom sheet
- `EndOfResults` — P20 end of results  screenshot-led, no GEMS component. Centred label between
- `FeatureCard` — P12 promotional feature card (GEMS Feature Card, 130  105 dp). The card is
- `FeatureCardRail` — P12 promotional discovery rail  GEMS Feature Cards Component. Full-width
- `FilterChip` — P13 quick filter chip  GEMS DroidFilterChips. Toggles a filter from the
- `FilterRail` — P13 filter control rail  GEMS Top Filter. Horizontally scrolling row of
- `FilterSheet` — P16 sort  filter sheet  screenshot-led sheet (entered from GEMS
- `FilterSortChip` — P13 Filter  Sort entry  GEMS DroidFilterSort2.0 with Boolean Badge.
- `FreeCancellationCard` — P19 free-cancellation opt-in card  screenshot-led, no GEMS component. Promo
- `HorizontalRail` — P05 horizontal rail  screenshot-led, no GEMS component. The full-funnel
- `OfferRibbon` — GEMS DroidOfferStrip (Standard 1 Line) as the yellow ribbon pinned to the
- `RayFab` — P03 floating Ask Ray entry  screenshot-led, no GEMS component. Gradient pill
- `RaySheet` — P21 Ask Ray conversation sheet  screenshot-led, no GEMS component. Bottom
- `ResultModeTabs` — P11 search-results mode switch  GEMS Top tabs, Short variant. Two fixed
- `ResultsLoader` — P04 results loader skeleton  screenshot-led, no GEMS component. Shimmer
- `RouteHeader` — P01 route-context top bar for search results  GEMS DroidTopNavigation

### feedback
- `Alert` — Persistent in-page message, shown directly beneath the top nav. For
- `Coachmark` — Dark contextual tip pointing at a newly introduced control. One per screen,
- `LoadingIndicator` — Inline progress spinner for search, filter-apply and save. The SRP's named
- `Snackbar` — Brief confirmation anchored near the bottom of the screen. One line of text
- `Tooltip` — Hover/focus description for an unlabelled control. Touch devices never see

### navigation
- `BottomNav` — Persistent bar for the app's core destinations (Home, Explore, Bookings,
- `Tabs` — Section tabs within one screen. The selected tab carries the red underline
- `TopNav` — Screen top bar. Title, overline and subtitle each truncate to one line, so

### information
- `BottomSheet` — Bottom sheet over a scrim  filters, calendar, fare breakup and bus details
- `Callout` — Bordered aside for secondary information tied to the content next to it 
- `Carousel` — Horizontally snapping card row  Home campaign tiles and offer rails.
- `Dialog` — Centred modal for a decision that blocks the flow  cancellation, leaving a
- `Divider` — Horizontal rule carrying the Ions border token and vertical rhythm.
- `List` — Rounded surface that groups ListItem / rows and draws the hairline
- `ListItem` — One row inside a List /. Pass onClick to make it actionable  the row
- `Pagination` — Dot position indicator. Pair with a Carousel / or any horizontally
- `RatingTag` — Crystal rating pill for generic rating labels. Inside a bus result card use
- `Table` — Comparison table on a scrollable surface  fare breakup, policy grids.
- `Tag` — Small status label  amenity flags, NEW, Primo. Read-only: if it can be
- `TitleBlock` — Section header: title, optional supporting line, optional trailing action.

### details
- `BusDetailsSheet` — P24 bus-detail sheet  mixed GEMS: DroidRating is verified sub-anatomy,
- `BusRoute` — P26 Bus route section in bus details  the full service route as a
- `DetailSection` — P24 bus-detail section  part of the bus-details sheet (no GEMS component).
- `PolicyList` — P25 other-policies list  no exact GEMS component verified. Child, luggage,
- `PolicyTable` — P25 cancellation policy table  no exact GEMS component verified. Refund
- `ReviewsExplorer` — P27 reviews explorer  no GEMS shell, filter or sort component verified
- `ReviewTuple` — P27 review tuple  GEMS Android-ReviewTuple (candidate name only, node not
- `RouteTimeline` — P26 boarding/dropping point timeline in bus details  no exact GEMS component

### input
- `Button` — Crystal common button. Minimum height is the 44px Ions touch target.
- `Chip` — Compact filter or selection control. On the SRP these carry the filter rail
- `ChipGroup` — Wrapping row for chips. Supplies the Ions gap so chips never touch.
- `Choice` — A single radio or checkbox row with its label. Group radios by giving them
- `ChoiceList` — Fieldset that groups related Choice / rows and names them for assistive
- `IconButton` — Borderless 44px icon action. Used for Back, Close, overflow and share
- `LoginButton` — RESTRICTED. Third-party sign-in button. Only for providers formally added to
- `SearchField` — Pill search input with a leading Ions search glyph. Used for city lookup and
- `SegmentedControl` — Mutually exclusive options shown side by side  the SRP List/Map switch.
- `Select` — Compact single-select built on the shared field anatomy. On phone screens a
- `Slider` — PROVISIONAL. Range input for continuous values such as a fare or departure
- `Stepper` — Increment/decrement control for small counts  passengers, luggage, quantity.
- `Switch` — Immediate-effect toggle  the change applies as soon as it flips, with no
- `TextField` — Labelled text input  the Customer Information name/phone/email pattern.

### checkout
- `ContactDetailsCard` — P33 contact-details card  screenshot-led, no GEMS contact component was
- `PassengerCard` — P34 passenger-selection card  screenshot-led, no GEMS passenger-card
- `PointList` — P31 point-selection list card  GEMS Android-Bp-Selection candidate, not
- `PointRow` — P30 boarding/dropping point row  GEMS Android-Bp-Selection candidate,
- `PointTabs` — P29 sequential point-selection header  GEMS Android-Bp-Selection is a
- `TripSummary` — P32 selected-trip summary  screenshot-led, no GEMS trip-summary component

### persuasion
- `Coupon` — Dashed promo-code card. Pair with a copy or apply action  a coupon the user
- `Nudge` — Low-emphasis prompt encouraging a feature without interrupting the task.
- `OfferStrip` — Single-line tinted banner announcing a deal attached to a service or
- `RedDeal` — RESTRICTED treatment for the proprietary redDeal offer. The red gradient and

### seats
- `FareSheet` — P28 fare-breakup sheet  GEMS Android-SL-PostSelection--Footer is a
- `SeatMap` — P22 deck seat map  screenshot-led GEMS Android Bus graphic is a
- `SeatPill` — P02 selected-seat pill  part of the Android-SL-PostSelection--Footer
- `SeatSelectionFooter` — P02 sticky selection footer  GEMS Android-SL-PostSelection--Footer
- `SeatTray` — P23 bus-summary peek tray  mixed GEMS: DroidRating is verified

### home
- `HomeBottomNav` — P10 home bottom navigation  screenshot-led, candidate, not node-verified.
- `HomeCampaign` — P09 home promotion surface, campaign banner  screenshot-led, candidate, not
- `HomeOffers` — P09 home promotion surface, offer rail  screenshot-led, candidate, not
- `HomeSearchButton` — P07 journey search composer, primary CTA  GEMS AndroidSearchSection,
- `HomeServices` — P06 service-category strip  GEMS AndroidSearchSection page family,
- `JourneySearch` — P07 journey search composer  GEMS AndroidSearchSection, candidate, not
- `LocationSearch` — P35 location selection search  GEMS AndroidSearchSection, candidate, not
- `WomenBookingToggle` — P08 booking preference row  screenshot-led, candidate, not node-verified.

### foundations
- `Icon` — Ions line icon. Strokes inherit currentColor, so colour comes from the
- `IonsRoot` — Root wrapper that establishes the Ions token scope and the Android type
- `Text` — Typography primitive. Applies one type- role class from the Ions

### social
- `RatingInput` — Post-trip rating scale. Each point carries a word as well as a number, so
- `Timer` — Countdown for time-boxed actions  held seats, payment windows. Display
