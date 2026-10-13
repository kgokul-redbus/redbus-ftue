import './OffersStrip.css'

const CARDS = [
  { bg: 'var(--fill-warning-secondary)', tag: 'Last min.', title: 'Limited time steal deals', img: 'assets/offer_clock.png', imgStyle: { width: 46, bottom: 2, right: 6 } },
  { bg: 'var(--fill-electric-tertiary)', tag: 'Try -new', title: 'Up to ₹150 off with new operator', img: 'assets/offer_newop.png', imgStyle: { width: 56, bottom: 2, right: -2, transform: 'rotate(7deg)' } },
  { bg: 'var(--fill-info-tertiary)', tag: 'Early buy', title: 'Buy early to get special prices', img: 'assets/offer_early.png', imgStyle: { width: 40, bottom: 4, right: 8 } },
  { bg: 'var(--fill-brand-tertiary)', tag: 'Return trip', title: 'Get discount on return trip', img: 'assets/offer_return.png', imgStyle: { width: 45, bottom: 6, right: 6 } },
  { bg: 'var(--fill-purple-secondary)', tag: 'Exclusive', title: 'Hand picked deals for you', img: 'assets/offer_handpicked.png', imgStyle: { width: 36, bottom: 0, right: 10, transform: 'rotate(-15deg)' } },
  { bg: 'var(--fill-woman-secondary)', tag: 'Women deal', title: 'Exclusive deals for women', img: 'assets/offer_women.png', imgStyle: { width: 57, bottom: 2, right: 2 } },
]

export default function OffersStrip() {
  return (
    <div className="offers" data-node="Auto Layout Horizontal">
      {/* Flat 10% off image card (NueGo) */}
      <div className="offer-img-card">
        <img src="assets/offer_nuego.png" alt="" className="offer-nuego" />
      </div>

      {CARDS.map((c, i) => (
        <div className="offer-card" key={i} style={{ background: c.bg }}>
          <span className="offer-tag t-footnote-m">{c.tag}</span>
          <span className="offer-title">{c.title}</span>
          <img src={c.img} alt="" className="offer-illus" style={c.imgStyle} />
        </div>
      ))}
    </div>
  )
}
