JourneySearch from india-bus-ds. Use via `window.IndiaBusDS.JourneySearch` (bundle loaded from the root `_ds_bundle.js`).

P07 journey search composer — GEMS `AndroidSearchSection`, candidate, not
node-verified. From/To rows with the swap button, and the date row with
quick-date pills. Empty rows show a grey placeholder; filled rows show the
small label above the city. The "Search buses" CTA is a separate sibling in
the kit (after the women-booking row): use `HomeSearchButton`.

## Props

```ts
interface JourneySearchProps {
  /** Origin city. Omit for the empty state (grey "From" placeholder). */
  origin?: string;
  /** Destination city. Omit for the empty state (grey "To" placeholder). */
  destination?: string;
  /** Journey date label, e.g. "Thu 9-Jul". */
  date?: string;
  /** Quick-date pills. The kit shows Today and Tomorrow. */
  quickDates?: QuickDate[];
  onOriginClick?: () => void;
  onDestinationClick?: () => void;
  onSwap?: () => void;
  onDateClick?: () => void;
  onQuickDate?: (value: string) => void;
}
```

## Examples

### Empty

```jsx
() => (
  <Phone>
    <JourneySearch date="Thu 9-Jul" />
  </Phone>
)
```

### Prefilled

```jsx
() => (
  <Phone>
    <JourneySearch origin="Delhi" destination="Ganganagar (Sri Ganganagar)" date="Thu 9-Jul" />
  </Phone>
)
```

### Tomorrow

```jsx
() => (
  <Phone>
    <JourneySearch origin="Bengaluru" destination="Hyderabad" date="Fri 10-Jul" />
  </Phone>
)
```
