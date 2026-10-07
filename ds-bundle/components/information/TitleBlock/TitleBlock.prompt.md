TitleBlock from india-bus-ds. Use via `window.IndiaBusDS.TitleBlock` (bundle loaded from the root `_ds_bundle.js`).

Section header: title, optional supporting line, optional trailing action.
Use above lists and carousels rather than a bare heading.

## Props

```ts
interface TitleBlockProps {
  title: React.ReactNode;
  /** Supporting line under the title. */
  support?: React.ReactNode;
  /** Trailing action, normally a tertiary `<Button />`. */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### SectionHeader

```jsx
() => (
  <div style={{ width: 328 }}>
    <TitleBlock title="Boarding points" />
  </div>
)
```

### WithSupport

```jsx
() => (
  <div style={{ width: 328 }}>
    <TitleBlock title="Chandigarh to Delhi" support="Sat, 16 Aug · 42 buses" />
  </div>
)
```

### WithAction

```jsx
() => (
  <div style={{ width: 328 }}>
    <TitleBlock
      title="Recent searches"
      support="Chandigarh · Jaipur · Delhi"
      action={<Button variant="tertiary">Clear all</Button>}
    />
  </div>
)
```

### AboveList

```jsx
() => (
  <div style={{ width: 328 }}>
    <TitleBlock
      title="Amenities on this bus"
      support="Zing Bus · A/C Sleeper (2+1)"
      action={<Button variant="tertiary">See all</Button>}
    />
    <div style={{ height: 12 }} />
    <List>
      <ListItem media={<Icon name="ion-bus" />} title="Live tracking" support="Shared 30 minutes before departure" />
      <ListItem media={<Icon name="ion-info" />} title="Charging point" trailing={<Tag>Every seat</Tag>} />
    </List>
  </div>
)
```
