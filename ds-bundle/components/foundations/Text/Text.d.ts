import * as React from 'react';

/**
 * Text — from india-bus-ds@1.0.0.
 */
export interface TextProps {
  children?: React.ReactNode;
  /** Ions Android type role. Drives size, weight and line-height together. */
  role?: "extra-large-title" | "large-title" | "title-1" | "title-2" | "title-3" | "body" | "label" | "caption";
  /** Bumps weight to 600. Only `body` and `caption` carry a strong variant. */
  strong?: boolean;
  /** Tabular figures — use for fares, times and seat counts. */
  tabular?: boolean;
  /** Element to render. Defaults to `p` for body/label/caption, `h2` for titles. */
  as?: "symbol" | "object" | "title" | "slot" | "style" | "form" | "pattern" | "clipPath" | "filter" | "mask" | "path" | "base" | "body" | "label" | "caption" | "a" | (string & {}) /* +164 more */;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const Text: React.ComponentType<TextProps>;
