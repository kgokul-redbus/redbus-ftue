import type { ReactNode } from 'react';

export interface BottomSheetProps {
  /** Drives the overlay's `data-open` state and the slide-up transition. */
  open?: boolean;
  children?: ReactNode;
  /** Sheet heading. */
  title?: ReactNode;
  /** Footer actions, normally one or two `<Button />`s. */
  actions?: ReactNode;
  /** Called when the scrim is clicked. */
  onDismiss?: () => void;
  /** Hides the drag handle for sheets that can't be swiped away. */
  hideHandle?: boolean;
}

/**
 * Bottom sheet over a scrim — filters, calendar, fare breakup and bus details
 * in the funnel. Keeps the underlying screen visible, so use it for secondary
 * controls rather than a new destination.
 */
export function BottomSheet({ open, children, title, actions, onDismiss, hideHandle }: BottomSheetProps) {
  return (
    <div className="c-overlay" data-open={open ? 'true' : 'false'} onClick={onDismiss}>
      <div
        className="c-bottom-sheet"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        {hideHandle ? null : <div className="c-bottom-sheet__handle" />}
        {title ? <h2 className="type-title-3">{title}</h2> : null}
        {children}
        {actions ? <div className="c-surface-actions">{actions}</div> : null}
      </div>
    </div>
  );
}
