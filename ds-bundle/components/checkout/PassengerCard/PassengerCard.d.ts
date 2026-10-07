import * as React from 'react';

/**
 * PassengerCard — from india-bus-ds@1.0.0.
 */
export interface PassengerCardProps {
  /** Saved passengers, rendered as selectable rows. */
  passengers: SavedPassenger[];
  /** Passengers required — the kit derives it from selected seats (min 1). */
  required?: number;
  /** Emphasised rule term, rendered in blue. Kit copy: "1 Male". */
  ruleEmphasis?: string;
  /** Controlled selected passenger names (multi-select). */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (names: string[]) => void;
  onAddPassenger?: () => void;
}

export declare const PassengerCard: React.ComponentType<PassengerCardProps>;
