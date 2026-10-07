import type { HTMLAttributes, ReactNode } from 'react';

export interface IonsRootProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** `dark` sets `data-theme="dark"`, which re-points every semantic token. */
  theme?: 'light' | 'dark';
  /**
   * Constrain to the kit's 360dp Android canvas. Use for phone screens;
   * leave off for desktop or full-bleed layouts.
   */
  device?: boolean;
}

/**
 * Root wrapper that establishes the Ions token scope and the Android type
 * family. Wrap screens in it so `data-theme` and the base font resolve; every
 * component still renders standalone because tokens are also defined on
 * `:root` by the stylesheet.
 */
export function IonsRoot({ children, theme = 'light', device = false, style, ...rest }: IonsRootProps) {
  return (
    <div
      data-theme={theme}
      style={{
        fontFamily: 'var(--font-family-android)',
        color: 'var(--content-neutral-high-default)',
        background: 'var(--surface-neutral-medium-default)',
        // No font-size/line-height: the kit's pages leave both at the browser
        // default, and pattern components (e.g. the policy table) rely on
        // inheriting that. Forcing the 24px body line spread their text out.
        // Text that wants the body role uses <Text role="body">.
        // position: relative anchors the pattern layer's absolutely placed
        // surfaces (Ask Ray button, sheets, loaders) to the phone canvas.
        ...(device ? { width: 360, minHeight: 800, overflow: 'hidden', position: 'relative' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
