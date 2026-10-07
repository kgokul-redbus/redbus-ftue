BusRating from india-bus-ds. Use via `window.IndiaBusDS.BusRating` (bundle loaded from the root `_ds_bundle.js`).

GEMS `DroidRating` (Bus LOB, `Amount?` true) as nested in the bus result
card: rating pill plus review count. Use inside `BusTuple`; for generic
rating labels elsewhere use `RatingTag`.

## Props

```ts
interface BusRatingProps {
  /** Rating as displayed, e.g. `4.5`. */
  value: string | number;
  /** Review count shown beside the pill, e.g. `278`. */
  count?: string | number;
  /** GEMS `DroidRating` `Rating Type`. The kit implements `high` (green) and `mid` (amber); GEMS also defines Low/Neutral/New */
  tone?: "high" | "mid";
}
```

## Examples

### High

```jsx
() => <Slot><BusRating value="4.5" count={278} /></Slot>
```

### Mid

```jsx
() => <Slot><BusRating value="3.6" count={104} tone="mid" /></Slot>
```

### WithoutCount

```jsx
() => <Slot><BusRating value="4.2" /></Slot>
```
