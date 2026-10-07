import * as React from 'react';

/**
 * Carousel — from india-bus-ds@1.0.0.
 */
export interface CarouselProps {
  /** One entry per slide. Each renders inside a snap-aligned card. */
  items: ReactNode[];
  /** Shows the dot indicator under the viewport. */
  showPagination?: boolean;
  /** Accessible name for the pagination control. */
  label?: string;
}

export declare const Carousel: React.ComponentType<CarouselProps>;
