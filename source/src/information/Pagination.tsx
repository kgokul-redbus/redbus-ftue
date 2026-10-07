import type { ReactNode } from 'react';

export interface PaginationProps {
  /** Number of dots to render. */
  count: number;
  /** Zero-based active index. */
  activeIndex?: number;
  onSelect?: (index: number) => void;
  label?: ReactNode;
}

/**
 * Dot position indicator. Pair with a `<Carousel />` or any horizontally
 * paged surface; the active dot widens rather than changing colour alone.
 */
export function Pagination({ count, activeIndex = 0, onSelect, label = 'Choose item' }: PaginationProps) {
  return (
    <div className="c-pagination" aria-label={typeof label === 'string' ? label : undefined}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          className="c-pagination__dot"
          type="button"
          aria-label={`Item ${index + 1}`}
          aria-current={activeIndex === index ? 'true' : 'false'}
          onClick={() => onSelect?.(index)}
        />
      ))}
    </div>
  );
}
