import * as React from 'react';

/**
 * BusRating — from india-bus-ds@1.0.0.
 */
export interface BusRatingProps {
  /** Rating as displayed, e.g. `4.5`. */
  value: string | number;
  /** Review count shown beside the pill, e.g. `278`. */
  count?: string | number;
  /** GEMS `DroidRating` `Rating Type`. The kit implements `high` (green) and `mid` (amber); GEMS also defines Low/Neutral/New */
  tone?: "high" | "mid";
}

export declare const BusRating: React.ComponentType<BusRatingProps>;
