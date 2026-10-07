import * as React from 'react';

/**
 * Pagination — from india-bus-ds@1.0.0.
 */
export interface PaginationProps {
  /** Number of dots to render. */
  count: number;
  /** Zero-based active index. */
  activeIndex?: number;
  onSelect?: (index: number) => void;
  label?: React.ReactNode;
}

export declare const Pagination: React.ComponentType<PaginationProps>;
