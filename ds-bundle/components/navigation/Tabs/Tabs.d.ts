import * as React from 'react';

/**
 * Tabs — from india-bus-ds@1.0.0.
 */
export interface TabsProps {
  items: TabItem[];
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** `fixed` splits the width evenly (2–3 tabs); the default scrolls horizontally for longer sets such as the bus-details scr */
  layout?: "scrollable" | "fixed";
  label?: string;
}

export declare const Tabs: React.ComponentType<TabsProps>;
