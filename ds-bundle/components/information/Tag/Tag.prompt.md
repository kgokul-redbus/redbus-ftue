Tag from india-bus-ds. Use via `window.IndiaBusDS.Tag` (bundle loaded from the root `_ds_bundle.js`).

Small status label — amenity flags, NEW, "Primo". Read-only: if it can be
tapped it should be a `<Chip />` instead.

## Props

```ts
interface TagProps {
  children?: React.ReactNode;
  /** `brand` is the red emphasis treatment used for NEW and redDeal. */
  tone?: "neutral" | "brand";
  /** Leading adornment, normally an `<Icon size="sm" />`. */
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### Neutral

```jsx
() => <Tag>Live tracking</Tag>
```

### Brand

```jsx
() => <Tag tone="brand">redDeal</Tag>
```

### WithIcon

```jsx
() => (
  <ChipGroup>
    <Tag icon={<Icon name="ion-bus" size="sm" />}>Live tracking</Tag>
    <Tag icon={<Icon name="ion-check-circle" size="sm" />}>Verified operator</Tag>
  </ChipGroup>
)
```

### AmenityRow

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChipGroup>
      <Tag>Charging point</Tag>
      <Tag>Blankets</Tag>
      <Tag>Water bottle</Tag>
      <Tag>Reading light</Tag>
      <Tag tone="brand">NEW</Tag>
    </ChipGroup>
  </div>
)
```
