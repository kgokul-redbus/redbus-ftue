import { SeatPill } from 'india-bus-ds';

export const OneSeat = () => (
  <div style={{ width: 360, background: '#fff', padding: 16 }}>
    <SeatPill count={1} />
  </div>
);

export const ThreeSeats = () => (
  <div style={{ width: 360, background: '#fff', padding: 16 }}>
    <SeatPill count={3} />
  </div>
);
