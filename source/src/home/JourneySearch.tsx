import { Icon } from '../foundations/Icon';

export interface QuickDate {
  /** Pill label, e.g. "Today". */
  label: string;
  /** Date it selects, e.g. "Thu 9-Jul". */
  value: string;
}

export interface JourneySearchProps {
  /** Origin city. Omit for the empty state (grey "From" placeholder). */
  origin?: string;
  /** Destination city. Omit for the empty state (grey "To" placeholder). */
  destination?: string;
  /** Journey date label, e.g. "Thu 9-Jul". */
  date?: string;
  /** Quick-date pills. The kit shows Today and Tomorrow. */
  quickDates?: QuickDate[];
  onOriginClick?: () => void;
  onDestinationClick?: () => void;
  onSwap?: () => void;
  onDateClick?: () => void;
  onQuickDate?: (value: string) => void;
}

/**
 * P07 journey search composer — GEMS `AndroidSearchSection`, candidate, not
 * node-verified. From/To rows with the swap button, and the date row with
 * quick-date pills. Empty rows show a grey placeholder; filled rows show the
 * small label above the city. The "Search buses" CTA is a separate sibling in
 * the kit (after the women-booking row): use `HomeSearchButton`.
 */
export function JourneySearch({
  origin,
  destination,
  date = 'Thu 9-Jul',
  quickDates = [
    { label: 'Today', value: 'Thu 9-Jul' },
    { label: 'Tomorrow', value: 'Fri 10-Jul' },
  ],
  onOriginClick,
  onDestinationClick,
  onSwap,
  onDateClick,
  onQuickDate,
}: JourneySearchProps) {
  return (
    <section className="ff-journey" aria-label="Search buses">
      <button className="ff-journey__row" type="button" onClick={onOriginClick}>
        <Icon name="ion-bus" className="ff-icon" />
        <span className="ff-journey__copy">
          <span className="ff-journey__label" hidden={!origin}>
            From
          </span>
          <span className="ff-journey__value" data-empty={String(!origin)}>
            {origin || 'From'}
          </span>
        </span>
      </button>
      <button className="ff-journey__swap" type="button" aria-label="Swap From and To" onClick={onSwap}>
        <Icon name="ion-swap" className="ff-icon" />
      </button>
      <button className="ff-journey__row" type="button" onClick={onDestinationClick}>
        <Icon name="ion-bus" className="ff-icon" />
        <span className="ff-journey__copy">
          <span className="ff-journey__label" hidden={!destination}>
            To
          </span>
          <span className="ff-journey__value" data-empty={String(!destination)}>
            {destination || 'To'}
          </span>
        </span>
      </button>
      <div className="ff-journey__row ff-journey__date">
        <Icon name="ion-calendar" className="ff-icon" />
        <button className="ff-journey__date-main" type="button" onClick={onDateClick}>
          <span className="ff-journey__label">Date of Journey</span>
          <span className="ff-journey__value">{date}</span>
        </button>
        {quickDates.map((q) => (
          <button key={q.label} className="ff-quick-date" type="button" onClick={() => onQuickDate?.(q.value)}>
            {q.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export interface HomeSearchButtonProps {
  label?: string;
  onClick?: () => void;
}

/**
 * P07 journey search composer, primary CTA — GEMS `AndroidSearchSection`,
 * candidate, not node-verified. 328px red pill with the search icon, placed
 * after `WomenBookingToggle` in the Home hero.
 */
export function HomeSearchButton({ label = 'Search buses', onClick }: HomeSearchButtonProps) {
  return (
    <button className="ff-primary ff-home__search" type="button" onClick={onClick}>
      <Icon name="ion-search" className="ff-icon" />
      {label}
    </button>
  );
}
