import type { HTMLAttributes } from 'react';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** `dotted` marks a tear line — fare breakup totals, ticket stubs. */
  variant?: 'solid' | 'dotted';
}

/**
 * Horizontal rule carrying the Ions border token and vertical rhythm.
 */
export function Divider({ variant = 'solid', className, ...rest }: DividerProps) {
  const classes = ['c-divider', variant === 'dotted' ? 'c-divider--dotted' : '', className]
    .filter(Boolean)
    .join(' ');
  return <hr className={classes} {...rest} />;
}
