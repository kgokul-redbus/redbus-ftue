import { FilterRail, FilterChip } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>{children}</div>
);

export const ProductionKinds = () => (
  <Phone>
    <FilterRail>
      <FilterChip kind="deals" />
      <FilterChip kind="ac" />
      <FilterChip kind="sleeper" />
    </FilterRail>
  </Phone>
);

export const Selected = () => (
  <Phone>
    <FilterRail>
      <FilterChip kind="deals" selected />
      <FilterChip kind="sleeper" selected />
    </FilterRail>
  </Phone>
);
