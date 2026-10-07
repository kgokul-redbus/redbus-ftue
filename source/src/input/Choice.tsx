import type { InputHTMLAttributes, ReactNode } from 'react';

export interface ChoiceProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: ReactNode;
  /** `radio` for one-of-many, `checkbox` for independent options. */
  type?: 'radio' | 'checkbox';
}

/**
 * A single radio or checkbox row with its label. Group radios by giving them
 * the same `name` inside a `<ChoiceList>`.
 */
export function Choice({ children, type = 'checkbox', className, ...rest }: ChoiceProps) {
  return (
    <label className={['c-choice', className].filter(Boolean).join(' ')}>
      <input type={type} {...rest} />
      <span>{children}</span>
    </label>
  );
}
