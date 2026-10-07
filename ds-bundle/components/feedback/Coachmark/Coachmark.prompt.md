Coachmark from india-bus-ds. Use via `window.IndiaBusDS.Coachmark` (bundle loaded from the root `_ds_bundle.js`).

Dark contextual tip pointing at a newly introduced control. One per screen,
and never blocking — the user must be able to ignore it and continue.

## Props

```ts
interface CoachmarkProps {
  title: React.ReactNode;
  /** Explanation — wraps to at most three lines. */
  description?: React.ReactNode;
  /** Label for the dismissive action, e.g. "Not now". */
  dismissLabel?: string;
  /** Label for the confirming action, e.g. "Show me". */
  confirmLabel?: string;
  onDismiss?: () => void;
  onConfirm?: () => void;
}
```

## Examples

### SeatMapTip

```jsx
() => (
  <div style={{ width: 280 }}>
    <Coachmark
      title="Pick your own seat"
      description="Tap any green seat on the 21:30 Zing Bus to choose a window or an aisle before you pay."
      dismissLabel="Not now"
      confirmLabel="Show me"
    />
  </div>
)
```

### LiveTrackingTip

```jsx
() => (
  <div style={{ width: 280 }}>
    <Coachmark
      title="Track your bus live"
      description="From 30 minutes before departure you can see exactly where the bus is on the Chandigarh → Delhi route."
      dismissLabel="Skip"
      confirmLabel="Try it"
    />
  </div>
)
```

### FilterTip

```jsx
() => (
  <div style={{ width: 280 }}>
    <Coachmark
      title="Filter by boarding point"
      description="Show only buses that pick up at Zirakpur Chowk."
    />
  </div>
)
```

### TitleOnly

```jsx
() => (
  <div style={{ width: 280 }}>
    <Coachmark title="Offers now live on Ambala Cantt routes" confirmLabel="View offers" dismissLabel="Later" />
  </div>
)
```
