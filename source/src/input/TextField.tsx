import type { InputHTMLAttributes, ReactNode } from 'react';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visible label sitting above the control. */
  label?: ReactNode;
  /** Helper or error text below the control. */
  support?: ReactNode;
  /**
   * `error` recolours the border and support text; `disabled` greys the field
   * and sets the underlying input's `disabled`.
   */
  state?: 'default' | 'error' | 'disabled';
  /** Trailing adornment inside the control, normally an `<Icon size="sm" />`. */
  endAdornment?: ReactNode;
  /** Renders a multi-line control instead of a single-line input. */
  multiline?: boolean;
}

/**
 * Labelled text input — the Customer Information name/phone/email pattern.
 * Label, control and support text are one `<label>`, so the whole block is
 * clickable.
 */
export function TextField({
  label,
  support,
  state = 'default',
  endAdornment,
  multiline,
  className,
  ...rest
}: TextFieldProps) {
  const disabled = state === 'disabled' || rest.disabled;
  return (
    <label className={['c-field', className].filter(Boolean).join(' ')} data-state={state}>
      {label ? <span className="c-field__label">{label}</span> : null}
      <span className="c-field__control">
        {multiline ? (
          <textarea
            {...(rest as unknown as InputHTMLAttributes<HTMLTextAreaElement>)}
            disabled={disabled}
            aria-invalid={state === 'error' || undefined}
          />
        ) : (
          <input
            type="text"
            {...rest}
            disabled={disabled}
            aria-invalid={state === 'error' || undefined}
          />
        )}
        {endAdornment}
      </span>
      {support ? <span className="c-field__support">{support}</span> : null}
    </label>
  );
}
