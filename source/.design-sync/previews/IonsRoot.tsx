import {
  IonsRoot,
  Text,
  Button,
  Icon,
  IconButton,
  Tag,
  RatingTag,
  Divider,
  TopNav,
  BottomNav,
  List,
  ListItem,
} from 'india-bus-ds';

const SearchResult = () => (
  <div
    style={{
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
      <Text role="title-3">Zing Bus Express</Text>
      <RatingTag rating="4.4" count="1,208 ratings" />
    </div>
    <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
      Volvo 9600 AC Sleeper (2+1)
    </Text>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
      <Text role="title-2" tabular>
        22:45
      </Text>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        06h 45m
      </Text>
      <Text role="title-2" tabular>
        05:30
      </Text>
    </div>
    <Divider />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
      <Tag tone="brand" icon={<Icon name="ion-offer" size="sm" />}>
        ₹150 off
      </Tag>
      <Text role="title-2" tabular>
        ₹899
      </Text>
    </div>
  </div>
);

export const LightTheme = () => (
  <IonsRoot theme="light" style={{ width: 360, padding: 16 }}>
    <Text role="title-1" style={{ marginBottom: 12 }}>
      Chandigarh → Delhi
    </Text>
    <SearchResult />
    <Button variant="primary" block style={{ marginTop: 16 }}>
      Select seats
    </Button>
  </IonsRoot>
);

export const DarkTheme = () => (
  <IonsRoot theme="dark" style={{ width: 360, padding: 16 }}>
    <Text role="title-1" style={{ marginBottom: 12 }}>
      Chandigarh → Delhi
    </Text>
    <SearchResult />
    <Button variant="primary" block style={{ marginTop: 16 }}>
      Select seats
    </Button>
  </IonsRoot>
);

export const SideBySide = () => (
  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
    <IonsRoot theme="light" style={{ width: 300, padding: 16, borderRadius: 12 }}>
      <Text role="label" style={{ color: 'var(--content-neutral-medium-default)' }}>
        Light
      </Text>
      <List>
        <ListItem
          media={<Icon name="ion-location" />}
          title="Zirakpur Chowk"
          support="06:40 · Near Paras Down Town"
        />
        <ListItem media={<Icon name="ion-location" />} title="Ambala Cantt" support="07:35 · Highway pickup" />
      </List>
    </IonsRoot>
    <IonsRoot theme="dark" style={{ width: 300, padding: 16, borderRadius: 12 }}>
      <Text role="label" style={{ color: 'var(--content-neutral-medium-default)' }}>
        Dark
      </Text>
      <List>
        <ListItem
          media={<Icon name="ion-location" />}
          title="Zirakpur Chowk"
          support="06:40 · Near Paras Down Town"
        />
        <ListItem media={<Icon name="ion-location" />} title="Ambala Cantt" support="07:35 · Highway pickup" />
      </List>
    </IonsRoot>
  </div>
);

export const DeviceCanvas = () => (
  <IonsRoot device>
    <TopNav
      title="Chandigarh → Delhi"
      overline="Wed, 12 Aug · 24 buses"
      leading={
        <IconButton label="Back">
          <Icon name="ion-arrow-back" />
        </IconButton>
      }
      trailing={
        <IconButton label="Filter">
          <Icon name="ion-filter" />
        </IconButton>
      }
    />
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <SearchResult />
      <div
        style={{
          padding: 16,
          background: 'var(--surface-neutral-lowest-default)',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
          <Text role="title-3">IntrCity SmartBus</Text>
          <RatingTag rating="4.1" count="640 ratings" />
        </div>
        <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
          AC Seater / Sleeper (2+1) · 18 seats left
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <Text role="body" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
            23:15 → 06:05
          </Text>
          <Text role="title-2" tabular>
            ₹1,049
          </Text>
        </div>
      </div>
      <div
        style={{
          padding: 16,
          background: 'var(--surface-neutral-lowest-default)',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
          <Text role="title-3">Laxmi Holidays</Text>
          <RatingTag rating="3.9" count="312 ratings" />
        </div>
        <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
          Non-AC Seater (2+2) · Boards at Zirakpur Chowk
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <Text role="body" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
            21:30 → 05:15
          </Text>
          <Text role="title-2" tabular>
            ₹649
          </Text>
        </div>
      </div>
      <Divider />
      <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)', textAlign: 'center' }}>
        21 more buses on this route
      </Text>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <BottomNav
        defaultValue="home"
        items={[
          { value: 'home', label: 'Home', icon: 'ion-home-filled' },
          { value: 'bookings', label: 'Bookings', icon: 'ion-bookings' },
          { value: 'offers', label: 'Offers', icon: 'ion-offer' },
          { value: 'account', label: 'Account', icon: 'ion-account-circle' },
        ]}
      />
    </div>
  </IonsRoot>
);
