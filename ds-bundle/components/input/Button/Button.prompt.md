Button from india-bus-ds. Use via `window.IndiaBusDS.Button` (bundle loaded from the root `_ds_bundle.js`).

Crystal common button. Minimum height is the 44px Ions touch target.

## Props

```ts
interface ButtonProps {
  children?: React.ReactNode;
  /** `primary` is the single filled call to action per screen, `secondary` the outlined companion, `tertiary` the borderless  */
  variant?: "primary" | "secondary" | "tertiary";
  /** Stretch to the container width — the funnel's sticky footer pattern. */
  block?: boolean;
  /** Leading adornment, normally an `<Icon />`. */
  startIcon?: React.ReactNode;
  /** Trailing adornment, normally an `<Icon />`. */
  endIcon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### Variants

```jsx
() => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary">Search buses</Button>
    <Button variant="secondary">Change date</Button>
    <Button variant="tertiary">View all</Button>
  </div>
)
```

### WithIcons

```jsx
() => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary" startIcon={<Icon name="ion-search" size="sm" />}>
      Search
    </Button>
    <Button variant="secondary" endIcon={<Icon name="ion-arrow-forward" size="sm" />}>
      Continue
    </Button>
  </div>
)
```

### Disabled

```jsx
() => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" disabled>
      Select seats to continue
    </Button>
  </div>
)
```

### FooterAction

```jsx
() => (
  <div style={{ width: 328, padding: 16, background: 'var(--surface-neutral-lowest-default)' }}>
    <Button variant="primary" block>
      Continue · ₹1,798
    </Button>
  </div>
)
```
