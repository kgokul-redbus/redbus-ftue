import * as React from 'react';

/**
 * Alert — from india-bus-ds@1.0.0.
 */
export interface AlertProps {
  title: React.ReactNode;
  /** Second line of detail. Omit for a single-line alert. */
  description?: React.ReactNode;
  /** Sets both the colour treatment and the default glyph. */
  tone?: "info" | "success" | "warning" | "error";
  /** Override the tone's default icon. */
  icon?: React.ReactNode;
  /** Trailing action, normally a tertiary `<Button />`. */
  action?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const Alert: React.ComponentType<AlertProps>;
