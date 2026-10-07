import * as React from 'react';

/**
 * ResultModeTabs — from india-bus-ds@1.0.0.
 */
export interface ResultModeTabsProps {
  /** Modes in display order. Defaults to the production Buses/Trains pair. */
  modes?: string[];
  /** Controlled selected mode. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (mode: string) => void;
}

export declare const ResultModeTabs: React.ComponentType<ResultModeTabsProps>;
