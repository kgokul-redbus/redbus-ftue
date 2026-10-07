import { Icon, Text } from 'india-bus-ds';
import type { IonIconName } from 'india-bus-ds';

const cell = (name: IonIconName) => (
  <div
    key={name}
    style={{ width: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
  >
    <Icon name={name} label={name} />
    <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)', textAlign: 'center' }}>
      {name.replace('ion-', '')}
    </Text>
  </div>
);

const group = (heading: string, names: IonIconName[]) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Text role="label" style={{ color: 'var(--content-neutral-medium-default)' }}>
      {heading}
    </Text>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{names.map(cell)}</div>
  </div>
);

export const Navigation = () => (
  <div style={{ width: 328 }}>
    {group('Navigation and controls', [
      'ion-arrow-back',
      'ion-arrow-forward',
      'ion-chevron-down',
      'ion-chevron-up',
      'ion-close',
      'ion-menu',
      'ion-more',
      'ion-search',
      'ion-plus',
      'ion-minus',
      'ion-edit',
      'ion-copy',
    ])}
  </div>
);

export const TravelAndBooking = () => (
  <div style={{ width: 328 }}>
    {group('Travel and booking', [
      'ion-bus',
      'ion-location',
      'ion-calendar',
      'ion-swap',
      'ion-filter',
      'ion-sort',
      'ion-ticket',
      'ion-bookings',
      'ion-offer',
      'ion-home',
      'ion-home-filled',
      'ion-delete',
    ])}
  </div>
);

export const StatusAndAccount = () => (
  <div style={{ width: 328 }}>
    {group('Status', ['ion-check', 'ion-check-circle', 'ion-error', 'ion-info', 'ion-star'])}
    <div style={{ height: 16 }} />
    {group('Account', [
      'ion-user',
      'ion-account-circle',
      'ion-help',
      'ion-eye',
      'ion-eye-off',
    ])}
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
    {(['sm', 'md', 'lg'] as const).map((size) => (
      <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Icon name="ion-bus" size={size} label={`Bus ${size}`} />
        <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
          {size === 'sm' ? 'sm · 18px' : size === 'md' ? 'md · 24px' : 'lg · 28px'}
        </Text>
      </div>
    ))}
  </div>
);

const row = (name: IonIconName, label: string, color: string, background?: string) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color,
      ...(background ? { background, padding: '8px 12px', borderRadius: 8 } : null),
    }}
  >
    <Icon name={name} />
    <Text role="body" strong style={{ color: 'inherit' }}>
      {label}
    </Text>
  </div>
);

export const ColourInheritance = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 10 }}>
    {row('ion-offer', 'Flat ₹150 off with ZINGFEST', 'var(--content-brand-high-default)')}
    {row('ion-check-circle', 'Booking confirmed · TK-4821-9930', 'var(--content-success-high-default)')}
    {row('ion-error', 'Payment failed — retry with UPI', 'var(--content-warning-high-default)')}
    {row('ion-location', 'Sector 43 Bus Terminal, Chandigarh', 'var(--content-neutral-medium-default)')}
    {row(
      'ion-bus',
      'Zing Bus is 12 min away',
      'var(--content-neutral-inverse-default)',
      'var(--surface-brand-high-default)',
    )}
  </div>
);
