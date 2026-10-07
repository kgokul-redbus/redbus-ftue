import type { InputHTMLAttributes } from 'react';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Accessible name when no visible label is present. */
  label?: string;
}

/**
 * PROVISIONAL. Range input for continuous values such as a fare or departure
 * window. Marked for rework in the source system — confirm before shipping it
 * in a flow.
 */
export function Slider({ label, className, ...rest }: SliderProps) {
  return (
    <input
      type="range"
      className={['c-slider', className].filter(Boolean).join(' ')}
      aria-label={label}
      {...rest}
    />
  );
}
