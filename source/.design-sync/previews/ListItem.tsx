import { List, ListItem, Icon, Tag, RatingTag, Text } from 'india-bus-ds';

export const WithMedia = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-location" />}
        title="Delhi ISBT Kashmere Gate"
        support="22:45 · Gate 3, platform 12"
      />
    </List>
  </div>
);

export const WithTrailing = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-ticket" />}
        title="Zing Bus"
        support="A/C Sleeper (2+1) · 21:30"
        trailing={<RatingTag rating="4.4" />}
      />
      <ListItem
        media={<Icon name="ion-bus" />}
        title="IntrCity SmartBus"
        support="A/C Seater · 23:15"
        trailing={<Text role="body" strong tabular>₹1,249</Text>}
      />
    </List>
  </div>
);

export const TitleOnly = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem title="Ambala Cantt" />
      <ListItem title="Karnal Bypass" />
      <ListItem title="Murthal Dhaba" />
    </List>
  </div>
);

export const Actionable = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-offer" />}
        title="Apply a coupon"
        support="2 offers available on this route"
        trailing={<Icon name="ion-arrow-forward" size="sm" />}
        onClick={() => {}}
      />
      <ListItem
        media={<Icon name="ion-user" />}
        title="Anita Goel"
        support="29 · Female · Seat L4"
        trailing={<Tag tone="brand">Primary</Tag>}
        onClick={() => {}}
      />
    </List>
  </div>
);
