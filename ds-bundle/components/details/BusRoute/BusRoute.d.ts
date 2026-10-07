import * as React from 'react';

/**
 * BusRoute — from india-bus-ds@1.0.0.
 */
export interface BusRouteProps {
  /** Every town the service passes, in order, e.g. ["Delhi", "Bahadurgarh (Haryana)", …]. */
  stops: string[];
  /** The traveller's boarding town. Highlighted; earlier towns are greyed. */
  from?: string;
  /** The traveller's dropping town. Highlighted; later towns are greyed. */
  to?: string;
  /** Distance and duration line, e.g. "421 km · 8h 35m". */
  summary?: string;
  /** Section heading. Defaults to the production "Bus route". */
  title?: string;
}

export declare const BusRoute: React.ComponentType<BusRouteProps>;
