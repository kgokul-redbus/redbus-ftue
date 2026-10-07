import { useState } from 'react';
import { PointRow, type PointRowProps } from './PointRow';

export interface PointListItem extends Omit<PointRowProps, 'selected' | 'onSelect'> {
  /** Stable id; defaults to `name`. */
  id?: string;
}

export interface PointListProps {
  /** Card heading, e.g. "All boarding points in Delhi". */
  heading: string;
  points: PointListItem[];
  /** Controlled selected point id (single selection shared across rows). */
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
  /**
   * Render the kit's scroll region (`.ff-scroll.ff-point-scroll`) around the
   * card. Its height is `calc(100% - 202px)` of the phone screen, so use it
   * only inside a sized `IonsRoot device`; leave off for a standalone card.
   */
  scroll?: boolean;
}

/**
 * P31 point-selection list card — GEMS `Android-Bp-Selection` candidate, not
 * node-verified. Rounded elevated card with a heading and `PointRow`s sharing
 * one selected state. In the kit, picking a boarding point advances to the
 * dropping stage after ~270ms and a dropping point advances to Passenger
 * Information; that navigation belongs to the screen, via `onValueChange`.
 * The kit's screen surface behind it is `--ff-canvas` (#f4f3f8).
 */
export function PointList({ heading, points, value, defaultValue, onValueChange, scroll = false }: PointListProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  const card = (
    <section className="ff-point-card">
      <h2>{heading}</h2>
      {points.map(({ id, ...point }) => {
        const key = id ?? point.name;
        return (
          <PointRow
            key={key}
            {...point}
            selected={current === key}
            onSelect={() => {
              if (value === undefined) setInternal(key);
              onValueChange?.(key);
            }}
          />
        );
      })}
    </section>
  );
  return scroll ? <div className="ff-scroll ff-point-scroll">{card}</div> : card;
}
