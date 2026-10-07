import * as React from 'react';

/**
 * LoadingIndicator — from india-bus-ds@1.0.0.
 */
export interface LoadingIndicatorProps {
  /** Text beside the spinner. Defaults to "Loading…". */
  children?: React.ReactNode;
  /** Hides the text and keeps only the spinner. */
  iconOnly?: boolean;
}

export declare const LoadingIndicator: React.ComponentType<LoadingIndicatorProps>;
