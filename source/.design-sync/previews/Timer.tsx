import { Timer } from 'india-bus-ds';

export const Default = () => <Timer time="09:45">Seats held for</Timer>;

export const WithoutIcon = () => (
  <Timer time="04:30" hideIcon>
    Complete payment in
  </Timer>
);

export const TimeOnly = () => <Timer time="00:59" />;

export const InSeatFooter = () => (
  <div
    style={{
      width: 328,
      padding: 16,
      display: 'grid',
      gap: 8,
      background: 'var(--surface-neutral-lowest-default)',
      border: '1px solid var(--border-neutral-low-default)',
      borderRadius: 'var(--radius-xl)',
    }}
  >
    <Timer time="09:45">Seats L3, L4 held for</Timer>
    <div className="type-caption">
      Zing Bus Maxx · 22:30 Zirakpur Chowk → 05:45 Delhi ISBT Kashmere Gate · ₹1,298
    </div>
  </div>
);
