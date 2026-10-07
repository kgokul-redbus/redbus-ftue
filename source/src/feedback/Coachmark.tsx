import type { ReactNode } from 'react';

export interface CoachmarkProps {
  title: ReactNode;
  /** Explanation — wraps to at most three lines. */
  description?: ReactNode;
  /** Label for the dismissive action, e.g. "Not now". */
  dismissLabel?: string;
  /** Label for the confirming action, e.g. "Show me". */
  confirmLabel?: string;
  onDismiss?: () => void;
  onConfirm?: () => void;
}

/**
 * Dark contextual tip pointing at a newly introduced control. One per screen,
 * and never blocking — the user must be able to ignore it and continue.
 */
export function Coachmark({
  title,
  description,
  dismissLabel = 'Not now',
  confirmLabel = 'Show me',
  onDismiss,
  onConfirm,
}: CoachmarkProps) {
  return (
    <div className="c-coachmark">
      <strong>{title}</strong>
      {description ? <div className="c-coachmark__description">{description}</div> : null}
      <div className="c-coachmark__actions">
        <button className="c-coachmark__action" type="button" onClick={onDismiss}>
          {dismissLabel}
        </button>
        <button className="c-coachmark__action" type="button" onClick={onConfirm}>
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}
