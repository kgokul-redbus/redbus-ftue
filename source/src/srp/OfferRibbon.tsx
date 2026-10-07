import type { ReactNode } from 'react';

export interface OfferRibbonProps {
  /** Lead-in text, e.g. "Exclusive". */
  label?: ReactNode;
  /** Emphasised value, e.g. "5% OFF". */
  value: ReactNode;
}

/**
 * GEMS `DroidOfferStrip` (`Standard 1 Line`) as the yellow ribbon pinned to the
 * top-right of a `BusTuple`. Pass it through the tuple's `ribbon` prop rather
 * than placing it yourself — the tuple owns its position.
 */
export function OfferRibbon({ label = 'Exclusive', value }: OfferRibbonProps) {
  return (
    <div className="gems-offer-ribbon" data-variant="standard-one-line">
      {label} <strong>{value}</strong>
    </div>
  );
}
