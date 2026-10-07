import * as React from 'react';

/**
 * HomeBottomNav — from india-bus-ds@1.0.0.
 */
export interface HomeBottomNavProps {
  items?: HomeNavItem[];
  /** Controlled current item id. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
}

export declare const HomeBottomNav: React.ComponentType<HomeBottomNavProps>;
