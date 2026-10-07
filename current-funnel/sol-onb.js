/* Onboarding solves (native 411.43 dp space, inside .pd like the production screens).
   SOL-36 · post-booking support as part of onboarding: slide 2 shows what help looks like after booking, on a ticket.
   SOL-24 · contextualise permission requests: location stays at onboarding but explains its value first, the system
            dialog only follows "Share location", and no notification / review prompts fire on a first home visit. */
(function () {
  const h = React.createElement;
  const { useState, useEffect } = React;
  const I = (name, size) => h(window.IndiaBusDS.Icon, { name, size });

  /* ---------- SOL-36 · slides ---------- */
  function SupportTicket() {
    const [typed, setTyped] = useState(false);
    useEffect(() => { const t = setTimeout(() => setTyped(true), 2100); return () => clearTimeout(t); }, []);
    const rows = [
      ['ion-help', 'Chat with redBuddy', '24×7 · Multilingual', true],
      ['ion-swap', 'Free bus change', 'Plans changed? Switch your bus'],
      ['ion-ticket', 'Cancel & instant refund', 'Money back to source, fast'],
    ];
    return h('div', { className: 'ob-visual' },
      h('div', { className: 'ob-ticket' },
        h('div', { className: 'ob-tk-head' },
          h('div', null, h('b', null, 'Bengaluru → Chennai'), h('small', null, 'Thu, 8 Oct · 21:45 · SRI SAI TRAVELS')),
          h('span', { className: 'ob-tk-badge' }, 'Your ticket')),
        rows.map(([ic, t, sub, live], i) => h('div', { key: t, className: 'ob-tk-row', style: { '--d': (350 + i * 220) + 'ms' } },
          h('span', { className: 'ob-tk-ic' }, I(ic)),
          h('span', { className: 'ob-tk-t' }, h('b', null, t, live && h('i', { className: 'ob-live' }, 'Online')), h('small', null, sub)),
          I('ion-arrow-forward', 'sm')))),
      h('div', { className: 'ob-bubble' + (typed ? ' typed' : '') },
        h('span', { className: 'ob-av' }, 'rB'),
        typed ? h('p', null, 'Hi! How can I help with your trip?') : h('p', { className: 'ob-dots', 'aria-label': 'redBuddy is typing' }, h('i'), h('i'), h('i'))));
  }

  const SLIDES36 = (base) => base.map((sl, i) => (i === 1
    ? Object.assign({}, sl, { title: 'Help that stays with you after you book', sub: 'Cancel, change your bus or chat with us 24×7, right from your ticket.', subTop: 176.5, wrap: 330, custom: true, ms: 5500 })
    : sl));

  function SlidesSol36({ s, set, go }) {
    const P = window.ONB.parts, SL = SLIDES36(window.ONB.SLIDES);
    const i = s.slide || 0, sl = SL[i];
    useEffect(() => { const t = setTimeout(() => set({ slide: (i + 1) % 3 }), sl.ms || 4000); return () => clearTimeout(t); }, [i]);
    return h('div', { className: 'pd', style: { background: sl.bg } },
      h(P.Status),
      h(P.Pager, { i }),
      h('button', { className: 'pd-skip pd-link', style: { color: '#5157e3' }, onClick: () => go('location') }, 'Skip'),
      h('p', { className: 'pd-abs pd-t22', style: { left: 28.2, top: 109, width: sl.wrap, whiteSpace: sl.wrap ? 'normal' : 'nowrap' } }, sl.title),
      sl.bullets && h('ul', { className: 'pd-bullets' }, sl.bullets.map((b) => h('li', { key: b }, b))),
      sl.sub && P.Txt('', { left: 28.2, top: sl.subTop, width: sl.single ? undefined : 330, whiteSpace: sl.single ? 'nowrap' : 'normal', fontSize: 16, lineHeight: '23px' }, sl.sub),
      sl.custom
        ? h('div', { key: 'v' + i, onClick: () => set({ slide: (i + 1) % 3 }) }, h(SupportTicket))
        : h('img', { className: 'pd-abs', src: P.A + sl.img, alt: '', style: { left: 0, top: 251.4, width: 411.43, height: 312.4, cursor: 'pointer' }, onClick: () => set({ slide: (i + 1) % 3 }) }),
      h(P.LoginSheet, { go }),
      h('i', { className: 'pd-gesture' }));
  }

  /* ---------- SOL-24 · location with context, then the system dialog ---------- */
  function SystemLocationDialog({ onAllow, onDeny }) {
    const [precise, setPrecise] = useState(true);
    return h('div', { className: 'ob-sys' },
      h('div', { className: 'ob-sys-scrim' }),
      h('div', { className: 'ob-sys-card', role: 'dialog', 'aria-label': 'Location permission' },
        h('span', { className: 'ob-sys-ic' }, I('ion-location')),
        h('p', { className: 'ob-sys-t' }, 'Allow ', h('b', null, 'redBus'), ' to access this device’s location?'),
        h('div', { className: 'ob-sys-opts' },
          [[true, 'Precise'], [false, 'Approximate']].map(([v, l]) => h('button', { key: l, className: 'ob-sys-opt' + (precise === v ? ' on' : ''), onClick: () => setPrecise(v) },
            h('span', { className: 'ob-sys-map' + (v ? '' : ' ob-sys-map--approx') }, h('i')), l))),
        ['While using the app', 'Only this time', 'Don’t allow'].map((l, k) => h('button', { key: l, className: 'ob-sys-btn', onClick: k < 2 ? onAllow : onDeny }, l))));
  }

  function LocationSol24({ s, set, go }) {
    const [sys, setSys] = useState(false);
    const home = (p) => go('home', Object.assign({ postOnb: null }, p));
    const rows = [
      ['ion-location', 'Nearest boarding points first', 'Sorted by distance from where you are'],
      ['ion-bus', 'Live bus tracking', 'Know exactly when your bus reaches you'],
      ['ion-eye-off', 'Only while you use the app', 'Change it anytime in settings'],
    ];
    return h('div', { className: 'pd ob-loc' },
      h(window.ONB.parts.Status),
      h('div', { className: 'ob-map' },
        h('img', { src: window.ONB.parts.A + 'location-map.jpg', alt: '' }),
        h('svg', { className: 'ob-route', viewBox: '0 0 375 280', preserveAspectRatio: 'none', 'aria-hidden': true }, h('path', { d: 'M150 188 C 168 160, 152 132, 122 106', fill: 'none', stroke: 'currentColor', strokeWidth: 3, strokeDasharray: '2 7', strokeLinecap: 'round' })),
        h('span', { className: 'ob-me' }, h('i')),
        h('span', { className: 'ob-bp' }, I('ion-bus', 'sm'), h('span', null, h('b', null, 'Kalasipalayam'), h('small', null, 'Nearest boarding point · 1.4 km')))),
      h('p', { className: 'ob-h' }, 'Find boarding points near you'),
      h('p', { className: 'ob-sub' }, 'We use your location to show the closest pick-up points and live tracking on your travel day.'),
      h('div', { className: 'ob-rows' }, rows.map(([ic, t, sub], k) => h('div', { key: t, className: 'ob-row', style: { '--d': (200 + k * 90) + 'ms' } },
        h('span', { className: 'ob-row-ic' }, I(ic)), h('span', null, h('b', null, t), h('small', null, sub))))),
      h('button', { className: 'ob-cta', onClick: () => setSys(true) }, 'Share location'),
      h('button', { className: 'ob-later', onClick: () => home() }, 'Not now'),
      sys && h(SystemLocationDialog, { onAllow: () => home({ origin: 'Bengaluru', locOn: true }), onDeny: () => home() }),
      h('i', { className: 'pd-gesture' }));
  }

  window.SOLONB = { SlidesSol36, LocationSol24 };
})();
