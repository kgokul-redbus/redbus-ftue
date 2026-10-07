import type { ReactNode } from 'react';
import { Icon } from '../foundations/Icon';

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
  rating?: ReactNode;
  /** Amenity and trust tags, e.g. ["Toilet", "97% On Time"]. */
  tags?: string[];
  /** An `OfferRibbon`, pinned top-right. */
  ribbon?: ReactNode;
  /** Bottom offer strip copy, e.g. "Min. 12.5% off on 3 or more seats". */
  offerStrip?: ReactNode;
  /** Primo service: shows the Primo mark and Primo card treatment. */
  primo?: boolean;
  /** Compact card for the "Previously viewed" rail. */
  previous?: boolean;
  /**
   * Result embedded in a `RaySheet` answer: sizes to content and drops the
   * top band reserved for a ribbon or Primo mark.
   */
  embedded?: boolean;
  /** Shows the bus/location trigger that opens bus details. */
  onDetailsClick?: () => void;
  onClick?: () => void;
}

/**
 * P15 bus result card — GEMS `DroidTupple-India` (`Live`). Time pair, duration
 * and seats, fare with optional struck price, operator and bus type, rating,
 * tags, and optional Primo, ribbon or offer-strip treatments. Fixed 328dp
 * width; stack in a column with the search-results background behind it.
 */
export function BusTuple({
  departure,
  arrival,
  duration,
  seats,
  singleSeats,
  fare,
  previousFare,
  operator,
  busType,
  rating,
  tags,
  ribbon,
  offerStrip,
  primo,
  previous,
  embedded,
  onDetailsClick,
  onClick,
}: BusTupleProps) {
  const className = [
    'gems-bus-tuple',
    primo ? 'gems-bus-tuple--primo' : '',
    previous ? 'gems-bus-tuple--previous' : '',
    embedded ? 'srp-ray-result-card' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={className} data-variant="live" data-primo={primo || undefined} tabIndex={0} onClick={onClick}>
      {primo ? <div className="srp-primo-logo" aria-label="Primo" /> : null}
      {ribbon}
      <div className="gems-bus-tuple__journey">
        <div>
          <strong>{departure}</strong>
          <span className="srp-time-dash" />
          <span>{arrival}</span>
          <small>
            {duration} · {seats} Seats{' '}
            {singleSeats !== undefined ? <em>({singleSeats} Single)</em> : null}
          </small>
        </div>
        <div className="gems-bus-tuple__fare">
          {previousFare ? (
            <>
              <span className="srp-old-fare">{previousFare}</span>{' '}
            </>
          ) : null}
          <strong>{fare}</strong>
          <small>Onwards</small>
        </div>
      </div>
      <div className="gems-bus-tuple__operator">
        <strong>{operator}</strong>
        {onDetailsClick ? (
          <button
            className="srp-bus-detail-trigger"
            type="button"
            aria-label="Open bus details"
            onClick={(event) => {
              event.stopPropagation();
              onDetailsClick();
            }}
          >
            <Icon name="ion-bus" size="sm" />
            <Icon name="ion-location" size="sm" />
          </button>
        ) : null}
        <small>{busType}</small>
      </div>
      {rating}
      {tags?.length ? (
        <div className="gems-bus-tuple__tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
      {offerStrip ? <div className="c-offer-strip gems-tuple-offer">{offerStrip}</div> : null}
    </article>
  );
}
