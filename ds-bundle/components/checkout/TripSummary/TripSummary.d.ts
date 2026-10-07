import * as React from 'react';

/**
 * TripSummary — from india-bus-ds@1.0.0.
 */
export interface TripSummaryProps {
  /** Operator name, centred between two hairlines. */
  operator: string;
  /** Boarding date/time, e.g. "Fri, 10 Jul · 21:15". */
  boardingTime: string;
  /** Boarding point; clamps to two lines. */
  boardingPoint: string;
  /** Dropping date/time, e.g. "Sat, 11 Jul · 05:10". */
  droppingTime: string;
  /** Dropping point; right-aligned, clamps to two lines. */
  droppingPoint: string;
  /** Selected seat count; renders "1 seat" / "2 seats". */
  seats: number;
  /** Opens the bus-details overlay in the kit. */
  onViewDetails?: () => void;
}

export declare const TripSummary: React.ComponentType<TripSummaryProps>;
