import type { ReactNode } from 'react';

export interface FilterRailProps {
  /** A `FilterSortChip` first, then `FilterChip`s. Overflows horizontally. */
  children?: ReactNode;
}

/**
 * P13 filter control rail — GEMS `Top Filter`. Horizontally scrolling row of
 * the Filter & Sort entry and quick filter chips, directly above the AI Smart
 * filter.
 */
export function FilterRail({ children }: FilterRailProps) {
  return (
    <section className="gems-top-filter" data-state="default" aria-label="Bus filters">
      <div className="gems-filter-scroll">{children}</div>
    </section>
  );
}
