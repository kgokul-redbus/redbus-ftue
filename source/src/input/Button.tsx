import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  /**
   * `primary` is the single filled call to action per screen, `secondary` the
   * outlined companion, `tertiary` the borderless inline action.
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Stretch to the container width — the funnel's sticky footer pattern. */
  block?: boolean;
  /** Leading adornment, normally an `<Icon />`. */
  startIcon?: ReactNode;
  /** Trailing adornment, normally an `<Icon />`. */
  endIcon?: ReactNode;
}

/**
 * Crystal common button. Minimum height is the 44px Ions touch target.
 */
export function Button({
  children,
  variant = 'primary',
  block,
  startIcon,
  endIcon,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = ['c-button', `c-button--${variant}`, block ? 'c-button--block' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <button type={type} className={classes} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
