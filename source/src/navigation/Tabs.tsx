import { useState } from 'react';

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /**
   * `fixed` splits the width evenly (2–3 tabs); the default scrolls
   * horizontally for longer sets such as the bus-details scrollspy.
   */
  layout?: 'scrollable' | 'fixed';
  label?: string;
}

/**
 * Section tabs within one screen. The selected tab carries the red underline;
 * for switching destinations use `<BottomNav />` instead.
 */
export function Tabs({ items, value, defaultValue, onValueChange, layout = 'scrollable', label }: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const current = value ?? internal;

  return (
    <div
      className={['c-tabs', layout === 'fixed' ? 'c-tabs--fixed' : ''].filter(Boolean).join(' ')}
      role="tablist"
      aria-label={label}
    >
      {items.map((item) => {
        const selected = current === item.value;
        return (
          <button
            key={item.value}
            className="c-tab"
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? undefined : -1}
            onClick={() => {
              if (value === undefined) setInternal(item.value);
              onValueChange?.(item.value);
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
