import type { ReactNode } from 'react';
import { Icon } from '../foundations/Icon';

export interface TimerProps {
  /** Preformatted remaining time, e.g. `09:45`. Figures are tabular. */
  time: string;
  /** Text before the clock, e.g. "Seats held for". */
  children?: ReactNode;
  /** Hides the leading glyph. */
  hideIcon?: boolean;
}

/**
 * Countdown for time-boxed actions — held seats, payment windows. Display
 * only: the component never counts down on its own, so drive `time` from the
 * screen's own state.
 */
export function Timer({ time, children, hideIcon }: TimerProps) {
  return (
    <span className="c-timer" role="timer">
      {hideIcon ? null : <Icon name="ion-info" size="sm" />}
      {children}
      <span className="numeric-tabular">{time}</span>
    </span>
  );
}
