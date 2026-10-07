HomeServices from india-bus-ds. Use via `window.IndiaBusDS.HomeServices` (bundle loaded from the root `_ds_bundle.js`).

P06 service-category strip — GEMS `AndroidSearchSection` page family,
candidate, not node-verified. The redBus service tiles are production
artwork, never rebuilt from text: the kit crops its Home screenshot, the
binding renders the extracted crop `ib-art-home-services` (356 × 74).
Carries the kit's 48px top margin (status-bar offset) — place it first on a
Home screen.

## Props

```ts
interface HomeServicesProps {
  /** Accessible name for the artwork strip. */
  label?: string;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <HomeServices />
  </div>
)
```
