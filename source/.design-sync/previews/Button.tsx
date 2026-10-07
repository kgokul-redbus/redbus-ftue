import { Button, Icon } from 'india-bus-ds';

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary">Search buses</Button>
    <Button variant="secondary">Change date</Button>
    <Button variant="tertiary">View all</Button>
  </div>
);

export const WithIcons = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary" startIcon={<Icon name="ion-search" size="sm" />}>
      Search
    </Button>
    <Button variant="secondary" endIcon={<Icon name="ion-arrow-forward" size="sm" />}>
      Continue
    </Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" disabled>
      Select seats to continue
    </Button>
  </div>
);

export const FooterAction = () => (
  <div style={{ width: 328, padding: 16, background: 'var(--surface-neutral-lowest-default)' }}>
    <Button variant="primary" block>
      Continue · ₹1,798
    </Button>
  </div>
);
