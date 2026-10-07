import { OfferStrip, Icon, Button } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <OfferStrip icon={<Icon name="ion-offer" size="sm" />}>
      Save ₹200 with FIRST200 on this service
    </OfferStrip>
  </div>
);

export const WithAction = () => (
  <div style={{ width: 328 }}>
    <OfferStrip
      icon={<Icon name="ion-offer" size="sm" />}
      trailing={<Button variant="tertiary">Apply</Button>}
    >
      15% off up to ₹250 with MONSOON15
    </OfferStrip>
  </div>
);

export const WithoutIcon = () => (
  <div style={{ width: 328 }}>
    <OfferStrip>₹100 cashback on UPI payments above ₹500</OfferStrip>
  </div>
);

export const InServiceCard = () => (
  <div
    style={{
      width: 328,
      padding: 16,
      display: 'grid',
      gap: 12,
      background: 'var(--surface-neutral-lowest-default)',
      border: '1px solid var(--border-neutral-low-default)',
      borderRadius: 'var(--radius-xl)',
    }}
  >
    <div>
      <div className="type-title-3">Zing Bus Maxx</div>
      <div className="type-caption">22:30 Zirakpur Chowk → 05:45 Delhi ISBT Kashmere Gate</div>
    </div>
    <OfferStrip icon={<Icon name="ion-offer" size="sm" />}>
      Save ₹180 on this departure with ZINGBUS100
    </OfferStrip>
  </div>
);
