import * as React from 'react';

/**
 * SeatTray — from india-bus-ds@1.0.0.
 */
export interface SeatTrayProps {
  /** Operator name, e.g. "Pinky Gudiya Travels And Cargo". */
  operator: string;
  /** Prefixes the name with the "Primo☆" wordmark. */
  primo?: boolean;
  /** Trip line, e.g. "21:15 - 05:50 · Fri, 10 Jul". */
  meta?: string;
  /** Rating, e.g. "4.5". */
  rating?: string;
  /** Rating count, e.g. "278". */
  ratingCount?: string;
  highlights?: SeatHighlight[];
  /** Leading bus-photo tile in the highlight rail, as in production. `true` uses the calibrated operator photo; a string is a */
  photo?: string | boolean;
  /** Raises the tray to make room for the footer. Pass `true` together with a `SeatSelectionFooter` whose `count` is above 0. */
  hasSelection?: boolean;
  /** A `SeatSelectionFooter`. */
  footer?: React.ReactNode;
  /** Opens the `BusDetailsSheet` (operator row and handle). */
  onDetailsClick?: () => void;
}

export declare const SeatTray: React.ComponentType<SeatTrayProps>;
