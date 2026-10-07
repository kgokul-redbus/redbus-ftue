import type { FieldsetHTMLAttributes, ReactNode } from 'react';

export interface ChoiceListProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** A set of `<Choice />` rows. */
  children?: ReactNode;
  /** Group heading rendered as the fieldset legend. */
  legend?: ReactNode;
}

/**
 * Fieldset that groups related `<Choice />` rows and names them for assistive
 * technology — the SRP filter sheet's option groups.
 */
export function ChoiceList({ children, legend, className, ...rest }: ChoiceListProps) {
  return (
    <fieldset className={['c-choice-list', className].filter(Boolean).join(' ')} {...rest}>
      {legend ? <legend className="type-label">{legend}</legend> : null}
      {children}
    </fieldset>
  );
}
