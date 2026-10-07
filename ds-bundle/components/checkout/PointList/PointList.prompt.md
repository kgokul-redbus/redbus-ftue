PointList from india-bus-ds. Use via `window.IndiaBusDS.PointList` (bundle loaded from the root `_ds_bundle.js`).

P31 point-selection list card — GEMS `Android-Bp-Selection` candidate, not
node-verified. Rounded elevated card with a heading and `PointRow`s sharing
one selected state. In the kit, picking a boarding point advances to the
dropping stage after ~270ms and a dropping point advances to Passenger
Information; that navigation belongs to the screen, via `onValueChange`.
The kit's screen surface behind it is `--ff-canvas` (#f4f3f8).

## Props

```ts
interface PointListProps {
  /** Card heading, e.g. "All boarding points in Delhi". */
  heading: string;
  points: PointListItem[];
  /** Controlled selected point id (single selection shared across rows). */
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
  /** Render the kit's scroll region (`.ff-scroll.ff-point-scroll`) around the card. Its height is `calc(100% - 202px)` of the */
  scroll?: boolean;
}
```

## Examples

### BoardingPoints

```jsx
() => (
  <Screen>
    <PointList heading="All boarding points in Delhi" points={boarding} />
  </Screen>
)
```

### BoardingSelected

```jsx
() => (
  <Screen>
    <PointList heading="All boarding points in Delhi" points={boarding} value="Shop no.35 old delhi railway station fatehpuri parking" />
  </Screen>
)
```

### DroppingPoints

```jsx
() => (
  <Screen>
    <PointList heading="All dropping points in Ganganagar (Sri Ganganagar)" points={dropping} value="Lalgarh" />
  </Screen>
)
```
