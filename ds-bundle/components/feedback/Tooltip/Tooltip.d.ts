import * as React from 'react';

/**
 * Tooltip — from india-bus-ds@1.0.0.
 */
export interface TooltipProps {
  /** The element the tooltip describes — normally an `<IconButton />`. */
  children: React.ReactNode;
  /** Tooltip copy. Keep it to a short phrase. */
  content: React.ReactNode;
  /** Renders the tooltip visible without hover, for documentation and specs. */
  forceVisible?: boolean;
}

export declare const Tooltip: React.ComponentType<TooltipProps>;
