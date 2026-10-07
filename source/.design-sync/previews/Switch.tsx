import { Switch, Text, Divider } from 'india-bus-ds';

export const States = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Switch defaultChecked>Send trip updates on WhatsApp</Switch>
    <Switch>Show only AC buses</Switch>
  </div>
);

export const Disabled = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ opacity: 0.4 }}>
      <Switch defaultChecked disabled>
        Travel insurance (included by operator)
      </Switch>
      <Switch disabled>Live tracking (not offered on this route)</Switch>
    </div>
    <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
      The kit ships no `:disabled` rule for `.c-switch` — dim the row yourself when a toggle is
      locked.
    </Text>
  </div>
);

export const SettingsGroup = () => (
  <div
    style={{
      width: 328,
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
      borderRadius: 12,
    }}
  >
    <Text role="title-3" style={{ marginBottom: 12 }}>
      Booking preferences
    </Text>
    <Switch defaultChecked>Ladies-only seats first</Switch>
    <Divider />
    <Switch defaultChecked>Remember Sector 43 Bus Terminal</Switch>
    <Divider />
    <Switch>Offer alerts for Chandigarh → Delhi</Switch>
  </div>
);
