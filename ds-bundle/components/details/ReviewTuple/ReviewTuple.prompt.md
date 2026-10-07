ReviewTuple from india-bus-ds. Use via `window.IndiaBusDS.ReviewTuple` (bundle loaded from the root `_ds_bundle.js`).

P27 review tuple — GEMS `Android-ReviewTuple` (candidate name only, node not
verified). Reviewer, badge and date, score pill, review body and
"Could be better" tags. Stack inside `ReviewsExplorer`.

## Props

```ts
interface ReviewTupleProps {
  /** Reviewer name. */
  name: string;
  /** Badge line, e.g. "🏆 Frequent Traveler". */
  badge?: string;
  /** Review date, e.g. "17 Jun 2026". */
  date: string;
  /** Star score, e.g. `1`. */
  score: number;
  /** Review text. */
  text: string;
  /** Tag group heading. */
  tagsTitle?: string;
  /** Attribute tags, e.g. ["Driving", "AC"]. */
  tags?: string[];
}
```

## Examples

### OneTag

```jsx
() => (
  <div style={{ width: 360, background: '#fff', padding: '0 14px' }}>
    <ReviewTuple
      name="Princy Vatsa"
      badge="🏆 Frequent Traveler"
      date="17 Jun 2026"
      score={1}
      text="Very slow driver. Did not even inform of the dropping point despite informing him twice at Hanumangarh."
      tags={['Driving']}
    />
  </div>
)
```

### ManyTags

```jsx
() => (
  <div style={{ width: 360, background: '#fff', padding: '0 14px' }}>
    <ReviewTuple
      name="Soumik Roy Chowdhury"
      badge="🏆 Frequent Traveler"
      date="17 Sep 2025"
      score={1}
      text="Bus deboarded 113 km to destination. I will recommend never ever book Pinky Gudiya Travel."
      tags={['Driving', 'AC', 'Punctuality', 'Staff behavior']}
    />
  </div>
)
```
