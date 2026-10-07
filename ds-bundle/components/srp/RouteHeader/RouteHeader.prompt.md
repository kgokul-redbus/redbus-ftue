RouteHeader from india-bus-ds. Use via `window.IndiaBusDS.RouteHeader` (bundle loaded from the root `_ds_bundle.js`).

P01 route-context top bar for search results — GEMS `DroidTopNavigation`
with `Trailing=Date`. Back action, two-line route, bus count and a tappable
date pill. Fixed 64dp chrome; content scrolls beneath it.

## Props

```ts
interface RouteHeaderProps {
  /** Origin city, rendered bold on the first line. */
  from: string;
  /** Destination, rendered on its own line so long names like "Ganganagar (Sri Ganganagar)" fit. */
  to: string;
  /** Result count shown under the route, e.g. `7` renders "7 Buses". */
  busCount?: number;
  /** Date pill text, e.g. "9 Jul". */
  date: string;
  /** Weekday under the pill, e.g. "Thu". */
  day?: string;
  onBack?: () => void;
  /** Opens the date-selection sheet in production. */
  onDateClick?: () => void;
}
```

## Examples

### Default

```jsx
() => (
  <Phone>
    <RouteHeader from="Delhi" to="Ganganagar (Sri Ganganagar)" busCount={7} date="9 Jul" day="Thu" />
  </Phone>
)
```

### ShortRoute

```jsx
() => (
  <Phone>
    <RouteHeader from="Chandigarh" to="Delhi" busCount={42} date="16 Aug" day="Sat" />
  </Phone>
)
```

### WithoutCount

```jsx
() => (
  <Phone>
    <RouteHeader from="Bangalore" to="Hyderabad" date="21 Sep" day="Mon" />
  </Phone>
)
```
