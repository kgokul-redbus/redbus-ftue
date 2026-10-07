import { useState } from 'react';
import { Icon } from '../foundations/Icon';
import type { IonIconName } from '../foundations/icons.generated';

export interface BottomNavItem {
  value: string;
  label: string;
  icon: IonIconName;
}

export interface BottomNavProps {
  /** Three to five destinations. The grid sizes itself from the count. */
  items: BottomNavItem[];
  /** Controlled active destination. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
}

/**
 * Persistent bar for the app's core destinations (Home, Explore, Bookings,
 * Account). Only on top-level screens — the funnel hides it from SRP onward.
 */
export function BottomNav({
  items,
  value,
  defaultValue,
  onValueChange,
  label = 'Primary destinations',
}: BottomNavProps) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const current = value ?? internal;

  return (
    <nav
      className="c-bottom-nav"
      aria-label={label}
      style={{ ['--nav-items' as string]: items.length }}
    >
      {items.map((item) => (
        <button
          key={item.value}
          className="c-bottom-nav__item"
          type="button"
          aria-current={current === item.value ? 'page' : undefined}
          onClick={() => {
            if (value === undefined) setInternal(item.value);
            onValueChange?.(item.value);
          }}
        >
          <Icon name={item.icon} />
          {item.label}
        </button>
      ))}
    </nav>
  );
}
