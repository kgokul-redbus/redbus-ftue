AiSmartFilter from india-bus-ds. Use via `window.IndiaBusDS.AiSmartFilter` (bundle loaded from the root `_ds_bundle.js`).

P14 AI Smart filter — no GEMS component exists; this is the screenshot-led
India bus pattern. Natural-language bus preferences with the Ray sparkle,
voice entry, explicit submit and a persistent applied state. Sits between
the `FilterRail` and the results.

## Props

```ts
interface AiSmartFilterProps {
  /** `idle` shows the hint and microphone; `filled` swaps the mic for clear and reveals "Search Buses"; `loading` shows the s */
  state?: "idle" | "filled" | "loading" | "applied";
  /** Controlled query text. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (query: string) => void;
  onClear?: () => void;
  placeholder?: string;
}
```

## Examples

### Idle

```jsx
() => (
  <Phone>
    <AiSmartFilter state="idle" />
  </Phone>
)
```

### Filled

```jsx
() => (
  <Phone>
    <AiSmartFilter state="filled" value="show ac buses" />
  </Phone>
)
```

### Loading

```jsx
() => (
  <Phone>
    <AiSmartFilter state="loading" value="ac sleeper under 1000" />
  </Phone>
)
```

### Applied

```jsx
() => (
  <Phone>
    <AiSmartFilter state="applied" value="ac sleeper under 1000" />
  </Phone>
)
```
