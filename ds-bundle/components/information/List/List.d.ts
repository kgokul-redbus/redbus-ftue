import * as React from 'react';

/**
 * List — from india-bus-ds@1.0.0.
 * @replaces ul
 */
export interface ListProps {
  /** A set of `<ListItem />` rows. */
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const List: React.ComponentType<ListProps>;
