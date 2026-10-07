import type { HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  /** `brand` is the red emphasis treatment used for NEW and redDeal. */
  tone?: 'neutral' | 'brand';
  /** Leading adornment, normally an `<Icon size="sm" />`. */
  icon?: ReactNode;
}

/**
 * Small status label — amenity flags, NEW, "Primo". Read-only: if it can be
 * tapped it should be a `<Chip />` instead.
 */
export function Tag({ children, tone = 'neutral', icon, className, ...rest }: TagProps) {
  const classes = ['c-tag', tone === 'brand' ? 'c-tag--brand' : '', className].filter(Boolean).join(' ');
  return (
    <span className={classes} {...rest}>
      {icon}
      {children}
    </span>
  );
}
