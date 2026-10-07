ResultsLoader from india-bus-ds. Use via `window.IndiaBusDS.ResultsLoader` (bundle loaded from the root `_ds_bundle.js`).

P04 results loader skeleton — screenshot-led, no GEMS component. Shimmer
skeleton covering the results while they load. Absolutely positioned over
the phone viewport: render it inside `IonsRoot device`.

## Props

```ts
interface ResultsLoaderProps {
  /** Drives `data-open`; the loader is `display: none` while closed. */
  open?: boolean;
  /** `base` — initial load (promo rail + chip rail skeletons). `contextual` — after a filter (chip rail, AI Smart filter quer */
  variant?: "base" | "contextual";
  /** AI Smart filter query echoed in the contextual variant. */
  aiQuery?: string;
  /** Summary line under the query in the contextual variant. */
  aiSummary?: string;
  /** Screen-reader announcement. */
  announcement?: string;
}
```

## Examples

### InitialLoad

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <Chrome />
    <ResultsLoader open variant="base" />
  </IonsRoot>
)
```

### AfterAiFilter

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <Chrome />
    <ResultsLoader open variant="contextual" aiQuery="ac sleeper under 1000" aiSummary="Showing AC sleeper buses under ₹1000" />
    <RayFab />
  </IonsRoot>
)
```
