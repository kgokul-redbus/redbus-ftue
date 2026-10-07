OfferRibbon from india-bus-ds. Use via `window.IndiaBusDS.OfferRibbon` (bundle loaded from the root `_ds_bundle.js`).

GEMS `DroidOfferStrip` (`Standard 1 Line`) as the yellow ribbon pinned to the
top-right of a `BusTuple`. Pass it through the tuple's `ribbon` prop rather
than placing it yourself — the tuple owns its position.

## Props

```ts
interface OfferRibbonProps {
  /** Lead-in text, e.g. "Exclusive". */
  label?: React.ReactNode;
  /** Emphasised value, e.g. "5% OFF". */
  value: React.ReactNode;
}
```

## Examples

### OnTuple

```jsx
() => (
  <div style={{ width: 360, padding: 16, background: '#f6f5fa' }}>
    <BusTuple
      ribbon={<OfferRibbon value="5% OFF" />}
      departure="21:30"
      arrival="05:51"
      duration="8h 21m"
      seats={15}
      previousFare="₹952"
      fare="₹904"
      operator="Tantia Travels & Cargo"
      busType="AC Sleeper (2+1)"
    />
  </div>
)
```

### CustomLabel

```jsx
() => (
  <div style={{ width: 360, padding: 16, background: '#f6f5fa' }}>
    <BusTuple
      ribbon={<OfferRibbon label="redDeal" value="₹150 OFF" />}
      departure="22:40"
      arrival="06:15"
      duration="7h 35m"
      seats={21}
      previousFare="₹1,150"
      fare="₹1,000"
      operator="Jain Travels"
      busType="Volvo 9600 A/C Sleeper (2+1)"
    />
  </div>
)
```
