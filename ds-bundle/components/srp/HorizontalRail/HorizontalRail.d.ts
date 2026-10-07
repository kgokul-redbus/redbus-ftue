import * as React from 'react';

/**
 * HorizontalRail — from india-bus-ds@1.0.0.
 */
export interface HorizontalRailProps {
  /** Rail items (offer cards, chips, media, a wide table). */
  children?: React.ReactNode;
  /** Extra kit class naming the rail's layout, e.g. `ff-offer-rail`, `ff-highlight-rail`, `ff-review-chips ff-review-chips--n */
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const HorizontalRail: React.ComponentType<HorizontalRailProps>;
