import * as React from 'react';

/**
 * Table — from india-bus-ds@1.0.0.
 * @replaces table
 */
export interface TableProps {
  /** Column headers, in order. */
  columns: ReactNode[];
  /** Row cells, in the same column order. */
  rows: ReactNode[][];
  /** Accessible caption for the table. */
  label?: string;
}

export declare const Table: React.ComponentType<TableProps>;
