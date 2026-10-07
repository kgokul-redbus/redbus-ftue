ChoiceList from india-bus-ds. Use via `window.IndiaBusDS.ChoiceList` (bundle loaded from the root `_ds_bundle.js`).

Fieldset that groups related `<Choice />` rows and names them for assistive
technology — the SRP filter sheet's option groups.

## Props

```ts
interface ChoiceListProps {
  /** A set of `<Choice />` rows. */
  children?: React.ReactNode;
  /** Group heading rendered as the fieldset legend. */
  legend?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### BusTypeFilter

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Bus type">
      <Choice name="type" value="ac-sleeper" defaultChecked>
        AC Sleeper
      </Choice>
      <Choice name="type" value="ac-seater">
        AC Seater
      </Choice>
      <Choice name="type" value="non-ac-sleeper">
        Non-AC Sleeper
      </Choice>
      <Choice name="type" value="non-ac-seater">
        Non-AC Seater
      </Choice>
    </ChoiceList>
  </div>
)
```

### SortRadios

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Sort buses by">
      <Choice type="radio" name="sort-by" value="fare" defaultChecked>
        Fare — low to high
      </Choice>
      <Choice type="radio" name="sort-by" value="departure">
        Earliest departure
      </Choice>
      <Choice type="radio" name="sort-by" value="duration">
        Shortest duration
      </Choice>
    </ChoiceList>
  </div>
)
```

### OperatorFilter

```jsx
() => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Operators on Chandigarh → Delhi">
      <Choice name="operator" value="zing" defaultChecked>
        Zing Bus · 12 buses
      </Choice>
      <Choice name="operator" value="intrcity">
        IntrCity SmartBus · 8 buses
      </Choice>
      <Choice name="operator" value="laxmi">
        Laxmi Holidays · 5 buses
      </Choice>
    </ChoiceList>
  </div>
)
```

### TwoGroups

```jsx
() => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 16 }}>
    <ChoiceList legend="Departure time">
      <Choice name="depart" value="early" defaultChecked>
        Before 06:00
      </Choice>
      <Choice name="depart" value="night">
        After 18:00
      </Choice>
    </ChoiceList>
    <ChoiceList legend="Amenities">
      <Choice name="amenity" value="charging" defaultChecked>
        Charging point
      </Choice>
      <Choice name="amenity" value="blanket">
        Blanket
      </Choice>
      <Choice name="amenity" value="tracking">
        Live tracking
      </Choice>
    </ChoiceList>
  </div>
)
```
