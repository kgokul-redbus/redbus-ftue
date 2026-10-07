import * as React from 'react';

/**
 * Snackbar — from india-bus-ds@1.0.0.
 */
export interface SnackbarProps {
  children?: React.ReactNode;
  /** Drives `data-open` — the slide-and-fade in from the bottom. */
  open?: boolean;
  /** Single inline action label, e.g. "Undo". */
  actionLabel?: string;
  onAction?: () => void;
}

export declare const Snackbar: React.ComponentType<SnackbarProps>;
