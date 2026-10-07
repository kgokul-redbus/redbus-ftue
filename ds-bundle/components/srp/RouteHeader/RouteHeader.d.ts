import * as React from 'react';

/**
 * RouteHeader — from india-bus-ds@1.0.0.
 */
export interface RouteHeaderProps {
  /** Origin city, rendered bold on the first line. */
  from: string;
  /** Destination, rendered on its own line so long names like "Ganganagar (Sri Ganganagar)" fit. */
  to: string;
  /** Result count shown under the route, e.g. `7` renders "7 Buses". */
  busCount?: number;
  /** Date pill text, e.g. "9 Jul". */
  date: string;
  /** Weekday under the pill, e.g. "Thu". */
  day?: string;
  onBack?: () => void;
  /** Opens the date-selection sheet in production. */
  onDateClick?: () => void;
}

export declare const RouteHeader: React.ComponentType<RouteHeaderProps>;
