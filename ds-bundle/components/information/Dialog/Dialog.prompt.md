Dialog from india-bus-ds. Use via `window.IndiaBusDS.Dialog` (bundle loaded from the root `_ds_bundle.js`).

Centred modal for a decision that blocks the flow — cancellation, leaving a
partially filled form. Anything non-blocking belongs in a `<BottomSheet />`.

## Props

```ts
interface DialogProps {
  /** Drives the overlay's `data-open` state and the scale-in transition. */
  open?: boolean;
  children?: React.ReactNode;
  title?: React.ReactNode;
  /** Footer actions — dismissive action on the left, confirming on the right. */
  actions?: React.ReactNode;
  onDismiss?: () => void;
}
```

## Examples

### CancelBooking

```jsx
() => (
  <Screen>
      <Dialog
        open
        title="Cancel this booking?"
        actions={
          <>
            <Button variant="secondary">Keep booking</Button>
            <Button variant="primary">Cancel ticket</Button>
          </>
        }
      >
        <Text role="body">
          Zing Bus, Chandigarh → Delhi ISBT Kashmere Gate on 16 Aug, 21:30. You will be refunded ₹1,063 of ₹1,418 as
          per the operator&apos;s policy.
        </Text>
      </Dialog>
  </Screen>
)
```

### LeaveBooking

```jsx
() => (
  <Screen>
      <Dialog
        open
        title="Leave without booking?"
        actions={
          <>
            <Button variant="secondary">Stay</Button>
            <Button variant="primary">Leave</Button>
          </>
        }
      >
        <Text role="body">Seats L4 and L5 are held for 8 more minutes. If you leave now they go back to the pool.</Text>
      </Dialog>
  </Screen>
)
```

### PaymentFailed

```jsx
() => (
  <Screen>
      <Dialog
        open
        title="Payment could not be completed"
        actions={<Button variant="primary">Try another method</Button>}
      >
        <Text role="body">
          The UPI request for ₹1,418 timed out. No money was deducted. Your seats on IntrCity SmartBus are still held.
        </Text>
      </Dialog>
  </Screen>
)
```
