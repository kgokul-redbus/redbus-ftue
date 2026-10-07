import { useId, type ReactNode } from 'react';

export interface TooltipProps {
  /** The element the tooltip describes — normally an `<IconButton />`. */
  children: ReactNode;
  /** Tooltip copy. Keep it to a short phrase. */
  content: ReactNode;
  /** Renders the tooltip visible without hover, for documentation and specs. */
  forceVisible?: boolean;
}

/**
 * Hover/focus description for an unlabelled control. Touch devices never see
 * it, so never put information here that the task depends on.
 */
export function Tooltip({ children, content, forceVisible }: TooltipProps) {
  const id = useId();
  return (
    <span className="c-tooltip-anchor">
      <span aria-describedby={id}>{children}</span>
      <span
        className="c-tooltip"
        id={id}
        role="tooltip"
        style={forceVisible ? { visibility: 'visible', opacity: 1 } : undefined}
      >
        {content}
      </span>
    </span>
  );
}
