Callout from india-bus-ds. Use via `window.IndiaBusDS.Callout` (bundle loaded from the root `_ds_bundle.js`).

Bordered aside for secondary information tied to the content next to it —
policies, boarding guidance. Not for errors: use `<Alert />`.

## Props

```ts
interface CalloutProps {
  title?: React.ReactNode;
  /** Body copy under the title. */
  description?: React.ReactNode;
  /** Leading adornment, normally an `<Icon />`. */
  icon?: React.ReactNode;
  /** Inline action, normally a tertiary `<Button />`. */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 328 }}>
    <Callout
      icon={<Icon name="ion-info" />}
      title="Boarding point is 4 km from the city centre"
      description="Reach Sector 43 Bus Terminal at least 15 minutes before departure. The operator does not wait beyond the scheduled time."
    />
  </div>
)
```

### WithAction

```jsx
() => (
  <div style={{ width: 328 }}>
    <Callout
      icon={<Icon name="ion-info" />}
      title="Free cancellation until 12 Aug, 06:00"
      description="Cancel before the cut-off for a full refund to the original payment method."
      action={<Button variant="tertiary">View policy</Button>}
    />
  </div>
)
```

### TitleOnly

```jsx
() => (
  <div style={{ width: 328 }}>
    <Callout icon={<Icon name="ion-bus" />} title="Live tracking is available on this service" />
  </div>
)
```
