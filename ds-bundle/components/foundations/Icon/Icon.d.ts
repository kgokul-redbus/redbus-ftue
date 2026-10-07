import * as React from 'react';

/**
 * Icon — from india-bus-ds@1.0.0.
 */
export interface IconProps {
  /** Ions catalogue id, e.g. `ion-bus`, `ion-search`, `ion-star`. */
  name: unknown;
  /** `sm` 18px, `md` 24px (default), `lg` 28px. */
  size?: "sm" | "md" | "lg";
  /** Accessible label. Omit for decorative icons sitting next to real text — the icon is then hidden from assistive technolog */
  label?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: SVGSVGElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<SVGSVGElement>;
}

export declare const Icon: React.ComponentType<IconProps>;
