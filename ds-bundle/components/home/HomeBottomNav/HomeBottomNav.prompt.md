HomeBottomNav from india-bus-ds. Use via `window.IndiaBusDS.HomeBottomNav` (bundle loaded from the root `_ds_bundle.js`).

P10 home bottom navigation — screenshot-led, candidate, not node-verified.
Five tabs with an optional `ff-nav-badge`. 111px tall (includes the gesture
area) and absolutely pinned to the bottom of the phone canvas: render it
inside `IonsRoot device`.

## Props

```ts
interface HomeBottomNavProps {
  items?: HomeNavItem[];
  /** Controlled current item id. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
}
```

## Examples

### HomeActive

```jsx
() => (
  <IonsRoot device style={{ minHeight: 0, height: 140, background: '#fff' }}>
    <HomeBottomNav value="home" />
  </IonsRoot>
)
```

### OffersActive

```jsx
() => (
  <IonsRoot device style={{ minHeight: 0, height: 140, background: '#fff' }}>
    <HomeBottomNav value="offers" />
  </IonsRoot>
)
```
