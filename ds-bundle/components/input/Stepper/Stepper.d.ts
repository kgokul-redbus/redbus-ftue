import * as React from 'react';

/**
 * Stepper — from india-bus-ds@1.0.0.
 */
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

export declare const Stepper: React.ComponentType<StepperProps>;
