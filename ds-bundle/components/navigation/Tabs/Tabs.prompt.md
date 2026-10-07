Tabs from india-bus-ds. Use via `window.IndiaBusDS.Tabs` (bundle loaded from the root `_ds_bundle.js`).

Section tabs within one screen. The selected tab carries the red underline;
for switching destinations use `<BottomNav />` instead.

## Props

```ts
interface TabsProps {
  items: TabItem[];
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** `fixed` splits the width evenly (2–3 tabs); the default scrolls horizontally for longer sets such as the bus-details scr */
  layout?: "scrollable" | "fixed";
  label?: string;
}
```

## Examples

### BusDetails

```jsx
() => (
  <div style={{ width: 360 }}>
    <Tabs
      label="Bus details sections"
      defaultValue="boarding"
      items={[
        { value: 'boarding', label: 'Boarding & dropping' },
        { value: 'amenities', label: 'Amenities' },
        { value: 'photos', label: 'Bus photos' },
        { value: 'reviews', label: 'Reviews' },
        { value: 'policy', label: 'Cancellation policy' },
      ]}
    />
  </div>
)
```

### BookingsFixed

```jsx
() => (
  <div style={{ width: 360 }}>
    <Tabs
      layout="fixed"
      label="Booking status"
      defaultValue="upcoming"
      items={[
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'completed', label: 'Completed' },
        { value: 'cancelled', label: 'Cancelled' },
      ]}
    />
  </div>
)
```

### TripTypeFixed

```jsx
() => (
  <div style={{ width: 360 }}>
    <Tabs
      layout="fixed"
      label="Trip type"
      defaultValue="round"
      items={[
        { value: 'oneway', label: 'One way' },
        { value: 'round', label: 'Round trip' },
      ]}
    />
  </div>
)
```

### OperatorReviews

```jsx
() => (
  <div style={{ width: 360 }}>
    <Tabs
      label="Review filters"
      defaultValue="all"
      items={[
        { value: 'all', label: 'All reviews' },
        { value: 'punctuality', label: 'Punctuality' },
        { value: 'cleanliness', label: 'Cleanliness' },
        { value: 'staff', label: 'Staff behaviour' },
      ]}
    />
  </div>
)
```
