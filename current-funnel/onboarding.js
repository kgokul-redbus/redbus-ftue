/* Onboarding, rebuilt from production screenshots (reference/prod/01-10). Native 411.43 dp space, see onboarding.css. */
(function () {
  const h = React.createElement;
  const D = window.IndiaBusDS;
  const { useState, useEffect, useRef, Fragment } = React;
  const A = 'assets/onb/';
  const at = (center, lh) => center - lh / 2;

  const Status = () => h('img', { className: 'pd-status', src: A + 'statusbar.png', alt: '' });
  const Gesture = () => h('i', { className: 'pd-gesture' });
  const Txt = (cls, style, ...c) => h('p', { className: 'pd-abs ' + cls, style }, ...c);

  /* ---------------- 00 splash ---------------- */
  function Splash({ go }) {
    useEffect(() => { const t = setTimeout(() => go('lang'), 2600); return () => clearTimeout(t); }, []);
    return h('div', { className: 'pd', style: { background: '#d63942', cursor: 'pointer' }, onClick: () => go('lang') },
      h('img', { className: 'pd-abs', src: A + 'statusbar-splash.png', alt: '', style: { left: 0, top: 0, width: 411.43, height: 45.71 } }),
      h('img', { className: 'pd-abs', src: A + 'logo-splash.png', alt: 'redBus', style: { left: 120.8, top: 382.9, width: 169.9, height: 113.9 } }),
      Txt('', { left: 0, right: 0, top: 504.6, textAlign: 'center', fontSize: 16, lineHeight: '22px', color: '#fff', whiteSpace: 'nowrap' }, 'Bus \u2022 Train \u2022 Hotels'),
      h('i', { className: 'pd-gesture', style: { background: '#fff' } }),
      h('div', { className: 'pd-abs', style: { left: 0, right: 0, top: 905.5, height: 5.7, background: '#c37479' } },
        h('i', { style: { display: 'block', height: '100%', width: 0, background: '#fff', borderRadius: '0 3px 3px 0', animation: 'pdSplash 2.6s linear forwards' } })));
  }

  /* ---------------- 01 language ---------------- */
  const LANGS = ['English', 'मराठी (Marathi)', 'हिंदी (Hindi)', 'தமிழ் (Tamil)', 'తెలుగు (Telugu)', 'ಕನ್ನಡ (Kannada)'];
  function Language({ go }) {
    const [lang, setLang] = useState(0);
    const o = 45.71;
    return h('div', { className: 'pd' },
      h(Status),
      h('div', { className: 'pd-lang-scroll' },
        h('div', { style: { position: 'relative', height: 409.1 + LANGS.length * 73.4 + 60 - o } },
          h('img', { className: 'pd-abs', src: A + 'logo-redbus.png', alt: 'redBus', style: { left: 152.4, top: 80 - o, width: 106.7, height: 69.7 } }),
          Txt('pd-t22', { left: 28.2, top: 176 - o }, 'Country'),
          h('button', { className: 'pd-card', style: { top: 252 - o } },
            h('img', { src: A + 'flag-india.png', alt: '', style: { position: 'absolute', left: 16.5, top: 21.5, width: 27.4, height: 19 } }),
            h('span', { className: 'pd-t16', style: { position: 'absolute', left: 63.4 } }, 'India'),
            h('i', { style: { position: 'absolute', right: 31, top: 26.5, width: 9, height: 9, borderTop: '2.2px solid #1d1d1d', borderRight: '2.2px solid #1d1d1d', transform: 'rotate(45deg)' } })),
          Txt('pd-t22', { left: 28.2, top: 360.8 - o }, 'Choose your language'),
          LANGS.map((l, i) => h('button', { key: l, className: 'pd-card' + (lang === i ? ' pd-card--on' : ''), style: { top: 409.1 + i * 73.4 - o }, onClick: () => setLang(i) },
            h('span', { className: 'pd-t16' }, l), h('i', { className: 'pd-radio' }))),
          Txt('', { left: 28.2, top: 409.1 + LANGS.length * 73.4 + 6 - o, fontSize: 12, lineHeight: '16px', color: '#6c6c6c' }, 'You can change language later in ‘My Account’'))),
      h('div', { className: 'pd-lang-foot' }, h('button', { className: 'pd-btn', style: { top: 19 }, onClick: () => go('slides') }, 'Get started')),
      h(Gesture));
  }

  /* ---------------- 02 value slides with login sheet ---------------- */
  const SLIDES = [
    { bg: '#ffea8d', img: 'slide1.jpg', title: '20 Years of happy journeys!', bullets: ['56+ million satisfied travellers', '5200+ bus operators', '7.3 lakh+ bus routes'] },
    { bg: '#d9f7f9', img: 'slide2.jpg', title: 'Fast and reliable customer support', sub: 'Count on instant resolutions, refund and helpline for women travellers', subTop: 176.5, wrap: 300 },
    { bg: '#e3ebff', img: 'slide3.jpg', title: 'Reviewed by 23 Lakh+ travellers!', sub: 'Check ratings and reviews to choose your bus.', subTop: 148.5, single: true },
  ];

  function Pager({ i }) {
    return h('div', { className: 'pd-pager' }, [0, 1, 2].map((k) => k === i
      ? h('span', { key: k, className: 'pd-pill' }, (i + 1) + '/3')
      : h('i', { key: k, className: 'pd-dot' + (Math.abs(k - i) > 1 ? ' pd-dot--s' : '') })));
  }

  function LoginSheet({ go }) {
    return h('div', { className: 'pd-sheet' },
      h('i', { className: 'pd-handle' }),
      Txt('pd-t22', { left: 18.2, top: 35.8 }, 'Log in or create a new account'),
      h('div', { className: 'pd-phone', style: { top: 88.3 } },
        h('button', { className: 'pd-cc' }, h('small', null, 'Country Code'), h('b', null, '+91', h('i'))),
        h('button', { className: 'pd-mob', onClick: () => go('login') }, h('span', null, 'Mobile number'))),
      h('button', { className: 'pd-btn', style: { top: 173 }, onClick: () => go('login') }, 'Get OTP'),
      h('div', { className: 'pd-or', style: { top: 247.7 } }, h('i'), 'or', h('i')),
      h('button', { className: 'pd-google', style: { top: 289.2 }, onClick: () => go('location') }, h('img', { src: A + 'google-g.png', alt: '' }), 'Sign in with Google'));
  }

  function Slides({ s, set, go }) {
    const i = s.slide || 0;
    const sl = SLIDES[i];
    useEffect(() => { const t = setTimeout(() => set({ slide: (i + 1) % 3 }), 4000); return () => clearTimeout(t); }, [i]);
    return h('div', { className: 'pd', style: { background: sl.bg } },
      h(Status),
      h(Pager, { i }),
      h('button', { className: 'pd-skip pd-link', style: { color: '#5157e3' }, onClick: () => go('location') }, 'Skip'),
      h('p', { className: 'pd-abs pd-t22', style: { left: 28.2, top: 109, width: sl.wrap, whiteSpace: sl.wrap ? 'normal' : 'nowrap' } }, sl.title),
      sl.bullets && h('ul', { className: 'pd-bullets' }, sl.bullets.map((b) => h('li', { key: b }, b))),
      sl.sub && Txt('', { left: 28.2, top: sl.subTop, width: sl.single ? undefined : 300, whiteSpace: sl.single ? 'nowrap' : 'normal', fontSize: 16, lineHeight: '23px' }, sl.sub),
      h('img', { className: 'pd-abs', src: A + sl.img, alt: '', style: { left: 0, top: 251.4, width: 411.43, height: 312.4, cursor: 'pointer' }, onClick: () => set({ slide: (i + 1) % 3 }) }),
      h(LoginSheet, { go }),
      h(Gesture));
  }

  /* ---------------- system numeric keyboard (screenshot, with tappable keys) ---------------- */
  const ROWS = [[628.7, 679.7], [687, 738], [744.9, 795.9], [802.7, 853.8]];
  const COLS = [[4.6, 101.1], [106.6, 202.7], [208.2, 304.3], [310.2, 405.9]];
  const KEYS = [['1', '2', '3', '-'], ['4', '5', '6', ' '], ['7', '8', '9', 'del'], [',', '0', '.', 'ok']];
  function Keyboard({ onKey }) {
    return h('div', { className: 'pd-kbd' },
      h('img', { src: A + 'keyboard-numeric.jpg', alt: 'Keyboard' }),
      KEYS.flatMap((row, r) => row.map((k, c) => h('button', { key: r + '-' + c, className: 'pd-key', 'aria-label': k, onClick: () => onKey(k),
        style: { left: COLS[c][0], top: ROWS[r][0] - 566.9, width: COLS[c][1] - COLS[c][0], height: ROWS[r][1] - ROWS[r][0] } }))));
  }

  /* ---------------- 03 login (phone entry) ---------------- */
  function Login({ s, set, go }) {
    const [num, setNum] = useState(s.phone || '');
    const ref = useRef(null);
    useEffect(() => { ref.current && ref.current.focus(); }, []);
    const ok = num.length === 10;
    const key = (k) => { if (k === 'del') setNum((n) => n.slice(0, -1)); else if (k === 'ok') { if (ok) next(); } else if (/\d/.test(k)) setNum((n) => (n + k).slice(0, 10)); };
    const next = () => { set({ phone: num }); go('otp'); };
    return h('div', { className: 'pd' },
      h(Status),
      Txt('pd-t22', { left: 18.2, top: 62.3 }, 'Log in or create a new account'),
      h('div', { className: 'pd-phone', style: { top: 116.2, height: 62.8 } },
        h('button', { className: 'pd-cc' }, h('small', null, 'Country Code'), h('b', null, '+91', h('i'))),
        h('div', { className: 'pd-mob pd-mob--focus' }, h('label', null, 'Mobile number'),
          h('input', { ref, value: num, inputMode: 'numeric', 'aria-label': 'Mobile number', onChange: (e) => setNum(e.target.value.replace(/\D/g, '').slice(0, 10)), onKeyDown: (e) => { if (e.key === 'Enter' && ok) next(); } }))),
      h('button', { className: 'pd-btn', style: { top: 203.2 }, onClick: () => (ok ? next() : ref.current && ref.current.focus()) }, 'Get OTP'),
      h('div', { className: 'pd-or', style: { top: 277.4 } }, h('i'), 'or', h('i')),
      h('button', { className: 'pd-google', style: { top: 319.4 }, onClick: () => go('location') }, h('img', { src: A + 'google-g.png', alt: '' }), 'Sign in with Google'),
      h('button', { className: 'pd-abs', style: { left: 0, right: 0, top: 404, height: 22, fontWeight: 700, fontSize: 14, lineHeight: '22px', color: '#0000ee', textDecoration: 'underline', textAlign: 'center' } }, 'Have a referral code?'),
      h(Keyboard, { onKey: key }),
      h(Gesture));
  }

  /* ---------------- 04 OTP ---------------- */
  function Otp({ s, go }) {
    const [code, setCode] = useState('');
    const [sec, setSec] = useState(30);
    useEffect(() => { const t = setInterval(() => setSec((x) => Math.max(0, x - 1)), 1000); return () => clearInterval(t); }, []);
    useEffect(() => {
      const f = (e) => { if (/^\d$/.test(e.key)) setCode((c) => (c + e.key).slice(0, 6)); if (e.key === 'Backspace') setCode((c) => c.slice(0, -1)); };
      window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f);
    }, []);
    const ok = code.length === 6;
    const key = (k) => { if (k === 'del') setCode((c) => c.slice(0, -1)); else if (k === 'ok') { if (ok) go('location'); } else if (/\d/.test(k)) setCode((c) => (c + k).slice(0, 6)); };
    const phone = s.phone && s.phone.length === 10 ? s.phone : '9876543210';
    return h('div', { className: 'pd' },
      h(Status),
      h('button', { className: 'pd-abs', 'aria-label': 'Close', onClick: () => go('slides'), style: { left: 371.8, top: 65.9, width: 24, height: 24 } }, h(D.Icon, { name: 'ion-close' })),
      Txt('pd-t22', { left: 18.2, top: 123 }, 'Enter the OTP we sent you'),
      Txt('', { left: 18.2, top: 185.8, fontWeight: 700, fontSize: 16, lineHeight: '22px' }, '+91 ' + phone),
      Txt('', { left: 18.2, top: 208.7, fontSize: 14, lineHeight: '20px', color: '#6c6c6c' }, 'Mobile number'),
      h('button', { className: 'pd-abs pd-link', style: { right: 28.2, top: 197.3, fontSize: 14, lineHeight: '20px' }, onClick: () => go('login') }, 'Edit'),
      Txt('', { left: 18.2, top: 262.2, fontSize: 12, lineHeight: '16px', color: '#6c6c6c' }, 'Enter OTP (One Time Password)'),
      h('div', { className: 'pd-otp' }, [0, 1, 2, 3, 4, 5].map((k) => h('span', { key: k, className: k === Math.min(code.length, 5) ? 'on' : '' }, code[k] || ''))),
      h('button', { className: 'pd-btn' + (ok ? '' : ' pd-btn--off'), style: { top: 375.4 }, onClick: () => ok && go('location') }, 'Verify OTP'),
      Txt('', { left: 18.2, top: 463.8, fontSize: 14, lineHeight: '20px' }, sec > 0 ? 'Didn’t get the OTP? Try again in ' : 'Didn’t get the OTP? ',
        sec > 0 ? h('b', { style: { color: '#ad4d03' } }, '00:' + String(sec).padStart(2, '0')) : h('b', { style: { color: '#0000ee', textDecoration: 'underline' } }, 'Resend OTP')),
      h(Keyboard, { onKey: key }),
      h(Gesture));
  }

  /* ---------------- 05 location permission ---------------- */
  function Location({ go }) {
    const done = () => go('home', { postOnb: 'notif' });
    return h('div', { className: 'pd' },
      h(Status),
      h('button', { className: 'pd-abs pd-link', style: { right: 46.5, top: 67.4, lineHeight: '22px' }, onClick: done }, 'Skip'),
      Txt('pd-t22', { left: 0, right: 0, top: 173, textAlign: 'center' }, 'Enhance your travel experience'),
      Txt('', { left: 0, right: 0, whiteSpace: 'nowrap', top: 207.6, fontSize: 14, lineHeight: '20.5px', color: '#6f6f6f', textAlign: 'center' }, 'redBus collects and uses location data to find', h('br'), 'boarding points near you and provide real-time travel', h('br'), 'updates.'),
      h('div', { className: 'pd-map' }, h('img', { src: A + 'location-map.jpg', alt: '' })),
      h('button', { className: 'pd-btn', style: { left: 27.8, width: 355.8, top: 526.2 }, onClick: done }, 'Share Location'),
      h(Gesture));
  }

  /* ---------------- system prompts shown on home after onboarding ---------------- */
  function HomePrompts({ s, set }) {
    if (s.postOnb === 'notif') {
      return h(Fragment, null,
        h('div', { className: 'pd-scrim', style: { background: 'rgba(0,0,0,.6)' } }),
        h('div', { className: 'pd', style: { background: 'transparent', zIndex: 61 } },
          h('div', { className: 'pd-dialog' },
            h('img', { src: A + 'ic-bell.png', alt: '', style: { position: 'absolute', left: 169.6, top: 24.3, width: 25.9, height: 25.9 } }),
            Txt('', { left: 0, right: 0, top: 66, textAlign: 'center', fontSize: 16, lineHeight: '22px' }, 'Allow ', h('b', null, 'redBus'), ' to send you notifications?'),
            h('i', { style: { position: 'absolute', left: 0, right: 0, top: 114.7, height: 1, background: '#eceaf0' } }),
            h('button', { className: 'row', style: { top: 118.7 }, onClick: () => set({ postOnb: 'review' }) }, 'Allow'),
            h('button', { className: 'row', style: { top: 177.9 }, onClick: () => set({ postOnb: 'review' }) }, 'Don’t allow'))));
    }
    if (s.postOnb === 'review') return h(Review, { set });
    return null;
  }

  function Review({ set }) {
    const [r, setR] = useState(0);
    const X = [72, 138.5, 205, 272, 339];
    return h(Fragment, null,
      h('div', { className: 'pd-scrim', style: { background: 'rgba(0,0,0,.32)' }, onClick: () => set({ postOnb: null }) }),
      h('div', { className: 'pd', style: { background: 'transparent', zIndex: 61, pointerEvents: 'none' } },
        h('div', { className: 'pd-review', style: { pointerEvents: 'auto' } },
          h('img', { src: A + 'google-play.png', alt: 'Google Play', style: { position: 'absolute', left: 19, top: 17.5, width: 118.9, height: 28.6 } }),
          h('i', { style: { position: 'absolute', left: 0, right: 0, top: 64.2, height: 1, background: '#c8c5cc' } }),
          h('img', { src: A + 'app-icon.png', alt: '', style: { position: 'absolute', left: 13, top: 104.2, width: 47.2, height: 47.2 } }),
          Txt('', { left: 73.4, top: 106.2, fontSize: 16, lineHeight: '22px' }, 'redBus'),
          Txt('', { left: 73.4, top: 128.8, whiteSpace: 'nowrap', fontSize: 14, lineHeight: '16.8px', color: '#5f6368' }, 'Reviews are only visible to developers and include', h('br'), 'your account and device info'),
          h('div', { className: 'pd-stars' }, X.map((x, i) => h('button', { key: i, className: i < r ? 'on' : '', style: { left: x - 20, top: 185 }, 'aria-label': (i + 1) + ' stars', onClick: () => setR(i + 1) }, i < r ? h('svg', { viewBox: '0 0 24 24', width: 31, height: 31, 'aria-hidden': true }, h('path', { fill: '#01875f', d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' })) : h('img', { src: A + 'star-outline.png', alt: '' })))),
          h('button', { style: { position: 'absolute', left: 14, width: 184.2, top: 259.7, height: 40, borderRadius: 20, border: '1px solid #747775', color: '#406c5f', fontWeight: 500, fontSize: 16 }, onClick: () => set({ postOnb: null }) }, 'Not now'),
          h('button', { style: { position: 'absolute', left: 212.8, width: 184.5, top: 259.7, height: 40, borderRadius: 20, background: r ? '#0b8043' : '#e8e8e8', color: r ? '#fff' : '#f5f5f5', fontWeight: 500, fontSize: 16 }, onClick: () => r && set({ postOnb: null }) }, 'Submit'),
          h('i', { className: 'pd-gesture', style: { top: 342.6 } }))));
  }

  window.ONB = { Splash, Language, Slides, Login, Otp, Location, HomePrompts, SLIDES, parts: { Status, Gesture, Txt, Pager, LoginSheet, Keyboard, A } };
})();
