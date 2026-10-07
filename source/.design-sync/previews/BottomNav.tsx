import { BottomNav } from 'india-bus-ds';

export const HomeSelected = () => (
  <div style={{ width: 360 }}>
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
);

export const BookingsSelected = () => (
  <div style={{ width: 360 }}>
    <BottomNav
      value="bookings"
      items={[
        { value: 'home', label: 'Home', icon: 'ion-home' },
        { value: 'bookings', label: 'Bookings', icon: 'ion-ticket' },
        { value: 'offers', label: 'Offers', icon: 'ion-offer' },
        { value: 'account', label: 'Account', icon: 'ion-account-circle' },
      ]}
    />
  </div>
);

export const ThreeDestinations = () => (
  <div style={{ width: 360 }}>
    <BottomNav
      value="search"
      items={[
        { value: 'search', label: 'Search', icon: 'ion-search' },
        { value: 'trips', label: 'My trips', icon: 'ion-bus' },
        { value: 'account', label: 'Account', icon: 'ion-user' },
      ]}
    />
  </div>
);

export const FiveDestinations = () => (
  <div style={{ width: 360 }}>
    <BottomNav
      value="offers"
      items={[
        { value: 'home', label: 'Home', icon: 'ion-home' },
        { value: 'bookings', label: 'Bookings', icon: 'ion-bookings' },
        { value: 'offers', label: 'Offers', icon: 'ion-offer' },
        { value: 'help', label: 'Help', icon: 'ion-help' },
        { value: 'account', label: 'Account', icon: 'ion-account-circle' },
      ]}
    />
  </div>
);
