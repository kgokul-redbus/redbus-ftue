import { useId, useState } from 'react';
import { Icon } from '../foundations/Icon';

export type AiSmartFilterState = 'idle' | 'filled' | 'loading' | 'applied';

export interface AiSmartFilterProps {
  /**
   * `idle` shows the hint and microphone; `filled` swaps the mic for clear and
   * reveals "Search Buses"; `loading` shows the spinner and progress copy;
   * `applied` keeps the query with a clear action. Omit to derive idle/filled
   * from the input.
   */
  state?: AiSmartFilterState;
  /** Controlled query text. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (query: string) => void;
  onClear?: () => void;
  placeholder?: string;
}

/**
 * P14 AI Smart filter — no GEMS component exists; this is the screenshot-led
 * India bus pattern. Natural-language bus preferences with the Ray sparkle,
 * voice entry, explicit submit and a persistent applied state. Sits between
 * the `FilterRail` and the results.
 */
export function AiSmartFilter({
  state,
  value,
  defaultValue = '',
  onValueChange,
  onSubmit,
  onClear,
  placeholder = "Search 'Bus departing after 7 PM'",
}: AiSmartFilterProps) {
  const inputId = useId();
  const [internal, setInternal] = useState(defaultValue);
  const query = value ?? internal;
  const resolved: AiSmartFilterState = state ?? (query.trim() ? 'filled' : 'idle');

  const update = (next: string) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <section className="india-ai-filter" data-ai-state={resolved} aria-label="AI Smart filter">
      <label className="india-ai-filter__label" htmlFor={inputId}>
        AI Smart filter
      </label>
      <div className="india-ai-filter__field">
        <span className="ray-sparkle ray-sparkle--field" aria-hidden="true" />
        <input
          id={inputId}
          autoComplete="off"
          placeholder={placeholder}
          value={query}
          readOnly={resolved === 'loading'}
          onChange={(event) => update(event.target.value)}
        />
        <button className="c-icon-button india-ai-filter__mic" type="button" aria-label="Use voice search">
          <span className="srp-mic-icon" aria-hidden="true">
            <i />
          </span>
        </button>
        <button
          className="c-icon-button india-ai-filter__clear"
          type="button"
          aria-label="Clear AI filter"
          onClick={() => {
            update('');
            onClear?.();
          }}
        >
          <Icon name="ion-close" />
        </button>
        <span className="india-ai-filter__spinner" aria-hidden="true" />
      </div>
      <button
        className="c-button c-button--primary c-button--block india-ai-filter__submit"
        type="button"
        onClick={() => onSubmit?.(query)}
      >
        Search Buses
      </button>
      <p className="india-ai-filter__support">Searching the best buses for you, please wait...</p>
    </section>
  );
}
