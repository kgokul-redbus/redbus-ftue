import { Icon } from '../foundations/Icon';
import { formatRupee } from './SeatMap';

export interface SeatSelectionFooterProps {
  /** Number of selected seats; drives "1 seat selected" and visibility. */
  count: number;
  /** Live total in rupees, e.g. `900`. */
  total: number;
  /** CTA label. */
  ctaLabel?: string;
  /** Opens the `FareSheet` price breakup. */
  onFareClick?: () => void;
  onContinue?: () => void;
}

/**
 * P02 sticky selection footer — GEMS `Android-SL-PostSelection--Footer`
 * (candidate name only, node not verified). Selected-seat count, live fare
 * total with the breakup affordance, and the primary CTA. Hidden while
 * `count` is 0. Render it as the last child of `SeatTray`, which pins it
 * 42dp below the tray top.
 */
export function SeatSelectionFooter({
  count,
  total,
  ctaLabel = 'Select boarding & dropping points',
  onFareClick,
  onContinue,
}: SeatSelectionFooterProps) {
  return (
    <div className="ff-seat-selection" data-has-selection={String(count > 0)}>
      <div className="ff-seat-selection__summary">
        <span>
          {count} seat{count === 1 ? '' : 's'} selected
        </span>
        <button className="ff-seat-selection__fare" type="button" onClick={onFareClick}>
          <span>{formatRupee(total)}</span>
          <Icon name="ion-plus" size="sm" className="ff-icon ff-icon--sm" />
        </button>
      </div>
      <button className="ff-primary" type="button" onClick={onContinue}>
        {ctaLabel}
      </button>
    </div>
  );
}
