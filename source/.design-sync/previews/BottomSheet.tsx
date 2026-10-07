import { BottomSheet, Button, ChoiceList, Choice, Text, Divider, List, ListItem, Icon } from 'india-bus-ds';

import type { ReactNode } from 'react';

// These overlays are `position: fixed`, so in a preview cell they would anchor
// to the viewport and fall outside the captured card. A `transform` on the
// wrapper makes it a containing block for fixed descendants, keeping the
// overlay inside the phone-sized frame shown here.
const Screen = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      position: 'relative',
      transform: 'translateZ(0)',
      width: 360,
      height: 560,
      overflow: 'hidden',
      background: 'var(--surface-neutral-medium-default)',
      borderRadius: 12,
    }}
  >
    {children}
  </div>
);

export const FiltersSheet = () => (
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
);

export const FareBreakup = () => (
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
);

export const BoardingPointSheet = () => (
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
);
