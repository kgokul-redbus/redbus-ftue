import { LoadingIndicator } from 'india-bus-ds';

export const SearchingRoute = () => (
  <div style={{ width: 328 }}>
    <LoadingIndicator>Searching Chandigarh → Delhi</LoadingIndicator>
  </div>
);

export const ApplyingFilters = () => (
  <div style={{ width: 328 }}>
    <LoadingIndicator>Applying filters · A/C Sleeper</LoadingIndicator>
  </div>
);

export const IconOnly = () => (
  <div style={{ width: 328 }}>
    <LoadingIndicator iconOnly />
  </div>
);

export const ConfirmingPayment = () => (
  <div
    style={{
      width: 328,
      padding: 24,
      display: 'flex',
      justifyContent: 'center',
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <LoadingIndicator>Confirming your ₹1,798 payment</LoadingIndicator>
  </div>
);
