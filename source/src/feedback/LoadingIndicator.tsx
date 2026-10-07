import type { ReactNode } from 'react';

export interface LoadingIndicatorProps {
  /** Text beside the spinner. Defaults to "Loading…". */
  children?: ReactNode;
  /** Hides the text and keeps only the spinner. */
  iconOnly?: boolean;
}

/**
 * Inline progress spinner for search, filter-apply and save. The SRP's named
 * loading states (`srp:loading`, `srp:filter-loading`) use this.
 */
export function LoadingIndicator({ children = 'Loading…', iconOnly }: LoadingIndicatorProps) {
  return (
    <div className="c-loading" role="status">
      <span className="c-loading__spinner" aria-hidden="true" />
      {iconOnly ? null : children}
    </div>
  );
}
