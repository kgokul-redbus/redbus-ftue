Snackbar from india-bus-ds. Use via `window.IndiaBusDS.Snackbar` (bundle loaded from the root `_ds_bundle.js`).

Brief confirmation anchored near the bottom of the screen. One line of text
and at most one action; it disappears on its own, so never put a required
choice here.

## Props

```ts
interface SnackbarProps {
  children?: React.ReactNode;
  /** Drives `data-open` — the slide-and-fade in from the bottom. */
  open?: boolean;
  /** Single inline action label, e.g. "Undo". */
  actionLabel?: string;
  onAction?: () => void;
}
```

## Examples

### WithAction

```jsx
() => (
  <Screen>
    <Snackbar open actionLabel="Undo">
      Boarding point changed to Zirakpur Chowk
    </Snackbar>
  </Screen>
)
```

### MessageOnly

```jsx
() => (
  <Screen>
    <Snackbar open>Ticket downloaded to your phone</Snackbar>
  </Screen>
)
```

### CouponRemoved

```jsx
() => (
  <Screen>
    <Snackbar open actionLabel="Reapply">
      Coupon MONSOON15 removed · ₹180 off lost
    </Snackbar>
  </Screen>
)
```
