Divider from india-bus-ds. Use via `window.IndiaBusDS.Divider` (bundle loaded from the root `_ds_bundle.js`).

Horizontal rule carrying the Ions border token and vertical rhythm.

## Props

```ts
interface DividerProps {
  /** `dotted` marks a tear line — fare breakup totals, ticket stubs. */
  variant?: "solid" | "dotted";
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### Solid

```jsx
() => (
  <div style={{ width: 328 }}>
    <Text role="body">Chandigarh · 21:30</Text>
    <Divider />
    <Text role="body">Delhi ISBT Kashmere Gate · 06:15</Text>
  </div>
)
```

### Dotted

```jsx
() => (
  <div style={{ width: 328 }}>
    <Text role="body" tabular>GST (5%) ₹120</Text>
    <Divider variant="dotted" />
    <Text role="body" strong tabular>Total payable ₹1,418</Text>
  </div>
)
```

### InFareBreakup

```jsx
() => (
  <div style={{ width: 328 }}>
    <Text role="title-3">Fare breakup</Text>
    <Divider />
    <Text role="body" tabular>Base fare ₹1,200</Text>
    <Text role="body" tabular>Reservation charges ₹98</Text>
    <Text role="body" tabular>GST (5%) ₹120</Text>
    <Divider variant="dotted" />
    <Text role="body" strong tabular>Total payable ₹1,418</Text>
  </div>
)
```

### BetweenSections

```jsx
() => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem media={<Icon name="ion-location" />} title="Sector 43 Bus Terminal" support="21:30 · Chandigarh" />
    </List>
    <Divider />
    <List>
      <ListItem media={<Icon name="ion-location" />} title="Delhi ISBT Kashmere Gate" support="06:15 · Gate 3" />
    </List>
  </div>
)
```
