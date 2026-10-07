ResultModeTabs from india-bus-ds. Use via `window.IndiaBusDS.ResultModeTabs` (bundle loaded from the root `_ds_bundle.js`).

P11 search-results mode switch — GEMS `Top tabs`, `Short` variant. Two fixed
full-width tabs with the brand underline, sitting directly under the
`RouteHeader`.

## Props

```ts
interface ResultModeTabsProps {
  /** Modes in display order. Defaults to the production Buses/Trains pair. */
  modes?: string[];
  /** Controlled selected mode. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (mode: string) => void;
}
```

## Examples

### BusesSelected

```jsx
() => (
  <Phone>
    <ResultModeTabs value="Buses" />
  </Phone>
)
```

### TrainsSelected

```jsx
() => (
  <Phone>
    <ResultModeTabs value="Trains" />
  </Phone>
)
```
