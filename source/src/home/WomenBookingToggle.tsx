import { useState } from 'react';

export interface WomenBookingToggleProps {
  /** Controlled on/off. Pass it to show the on state in a capture. */
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Row title, also the switch's accessible name. */
  label?: string;
  linkLabel?: string;
  onLinkClick?: () => void;
}

/**
 * P08 booking preference row — screenshot-led, candidate, not node-verified.
 * "Booking for women" with a Know more link and the kit's `ff-switch`, whose
 * state lives on `aria-pressed` exactly as in the kit.
 */
export function WomenBookingToggle({
  checked,
  defaultChecked = false,
  onCheckedChange,
  label = 'Booking for women',
  linkLabel = 'Know more',
  onLinkClick,
}: WomenBookingToggleProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked ?? internal;
  return (
    <section className="ff-women">
      <span className="ff-women__avatar" aria-hidden="true">
        {'\u{1F469}\u{1F3FB}'}
      </span>
      <span>
        <strong>{label}</strong>
        <button className="ff-link" type="button" onClick={onLinkClick}>
          {linkLabel}
        </button>
      </span>
      <button
        className="ff-switch"
        type="button"
        role="switch"
        aria-pressed={on}
        aria-label={label}
        onClick={() => {
          if (checked === undefined) setInternal(!on);
          onCheckedChange?.(!on);
        }}
      />
    </section>
  );
}
