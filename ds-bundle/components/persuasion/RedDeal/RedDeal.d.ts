import * as React from 'react';

/**
 * RedDeal — from india-bus-ds@1.0.0.
 */
export interface RedDealProps {
  title: React.ReactNode;
  /** Value-led explanation of what the user receives. */
  description?: React.ReactNode;
  /** Badge text. Defaults to the proprietary "redDeal" label. */
  badge?: string;
  /** Trailing content such as a `<Button />` or price block. */
  children?: React.ReactNode;
}

export declare const RedDeal: React.ComponentType<RedDealProps>;
