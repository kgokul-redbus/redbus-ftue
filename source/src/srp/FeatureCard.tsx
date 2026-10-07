export interface FeatureCardProps {
  /**
   * `primo` and `exclusive` render the production campaign artwork (GEMS
   * `Feature Card` default and inverted). `custom` renders `imageSrc`.
   */
  variant: 'primo' | 'exclusive' | 'custom';
  /** Artwork URL for `custom` cards. 130 × 105 dp; supply 2× for sharpness. */
  imageSrc?: string;
  /** Required: the card is image-only, so this is its only accessible name. */
  label: string;
  onClick?: () => void;
}

/**
 * P12 promotional feature card (GEMS `Feature Card`, 130 × 105 dp). The card is
 * product artwork, not composed UI — never rebuild Primo or Exclusive art from
 * text and shapes. Place cards inside a `FeatureCardRail`.
 */
export function FeatureCard({ variant, imageSrc, label, onClick }: FeatureCardProps) {
  const className = ['gems-feature-card', variant === 'custom' ? '' : `gems-feature-card--${variant}`]
    .filter(Boolean)
    .join(' ');
  return (
    <button
      className={className}
      type="button"
      aria-label={label}
      onClick={onClick}
      style={
        variant === 'custom' && imageSrc
          ? { backgroundImage: `url("${imageSrc}")`, backgroundSize: '100% 100%', backgroundPosition: '0 0' }
          : undefined
      }
    />
  );
}
