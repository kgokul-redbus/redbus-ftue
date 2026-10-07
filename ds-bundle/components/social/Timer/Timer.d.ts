import * as React from 'react';

/**
 * Timer — from india-bus-ds@1.0.0.
 */
export interface TimerProps {
  /** Preformatted remaining time, e.g. `09:45`. Figures are tabular. */
  time: string;
  /** Text before the clock, e.g. "Seats held for". */
  children?: React.ReactNode;
  /** Hides the leading glyph. */
  hideIcon?: boolean;
}

export declare const Timer: React.ComponentType<TimerProps>;
