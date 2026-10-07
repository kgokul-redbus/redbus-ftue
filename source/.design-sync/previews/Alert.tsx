import { Alert, Button } from 'india-bus-ds';

export const Tones = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Alert
      tone="info"
      title="Boarding point updated"
      description="Zing Bus now picks up from Sector 43 Bus Terminal at 21:15."
    />
    <Alert
      tone="success"
      title="₹180 cashback applied"
      description="Coupon SAVEBIG is active on this booking."
    />
    <Alert
      tone="warning"
      title="Only 3 seats left at this fare"
      description="Fares on the 21:30 Chandigarh → Delhi service change with demand."
    />
    <Alert
      tone="error"
      title="Seats released, your selection expired"
      description="Seats L4 and L5 are back in the pool. Please pick your seats again."
    />
  </div>
);

export const WithAction = () => (
  <div style={{ width: 328 }}>
    <Alert
      tone="warning"
      title="Payment pending"
      description="Complete payment within 08:00 minutes or the booking is cancelled."
      action={<Button variant="tertiary">Retry</Button>}
    />
  </div>
);

export const TitleOnly = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Alert tone="success" title="Ticket sent to +91 98xxx 41207" />
    <Alert tone="error" title="No buses found for Ambala Cantt → Jaipur Sindhi Camp" />
  </div>
);

export const OperatorNotice = () => (
  <div style={{ width: 328 }}>
    <Alert
      tone="info"
      title="Delhi ISBT Kashmere Gate entry is via Gate 3"
      description="IntrCity SmartBus drops at the outer bay. Allow 10 minutes to reach the metro."
      action={<Button variant="tertiary">Map</Button>}
    />
  </div>
);
