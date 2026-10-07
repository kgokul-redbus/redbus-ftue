import { useState } from 'react';

export interface ResultModeTabsProps {
  /** Modes in display order. Defaults to the production Buses/Trains pair. */
  modes?: string[];
  /** Controlled selected mode. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (mode: string) => void;
}

/**
 * P11 search-results mode switch — GEMS `Top tabs`, `Short` variant. Two fixed
 * full-width tabs with the brand underline, sitting directly under the
 * `RouteHeader`.
 */
export function ResultModeTabs({ modes = ['Buses', 'Trains'], value, defaultValue, onValueChange }: ResultModeTabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? modes[0]);
  const current = value ?? internal;
  return (
    <div className="c-tabs c-tabs--fixed gems-top-tabs" role="tablist" aria-label="Result mode">
      {modes.map((mode) => (
        <button
          key={mode}
          className="c-tab"
          type="button"
          role="tab"
          aria-selected={current === mode}
          onClick={() => {
            if (value === undefined) setInternal(mode);
            onValueChange?.(mode);
          }}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
