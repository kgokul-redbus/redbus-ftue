import * as React from 'react';

/**
 * SegmentedControl — from india-bus-ds@1.0.0.
 */
export interface SegmentedControlProps {
  options: SegmentedOption[];
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Accessible name for the group, e.g. "View mode". */
  label?: string;
}

export declare const SegmentedControl: React.ComponentType<SegmentedControlProps>;
