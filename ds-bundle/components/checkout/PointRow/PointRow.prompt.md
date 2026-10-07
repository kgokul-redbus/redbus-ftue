PointRow from india-bus-ds. Use via `window.IndiaBusDS.PointRow` (bundle loaded from the root `_ds_bundle.js`).

P30 boarding/dropping point row — GEMS `Android-Bp-Selection` candidate,
row anatomy not node-verified. Time/date column, name + address (+ tag),
radio. Selection is owned by the parent `PointList`; render the row inside
a `.ff-point-card` (the kit never shows it standalone).

## Props

```ts
interface PointRowProps {
  /** 24-hour IST time, e.g. "21:15". */
  time: string;
  /** Date under the time, e.g. "10 Jul". */
  date: string;
  /** Point name, bold. */
  name: string;
  /** Optional address line under the name. The kit's dropping rows omit it. */
  address?: string;
  /** Optional contextual tag, e.g. "Popular dropping point". */
  tag?: string;
  /** Minimum row height. The kit sizes rows by hand to their wrapped copy: `tall` (84px) for a two-line name + address, `xtal */
  size?: "default" | "tall" | "xtall";
  /** Selected state: brand radio and brand-low gradient (`aria-pressed`). */
  selected?: boolean;
  onSelect?: () => void;
}
```

## Examples

### Default

```jsx
() => (
  <Card>
    <PointRow time="22:45" date="10 Jul" name="Bahadurgarh bypass" address="bahadurgarh bypass" />
  </Card>
)
```

### TallSelected

```jsx
() => (
  <Card>
    <PointRow
      size="tall"
      selected
      time="21:15"
      date="10 Jul"
      name="Shop no.35 old delhi railway station fatehpuri parking"
      address="shop no.35 old delhi railway station fatehpuri parking"
    />
  </Card>
)
```

### WithTag

```jsx
() => (
  <Card>
    <PointRow time="05:50" date="11 Jul" name="Koda chowk ganganagar" tag="Popular dropping point" />
  </Card>
)
```
