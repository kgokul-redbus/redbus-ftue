RouteTimeline from india-bus-ds. Use via `window.IndiaBusDS.RouteTimeline` (bundle loaded from the root `_ds_bundle.js`).

P26 boarding/dropping point timeline in bus details — no exact GEMS component
verified. Production's "Boarding points" / "Dropping points" list: time with
date, a dark dot on a grey rail, point name and address. For the "Bus route"
chain of towns use `BusRoute`.

The kit's rows (`.ff-route-stop`) lack the date and address and draw hollow
brand dots; the production anatomy is layered on in the binding's
`production-evidence.css`. Renders the rows only (no wrapper): place them
directly inside a `DetailSection`, as its last content, so the final dot
drops its rail.

## Props

```ts
interface RouteTimelineProps {
  stops: RouteStop[];
}
```

## Examples

### BoardingPoints

```jsx
() => (
  <Sheet>
    <DetailSection id="boarding" title="Boarding points" subtitle="Delhi">
      <RouteTimeline
        stops={[
          {
            time: '21:15',
            date: '10 Jul',
            name: 'Shop no.35 old delhi railway station fatehpuri parking',
            address: 'shop no.35 old delhi railway station fatehpuri parking',
          },
          {
            time: '22:14',
            date: '10 Jul',
            name: 'Pinky gudiya travel and cargo ekta enclave metro station peeragarhi',
            address: 'pinky gudiya travel and cargo ekta enclave metro station peeragarhi',
          },
        ]}
      />
    </DetailSection>
  </Sheet>
)
```

### DroppingPoints

```jsx
() => (
  <Sheet>
    <DetailSection id="dropping" title="Dropping points" subtitle="Ganganagar (Sri Ganganagar)">
      <RouteTimeline
        stops={[
          { time: '05:10', date: '11 Jul', name: 'Lalgarh', address: 'Lalgarh' },
          { time: '05:15', date: '11 Jul', name: 'Ricco', address: 'Ricco' },
          { time: '05:20', date: '11 Jul', name: 'Ridhi sidhi', address: 'Ridhi sidhi' },
          { time: '05:25', date: '11 Jul', name: 'Jain college', address: 'Jain college' },
        ]}
      />
    </DetailSection>
  </Sheet>
)
```
