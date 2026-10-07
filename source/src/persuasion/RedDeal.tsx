import type { ReactNode } from 'react';
import { Tag } from '../information/Tag';

export interface RedDealProps {
  title: ReactNode;
  /** Value-led explanation of what the user receives. */
  description?: ReactNode;
  /** Badge text. Defaults to the proprietary "redDeal" label. */
  badge?: string;
  /** Trailing content such as a `<Button />` or price block. */
  children?: ReactNode;
}

/**
 * RESTRICTED treatment for the proprietary redDeal offer. The red gradient and
 * badge are reserved for genuine redDeal inventory — never for generic promos.
 */
export function RedDeal({ title, description, badge = 'redDeal', children }: RedDealProps) {
  return (
    <div className="c-reddeal">
      <Tag tone="brand">{badge}</Tag>
      <h3 className="type-title-3" style={{ marginTop: 12 }}>
        {title}
      </h3>
      {description ? <p className="type-label">{description}</p> : null}
      {children}
    </div>
  );
}
