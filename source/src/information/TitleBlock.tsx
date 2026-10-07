import type { HTMLAttributes, ReactNode } from 'react';

export interface TitleBlockProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  /** Supporting line under the title. */
  support?: ReactNode;
  /** Trailing action, normally a tertiary `<Button />`. */
  action?: ReactNode;
}

/**
 * Section header: title, optional supporting line, optional trailing action.
 * Use above lists and carousels rather than a bare heading.
 */
export function TitleBlock({ title, support, action, className, ...rest }: TitleBlockProps) {
  return (
    <div className={['c-title-block', className].filter(Boolean).join(' ')} {...rest}>
      <div>
        <h3 className="type-title-3">{title}</h3>
        {support ? <div className="c-title-block__support">{support}</div> : null}
      </div>
      {action}
    </div>
  );
}
