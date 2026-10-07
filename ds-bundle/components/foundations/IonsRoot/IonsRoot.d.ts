import * as React from 'react';

/**
 * IonsRoot — from india-bus-ds@1.0.0.
 */
export interface IonsRootProps {
  children?: React.ReactNode;
  /** `dark` sets `data-theme="dark"`, which re-points every semantic token. */
  theme?: "light" | "dark";
  /** Constrain to the kit's 360dp Android canvas. Use for phone screens; leave off for desktop or full-bleed layouts. */
  device?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const IonsRoot: React.ComponentType<IonsRootProps>;
