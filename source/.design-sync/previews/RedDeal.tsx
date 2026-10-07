import { RedDeal, Button, Tag } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <RedDeal
      title="₹180 off on this Zing Bus service"
      description="redDeal fares are negotiated with the operator for selected departures — the discount is already applied at checkout."
    />
  </div>
);

export const WithFare = () => (
  <div style={{ width: 328 }}>
    <RedDeal
      title="Chandigarh → Delhi ISBT Kashmere Gate"
      description="IntrCity SmartBus A/C Sleeper · 22:30 → 05:45"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          marginTop: 12,
        }}
      >
        <span className="type-title-3">₹649</span>
        <span className="type-caption" style={{ textDecoration: 'line-through' }}>
          ₹829
        </span>
        <span className="type-caption">You save ₹180</span>
      </div>
    </RedDeal>
  </div>
);

export const WithAction = () => (
  <div style={{ width: 328 }}>
    <RedDeal
      title="redDeal seats left on the 21:15 to Jaipur"
      description="Laxmi Holidays A/C Seater from Zirakpur Chowk. redDeal pricing ends once these seats are sold."
    >
      <div style={{ marginTop: 16 }}>
        <Button variant="primary" block>
          Select seats · ₹899
        </Button>
      </div>
    </RedDeal>
  </div>
);

export const WithBadgeVariant = () => (
  <div style={{ width: 328 }}>
    <RedDeal
      badge="redDeal Plus"
      title="Flat ₹250 off on Ambala Cantt departures"
      description="Available to redBus members on redDeal inventory only. One booking per traveller per week."
    >
      <div style={{ marginTop: 12 }}>
        <Tag tone="brand">Ends 30 Sep</Tag>
      </div>
    </RedDeal>
  </div>
);
