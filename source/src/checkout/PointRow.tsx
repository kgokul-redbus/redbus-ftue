export interface PointRowProps {
  /** 24-hour IST time, e.g. "21:15". */
  time: string;
  /** Date under the time, e.g. "10 Jul". */
  date: string;
  /** Point name, bold. */
  name: string;
  /** Optional address line under the name. The kit's dropping rows omit it. */
  address?: string;
  /** Optional contextual tag, e.g. "Popular dropping point". */
  tag?: string;
  /**
   * Minimum row height. The kit sizes rows by hand to their wrapped copy:
   * `tall` (84px) for a two-line name + address, `xtall` (103px) for three.
   */
  size?: 'default' | 'tall' | 'xtall';
  /** Selected state: brand radio and brand-low gradient (`aria-pressed`). */
  selected?: boolean;
  onSelect?: () => void;
}

/**
 * P30 boarding/dropping point row — GEMS `Android-Bp-Selection` candidate,
 * row anatomy not node-verified. Time/date column, name + address (+ tag),
 * radio. Selection is owned by the parent `PointList`; render the row inside
 * a `.ff-point-card` (the kit never shows it standalone).
 */
export function PointRow({ time, date, name, address, tag, size = 'default', selected = false, onSelect }: PointRowProps) {
  const className = ['ff-point-row', size !== 'default' ? `ff-point-row--${size}` : ''].filter(Boolean).join(' ');
  return (
    <button className={className} type="button" aria-pressed={selected} onClick={onSelect}>
      <span>
        <span className="ff-point__time">{time}</span>
        <span className="ff-point__date">{date}</span>
      </span>
      <span>
        <span className="ff-point__name">{name}</span>
        {address ? <span className="ff-point__address">{address}</span> : null}
        {tag ? <span className="ff-point-tag">{tag}</span> : null}
      </span>
      <span className="ff-radio" />
    </button>
  );
}
