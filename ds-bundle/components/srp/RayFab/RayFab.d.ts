import * as React from 'react';

/**
 * RayFab — from india-bus-ds@1.0.0.
 */
export interface RayFabProps {
  /** Pill label. Defaults to the production "Ask Ray". */
  label?: string;
  /** Opens the `RaySheet` in production. */
  onClick?: () => void;
}

export declare const RayFab: React.ComponentType<RayFabProps>;
