import { Icon } from '../foundations/Icon';

export interface PolicyTableRow {
  /** Cancellation window, e.g. "Before 7th Jul 01:15 PM". */
  time: string;
  /** Refund without free cancellation, e.g. "90% refund". */
  standard: string;
  /** Refund with free cancellation, e.g. "100% refund" — highlighted green. */
  flexible: string;
}

export interface PolicyTableProps {
  rows: PolicyTableRow[];
  /** Column headings. */
  headings?: [string, string, string];
}

/**
 * P25 cancellation policy table — no exact GEMS component verified. Refund
 * windows with and without free cancellation; the last column carries the
 * success treatment and production's green check. Horizontally scrollable. Place inside a `DetailSection`.
 */
export function PolicyTable({
  rows,
  headings = ['Cancellation Time', 'Without free cancellation', 'With free cancellation'],
}: PolicyTableProps) {
  return (
    <div className="ff-hscroll">
      <table className="ff-policy-table">
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.time}>
              <td>{row.time}</td>
              <td>{row.standard}</td>
              <td>
                <span className="ib-policy-refund">
                  {row.flexible}
                  <Icon name="ion-check-circle" size="sm" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
