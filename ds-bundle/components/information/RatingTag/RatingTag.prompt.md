RatingTag from india-bus-ds. Use via `window.IndiaBusDS.RatingTag` (bundle loaded from the root `_ds_bundle.js`).

Crystal rating pill for generic rating labels. Inside a bus result card use
`BusRating` instead — it carries the GEMS `DroidRating` high/mid tones and
the review count layout.

## Props

```ts
interface RatingTagProps {
  /** Rating value, e.g. `4.3`. Rendered as given — format before passing. */
  rating: string | number;
  /** Optional count shown after a middot, e.g. `850 ratings`. */
  count?: string;
  /** Hides the leading star for dense rows. */
  hideIcon?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => <RatingTag rating="4.4" />
```

### WithCount

```jsx
() => <RatingTag rating="4.2" count="860 ratings" />
```

### WithoutIcon

```jsx
() => <RatingTag rating="3.9" hideIcon />
```

### OnSearchResult

```jsx
() => (
  <div style={{ width: 328 }}>
    <Text role="title-3">Zing Bus</Text>
    <Text role="caption">A/C Sleeper (2+1) · 21:30 → 06:15</Text>
    <div style={{ marginTop: 8 }}>
      <ChipGroup>
        <RatingTag rating="4.4" count="1,208 ratings" />
      </ChipGroup>
    </div>
  </div>
)
```
