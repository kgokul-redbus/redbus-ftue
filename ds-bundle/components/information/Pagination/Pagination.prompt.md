Pagination from india-bus-ds. Use via `window.IndiaBusDS.Pagination` (bundle loaded from the root `_ds_bundle.js`).

Dot position indicator. Pair with a `<Carousel />` or any horizontally
paged surface; the active dot widens rather than changing colour alone.

## Props

```ts
interface PaginationProps {
  /** Number of dots to render. */
  count: number;
  /** Zero-based active index. */
  activeIndex?: number;
  onSelect?: (index: number) => void;
  label?: React.ReactNode;
}
```

## Examples

### FirstOfThree

```jsx
() => (
  <div style={{ width: 328 }}>
    <Pagination count={3} activeIndex={0} label="Choose offer" />
  </div>
)
```

### MiddleOfFive

```jsx
() => (
  <div style={{ width: 328 }}>
    <Pagination count={5} activeIndex={2} label="Choose bus photo" />
  </div>
)
```

### UnderCampaignTile

```jsx
() => (
  <div style={{ width: 328 }}>
    <div
      style={{
        padding: 16,
        marginBottom: 12,
        background: 'var(--surface-brand-low-default)',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      <Text role="title-3">Chandigarh to Delhi from ₹649</Text>
      <Text role="caption">Overnight A/C sleepers · Live tracking</Text>
    </div>
    <Pagination count={4} activeIndex={1} label="Choose campaign" />
  </div>
)
```
