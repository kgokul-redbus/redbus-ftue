import * as React from 'react';

/**
 * SeatSelectionFooter — from india-bus-ds@1.0.0.
 */
export interface SeatSelectionFooterProps {
  /** Number of selected seats; drives "1 seat selected" and visibility. */
  count: number;
  /** Live total in rupees, e.g. `900`. */
  total: number;
  /** CTA label. */
  ctaLabel?: string;
  /** Opens the `FareSheet` price breakup. */
  onFareClick?: () => void;
  onContinue?: () => void;
}

export declare const SeatSelectionFooter: React.ComponentType<SeatSelectionFooterProps>;
