import { HorizontalRail } from 'india-bus-ds';

export const ChipRail = () => (
  <div style={{ width: 360 }}>
    <HorizontalRail className="ff-review-chips ff-review-chips--nowrap">
      {['Relevant Reviews', 'Recent Reviews', 'Low To High Rating', 'High To Low Rating'].map((label, i) => (
        <button key={label} className="ff-chip" type="button" aria-pressed={i === 0}>
          {label}
        </button>
      ))}
    </HorizontalRail>
  </div>
);

export const PolicyTable = () => (
  <div style={{ width: 360 }}>
    <HorizontalRail>
      <table className="ff-policy-table">
        <thead>
          <tr>
            <th>Cancellation Time</th>
            <th>Without free cancellation</th>
            <th>With free cancellation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Before 7th Jul 01:15 PM</td>
            <td>90% refund</td>
            <td>100% refund</td>
          </tr>
          <tr>
            <td>From 7th Jul 01:15 PM Until 8th Jul 09:15 AM</td>
            <td>75% refund</td>
            <td>100% refund</td>
          </tr>
          <tr>
            <td>After 8th Jul 09:15 AM</td>
            <td>50% refund</td>
            <td>100% refund</td>
          </tr>
        </tbody>
      </table>
    </HorizontalRail>
  </div>
);
