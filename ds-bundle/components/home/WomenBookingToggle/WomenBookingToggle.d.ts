import * as React from 'react';

/**
 * WomenBookingToggle — from india-bus-ds@1.0.0.
 */
export interface WomenBookingToggleProps {
  /** Controlled on/off. Pass it to show the on state in a capture. */
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Row title, also the switch's accessible name. */
  label?: string;
  linkLabel?: string;
  onLinkClick?: () => void;
}

export declare const WomenBookingToggle: React.ComponentType<WomenBookingToggleProps>;
