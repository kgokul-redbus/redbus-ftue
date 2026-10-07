import type { HTMLAttributes, ReactNode } from 'react';

export interface NudgeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  /** Short explanation of the value, in caption type. */
  description?: ReactNode;
  /** Leading adornment, normally an `<Icon />`. */
  icon?: ReactNode;
  /** Optional trailing action. */
  action?: ReactNode;
}

/**
 * Low-emphasis prompt encouraging a feature without interrupting the task.
 * Quieter than `<Callout />`; never use it for errors or required steps.
 */
export function Nudge({ title, description, icon, action, className, ...rest }: NudgeProps) {
  return (
    <div className={['c-nudge', className].filter(Boolean).join(' ')} {...rest}>
      {icon}
      <div style={{ flex: 1, minWidth: 0 }}>
        <strong>{title}</strong>
        {description ? <div className="type-caption">{description}</div> : null}
      </div>
      {action}
    </div>
  );
}
