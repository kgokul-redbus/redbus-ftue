import { BusRating } from 'india-bus-ds';

// BusRating is absolutely pinned (top 95px, right 14px) inside a tuple card;
// this frame reproduces that right-edge slot so the pill renders in context.
const Slot = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: 'relative', width: 120, height: 140, background: '#fff' }}>{children}</div>
);

export const High = () => <Slot><BusRating value="4.5" count={278} /></Slot>;

export const Mid = () => <Slot><BusRating value="3.6" count={104} tone="mid" /></Slot>;

export const WithoutCount = () => <Slot><BusRating value="4.2" /></Slot>;
