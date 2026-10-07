import * as React from 'react';

/**
 * IconButton — from india-bus-ds@1.0.0.
 */
export interface IconButtonProps {
  /** The icon to render, normally an `<Icon />`. */
  children?: React.ReactNode;
  /** Required accessible name — the button has no visible text. */
  label: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const IconButton: React.ComponentType<IconButtonProps>;
