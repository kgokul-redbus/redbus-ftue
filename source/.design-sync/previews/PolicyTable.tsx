import { DetailSection, PolicyTable } from 'india-bus-ds';

const rows = [
  { time: 'Before 7th Jul 01:15 PM', standard: '90% refund', flexible: '100% refund' },
  { time: 'From 7th Jul 01:15 PM Until 8th Jul 09:15 AM', standard: '75% refund', flexible: '100% refund' },
  { time: 'After 8th Jul 09:15 AM', standard: '50% refund', flexible: '100% refund' },
];

export const Cancellation = () => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="cancellation" title="Cancellation policy">
      <PolicyTable rows={rows} />
    </DetailSection>
  </div>
);

export const SingleWindow = () => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="cancellation" title="Cancellation policy">
      <PolicyTable rows={rows.slice(0, 1)} />
    </DetailSection>
  </div>
);
