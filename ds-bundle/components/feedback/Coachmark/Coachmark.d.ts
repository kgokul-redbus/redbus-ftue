import * as React from 'react';

/**
 * Coachmark — from india-bus-ds@1.0.0.
 */
export interface CoachmarkProps {
  title: React.ReactNode;
  /** Explanation — wraps to at most three lines. */
  description?: React.ReactNode;
  /** Label for the dismissive action, e.g. "Not now". */
  dismissLabel?: string;
  /** Label for the confirming action, e.g. "Show me". */
  confirmLabel?: string;
  onDismiss?: () => void;
  onConfirm?: () => void;
}

export declare const Coachmark: React.ComponentType<CoachmarkProps>;
