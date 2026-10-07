import { FeatureCardRail, FeatureCard } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>
    <FeatureCardRail>
      <FeatureCard variant="primo" label="Primo rising stars on redBus" />
      <FeatureCard variant="exclusive" label="Exclusive hand picked deals for you" />
    </FeatureCardRail>
  </div>
);
