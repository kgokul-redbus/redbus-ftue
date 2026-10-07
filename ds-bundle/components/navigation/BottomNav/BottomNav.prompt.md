BottomNav from india-bus-ds. Use via `window.IndiaBusDS.BottomNav` (bundle loaded from the root `_ds_bundle.js`).

Persistent bar for the app's core destinations (Home, Explore, Bookings,
Account). Only on top-level screens — the funnel hides it from SRP onward.

## Props

```ts
interface BottomNavProps {
  /** Three to five destinations. The grid sizes itself from the count. */
  items: BottomNavItem[];
  /** Controlled active destination. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
}
```

## Examples

### HomeSelected

```jsx
() => (
  <div style={{ width: 360 }}>
    <BottomNav
      defaultValue="home"
      items={[
        { value: 'home', label: 'Home', icon: 'ion-home-filled' },
        { value: 'bookings', label: 'Bookings', icon: 'ion-bookings' },
        { value: 'offers', label: 'Offers', icon: 'ion-offer' },
        { value: 'account', label: 'Account', icon: 'ion-account-circle' },
      ]}
    />
  </div>
)
```

### BookingsSelected

```jsx
() => (
  <div style={{ width: 360 }}>
    <BottomNav
      value="bookings"
      items={[
        { value: 'home', label: 'Home', icon: 'ion-home' },
        { value: 'bookings', label: 'Bookings', icon: 'ion-ticket' },
        { value: 'offers', label: 'Offers', icon: 'ion-offer' },
        { value: 'account', label: 'Account', icon: 'ion-account-circle' },
      ]}
    />
  </div>
)
```

### ThreeDestinations

```jsx
() => (
  <div style={{ width: 360 }}>
    <BottomNav
      value="search"
      items={[
        { value: 'search', label: 'Search', icon: 'ion-search' },
        { value: 'trips', label: 'My trips', icon: 'ion-bus' },
        { value: 'account', label: 'Account', icon: 'ion-user' },
      ]}
    />
  </div>
)
```

### FiveDestinations

```jsx
() => (
  <div style={{ width: 360 }}>
    <BottomNav
      value="offers"
      items={[
        { value: 'home', label: 'Home', icon: 'ion-home' },
        { value: 'bookings', label: 'Bookings', icon: 'ion-bookings' },
        { value: 'offers', label: 'Offers', icon: 'ion-offer' },
        { value: 'help', label: 'Help', icon: 'ion-help' },
        { value: 'account', label: 'Account', icon: 'ion-account-circle' },
      ]}
    />
  </div>
)
```
