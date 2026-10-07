import * as React from 'react';

/**
 * Tag — from india-bus-ds@1.0.0.
 */
export interface TagProps {
  children?: React.ReactNode;
  /** `brand` is the red emphasis treatment used for NEW and redDeal. */
  tone?: "neutral" | "brand";
  /** Leading adornment, normally an `<Icon size="sm" />`. */
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const Tag: React.ComponentType<TagProps>;
