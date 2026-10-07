LocationSearch from india-bus-ds. Use via `window.IndiaBusDS.LocationSearch` (bundle loaded from the root `_ds_bundle.js`).

P35 location selection search — GEMS `AndroidSearchSection`, candidate, not
node-verified. A full screen in the kit (`ff-screen ff-location`): status
spacer, pill search field with back, then Recent searches and Popular
boarding/dropping points. The screen and its search field and list are
absolutely positioned: render it inside `IonsRoot device`.

## Props

```ts
interface LocationSearchProps {
  /** `origin` searches boarding points; `destination` searches areas. */
  mode?: "origin" | "destination";
  /** Controlled query. */
  query?: string;
  defaultQuery?: string;
  onQueryChange?: (query: string) => void;
  /** Result groups, e.g. Recent searches then Popular boarding points. */
  groups?: LocationGroup[];
  onSelect?: (item: LocationItem) => void;
  onBack?: () => void;
}
```

## Examples

### Origin

```jsx
() => (
  <IonsRoot device style={{ height: 800, background: '#fff' }}>
    <LocationSearch
      mode="origin"
      groups={[recent, { heading: 'Popular boarding points', popular: true, items: points }, cities]}
    />
  </IonsRoot>
)
```

### Destination

```jsx
() => (
  <IonsRoot device style={{ height: 800, background: '#fff' }}>
    <LocationSearch
      mode="destination"
      groups={[recent, { heading: 'Popular dropping points near you', popular: true, items: points }, cities]}
    />
  </IonsRoot>
)
```
