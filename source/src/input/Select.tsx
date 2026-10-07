import type { ReactNode, SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options: SelectOption[];
  label?: ReactNode;
  support?: ReactNode;
  /** Non-selectable first entry, e.g. "Select an option". */
  placeholder?: string;
}

/**
 * Compact single-select built on the shared field anatomy. On phone screens a
 * long option set should open a bottom sheet instead.
 */
export function Select({ options, label, support, placeholder, className, ...rest }: SelectProps) {
  return (
    <label className={['c-field', className].filter(Boolean).join(' ')}>
      {label ? <span className="c-field__label">{label}</span> : null}
      <span className="c-field__control">
        <select {...rest}>
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
      {support ? <span className="c-field__support">{support}</span> : null}
    </label>
  );
}
