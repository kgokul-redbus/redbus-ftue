import * as React from 'react';

/**
 * FreeCancellationCard — from india-bus-ds@1.0.0.
 */
export interface FreeCancellationCardProps {
  /** Headline beside the ₹ shield. */
  title?: React.ReactNode;
  /** Controlled opt-in state (`aria-checked` on the switch). */
  checked?: boolean;
  /** Initial opt-in state when uncontrolled. */
  defaultChecked?: boolean;
  /** Supporting line under the opt-in label. */
  support?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

export declare const FreeCancellationCard: React.ComponentType<FreeCancellationCardProps>;
