import * as React from 'react';

/**
 * SeatMap — from india-bus-ds@1.0.0.
 */
export interface SeatMapProps {
  /** Lower/upper decks, rendered side by side in a horizontal rail. */
  decks: SeatDeck[];
  /** Controlled selected seat ids. */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (ids: string[]) => void;
  /** Shows the "Know your seat" legend below the decks. Default `true`. */
  legend?: boolean;
}

export declare const SeatMap: React.ComponentType<SeatMapProps>;
