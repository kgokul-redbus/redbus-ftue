import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type TextRole =
  | 'extra-large-title'
  | 'large-title'
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'body'
  | 'label'
  | 'caption';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  /** Ions Android type role. Drives size, weight and line-height together. */
  role?: TextRole;
  /** Bumps weight to 600. Only `body` and `caption` carry a strong variant. */
  strong?: boolean;
  /** Tabular figures — use for fares, times and seat counts. */
  tabular?: boolean;
  /** Element to render. Defaults to `p` for body/label/caption, `h2` for titles. */
  as?: ElementType;
}

const defaultTag: Record<TextRole, ElementType> = {
  'extra-large-title': 'h1',
  'large-title': 'h1',
  'title-1': 'h2',
  'title-2': 'h3',
  'title-3': 'h4',
  body: 'p',
  label: 'span',
  caption: 'span',
};

/**
 * Typography primitive. Applies one `type-*` role class from the Ions
 * typography foundation — never set font sizes by hand.
 */
export function Text({ children, role = 'body', strong, tabular, as, className, ...rest }: TextProps) {
  const Tag = (as ?? defaultTag[role]) as ElementType;
  const strongClass = strong && (role === 'body' || role === 'caption') ? `type-${role}-strong` : '';
  const classes = [`type-${role}`, strongClass, tabular ? 'numeric-tabular' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
