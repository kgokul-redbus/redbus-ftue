Nudge from india-bus-ds. Use via `window.IndiaBusDS.Nudge` (bundle loaded from the root `_ds_bundle.js`).

Low-emphasis prompt encouraging a feature without interrupting the task.
Quieter than `<Callout />`; never use it for errors or required steps.

## Props

```ts
interface NudgeProps {
  title: React.ReactNode;
  /** Short explanation of the value, in caption type. */
  description?: React.ReactNode;
  /** Leading adornment, normally an `<Icon />`. */
  icon?: React.ReactNode;
  /** Optional trailing action. */
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
    <Nudge
      icon={<Icon name="ion-offer" />}
      title="Add FIRST200 and save ₹200"
      description="You qualify on this ₹829 fare from Chandigarh to Delhi."
    />
  </div>
)
```

### WithAction

```jsx
() => (
  <div style={{ width: 328 }}>
    <Nudge
      icon={<Icon name="ion-location" />}
      title="Zirakpur Chowk is closer to you"
      description="Boarding there instead of Sector 43 saves about 25 minutes."
      action={<Button variant="tertiary">Change</Button>}
    />
  </div>
)
```

### TitleOnly

```jsx
() => (
  <div style={{ width: 328 }}>
    <Nudge icon={<Icon name="ion-bus" />} title="4 people booked this service in the last hour" />
  </div>
)
```

### NudgeStack

```jsx
() => (
  <div style={{ width: 328, display: 'grid', gap: 12 }}>
    <Nudge
      icon={<Icon name="ion-star" />}
      title="Rated 4.6 by 2,140 travellers"
      description="Punctuality and cleanliness score above the Chandigarh route average."
    />
    <Nudge
      icon={<Icon name="ion-ticket" />}
      title="Free cancellation until 11 Aug, 18:30"
      description="Cancel before the cut-off and the ₹649 fare is refunded in full."
      action={<Button variant="tertiary">Details</Button>}
    />
  </div>
)
```
