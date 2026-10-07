TopNav from india-bus-ds. Use via `window.IndiaBusDS.TopNav` (bundle loaded from the root `_ds_bundle.js`).

Screen top bar. Title, overline and subtitle each truncate to one line, so
keep route context in `overline` rather than lengthening the title.

## Props

```ts
interface TopNavProps {
  title: React.ReactNode;
  /** Small line above the title — route, date, trip context. */
  overline?: React.ReactNode;
  /** Small line below the title. */
  subtitle?: React.ReactNode;
  /** Leading slot, normally a Back `<IconButton />`. */
  leading?: React.ReactNode;
  /** Trailing slot — share, overflow, help. */
  trailing?: React.ReactNode;
  /** Taller headline treatment for a screen's first view. */
  large?: boolean;
}
```

## Examples

### SearchResults

```jsx
() => (
  <div style={{ width: 360 }}>
    <TopNav
      leading={
        <IconButton label="Back">
          <Icon name="ion-arrow-back" />
        </IconButton>
      }
      overline="Sat, 16 Aug"
      title="Chandigarh → Delhi"
      subtitle="42 buses"
      trailing={
        <IconButton label="Filters">
          <Icon name="ion-filter" />
        </IconButton>
      }
    />
  </div>
)
```

### SeatSelection

```jsx
() => (
  <div style={{ width: 360 }}>
    <TopNav
      leading={
        <IconButton label="Back">
          <Icon name="ion-arrow-back" />
        </IconButton>
      }
      overline="Zing Bus · A/C Sleeper (2+1)"
      title="Select seats"
      subtitle="21:30 Sector 43 → 05:10 Kashmere Gate"
      trailing={
        <IconButton label="More options">
          <Icon name="ion-more" />
        </IconButton>
      }
    />
  </div>
)
```

### LargeHeadline

```jsx
() => (
  <div style={{ width: 360 }}>
    <TopNav
      large
      title="My bookings"
      subtitle="2 upcoming trips"
      trailing={
        <IconButton label="Help">
          <Icon name="ion-help" />
        </IconButton>
      }
    />
  </div>
)
```

### TitleOnly

```jsx
() => (
  <div style={{ width: 360 }}>
    <TopNav
      leading={
        <IconButton label="Back">
          <Icon name="ion-arrow-back" />
        </IconButton>
      }
      title="Cancellation policy"
    />
  </div>
)
```
