import { Stepper } from 'india-bus-ds';

export const Passengers = () => <Stepper label="Passengers" defaultValue={2} />;

export const AtMinimum = () => <Stepper label="Passengers" value={1} min={1} max={6} />;

export const AtMaximum = () => <Stepper label="Passengers" value={6} min={1} max={6} />;

export const InRow = () => (
  <div
    style={{
      width: 328,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span className="type-body">Passengers</span>
      <span className="type-caption">Chandigarh → Delhi · 12 Aug</span>
    </div>
    <Stepper label="Passengers" defaultValue={3} max={6} />
  </div>
);

export const ExtraLuggage = () => (
  <div
    style={{
      width: 328,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span className="type-body">Extra luggage</span>
      <span className="type-caption">₹80 per additional bag</span>
    </div>
    <Stepper label="Extra luggage" defaultValue={1} min={0} max={4} />
  </div>
);
