EndOfResults from india-bus-ds. Use via `window.IndiaBusDS.EndOfResults` (bundle loaded from the root `_ds_bundle.js`).

P20 end of results — screenshot-led, no GEMS component. Centred label between
two hairlines closing the bus list.

## Props

```ts
interface EndOfResultsProps {
  /** Divider label. */
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 360, background: 'var(--srp-results-surface, #f2f2f8)' }}>
    <EndOfResults />
  </div>
)
```

### CustomLabel

```jsx
() => (
  <div style={{ width: 360, background: 'var(--srp-results-surface, #f2f2f8)' }}>
    <EndOfResults>No more buses to Ganganagar on 9 Jul</EndOfResults>
  </div>
)
```
