export interface HomeServicesProps {
  /** Accessible name for the artwork strip. */
  label?: string;
}

/**
 * P06 service-category strip — GEMS `AndroidSearchSection` page family,
 * candidate, not node-verified. The redBus service tiles are production
 * artwork, never rebuilt from text: the kit crops its Home screenshot, the
 * binding renders the extracted crop `ib-art-home-services` (356 × 74).
 * Carries the kit's 48px top margin (status-bar offset) — place it first on a
 * Home screen.
 */
export function HomeServices({ label = 'redBus services' }: HomeServicesProps) {
  return <div className="ff-art-crop ff-home__services ib-art-home-services" aria-label={label} />;
}
