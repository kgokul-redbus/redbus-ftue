import { TopNav, IconButton, Icon } from 'india-bus-ds';

export const SearchResults = () => (
  <div style={{ width: 360 }}>
    <TopNav
      leading={
        <IconButton label="Back">
          <Icon name="ion-arrow-back" />
        </IconButton>
      }
      overline="Sat, 16 Aug"
      title="Chandigarh → Delhi"
      subtitle="42 buses"
      trailing={
        <IconButton label="Filters">
          <Icon name="ion-filter" />
        </IconButton>
      }
    />
  </div>
);

export const SeatSelection = () => (
  <div style={{ width: 360 }}>
    <TopNav
      leading={
        <IconButton label="Back">
          <Icon name="ion-arrow-back" />
        </IconButton>
      }
      overline="Zing Bus · A/C Sleeper (2+1)"
      title="Select seats"
      subtitle="21:30 Sector 43 → 05:10 Kashmere Gate"
      trailing={
        <IconButton label="More options">
          <Icon name="ion-more" />
        </IconButton>
      }
    />
  </div>
);

export const LargeHeadline = () => (
  <div style={{ width: 360 }}>
    <TopNav
      large
      title="My bookings"
      subtitle="2 upcoming trips"
      trailing={
        <IconButton label="Help">
          <Icon name="ion-help" />
        </IconButton>
      }
    />
  </div>
);

export const TitleOnly = () => (
  <div style={{ width: 360 }}>
    <TopNav
      leading={
        <IconButton label="Back">
          <Icon name="ion-arrow-back" />
        </IconButton>
      }
      title="Cancellation policy"
    />
  </div>
);
