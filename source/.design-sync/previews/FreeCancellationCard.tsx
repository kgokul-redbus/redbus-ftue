import { FreeCancellationCard } from 'india-bus-ds';

export const OptedOut = () => (
  <div style={{ width: 360 }}>
    <FreeCancellationCard checked={false} />
  </div>
);

export const OptedIn = () => (
  <div style={{ width: 360 }}>
    <FreeCancellationCard checked />
  </div>
);
