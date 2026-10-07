/* Payment, rebuilt from production screenshots 31-34. Native 411.43 dp space. */
(function () {
  const h = React.createElement;
  const { useState, useRef, useEffect } = React;
  const A = 'assets/pay/';
  const T = (c, lh, style, ...kids) => { const { key, ...st } = style; return h('p', { key, className: 'a', style: Object.assign({ top: c - lh / 2, lineHeight: lh + 'px' }, st) }, ...kids); };
  const Img = (src, l, t, w, ht, extra) => { const { key, ...ex } = extra || {}; return h('img', { key, className: 'a', src: A + src, alt: '', style: Object.assign({ left: l, top: t, width: w, height: ht }, ex) }); };
  const rs = (n) => '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  /* fare for the seats in the funnel: production shows base 1500, 10% exclusive, 5% GST on the discounted fare */
  function fare(s) {
    const PRICE = (window.SEATS && window.SEATS.PRICE) || {};
    const ids = s.seats && s.seats.length ? s.seats : ['L1'];
    const paid = ids.reduce((a, id) => a + (PRICE[id] || 1350), 0);
    const base = Math.round(paid / 0.9 / 10) * 10;
    const off = base - paid;
    const gst = paid * 0.05;
    return { n: ids.length, ids, base, off, gst, total: paid + gst };
  }

  const Radio = ({ on, c }) => h('i', { className: 'py-radio' + (on ? ' py-radio--on' : ''), style: { top: c - 11.4 } });

  /* ---------- Bus booking details sheet ---------- */
  const NOTES = [
    ['Cancellation charges are computed on a per seat basis.', 'Above cancellation fare is calculated based on seat fare of ₹', '538'],
    ['Cancellation charges are calculated based on service start', 'date + time at :08-10-2026 22:20'],
    ['Ticket cannot be cancelled after scheduled bus departure', 'time from the first boarding point'],
    ['Note: Cancellation charges mentioned above are excluding', 'GST'],
    ['For group bookings individual seats can be cancelled.'],
  ];
  const NOTE_TOP = [634.6, 698.4, 745.4, 792.7, 840.1];
  const POLICY = [
    ['Up to 12h before departure', 'Until 08 Oct, 10:20', '90%'],
    ['8h before departure', '08 Oct, 10:20 - 08 Oct, 14:20', '85%'],
    ['4h before departure', '08 Oct, 14:20 - 08 Oct, 18:20', '50%'],
    ['Less than 4h before departure', '08 Oct, 18:20 - 08 Oct, 22:20', '0%'],
  ];
  const TABS = [['trip', 'Trip info', 0], ['cancel', 'Cancellation policy', 226.9], ['pax', 'Passenger info', 876.1], ['fare', 'Fare breakup', 1541.3]];

  function MiniDeck({ top, upper, sel }) {
    const kids = [];
    const sl = (k, x, y, on) => kids.push(h('i', { key: k, className: on ? 'on' : '', style: { left: x, top: y, width: 42.8, height: 21 } }));
    for (let i = 0; i < 6; i++) sl('a' + i, 13.6 + i * 54.9, 10, !upper && sel.has(6 - i));
    if (upper) for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) sl('u' + r + i, 13.6 + i * 54.9, r ? 92 : 64.7, false);
    else for (let r = 0; r < 2; r++) for (let i = 0; i < 12; i++) kids.push(h('i', { key: 's' + r + i, style: { left: 10.4 + i * 27.4, top: r ? 92.9 : 65.6, width: 21, height: 20.1, borderRadius: '4.5px 6px 6px 4.5px' } }));
    return h('div', { className: 'bk-deck', style: { top, height: upper ? 126.2 : 125.3 } }, kids,
      h('small', { style: { left: 337.5, top: 23.4 } }, upper ? 'Upper deck' : 'Lower deck'),
      !upper && h('img', { className: 'a', src: A + 'steer.png', alt: '', style: { left: 341.7, top: 89.7, width: 28.2, height: 29.2 } }));
  }

  function BookingSheet({ s, f, tab, close }) {
    const body = useRef(null);
    const [on, setOn] = useState(tab || 'trip');
    useEffect(() => { const t = TABS.find((x) => x[0] === (tab || 'trip')); body.current.scrollTop = t[2]; }, []);
    const spy = () => { const y = body.current.scrollTop + 4; let k = 'trip'; TABS.forEach((t) => { if (y >= t[2]) k = t[0]; }); if (body.current.scrollTop + body.current.clientHeight >= body.current.scrollHeight - 2) k = 'fare'; setOn(k); };
    const pax = (s.paxD && s.paxD[0] && s.paxD[0].name) ? s.paxD : [{ name: 'gok', age: '36', g: 'Male' }];
    const sel = new Set(f.ids.map((id) => (id[0] === 'L' ? +id.slice(1) || 1 : 0)));
    const bp = (s.bp && s.bp.time) || '21:45', dp = (s.dp && s.dp.time) || '05:55';
    const B = 'bk-band';
    return h('div', null,
      h('div', { className: 'bk-scrim', onClick: close }),
      h('div', { className: 'bk-sheet' },
        T(46.5, 28, { left: 18.7, fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' }, 'Bus booking details'),
        h('button', { 'aria-label': 'Close', onClick: close, style: { position: 'absolute', left: 359, top: 26, width: 40, height: 40 } },
          h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', style: { position: 'absolute', left: 11, top: 11 } }, h('path', { d: 'M1.5 1.5l15 15M16.5 1.5l-15 15', stroke: '#1d1d1d', strokeWidth: 2.2, strokeLinecap: 'round' }))),
        h('div', { className: 'bk-tabs' }, TABS.map(([k, t, y]) => h('button', { key: k, className: on === k ? 'on' : '', onClick: () => body.current.scrollTo({ top: y, behavior: 'smooth' }) }, t))),
        h('div', { className: 'bk-body', ref: body, onScroll: spy },
          h('div', { style: { position: 'relative', height: 1845.2 } },
            /* trip info */
            T(30.1, 22, { left: 21, fontWeight: 700, fontSize: 16 }, 'SRI SAI TRAVELS'),
            T(51.9, 20, { left: 21, fontSize: 14, color: '#6c6c6c' }, 'A/C Seater / Sleeper (2+1)'),
            T(92, 22, { right: 337.6, fontWeight: 700, fontSize: 16 }, bp),
            T(111.6, 16, { right: 337.6, fontSize: 12 }, '08 Oct'),
            T(133.9, 16, { right: 337.6, fontSize: 12, color: '#6c6c6c' }, '8h 10m'),
            T(178.6, 22, { right: 337.6, fontWeight: 700, fontSize: 16 }, dp),
            T(198.2, 16, { right: 337.6, fontSize: 12 }, '09 Oct'),
            h('i', { className: 'a', style: { left: 93.9, top: 94.8, width: 8.7, height: 86.5, borderRadius: 5, background: '#e0e0e0' } }),
            h('i', { className: 'a', style: { left: 93.8, top: 89.6, width: 8.6, height: 8.6, borderRadius: '50%', background: '#4b4b4b' } }),
            h('i', { className: 'a', style: { left: 93.8, top: 176.2, width: 8.6, height: 8.6, borderRadius: '50%', background: '#4b4b4b' } }),
            T(92, 22, { left: 121.2, fontWeight: 700, fontSize: 16 }, (s.bpN || 'Kalasipalayam') + ', Bengaluru'),
            T(178.6, 22, { left: 121.2, fontWeight: 700, fontSize: 16 }, 'Poonamallee, Chennai'),
            /* cancellation */
            h('i', { className: B, style: { top: 226.9 } }),
            T(268.8, 28, { left: 18.7, fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' }, 'Cancellation policy'),
            h('div', { className: 'bk-tbl', style: { top: 306.2 } },
              h('div', null, T(23.7, 20, { left: 13.6, fontWeight: 700, fontSize: 14 }, 'Time window'), T(23.7, 20, { left: 277.4, fontWeight: 700, fontSize: 14 }, 'Refund')),
              POLICY.map((p, i) => h('div', { key: i, style: i ? null : { background: '#e4ecf9' } },
                T(25.5, 20, { left: 13.6, fontWeight: 700, fontSize: 14 }, p[0]),
                T(43.7, 16, { left: 13.6, fontSize: 12, color: '#6c6c6c' }, p[1]),
                T(33.3, 20, { left: 277.4, fontWeight: 700, fontSize: 14 }, p[2])))),
            NOTES.map((n, i) => h('p', { key: i, className: 'bk-note', style: { top: NOTE_TOP[i] - 8.4 } }, n.map((l, k) => h('span', { key: k, style: { display: 'block', whiteSpace: 'nowrap' } }, l)))),
            /* passengers */
            h('i', { className: B, style: { top: 876.1 } }),
            T(913.9, 28, { left: 18.7, fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' }, 'Passengers'),
            T(938.1, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, f.n + (f.n > 1 ? ' seats' : ' seat')),
            pax.map((p, i) => [
              T(983.2 + i * 64, 22, { key: 'n' + i, left: 18.7, fontSize: 16 }, p.name),
              T(1004.6 + i * 64, 20, { key: 'g' + i, left: 18.7, fontSize: 14, color: '#6c6c6c' }, ({ M: 'Male', F: 'Female' }[p.g] || p.g || 'Male') + ', ' + (p.age || '36') + ' years'),
              h('b', { key: 'p' + i, className: 'a', style: { left: 347.6, top: 979.5 + i * 64, width: 45.1, height: 27.4, borderRadius: 999, background: '#e4ecf9', color: '#0b3fcf', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' } }, f.ids[i] || 'L1')]),
            h(MiniDeck, { top: 1078, sel }), h(MiniDeck, { top: 1222.4, upper: true, sel }),
            h('i', { className: B, style: { top: 1403.2 } }),
            T(1441, 28, { left: 18.7, fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' }, 'Passenger contact details'),
            T(1465.7, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, 'We’ll send ticket updates here'),
            T(1510.3, 22, { left: 18.7, fontSize: 16 }, '91' + (s.phone || '9876543210')),
            /* fare */
            h('i', { className: B, style: { top: 1541.3 } }),
            T(1578.2, 28, { left: 18.7, fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' }, 'Price breakup'),
            T(1603.7, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, f.n + (f.n > 1 ? ' seats' : ' seat')),
            T(1650.2, 22, { left: 18.7, fontSize: 16 }, 'Base Fare'), T(1650.2, 22, { right: 19.4, fontSize: 16, fontWeight: 700 }, rs(f.base)),
            T(1692.1, 22, { left: 18.7, fontSize: 16 }, 'GST'), T(1692.1, 22, { right: 19.4, fontSize: 16, fontWeight: 700 }, rs(f.gst)),
            T(1735.1, 22, { left: 18.7, fontSize: 16, color: '#008631' }, 'Exclusive'), T(1735.1, 22, { right: 19.4, fontSize: 16, fontWeight: 700, color: '#008631' }, '-' + rs(f.off)),
            h('i', { className: 'a', style: { left: 18.7, right: 18.7, top: 1766, height: 1, background: '#e6e6e6' } }),
            T(1802.2, 28, { left: 18.7, fontSize: 22 }, 'Total'), T(1802.2, 28, { right: 19.4, fontSize: 22, fontWeight: 700, letterSpacing: '-.3px' }, rs(f.total))))));
  }

  /* ---------- Payment page ---------- */
  function Payment({ s, set, go }) {
    const f = fare(s);
    const [m, setM] = useState(null);
    const [sheet, setSheet] = useState(null);
    const [code, setCode] = useState('');
    const [sec, setSec] = useState(468);
    useEffect(() => { const t = setInterval(() => setSec((x) => Math.max(0, x - 1)), 1000); return () => clearInterval(t); }, []);
    const mm = String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
    const payBtn = (c) => h('button', { className: 'py-paybtn', style: { top: c }, onClick: () => go('ticket') }, 'Pay ' + rs(f.total));
    const gp = m === 'gpay', up = gp ? 72.9 : 0;
    const row = (k, c, title, sub, ht) => h('button', { className: 'py-row', style: { top: c - ht / 2, height: ht }, onClick: () => setM(k) },
      T(sub ? ht / 2 - 11 : ht / 2, 22, { left: 73.3, fontSize: 16 }, title),
      sub && T(ht / 2 + 10.9, 20, { left: 73.3, fontSize: 14, color: '#6c6c6c' }, sub));
    const chev = (c) => Img('ic-right.png', 335.6, c - 9.15, 13.7, 18.3);

    return h('div', { className: 'pd' },
      h('img', { className: 'pd-status', src: 'assets/cust/statusbar.png', alt: '', style: { mixBlendMode: 'normal', zIndex: 7 } }),
      h('div', { className: 'sl-bar', style: { height: 119.4 } },
        h('button', { 'aria-label': 'Back', onClick: () => go('custinfo'), style: { position: 'absolute', left: 12, top: 62, width: 40, height: 40 } }, h('img', { src: 'assets/seat/ic-back.png', alt: '', style: { position: 'absolute', left: 9.7, top: 10.8, width: 20.2, height: 19.4 } })),
        T(72, 22, { left: 64.2, fontWeight: 700, fontSize: 16 }, 'Pay ' + rs(f.total)),
        h('button', { className: 'a', onClick: () => setSheet('fare'), style: { left: 64.2, top: 83.9, height: 20, lineHeight: '20px', fontSize: 12, color: '#5352f8', textDecoration: 'underline', textUnderlineOffset: 2 } }, 'Fare breakup'),
        h('div', { className: 'py-timer' }, mm)),
      h('div', { className: 'py-scroll' },
        h('div', { className: 'py-head' },
          T(29.6, 20, { left: 18.7, fontSize: 14 }, ((s.bp && s.bp.time) || '21:45') + ' · Thu, 08 Oct'),
          T(50.1, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c' }, s.bpN || 'Kalasipalayam'),
          T(29.6, 20, { right: 19.1, fontSize: 14, textAlign: 'right' }, ((s.dp && s.dp.time) || '05:55') + ' · Fri, 09 Oct'),
          T(50.1, 20, { right: 19.1, fontSize: 14, color: '#6c6c6c', textAlign: 'right' }, 'Poonamallee'),
          Img('ic-arrow.png', 193.2, 30, 25.5, 19.2),
          h('div', { className: 'a', style: { left: 18.7, top: 74.2, width: 72, height: 26.9, borderRadius: 10, background: '#e5ebf9' } }),
          Img('ic-person.png', 26.3, 79.1, 15.6, 16.8, { mixBlendMode: 'multiply' }),
          T(87.4, 16, { left: 47.8, fontSize: 12 }, f.n + (f.n > 1 ? ' seats' : ' seat')),
          h('button', { className: 'a py-link', onClick: () => setSheet('trip'), style: { right: 28.2, top: 77.9, lineHeight: '20px', fontSize: 14 } }, 'Booking details'),
          h('div', { className: 'py-chips' },
            h('button', { onClick: () => setSheet('trip') }, h('img', { src: A + 'ic-bus.png', alt: '', style: { width: 21, height: 25.5 } }), 'Trip info'),
            h('button', { onClick: () => setSheet('cancel') }, h('img', { src: A + 'ic-clip.png', alt: '', style: { width: 21.7, height: 26.3 } }), 'Cancellation policy'),
            h('button', { onClick: () => setSheet('pax') }, h('img', { src: A + 'ic-pax.png', alt: '', style: { width: 21.7, height: 22.9 } }), 'Passenger info'))),
        h('div', { className: 'py-deal' }, 'Exclusive deal applied · ', h('b', { style: { marginLeft: 4 } }, inrShort(f.off) + ' Saved')),
        h('div', { className: 'py-trust' },
          [['trust-1.png', 18.7, 62, 'Secure', 'Payment'], ['trust-2.png', 143.6, 186.8, 'Superfast', 'Refunds'], ['trust-3.png', 268.2, 312, 'Trusted by', '40Mn+ users']].map(([src, l, tx, a, b]) => [
            Img(src, l, 18.7, 36.2, 36.6, { key: src }),
            T(28.3, 16.8, { key: src + 'a', left: tx, fontSize: 12 }, a), T(45.1, 16.8, { key: src + 'b', left: tx, fontSize: 12 }, b)])),
        /* coupon */
        h('div', { className: 'py-card', style: { height: 154.4 } },
          Img('ic-coupon.png', 17.9, 21, 28.2, 20.6),
          T(30, 22, { left: 64.2, fontSize: 16 }, 'Have a coupon code?'),
          Img('ic-up.png', 334.1, 23.7, 17.1, 15.6),
          h('div', { className: 'py-field' },
            h('input', { placeholder: 'Coupon code', value: code, onChange: (e) => setCode(e.target.value.toUpperCase()) }),
            h('button', { className: 'py-apply' + (code ? ' py-apply--on' : ''), style: { top: 9.2 } }, 'Apply'))),
        /* UPI */
        h('div', { className: 'py-card', style: { height: 289.4 + up } },
          h('h3', { style: { top: 18.6 } }, 'UPI'),
          row('gpay', 95.7, 'Google Pay', null, 74), Img('lg-gpay.png', 22.4, 82.1, 27, 27.4), h(Radio, { on: gp, c: 95.7 }),
          gp && payBtn(132.6),
          h('i', { className: 'py-div', style: { top: 133 + up } }),
          row('upiid', 169.9 + up, 'Enter UPI ID', null, 72), Img('lg-bhim.png', 25.1, 154.9 + up, 21.7, 29.3), h(Radio, { on: m === 'upiid', c: 169.9 + up }),
          h('i', { className: 'py-div', style: { top: 206.8 + up } }),
          row('upiapp', 244.7 + up, 'Pay by any UPI App', null, 74), Img('lg-upiapp.png', 20.5, 228 + up, 30.9, 30.9), chev(244.7 + up)),
        h('div', { className: 'py-card', style: { height: 148.1 } },
          h('h3', { style: { top: 19.1 } }, 'Pay With Link'),
          row('link', 100.3, 'Share payment link', 'Ask someone else to pay for you', 66), Img('ic-share.png', 22.4, 84.5, 27, 29.7), h(Radio, { on: m === 'link', c: 98.9 })),
        h('div', { className: 'py-card', style: { height: 184.5 } },
          h('h3', { style: { top: 19.1 } }, 'Credit/Debit Card'),
          row('card', 100.3, 'Add credit / debit card', 'Visa, Master Card and more', 66), Img('ic-card.png', 23.2, 106.3, 26.3, 22.5), Img('lg-cards.png', 71.6, 128.8, 126.5, 21), chev(117.1)),
        h('div', { className: 'py-card', style: { height: 185 } },
          h('h3', { style: { top: 19.1 } }, 'Net banking'),
          row('nb', 100.3, 'Net banking', 'All major banks available', 66), Img('ic-bank.png', 20.5, 102, 30.9, 31.6), Img('lg-banks.png', 73.9, 125.2, 154.3, 29.3), chev(117.6)),
        h('div', { className: 'py-card', style: { height: 196.2, marginBottom: 38.5 } },
          h('h3', { style: { top: 20.2 } }, 'Wallets'),
          h('button', { className: 'py-row', style: { top: 70, height: 110 }, onClick: () => setM('amazon') },
            T(23, 22, { left: 73.3, fontSize: 16 }, 'Amazon Pay Balance'),
            h('p', { className: 'a', style: { left: 73.3, top: 34.8, fontSize: 14, lineHeight: '21.3px', color: '#008631' } }, h('span', { style: { display: 'block' } }, 'Get up to ₹75 cashback on booking'), h('span', { style: { display: 'block' } }, 'of ₹899 and above. Assured'), h('span', { style: { display: 'block' } }, 'cashback of ₹15. Offer valid once.'))),
          Img('lg-amazon.png', 20.9, 83.4, 30.5, 30.5), h(Radio, { on: m === 'amazon', c: 94.9 }))),
      /* non-UPI choices pay from a bottom bar (not captured in screenshots; kept minimal) */
      m && m !== 'gpay' && h('div', { style: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 92, background: '#fff', borderTop: '1px solid #e6e6e6', zIndex: 8 } }, h('button', { className: 'pd-btn', style: { top: 14 }, onClick: () => go('ticket') }, 'Pay ' + rs(f.total))),
      sheet && h(BookingSheet, { s, f, tab: sheet, close: () => setSheet(null) }),
      h('i', { className: 'pd-gesture' }));
  }
  const inrShort = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

  window.PAY = { Payment, fare, rs };
})();
