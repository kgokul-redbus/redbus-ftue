import type { HTMLAttributes, ReactNode } from 'react';

export interface CalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  /** Body copy under the title. */
  description?: ReactNode;
  /** Leading adornment, normally an `<Icon />`. */
  icon?: ReactNode;
  /** Inline action, normally a tertiary `<Button />`. */
  action?: ReactNode;
}

/**
 * Bordered aside for secondary information tied to the content next to it —
 * policies, boarding guidance. Not for errors: use `<Alert />`.
 */
export function Callout({ title, description, icon, action, className, children, ...rest }: CalloutProps) {
  return (
    <div className={['c-callout', className].filter(Boolean).join(' ')} {...rest}>
      {icon}
      <div className="c-callout__content">
        {title ? <div className="c-callout__title">{title}</div> : null}
        {description ? <div className="c-callout__description">{description}</div> : null}
        {children}
        {action}
      </div>
    </div>
  );
}
