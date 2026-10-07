import * as React from 'react';

/**
 * RatingTag — from india-bus-ds@1.0.0.
 */
export interface RatingTagProps {
  /** Rating value, e.g. `4.3`. Rendered as given — format before passing. */
  rating: string | number;
  /** Optional count shown after a middot, e.g. `850 ratings`. */
  count?: string;
  /** Hides the leading star for dense rows. */
  hideIcon?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const RatingTag: React.ComponentType<RatingTagProps>;
