BusTuple from india-bus-ds. Use via `window.IndiaBusDS.BusTuple` (bundle loaded from the root `_ds_bundle.js`).

P15 bus result card — GEMS `DroidTupple-India` (`Live`). Time pair, duration
and seats, fare with optional struck price, operator and bus type, rating,
tags, and optional Primo, ribbon or offer-strip treatments. Fixed 328dp
width; stack in a column with the search-results background behind it.

## Props

```ts
interface BusTupleProps {
  /** 24-hour departure time, e.g. "21:30". */
  departure: string;
  /** 24-hour arrival time, e.g. "05:51". */
  arrival: string;
  /** Duration, e.g. "8h 21m". */
  duration: string;
  /** Seats left, e.g. `15`. */
  seats: number;
  /** Single-window seats within `seats`, shown as "(1 Single)". */
  singleSeats?: number;
  /** Preformatted current fare, e.g. "₹904". */
  fare: string;
  /** Preformatted struck-through fare, e.g. "₹952". */
  previousFare?: string;
  operator: string;
  /** Bus type, e.g. "AC Sleeper (2+1)". */
  busType: string;
  /** A `BusRating`. Omit for operators without ratings. */
  rating?: React.ReactNode;
  /** Amenity and trust tags, e.g. ["Toilet", "97% On Time"]. */
  tags?: string[];
  /** An `OfferRibbon`, pinned top-right. */
  ribbon?: React.ReactNode;
  /** Bottom offer strip copy, e.g. "Min. 12.5% off on 3 or more seats". */
  offerStrip?: React.ReactNode;
  /** Primo service: shows the Primo mark and Primo card treatment. */
  primo?: boolean;
  /** Compact card for the "Previously viewed" rail. */
  previous?: boolean;
  /** Result embedded in a `RaySheet` answer: sizes to content and drops the top band reserved for a ribbon or Primo mark. */
  embedded?: boolean;
  /** Shows the bus/location trigger that opens bus details. */
  onDetailsClick?: () => void;
  onClick?: () => void;
}
```

## Examples

### Primo

```jsx
() => (
  <Results>
    <BusTuple
      primo
      departure="21:15"
      arrival="05:50"
      duration="8h 35m"
      seats={16}
      singleSeats={1}
      fare="₹900"
      operator="Pinky Gudiya Travels And Cargo"
      busType="A/C Sleeper (2+1)"
      rating={<BusRating value="4.5" count={278} />}
      tags={['New Bus', 'Toilet']}
      onDetailsClick={() => {}}
    />
  </Results>
)
```

### ExclusiveDiscount

```jsx
() => (
  <Results>
    <BusTuple
      ribbon={<OfferRibbon value="5% OFF" />}
      departure="21:30"
      arrival="05:51"
      duration="8h 21m"
      seats={15}
      singleSeats={1}
      previousFare="₹952"
      fare="₹904"
      operator="Tantia Travels & Cargo"
      busType="AC Sleeper (2+1)"
      rating={<BusRating value="4.2" count={118} />}
      tags={['Toilet', '97% On Time']}
    />
  </Results>
)
```

### GroupOffer

```jsx
() => (
  <Results>
    <BusTuple
      ribbon={<OfferRibbon value="10% OFF" />}
      departure="23:10"
      arrival="07:00"
      duration="7h 50m"
      seats={36}
      previousFare="₹1,700"
      fare="₹1,530"
      operator="Lal Baba Travels"
      busType="AshokLeyland Stile A/C"
      offerStrip="Min. 12.5% off on 3 or more seats"
    />
  </Results>
)
```

### MidRating

```jsx
() => (
  <Results>
    <BusTuple
      departure="21:50"
      arrival="06:30"
      duration="8h 40m"
      seats={33}
      fare="₹800"
      operator="New Aditya Travels"
      busType="A/C Sleeper (2+1)"
      rating={<BusRating value="3.6" count={104} tone="mid" />}
      tags={['84% On Time']}
    />
  </Results>
)
```

### PreviouslyViewed

```jsx
() => (
  <Results>
    <BusTuple
      previous
      primo
      departure="21:15"
      arrival="05:50"
      duration="8h 35m"
      seats={14}
      fare="₹900"
      operator="Pinky Gudiya Travels And Cargo"
      busType="A/C Sleeper (2+1)"
      rating={<BusRating value="4.5" count={278} />}
      tags={['New Bus', 'Toilet']}
    />
  </Results>
)
```
