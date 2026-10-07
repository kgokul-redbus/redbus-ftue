import { Icon } from '../foundations/Icon';

export interface RouteHeaderProps {
  /** Origin city, rendered bold on the first line. */
  from: string;
  /** Destination, rendered on its own line so long names like "Ganganagar (Sri Ganganagar)" fit. */
  to: string;
  /** Result count shown under the route, e.g. `7` renders "7 Buses". */
  busCount?: number;
  /** Date pill text, e.g. "9 Jul". */
  date: string;
  /** Weekday under the pill, e.g. "Thu". */
  day?: string;
  onBack?: () => void;
  /** Opens the date-selection sheet in production. */
  onDateClick?: () => void;
}

/**
 * P01 route-context top bar for search results — GEMS `DroidTopNavigation`
 * with `Trailing=Date`. Back action, two-line route, bus count and a tappable
 * date pill. Fixed 64dp chrome; content scrolls beneath it.
 */
export function RouteHeader({ from, to, busCount, date, day, onBack, onDateClick }: RouteHeaderProps) {
  return (
    <header className="c-top-nav gems-droid-top-nav" data-trailing="date">
      <button className="c-icon-button srp-back" type="button" aria-label="Back" onClick={onBack}>
        <Icon name="ion-arrow-back" size="lg" />
      </button>
      <div className="c-top-nav__titles srp-route-copy">
        <div className="srp-route-line">
          <strong>{from}</strong>
          <Icon name="ion-arrow-forward" size="sm" />
        </div>
        <div className="srp-route-destination">{to}</div>
        {busCount !== undefined ? <div className="c-top-nav__subtitle">{busCount} Buses</div> : null}
      </div>
      <button className="srp-date-control" type="button" aria-label={`Change date, ${date}`} onClick={onDateClick}>
        <span className="srp-date-pill">{date}</span>
        {day ? <span className="srp-day-label">{day}</span> : null}
      </button>
    </header>
  );
}
