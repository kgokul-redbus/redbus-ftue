import * as React from 'react';

/**
 * TopNav — from india-bus-ds@1.0.0.
 */
export interface TopNavProps {
  title: React.ReactNode;
  /** Small line above the title — route, date, trip context. */
  overline?: React.ReactNode;
  /** Small line below the title. */
  subtitle?: React.ReactNode;
  /** Leading slot, normally a Back `<IconButton />`. */
  leading?: React.ReactNode;
  /** Trailing slot — share, overflow, help. */
  trailing?: React.ReactNode;
  /** Taller headline treatment for a screen's first view. */
  large?: boolean;
}

export declare const TopNav: React.ComponentType<TopNavProps>;
