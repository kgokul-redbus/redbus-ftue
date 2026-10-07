Coupon from india-bus-ds. Use via `window.IndiaBusDS.Coupon` (bundle loaded from the root `_ds_bundle.js`).

Dashed promo-code card. Pair with a copy or apply action — a coupon the user
can't act on belongs in `<OfferStrip />` instead.

## Props

```ts
interface CouponProps {
  /** Promo code, rendered in the brand colour with wide tracking. */
  code: string;
  /** What the code does, e.g. "Save ₹200 on the eligible service". */
  description?: React.ReactNode;
  /** Trailing action, normally a tertiary `<Button />` labelled Copy or Apply. */
  action?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 328 }}>
    <Coupon
      code="FIRST200"
      description="Save ₹200 on your first booking. Minimum fare ₹700."
      action={<Button variant="tertiary">Copy</Button>}
    />
  </div>
)
```

### MonsoonOffer

```jsx
() => (
  <div style={{ width: 328 }}>
    <Coupon
      code="MONSOON15"
      description="15% off up to ₹250 on Chandigarh — Delhi services booked before 30 Sep."
      action={<Button variant="tertiary">Copy</Button>}
    />
  </div>
)
```

### CodeOnly

```jsx
() => (
  <div style={{ width: 328 }}>
    <Coupon code="ZINGBUS100" action={<Button variant="tertiary">Copy</Button>} />
  </div>
)
```

### CouponList

```jsx
() => (
  <div style={{ width: 328, display: 'grid', gap: 12 }}>
    <Coupon
      code="FIRST200"
      description="Flat ₹200 off for first-time riders on redBus."
      action={<Button variant="tertiary">Copy</Button>}
    />
    <Coupon
      code="NIGHTRIDE50"
      description="₹50 off on overnight sleepers departing Delhi ISBT Kashmere Gate after 21:00."
      action={<Button variant="tertiary">Copy</Button>}
    />
  </div>
)
```
