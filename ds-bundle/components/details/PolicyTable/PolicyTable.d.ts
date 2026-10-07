import * as React from 'react';

/**
 * PolicyTable — from india-bus-ds@1.0.0.
 */
export interface PolicyTableProps {
  rows: PolicyTableRow[];
  /** Column headings. */
  headings?: [string, string, string];
}

export declare const PolicyTable: React.ComponentType<PolicyTableProps>;
