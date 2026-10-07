import type { ReactNode } from 'react';

export interface TopNavProps {
  title: ReactNode;
  /** Small line above the title — route, date, trip context. */
  overline?: ReactNode;
  /** Small line below the title. */
  subtitle?: ReactNode;
  /** Leading slot, normally a Back `<IconButton />`. */
  leading?: ReactNode;
  /** Trailing slot — share, overflow, help. */
  trailing?: ReactNode;
  /** Taller headline treatment for a screen's first view. */
  large?: boolean;
}

/**
 * Screen top bar. Title, overline and subtitle each truncate to one line, so
 * keep route context in `overline` rather than lengthening the title.
 */
export function TopNav({ title, overline, subtitle, leading, trailing, large }: TopNavProps) {
  return (
    <div className={['c-top-nav', large ? 'c-top-nav--large' : ''].filter(Boolean).join(' ')}>
      {leading}
      <div className="c-top-nav__titles">
        {overline ? <div className="c-top-nav__overline">{overline}</div> : null}
        <div className="c-top-nav__title">{title}</div>
        {subtitle ? <div className="c-top-nav__subtitle">{subtitle}</div> : null}
      </div>
      {trailing}
    </div>
  );
}
