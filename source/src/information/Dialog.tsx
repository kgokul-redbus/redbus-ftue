import type { ReactNode } from 'react';

export interface DialogProps {
  /** Drives the overlay's `data-open` state and the scale-in transition. */
  open?: boolean;
  children?: ReactNode;
  title?: ReactNode;
  /** Footer actions — dismissive action on the left, confirming on the right. */
  actions?: ReactNode;
  onDismiss?: () => void;
}

/**
 * Centred modal for a decision that blocks the flow — cancellation, leaving a
 * partially filled form. Anything non-blocking belongs in a `<BottomSheet />`.
 */
export function Dialog({ open, children, title, actions, onDismiss }: DialogProps) {
  return (
    <div className="c-overlay" data-open={open ? 'true' : 'false'} onClick={onDismiss}>
      <div className="c-dialog" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        {title ? <h2 className="type-title-3">{title}</h2> : null}
        {children}
        {actions ? <div className="c-surface-actions">{actions}</div> : null}
      </div>
    </div>
  );
}
