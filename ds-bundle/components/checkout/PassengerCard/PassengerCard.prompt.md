PassengerCard from india-bus-ds. Use via `window.IndiaBusDS.PassengerCard` (bundle loaded from the root `_ds_bundle.js`).

P34 passenger-selection card — screenshot-led, no GEMS passenger-card
component was node-verified. "Passenger details" heading, live "n/N
Selected" count, the seat-derived rule, "Add new passenger" and
saved-passenger rows with checkboxes (`aria-selected`). The avatar is the
Ions `ion-user` glyph, matching production's person silhouette. The add
action keeps the kit's text glyph (♟+): Ions has no person-add icon.

Evidence boundary: the kit has NO add-passenger form, edit, over-selection
or rule-violation state ("Add-passenger form is not in the supplied
evidence"); the rule is copy only and is not enforced here.

## Props

```ts
interface PassengerCardProps {
  /** Saved passengers, rendered as selectable rows. */
  passengers: SavedPassenger[];
  /** Passengers required — the kit derives it from selected seats (min 1). */
  required?: number;
  /** Emphasised rule term, rendered in blue. Kit copy: "1 Male". */
  ruleEmphasis?: string;
  /** Controlled selected passenger names (multi-select). */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (names: string[]) => void;
  onAddPassenger?: () => void;
}
```

## Examples

### NoneSelected

```jsx
() => (
  <Screen>
    <PassengerCard passengers={saved} value={[]} />
  </Screen>
)
```

### OneSelected

```jsx
() => (
  <Screen>
    <PassengerCard passengers={saved} value={['Shubham Sharma']} />
  </Screen>
)
```

### TwoSeats

```jsx
() => (
  <Screen>
    <PassengerCard passengers={saved} required={2} value={['Sakshi Gabba', 'Shubham Sharma']} />
  </Screen>
)
```
