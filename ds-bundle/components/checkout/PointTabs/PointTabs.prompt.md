PointTabs from india-bus-ds. Use via `window.IndiaBusDS.PointTabs` (bundle loaded from the root `_ds_bundle.js`).

P29 sequential point-selection header — GEMS `Android-Bp-Selection` is a
candidate only, not node-verified. Two fixed stages (Boarding points →
Dropping points) with a 3px brand underline on the active stage; the
completed stage keeps its selected point as supporting text. Sits directly
under the checkout app bar, full-bleed at 360dp.

## Props

```ts
interface PointTabsProps {
  /** Controlled active stage. */
  value?: "boarding" | "dropping";
  defaultValue?: "boarding" | "dropping";
  onValueChange?: (stage: PointStage) => void;
  /** Boarding tab supporting text: the origin city while boarding is pending (kit: "Delhi"), then the selected boarding point */
  boardingLabel: string;
  /** Dropping tab supporting text: the destination city (kit: "Ganganagar (Sri Ganganagar)"), then the selected dropping poin */
  droppingLabel: string;
  /** The boarding stage has a chosen point, so `boardingLabel` is that point rather than the city: production shows it in dar */
  boardingChosen?: boolean;
  /** As `boardingChosen`, for the dropping stage. */
  droppingChosen?: boolean;
}
```

## Examples

### Boarding

```jsx
() => (
  <Phone>
    <PointTabs value="boarding" boardingLabel="Delhi" droppingLabel="Ganganagar (Sri Ganganagar)" />
  </Phone>
)
```

### DroppingAfterBoarding

```jsx
() => (
  <Phone>
    <PointTabs
      value="dropping"
      boardingLabel="Shop no.35 old delhi railway station fatehpuri parking"
      droppingLabel="Ganganagar (Sri Ganganagar)"
      boardingChosen
    />
  </Phone>
)
```

### BothSelected

```jsx
() => (
  <Phone>
    <PointTabs value="dropping" boardingLabel="Bahadurgarh bypass" droppingLabel="Lalgarh" boardingChosen droppingChosen />
  </Phone>
)
```
