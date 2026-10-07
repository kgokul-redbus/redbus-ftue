import * as React from 'react';

/**
 * TitleBlock — from india-bus-ds@1.0.0.
 */
export interface TitleBlockProps {
  title: React.ReactNode;
  /** Supporting line under the title. */
  support?: React.ReactNode;
  /** Trailing action, normally a tertiary `<Button />`. */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const TitleBlock: React.ComponentType<TitleBlockProps>;
