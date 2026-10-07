FilterSortChip from india-bus-ds. Use via `window.IndiaBusDS.FilterSortChip` (bundle loaded from the root `_ds_bundle.js`).

P13 "Filter & Sort" entry — GEMS `DroidFilter&Sort2.0` with Boolean `Badge`.
Always the first item in a `FilterRail`; the badge reflects how many filters
are applied.

## Props

```ts
interface FilterSortChipProps {
  /** Applied-filter count. `0` or omitted hides the red badge. */
  count?: number;
  /** Opens the sort and filter sheet in production. */
  onClick?: () => void;
}
```

## Examples

### NoFilters

```jsx
() => (
  <Phone>
    <FilterRail>
      <FilterSortChip />
    </FilterRail>
  </Phone>
)
```

### OneApplied

```jsx
() => (
  <Phone>
    <FilterRail>
      <FilterSortChip count={1} />
    </FilterRail>
  </Phone>
)
```
