ListItem from india-bus-ds. Use via `window.IndiaBusDS.ListItem` (bundle loaded from the root `_ds_bundle.js`).

One row inside a `<List />`. Pass `onClick` to make it actionable — the row
then renders as a full-width button with the correct touch target.

## Props

```ts
interface ListItemProps {
  title: React.ReactNode;
  /** Secondary line; truncates to one line by design. */
  support?: React.ReactNode;
  /** Leading media slot — an `<Icon />` on the tinted brand square. */
  media?: React.ReactNode;
  /** Trailing slot, typically a chevron, price or `<Tag />`. */
  trailing?: React.ReactNode;
  /** Makes the whole row a button. Omit for static rows. */
  onClick?: () => void;
  /** Renders the media slot without the tinted background. */
  plainMedia?: boolean;
}
```

## Examples

### WithMedia

```jsx
() => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-location" />}
        title="Delhi ISBT Kashmere Gate"
        support="22:45 · Gate 3, platform 12"
      />
    </List>
  </div>
)
```

### WithTrailing

```jsx
() => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-ticket" />}
        title="Zing Bus"
        support="A/C Sleeper (2+1) · 21:30"
        trailing={<RatingTag rating="4.4" />}
      />
      <ListItem
        media={<Icon name="ion-bus" />}
        title="IntrCity SmartBus"
        support="A/C Seater · 23:15"
        trailing={<Text role="body" strong tabular>₹1,249</Text>}
      />
    </List>
  </div>
)
```

### TitleOnly

```jsx
() => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem title="Ambala Cantt" />
      <ListItem title="Karnal Bypass" />
      <ListItem title="Murthal Dhaba" />
    </List>
  </div>
)
```

### Actionable

```jsx
() => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-offer" />}
        title="Apply a coupon"
        support="2 offers available on this route"
        trailing={<Icon name="ion-arrow-forward" size="sm" />}
        onClick={() => {}}
      />
      <ListItem
        media={<Icon name="ion-user" />}
        title="Anita Goel"
        support="29 · Female · Seat L4"
        trailing={<Tag tone="brand">Primary</Tag>}
        onClick={() => {}}
      />
    </List>
  </div>
)
```
