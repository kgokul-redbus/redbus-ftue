import * as React from 'react';

/**
 * BusDetailsSheet — from india-bus-ds@1.0.0.
 */
export interface BusDetailsSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Operator name, e.g. "Pinky Gudiya Travels And Cargo". */
  operator: string;
  /** Prefixes the name with the "Primo☆" wordmark. */
  primo?: boolean;
  /** Trip line, e.g. "21:15 - 05:50 · Fri, 10 Jul". */
  meta?: string;
  /** Rating, e.g. "4.5". */
  rating?: string;
  ratingCount?: string;
  /** Media rail. `true` (default) renders the kit's two slots: the extracted bus photo crop and the gradient boarding photo. */
  media?: boolean;
  /** Scrollspy tabs, one per section. */
  tabs: DetailTab[];
  /** Controlled active tab id. */
  activeSection?: string;
  defaultActiveSection?: string;
  onActiveSectionChange?: (id: string) => void;
  /** `DetailSection`s, in tab order. */
  children?: React.ReactNode;
  onClose?: () => void;
}

export declare const BusDetailsSheet: React.ComponentType<BusDetailsSheetProps>;
