import * as React from 'react';

/**
 * HomeOffers — from india-bus-ds@1.0.0.
 */
export interface HomeOffersProps {
  /** Section heading. */
  heading?: string;
  /** Support line under the heading. */
  support?: string;
  /** Cards in the horizontally scrolling rail (220px each). */
  offers: HomeOffer[];
}

export declare const HomeOffers: React.ComponentType<HomeOffersProps>;
