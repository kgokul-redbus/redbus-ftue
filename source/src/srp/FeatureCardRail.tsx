import type { ReactNode } from 'react';

export interface FeatureCardRailProps {
  /** `FeatureCard` elements. The rail scrolls horizontally when they overflow. */
  children?: ReactNode;
}

/**
 * P12 promotional discovery rail — GEMS `Feature Cards Component`. Full-width
 * 360dp strip under the mode tabs with a hairline below.
 */
export function FeatureCardRail({ children }: FeatureCardRailProps) {
  return (
    <section className="gems-feature-rail" aria-label="Featured offers">
      {children}
    </section>
  );
}
