import { ChevronRight } from './Icons.jsx'
import './RtcEntry.css'

export default function RtcEntry() {
  return (
    <div className="rtc" data-node="RTC ENTRY ANIMATE">
      <div className="rtc-stack">
        {/* faux stacked cards peeking behind */}
        <div className="rtc-ghost rtc-ghost-2" />
        <div className="rtc-ghost rtc-ghost-1" />

        <div className="rtc-card">
          <div className="rtc-left">
            <img src="assets/rtc_logo.png" alt="KSRTC" className="rtc-logo" />
            <div className="rtc-info">
              <div className="rtc-nameline">
                <span className="t-body-b rtc-name">KSRTC</span>
                <span className="rtc-count">(108 Buses)</span>
              </div>
              <span className="t-subhead-m kn rtc-kn">ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ಸಂಸ್ಥೆ</span>
              <span className="t-subhead-b rtc-from">From ₹800</span>
            </div>
          </div>
          <ChevronRight size={24} color="#1d1d1d" />
        </div>
      </div>
    </div>
  )
}
