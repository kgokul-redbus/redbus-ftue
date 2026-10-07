import * as React from 'react';

/**
 * Select — from india-bus-ds@1.0.0.
 * @replaces select
 */
export interface SelectProps {
  options: SelectOption[];
  label?: React.ReactNode;
  support?: React.ReactNode;
  /** Non-selectable first entry, e.g. "Select an option". */
  placeholder?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const Select: React.ComponentType<SelectProps>;
