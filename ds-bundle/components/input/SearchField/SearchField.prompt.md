SearchField from india-bus-ds. Use via `window.IndiaBusDS.SearchField` (bundle loaded from the root `_ds_bundle.js`).

Pill search input with a leading Ions search glyph. Used for city lookup and
boarding/dropping point search.

## Props

```ts
interface SearchFieldProps {
  /** Accessible name when no visible label is present. */
  label?: string;
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
    <SearchField label="Search city" placeholder="Search for a city" />
  </div>
)
```

### Filled

```jsx
() => (
  <div style={{ width: 328 }}>
    <SearchField label="Search city" defaultValue="Chandigarh" />
  </div>
)
```

### BoardingPointSearch

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span className="type-label">Boarding point</span>
    <SearchField label="Search boarding points" placeholder="Search boarding points" />
    <span className="type-caption">18 pickup points in Chandigarh</span>
  </div>
)
```

### OperatorSearch

```jsx
() => (
  <div style={{ width: 328 }}>
    <SearchField label="Search operators" defaultValue="IntrCity SmartBus" />
  </div>
)
```
