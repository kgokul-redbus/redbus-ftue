import * as React from 'react';

/**
 * BusTuple — from india-bus-ds@1.0.0.
 */
export interface BusTupleProps {
  /** 24-hour departure time, e.g. "21:30". */
  departure: string;
  /** 24-hour arrival time, e.g. "05:51". */
  arrival: string;
  /** Duration, e.g. "8h 21m". */
  duration: string;
  /** Seats left, e.g. `15`. */
  seats: number;
  /** Single-window seats within `seats`, shown as "(1 Single)". */
  singleSeats?: number;
  /** Preformatted current fare, e.g. "₹904". */
  fare: string;
  /** Preformatted struck-through fare, e.g. "₹952". */
  previousFare?: string;
  operator: string;
  /** Bus type, e.g. "AC Sleeper (2+1)". */
  busType: string;
  /** A `BusRating`. Omit for operators without ratings. */
  rating?: React.ReactNode;
  /** Amenity and trust tags, e.g. ["Toilet", "97% On Time"]. */
  tags?: string[];
  /** An `OfferRibbon`, pinned top-right. */
  ribbon?: React.ReactNode;
  /** Bottom offer strip copy, e.g. "Min. 12.5% off on 3 or more seats". */
  offerStrip?: React.ReactNode;
  /** Primo service: shows the Primo mark and Primo card treatment. */
  primo?: boolean;
  /** Compact card for the "Previously viewed" rail. */
  previous?: boolean;
  /** Result embedded in a `RaySheet` answer: sizes to content and drops the top band reserved for a ribbon or Primo mark. */
  embedded?: boolean;
  /** Shows the bus/location trigger that opens bus details. */
  onDetailsClick?: () => void;
  onClick?: () => void;
}

export declare const BusTuple: React.ComponentType<BusTupleProps>;
