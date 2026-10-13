// Android-style status bar — 9:30 · notch · wifi/signal/battery
export default function StatusBar({ dark = false }) {
  const fg = dark ? '#ffffff' : '#1d1d1d'
  return (
    <div
      style={{
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        flexShrink: 0,
        position: 'relative',
        zIndex: 2,
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 600, color: fg, letterSpacing: 0 }}>9:30</span>
      {/* camera notch */}
      <span
        style={{
          position: 'absolute',
          left: '50%',
          top: 10,
          transform: 'translateX(-50%)',
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#0b0b1a',
          boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.06)',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {/* wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 11.5 0.5 3.2C2.6 1.2 5.2 0 8 0s5.4 1.2 7.5 3.2L8 11.5Z" fill={fg} />
        </svg>
        {/* signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill={fg} />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" fill={fg} />
          <rect x="9" y="2.8" width="3" height="9.2" rx="0.5" fill={fg} />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill={fg} opacity="0.35" />
        </svg>
        {/* battery */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0.5" y="0.5" width="15" height="11" rx="2.5" stroke={fg} strokeOpacity="0.4" />
          <rect x="2" y="2" width="10.5" height="8" rx="1.5" fill={fg} />
          <rect x="16.5" y="4" width="1.5" height="4" rx="0.75" fill={fg} />
        </svg>
      </div>
    </div>
  )
}
