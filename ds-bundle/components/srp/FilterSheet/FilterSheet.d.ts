import * as React from 'react';

/**
 * FilterSheet — from india-bus-ds@1.0.0.
 */
export interface FilterSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Categories rail and their option panels. Defaults to the kit's calibrated set. */
  categories?: FilterSheetCategory[];
  /** Controlled active category id. */
  category?: string;
  /** Initial active category when uncontrolled. */
  defaultCategory?: string;
  /** Initial AI Smart filter textarea text. */
  aiQuery?: string;
  onCategoryChange?: (id: string) => void;
  onClear?: () => void;
  onApply?: () => void;
  onClose?: () => void;
}

export declare const FilterSheet: React.ComponentType<FilterSheetProps>;
