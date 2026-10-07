FilterSheet from india-bus-ds. Use via `window.IndiaBusDS.FilterSheet` (bundle loaded from the root `_ds_bundle.js`).

P16 sort & filter sheet — screenshot-led sheet (entered from GEMS
`DroidFilterChips`). Bottom sheet with a categories rail (AI Smart filter
first), one options panel per category and a Clear all / Apply footer.
Absolutely positioned over the phone viewport: render it inside
`IonsRoot device`.

## Props

```ts
interface FilterSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Categories rail and their option panels. Defaults to the kit's calibrated set. */
  categories?: FilterSheetCategory[];
  /** Controlled active category id. */
  category?: string;
  /** Initial active category when uncontrolled. */
  defaultCategory?: string;
  /** Initial AI Smart filter textarea text. */
  aiQuery?: string;
  onCategoryChange?: (id: string) => void;
  onClear?: () => void;
  onApply?: () => void;
  onClose?: () => void;
}
```

## Examples

### AiSmartFilter

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <FilterSheet open category="ai" />
  </IonsRoot>
)
```

### SortBy

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <FilterSheet open category="sort" />
  </IonsRoot>
)
```

### BusOperator

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <FilterSheet open category="operator" />
  </IonsRoot>
)
```
