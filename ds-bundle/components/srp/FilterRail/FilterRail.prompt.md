FilterRail from india-bus-ds. Use via `window.IndiaBusDS.FilterRail` (bundle loaded from the root `_ds_bundle.js`).

P13 filter control rail — GEMS `Top Filter`. Horizontally scrolling row of
the Filter & Sort entry and quick filter chips, directly above the AI Smart
filter.

## Props

```ts
interface FilterRailProps {
  /** A `FilterSortChip` first, then `FilterChip`s. Overflows horizontally. */
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => (
  <Phone>
    <FilterRail>
      <FilterSortChip />
      <FilterChip kind="deals" />
      <FilterChip kind="ac" />
      <FilterChip kind="sleeper" />
    </FilterRail>
  </Phone>
)
```

### FiltersApplied

```jsx
() => (
  <Phone>
    <FilterRail>
      <FilterSortChip count={2} />
      <FilterChip kind="deals" selected />
      <FilterChip kind="ac" selected />
      <FilterChip kind="sleeper" />
    </FilterRail>
  </Phone>
)
```
