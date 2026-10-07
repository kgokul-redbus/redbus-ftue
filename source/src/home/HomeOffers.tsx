export interface HomeOffer {
  /** Offer copy, e.g. "Save up to ₹300 on your next bus ticket". */
  title: string;
  onClick?: () => void;
}

export interface HomeOffersProps {
  /** Section heading. */
  heading?: string;
  /** Support line under the heading. */
  support?: string;
  /** Cards in the horizontally scrolling rail (220px each). */
  offers: HomeOffer[];
}

/**
 * P09 home promotion surface, offer rail — screenshot-led, candidate, not
 * node-verified. Heading, support line and a horizontal rail of offer cards.
 * The campaign banner is `HomeCampaign`.
 */
export function HomeOffers({
  heading = 'Offers',
  support = 'Get best deals with great offers',
  offers,
}: HomeOffersProps) {
  return (
    <section className="ff-home__offers">
      <h2>{heading}</h2>
      <p>{support}</p>
      <div className="ff-hscroll ff-offer-rail">
        {offers.map((offer, i) => (
          <button key={i} className="ff-offer-card" type="button" onClick={offer.onClick}>
            {offer.title}
          </button>
        ))}
      </div>
    </section>
  );
}
