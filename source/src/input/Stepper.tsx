import { useState } from 'react';
import { Icon } from '../foundations/Icon';

export interface StepperProps {
  /** Controlled value. Omit to let the component hold its own state. */
  value?: number;
  /** Starting value in uncontrolled mode. */
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  /** Accessible name for the whole control, e.g. "Passengers". */
  label?: string;
}

/**
 * Increment/decrement control for small counts — passengers, luggage, quantity.
 * Buttons disable at the bounds rather than clamping silently.
 */
export function Stepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 6,
  step = 1,
  onValueChange,
  label,
}: StepperProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;

  const commit = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    if (value === undefined) setInternal(clamped);
    onValueChange?.(clamped);
  };

  return (
    <div className="c-stepper" data-min={min} data-max={max} role="group" aria-label={label}>
      <button
        className="c-stepper__button"
        type="button"
        aria-label="Decrease value"
        disabled={current <= min}
        onClick={() => commit(current - step)}
      >
        <Icon name="ion-minus" size="sm" />
      </button>
      <output className="c-stepper__value" aria-label={`${current} selected`}>
        {current}
      </output>
      <button
        className="c-stepper__button"
        type="button"
        aria-label="Increase value"
        disabled={current >= max}
        onClick={() => commit(current + step)}
      >
        <Icon name="ion-plus" size="sm" />
      </button>
    </div>
  );
}
