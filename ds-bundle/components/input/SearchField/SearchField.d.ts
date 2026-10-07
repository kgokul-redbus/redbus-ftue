import * as React from 'react';

/**
 * SearchField — from india-bus-ds@1.0.0.
 */
export interface SearchFieldProps {
  /** Accessible name when no visible label is present. */
  label?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const SearchField: React.ComponentType<SearchFieldProps>;
