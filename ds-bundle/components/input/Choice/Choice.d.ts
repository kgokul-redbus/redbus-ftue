import * as React from 'react';

/**
 * Choice — from india-bus-ds@1.0.0.
 */
export interface ChoiceProps {
  children?: React.ReactNode;
  /** `radio` for one-of-many, `checkbox` for independent options. */
  type?: "radio" | "checkbox";
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const Choice: React.ComponentType<ChoiceProps>;
