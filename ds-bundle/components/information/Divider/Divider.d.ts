import * as React from 'react';

/**
 * Divider — from india-bus-ds@1.0.0.
 */
export interface DividerProps {
  /** `dotted` marks a tear line — fare breakup totals, ticket stubs. */
  variant?: "solid" | "dotted";
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Divider: React.ComponentType<DividerProps>;
