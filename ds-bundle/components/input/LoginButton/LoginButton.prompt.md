LoginButton from india-bus-ds. Use via `window.IndiaBusDS.LoginButton` (bundle loaded from the root `_ds_bundle.js`).

RESTRICTED. Third-party sign-in button. Only for providers formally added to
the system — provider support and brand treatment need approval first.

## Props

```ts
interface LoginButtonProps {
  children?: React.ReactNode;
  /** Provider mark, normally an `<Icon />`. */
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### ApprovedProvider

```jsx
() => (
  <div style={{ width: 328 }}>
    <LoginButton icon={<Icon name="ion-account-circle" size="sm" />} style={{ width: '100%' }}>
      Continue with approved provider
    </LoginButton>
  </div>
)
```

### PhoneSignIn

```jsx
() => (
  <div style={{ width: 328 }}>
    <LoginButton icon={<Icon name="ion-user" size="sm" />} style={{ width: '100%' }}>
      Continue with mobile number
    </LoginButton>
  </div>
)
```

### SignInStack

```jsx
() => (
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
)
```

### Compact

```jsx
() => (
  <LoginButton icon={<Icon name="ion-user" size="sm" />}>Sign in</LoginButton>
)
```
