import type { ReactNode } from 'react';

export interface EndOfResultsProps {
  /** Divider label. */
  children?: ReactNode;
}

/**
 * P20 end of results — screenshot-led, no GEMS component. Centred label between
 * two hairlines closing the bus list.
 */
export function EndOfResults({ children = 'End of the list' }: EndOfResultsProps) {
  return (
    <div className="srp-end-state">
      <span />
      <p>{children}</p>
      <span />
    </div>
  );
}
