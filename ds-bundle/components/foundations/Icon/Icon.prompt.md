Icon from india-bus-ds. Use via `window.IndiaBusDS.Icon` (bundle loaded from the root `_ds_bundle.js`).

Ions line icon. Strokes inherit `currentColor`, so colour comes from the
surrounding component rather than a prop.

## Props

```ts
interface IconProps {
  /** Ions catalogue id, e.g. `ion-bus`, `ion-search`, `ion-star`. */
  name: unknown;
  /** `sm` 18px, `md` 24px (default), `lg` 28px. */
  size?: "sm" | "md" | "lg";
  /** Accessible label. Omit for decorative icons sitting next to real text — the icon is then hidden from assistive technolog */
  label?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: SVGSVGElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<SVGSVGElement>;
}
```

## Examples

### Navigation

```jsx
() => (
  <div style={{ width: 328 }}>
    {group('Navigation and controls', [
      'ion-arrow-back',
      'ion-arrow-forward',
      'ion-chevron-down',
      'ion-chevron-up',
      'ion-close',
      'ion-menu',
      'ion-more',
      'ion-search',
      'ion-plus',
      'ion-minus',
      'ion-edit',
      'ion-copy',
    ])}
  </div>
)
```

### TravelAndBooking

```jsx
() => (
  <div style={{ width: 328 }}>
    {group('Travel and booking', [
      'ion-bus',
      'ion-location',
      'ion-calendar',
      'ion-swap',
      'ion-filter',
      'ion-sort',
      'ion-ticket',
      'ion-bookings',
      'ion-offer',
      'ion-home',
      'ion-home-filled',
      'ion-delete',
    ])}
  </div>
)
```

### StatusAndAccount

```jsx
() => (
  <div style={{ width: 328 }}>
    {group('Status', ['ion-check', 'ion-check-circle', 'ion-error', 'ion-info', 'ion-star'])}
    <div style={{ height: 16 }} />
    {group('Account', [
      'ion-user',
      'ion-account-circle',
      'ion-help',
      'ion-eye',
      'ion-eye-off',
    ])}
  </div>
)
```

### Sizes

```jsx
() => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
    {(['sm', 'md', 'lg'] as const).map((size) => (
      <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Icon name="ion-bus" size={size} label={`Bus ${size}`} />
        <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
          {size === 'sm' ? 'sm · 18px' : size === 'md' ? 'md · 24px' : 'lg · 28px'}
        </Text>
      </div>
    ))}
  </div>
);

const row = (name: IonIconName, label: string, color: string, background?: string) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color,
      ...(background ? { background, padding: '8px 12px', borderRadius: 8 } : null),
    }}
  >
    <Icon name={name} />
    <Text role="body" strong style={{ color: 'inherit' }}>
      {label}
    </Text>
  </div>
)
```

### ColourInheritance

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 10 }}>
    {row('ion-offer', 'Flat ₹150 off with ZINGFEST', 'var(--content-brand-high-default)')}
    {row('ion-check-circle', 'Booking confirmed · TK-4821-9930', 'var(--content-success-high-default)')}
    {row('ion-error', 'Payment failed — retry with UPI', 'var(--content-warning-high-default)')}
    {row('ion-location', 'Sector 43 Bus Terminal, Chandigarh', 'var(--content-neutral-medium-default)')}
    {row(
      'ion-bus',
      'Zing Bus is 12 min away',
      'var(--content-neutral-inverse-default)',
      'var(--surface-brand-high-default)',
    )}
  </div>
)
```

## Related

`IconButton`
