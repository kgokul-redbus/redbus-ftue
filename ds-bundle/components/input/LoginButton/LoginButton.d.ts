import * as React from 'react';

/**
 * LoginButton — from india-bus-ds@1.0.0.
 */
export interface LoginButtonProps {
  children?: React.ReactNode;
  /** Provider mark, normally an `<Icon />`. */
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const LoginButton: React.ComponentType<LoginButtonProps>;
