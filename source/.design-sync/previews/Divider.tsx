import { Divider, Text, List, ListItem, Icon } from 'india-bus-ds';

export const Solid = () => (
  <div style={{ width: 328 }}>
    <Text role="body">Chandigarh · 21:30</Text>
    <Divider />
    <Text role="body">Delhi ISBT Kashmere Gate · 06:15</Text>
  </div>
);

export const Dotted = () => (
  <div style={{ width: 328 }}>
    <Text role="body" tabular>GST (5%) ₹120</Text>
    <Divider variant="dotted" />
    <Text role="body" strong tabular>Total payable ₹1,418</Text>
  </div>
);

export const InFareBreakup = () => (
  <div style={{ width: 328 }}>
    <Text role="title-3">Fare breakup</Text>
    <Divider />
    <Text role="body" tabular>Base fare ₹1,200</Text>
    <Text role="body" tabular>Reservation charges ₹98</Text>
    <Text role="body" tabular>GST (5%) ₹120</Text>
    <Divider variant="dotted" />
    <Text role="body" strong tabular>Total payable ₹1,418</Text>
  </div>
);

export const BetweenSections = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem media={<Icon name="ion-location" />} title="Sector 43 Bus Terminal" support="21:30 · Chandigarh" />
    </List>
    <Divider />
    <List>
      <ListItem media={<Icon name="ion-location" />} title="Delhi ISBT Kashmere Gate" support="06:15 · Gate 3" />
    </List>
  </div>
);
