FareSheet from india-bus-ds. Use via `window.IndiaBusDS.FareSheet` (bundle loaded from the root `_ds_bundle.js`).

P28 fare-breakup sheet — GEMS `Android-SL-PostSelection--Footer` is a
candidate for the underlying footer, not a verified fare-sheet match. Price
breakup per seat, seat count with total, and the continue CTA. Absolutely
positioned over the phone canvas: render it inside `IonsRoot device`.

## Props

```ts
interface FareSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** One row per selected seat; the total is summed from these. */
  lines: FareLine[];
  title?: string;
  ctaLabel?: string;
  onClose?: () => void;
  onContinue?: () => void;
}
```

## Examples

### OneSeat

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <FareSheet open lines={[{ seat: 'U17', price: 900 }]} />
  </IonsRoot>
)
```

### TwoSeats

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <FareSheet open lines={[{ seat: 'L25', price: 950 }, { seat: 'U17', price: 900 }]} />
  </IonsRoot>
)
```
