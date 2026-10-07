export interface RayFabProps {
  /** Pill label. Defaults to the production "Ask Ray". */
  label?: string;
  /** Opens the `RaySheet` in production. */
  onClick?: () => void;
}

/**
 * P03 floating Ask Ray entry — screenshot-led, no GEMS component. Gradient pill
 * with the Ray sparkle, anchored to the phone viewport above the results
 * (absolutely positioned: render it as a direct child of `IonsRoot device`).
 */
export function RayFab({ label = 'Ask Ray', onClick }: RayFabProps) {
  return (
    <button className="srp-ray-fab" type="button" aria-label={`Open ${label}`} onClick={onClick}>
      <span className="ray-sparkle" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
