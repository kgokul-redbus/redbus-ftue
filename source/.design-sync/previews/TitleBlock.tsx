import { TitleBlock, Button, List, ListItem, Icon, Tag } from 'india-bus-ds';

export const SectionHeader = () => (
  <div style={{ width: 328 }}>
    <TitleBlock title="Boarding points" />
  </div>
);

export const WithSupport = () => (
  <div style={{ width: 328 }}>
    <TitleBlock title="Chandigarh to Delhi" support="Sat, 16 Aug · 42 buses" />
  </div>
);

export const WithAction = () => (
  <div style={{ width: 328 }}>
    <TitleBlock
      title="Recent searches"
      support="Chandigarh · Jaipur · Delhi"
      action={<Button variant="tertiary">Clear all</Button>}
    />
  </div>
);

export const AboveList = () => (
  <div style={{ width: 328 }}>
    <TitleBlock
      title="Amenities on this bus"
      support="Zing Bus · A/C Sleeper (2+1)"
      action={<Button variant="tertiary">See all</Button>}
    />
    <div style={{ height: 12 }} />
    <List>
      <ListItem media={<Icon name="ion-bus" />} title="Live tracking" support="Shared 30 minutes before departure" />
      <ListItem media={<Icon name="ion-info" />} title="Charging point" trailing={<Tag>Every seat</Tag>} />
    </List>
  </div>
);
