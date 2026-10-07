import * as React from 'react';

/**
 * DetailSection — from india-bus-ds@1.0.0.
 */
export interface DetailSectionProps {
  /** Scrollspy target; matches a `BusDetailsSheet` tab id. */
  id: string;
  /** Section heading, e.g. "Boarding points". Omit for the untitled highlights block. */
  title?: string;
  /** Grey line under the heading, e.g. the city for "Boarding points" ("Delhi") or "Dropping points" ("Ganganagar (Sri Gangan */
  subtitle?: string;
  /** Section body: `PolicyTable`, `PolicyList`, `RouteTimeline`, or `<h3>`/`<p>` copy. */
  children?: React.ReactNode;
}

export declare const DetailSection: React.ComponentType<DetailSectionProps>;
