import type { ReactNode } from 'react';

export interface ListItemProps {
  title: ReactNode;
  /** Secondary line; truncates to one line by design. */
  support?: ReactNode;
  /** Leading media slot — an `<Icon />` on the tinted brand square. */
  media?: ReactNode;
  /** Trailing slot, typically a chevron, price or `<Tag />`. */
  trailing?: ReactNode;
  /** Makes the whole row a button. Omit for static rows. */
  onClick?: () => void;
  /** Renders the media slot without the tinted background. */
  plainMedia?: boolean;
}

/**
 * One row inside a `<List />`. Pass `onClick` to make it actionable — the row
 * then renders as a full-width button with the correct touch target.
 */
export function ListItem({ title, support, media, trailing, onClick, plainMedia }: ListItemProps) {
  const inner = (
    <>
      {media ? <span className={plainMedia ? undefined : 'c-list__media'}>{media}</span> : null}
      <span className="c-list__content">
        <span className="c-list__title">{title}</span>
        {support ? <span className="c-list__support">{support}</span> : null}
      </span>
      {trailing}
    </>
  );

  if (onClick) {
    return (
      <button className="c-list__item" type="button" onClick={onClick}>
        {inner}
      </button>
    );
  }
  return <div className="c-list__item">{inner}</div>;
}
