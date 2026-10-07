import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  /** Provider mark, normally an `<Icon />`. */
  icon?: ReactNode;
}

/**
 * RESTRICTED. Third-party sign-in button. Only for providers formally added to
 * the system — provider support and brand treatment need approval first.
 */
export function LoginButton({ children, icon, className, type = 'button', ...rest }: LoginButtonProps) {
  return (
    <button type={type} className={['c-login-button', className].filter(Boolean).join(' ')} {...rest}>
      {icon}
      {children}
    </button>
  );
}
