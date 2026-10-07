import * as React from 'react';

/**
 * PointTabs — from india-bus-ds@1.0.0.
 */
export interface PointTabsProps {
  /** Controlled active stage. */
  value?: "boarding" | "dropping";
  defaultValue?: "boarding" | "dropping";
  onValueChange?: (stage: PointStage) => void;
  /** Boarding tab supporting text: the origin city while boarding is pending (kit: "Delhi"), then the selected boarding point */
  boardingLabel: string;
  /** Dropping tab supporting text: the destination city (kit: "Ganganagar (Sri Ganganagar)"), then the selected dropping poin */
  droppingLabel: string;
  /** The boarding stage has a chosen point, so `boardingLabel` is that point rather than the city: production shows it in dar */
  boardingChosen?: boolean;
  /** As `boardingChosen`, for the dropping stage. */
  droppingChosen?: boolean;
}

export declare const PointTabs: React.ComponentType<PointTabsProps>;
