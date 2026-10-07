import { WomenBookingToggle } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: '#fff', paddingBottom: 14 }}>{children}</div>
);

export const Off = () => (
  <Phone>
    <WomenBookingToggle checked={false} />
  </Phone>
);

export const On = () => (
  <Phone>
    <WomenBookingToggle checked />
  </Phone>
);
