import * as React from 'react';

/**
 * DateSheet — from india-bus-ds@1.0.0.
 */
export interface DateSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Months in the scroll area. Defaults to the kit's July (from 9 Jul) and August 2026. */
  months?: DateSheetMonth[];
  /** Controlled selected date key, `"<monthIndex>-<day>"`, e.g. `"0-9"` for 9 Jul. */
  value?: string;
  /** Initial selection when uncontrolled. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  onClose?: () => void;
}

export declare const DateSheet: React.ComponentType<DateSheetProps>;
