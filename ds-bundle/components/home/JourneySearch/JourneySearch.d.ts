import * as React from 'react';

/**
 * JourneySearch — from india-bus-ds@1.0.0.
 */
export interface JourneySearchProps {
  /** Origin city. Omit for the empty state (grey "From" placeholder). */
  origin?: string;
  /** Destination city. Omit for the empty state (grey "To" placeholder). */
  destination?: string;
  /** Journey date label, e.g. "Thu 9-Jul". */
  date?: string;
  /** Quick-date pills. The kit shows Today and Tomorrow. */
  quickDates?: QuickDate[];
  onOriginClick?: () => void;
  onDestinationClick?: () => void;
  onSwap?: () => void;
  onDateClick?: () => void;
  onQuickDate?: (value: string) => void;
}

export declare const JourneySearch: React.ComponentType<JourneySearchProps>;
