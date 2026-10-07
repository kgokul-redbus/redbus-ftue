import * as React from 'react';

/**
 * ReviewTuple — from india-bus-ds@1.0.0.
 */
export interface ReviewTupleProps {
  /** Reviewer name. */
  name: string;
  /** Badge line, e.g. "🏆 Frequent Traveler". */
  badge?: string;
  /** Review date, e.g. "17 Jun 2026". */
  date: string;
  /** Star score, e.g. `1`. */
  score: number;
  /** Review text. */
  text: string;
  /** Tag group heading. */
  tagsTitle?: string;
  /** Attribute tags, e.g. ["Driving", "AC"]. */
  tags?: string[];
}

export declare const ReviewTuple: React.ComponentType<ReviewTupleProps>;
