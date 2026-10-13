import { Star, Check } from './Icons.jsx'
import './ResultCard.css'

function PrimoLogo() {
  // Blue "Primo" wordmark with an outlined star (matches SRP program logo)
  return (
    <span className="primo" aria-label="Primo">
      <span className="primo-text">Primo</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.6l1.8 3.65 4.03.586-2.915 2.84.688 4.014L8 10.79l-3.6 1.9.688-4.014L2.17 5.836 6.2 5.25 8 1.6Z"
          fill="none"
          stroke="#f5a623"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function RedDealTag({ tone, lead, strong }) {
  // tone: 'group' (purple) | 'regular' (yellow)
  return (
    <span className={`reddeal reddeal-${tone}`}>
      <span className="reddeal-notch reddeal-notch-l" />
      <span className="reddeal-body">
        <span className="reddeal-lead">{lead}</span>
        <span className="reddeal-strong">{strong}</span>
      </span>
      <span className="reddeal-notch reddeal-notch-r" />
    </span>
  )
}

function RatingBadge({ score, count }) {
  return (
    <div className="rating">
      <div className="rating-top">
        <Star size={12} color="#fff" />
        <span className="rating-score">{score}</span>
      </div>
      <span className="rating-count">{count}</span>
    </div>
  )
}

export default function ResultCard({ data }) {
  const {
    primo,
    deals = [],
    dep,
    arr,
    duration,
    seats,
    price,
    operator,
    busType,
    rating,
    count,
    rtbTitle,
    props = [],
    fallback,
  } = data

  return (
    <div className="card" data-node="Tuple1">
      <div className="card-meta">
        {/* Row: Primo + redDeals */}
        {(primo || deals.length > 0) && (
          <div className="card-top">
            {primo ? <PrimoLogo /> : <span />}
            <div className="card-deals">
              {deals.map((d, i) => (
                <RedDealTag key={i} {...d} />
              ))}
            </div>
          </div>
        )}

        {/* Row: time + price */}
        <div className="card-timeprice">
          <div className="card-time-seats">
            <div className="card-time">
              <span className="t-body-b">{dep}</span>
              <span className="card-duration">
                <span className="card-sep" />
                <span className="t-caption-r card-dur-text">{duration}</span>
                <span className="card-sep" />
              </span>
              <span className="t-body-r">{arr}</span>
            </div>
            <span className="t-footnote-r card-seats">{seats}</span>
          </div>
          <div className="card-price">
            <span className="t-body-b">{price}</span>
            <span className="t-caption-r card-onwards">Onwards</span>
          </div>
        </div>

        {/* Row: operator + rating */}
        <div className="card-bo">
          <div className="card-bo-info">
            <span className="t-subhead-b card-operator">{operator}</span>
            <span className="t-footnote-r card-bustype">{busType}</span>
          </div>
          <RatingBadge score={rating} count={count} />
        </div>

        {/* RTB: value pick + propositions, OR fallback line */}
        {fallback ? (
          <div className="card-fallback">
            <Check size={16} />
            <span className="t-footnote-r">{fallback}</span>
          </div>
        ) : (
          <div className="card-rtb">
            {rtbTitle && <span className="t-footnote-r card-rtb-title">{rtbTitle}</span>}
            <div className="card-props">
              {props.map((p, i) => (
                <span key={i} className="prop t-footnote-r">
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
