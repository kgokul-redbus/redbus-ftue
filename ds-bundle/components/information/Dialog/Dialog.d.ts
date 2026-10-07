import * as React from 'react';

/**
 * Dialog — from india-bus-ds@1.0.0.
 * @replaces dialog
 */
export interface DialogProps {
  /** Drives the overlay's `data-open` state and the scale-in transition. */
  open?: boolean;
  children?: React.ReactNode;
  title?: React.ReactNode;
  /** Footer actions — dismissive action on the left, confirming on the right. */
  actions?: React.ReactNode;
  onDismiss?: () => void;
}

export declare const Dialog: React.ComponentType<DialogProps>;
