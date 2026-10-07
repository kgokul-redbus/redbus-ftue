import { LoginButton, Icon } from 'india-bus-ds';

/**
 * RESTRICTED component — only providers formally approved for the system may
 * appear here. These previews stay on the approved-provider framing.
 */
export const ApprovedProvider = () => (
  <div style={{ width: 328 }}>
    <LoginButton icon={<Icon name="ion-account-circle" size="sm" />} style={{ width: '100%' }}>
      Continue with approved provider
    </LoginButton>
  </div>
);

export const PhoneSignIn = () => (
  <div style={{ width: 328 }}>
    <LoginButton icon={<Icon name="ion-user" size="sm" />} style={{ width: '100%' }}>
      Continue with mobile number
    </LoginButton>
  </div>
);

export const SignInStack = () => (
  <div
    style={{
      width: 328,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <span className="type-body">Sign in to see your Chandigarh to Delhi bookings</span>
    <LoginButton icon={<Icon name="ion-user" size="sm" />} style={{ width: '100%' }}>
      Continue with mobile number
    </LoginButton>
    <LoginButton icon={<Icon name="ion-account-circle" size="sm" />} style={{ width: '100%' }}>
      Continue with approved provider
    </LoginButton>
  </div>
);

export const Compact = () => (
  <LoginButton icon={<Icon name="ion-user" size="sm" />}>Sign in</LoginButton>
);
