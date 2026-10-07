RayFab from india-bus-ds. Use via `window.IndiaBusDS.RayFab` (bundle loaded from the root `_ds_bundle.js`).

P03 floating Ask Ray entry — screenshot-led, no GEMS component. Gradient pill
with the Ray sparkle, anchored to the phone viewport above the results
(absolutely positioned: render it as a direct child of `IonsRoot device`).

## Props

```ts
interface RayFabProps {
  /** Pill label. Defaults to the production "Ask Ray". */
  label?: string;
  /** Opens the `RaySheet` in production. */
  onClick?: () => void;
}
```

## Examples

### OverResults

```jsx
() => (
  <IonsRoot device style={{ minHeight: 0, height: 160, background: '#f6f5fa' }}>
    <RayFab />
  </IonsRoot>
)
```
