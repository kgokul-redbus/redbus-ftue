BusRoute from india-bus-ds. Use via `window.IndiaBusDS.BusRoute` (bundle loaded from the root `_ds_bundle.js`).

P26 "Bus route" section in bus details — the full service route as a
wrapping chain of towns joined by arrows, with the traveller's boarding and
dropping towns highlighted and towns outside their trip greyed. A line only
ever breaks after an arrow, never between a town and its arrow.

Built from production evidence (`Scroll on bus details sheet.jpeg`): the
kit's calibration prototype never implemented this chain, so its styling
lives in the binding's `production-evidence.css`, not the kit CSS. For the
timed boarding/dropping point list use `RouteTimeline`.

## Props

```ts
interface BusRouteProps {
  /** Every town the service passes, in order, e.g. ["Delhi", "Bahadurgarh (Haryana)", …]. */
  stops: string[];
  /** The traveller's boarding town. Highlighted; earlier towns are greyed. */
  from?: string;
  /** The traveller's dropping town. Highlighted; later towns are greyed. */
  to?: string;
  /** Distance and duration line, e.g. "421 km · 8h 35m". */
  summary?: string;
  /** Section heading. Defaults to the production "Bus route". */
  title?: string;
}
```

## Examples

### FullRoute

```jsx
() => (
  <Sheet>
    <BusRoute stops={route} from="Delhi" to="Ganganagar (Sri Ganganagar)" summary="421 km · 8h 35m" />
  </Sheet>
)
```

### MidRouteTrip

```jsx
() => (
  <Sheet>
    <BusRoute stops={route} from="Hisar (Haryana)" to="Hanumangarh" summary="236 km · 4h 50m" />
  </Sheet>
)
```
