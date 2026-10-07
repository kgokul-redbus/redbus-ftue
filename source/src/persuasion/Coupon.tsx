import type { ReactNode } from 'react';

export interface CouponProps {
  /** Promo code, rendered in the brand colour with wide tracking. */
  code: string;
  /** What the code does, e.g. "Save ₹200 on the eligible service". */
  description?: ReactNode;
  /** Trailing action, normally a tertiary `<Button />` labelled Copy or Apply. */
  action?: ReactNode;
}

/**
 * Dashed promo-code card. Pair with a copy or apply action — a coupon the user
 * can't act on belongs in `<OfferStrip />` instead.
 */
export function Coupon({ code, description, action }: CouponProps) {
  return (
    <div className="c-coupon">
      <div className="c-coupon__content">
        <div className="c-coupon__code">{code}</div>
        {description ? <div className="type-caption">{description}</div> : null}
      </div>
      {action}
    </div>
  );
}
