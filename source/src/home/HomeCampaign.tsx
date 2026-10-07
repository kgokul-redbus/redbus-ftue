export interface HomeCampaignProps {
  /** Accessible name for the campaign artwork. */
  label?: string;
}

/**
 * P09 home promotion surface, campaign banner — screenshot-led, candidate, not
 * node-verified. Product artwork (crop `ib-art-home-campaign`, 356 × 138); sits
 * below `HomeSearchButton` inside the Home hero. The offer rail further down
 * the page is `HomeOffers`.
 */
export function HomeCampaign({ label = 'Freedom train ticket campaign' }: HomeCampaignProps) {
  return <div className="ff-art-crop ff-home__campaign ib-art-home-campaign" aria-label={label} />;
}
