FeatureCard from india-bus-ds. Use via `window.IndiaBusDS.FeatureCard` (bundle loaded from the root `_ds_bundle.js`).

P12 promotional feature card (GEMS `Feature Card`, 130 × 105 dp). The card is
product artwork, not composed UI — never rebuild Primo or Exclusive art from
text and shapes. Place cards inside a `FeatureCardRail`.

## Props

```ts
interface FeatureCardProps {
  /** `primo` and `exclusive` render the production campaign artwork (GEMS `Feature Card` default and inverted). `custom` rend */
  variant: "primo" | "exclusive" | "custom";
  /** Artwork URL for `custom` cards. 130 × 105 dp; supply 2× for sharpness. */
  imageSrc?: string;
  /** Required: the card is image-only, so this is its only accessible name. */
  label: string;
  onClick?: () => void;
}
```

## Examples

### Primo

```jsx
() => <FeatureCard variant="primo" label="Primo rising stars on redBus" />
```

### Exclusive

```jsx
() => <FeatureCard variant="exclusive" label="Exclusive hand picked deals for you" />
```

## Related

`FeatureCardRail`
