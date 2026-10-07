export interface TripSummaryProps {
  /** Operator name, centred between two hairlines. */
  operator: string;
  /** Boarding date/time, e.g. "Fri, 10 Jul · 21:15". */
  boardingTime: string;
  /** Boarding point; clamps to two lines. */
  boardingPoint: string;
  /** Dropping date/time, e.g. "Sat, 11 Jul · 05:10". */
  droppingTime: string;
  /** Dropping point; right-aligned, clamps to two lines. */
  droppingPoint: string;
  /** Selected seat count; renders "1 seat" / "2 seats". */
  seats: number;
  /** Opens the bus-details overlay in the kit. */
  onViewDetails?: () => void;
}

/**
 * P32 selected-trip summary — screenshot-led, no GEMS trip-summary component
 * was node-verified. Full-bleed 153px white band on Passenger Information:
 * operator, boarding → dropping dates and points, seat pill and
 * "View details". The Primo reassurance banner (`.ff-primo-banner`) that
 * precedes it in the kit is a separate sibling section, not part of this one.
 */
export function TripSummary({ operator, boardingTime, boardingPoint, droppingTime, droppingPoint, seats, onViewDetails }: TripSummaryProps) {
  return (
    <section className="ff-trip-summary">
      <div className="ff-trip-summary__operator">{operator}</div>
      <div className="ff-trip-summary__route">
        <div>
          <strong>{boardingTime}</strong>
          <p>{boardingPoint}</p>
        </div>
        <span className="ff-trip-summary__arrow">→</span>
        <div>
          <strong>{droppingTime}</strong>
          <p>{droppingPoint}</p>
        </div>
      </div>
      <div className="ff-trip-summary__meta">
        <span className="ff-seat-pill">
          {seats} seat{seats === 1 ? '' : 's'}
        </span>
        <button className="ff-link" type="button" onClick={onViewDetails}>
          View details
        </button>
      </div>
    </section>
  );
}
