HomeSearchButton from india-bus-ds. Use via `window.IndiaBusDS.HomeSearchButton` (bundle loaded from the root `_ds_bundle.js`).

P07 journey search composer, primary CTA — GEMS `AndroidSearchSection`,
candidate, not node-verified. 328px red pill with the search icon, placed
after `WomenBookingToggle` in the Home hero.

## Props

```ts
interface HomeSearchButtonProps {
  label?: string;
  onClick?: () => void;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 360, background: '#fff', paddingBottom: 14 }}>
    <HomeSearchButton />
  </div>
)
```
