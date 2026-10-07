FilterChip from india-bus-ds. Use via `window.IndiaBusDS.FilterChip` (bundle loaded from the root `_ds_bundle.js`).

P13 quick filter chip — GEMS `DroidFilterChips`. Toggles a filter from the
rail; when selected it shows a close glyph and the `FilterSortChip` badge
should count it.

## Props

```ts
interface FilterChipProps {
  /** Production quick filter. Each kind carries its measured width and its own drawn glyph (`%`, AC vents, `₹` shield, sleepe */
  kind?: "deals" | "ac" | "free" | "sleeper";
  /** Label override. Defaults to the production label for `kind`. */
  children?: React.ReactNode;
  /** Applied state: brand fill plus a trailing close glyph. */
  selected?: boolean;
  onClick?: () => void;
}
```

## Examples

### ProductionKinds

```jsx
() => (
  <Phone>
    <FilterRail>
      <FilterChip kind="deals" />
      <FilterChip kind="ac" />
      <FilterChip kind="sleeper" />
    </FilterRail>
  </Phone>
)
```

### Selected

```jsx
() => (
  <Phone>
    <FilterRail>
      <FilterChip kind="deals" selected />
      <FilterChip kind="sleeper" selected />
    </FilterRail>
  </Phone>
)
```
