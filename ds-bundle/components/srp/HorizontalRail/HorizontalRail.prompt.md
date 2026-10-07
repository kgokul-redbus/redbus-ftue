HorizontalRail from india-bus-ds. Use via `window.IndiaBusDS.HorizontalRail` (bundle loaded from the root `_ds_bundle.js`).

P05 horizontal rail — screenshot-led, no GEMS component. The full-funnel
kit's generic `.ff-hscroll`: horizontal overflow, hidden scrollbar, contained
overscroll. Item layout comes from the extra class passed in `className`.

## Props

```ts
interface HorizontalRailProps {
  /** Rail items (offer cards, chips, media, a wide table). */
  children?: React.ReactNode;
  /** Extra kit class naming the rail's layout, e.g. `ff-offer-rail`, `ff-highlight-rail`, `ff-review-chips ff-review-chips--n */
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### ChipRail

```jsx
() => (
  <div style={{ width: 360 }}>
    <HorizontalRail className="ff-review-chips ff-review-chips--nowrap">
      {['Relevant Reviews', 'Recent Reviews', 'Low To High Rating', 'High To Low Rating'].map((label, i) => (
        <button key={label} className="ff-chip" type="button" aria-pressed={i === 0}>
          {label}
        </button>
      ))}
    </HorizontalRail>
  </div>
)
```

### PolicyTable

```jsx
() => (
  <div style={{ width: 360 }}>
    <HorizontalRail>
      <table className="ff-policy-table">
        <thead>
          <tr>
            <th>Cancellation Time</th>
            <th>Without free cancellation</th>
            <th>With free cancellation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Before 7th Jul 01:15 PM</td>
            <td>90% refund</td>
            <td>100% refund</td>
          </tr>
          <tr>
            <td>From 7th Jul 01:15 PM Until 8th Jul 09:15 AM</td>
            <td>75% refund</td>
            <td>100% refund</td>
          </tr>
          <tr>
            <td>After 8th Jul 09:15 AM</td>
            <td>50% refund</td>
            <td>100% refund</td>
          </tr>
        </tbody>
      </table>
    </HorizontalRail>
  </div>
)
```
