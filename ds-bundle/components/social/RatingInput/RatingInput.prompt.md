RatingInput from india-bus-ds. Use via `window.IndiaBusDS.RatingInput` (bundle loaded from the root `_ds_bundle.js`).

Post-trip rating scale. Each point carries a word as well as a number, so
the meaning doesn't depend on the user inferring the scale.

## Props

```ts
interface RatingInputProps {
  /** Labels from worst to best. The score shown on each item is its 1-based position. Defaults to the kit's five-point scale. */
  labels?: string[];
  /** Controlled 1-based selection. */
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  /** Accessible name for the group. */
  label?: string;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      How was your trip to Delhi ISBT Kashmere Gate?
    </div>
    <RatingInput label="Rate your trip with Zing Bus Maxx" />
  </div>
)
```

### Selected

```jsx
() => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      Rate Zing Bus Maxx
    </div>
    <RatingInput value={4} label="Rate Zing Bus Maxx" />
    <div className="type-caption" style={{ marginTop: 8 }}>
      You rated this trip Good. Tell us what worked.
    </div>
  </div>
)
```

### LowScore

```jsx
() => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      Rate Laxmi Holidays · 21:15 Zirakpur Chowk → Jaipur Sindhi Camp
    </div>
    <RatingInput value={2} label="Rate Laxmi Holidays" />
    <div className="type-caption" style={{ marginTop: 8 }}>
      Sorry about that. What went wrong — boarding, cleanliness or delay?
    </div>
  </div>
)
```

### CustomLabels

```jsx
() => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      How punctual was the IntrCity SmartBus?
    </div>
    <RatingInput
      labels={['Very late', 'Late', 'On time', 'Early', 'Very early']}
      value={3}
      label="Rate punctuality"
    />
  </div>
)
```
