import * as React from 'react';

/**
 * Chip — from india-bus-ds@1.0.0.
 */
export interface ChipProps {
  children?: React.ReactNode;
  /** Renders the pressed/filter-applied treatment. */
  selected?: boolean;
  /** Second line of context — switches the chip to its `large` anatomy. */
  supporting?: React.ReactNode;
  /** Leading adornment, normally an `<Icon size="sm" />`. */
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const Chip: React.ComponentType<ChipProps>;
