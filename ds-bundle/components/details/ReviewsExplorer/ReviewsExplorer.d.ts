import * as React from 'react';

/**
 * ReviewsExplorer — from india-bus-ds@1.0.0.
 */
export interface ReviewsExplorerProps {
  /** App-bar title, e.g. "71 Reviews". */
  title: string;
  /** Overall rating in the app bar, e.g. "4.5". */
  rating?: string;
  /** Wrapping multi-select filter chips. Include an `all` option first. */
  filters?: ReviewFilterOption[];
  /** Controlled pressed filter ids. */
  filterValue?: string[];
  defaultFilterValue?: string[];
  onFilterChange?: (ids: string[]) => void;
  /** Single-select sort chips in a horizontal rail. */
  sorts?: string[];
  /** Controlled selected sort label. */
  sortValue?: string;
  defaultSortValue?: string;
  onSortChange?: (sort: string) => void;
  /** Reassurance band above the reviews. */
  verified?: React.ReactNode;
  /** `ReviewTuple`s. */
  children?: React.ReactNode;
  onBack?: () => void;
}

export declare const ReviewsExplorer: React.ComponentType<ReviewsExplorerProps>;
