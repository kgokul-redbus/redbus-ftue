SeatTray from india-bus-ds. Use via `window.IndiaBusDS.SeatTray` (bundle loaded from the root `_ds_bundle.js`).

P23 bus-summary peek tray — mixed GEMS: `DroidRating` is verified
sub-anatomy, no complete operator-tray component is verified. Operator
summary with Primo mark and rating, a highlight rail, and the selection
footer. Absolutely positioned at the bottom of the phone canvas: render it
inside `IonsRoot device`. Drag physics are not ported.

## Props

```ts
interface SeatTrayProps {
  /** Operator name, e.g. "Pinky Gudiya Travels And Cargo". */
  operator: string;
  /** Prefixes the name with the "Primo☆" wordmark. */
  primo?: boolean;
  /** Trip line, e.g. "21:15 - 05:50 · Fri, 10 Jul". */
  meta?: string;
  /** Rating, e.g. "4.5". */
  rating?: string;
  /** Rating count, e.g. "278". */
  ratingCount?: string;
  highlights?: SeatHighlight[];
  /** Leading bus-photo tile in the highlight rail, as in production. `true` uses the calibrated operator photo; a string is a */
  photo?: string | boolean;
  /** Raises the tray to make room for the footer. Pass `true` together with a `SeatSelectionFooter` whose `count` is above 0. */
  hasSelection?: boolean;
  /** A `SeatSelectionFooter`. */
  footer?: React.ReactNode;
  /** Opens the `BusDetailsSheet` (operator row and handle). */
  onDetailsClick?: () => void;
}
```

## Examples

### Peek

```jsx
() => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} photo footer={<SeatSelectionFooter count={0} total={0} />} />
  </IonsRoot>
)
```

### WithSelection

```jsx
() => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} photo hasSelection footer={<SeatSelectionFooter count={1} total={900} />} />
  </IonsRoot>
)
```
