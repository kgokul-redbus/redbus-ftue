FreeCancellationCard from india-bus-ds. Use via `window.IndiaBusDS.FreeCancellationCard` (bundle loaded from the root `_ds_bundle.js`).

P19 free-cancellation opt-in card — screenshot-led, no GEMS component. Promo
card in the results list with a ₹ shield headline and an opt-in switch.

## Props

```ts
interface FreeCancellationCardProps {
  /** Headline beside the ₹ shield. */
  title?: React.ReactNode;
  /** Controlled opt-in state (`aria-checked` on the switch). */
  checked?: boolean;
  /** Initial opt-in state when uncontrolled. */
  defaultChecked?: boolean;
  /** Supporting line under the opt-in label. */
  support?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}
```

## Examples

### OptedOut

```jsx
() => (
  <div style={{ width: 360 }}>
    <FreeCancellationCard checked={false} />
  </div>
)
```

### OptedIn

```jsx
() => (
  <div style={{ width: 360 }}>
    <FreeCancellationCard checked />
  </div>
)
```
