import * as React from 'react';

/**
 * OfferStrip — from india-bus-ds@1.0.0.
 */
export interface OfferStripProps {
  children?: React.ReactNode;
  /** Leading adornment, normally an `<Icon />` such as `ion-offer`. */
  icon?: React.ReactNode;
  /** Trailing content, e.g. a tertiary action. */
  trailing?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const OfferStrip: React.ComponentType<OfferStripProps>;
