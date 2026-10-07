import type { HTMLAttributes, ReactNode } from 'react';

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** A set of `<Chip />` elements. */
  children?: ReactNode;
}

/**
 * Wrapping row for chips. Supplies the Ions gap so chips never touch.
 */
export function ChipGroup({ children, className, ...rest }: ChipGroupProps) {
  return (
    <div className={['c-chip-group', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
