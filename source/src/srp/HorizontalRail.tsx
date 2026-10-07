import type { HTMLAttributes, ReactNode } from 'react';

export interface HorizontalRailProps extends HTMLAttributes<HTMLDivElement> {
  /** Rail items (offer cards, chips, media, a wide table). */
  children?: ReactNode;
  /**
   * Extra kit class naming the rail's layout, e.g. `ff-offer-rail`,
   * `ff-highlight-rail`, `ff-review-chips ff-review-chips--nowrap`.
   */
  className?: string;
}

/**
 * P05 horizontal rail — screenshot-led, no GEMS component. The full-funnel
 * kit's generic `.ff-hscroll`: horizontal overflow, hidden scrollbar, contained
 * overscroll. Item layout comes from the extra class passed in `className`.
 */
export function HorizontalRail({ children, className, ...rest }: HorizontalRailProps) {
  return (
    <div className={className ? `ff-hscroll ${className}` : 'ff-hscroll'} {...rest}>
      {children}
    </div>
  );
}
