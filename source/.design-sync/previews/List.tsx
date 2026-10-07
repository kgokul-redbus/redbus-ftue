import { List, ListItem, Icon, Tag } from 'india-bus-ds';

export const BoardingPoints = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-location" />}
        title="Sector 43 Bus Terminal"
        support="06:15 · Chandigarh"
        trailing={<Icon name="ion-arrow-forward" size="sm" />}
        onClick={() => {}}
      />
      <ListItem
        media={<Icon name="ion-location" />}
        title="Zirakpur Chowk"
        support="06:40 · Near Paras Down Town"
        trailing={<Icon name="ion-arrow-forward" size="sm" />}
        onClick={() => {}}
      />
      <ListItem
        media={<Icon name="ion-location" />}
        title="Ambala Cantt"
        support="07:35 · Highway pickup"
        trailing={<Icon name="ion-arrow-forward" size="sm" />}
        onClick={() => {}}
      />
    </List>
  </div>
);

export const SavedPassengers = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem
        media={<Icon name="ion-user" />}
        title="Raghava Goel"
        support="32 · Male"
        trailing={<Tag>Primary</Tag>}
      />
      <ListItem media={<Icon name="ion-user" />} title="Anita Goel" support="29 · Female" />
    </List>
  </div>
);

export const TitleOnly = () => (
  <div style={{ width: 328 }}>
    <List>
      <ListItem title="Cancellation policy" trailing={<Icon name="ion-arrow-forward" size="sm" />} onClick={() => {}} />
      <ListItem title="Bus route and stops" trailing={<Icon name="ion-arrow-forward" size="sm" />} onClick={() => {}} />
      <ListItem title="Operator reviews" trailing={<Icon name="ion-arrow-forward" size="sm" />} onClick={() => {}} />
    </List>
  </div>
);
