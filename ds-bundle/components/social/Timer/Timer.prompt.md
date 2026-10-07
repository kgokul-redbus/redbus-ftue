Timer from india-bus-ds. Use via `window.IndiaBusDS.Timer` (bundle loaded from the root `_ds_bundle.js`).

Countdown for time-boxed actions — held seats, payment windows. Display
only: the component never counts down on its own, so drive `time` from the
screen's own state.

## Props

```ts
interface TimerProps {
  /** Preformatted remaining time, e.g. `09:45`. Figures are tabular. */
  time: string;
  /** Text before the clock, e.g. "Seats held for". */
  children?: React.ReactNode;
  /** Hides the leading glyph. */
  hideIcon?: boolean;
}
```

## Examples

### Default

```jsx
() => <Timer time="09:45">Seats held for</Timer>
```

### WithoutIcon

```jsx
() => (
  <Timer time="04:30" hideIcon>
    Complete payment in
  </Timer>
)
```

### TimeOnly

```jsx
() => <Timer time="00:59" />
```

### InSeatFooter

```jsx
() => (
  <div
    style={{
      width: 328,
      padding: 16,
      display: 'grid',
      gap: 8,
      background: 'var(--surface-neutral-lowest-default)',
      border: '1px solid var(--border-neutral-low-default)',
      borderRadius: 'var(--radius-xl)',
    }}
  >
    <Timer time="09:45">Seats L3, L4 held for</Timer>
    <div className="type-caption">
      Zing Bus Maxx · 22:30 Zirakpur Chowk → 05:45 Delhi ISBT Kashmere Gate · ₹1,298
    </div>
  </div>
)
```
