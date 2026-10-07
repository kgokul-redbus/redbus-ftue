import type { InputHTMLAttributes, ReactNode } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text, rendered to the left of the track. */
  children?: ReactNode;
}

/**
 * Immediate-effect toggle — the change applies as soon as it flips, with no
 * confirm step. For deferred choices use a checkbox instead.
 */
export function Switch({ children, className, ...rest }: SwitchProps) {
  return (
    <label className={['c-switch', className].filter(Boolean).join(' ')}>
      <span>{children}</span>
      <input type="checkbox" role="switch" {...rest} />
      <span className="c-switch__track" aria-hidden="true">
        <span className="c-switch__thumb" />
      </span>
    </label>
  );
}
