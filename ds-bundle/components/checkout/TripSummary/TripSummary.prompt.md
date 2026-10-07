TripSummary from india-bus-ds. Use via `window.IndiaBusDS.TripSummary` (bundle loaded from the root `_ds_bundle.js`).

P32 selected-trip summary — screenshot-led, no GEMS trip-summary component
was node-verified. Full-bleed 153px white band on Passenger Information:
operator, boarding → dropping dates and points, seat pill and
"View details". The Primo reassurance banner (`.ff-primo-banner`) that
precedes it in the kit is a separate sibling section, not part of this one.

## Props

```ts
interface TripSummaryProps {
  /** Operator name, centred between two hairlines. */
  operator: string;
  /** Boarding date/time, e.g. "Fri, 10 Jul · 21:15". */
  boardingTime: string;
  /** Boarding point; clamps to two lines. */
  boardingPoint: string;
  /** Dropping date/time, e.g. "Sat, 11 Jul · 05:10". */
  droppingTime: string;
  /** Dropping point; right-aligned, clamps to two lines. */
  droppingPoint: string;
  /** Selected seat count; renders "1 seat" / "2 seats". */
  seats: number;
  /** Opens the bus-details overlay in the kit. */
  onViewDetails?: () => void;
}
```

## Examples

### Default

```jsx
() => (
  <Phone>
    <TripSummary
      operator="Pinky Gudiya Travels And Cargo"
      boardingTime="Fri, 10 Jul · 21:15"
      boardingPoint="Shop no.35 old delhi railway station fatehpuri..."
      droppingTime="Sat, 11 Jul · 05:10"
      droppingPoint="Lalgarh"
      seats={1}
    />
  </Phone>
)
```

### TwoSeats

```jsx
() => (
  <Phone>
    <TripSummary
      operator="Pinky Gudiya Travels And Cargo"
      boardingTime="Fri, 10 Jul · 22:45"
      boardingPoint="Bahadurgarh bypass"
      droppingTime="Sat, 11 Jul · 05:50"
      droppingPoint="Koda chowk ganganagar"
      seats={2}
    />
  </Phone>
)
```
