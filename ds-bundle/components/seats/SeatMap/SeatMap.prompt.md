SeatMap from india-bus-ds. Use via `window.IndiaBusDS.SeatMap` (bundle loaded from the root `_ds_bundle.js`).

P22 deck seat map — screenshot-led; GEMS `Android Bus graphic` is a
candidate asset only and does not verify deck or seat geometry. Lower and
upper sleeper decks with available, sold, male/female-restricted and
selected seats, plus the "Know your seat" legend. The kit only draws the
28 × 61dp sleeper berth; there is no seater geometry.

The scroll region is absolutely positioned 112dp from the top (under the
status bar and app bar) of the phone canvas: render it inside
`IonsRoot device`, with a `SeatTray` as sibling.

## Props

```ts
interface SeatMapProps {
  /** Lower/upper decks, rendered side by side in a horizontal rail. */
  decks: SeatDeck[];
  /** Controlled selected seat ids. */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (ids: string[]) => void;
  /** Shows the "Know your seat" legend below the decks. Default `true`. */
  legend?: boolean;
}
```

## Examples

### Loaded

```jsx
() => (
  <IonsRoot device style={canvas}>
    <AppBar />
    <SeatMap decks={decks} />
    <SeatTray photo {...tray} footer={<SeatSelectionFooter count={0} total={0} />} />
  </IonsRoot>
)
```

### OneSeatSelected

```jsx
() => (
  <IonsRoot device style={canvas}>
    <AppBar />
    <SeatMap decks={decks} value={['L25']} />
    <SeatTray photo {...tray} hasSelection footer={<SeatSelectionFooter count={1} total={950} />} />
  </IonsRoot>
)
```

### TwoSeatsSelected

```jsx
() => (
  <IonsRoot device style={canvas}>
    <AppBar />
    <SeatMap decks={decks} value={['L25', 'U17']} />
    <SeatTray photo {...tray} hasSelection footer={<SeatSelectionFooter count={2} total={1850} />} />
  </IonsRoot>
)
```
