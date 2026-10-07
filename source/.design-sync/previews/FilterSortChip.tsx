import { FilterRail, FilterSortChip } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>{children}</div>
);

export const NoFilters = () => (
  <Phone>
    <FilterRail>
      <FilterSortChip />
    </FilterRail>
  </Phone>
);

export const OneApplied = () => (
  <Phone>
    <FilterRail>
      <FilterSortChip count={1} />
    </FilterRail>
  </Phone>
);
