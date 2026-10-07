DateSheet from india-bus-ds. Use via `window.IndiaBusDS.DateSheet` (bundle loaded from the root `_ds_bundle.js`).

P17 date-selection sheet — screenshot-led, no GEMS component. Bottom sheet
with a Mon–Sun week header and scrolling month grids showing disabled past
days, red weekends and the selected date. Absolutely positioned over the
phone viewport: render it inside `IonsRoot device`.

## Props

```ts
interface DateSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Months in the scroll area. Defaults to the kit's July (from 9 Jul) and August 2026. */
  months?: DateSheetMonth[];
  /** Controlled selected date key, `"<monthIndex>-<day>"`, e.g. `"0-9"` for 9 Jul. */
  value?: string;
  /** Initial selection when uncontrolled. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  onClose?: () => void;
}
```

## Examples

### NinthJuly

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <DateSheet open value="0-9" />
  </IonsRoot>
)
```

### WeekendSelected

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <DateSheet open value="0-11" />
  </IonsRoot>
)
```
