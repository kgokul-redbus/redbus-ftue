import { PassengerCard } from 'india-bus-ds';

const Screen = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, padding: '1px 0 14px', background: '#f4f3f8' }}>{children}</div>
);

const saved = [
  { name: 'Sakshi Gabba', details: 'Female, 30 Years' },
  { name: 'Shubham Sharma', details: 'Male, 32 Years' },
];

export const NoneSelected = () => (
  <Screen>
    <PassengerCard passengers={saved} value={[]} />
  </Screen>
);

export const OneSelected = () => (
  <Screen>
    <PassengerCard passengers={saved} value={['Shubham Sharma']} />
  </Screen>
);

export const TwoSeats = () => (
  <Screen>
    <PassengerCard passengers={saved} required={2} value={['Sakshi Gabba', 'Shubham Sharma']} />
  </Screen>
);
