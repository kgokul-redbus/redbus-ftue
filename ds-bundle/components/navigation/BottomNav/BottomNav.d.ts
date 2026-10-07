import * as React from 'react';

/**
 * BottomNav — from india-bus-ds@1.0.0.
 */
export interface BottomNavProps {
  /** Three to five destinations. The grid sizes itself from the count. */
  items: BottomNavItem[];
  /** Controlled active destination. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
}

export declare const BottomNav: React.ComponentType<BottomNavProps>;
