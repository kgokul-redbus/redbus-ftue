/* Search results, rebuilt from production screenshots 15-18. Native 411.43 dp space. */
(function () {
  const h = React.createElement;
  const { useState, useEffect } = React;
  const A = 'assets/srp/';
  const T = (c, lh, style, ...kids) => { const { key, ...st } = style; return h('p', { key, className: 'a', style: Object.assign({ top: c - lh / 2, lineHeight: lh + 'px', whiteSpace: 'nowrap' }, st) }, ...kids); };
  const Img = (src, l, t, w, ht, extra) => { const { key, ...ex } = extra || {}; return h('img', { key, className: 'a', src: A + src, alt: '', style: Object.assign({ left: l, top: t, width: w, height: ht }, ex) }); };
  const G = '#6c6c6c';

  /* the first two tuples are the production screenshot; the rest follow the same layout with sample data */
  const TUPLES = [
    { ribbon: 'rb-exclusive.png', rbL: 224.8, rbW: 152.4, dep: '23:10', arr: '06:20', dur: '7h 10m', seats: '28 Seats', single: '(6 Single)', was: '₹538', now: '₹484', op: 'SRI SAI TRAVELS', track: 157, type: 'A/C Seater / Sleeper (2+1)', rate: '4.9', n: '1316', comfort: '9.2', feats: [['New Bus', 209.5, 69.7], ['Snack', 286.5, 54.5]], h: 251.4 },
    { ribbon: 'rb-trynew.png', rbL: 232.4, rbW: 144.8, dep: '22:30', arr: '05:20', dur: '6h 50m', seats: '23 Seats', single: '(6 Single)', was: '₹880', now: '₹792', op: 'V Bus Holidays', track: 144, type: 'Bharat Benz A/C Sleeper (2+1)', rate: '4.7', n: '1443', comfort: '8.9', feats: [['Snack', 209.5, 47.6]], row2: [['Free date change', 36.6, 119.6]], h: 285 },
    { ribbon: 'rb-exclusive.png', rbL: 224.8, rbW: 152.4, dep: '21:45', arr: '05:55', dur: '8h 10m', seats: '31 Seats', single: '(9 Single)', was: '₹1,500', now: '₹1,350', op: 'SRI SAI TRAVELS', track: 157, type: 'A/C Seater / Sleeper (2+1)', rate: '4.6', n: '982', comfort: '8.7', feats: [['Live tracking', 209.5, 88]], h: 251.4 },
    { dep: '22:00', arr: '04:45', dur: '6h 45m', seats: '18 Seats', single: '(4 Single)', now: '₹999', op: 'IntrCity SmartBus', track: 166, type: 'A/C Sleeper (2+1)', rate: '4.5', n: '2210', comfort: '8.5', feats: [['New Bus', 209.5, 69.7]], h: 220 },
    { dep: '23:30', arr: '06:10', dur: '6h 40m', seats: '12 Seats', single: '(2 Single)', now: '₹850', op: 'KPN Travels', track: 128, type: 'Volvo Multi-Axle A/C Sleeper (2+1)', rate: '4.4', n: '3125', comfort: '8.2', feats: [['Snack', 209.5, 54.5]], h: 220 },
  ];

  function Tuple({ t, top, go, comfort }) {
    const o = t.ribbon ? 0 : -48;
    return h('div', { className: 'rp-card rp-tup', style: { top, height: t.h }, role: 'button', onClick: () => go('seats', { seats: [] }) },
      t.ribbon && Img(t.ribbon, t.rbL - 18.3, 16.8, t.rbW, 30.5),
      h('div', { className: 'rp-tag', style: { left: 18.3, top: 59.4 + o, height: 21.4, padding: '0 10px 0 7.2px', borderRadius: 8, background: 'linear-gradient(90deg,#e2e4fd 60%,#fafbff)' } }, 'Direct Bus'),
      T(105.9 + o, 22, { left: 18.7, fontSize: 16, fontWeight: 700 }, t.dep),
      h('i', { className: 'a', style: { left: 70.1, top: 105.4 + o, width: 12.9, height: 1.4, background: '#d6d6d6' } }),
      T(105.9 + o, 22, { left: 91, fontSize: 16 }, t.arr),
      T(125.7 + o, 16, { left: 18.7, fontSize: 12, color: G }, t.dur, h('span', { style: { margin: '0 6px' } }, '·'), t.seats + ' ', h('span', null, t.single)),
      T(105.9 + o, 22, { right: 19.1, fontSize: 16, textAlign: 'right' }, t.was && h('s', { style: { fontSize: 14, color: G, marginRight: 6 } }, t.was), h('b', null, t.now)),
      T(125.7 + o, 16, { right: 19.1, fontSize: 12, color: G }, 'Onwards'),
      T(159.6 + o, 20, { left: 18.7, fontSize: 14, fontWeight: 700 }, t.op),
      Img('ic-track.png', t.track - 18.3, 147.8 + o, 22.9, 25.1),
      T(178.7 + o, 16, { left: 20.9, fontSize: 12, color: G }, t.type),
      h('div', { className: 'rp-rate', style: { top: 148.6 + o } }, h('b', null, '★ ' + t.rate), h('span', null, t.n)),
      h('button', { className: 'rp-feat rp-comfort', style: { left: 18.3, top: 201.1 + o, width: 165.3 }, onClick: (e) => { e.stopPropagation(); comfort(); } },
        h('img', { src: A + 'ic-cloud.png', alt: '', style: { position: 'absolute', left: 6.1, top: 6.5, width: 19, height: 14.1 } }), 'Comfort score: ' + t.comfort + '/10'),
      t.feats.map(([f, l, w]) => h('span', { key: f, className: 'rp-feat', style: { left: l - 18.3, top: 201.1 + o, width: w } }, f)),
      (t.row2 || []).map(([f, l, w]) => h('span', { key: f, className: 'rp-feat', style: { left: l - 18.3, top: 235.8 + o, width: w, height: 25.5 } }, f)));
  }

  function ComfortSheet({ close }) {
    return [
      h('div', { key: 's', className: 'cs-scrim', onClick: close }),
      h('div', { key: 'p', className: 'cs-sheet' },
        h('img', { src: A + 'comfort-art.jpg', alt: '', style: { display: 'block', width: 411.4, height: 422.9 } }),
        h('button', { 'aria-label': 'Close', onClick: close, style: { position: 'absolute', left: 343, top: 13.9, width: 54, height: 54, borderRadius: '50%' } }),
        T(451.4, 20, { left: 0, right: 0, textAlign: 'center', fontSize: 14 }, 'Introducing'),
        Img('comfort-chip.png', 105.5, 467.4, 200.4, 49.9),
        T(563.5, 28, { left: 0, right: 0, textAlign: 'center', fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' }, 'The score for a good night’s sleep'),
        T(594.9, 20.5, { left: 0, right: 0, textAlign: 'center', fontSize: 14 }, 'A 10-point score for how comfortable a bus is, based'),
        T(615.5, 20.5, { left: 0, right: 0, textAlign: 'center', fontSize: 14 }, 'on ', h('b', { style: { color: '#0a6fa8' } }, 'seat comfort, cooling, driving, and hygiene')),
        h('button', { className: 'pd-btn', style: { top: 662.3, height: 53.8 }, onClick: close }, 'Got it!'))];
  }

  const PHRASES = ['Primo buses with live tracking', 'AC sleeper under 1000'];
  function useTyping() {
    const [txt, setTxt] = useState('');
    useEffect(() => {
      let p = 0, i = 0, dir = 1, t;
      const tick = () => {
        const w = PHRASES[p];
        i += dir; setTxt(w.slice(0, i));
        if (dir > 0 && i >= w.length) { dir = -1; t = setTimeout(tick, 1400); return; }
        if (dir < 0 && i <= 0) { dir = 1; p = (p + 1) % PHRASES.length; }
        t = setTimeout(tick, dir > 0 ? 90 : 35);
      };
      t = setTimeout(tick, 400);
      return () => clearTimeout(t);
    }, []);
    return txt;
  }

  function Srp({ s, set, go }) {
    const [cs, setCs] = useState(false);
    const [q, setQ] = useState('');
    const typed = useTyping();
    const [m, d] = s.dateKey.split('-').map(Number);
    const dt = new Date(2026, 6 + m, d);
    let y = 635.8;
    const tuples = TUPLES.map((t, i) => { const top = y; y += t.h + 9.1; return h(Tuple, { key: i, t, top, go, comfort: () => setCs(true) }); });
    return h('div', { className: 'pd' },
      h('img', { className: 'pd-status', src: A + 'statusbar.png', alt: '', style: { mixBlendMode: 'normal', zIndex: 7 } }),
      h('div', { className: 'rp-bar' },
        h('button', { 'aria-label': 'Back', onClick: () => go('home'), style: { position: 'absolute', left: 12, top: 62, width: 40, height: 40 } }, h('img', { src: A + 'ic-back.png', alt: '', style: { position: 'absolute', left: 9.3, top: 9.6, width: 21.3, height: 21.3 } })),
        h('p', { className: 'a', style: { left: 64.4, top: 63.3, lineHeight: '22px', fontWeight: 700, fontSize: 16, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', maxWidth: 268, overflow: 'hidden' } },
          s.origin || 'Bengaluru', h('img', { src: A + 'ic-arrow.png', alt: '', style: { width: 21.3, height: 19.8, margin: '0 7.9px 0 9.3px' } }), s.dest || 'Chennai'),
        T(96, 16, { left: 64.4, fontSize: 12, color: G }, '237 Buses'),
        h('button', { className: 'rp-date', onClick: () => set({ sheet: 'date' }) }, d + ' ' + dt.toLocaleDateString('en-US', { month: 'short' })),
        T(100.2, 16, { left: 342.1, width: 50.7, textAlign: 'center', fontSize: 12, color: G }, dt.toLocaleDateString('en-US', { weekday: 'short' }))),
      h('div', { className: 'rp-scroll' },
        h('div', { style: { position: 'relative', height: y + 80 } },
          h('div', { className: 'rp-top' },
            T(28.2, 20, { left: 0, width: 205.7, textAlign: 'center', fontWeight: 700, fontSize: 14 }, 'Buses'),
            T(28.2, 20, { left: 237.3, fontSize: 14 }, 'Hotels'),
            h('b', { className: 'a', style: { left: 289.5, top: 15.3, width: 91.1, height: 25.5, borderRadius: 999, background: '#adf2b3', fontWeight: 400, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' } }, 'Upto 70% Off'),
            h('i', { className: 'a', style: { left: 0, width: 205.7, top: 52.2, height: 3.1, background: '#d23d41' } }),
            h('i', { className: 'a', style: { left: 205.7, right: 0, top: 54.6, height: 0.8, background: '#cac9ce' } }),
            Img('ad-1.png', 16.8, 73.2, 174.5, 141), Img('ad-2.png', 199.6, 73.2, 174.5, 141), Img('ad-3.png', 382.9, 73.2, 28.6, 141),
            h('i', { className: 'a', style: { left: 0, right: 0, top: 229.4, height: 1.5, background: '#f5f5f5' } }),
            h('button', { className: 'rp-chip', style: { left: 18.3, width: 146.3, paddingLeft: 46.5 }, onClick: () => set({ sheet: 'filter' }) }, h('img', { src: A + 'ic-filter.png', alt: '', style: { position: 'absolute', left: 14.5, top: 7.4, width: 21.3, height: 19.8 } }), 'Sort & Filter'),
            h('button', { className: 'rp-chip', style: { left: 174.5, width: 63.2, justifyContent: 'center' } }, 'Toilet'),
            h('button', { className: 'rp-chip', style: { left: 247.6, width: 126.5, paddingLeft: 45.7 } }, h('img', { src: A + 'ic-primo.png', alt: '', style: { position: 'absolute', left: 11.4, top: 4.4, width: 26.7, height: 25.1 } }), 'Primo Bus'),
            Img('chip-4.png', 382.5, 244.2, 29, 38.1),
            Img('chip-earlybuy.png', 17.5, 299.1, 176.4, 37.7),
            T(363.1, 16, { left: 18.7, fontSize: 12 }, h('span', { className: 'rp-ailabel' }, 'AI Smart filter')),
            h('div', { className: 'rp-ai' }, h('div', null,
              Img('ic-sparkle.png', 16, 12, 29, 27.4),
              h('input', { value: q, onChange: (e) => setQ(e.target.value), placeholder: 'Search ‘' + typed + '|', 'aria-label': 'AI Smart filter' }),
              Img('ic-mic.png', 325.3, 12.7, 22.1, 26.7)))),
          /* KSRTC operator card */
          Img('card-stack.png', 18.3, 605, 374.8, 22.4),
          h('div', { className: 'rp-card', style: { top: 458.3, height: 149.7 } },
            h('div', { className: 'rp-tag', style: { left: 18.3, top: 18.3, height: 27.8, padding: '0 9.1px', borderRadius: 8, background: '#f6e8df' } }, 'Get ', h('b', { style: { margin: '0 3px' } }, '10%'), ' Discount on ', h('b', { style: { marginLeft: 3 } }, 'Return Trip booking')),
            Img('lg-ksrtc.png', 16.7, 57.1, 48.8, 49.9),
            T(74.3, 22, { left: 78.1, fontWeight: 700, fontSize: 16 }, 'KSRTC Karnataka'),
            Img('ksrtc-kn.png', 76.9, 84.2, 160.8, 21.7),
            Img('ic-chev-pink.png', 327.6, 80.8, 30.9, 30.5),
            T(124.2, 16, { left: 78.1, fontSize: 12 }, '19 Buses starting from ', h('b', null, '₹560'))),
          tuples)),
      h('button', { className: 'rp-fab', onClick: () => set({ sheet: 'ray' }) }, h('img', { src: A + 'ic-sparkle-w.png', alt: '' }), 'Ask Ray'),
      cs && h(ComfortSheet, { close: () => setCs(false) }),
      s.sheet === 'date' && h(window.SEARCH.DateSheet, { s, set, nested: true }),
      h('i', { className: 'pd-gesture', style: { zIndex: 9 } }));
  }

  window.SRP = { Srp };
})();
