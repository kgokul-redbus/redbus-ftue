import StatusBar from '../components/StatusBar.jsx'
import './Home.css'

function Category({ badge, badgeColor, label, emoji, bg }) {
  return (
    <div className="cat">
      <div className="cat-card" style={{ background: bg }}>
        {badge && (
          <span className="cat-badge" style={{ background: badgeColor }}>
            {badge}
          </span>
        )}
        <span className="cat-emoji">{emoji}</span>
      </div>
      <span className="cat-label">{label}</span>
    </div>
  )
}

export default function Home({ onSearch }) {
  return (
    <div className="device home">
      <StatusBar />

      {/* top bar */}
      <div className="home-topbar">
        <span className="home-logo">redBus</span>
        <div className="home-top-actions">
          <span className="home-pill">🌐 English ▾</span>
          <span className="home-pill">
            <span className="home-wallet-ic">💳</span> Wallet <b>₹500</b>
          </span>
        </div>
      </div>

      {/* categories */}
      <div className="home-cats">
        <Category badge="₹300 OFF" badgeColor="#c9f0d2" label="Bus" emoji="🚌" bg="#f4f5f7" />
        <Category badge="₹100 OFF" badgeColor="#c9f0d2" label="Train" emoji="🚆" bg="#f4f5f7" />
        <Category label="Hotel" emoji="🏨" bg="#f4f5f7" />
        <Category badge="NEW" badgeColor="#dfe7fb" label="Metro" emoji="🚈" bg="#f4f5f7" />
      </div>

      <h1 className="home-h1">Book bus tickets</h1>

      {/* search card */}
      <div className="home-search">
        <div className="home-search-head">ZERO convenience fee*</div>
        <div className="home-search-body">
          <div className="hs-row">
            <span className="hs-ic">🚌</span>
            <div className="hs-field">
              <span className="hs-label">From</span>
              <span className="hs-value">Bangalore</span>
            </div>
            <button className="hs-swap">⇅</button>
          </div>
          <div className="hs-divider" />
          <div className="hs-row">
            <span className="hs-ic">🚌</span>
            <div className="hs-field">
              <span className="hs-label">To</span>
              <span className="hs-value">Chennai</span>
            </div>
          </div>
          <div className="hs-divider" />
          <div className="hs-row">
            <span className="hs-ic">📅</span>
            <div className="hs-field">
              <span className="hs-label">Date of Journey</span>
              <span className="hs-value">
                Sun <b>10-Mar</b>
              </span>
            </div>
            <div className="hs-daypills">
              <span className="hs-daypill hs-daypill-on">Today</span>
              <span className="hs-daypill">Tomm</span>
            </div>
          </div>
          <div className="hs-divider" />
          <div className="hs-row">
            <span className="hs-ic">👩</span>
            <div className="hs-field">
              <span className="hs-value hs-value-sm">Booking for woman</span>
              <span className="hs-know">Know more</span>
            </div>
            <div className="hs-toggle" />
          </div>
        </div>
      </div>

      <button className="home-cta" onClick={onSearch}>
        <span className="home-cta-ic">🔍</span> Search buses
      </button>

      {/* offers */}
      <div className="home-offers-head">
        <h2 className="home-h2">Offers</h2>
        <span className="home-viewmore">View More</span>
      </div>
      <div className="home-offer-tabs">
        <span className="home-tab home-tab-on">Bus</span>
        <span className="home-tab">Train</span>
        <span className="home-tab">Hotel</span>
        <span className="home-tab">Metro</span>
      </div>
      <div className="home-offer-preview">
        <div className="home-offer-p home-offer-p1"><span className="home-offer-badge">Bus</span></div>
        <div className="home-offer-p home-offer-p2"><span className="home-offer-badge">Be</span></div>
      </div>

      {/* bottom nav */}
      <div className="home-bottomnav">
        {[
          { ic: '🏠', label: 'Home', on: true },
          { ic: '📋', label: 'Bookings' },
          { ic: '％', label: 'Offers' },
          { ic: '💬', label: 'Help' },
          { ic: '👤', label: 'Account' },
        ].map((t) => (
          <div className={`bn-item ${t.on ? 'bn-on' : ''}`} key={t.label}>
            <span className="bn-ic">{t.ic}</span>
            <span className="bn-label">{t.label}</span>
          </div>
        ))}
        <div className="home-gesture" />
      </div>
    </div>
  )
}
