import type { HTMLAttributes, ReactNode } from 'react';

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  /** A set of `<ListItem />` rows. */
  children?: ReactNode;
}

/**
 * Rounded surface that groups `<ListItem />` rows and draws the hairline
 * between them. Used for saved passengers, boarding points and stop lists.
 */
export function List({ children, className, ...rest }: ListProps) {
  return (
    <div className={['c-list', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
