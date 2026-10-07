import * as React from 'react';

/**
 * TextField — from india-bus-ds@1.0.0.
 * @replaces input
 */
export interface TextFieldProps {
  /** Visible label sitting above the control. */
  label?: React.ReactNode;
  /** Helper or error text below the control. */
  support?: React.ReactNode;
  /** `error` recolours the border and support text; `disabled` greys the field and sets the underlying input's `disabled`. */
  state?: "error" | "disabled" | "default";
  /** Trailing adornment inside the control, normally an `<Icon size="sm" />`. */
  endAdornment?: React.ReactNode;
  /** Renders a multi-line control instead of a single-line input. */
  multiline?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const TextField: React.ComponentType<TextFieldProps>;
