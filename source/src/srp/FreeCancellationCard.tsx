import { useState, type ReactNode } from 'react';

export interface FreeCancellationCardProps {
  /** Headline beside the ₹ shield. */
  title?: ReactNode;
  /** Controlled opt-in state (`aria-checked` on the switch). */
  checked?: boolean;
  /** Initial opt-in state when uncontrolled. */
  defaultChecked?: boolean;
  /** Supporting line under the opt-in label. */
  support?: ReactNode;
  onChange?: (checked: boolean) => void;
}

/**
 * P19 free-cancellation opt-in card — screenshot-led, no GEMS component. Promo
 * card in the results list with a ₹ shield headline and an opt-in switch.
 */
export function FreeCancellationCard({
  title = '100% refund if you cancel',
  checked,
  defaultChecked = false,
  support = 'Add for a small fee',
  onChange,
}: FreeCancellationCardProps) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (checked === undefined) setInner(!on);
    onChange?.(!on);
  };
  return (
    <section className="srp-free-cancel-card" data-scenario="scrolled" aria-label="Free Cancellation offer">
      <div className="srp-free-cancel-card__title">
        <span className="srp-shield-icon">₹</span>
        <strong>{title}</strong>
      </div>
      <div className="srp-free-cancel-card__switch">
        <span>
          <strong>
            Opt-in for <em>Free Cancellation</em>
          </strong>
          <small>{support}</small>
        </span>
        <button type="button" role="switch" aria-checked={on} onClick={toggle}>
          <i />
        </button>
      </div>
    </section>
  );
}
