TextField from india-bus-ds. Use via `window.IndiaBusDS.TextField` (bundle loaded from the root `_ds_bundle.js`).

Labelled text input — the Customer Information name/phone/email pattern.
Label, control and support text are one `<label>`, so the whole block is
clickable.

## Props

```ts
interface TextFieldProps {
  /** Visible label sitting above the control. */
  label?: React.ReactNode;
  /** Helper or error text below the control. */
  support?: React.ReactNode;
  /** `error` recolours the border and support text; `disabled` greys the field and sets the underlying input's `disabled`. */
  state?: "error" | "disabled" | "default";
  /** Trailing adornment inside the control, normally an `<Icon size="sm" />`. */
  endAdornment?: React.ReactNode;
  /** Renders a multi-line control instead of a single-line input. */
  multiline?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 328 }}>
    <TextField label="Full name" placeholder="Enter full name" support="As shown on the ID" />
  </div>
)
```

### Filled

```jsx
() => (
  <div style={{ width: 328 }}>
    <TextField label="Email address" defaultValue="raghava@example.in" type="email" />
  </div>
)
```

### Error

```jsx
() => (
  <div style={{ width: 328 }}>
    <TextField
      label="Phone number"
      type="tel"
      defaultValue="987"
      state="error"
      support="Enter a valid phone number"
      endAdornment={<Icon name="ion-error" size="sm" />}
    />
  </div>
)
```

### Disabled

```jsx
() => (
  <div style={{ width: 328 }}>
    <TextField label="Ticket number" defaultValue="TK-4821-9930" state="disabled" support="Assigned after booking" />
  </div>
)
```

### Multiline

```jsx
() => (
  <div style={{ width: 328 }}>
    <TextField label="Special request" multiline placeholder="Anything the operator should know?" />
  </div>
)
```
