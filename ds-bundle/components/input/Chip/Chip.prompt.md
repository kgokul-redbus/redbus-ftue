Chip from india-bus-ds. Use via `window.IndiaBusDS.Chip` (bundle loaded from the root `_ds_bundle.js`).

Compact filter or selection control. On the SRP these carry the filter rail
(AC, Seater, Sleeper) and the applied-filter state.

## Props

```ts
interface ChipProps {
  children?: React.ReactNode;
  /** Renders the pressed/filter-applied treatment. */
  selected?: boolean;
  /** Second line of context — switches the chip to its `large` anatomy. */
  supporting?: React.ReactNode;
  /** Leading adornment, normally an `<Icon size="sm" />`. */
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### Default

```jsx
() => (
  <ChipGroup>
    <Chip>AC</Chip>
    <Chip>Sleeper</Chip>
    <Chip>Single seat</Chip>
  </ChipGroup>
)
```

### Selected

```jsx
() => (
  <ChipGroup>
    <Chip selected>AC</Chip>
    <Chip>Non AC</Chip>
    <Chip selected>Sleeper</Chip>
  </ChipGroup>
)
```

### WithIcon

```jsx
() => (
  <ChipGroup>
    <Chip icon={<Icon name="ion-filter" size="sm" />}>Filters</Chip>
    <Chip icon={<Icon name="ion-sort" size="sm" />}>Departure time</Chip>
    <Chip icon={<Icon name="ion-star" size="sm" />} selected>
      4.5 and above
    </Chip>
  </ChipGroup>
)
```

### LargeWithSupporting

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChipGroup>
      <Chip supporting="06:15 · Sector 43" selected>
        Chandigarh
      </Chip>
      <Chip supporting="12:40 · Kashmere Gate">Delhi ISBT</Chip>
    </ChipGroup>
  </div>
)
```

### Amenities

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChipGroup>
      <Chip icon={<Icon name="ion-check" size="sm" />} selected>
        Live tracking
      </Chip>
      <Chip>Charging point</Chip>
      <Chip>Blanket</Chip>
      <Chip icon={<Icon name="ion-offer" size="sm" />}>₹150 off</Chip>
    </ChipGroup>
  </div>
)
```

## Related

`ChipGroup`
