SeatSelectionFooter from india-bus-ds. Use via `window.IndiaBusDS.SeatSelectionFooter` (bundle loaded from the root `_ds_bundle.js`).

P02 sticky selection footer — GEMS `Android-SL-PostSelection--Footer`
(candidate name only, node not verified). Selected-seat count, live fare
total with the breakup affordance, and the primary CTA. Hidden while
`count` is 0. Render it as the last child of `SeatTray`, which pins it
42dp below the tray top.

## Props

```ts
interface SeatSelectionFooterProps {
  /** Number of selected seats; drives "1 seat selected" and visibility. */
  count: number;
  /** Live total in rupees, e.g. `900`. */
  total: number;
  /** CTA label. */
  ctaLabel?: string;
  /** Opens the `FareSheet` price breakup. */
  onFareClick?: () => void;
  onContinue?: () => void;
}
```

## Examples

### OneSeat

```jsx
() => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} hasSelection footer={<SeatSelectionFooter count={1} total={900} />} />
  </IonsRoot>
)
```

### TwoSeats

```jsx
() => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} hasSelection footer={<SeatSelectionFooter count={2} total={1850} />} />
  </IonsRoot>
)
```
