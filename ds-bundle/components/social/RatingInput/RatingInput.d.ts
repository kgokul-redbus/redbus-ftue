import * as React from 'react';

/**
 * RatingInput — from india-bus-ds@1.0.0.
 */
export interface RatingInputProps {
  /** Labels from worst to best. The score shown on each item is its 1-based position. Defaults to the kit's five-point scale. */
  labels?: string[];
  /** Controlled 1-based selection. */
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  /** Accessible name for the group. */
  label?: string;
}

export declare const RatingInput: React.ComponentType<RatingInputProps>;
