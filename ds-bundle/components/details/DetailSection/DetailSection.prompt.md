DetailSection from india-bus-ds. Use via `window.IndiaBusDS.DetailSection` (bundle loaded from the root `_ds_bundle.js`).

P24 bus-detail section — part of the bus-details sheet (no GEMS component).
One scroll module inside `BusDetailsSheet`, separated by the canvas-coloured
8dp rule; `<h3>` and `<p>` children pick up the kit's section type.

## Props

```ts
interface DetailSectionProps {
  /** Scrollspy target; matches a `BusDetailsSheet` tab id. */
  id: string;
  /** Section heading, e.g. "Boarding points". Omit for the untitled highlights block. */
  title?: string;
  /** Grey line under the heading, e.g. the city for "Boarding points" ("Delhi") or "Dropping points" ("Ganganagar (Sri Gangan */
  subtitle?: string;
  /** Section body: `PolicyTable`, `PolicyList`, `RouteTimeline`, or `<h3>`/`<p>` copy. */
  children?: React.ReactNode;
}
```

## Examples

### DateChange

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="date-change" title="Date change policy">
      <p>You can change the travel date until 24 hours before departure. Fare difference may apply.</p>
    </DetailSection>
  </div>
)
```

### BoardingPoints

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="boarding-info" title="Boarding points">
      <h3>Shop no.35 old Delhi railway station</h3>
      <p>21:15 · Fatehpuri parking</p>
    </DetailSection>
  </div>
)
```
