import * as React from 'react';

/**
 * Button — from india-bus-ds@1.0.0.
 * @replaces button
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** `primary` is the single filled call to action per screen, `secondary` the outlined companion, `tertiary` the borderless  */
  variant?: "primary" | "secondary" | "tertiary";
  /** Stretch to the container width — the funnel's sticky footer pattern. */
  block?: boolean;
  /** Leading adornment, normally an `<Icon />`. */
  startIcon?: React.ReactNode;
  /** Trailing adornment, normally an `<Icon />`. */
  endIcon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const Button: React.ComponentType<ButtonProps>;
