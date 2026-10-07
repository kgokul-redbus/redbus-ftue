SegmentedControl from india-bus-ds. Use via `window.IndiaBusDS.SegmentedControl` (bundle loaded from the root `_ds_bundle.js`).

Mutually exclusive options shown side by side — the SRP List/Map switch.
Use two or three segments; beyond that use tabs.

## Props

```ts
interface SegmentedControlProps {
  options: SegmentedOption[];
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Accessible name for the group, e.g. "View mode". */
  label?: string;
}
```

## Examples

### ListOrMap

```jsx
() => (
  <SegmentedControl
    label="View mode"
    options={[
      { value: 'list', label: 'List' },
      { value: 'map', label: 'Map' },
    ]}
    defaultValue="list"
  />
)
```

### MapSelected

```jsx
() => (
  <SegmentedControl
    label="View mode"
    options={[
      { value: 'list', label: 'List' },
      { value: 'map', label: 'Map' },
    ]}
    value="map"
  />
)
```

### ThreeSegments

```jsx
() => (
  <SegmentedControl
    label="Departure window"
    options={[
      { value: 'morning', label: 'Before 12:00' },
      { value: 'day', label: '12:00–18:00' },
      { value: 'night', label: 'After 18:00' },
    ]}
    defaultValue="night"
  />
)
```

### InFilterBar

```jsx
() => (
  <div
    style={{
      width: 328,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <span className="type-label">Chandigarh → Delhi · 12 Aug</span>
    <SegmentedControl
      label="Seat type"
      options={[
        { value: 'seater', label: 'Seater' },
        { value: 'sleeper', label: 'Sleeper' },
      ]}
      defaultValue="sleeper"
    />
  </div>
)
```
