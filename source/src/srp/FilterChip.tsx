import type { ReactNode } from 'react';
import { Icon } from '../foundations/Icon';

export type FilterChipKind = 'deals' | 'ac' | 'free' | 'sleeper';

export interface FilterChipProps {
  /**
   * Production quick filter. Each kind carries its measured width and its own
   * drawn glyph (`%`, AC vents, `₹` shield, sleeper berths).
   */
  kind?: FilterChipKind;
  /** Label override. Defaults to the production label for `kind`. */
  children?: ReactNode;
  /** Applied state: brand fill plus a trailing close glyph. */
  selected?: boolean;
  onClick?: () => void;
}

const labels: Record<FilterChipKind, string> = {
  deals: 'Deals',
  ac: 'AC',
  free: 'Free Cancellation',
  sleeper: 'SLEEPER',
};

function Glyph({ kind }: { kind: FilterChipKind }) {
  if (kind === 'deals') return <span className="srp-percent-icon" aria-hidden="true">%</span>;
  if (kind === 'free') return <span className="srp-shield-icon" aria-hidden="true">₹</span>;
  if (kind === 'ac') {
    return (
      <span className="srp-ac-icon" aria-hidden="true">
        <i />
      </span>
    );
  }
  return (
    <span className="srp-sleeper-icon" aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

/**
 * P13 quick filter chip — GEMS `DroidFilterChips`. Toggles a filter from the
 * rail; when selected it shows a close glyph and the `FilterSortChip` badge
 * should count it.
 */
export function FilterChip({ kind, children, selected = false, onClick }: FilterChipProps) {
  return (
    <button
      className="c-chip gems-filter-chip"
      type="button"
      data-filter-chip={kind}
      aria-pressed={selected}
      onClick={onClick}
    >
      {kind ? <Glyph kind={kind} /> : null}
      <span>{children ?? (kind ? labels[kind] : null)}</span>
      <Icon name="ion-close" size="sm" className="srp-chip-close" />
    </button>
  );
}
