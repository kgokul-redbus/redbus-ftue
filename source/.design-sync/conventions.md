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
