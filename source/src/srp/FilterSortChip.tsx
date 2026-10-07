import { Icon } from '../foundations/Icon';

export interface FilterSortChipProps {
  /** Applied-filter count. `0` or omitted hides the red badge. */
  count?: number;
  /** Opens the sort and filter sheet in production. */
  onClick?: () => void;
}

/**
 * P13 "Filter & Sort" entry — GEMS `DroidFilter&Sort2.0` with Boolean `Badge`.
 * Always the first item in a `FilterRail`; the badge reflects how many filters
 * are applied.
 */
export function FilterSortChip({ count = 0, onClick }: FilterSortChipProps) {
  return (
    <button className="c-chip gems-filter-and-sort" type="button" onClick={onClick}>
      <Icon name="ion-filter" size="sm" />
      <span>Filter &amp; Sort</span>
      <span className="srp-filter-badge" hidden={count === 0}>
        {count}
      </span>
    </button>
  );
}
