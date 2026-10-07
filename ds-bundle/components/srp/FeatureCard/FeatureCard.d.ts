import * as React from 'react';

/**
 * FeatureCard — from india-bus-ds@1.0.0.
 */
export interface FeatureCardProps {
  /** `primo` and `exclusive` render the production campaign artwork (GEMS `Feature Card` default and inverted). `custom` rend */
  variant: "primo" | "exclusive" | "custom";
  /** Artwork URL for `custom` cards. 130 × 105 dp; supply 2× for sharpness. */
  imageSrc?: string;
  /** Required: the card is image-only, so this is its only accessible name. */
  label: string;
  onClick?: () => void;
}

export declare const FeatureCard: React.ComponentType<FeatureCardProps>;
