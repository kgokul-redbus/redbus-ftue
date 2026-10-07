FeatureCardRail from india-bus-ds. Use via `window.IndiaBusDS.FeatureCardRail` (bundle loaded from the root `_ds_bundle.js`).

P12 promotional discovery rail — GEMS `Feature Cards Component`. Full-width
360dp strip under the mode tabs with a hairline below.

## Props

```ts
interface FeatureCardRailProps {
  /** `FeatureCard` elements. The rail scrolls horizontally when they overflow. */
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>
    <FeatureCardRail>
      <FeatureCard variant="primo" label="Primo rising stars on redBus" />
      <FeatureCard variant="exclusive" label="Exclusive hand picked deals for you" />
    </FeatureCardRail>
  </div>
)
```
