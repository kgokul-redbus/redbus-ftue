import type { HTMLAttributes, ReactNode } from 'react';

export interface OfferStripProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Leading adornment, normally an `<Icon />` such as `ion-offer`. */
  icon?: ReactNode;
  /** Trailing content, e.g. a tertiary action. */
  trailing?: ReactNode;
}

/**
 * Single-line tinted banner announcing a deal attached to a service or
 * category. Sits inside a card or above a list — not full-bleed.
 */
export function OfferStrip({ children, icon, trailing, className, ...rest }: OfferStripProps) {
  return (
    <div className={['c-offer-strip', className].filter(Boolean).join(' ')} {...rest}>
      {icon}
      <span style={{ flex: 1, minWidth: 0 }}>{children}</span>
      {trailing}
    </div>
  );
}
