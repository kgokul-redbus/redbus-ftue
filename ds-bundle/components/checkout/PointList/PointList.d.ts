import * as React from 'react';

/**
 * PointList — from india-bus-ds@1.0.0.
 */
export interface PointListProps {
  /** Card heading, e.g. "All boarding points in Delhi". */
  heading: string;
  points: PointListItem[];
  /** Controlled selected point id (single selection shared across rows). */
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
  /** Render the kit's scroll region (`.ff-scroll.ff-point-scroll`) around the card. Its height is `calc(100% - 202px)` of the */
  scroll?: boolean;
}

export declare const PointList: React.ComponentType<PointListProps>;
