import * as React from 'react';

/**
 * Coupon — from india-bus-ds@1.0.0.
 */
export interface CouponProps {
  /** Promo code, rendered in the brand colour with wide tracking. */
  code: string;
  /** What the code does, e.g. "Save ₹200 on the eligible service". */
  description?: React.ReactNode;
  /** Trailing action, normally a tertiary `<Button />` labelled Copy or Apply. */
  action?: React.ReactNode;
}

export declare const Coupon: React.ComponentType<CouponProps>;
