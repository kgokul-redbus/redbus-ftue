import type { ReactNode } from 'react';
import { Text, Divider } from 'india-bus-ds';

const spec = (role: string, children: ReactNode) => (
  <div key={role} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Text role="caption" style={{ color: 'var(--content-neutral-low-default)' }}>
      {role}
    </Text>
    {children}
  </div>
);

export const TitleScale = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 14 }}>
    {spec('extra-large-title', <Text role="extra-large-title">Chandigarh to Delhi</Text>)}
    {spec('large-title', <Text role="large-title">Select your seats</Text>)}
    {spec('title-1', <Text role="title-1">Zing Bus Express</Text>)}
    {spec('title-2', <Text role="title-2">Boarding points</Text>)}
    {spec('title-3', <Text role="title-3">Sector 43 Bus Terminal</Text>)}
  </div>
);

export const BodyScale = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 14 }}>
    {spec(
      'body',
      <Text role="body">
        Volvo 9600 Multi-Axle AC Sleeper (2+1) departing 22:45 and reaching Delhi ISBT Kashmere Gate
        at 05:30 the next morning.
      </Text>,
    )}
    {spec('label', <Text role="label">Cancellation policy</Text>)}
    {spec(
      'caption',
      <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
        Free cancellation until 12 Aug, 18:45 IST
      </Text>,
    )}
  </div>
);

export const Strong = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Text role="body">Amount payable after the ZINGFEST discount</Text>
    <Text role="body" strong>
      Amount payable after the ZINGFEST discount
    </Text>
    <Divider />
    <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
      Seats L3, L4 · Lower deck
    </Text>
    <Text role="caption" strong>
      Seats L3, L4 · Lower deck
    </Text>
  </div>
);

export const Tabular = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Text role="title-3">Fare breakup</Text>
    {[
      ['Base fare · 2 seats', '₹1,598'],
      ['Reservation charges', '₹40'],
      ['GST', '₹110'],
      ['ZINGFEST discount', '−₹150'],
    ].map(([label, value]) => (
      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
        <Text role="body" style={{ color: 'var(--content-neutral-medium-default)' }}>
          {label}
        </Text>
        <Text role="body" tabular>
          {value}
        </Text>
      </div>
    ))}
    <Divider variant="dotted" />
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
      <Text role="body" strong>
        Total payable
      </Text>
      <Text role="body" strong tabular>
        ₹1,598
      </Text>
    </div>
    <Divider />
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        22:45
      </Text>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        06h 45m
      </Text>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        05:30
      </Text>
    </div>
  </div>
);

export const InContext = () => (
  <div
    style={{
      width: 328,
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }}
  >
    <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
      IntrCity SmartBus
    </Text>
    <Text role="title-2">Jaipur Sindhi Camp → Delhi ISBT</Text>
    <Text role="body" style={{ color: 'var(--content-neutral-medium-default)' }}>
      AC Seater / Sleeper (2+1) · 18 seats left
    </Text>
    <Text role="title-1" tabular style={{ marginTop: 8 }}>
      ₹899
    </Text>
  </div>
);
