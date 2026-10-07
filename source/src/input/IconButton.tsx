import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon to render, normally an `<Icon />`. */
  children?: ReactNode;
  /** Required accessible name — the button has no visible text. */
  label: string;
}

/**
 * Borderless 44px icon action. Used for Back, Close, overflow and share
 * affordances in the top nav and sheets.
 */
export function IconButton({ children, label, className, type = 'button', ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      className={['c-icon-button', className].filter(Boolean).join(' ')}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  );
}
