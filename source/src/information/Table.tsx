import type { ReactNode } from 'react';

export interface TableProps {
  /** Column headers, in order. */
  columns: ReactNode[];
  /** Row cells, in the same column order. */
  rows: ReactNode[][];
  /** Accessible caption for the table. */
  label?: string;
}

/**
 * Comparison table on a scrollable surface — fare breakup, policy grids.
 * Cells never wrap; the wrapper scrolls horizontally on narrow screens.
 */
export function Table({ columns, rows, label }: TableProps) {
  return (
    <div className="c-table-wrap">
      <table className="c-table" aria-label={label}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th scope="col" key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
