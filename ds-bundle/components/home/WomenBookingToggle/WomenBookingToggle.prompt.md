WomenBookingToggle from india-bus-ds. Use via `window.IndiaBusDS.WomenBookingToggle` (bundle loaded from the root `_ds_bundle.js`).

P08 booking preference row — screenshot-led, candidate, not node-verified.
"Booking for women" with a Know more link and the kit's `ff-switch`, whose
state lives on `aria-pressed` exactly as in the kit.

## Props

```ts
interface WomenBookingToggleProps {
  /** Controlled on/off. Pass it to show the on state in a capture. */
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Row title, also the switch's accessible name. */
  label?: string;
  linkLabel?: string;
  onLinkClick?: () => void;
}
```

## Examples

### Off

```jsx
() => (
  <Phone>
    <WomenBookingToggle checked={false} />
  </Phone>
)
```

### On

```jsx
() => (
  <Phone>
    <WomenBookingToggle checked />
  </Phone>
)
```
