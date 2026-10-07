Alert from india-bus-ds. Use via `window.IndiaBusDS.Alert` (bundle loaded from the root `_ds_bundle.js`).

Persistent in-page message, shown directly beneath the top nav. For
transient confirmation use `<Snackbar />`.

## Props

```ts
interface AlertProps {
  title: React.ReactNode;
  /** Second line of detail. Omit for a single-line alert. */
  description?: React.ReactNode;
  /** Sets both the colour treatment and the default glyph. */
  tone?: "info" | "success" | "warning" | "error";
  /** Override the tone's default icon. */
  icon?: React.ReactNode;
  /** Trailing action, normally a tertiary `<Button />`. */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### Tones

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Alert
      tone="info"
      title="Boarding point updated"
      description="Zing Bus now picks up from Sector 43 Bus Terminal at 21:15."
    />
    <Alert
      tone="success"
      title="₹180 cashback applied"
      description="Coupon SAVEBIG is active on this booking."
    />
    <Alert
      tone="warning"
      title="Only 3 seats left at this fare"
      description="Fares on the 21:30 Chandigarh → Delhi service change with demand."
    />
    <Alert
      tone="error"
      title="Seats released, your selection expired"
      description="Seats L4 and L5 are back in the pool. Please pick your seats again."
    />
  </div>
)
```

### WithAction

```jsx
() => (
  <div style={{ width: 328 }}>
    <Alert
      tone="warning"
      title="Payment pending"
      description="Complete payment within 08:00 minutes or the booking is cancelled."
      action={<Button variant="tertiary">Retry</Button>}
    />
  </div>
)
```

### TitleOnly

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Alert tone="success" title="Ticket sent to +91 98xxx 41207" />
    <Alert tone="error" title="No buses found for Ambala Cantt → Jaipur Sindhi Camp" />
  </div>
)
```

### OperatorNotice

```jsx
() => (
  <div style={{ width: 328 }}>
    <Alert
      tone="info"
      title="Delhi ISBT Kashmere Gate entry is via Gate 3"
      description="IntrCity SmartBus drops at the outer bay. Allow 10 minutes to reach the metro."
      action={<Button variant="tertiary">Map</Button>}
    />
  </div>
)
```
