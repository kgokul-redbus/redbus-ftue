PolicyTable from india-bus-ds. Use via `window.IndiaBusDS.PolicyTable` (bundle loaded from the root `_ds_bundle.js`).

P25 cancellation policy table — no exact GEMS component verified. Refund
windows with and without free cancellation; the last column carries the
success treatment and production's green check. Horizontally scrollable. Place inside a `DetailSection`.

## Props

```ts
interface PolicyTableProps {
  rows: PolicyTableRow[];
  /** Column headings. */
  headings?: [string, string, string];
}
```

## Examples

### Cancellation

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="cancellation" title="Cancellation policy">
      <PolicyTable rows={rows} />
    </DetailSection>
  </div>
)
```

### SingleWindow

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="cancellation" title="Cancellation policy">
      <PolicyTable rows={rows.slice(0, 1)} />
    </DetailSection>
  </div>
)
```
