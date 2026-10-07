export interface SeatPillProps {
  /** Selected seat count; the kit floors it at 1 ("1 seat", "2 seats"). */
  count: number;
}

/**
 * P02 selected-seat pill — part of the `Android-SL-PostSelection--Footer`
 * candidate family (node not verified). Compact count chip carried into the
 * checkout trip summary after seat selection.
 */
export function SeatPill({ count }: SeatPillProps) {
  const shown = Math.max(1, count);
  return (
    <span className="ff-seat-pill">
      {shown} seat{shown === 1 ? '' : 's'}
    </span>
  );
}
