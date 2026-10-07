Slider from india-bus-ds. Use via `window.IndiaBusDS.Slider` (bundle loaded from the root `_ds_bundle.js`).

PROVISIONAL. Range input for continuous values such as a fare or departure
window. Marked for rework in the source system — confirm before shipping it
in a flow.

## Props

```ts
interface SliderProps {
  /** Accessible name when no visible label is present. */
  label?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### FareRange

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <Text role="label">Maximum fare</Text>
      <Text role="body" strong tabular>
        ₹1,200
      </Text>
    </div>
    <Slider label="Maximum fare" min={400} max={2500} step={50} defaultValue={1200} />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        ₹400
      </Text>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        ₹2,500
      </Text>
    </div>
  </div>
)
```

### Positions

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 14 }}>
    {[600, 1400, 2500].map((value) => (
      <div key={value} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
          {`Buses under ₹${value.toLocaleString('en-IN')}`}
        </Text>
        <Slider
          label={`Maximum fare ₹${value}`}
          min={400}
          max={2500}
          step={50}
          defaultValue={value}
        />
      </div>
    ))}
  </div>
)
```

### Disabled

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Text role="label" style={{ color: 'var(--content-neutral-medium-default)' }}>
      Maximum fare
    </Text>
    <Slider label="Maximum fare" min={400} max={2500} step={50} defaultValue={900} disabled />
    <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
      Clear the ₹ filter to change this
    </Text>
  </div>
)
```
