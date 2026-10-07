import * as React from 'react';

/**
 * LocationSearch — from india-bus-ds@1.0.0.
 */
export interface LocationSearchProps {
  /** `origin` searches boarding points; `destination` searches areas. */
  mode?: "origin" | "destination";
  /** Controlled query. */
  query?: string;
  defaultQuery?: string;
  onQueryChange?: (query: string) => void;
  /** Result groups, e.g. Recent searches then Popular boarding points. */
  groups?: LocationGroup[];
  onSelect?: (item: LocationItem) => void;
  onBack?: () => void;
}

export declare const LocationSearch: React.ComponentType<LocationSearchProps>;
