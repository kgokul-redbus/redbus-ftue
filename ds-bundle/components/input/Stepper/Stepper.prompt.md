Stepper from india-bus-ds. Use via `window.IndiaBusDS.Stepper` (bundle loaded from the root `_ds_bundle.js`).

Increment/decrement control for small counts — passengers, luggage, quantity.
Buttons disable at the bounds rather than clamping silently.

## Props

```ts
interface StepperProps {
  /** Controlled value. Omit to let the component hold its own state. */
  value?: number;
  /** Starting value in uncontrolled mode. */
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  /** Accessible name for the whole control, e.g. "Passengers". */
  label?: string;
}
```

## Examples

### Passengers

```jsx
() => <Stepper label="Passengers" defaultValue={2} />
```

### AtMinimum

```jsx
() => <Stepper label="Passengers" value={1} min={1} max={6} />
```

### AtMaximum

```jsx
() => <Stepper label="Passengers" value={6} min={1} max={6} />
```

### InRow

```jsx
() => (
  <div
    style={{
      width: 328,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span className="type-body">Passengers</span>
      <span className="type-caption">Chandigarh → Delhi · 12 Aug</span>
    </div>
    <Stepper label="Passengers" defaultValue={3} max={6} />
  </div>
)
```

### ExtraLuggage

```jsx
() => (
  <div
    style={{
      width: 328,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span className="type-body">Extra luggage</span>
      <span className="type-caption">₹80 per additional bag</span>
    </div>
    <Stepper label="Extra luggage" defaultValue={1} min={0} max={4} />
  </div>
)
```
