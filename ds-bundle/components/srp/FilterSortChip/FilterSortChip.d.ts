import * as React from 'react';

/**
 * FilterSortChip — from india-bus-ds@1.0.0.
 */
export interface FilterSortChipProps {
  /** Applied-filter count. `0` or omitted hides the red badge. */
  count?: number;
  /** Opens the sort and filter sheet in production. */
  onClick?: () => void;
}

export declare const FilterSortChip: React.ComponentType<FilterSortChipProps>;
