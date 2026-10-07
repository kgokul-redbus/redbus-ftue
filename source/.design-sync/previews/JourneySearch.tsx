import { JourneySearch } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: '#fff', padding: '12px 0' }}>{children}</div>
);

export const Empty = () => (
  <Phone>
    <JourneySearch date="Thu 9-Jul" />
  </Phone>
);

export const Prefilled = () => (
  <Phone>
    <JourneySearch origin="Delhi" destination="Ganganagar (Sri Ganganagar)" date="Thu 9-Jul" />
  </Phone>
);

export const Tomorrow = () => (
  <Phone>
    <JourneySearch origin="Bengaluru" destination="Hyderabad" date="Fri 10-Jul" />
  </Phone>
);
