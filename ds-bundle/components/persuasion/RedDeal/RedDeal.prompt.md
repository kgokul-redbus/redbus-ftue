RedDeal from india-bus-ds. Use via `window.IndiaBusDS.RedDeal` (bundle loaded from the root `_ds_bundle.js`).

RESTRICTED treatment for the proprietary redDeal offer. The red gradient and
badge are reserved for genuine redDeal inventory — never for generic promos.

## Props

```ts
interface RedDealProps {
  title: React.ReactNode;
  /** Value-led explanation of what the user receives. */
  description?: React.ReactNode;
  /** Badge text. Defaults to the proprietary "redDeal" label. */
  badge?: string;
  /** Trailing content such as a `<Button />` or price block. */
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 328 }}>
    <RedDeal
      title="₹180 off on this Zing Bus service"
      description="redDeal fares are negotiated with the operator for selected departures — the discount is already applied at checkout."
    />
  </div>
)
```

### WithFare

```jsx
() => (
  <div style={{ width: 328 }}>
    <RedDeal
      title="Chandigarh → Delhi ISBT Kashmere Gate"
      description="IntrCity SmartBus A/C Sleeper · 22:30 → 05:45"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          marginTop: 12,
        }}
      >
        <span className="type-title-3">₹649</span>
        <span className="type-caption" style={{ textDecoration: 'line-through' }}>
          ₹829
        </span>
        <span className="type-caption">You save ₹180</span>
      </div>
    </RedDeal>
  </div>
)
```

### WithAction

```jsx
() => (
  <div style={{ width: 328 }}>
    <RedDeal
      title="redDeal seats left on the 21:15 to Jaipur"
      description="Laxmi Holidays A/C Seater from Zirakpur Chowk. redDeal pricing ends once these seats are sold."
    >
      <div style={{ marginTop: 16 }}>
        <Button variant="primary" block>
          Select seats · ₹899
        </Button>
      </div>
    </RedDeal>
  </div>
)
```

### WithBadgeVariant

```jsx
() => (
  <div style={{ width: 328 }}>
    <RedDeal
      badge="redDeal Plus"
      title="Flat ₹250 off on Ambala Cantt departures"
      description="Available to redBus members on redDeal inventory only. One booking per traveller per week."
    >
      <div style={{ marginTop: 12 }}>
        <Tag tone="brand">Ends 30 Sep</Tag>
      </div>
    </RedDeal>
  </div>
)
```
