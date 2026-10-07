import * as React from 'react';

/**
 * Slider — from india-bus-ds@1.0.0.
 * @replaces input[type=range]
 */
export interface SliderProps {
  /** Accessible name when no visible label is present. */
  label?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Slider: React.ComponentType<SliderProps>;
