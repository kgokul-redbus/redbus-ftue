import { useState } from 'react';

export interface SegmentedOption {
  /** Stable value reported to `onValueChange`. */
  value: string;
  label: string;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Accessible name for the group, e.g. "View mode". */
  label?: string;
}

/**
 * Mutually exclusive options shown side by side — the SRP List/Map switch.
 * Use two or three segments; beyond that use tabs.
 */
export function SegmentedControl({
  options,
  value,
  defaultValue,
  onValueChange,
  label,
}: SegmentedControlProps) {
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.value);
  const current = value ?? internal;

  return (
    <div className="c-segmented" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          className="c-segmented__item"
          type="button"
          aria-pressed={current === option.value}
          onClick={() => {
            if (value === undefined) setInternal(option.value);
            onValueChange?.(option.value);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
