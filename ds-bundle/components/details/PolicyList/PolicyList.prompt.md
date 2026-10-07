PolicyList from india-bus-ds. Use via `window.IndiaBusDS.PolicyList` (bundle loaded from the root `_ds_bundle.js`).

P25 other-policies list — no exact GEMS component verified. Child, luggage,
pets and liquor rules as glyph + title + description rows. Place inside a
`DetailSection`.

## Props

```ts
interface PolicyListProps {
  items: PolicyItem[];
}
```

## Examples

### OtherPolicies

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="policies" title="Other policies">
      <PolicyList items={policies} />
    </DetailSection>
  </div>
)
```

### Luggage

```jsx
() => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="policies" title="Other policies">
      <PolicyList items={policies.slice(1, 2)} />
    </DetailSection>
  </div>
)
```
