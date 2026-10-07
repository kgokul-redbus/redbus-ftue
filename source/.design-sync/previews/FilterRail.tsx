import { FilterRail, FilterSortChip, FilterChip } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>{children}</div>
);

export const Default = () => (
  <Phone>
    <FilterRail>
      <FilterSortChip />
      <FilterChip kind="deals" />
      <FilterChip kind="ac" />
      <FilterChip kind="sleeper" />
    </FilterRail>
  </Phone>
);

export const FiltersApplied = () => (
  <Phone>
    <FilterRail>
      <FilterSortChip count={2} />
      <FilterChip kind="deals" selected />
      <FilterChip kind="ac" selected />
      <FilterChip kind="sleeper" />
    </FilterRail>
  </Phone>
);
