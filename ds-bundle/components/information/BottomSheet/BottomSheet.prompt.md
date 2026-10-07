BottomSheet from india-bus-ds. Use via `window.IndiaBusDS.BottomSheet` (bundle loaded from the root `_ds_bundle.js`).

Bottom sheet over a scrim — filters, calendar, fare breakup and bus details
in the funnel. Keeps the underlying screen visible, so use it for secondary
controls rather than a new destination.

## Props

```ts
interface BottomSheetProps {
  /** Drives the overlay's `data-open` state and the slide-up transition. */
  open?: boolean;
  children?: React.ReactNode;
  /** Sheet heading. */
  title?: React.ReactNode;
  /** Footer actions, normally one or two `<Button />`s. */
  actions?: React.ReactNode;
  /** Called when the scrim is clicked. */
  onDismiss?: () => void;
  /** Hides the drag handle for sheets that can't be swiped away. */
  hideHandle?: boolean;
}
```

## Examples

### FiltersSheet

```jsx
() => (
  <Screen>
      <BottomSheet
        open
        title="Filters"
        actions={
          <>
            <Button variant="secondary">Clear all</Button>
            <Button variant="primary">Show 24 buses</Button>
          </>
        }
      >
        <ChoiceList legend="Departure time">
          <Choice type="checkbox" name="departure" defaultChecked>
            Before 06:00
          </Choice>
          <Choice type="checkbox" name="departure">
            06:00 – 12:00
          </Choice>
          <Choice type="checkbox" name="departure" defaultChecked>
            18:00 – 23:59
          </Choice>
        </ChoiceList>
        <Divider />
        <ChoiceList legend="Bus type">
          <Choice type="checkbox" name="bustype" defaultChecked>
            A/C Sleeper
          </Choice>
          <Choice type="checkbox" name="bustype">
            A/C Seater
          </Choice>
        </ChoiceList>
      </BottomSheet>
  </Screen>
)
```

### FareBreakup

```jsx
() => (
  <Screen>
      <BottomSheet
        open
        title="Fare breakup"
        actions={<Button variant="primary">Continue to pay ₹1,418</Button>}
      >
        <Text role="body">Chandigarh → Delhi ISBT Kashmere Gate · 2 seats</Text>
        <Divider />
        <Text role="body" tabular>Base fare ₹1,200</Text>
        <Text role="body" tabular>Reservation charges ₹98</Text>
        <Text role="body" tabular>GST ₹120</Text>
        <Divider variant="dotted" />
        <Text role="body" strong tabular>Total payable ₹1,418</Text>
      </BottomSheet>
  </Screen>
)
```

### BoardingPointSheet

```jsx
() => (
  <Screen>
      <BottomSheet
        open
        hideHandle
        title="Select boarding point"
        actions={<Button variant="primary">Confirm</Button>}
      >
        <List>
          <ListItem
            media={<Icon name="ion-location" />}
            title="Sector 43 Bus Terminal"
            support="21:30 · Chandigarh"
            onClick={() => {}}
          />
          <ListItem
            media={<Icon name="ion-location" />}
            title="Zirakpur Chowk"
            support="21:55 · Near Paras Down Town"
            onClick={() => {}}
          />
          <ListItem
            media={<Icon name="ion-location" />}
            title="Ambala Cantt"
            support="22:50 · Highway pickup"
            onClick={() => {}}
          />
        </List>
      </BottomSheet>
  </Screen>
)
```
