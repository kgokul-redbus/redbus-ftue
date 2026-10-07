import type { ReactNode } from 'react';

export interface SnackbarProps {
  children?: ReactNode;
  /** Drives `data-open` — the slide-and-fade in from the bottom. */
  open?: boolean;
  /** Single inline action label, e.g. "Undo". */
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * Brief confirmation anchored near the bottom of the screen. One line of text
 * and at most one action; it disappears on its own, so never put a required
 * choice here.
 */
export function Snackbar({ children, open, actionLabel, onAction }: SnackbarProps) {
  return (
    <div className="c-snackbar" data-open={open ? 'true' : 'false'} role="status">
      <span>{children}</span>
      {actionLabel ? (
        <button className="c-snackbar__action" type="button" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
