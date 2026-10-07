HomeCampaign from india-bus-ds. Use via `window.IndiaBusDS.HomeCampaign` (bundle loaded from the root `_ds_bundle.js`).

P09 home promotion surface, campaign banner — screenshot-led, candidate, not
node-verified. Product artwork (crop `ib-art-home-campaign`, 356 × 138); sits
below `HomeSearchButton` inside the Home hero. The offer rail further down
the page is `HomeOffers`.

## Props

```ts
interface HomeCampaignProps {
  /** Accessible name for the campaign artwork. */
  label?: string;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <HomeCampaign />
  </div>
)
```
