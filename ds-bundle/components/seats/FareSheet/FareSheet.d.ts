import * as React from 'react';

/**
 * FareSheet — from india-bus-ds@1.0.0.
 */
export interface FareSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** One row per selected seat; the total is summed from these. */
  lines: FareLine[];
  title?: string;
  ctaLabel?: string;
  onClose?: () => void;
  onContinue?: () => void;
}

export declare const FareSheet: React.ComponentType<FareSheetProps>;
