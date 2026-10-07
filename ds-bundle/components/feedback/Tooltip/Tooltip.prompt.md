Tooltip from india-bus-ds. Use via `window.IndiaBusDS.Tooltip` (bundle loaded from the root `_ds_bundle.js`).

Hover/focus description for an unlabelled control. Touch devices never see
it, so never put information here that the task depends on.

## Props

```ts
interface TooltipProps {
  /** The element the tooltip describes — normally an `<IconButton />`. */
  children: React.ReactNode;
  /** Tooltip copy. Keep it to a short phrase. */
  content: React.ReactNode;
  /** Renders the tooltip visible without hover, for documentation and specs. */
  forceVisible?: boolean;
}
```

## Examples

### OnIconButton

```jsx
() => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="Live bus tracking" forceVisible>
      <IconButton label="Live bus tracking">
        <Icon name="ion-bus" />
      </IconButton>
    </Tooltip>
  </div>
)
```

### FareBreakup

```jsx
() => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="₹1,798 includes ₹92 GST" forceVisible>
      <IconButton label="Fare breakup">
        <Icon name="ion-info" />
      </IconButton>
    </Tooltip>
  </div>
)
```

### SortControl

```jsx
() => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="Sort by departure time" forceVisible>
      <IconButton label="Sort by departure time">
        <Icon name="ion-sort" />
      </IconButton>
    </Tooltip>
  </div>
)
```

### OnTextTrigger

```jsx
() => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="Free cancellation until 16 Aug, 06:00" forceVisible>
      <span className="type-body-m">Cancellation policy</span>
    </Tooltip>
  </div>
)
```
