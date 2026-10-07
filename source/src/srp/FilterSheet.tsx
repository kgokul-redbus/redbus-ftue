import { useState, type ReactNode } from 'react';
import { Icon } from '../foundations/Icon';

export interface FilterSheetOption {
  /** Option label. */
  label: string;
  /** Checked state of the option's input. */
  checked?: boolean;
}

export interface FilterSheetCategory {
  /** Category id (`data-filter-category` / `data-filter-panel`). */
  id: string;
  /** Rail label; may contain `<br />` like the kit's two-line labels. */
  label: ReactNode;
  /** Panel heading. Unused by the AI panel. */
  heading?: string;
  /** `radio` for single choice (Sort by), `checkbox` (default), or `ai` for the free-text AI Smart filter. */
  kind?: 'checkbox' | 'radio' | 'ai';
  options?: FilterSheetOption[];
}

export interface FilterSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Categories rail and their option panels. Defaults to the kit's calibrated set. */
  categories?: FilterSheetCategory[];
  /** Controlled active category id. */
  category?: string;
  /** Initial active category when uncontrolled. */
  defaultCategory?: string;
  /** Initial AI Smart filter textarea text. */
  aiQuery?: string;
  onCategoryChange?: (id: string) => void;
  onClear?: () => void;
  onApply?: () => void;
  onClose?: () => void;
}

const twoLine = (a: string, b: string) => (
  <>
    {a}
    <br />
    {b}
  </>
);
const opts = (...labels: string[]) => labels.map((label) => ({ label }));

const defaultCategories: FilterSheetCategory[] = [
  { id: 'ai', label: 'AI Smart filter', kind: 'ai' },
  {
    id: 'sort',
    label: 'Sort by',
    heading: 'Sort by',
    kind: 'radio',
    options: [{ label: 'Recommended', checked: true }, { label: 'Fare — low to high' }, { label: 'Ratings — high to low' }],
  },
  { id: 'departure', label: twoLine('Departure time', 'from source'), heading: 'Departure time', options: opts('Before 10 AM', '10 AM – 5 PM', 'After 5 PM') },
  { id: 'type', label: 'Bus Type', heading: 'Bus Type', options: opts('AC', 'Sleeper', 'Seater') },
  { id: 'single', label: twoLine('Single Window', 'Sleeper/Seater'), heading: 'Single Window', options: opts('Single window seat') },
  { id: 'boarding', label: 'Boarding Points', heading: 'Boarding Points', options: opts('Old Delhi Railway Station', 'Peeragarhi') },
  { id: 'dropping', label: 'Dropping Points', heading: 'Dropping Points', options: opts('Lalgarh', 'Koda Chowk') },
  { id: 'operator', label: 'Bus Operator', heading: 'Bus Operator', options: opts('Primo', 'Tantia Travels') },
  { id: 'amenities', label: 'Amenities', heading: 'Amenities', options: opts('Toilet', 'Charging point') },
  { id: 'features', label: 'Bus Features', heading: 'Bus Features', options: opts('Free Cancellation', 'Deals') },
  { id: 'arrival', label: twoLine('Arrival time at', 'destination'), heading: 'Arrival time', options: opts('Before 8 AM', 'After 8 AM') },
];

/**
 * P16 sort & filter sheet — screenshot-led sheet (entered from GEMS
 * `DroidFilterChips`). Bottom sheet with a categories rail (AI Smart filter
 * first), one options panel per category and a Clear all / Apply footer.
 * Absolutely positioned over the phone viewport: render it inside
 * `IonsRoot device`.
 */
export function FilterSheet({
  open,
  categories = defaultCategories,
  category,
  defaultCategory,
  aiQuery,
  onCategoryChange,
  onClear,
  onApply,
  onClose,
}: FilterSheetProps) {
  const [inner, setInner] = useState(defaultCategory ?? categories[0]?.id);
  const active = category ?? inner;
  const pick = (id: string) => {
    if (category === undefined) setInner(id);
    onCategoryChange?.(id);
  };
  return (
    <div className="c-overlay srp-overlay" data-open={open ? 'true' : 'false'}>
      <section className="c-bottom-sheet srp-sheet srp-filter-sheet" role="dialog" aria-modal="true" aria-label="Filter Buses">
        <header className="srp-sheet-header">
          <h2>Filter Buses</h2>
          <button className="c-icon-button" type="button" aria-label="Close filters" onClick={onClose}>
            <Icon name="ion-close" size="lg" />
          </button>
        </header>
        <div className="srp-filter-workspace">
          <nav className="srp-filter-categories" aria-label="Filter categories">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                data-filter-category={c.id}
                aria-selected={c.id === active}
                onClick={() => pick(c.id)}
              >
                {c.kind === 'ai' ? <span className="ray-sparkle" aria-hidden="true" /> : null}
                {c.label}
              </button>
            ))}
          </nav>
          <div className="srp-filter-options">
            {categories.map((c) => (
              <section key={c.id} data-filter-panel={c.id} data-active={c.id === active ? 'true' : 'false'}>
                {c.kind === 'ai' ? (
                  <>
                    <label className="srp-visually-hidden" htmlFor={`sheet-ai-query-${c.id}`}>
                      Bus preferences
                    </label>
                    <textarea
                      id={`sheet-ai-query-${c.id}`}
                      placeholder="Search for your bus preferences in any language"
                      defaultValue={aiQuery}
                    />
                  </>
                ) : (
                  <>
                    {c.heading ? <h3>{c.heading}</h3> : null}
                    {(c.options ?? []).map((o) => (
                      <label key={o.label}>
                        <input
                          type={c.kind === 'radio' ? 'radio' : 'checkbox'}
                          name={c.kind === 'radio' ? c.id : undefined}
                          defaultChecked={o.checked}
                        />{' '}
                        {o.label}
                      </label>
                    ))}
                  </>
                )}
              </section>
            ))}
          </div>
        </div>
        <footer className="srp-filter-actions">
          <button className="c-button c-button--secondary" type="button" onClick={onClear}>
            Clear all
          </button>
          <button className="c-button c-button--primary" type="button" onClick={onApply}>
            Apply
          </button>
        </footer>
      </section>
    </div>
  );
}
