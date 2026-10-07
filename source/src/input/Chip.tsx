import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children?: ReactNode;
  /** Renders the pressed/filter-applied treatment. */
  selected?: boolean;
  /** Second line of context — switches the chip to its `large` anatomy. */
  supporting?: ReactNode;
  /** Leading adornment, normally an `<Icon size="sm" />`. */
  icon?: ReactNode;
}

/**
 * Compact filter or selection control. On the SRP these carry the filter rail
 * (AC, Seater, Sleeper) and the applied-filter state.
 */
export function Chip({ children, selected, supporting, icon, className, type = 'button', ...rest }: ChipProps) {
  const classes = ['c-chip', supporting ? 'c-chip--large' : '', className].filter(Boolean).join(' ');
  return (
    <button type={type} className={classes} aria-pressed={selected} {...rest}>
      {icon}
      {children}
      {supporting ? <span className="c-chip__supporting">{supporting}</span> : null}
    </button>
  );
}
