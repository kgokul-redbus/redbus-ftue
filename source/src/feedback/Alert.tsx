import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../foundations/Icon';
import type { IonIconName } from '../foundations/icons.generated';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  /** Second line of detail. Omit for a single-line alert. */
  description?: ReactNode;
  /** Sets both the colour treatment and the default glyph. */
  tone?: 'info' | 'success' | 'warning' | 'error';
  /** Override the tone's default icon. */
  icon?: ReactNode;
  /** Trailing action, normally a tertiary `<Button />`. */
  action?: ReactNode;
}

const toneIcon: Record<NonNullable<AlertProps['tone']>, IonIconName> = {
  info: 'ion-info',
  success: 'ion-check-circle',
  warning: 'ion-error',
  error: 'ion-error',
};

/**
 * Persistent in-page message, shown directly beneath the top nav. For
 * transient confirmation use `<Snackbar />`.
 */
export function Alert({ title, description, tone = 'info', icon, action, className, ...rest }: AlertProps) {
  const classes = ['c-alert', tone !== 'info' ? `c-alert--${tone}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={classes} role={tone === 'error' ? 'alert' : 'status'} {...rest}>
      {icon ?? <Icon name={toneIcon[tone]} />}
      <div className="c-alert__content">
        <div className="c-alert__title">{title}</div>
        {description ? <div className="c-alert__description">{description}</div> : null}
      </div>
      {action}
    </div>
  );
}
