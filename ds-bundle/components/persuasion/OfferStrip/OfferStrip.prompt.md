OfferStrip from india-bus-ds. Use via `window.IndiaBusDS.OfferStrip` (bundle loaded from the root `_ds_bundle.js`).

Single-line tinted banner announcing a deal attached to a service or
category. Sits inside a card or above a list — not full-bleed.

## Props

```ts
interface OfferStripProps {
  children?: React.ReactNode;
  /** Leading adornment, normally an `<Icon />` such as `ion-offer`. */
  icon?: React.ReactNode;
  /** Trailing content, e.g. a tertiary action. */
  trailing?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 328 }}>
    <OfferStrip icon={<Icon name="ion-offer" size="sm" />}>
      Save ₹200 with FIRST200 on this service
    </OfferStrip>
  </div>
)
```

### WithAction

```jsx
() => (
  <div style={{ width: 328 }}>
    <OfferStrip
      icon={<Icon name="ion-offer" size="sm" />}
      trailing={<Button variant="tertiary">Apply</Button>}
    >
      15% off up to ₹250 with MONSOON15
    </OfferStrip>
  </div>
)
```

### WithoutIcon

```jsx
() => (
  <div style={{ width: 328 }}>
    <OfferStrip>₹100 cashback on UPI payments above ₹500</OfferStrip>
  </div>
)
```

### InServiceCard

```jsx
() => (
  <div
    style={{
      width: 328,
      padding: 16,
      display: 'grid',
      gap: 12,
      background: 'var(--surface-neutral-lowest-default)',
      border: '1px solid var(--border-neutral-low-default)',
      borderRadius: 'var(--radius-xl)',
    }}
  >
    <div>
      <div className="type-title-3">Zing Bus Maxx</div>
      <div className="type-caption">22:30 Zirakpur Chowk → 05:45 Delhi ISBT Kashmere Gate</div>
    </div>
    <OfferStrip icon={<Icon name="ion-offer" size="sm" />}>
      Save ₹180 on this departure with ZINGBUS100
    </OfferStrip>
  </div>
)
```
