import { useState } from 'react';
import { Icon } from '../foundations/Icon';

export interface SavedPassenger {
  name: string;
  /** Demographic line, e.g. "Female, 30 Years". */
  details: string;
}

export interface PassengerCardProps {
  /** Saved passengers, rendered as selectable rows. */
  passengers: SavedPassenger[];
  /** Passengers required — the kit derives it from selected seats (min 1). */
  required?: number;
  /** Emphasised rule term, rendered in blue. Kit copy: "1 Male". */
  ruleEmphasis?: string;
  /** Controlled selected passenger names (multi-select). */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (names: string[]) => void;
  onAddPassenger?: () => void;
}

/**
 * P34 passenger-selection card — screenshot-led, no GEMS passenger-card
 * component was node-verified. "Passenger details" heading, live "n/N
 * Selected" count, the seat-derived rule, "Add new passenger" and
 * saved-passenger rows with checkboxes (`aria-selected`). The avatar is the
 * Ions `ion-user` glyph, matching production's person silhouette. The add
 * action keeps the kit's text glyph (♟+): Ions has no person-add icon.
 *
 * Evidence boundary: the kit has NO add-passenger form, edit, over-selection
 * or rule-violation state ("Add-passenger form is not in the supplied
 * evidence"); the rule is copy only and is not enforced here.
 */
export function PassengerCard({
  passengers,
  required = 1,
  ruleEmphasis = '1 Male',
  value,
  defaultValue = [],
  onValueChange,
  onAddPassenger,
}: PassengerCardProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue);
  const selected = value ?? internal;
  const toggle = (name: string) => {
    const next = selected.includes(name) ? selected.filter((n) => n !== name) : [...selected, name];
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };
  return (
    <section className="ff-customer-card">
      <h2>Passenger details</h2>
      <p className="ff-customer-card__support">
        {selected.length}/{required} Selected
      </p>
      <p className="ff-passenger-rule">
        Select {required} passenger{required === 1 ? '' : 's'}, with at least <em>{ruleEmphasis}</em>
      </p>
      <button className="ff-add-passenger" type="button" onClick={onAddPassenger}>
        {'♟+   Add new passenger'}
      </button>
      {passengers.map((p) => (
        <button
          key={p.name}
          className="ff-passenger"
          type="button"
          aria-selected={selected.includes(p.name)}
          onClick={() => toggle(p.name)}
        >
          <span className="ff-avatar">
            <Icon name="ion-user" size="sm" />
          </span>
          <span>
            <strong>{p.name}</strong>
            <br />
            <small>{p.details}</small>
          </span>
          <span className="ff-checkbox" />
        </button>
      ))}
    </section>
  );
}
