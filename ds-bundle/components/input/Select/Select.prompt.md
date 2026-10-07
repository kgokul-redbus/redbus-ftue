Select from india-bus-ds. Use via `window.IndiaBusDS.Select` (bundle loaded from the root `_ds_bundle.js`).

Compact single-select built on the shared field anatomy. On phone screens a
long option set should open a bottom sheet instead.

## Props

```ts
interface SelectProps {
  options: SelectOption[];
  label?: React.ReactNode;
  support?: React.ReactNode;
  /** Non-selectable first entry, e.g. "Select an option". */
  placeholder?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ width: 328 }}>
    <Select
      label="Boarding point"
      placeholder="Select a boarding point"
      options={[
        { value: 'sector-43', label: 'Sector 43 Bus Terminal · 06:15' },
        { value: 'zirakpur', label: 'Zirakpur Chowk · 06:40' },
        { value: 'ambala', label: 'Ambala Cantt · 07:35' },
      ]}
    />
  </div>
)
```

### WithSupport

```jsx
() => (
  <div style={{ width: 328 }}>
    <Select
      label="Dropping point"
      support="Arrival times are estimates and vary with traffic"
      defaultValue="kashmere-gate"
      options={[
        { value: 'kashmere-gate', label: 'Delhi ISBT Kashmere Gate · 12:40' },
        { value: 'majnu-ka-tilla', label: 'Majnu Ka Tilla · 12:20' },
        { value: 'dhaula-kuan', label: 'Dhaula Kuan · 13:10' },
      ]}
    />
  </div>
)
```

### IdProof

```jsx
() => (
  <div style={{ width: 328 }}>
    <Select
      label="ID proof type"
      support="Carry the original for verification at boarding"
      defaultValue="aadhaar"
      options={[
        { value: 'aadhaar', label: 'Aadhaar card' },
        { value: 'pan', label: 'PAN card' },
        { value: 'dl', label: "Driving licence" },
        { value: 'passport', label: 'Passport' },
      ]}
    />
  </div>
)
```

### Disabled

```jsx
() => (
  <div style={{ width: 328 }}>
    <Select
      label="State of residence"
      support="Taken from your saved profile"
      defaultValue="punjab"
      disabled
      options={[
        { value: 'punjab', label: 'Punjab' },
        { value: 'haryana', label: 'Haryana' },
        { value: 'rajasthan', label: 'Rajasthan' },
      ]}
    />
  </div>
)
```
