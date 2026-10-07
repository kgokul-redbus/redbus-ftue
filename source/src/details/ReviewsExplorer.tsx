import { useState, type ReactNode } from 'react';
import { Icon } from '../foundations/Icon';

export interface ReviewFilterOption {
  /** Filter id; `all` clears the others. */
  id: string;
  label: string;
}

export interface ReviewsExplorerProps {
  /** App-bar title, e.g. "71 Reviews". */
  title: string;
  /** Overall rating in the app bar, e.g. "4.5". */
  rating?: string;
  /** Wrapping multi-select filter chips. Include an `all` option first. */
  filters?: ReviewFilterOption[];
  /** Controlled pressed filter ids. */
  filterValue?: string[];
  defaultFilterValue?: string[];
  onFilterChange?: (ids: string[]) => void;
  /** Single-select sort chips in a horizontal rail. */
  sorts?: string[];
  /** Controlled selected sort label. */
  sortValue?: string;
  defaultSortValue?: string;
  onSortChange?: (sort: string) => void;
  /** Reassurance band above the reviews. */
  verified?: ReactNode;
  /** `ReviewTuple`s. */
  children?: ReactNode;
  onBack?: () => void;
}

/**
 * P27 reviews explorer — no GEMS shell, filter or sort component verified;
 * rows are the `Android-ReviewTuple` candidate. Full screen with the rating
 * app bar, "All"-exclusive multi-select filters, a single-select sort rail,
 * the verified-traveller band and review tuples. Fills the phone canvas:
 * render it inside `IonsRoot device`.
 */
export function ReviewsExplorer({
  title,
  rating,
  filters = [],
  filterValue,
  defaultFilterValue = ['all'],
  onFilterChange,
  sorts = [],
  sortValue,
  defaultSortValue,
  onSortChange,
  verified = '✺ Real feedback from verified travelers',
  children,
  onBack,
}: ReviewsExplorerProps) {
  const [filterInternal, setFilterInternal] = useState(defaultFilterValue);
  const [sortInternal, setSortInternal] = useState(defaultSortValue ?? sorts[0]);
  const pressed = filterValue ?? filterInternal;
  const sort = sortValue ?? sortInternal;

  const toggleFilter = (id: string) => {
    const next =
      id === 'all'
        ? ['all']
        : pressed.includes(id)
          ? pressed.filter((item) => item !== id && item !== 'all')
          : [...pressed.filter((item) => item !== 'all'), id];
    if (filterValue === undefined) setFilterInternal(next);
    onFilterChange?.(next);
  };

  const selectSort = (label: string) => {
    if (sortValue === undefined) setSortInternal(label);
    onSortChange?.(label);
  };

  return (
    <section className="ff-screen ff-reviews" data-active="true" aria-label="Bus reviews">
      <div className="ff-status" />
      <header className="ff-appbar ff-reviewbar">
        <button className="ff-back" type="button" aria-label="Back" onClick={onBack}>
          <Icon name="ion-arrow-back" className="ff-icon" />
        </button>
        <div className="ff-appbar__copy">
          <h1>{title}</h1>
        </div>
        {rating ? (
          <span className="ff-rating">
            <strong>★ {rating}</strong>
          </span>
        ) : null}
      </header>
      <div className="ff-scroll ff-reviews__scroll">
        {filters.length ? (
          <>
            <h2>Filter</h2>
            <div className="ff-review-chips">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className="ff-chip"
                  type="button"
                  aria-pressed={pressed.includes(filter.id)}
                  data-review-filter={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </>
        ) : null}
        {sorts.length ? (
          <>
            <h2>Sort by</h2>
            <div className="ff-hscroll ff-review-chips ff-review-chips--nowrap">
              {sorts.map((label) => (
                <button
                  key={label}
                  className="ff-chip"
                  type="button"
                  aria-pressed={label === sort}
                  onClick={() => selectSort(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        ) : null}
        {verified ? <div className="ff-verified">{verified}</div> : null}
        {children}
      </div>
      <div className="ff-safe" />
    </section>
  );
}
