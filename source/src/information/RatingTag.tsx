import type { HTMLAttributes } from 'react';
import { Icon } from '../foundations/Icon';

export interface RatingTagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Rating value, e.g. `4.3`. Rendered as given — format before passing. */
  rating: string | number;
  /** Optional count shown after a middot, e.g. `850 ratings`. */
  count?: string;
  /** Hides the leading star for dense rows. */
  hideIcon?: boolean;
}

/**
 * Crystal rating pill for generic rating labels. Inside a bus result card use
 * `BusRating` instead — it carries the GEMS `DroidRating` high/mid tones and
 * the review count layout.
 */
export function RatingTag({ rating, count, hideIcon, className, ...rest }: RatingTagProps) {
  return (
    <span className={['c-rating-tag', className].filter(Boolean).join(' ')} {...rest}>
      {hideIcon ? null : <Icon name="ion-star" size="sm" />}
      {count ? `${rating} · ${count}` : rating}
    </span>
  );
}
