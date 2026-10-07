import * as React from 'react';

/**
 * Nudge — from india-bus-ds@1.0.0.
 */
export interface NudgeProps {
  title: React.ReactNode;
  /** Short explanation of the value, in caption type. */
  description?: React.ReactNode;
  /** Leading adornment, normally an `<Icon />`. */
  icon?: React.ReactNode;
  /** Optional trailing action. */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Nudge: React.ComponentType<NudgeProps>;
