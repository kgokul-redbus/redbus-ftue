import { useState } from 'react';
import { Icon } from '../foundations/Icon';

export interface DateSheetMonth {
  /** Heading, e.g. "July 2026". */
  title: string;
  /** Empty cells before day 1 (Monday-first week). */
  offset: number;
  /** Number of days rendered. */
  days: number;
  /** Days rendered `disabled` (past dates). */
  disabledDays?: number[];
  /** Days styled red via the kit's `weekend` class. Defaults to Sat/Sun derived from `offset`. */
  weekendDays?: number[];
}

export interface DateSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Months in the scroll area. Defaults to the kit's July (from 9 Jul) and August 2026. */
  months?: DateSheetMonth[];
  /** Controlled selected date key, `"<monthIndex>-<day>"`, e.g. `"0-9"` for 9 Jul. */
  value?: string;
  /** Initial selection when uncontrolled. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  onClose?: () => void;
}

const defaultMonths: DateSheetMonth[] = [
  { title: 'July 2026', offset: 2, days: 31, disabledDays: [1, 2, 3, 4, 5, 6, 7, 8] },
  { title: 'August 2026', offset: 5, days: 9 },
];

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function MonthGrid({
  month,
  index,
  selected,
  onSelect,
}: {
  month: DateSheetMonth;
  index: number;
  selected: string;
  onSelect: (key: string) => void;
}) {
  const isWeekend = (day: number) =>
    month.weekendDays ? month.weekendDays.includes(day) : (month.offset + day - 1) % 7 >= 5;
  return (
    <>
      <h3>{month.title}</h3>
      <div className="srp-calendar-grid">
        {Array.from({ length: month.offset }, (_, i) => (
          <span key={`pad-${i}`} />
        ))}
        {Array.from({ length: month.days }, (_, i) => i + 1).map((day) => {
          if (month.disabledDays?.includes(day)) {
            return (
              <button key={day} disabled>
                {day}
              </button>
            );
          }
          const key = `${index}-${day}`;
          return (
            <button
              key={day}
              className={isWeekend(day) ? 'weekend' : undefined}
              type="button"
              aria-selected={selected === key ? true : undefined}
              onClick={() => onSelect(key)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </>
  );
}

/**
 * P17 date-selection sheet — screenshot-led, no GEMS component. Bottom sheet
 * with a Mon–Sun week header and scrolling month grids showing disabled past
 * days, red weekends and the selected date. Absolutely positioned over the
 * phone viewport: render it inside `IonsRoot device`.
 */
export function DateSheet({
  open,
  months = defaultMonths,
  value,
  defaultValue = '0-9',
  onChange,
  onClose,
}: DateSheetProps) {
  const [inner, setInner] = useState(defaultValue);
  const selected = value ?? inner;
  const select = (key: string) => {
    if (value === undefined) setInner(key);
    onChange?.(key);
  };
  return (
    <div className="c-overlay srp-overlay" data-open={open ? 'true' : 'false'}>
      <section className="c-bottom-sheet srp-sheet srp-calendar-sheet" role="dialog" aria-modal="true" aria-label="Select Date">
        <header className="srp-sheet-header">
          <h2>Select Date</h2>
          <button className="c-icon-button" type="button" aria-label="Close calendar" onClick={onClose}>
            <Icon name="ion-close" size="lg" />
          </button>
        </header>
        <div className="srp-calendar-week">
          {weekdays.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="srp-calendar-scroll">
          {months.map((month, m) => (
            <MonthGrid key={month.title} month={month} index={m} selected={selected} onSelect={select} />
          ))}
        </div>
      </section>
    </div>
  );
}
