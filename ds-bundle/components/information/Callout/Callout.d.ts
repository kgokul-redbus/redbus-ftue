import * as React from 'react';

/**
 * Callout — from india-bus-ds@1.0.0.
 */
export interface CalloutProps {
  title?: React.ReactNode;
  /** Body copy under the title. */
  description?: React.ReactNode;
  /** Leading adornment, normally an `<Icon />`. */
  icon?: React.ReactNode;
  /** Inline action, normally a tertiary `<Button />`. */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Callout: React.ComponentType<CalloutProps>;
