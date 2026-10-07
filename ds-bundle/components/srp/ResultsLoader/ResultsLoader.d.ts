import * as React from 'react';

/**
 * ResultsLoader — from india-bus-ds@1.0.0.
 */
export interface ResultsLoaderProps {
  /** Drives `data-open`; the loader is `display: none` while closed. */
  open?: boolean;
  /** `base` — initial load (promo rail + chip rail skeletons). `contextual` — after a filter (chip rail, AI Smart filter quer */
  variant?: "base" | "contextual";
  /** AI Smart filter query echoed in the contextual variant. */
  aiQuery?: string;
  /** Summary line under the query in the contextual variant. */
  aiSummary?: string;
  /** Screen-reader announcement. */
  announcement?: string;
}

export declare const ResultsLoader: React.ComponentType<ResultsLoaderProps>;
