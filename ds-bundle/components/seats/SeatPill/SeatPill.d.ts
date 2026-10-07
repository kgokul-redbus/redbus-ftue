import * as React from 'react';

/**
 * SeatPill — from india-bus-ds@1.0.0.
 */
export interface SeatPillProps {
  /** Selected seat count; the kit floors it at 1 ("1 seat", "2 seats"). */
  count: number;
}

export declare const SeatPill: React.ComponentType<SeatPillProps>;
