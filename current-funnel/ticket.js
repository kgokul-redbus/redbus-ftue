/* Ticket details, rebuilt from production screenshots 35-36. Native 411.43 dp space.
   Layout and copy follow production. Trip data comes from the funnel; add ?refdata to the URL to show the
   screenshot's own booking (Kolar → Hisar) for overlay checks. */
(function () {
  const h = React.createElement;
  const { useState, useRef } = React;
  const A = 'assets/ticket/';
  const T = (c, lh, style, ...kids) => { const { key, ...st } = style; return h('p', { key, className: 'a', style: Object.assign({ top: c - lh / 2, lineHeight: lh + 'px', whiteSpace: 'nowrap' }, st) }, ...kids); };
  const Img = (src, l, t, w, ht, extra) => { const { key, ...ex } = extra || {}; return h('img', { key, className: 'a', src: A + src, alt: '', style: Object.assign({ left: l, top: t, width: w, height: ht }, ex) }); };

  const REFDATA = { op: 'Virtual Travels', type: 'AC Seater (2+2)', from: 'Kolar (Karnataka)', fromPt: 'Kolar', dep: '23:57', depD: 'Thu, 08 Oct', to: 'Hisar (Rajasthan)', toPt: 'Hisar bus stop', arr: '15:30', arrD: 'Fri, 09 Oct', dur: '15h 33 min', name: 'Gokul', g: 'M', age: '35', seats: ['14'], fare: '₹42.00', phone: '+919876543210', bpPh: '23456787665', reward: ['Unlock to get free ticket with Imaginary', 'Travels - Test'], live: 'Imaginary Travels' };
  function data(s) {
    if (/refdata/.test(location.search)) return REFDATA;
    const p = (s.paxD && s.paxD[0] && s.paxD[0].name) ? s.paxD[0] : { name: 'Gokul', g: 'M', age: '35' };
    const f = window.PAY ? window.PAY.fare(s) : null;
    return { op: 'SRI SAI TRAVELS', type: 'A/C Seater / Sleeper (2+1)', from: 'Bengaluru (Karnataka)', fromPt: s.bpN || 'Kalasipalayam', dep: (s.bp && s.bp.time) || '21:45', depD: 'Thu, 08 Oct', to: 'Chennai (Tamil Nadu)', toPt: s.dpN || 'Panimalar College', arr: (s.dp && s.dp.time) || '05:55', arrD: 'Fri, 09 Oct', dur: '8h 10m', name: p.name, g: ({ Male: 'M', Female: 'F' }[p.g] || p.g || 'M'), age: p.age || '35', seats: s.seats && s.seats.length ? s.seats : ['L1'], fare: f ? window.PAY.rs(f.total) : '₹1,417.50', phone: '+91' + (s.phone || '9876543210'), bpPh: '23456787665', reward: ['Unlock to get free ticket with SRI SAI', 'TRAVELS'], live: 'SRI SAI TRAVELS' };
  }

  /* origin → destination block on the purple gradient; y is relative to the block, x to the card */
  function Journey({ d, top }) {
    const y = (v) => top + v;
    const W = { color: '#fff' };
    return [
      h('i', { key: 'r', className: 'a', style: { left: 24.6, top: y(39.2), width: 1.2, height: 104, background: 'rgba(255,255,255,.85)' } }),
      Img('dot-from.png', 16.5, y(15.6), 17.1, 16.8, { key: 'd1', borderRadius: '50%' }), Img('dot-to.png', 16.5, y(134.3), 17.1, 17.9, { key: 'd2', borderRadius: '50%' }),
      T(y(28.7), 20, Object.assign({ key: 'a', left: 41.5, fontWeight: 700, fontSize: 14 }, W), d.from),
      T(y(51.4), 16, Object.assign({ key: 'b', left: 41.5, fontSize: 12 }, W), d.fromPt),
      T(y(33.2), 30, Object.assign({ key: 'c', right: 18.2, fontWeight: 700, fontSize: 22, letterSpacing: '-.42px' }, W), d.dep),
      T(y(55.1), 16, Object.assign({ key: 'e', right: 18.2, fontSize: 12 }, W), d.depD),
      h('i', { key: 'l1', className: 'a', style: { left: 52.4, top: y(100.2), width: 91.1, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,0),#fff)' } }),
      Img('ic-bus-w.png', 153.2, y(90.8), 25.5, 18.7, { key: 'bus' }),
      T(y(100.2), 16, Object.assign({ key: 'du', left: 184.5, fontSize: 12 }, W), d.dur),
      h('i', { key: 'l2', className: 'a', style: { left: 254.2, top: y(100.2), width: 92.1, height: 1, background: 'linear-gradient(90deg,#fff,rgba(255,255,255,0))' } }),
      T(y(147.1), 20, Object.assign({ key: 'f', left: 41.5, fontWeight: 700, fontSize: 14 }, W), d.to),
      T(y(169.9), 16, Object.assign({ key: 'g', left: 41.5, fontSize: 12 }, W), d.toPt),
      T(y(151.7), 30, Object.assign({ key: 'h', right: 18.2, fontWeight: 700, fontSize: 22, letterSpacing: '-.42px' }, W), d.arr),
      T(y(173.5), 16, Object.assign({ key: 'i', right: 18.2, fontSize: 12 }, W), d.arrD)];
  }

  const Notch = (cy, bg) => [h('i', { key: 'n1', className: 'tk-notch', style: { left: -17, top: cy - 17, background: bg } }), h('i', { key: 'n2', className: 'tk-notch', style: { right: -17, top: cy - 17, background: bg } })];
  const Chev = (c) => Img('ic-chev.png', 336.1, c - 8.2, 13.7, 16.4);

  function TicketSheet({ d, close }) {
    const seat = d.seats.join(', ');
    return [
      h('div', { key: 's', className: 'tk-scrim', onClick: close }),
      h('button', { key: 'x', 'aria-label': 'Close', onClick: close, style: { position: 'absolute', left: 181.3, top: 109.7, width: 48.8, height: 49.2, zIndex: 32 } }, h('img', { src: A + 'sh-close.png', alt: '', style: { width: '100%', height: '100%', display: 'block' } })),
      h('div', { key: 'c', className: 'tk-card', style: { top: 176.8, height: 532.6, overflow: 'hidden', zIndex: 31, boxShadow: 'none' } },
        h('div', { className: 'tk-grad', style: { top: 0, height: 195.9 } }),
        h(Journey, { d, top: 0 }),
        T(235.5, 22, { left: 0, right: 0, textAlign: 'center', fontWeight: 700, fontSize: 16 }, d.op),
        T(256.9, 22, { left: 0, right: 0, textAlign: 'center', fontSize: 14, color: '#6c6c6c' }, d.type + ' · ' + d.seats.length + (d.seats.length > 1 ? ' Seats' : ' Seat')),
        h('i', { className: 'tk-dash', style: { left: 18.2, right: 18.2, top: 285.6 } }),
        T(317.5, 22, { left: 18.7, fontSize: 16 }, d.name + ' ', h('span', { style: { color: '#6c6c6c' } }, '(' + d.g + ')')),
        T(343, 22, { left: 18.7, fontSize: 16, color: '#6c6c6c' }, '(' + d.age + ' yrs)'),
        h('b', { className: 'tk-pill', style: { right: 18.2, top: 318.9, minWidth: 32.3, height: 21, padding: '0 9px' } }, seat),
        Notch(377.2, '#333'),
        h('i', { className: 'tk-dash', style: { left: 36.5, right: 37.3, top: 377.2 } }),
        T(420, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, 'Ticket #'),
        Img('sh-copy.png', 222.2, 409.1, 25.5, 27.8),
        T(423.2, 20, { right: 18.7, fontSize: 14 }, 'TVB373017005'),
        T(451.9, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, 'PNR #'),
        T(451.9, 20, { right: 18.7, fontSize: 14 }, 'BBTMM5R5'),
        T(492.9, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, 'Fare'),
        T(494.3, 22, { right: 18.7, fontSize: 16, fontWeight: 700 }, d.fare)),
      h('button', { key: 'b', className: 'pd-btn', style: { left: 18.2, top: 820, width: 374.5, height: 53.8, zIndex: 31, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 13 } },
        h('img', { src: A + 'sh-share.png', alt: '', style: { width: 25.9, height: 26 } }), 'Share your ticket')];
  }

  const POLICIES = [
    ['Luggage policy', 108, ['8 pieces of luggage will be accepted free of', 'charge per passenger. Excess items will be', ['chargeable', '... read more']]],
    ['Route Policy', 228.8, ['Bus will pass through Hosur Road']],
    ['Liquor Policy', 308.5, ['Carrying or consuming liquor inside the bus', 'is prohibited. Bus operator reserves the', 'right to deboard drunk passengers.']],
    ['Pick up time policy', 429.7, ['Bus operator is not obligated to wait beyond', 'the scheduled departure time of the bus. No', ['refund request will be entertain', '... read more']]],
  ];

  function Ticket({ s, go }) {
    const d = data(s);
    const [sheet, setSheet] = useState(false);
    const [tab, setTab] = useState('ticket');
    const sc = useRef(null);
    const TABS = [['ticket', 'Ticket details', 18.7, 0], ['live', 'Live tracking', 147.2, 1146.3], ['hotels', 'Hotels', 269.3, null], ['safety', 'Safety', 349.4, 1528.6]];
    const jump = (t) => { setTab(t[0]); if (t[3] != null) sc.current.scrollTo({ top: t[3], behavior: 'smooth' }); };
    const spy = () => { const y = sc.current.scrollTop + 4; setTab(y >= 1528.6 ? 'safety' : y >= 1146.3 ? 'live' : 'ticket'); };
    const lav = '#f2f1f7';
    return h('div', { className: 'pd' },
      h('img', { className: 'pd-status', src: 'assets/cust/statusbar.png', alt: '', style: { mixBlendMode: 'normal', zIndex: 7 } }),
      h('div', { className: 'sl-bar', style: { height: 119.4 } },
        h('button', { 'aria-label': 'Back', onClick: () => go('home'), style: { position: 'absolute', left: 12, top: 62, width: 40, height: 40 } }, h('img', { src: 'assets/seat/ic-back.png', alt: '', style: { position: 'absolute', left: 9.7, top: 10.8, width: 20.2, height: 19.4 } })),
        T(72, 22, { left: 64.7, fontWeight: 700, fontSize: 16 }, 'Ticket details'),
        T(93.4, 20, { left: 64.7, fontSize: 14 }, 'Ticket #TVB373017005'),
        Img('ic-help.png', 325, 69.7, 26.7, 25.5), Img('ic-share.png', 367.2, 69, 24.8, 26.3)),
      h('div', { className: 'tk-tabs' }, TABS.map((t) => h('button', { key: t[0], className: tab === t[0] ? 'on' : '', style: { left: t[2] }, onClick: () => jump(t) }, t[1]))),
      h('div', { className: 'tk-scroll', ref: sc, onScroll: spy },
        h('div', { style: { position: 'relative', height: 4418 } },
          /* backgrounds */
          h('i', { className: 'a', style: { left: 0, right: 0, top: 1127.6, height: 2227.6, background: lav } }),
          h('i', { className: 'a', style: { left: 0, right: 0, top: 3659.1, bottom: 0, background: lav } }),
          /* tripReward */
          h('div', { className: 'tk-card', style: { top: 19.6, height: 158.6, background: 'linear-gradient(90deg,#fcf6da 0%,#fbeee6 50%,#f6e0f5 100%)' } },
            Img('tripreward.png', 17.2, 27.7, 110.5, 26.7),
            h('b', { className: 'a', style: { left: 277.5, top: 29.2, width: 78.8, height: 25.5, borderRadius: 8, background: '#c88500', color: '#fff', fontSize: 12, fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' } }, '3 days left'),
            Img('ic-chev-dark.png', 336.1, 71.5, 13.7, 16.4, { mixBlendMode: 'multiply' }),
            T(106.6, 23, { left: 18.7, fontWeight: 700, fontSize: 16 }, d.reward[0]),
            T(129.4, 23, { left: 18.7, fontWeight: 700, fontSize: 16 }, d.reward[1])),
          /* ticket card */
          h('div', { className: 'tk-card', style: { top: 206, height: 453.7, overflow: 'hidden' } },
            h('div', { className: 'tk-grad', style: { top: 0, height: 264.7 } }),
            h('button', { className: 'a', style: { left: 18.2, top: 19.1, width: 338.1, height: 54.2, borderRadius: 16, background: 'rgba(40,30,50,.32)' } }),
            Img('primo-sm.png', 34.8, 29.9, 57.1, 32, { pointerEvents: 'none' }),
            T(46, 20, { left: 95.2, fontSize: 14, color: '#fff', pointerEvents: 'none' }, 'Great choice - Safe & On-time'),
            Img('ic-chev-white.png', 321.2, 37.9, 11.8, 16.4, { pointerEvents: 'none' }),
            h(Journey, { d, top: 68.8 }),
            T(303.8, 22, { left: 18.7, fontWeight: 700, fontSize: 16 }, d.op),
            T(332.5, 20, { left: 18.7, fontSize: 14 }, d.name),
            h('b', { className: 'tk-pill', style: { right: 18.2, top: 322, minWidth: 32.3, height: 21, padding: '0 9px' } }, d.seats.join(', ')),
            Notch(372.6, '#e7e7e7'),
            h('i', { className: 'tk-dash', style: { left: 36.5, right: 37.3, top: 372.6 } }),
            h('button', { className: 'a', onClick: () => setSheet(true), style: { left: 90, top: 395, width: 220, height: 36 } }),
            Img('ic-expand.png', 98.4, 400.6, 16.4, 25.5, { pointerEvents: 'none' }),
            T(413.2, 24, { left: 132.1, fontWeight: 700, fontSize: 16, color: '#2e31e2', pointerEvents: 'none' }, h('span', { className: 'tk-ul' }, 'View Ticket Details'))),
          T(690.7, 24.6, { left: 0, right: 0, textAlign: 'center', fontSize: 14, color: '#6c6c6c' }, 'Bus number and tracking details will be shared on'),
          T(715.3, 24.6, { left: 0, right: 0, textAlign: 'center', fontSize: 14, color: '#6c6c6c' }, 'the day of journey on ', h('b', { style: { color: '#4b4b4b' } }, d.phone)),
          /* actions */
          h('div', { className: 'tk-card tk-card--line', style: { top: 756.3, height: 143.1 } },
            Img('ic-busedit.png', 17.2, 17.5, 29.3, 27), T(31, 22, { left: 64.3, fontWeight: 700, fontSize: 16 }, h('span', { className: 'tk-ul' }, 'Free bus change')), Chev(31),
            h('i', { className: 'tk-div', style: { top: 63.8 } }),
            Img('ic-cancel.png', 18.4, 89.5, 27, 28.2), T(93.9, 22, { left: 64.3, fontWeight: 700, fontSize: 16 }, h('span', { className: 'tk-ul' }, 'Cancel Booking')),
            T(115.3, 20, { left: 64.3, fontSize: 14, color: '#6c6c6c' }, 'Eligible for partial refund'), Chev(103.9)),
          h('div', { className: 'tk-card tk-card--line', style: { top: 927.6, height: 62.9 } },
            Img('ic-cal.png', 19.1, 19.2, 25.5, 25.9), T(32.4, 22, { left: 64.3, fontWeight: 700, fontSize: 16 }, h('span', { className: 'tk-ul' }, 'Add trip to calendar')), Img('ic-plus.png', 332.7, 23, 20.2, 19)),
          h('div', { className: 'tk-card', style: { top: 1018.8, height: 91.1, boxShadow: 'none', background: 'linear-gradient(90deg,#ffeaa6,#ffde93)' } },
            T(31.9, 20, { left: 18.7, fontSize: 14 }, 'Congratulations'), T(58.3, 22, { left: 18.7, fontWeight: 700, fontSize: 16 }, 'You won scratch cards'),
            Img('scratch.png', 282.4, 8.3, 75, 74.7)),
          /* live tracking */
          h('div', { className: 'tk-card', style: { top: 1146.3, height: 363.1 } },
            h('h3', { className: 'tk-h', style: { top: 19.7 } }, 'Live tracking'), h('i', { className: 'tk-div', style: { top: 66.1 } }),
            T(96.6, 22, { left: 18.7, fontWeight: 700, fontSize: 16 }, 'Tracking starts 1 hr before boarding time'),
            T(118.5, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, 'Check back shortly for updates'),
            T(148.1, 20, { left: 18.7, fontSize: 14 }, d.live),
            Img('live.png', 18.4, 176.5, 338.3, 169.1)),
          h('div', { className: 'tk-card', style: { top: 1528.6, height: 277.1 } },
            h('h3', { className: 'tk-h', style: { top: 21.5 } }, 'Safety tips'), Img('safety.png', 18.4, 69.6, 338.3, 189.3)),
          h('div', { className: 'tk-card', style: { top: 1824.4, height: 79.2 } },
            Img('ic-busdetails.png', 19.1, 26.7, 26.3, 25.9), T(30, 22, { left: 64.3, fontWeight: 700, fontSize: 16, color: '#1011df' }, h('span', { className: 'tk-ul' }, 'View Bus Details')),
            T(51.4, 20, { left: 64.3, fontSize: 14, color: '#6c6c6c' }, 'Travel policy, amenities, etc.'), Chev(39.1)),
          /* boarding point */
          h('div', { className: 'tk-card', style: { top: 1922.8, height: 312.5 } },
            h('h3', { className: 'tk-h', style: { top: 18.8 } }, 'Boarding point details'), h('i', { className: 'tk-div', style: { top: 65.1 } }),
            T(97, 22, { right: 18.7, fontSize: 14 }, 'Service no:', h('b', { style: { fontSize: 16 } }, '105325')),
            h('b', { className: 'a', style: { left: 18.7, top: 132.1, height: 25, padding: '0 9.1px', borderRadius: 8, background: '#dde0fe', fontSize: 12, lineHeight: '25px', whiteSpace: 'nowrap' } }, d.dep + ' · ' + d.depD),
            T(188.1, 22, { left: 18.7, fontWeight: 700, fontSize: 16 }, d.fromPt), T(209.1, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, d.bpPh),
            Img('ic-dir.png', 132.7, 260.2, 27.8, 27.8), T(274.2, 20, { left: 172.2, fontWeight: 700, fontSize: 14 }, h('span', { className: 'tk-ul' }, 'Directions'))),
          /* help */
          h('div', { className: 'tk-card', style: { top: 2254.4, height: 309.9 } },
            Img('agent.png', 154, 17.3, 66.7, 74.7),
            T(144.9, 28, { left: 0, right: 0, textAlign: 'center', fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' }, 'Need help with ticket details?'),
            T(206.4, 16, { left: 0, right: 0, textAlign: 'center', fontSize: 12, color: '#6c6c6c' }, '24×7 support · Quick resolution · Multilingual'),
            h('button', { className: 'a tk-soft', style: { left: 18.7, top: 237.9, width: 337.6, height: 44.6, gap: 14 } }, h('img', { src: A + 'ic-chat.png', alt: '', style: { width: 28.2, height: 25.9, mixBlendMode: 'multiply' } }), 'Chat With redBuddy')),
          /* policies */
          h('div', { className: 'tk-card', style: { top: 2583.8, height: 515.8 } },
            h('h3', { className: 'tk-h', style: { top: 16.6 } }, 'Travel Policies'), h('i', { className: 'tk-div', style: { top: 62.9 } }),
            POLICIES.map(([t, c, lines]) => [
              Img('ic-policy.png', 18.4, c - 11, 28.2, 25.5, { key: t + 'i' }),
              T(c, 22, { key: t, left: 64.3, fontWeight: 700, fontSize: 16 }, t),
              lines.map((l, i) => T(c + 21 + i * 20.5, 20.5, { key: t + i, left: 64.3, fontSize: 14, color: '#6c6c6c' }, Array.isArray(l) ? [l[0], h('b', { key: 'b', style: { color: '#4b4b4b' } }, l[1])] : l))])),
          h('div', { className: 'tk-card tk-card--line', style: { top: 3119.2, height: 207.7, overflow: 'hidden' } },
            Img('refer.png', 218.8, -1, 155.8, 207.6),
            T(27.7, 20.6, { left: 18.7, fontWeight: 700, fontSize: 14 }, 'Loving the redBus'), T(48.3, 20.6, { left: 18.7, fontWeight: 700, fontSize: 14 }, 'experience? Let your fri...'),
            T(66.5, 16.9, { left: 18.7, fontSize: 12, color: '#4b4b4b' }, 'Refer your friends and earn Rs'), T(83.4, 16.9, { left: 18.7, fontSize: 12, color: '#4b4b4b' }, '100 for every successful refe...'),
            h('button', { className: 'a tk-soft', style: { left: 18.7, top: 136.2, width: 105.2, height: 44.6 } }, 'Refer now')),
          /* popular videos */
          h('h3', { className: 'tk-h', style: { top: 3374.9 } }, 'Popular videos'),
          T(3388.9, 20, { right: 27.8, fontWeight: 700, fontSize: 14, color: '#1011df' }, h('span', { className: 'tk-ul' }, 'View More')),
          Img('vid-1.png', 18.3, 3429.8, 118.9, 211), Img('vid-2.png', 150.9, 3429.8, 118.9, 211),
          /* primo */
          h('div', { className: 'tk-card', style: { top: 3678.2, height: 182.2, background: '#103167', boxShadow: 'none' } },
            Img('primo-lg.png', 16.5, 16.8, 67.4, 34.7), Img('ic-down-white.png', 334.2, 24.4, 17.5, 15.2),
            T(75.2, 22, { left: 18.7, fontWeight: 700, fontSize: 16, color: '#fff' }, 'Safe Travel', h('span', { style: { margin: '0 3.6px' } }, ' · '), 'On-Time', h('span', { style: { margin: '0 3.6px' } }, ' · '), 'Comfortable'),
            T(107.1, 22, { left: 18.7, fontWeight: 700, fontSize: 16, color: '#fff' }, d.op),
            T(130.3, 22.8, { left: 18.7, fontSize: 16, color: '#fff' }, 'This is a best-in-class primo Bus. Enjoy top'),
            T(153.1, 22.8, { left: 18.7, fontSize: 16, color: '#fff' }, 'rated features')),
          Img('primo-video.png', 18.3, 3878.6, 374.9, 209.9),
          h('div', { className: 'tk-card', style: { top: 4106.9, height: 150.8 } },
            h('h3', { className: 'tk-h', style: { top: 19.3 } }, 'Rest stop details'), h('i', { className: 'tk-div', style: { top: 66.1 } }),
            h('div', { className: 'a', style: { left: 18.7, top: 84.7, width: 337.6, height: 47.9, borderRadius: 12, background: '#f9e9ea' } }),
            T(108.9, 20, { left: 32.8, fontSize: 14 }, 'This bus will not stop at any rest stops')),
          h('div', { className: 'tk-card', style: { top: 4276.4, height: 122.9 } },
            h('h3', { className: 'tk-h', style: { top: 22 } }, 'On-time Guarantee'), Img('shield.png', 296.1, 1.8, 55.6, 67.4),
            T(82.9, 22.9, { left: 18.7, fontSize: 14 }, 'Get 50% cashback, if your bus reaches the'),
            T(105.8, 22.9, { left: 18.7, fontSize: 14 }, 'dropping point more than 1 hour late')))),
      sheet && h(TicketSheet, { d, close: () => setSheet(false) }),
      h('i', { className: 'pd-gesture' }));
  }

  window.TICKET = { Ticket };
})();
