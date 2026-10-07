import type { InputHTMLAttributes } from 'react';
import { Icon } from '../foundations/Icon';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Accessible name when no visible label is present. */
  label?: string;
}

/**
 * Pill search input with a leading Ions search glyph. Used for city lookup and
 * boarding/dropping point search.
 */
export function SearchField({ label, className, placeholder = 'Search', ...rest }: SearchFieldProps) {
  return (
    <label className={['c-search', className].filter(Boolean).join(' ')}>
      <Icon name="ion-search" size="sm" />
      <input type="search" placeholder={placeholder} aria-label={label ?? placeholder} {...rest} />
    </label>
  );
}
