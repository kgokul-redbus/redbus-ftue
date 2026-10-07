import { EndOfResults } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 360, background: 'var(--srp-results-surface, #f2f2f8)' }}>
    <EndOfResults />
  </div>
);

export const CustomLabel = () => (
  <div style={{ width: 360, background: 'var(--srp-results-surface, #f2f2f8)' }}>
    <EndOfResults>No more buses to Ganganagar on 9 Jul</EndOfResults>
  </div>
);
