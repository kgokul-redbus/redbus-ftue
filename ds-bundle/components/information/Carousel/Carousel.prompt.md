Carousel from india-bus-ds. Use via `window.IndiaBusDS.Carousel` (bundle loaded from the root `_ds_bundle.js`).

Horizontally snapping card row — Home campaign tiles and offer rails.
Scrolling is native; the dots reflect and set position.

## Props

```ts
interface CarouselProps {
  /** One entry per slide. Each renders inside a snap-aligned card. */
  items: ReactNode[];
  /** Shows the dot indicator under the viewport. */
  showPagination?: boolean;
  /** Accessible name for the pagination control. */
  label?: string;
}
```

## Examples

### OfferRail

```jsx
() => (
  <div style={{ width: 328 }}>
    <Carousel
      label="Choose offer"
      items={[
        <>
          <Tag tone="brand">FIRSTBUS</Tag>
          <Text role="title-3">Flat ₹150 off your first trip</Text>
          <Text role="caption">Valid on Chandigarh – Delhi till 31 Aug</Text>
        </>,
        <>
          <Tag tone="brand">UPIWIN</Tag>
          <Text role="title-3">10% cashback on UPI</Text>
          <Text role="caption">Up to ₹200 · Once per user</Text>
        </>,
        <>
          <Tag tone="brand">RETURN20</Tag>
          <Text role="title-3">20% off return tickets</Text>
          <Text role="caption">Book both legs together</Text>
        </>,
      ]}
    />
  </div>
)
```

### OperatorRail

```jsx
() => (
  <div style={{ width: 328 }}>
    <Carousel
      label="Choose operator"
      items={[
        <>
          <Text role="title-3">Zing Bus</Text>
          <Text role="caption">A/C Sleeper (2+1) · 21:30 → 06:15</Text>
          <div style={{ marginTop: 8 }}>
            <RatingTag rating="4.4" count="1,208 ratings" />
          </div>
        </>,
        <>
          <Text role="title-3">IntrCity SmartBus</Text>
          <Text role="caption">A/C Seater · 23:15 → 07:40</Text>
          <div style={{ marginTop: 8 }}>
            <RatingTag rating="4.2" count="860 ratings" />
          </div>
        </>,
        <>
          <Text role="title-3">Laxmi Holidays</Text>
          <Text role="caption">Non A/C Sleeper · 22:00 → 06:50</Text>
          <div style={{ marginTop: 8 }}>
            <RatingTag rating="3.9" count="412 ratings" />
          </div>
        </>,
      ]}
    />
  </div>
)
```

### WithoutPagination

```jsx
() => (
  <div style={{ width: 328 }}>
    <Carousel
      showPagination={false}
      items={[
        <>
          <Text role="title-3">Jaipur Sindhi Camp</Text>
          <Text role="caption">From ₹649 · 9h 20m</Text>
          <div style={{ marginTop: 8 }}>
            <Button variant="tertiary">View buses</Button>
          </div>
        </>,
        <>
          <Text role="title-3">Ambala Cantt</Text>
          <Text role="caption">From ₹299 · 1h 45m</Text>
          <div style={{ marginTop: 8 }}>
            <Button variant="tertiary">View buses</Button>
          </div>
        </>,
      ]}
    />
  </div>
)
```
