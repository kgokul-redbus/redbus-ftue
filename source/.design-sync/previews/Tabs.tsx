import { Tabs } from 'india-bus-ds';

export const BusDetails = () => (
  <div style={{ width: 360 }}>
    <Tabs
      label="Bus details sections"
      defaultValue="boarding"
      items={[
        { value: 'boarding', label: 'Boarding & dropping' },
        { value: 'amenities', label: 'Amenities' },
        { value: 'photos', label: 'Bus photos' },
        { value: 'reviews', label: 'Reviews' },
        { value: 'policy', label: 'Cancellation policy' },
      ]}
    />
  </div>
);

export const BookingsFixed = () => (
  <div style={{ width: 360 }}>
    <Tabs
      layout="fixed"
      label="Booking status"
      defaultValue="upcoming"
      items={[
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'completed', label: 'Completed' },
        { value: 'cancelled', label: 'Cancelled' },
      ]}
    />
  </div>
);

export const TripTypeFixed = () => (
  <div style={{ width: 360 }}>
    <Tabs
      layout="fixed"
      label="Trip type"
      defaultValue="round"
      items={[
        { value: 'oneway', label: 'One way' },
        { value: 'round', label: 'Round trip' },
      ]}
    />
  </div>
);

export const OperatorReviews = () => (
  <div style={{ width: 360 }}>
    <Tabs
      label="Review filters"
      defaultValue="all"
      items={[
        { value: 'all', label: 'All reviews' },
        { value: 'punctuality', label: 'Punctuality' },
        { value: 'cleanliness', label: 'Cleanliness' },
        { value: 'staff', label: 'Staff behaviour' },
      ]}
    />
  </div>
);
