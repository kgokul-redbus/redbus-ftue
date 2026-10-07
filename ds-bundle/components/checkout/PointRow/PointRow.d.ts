import * as React from 'react';

/**
 * PointRow — from india-bus-ds@1.0.0.
 */
export interface PointRowProps {
  /** 24-hour IST time, e.g. "21:15". */
  time: string;
  /** Date under the time, e.g. "10 Jul". */
  date: string;
  /** Point name, bold. */
  name: string;
  /** Optional address line under the name. The kit's dropping rows omit it. */
  address?: string;
  /** Optional contextual tag, e.g. "Popular dropping point". */
  tag?: string;
  /** Minimum row height. The kit sizes rows by hand to their wrapped copy: `tall` (84px) for a two-line name + address, `xtal */
  size?: "default" | "tall" | "xtall";
  /** Selected state: brand radio and brand-low gradient (`aria-pressed`). */
  selected?: boolean;
  onSelect?: () => void;
}

export declare const PointRow: React.ComponentType<PointRowProps>;
