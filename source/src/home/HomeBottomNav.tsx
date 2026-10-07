import { useState } from 'react';
import { Icon } from '../foundations/Icon';
import type { IonIconName } from '../foundations/icons.generated';

export interface HomeNavItem {
  id: string;
  label: string;
  /** Ions icon id. */
  icon: IonIconName;
  /** Small red pill over the icon, e.g. "New". */
  badge?: string;
}

/** The kit's five Home tabs. */
export const homeNavItems: HomeNavItem[] = [
  { id: 'home', label: 'Home', icon: 'ion-home-filled' },
  { id: 'bookings', label: 'Bookings', icon: 'ion-bookings' },
  { id: 'offers', label: 'Offers', icon: 'ion-offer', badge: 'New' },
  { id: 'help', label: 'Help', icon: 'ion-help' },
  { id: 'account', label: 'My Account', icon: 'ion-account-circle' },
];

export interface HomeBottomNavProps {
  items?: HomeNavItem[];
  /** Controlled current item id. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
}

/**
 * P10 home bottom navigation — screenshot-led, candidate, not node-verified.
 * Five tabs with an optional `ff-nav-badge`. 111px tall (includes the gesture
 * area) and absolutely pinned to the bottom of the phone canvas: render it
 * inside `IonsRoot device`.
 */
export function HomeBottomNav({
  items = homeNavItems,
  value,
  defaultValue = 'home',
  onValueChange,
}: HomeBottomNavProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  return (
    <nav className="ff-bottom-nav" aria-label="Primary navigation">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-current={item.id === current ? 'page' : undefined}
          onClick={() => {
            if (value === undefined) setInternal(item.id);
            onValueChange?.(item.id);
          }}
        >
          {item.badge ? <span className="ff-nav-badge">{item.badge}</span> : null}
          <Icon name={item.icon} className="ff-icon" />
          {item.label}
        </button>
      ))}
    </nav>
  );
}
