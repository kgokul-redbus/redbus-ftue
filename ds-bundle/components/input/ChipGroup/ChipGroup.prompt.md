ChipGroup from india-bus-ds. Use via `window.IndiaBusDS.ChipGroup` (bundle loaded from the root `_ds_bundle.js`).

Wrapping row for chips. Supplies the Ions gap so chips never touch.

## Props

```ts
interface ChipGroupProps {
  /** A set of `<Chip />` elements. */
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### FilterRail

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Quick filters">
      <Chip icon={<Icon name="ion-filter" size="sm" />}>Filters</Chip>
      <Chip selected>AC</Chip>
      <Chip>Sleeper</Chip>
      <Chip>Seater</Chip>
      <Chip>Live tracking</Chip>
    </ChipGroup>
  </div>
)
```

### AppliedFilters

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Applied filters">
      <Chip selected icon={<Icon name="ion-close" size="sm" />}>
        AC Sleeper
      </Chip>
      <Chip selected icon={<Icon name="ion-close" size="sm" />}>
        After 18:00
      </Chip>
      <Chip selected icon={<Icon name="ion-close" size="sm" />}>
        Under ₹1,200
      </Chip>
    </ChipGroup>
  </div>
)
```

### BoardingPointChips

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Boarding points">
      <Chip supporting="06:15 departure" selected>
        Sector 43 Bus Terminal
      </Chip>
      <Chip supporting="06:40 departure">Zirakpur Chowk</Chip>
      <Chip supporting="07:35 departure">Ambala Cantt</Chip>
    </ChipGroup>
  </div>
)
```

### OperatorChips

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Operators">
      <Chip>Zing Bus</Chip>
      <Chip selected>IntrCity SmartBus</Chip>
      <Chip>Laxmi Holidays</Chip>
      <Chip>Jakhar Travels</Chip>
    </ChipGroup>
  </div>
)
```
