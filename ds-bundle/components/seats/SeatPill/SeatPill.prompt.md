SeatPill from india-bus-ds. Use via `window.IndiaBusDS.SeatPill` (bundle loaded from the root `_ds_bundle.js`).

P02 selected-seat pill — part of the `Android-SL-PostSelection--Footer`
candidate family (node not verified). Compact count chip carried into the
checkout trip summary after seat selection.

## Props

```ts
interface SeatPillProps {
  /** Selected seat count; the kit floors it at 1 ("1 seat", "2 seats"). */
  count: number;
}
```

## Examples

### OneSeat

```jsx
() => (
  <div style={{ width: 360, background: '#fff', padding: 16 }}>
    <SeatPill count={1} />
  </div>
)
```

### ThreeSeats

```jsx
() => (
  <div style={{ width: 360, background: '#fff', padding: 16 }}>
    <SeatPill count={3} />
  </div>
)
```
