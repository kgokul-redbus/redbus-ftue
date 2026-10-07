import { useState } from 'react';

export interface Seat {
  /** Seat number, e.g. "L25". Required for bookable seats. */
  id?: string;
  /** Fare in rupees, e.g. `950`. Shown as "₹950" under the seat. */
  price?: number;
  /** `sold` renders the crossed-out seat labelled "Sold". Selection is derived from `value`. */
  state?: 'available' | 'sold';
  /** Passenger restriction: `male` (blue outline + ♂) or `female` (pink outline, women-only). */
  restriction?: 'male' | 'female';
}

export interface SeatDeck {
  /** Deck heading, e.g. "Lower deck". */
  label: string;
  /** Shows the steering-wheel glyph on the heading (driver's deck). */
  steering?: boolean;
  /**
   * Seats in reading order, three per row (left single, right pair). Use
   * `null` for an empty cell — the kit's decks start with one blank cell
   * beside the steering wheel.
   */
  seats: Array<Seat | null>;
}

export interface SeatMapProps {
  /** Lower/upper decks, rendered side by side in a horizontal rail. */
  decks: SeatDeck[];
  /** Controlled selected seat ids. */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (ids: string[]) => void;
  /** Shows the "Know your seat" legend below the decks. Default `true`. */
  legend?: boolean;
}

export function formatRupee(value: number) {
  return '₹' + Number(value).toLocaleString('en-IN');
}

/**
 * P22 deck seat map — screenshot-led; GEMS `Android Bus graphic` is a
 * candidate asset only and does not verify deck or seat geometry. Lower and
 * upper sleeper decks with available, sold, male/female-restricted and
 * selected seats, plus the "Know your seat" legend. The kit only draws the
 * 28 × 61dp sleeper berth; there is no seater geometry.
 *
 * The scroll region is absolutely positioned 112dp from the top (under the
 * status bar and app bar) of the phone canvas: render it inside
 * `IonsRoot device`, with a `SeatTray` as sibling.
 */
export function SeatMap({ decks, value, defaultValue = [], onValueChange, legend = true }: SeatMapProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue);
  const selected = value ?? internal;

  const toggle = (id: string) => {
    const next = selected.includes(id) ? selected.filter((seat) => seat !== id) : [...selected, id];
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <div className="ff-scroll ff-seat-map">
      <div className="ff-hscroll">
        <div className="ff-deck-rail">
          {decks.map((deck) => (
            <section key={deck.label} className="ff-deck" aria-label={deck.label}>
              <div className="ff-deck__heading">
                <span>{deck.label}</span>
                {deck.steering ? <span className="ff-steering" aria-hidden="true" /> : null}
              </div>
              <div className="ff-seat-grid">
                {deck.seats.map((seat, index) => {
                  if (!seat) return <span key={index} />;
                  if (seat.state === 'sold' || !seat.id) {
                    return (
                      <button
                        key={index}
                        className="ff-seat"
                        type="button"
                        data-state="sold"
                        data-restriction={seat.restriction}
                        disabled
                      >
                        <span className="ff-seat__label">Sold</span>
                      </button>
                    );
                  }
                  const id = seat.id;
                  const isSelected = selected.includes(id);
                  return (
                    <button
                      key={id}
                      className="ff-seat"
                      type="button"
                      data-seat={id}
                      data-price={seat.price}
                      data-state={isSelected ? 'selected' : 'available'}
                      data-restriction={seat.restriction}
                      aria-pressed={isSelected}
                      onClick={() => toggle(id)}
                    >
                      <span className="ff-seat__label">{seat.price !== undefined ? formatRupee(seat.price) : id}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
      {legend ? (
        <section className="ff-seat-legend">
          <h2>Know your seat</h2>
          <div className="ff-seat-legend__table">
            <div className="ff-seat-legend__row">
              <span className="ff-seat" aria-hidden="true" />
              <span>Available seat</span>
            </div>
            <div className="ff-seat-legend__row">
              <span className="ff-seat" data-restriction="male" aria-hidden="true" />
              <span>Available for male passenger</span>
            </div>
            <div className="ff-seat-legend__row">
              <span className="ff-seat" data-restriction="female" aria-hidden="true" />
              <span>Available for female passenger</span>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
