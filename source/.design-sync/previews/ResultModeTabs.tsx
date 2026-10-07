import { ResultModeTabs } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>{children}</div>
);

export const BusesSelected = () => (
  <Phone>
    <ResultModeTabs value="Buses" />
  </Phone>
);

export const TrainsSelected = () => (
  <Phone>
    <ResultModeTabs value="Trains" />
  </Phone>
);
