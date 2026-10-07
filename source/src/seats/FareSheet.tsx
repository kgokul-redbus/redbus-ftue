import { Icon } from '../foundations/Icon';
import { formatRupee } from './SeatMap';

export interface FareLine {
  /** Seat id, rendered as "Seat U17". */
  seat: string;
  /** Fare in rupees. */
  price: number;
}

export interface FareSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** One row per selected seat; the total is summed from these. */
  lines: FareLine[];
  title?: string;
  ctaLabel?: string;
  onClose?: () => void;
  onContinue?: () => void;
}

/**
 * P28 fare-breakup sheet — GEMS `Android-SL-PostSelection--Footer` is a
 * candidate for the underlying footer, not a verified fare-sheet match. Price
 * breakup per seat, seat count with total, and the continue CTA. Absolutely
 * positioned over the phone canvas: render it inside `IonsRoot device`.
 */
export function FareSheet({
  open,
  lines,
  title = 'Price breakup',
  ctaLabel = 'Select boarding & dropping points',
  onClose,
  onContinue,
}: FareSheetProps) {
  const count = lines.length;
  const total = lines.reduce((sum, line) => sum + line.price, 0);
  return (
    <div className="ff-overlay" data-open={open ? 'true' : 'false'} aria-hidden={!open}>
      <section className="ff-sheet ff-fare-sheet" role="dialog" aria-modal="true" aria-label={title}>
        <header className="ff-sheet__header">
          <h2>{title}</h2>
          <button className="ff-icon-button" type="button" aria-label="Close fare breakup" onClick={onClose}>
            <Icon name="ion-close" className="ff-icon" />
          </button>
        </header>
        <div className="ff-fare-lines">
          {lines.map((line) => (
            <div key={line.seat} className="ff-fare-line">
              <span>Seat {line.seat}</span>
              <strong>{formatRupee(line.price)}</strong>
            </div>
          ))}
        </div>
        <div className="ff-fare-line ff-fare-total">
          <span>
            {count} seat{count === 1 ? '' : 's'} selected
          </span>
          <strong>{formatRupee(total)}</strong>
        </div>
        <button className="ff-primary" type="button" onClick={onContinue}>
          {ctaLabel}
        </button>
      </section>
    </div>
  );
}
