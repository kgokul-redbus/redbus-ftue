import * as React from 'react';

/**
 * FilterChip — from india-bus-ds@1.0.0.
 */
export interface FilterChipProps {
  /** Production quick filter. Each kind carries its measured width and its own drawn glyph (`%`, AC vents, `₹` shield, sleepe */
  kind?: "deals" | "ac" | "free" | "sleeper";
  /** Label override. Defaults to the production label for `kind`. */
  children?: React.ReactNode;
  /** Applied state: brand fill plus a trailing close glyph. */
  selected?: boolean;
  onClick?: () => void;
}

export declare const FilterChip: React.ComponentType<FilterChipProps>;
