import { Icon } from '../foundations/Icon';

export interface BusRatingProps {
  /** Rating as displayed, e.g. `4.5`. */
  value: string | number;
  /** Review count shown beside the pill, e.g. `278`. */
  count?: string | number;
  /**
   * GEMS `DroidRating` `Rating Type`. The kit implements `high` (green) and
   * `mid` (amber); GEMS also defines Low/Neutral/New, which the kit has not
   * built — do not fake them with other colours.
   */
  tone?: 'high' | 'mid';
}

/**
 * GEMS `DroidRating` (Bus LOB, `Amount?` true) as nested in the bus result
 * card: rating pill plus review count. Use inside `BusTuple`; for generic
 * rating labels elsewhere use `RatingTag`.
 */
export function BusRating({ value, count, tone = 'high' }: BusRatingProps) {
  return (
    <div className={['gems-rating', tone === 'mid' ? 'gems-rating--mid' : ''].filter(Boolean).join(' ')} data-tone={tone}>
      <span className="c-rating-tag">
        <Icon name="ion-star" />
        {value}
      </span>
      {count !== undefined ? <small>{count}</small> : null}
    </div>
  );
}
