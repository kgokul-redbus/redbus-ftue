import { useState, type ReactNode } from 'react';

export interface CarouselProps {
  /** One entry per slide. Each renders inside a snap-aligned card. */
  items: ReactNode[];
  /** Shows the dot indicator under the viewport. */
  showPagination?: boolean;
  /** Accessible name for the pagination control. */
  label?: string;
}

/**
 * Horizontally snapping card row — Home campaign tiles and offer rails.
 * Scrolling is native; the dots reflect and set position.
 */
export function Carousel({ items, showPagination = true, label = 'Choose carousel item' }: CarouselProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="c-carousel">
      <div className="c-carousel__viewport">
        {items.map((item, index) => (
          <div className="c-carousel__item" key={index}>
            {item}
          </div>
        ))}
      </div>
      {showPagination ? (
        <div className="c-pagination" aria-label={label}>
          {items.map((_, index) => (
            <button
              key={index}
              className="c-pagination__dot"
              type="button"
              aria-label={`Item ${index + 1}`}
              aria-current={active === index ? 'true' : 'false'}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
