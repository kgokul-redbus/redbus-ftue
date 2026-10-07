import type { ReactNode } from 'react';

export interface SeatHighlight {
  /** e.g. "New Bus". */
  title: string;
  /** e.g. "12 months old". */
  detail?: string;
}

export interface SeatTrayProps {
  /** Operator name, e.g. "Pinky Gudiya Travels And Cargo". */
  operator: string;
  /** Prefixes the name with the "Primo☆" wordmark. */
  primo?: boolean;
  /** Trip line, e.g. "21:15 - 05:50 · Fri, 10 Jul". */
  meta?: string;
  /** Rating, e.g. "4.5". */
  rating?: string;
  /** Rating count, e.g. "278". */
  ratingCount?: string;
  highlights?: SeatHighlight[];
  /**
   * Leading bus-photo tile in the highlight rail, as in production. `true`
   * uses the calibrated operator photo; a string is an image URL.
   */
  photo?: boolean | string;
  /**
   * Raises the tray to make room for the footer. Pass `true` together with a
   * `SeatSelectionFooter` whose `count` is above 0.
   */
  hasSelection?: boolean;
  /** A `SeatSelectionFooter`. */
  footer?: ReactNode;
  /** Opens the `BusDetailsSheet` (operator row and handle). */
  onDetailsClick?: () => void;
}

/**
 * P23 bus-summary peek tray — mixed GEMS: `DroidRating` is verified
 * sub-anatomy, no complete operator-tray component is verified. Operator
 * summary with Primo mark and rating, a highlight rail, and the selection
 * footer. Absolutely positioned at the bottom of the phone canvas: render it
 * inside `IonsRoot device`. Drag physics are not ported.
 */
export function SeatTray({
  operator,
  primo,
  meta,
  rating,
  ratingCount,
  highlights = [],
  photo,
  hasSelection,
  footer,
  onDetailsClick,
}: SeatTrayProps) {
  return (
    <section
      className="ff-seat-tray"
      data-has-selection={String(Boolean(hasSelection))}
      aria-label="Bus details and selection"
    >
      <div className="ff-handle" onClick={onDetailsClick} />
      <button className="ff-operator" type="button" onClick={onDetailsClick}>
        <span>
          <span className="ff-operator__name">
            {primo ? (
              <>
                <span className="ff-primo">Primo☆</span>{' '}
              </>
            ) : null}
            {operator}
          </span>
          {meta ? <span className="ff-operator__meta">{meta}</span> : null}
        </span>
        {rating ? (
          <span className="ff-rating">
            <strong>★ {rating}</strong>
            {ratingCount ? <span>{ratingCount}</span> : null}
          </span>
        ) : null}
      </button>
      {highlights.length || photo ? (
        <div className="ff-hscroll ff-highlight-rail">
          {photo ? (
            <div
              className={['ff-highlight', 'ib-highlight-photo', photo === true ? 'ib-art-bus-photo' : ''].filter(Boolean).join(' ')}
              role="img"
              aria-label={`${operator} bus`}
              style={typeof photo === 'string' ? { backgroundImage: `url("${photo}")` } : undefined}
            />
          ) : null}
          {highlights.map((item) => (
            <div key={item.title} className="ff-highlight">
              {item.title}
              {item.detail ? (
                <>
                  <br />
                  <small>{item.detail}</small>
                </>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
      {footer}
    </section>
  );
}
