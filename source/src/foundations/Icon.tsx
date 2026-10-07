import type { SVGProps } from 'react';
import { ionIcons, type IonIconName } from './icons.generated';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  /** Ions catalogue id, e.g. `ion-bus`, `ion-search`, `ion-star`. */
  name: IonIconName;
  /** `sm` 18px, `md` 24px (default), `lg` 28px. */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Accessible label. Omit for decorative icons sitting next to real text —
   * the icon is then hidden from assistive technology.
   */
  label?: string;
}

/**
 * Ions line icon. Strokes inherit `currentColor`, so colour comes from the
 * surrounding component rather than a prop.
 */
export function Icon({ name, size = 'md', label, className, ...rest }: IconProps) {
  const def = ionIcons[name];
  const classes = ['c-icon', size !== 'md' ? `c-icon--${size}` : '', className].filter(Boolean).join(' ');
  return (
    <svg
      viewBox={def.viewBox}
      className={classes}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      dangerouslySetInnerHTML={{ __html: def.body }}
      {...rest}
    />
  );
}
