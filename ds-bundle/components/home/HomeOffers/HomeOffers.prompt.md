HomeOffers from india-bus-ds. Use via `window.IndiaBusDS.HomeOffers` (bundle loaded from the root `_ds_bundle.js`).

P09 home promotion surface, offer rail — screenshot-led, candidate, not
node-verified. Heading, support line and a horizontal rail of offer cards.
The campaign banner is `HomeCampaign`.

## Props

```ts
interface HomeOffersProps {
  /** Section heading. */
  heading?: string;
  /** Support line under the heading. */
  support?: string;
  /** Cards in the horizontally scrolling rail (220px each). */
  offers: HomeOffer[];
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <HomeOffers
      offers={[{ title: 'Save up to ₹300 on your next bus ticket' }, { title: 'Get ₹150 off on train tickets' }]}
    />
  </div>
)
```

### SingleOffer

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <HomeOffers offers={[{ title: 'Save up to ₹300 on your next bus ticket' }]} />
  </div>
)
```
