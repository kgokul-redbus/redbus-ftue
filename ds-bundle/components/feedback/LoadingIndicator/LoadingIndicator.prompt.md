LoadingIndicator from india-bus-ds. Use via `window.IndiaBusDS.LoadingIndicator` (bundle loaded from the root `_ds_bundle.js`).

Inline progress spinner for search, filter-apply and save. The SRP's named
loading states (`srp:loading`, `srp:filter-loading`) use this.

## Props

```ts
interface LoadingIndicatorProps {
  /** Text beside the spinner. Defaults to "Loading…". */
  children?: React.ReactNode;
  /** Hides the text and keeps only the spinner. */
  iconOnly?: boolean;
}
```

## Examples

### SearchingRoute

```jsx
() => (
  <div style={{ width: 328 }}>
    <LoadingIndicator>Searching Chandigarh → Delhi</LoadingIndicator>
  </div>
)
```

### ApplyingFilters

```jsx
() => (
  <div style={{ width: 328 }}>
    <LoadingIndicator>Applying filters · A/C Sleeper</LoadingIndicator>
  </div>
)
```

### IconOnly

```jsx
() => (
  <div style={{ width: 328 }}>
    <LoadingIndicator iconOnly />
  </div>
)
```

### ConfirmingPayment

```jsx
() => (
  <div
    style={{
      width: 328,
      padding: 24,
      display: 'flex',
      justifyContent: 'center',
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <LoadingIndicator>Confirming your ₹1,798 payment</LoadingIndicator>
  </div>
)
```
