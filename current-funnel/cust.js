/* Customer (passenger) information, rebuilt from production screenshots 24-30. Native 411.43 dp space. */
(function () {
  const h = React.createElement;
  const { useState, useRef, Fragment } = React;
  const A = 'assets/cust/';
  const inr = (n) => '₹' + n.toLocaleString('en-IN');
  const T = (c, lh, style, ...kids) => h('p', { className: 'a', style: Object.assign({ top: c - lh / 2, lineHeight: lh + 'px' }, style) }, ...kids);
  const P = (style, ...kids) => h('p', { style }, ...kids);
  const STATES = ['Karnataka', 'Andhra Pradesh', 'Delhi', 'Kerala', 'Maharashtra', 'Rajasthan', 'Tamil Nadu', 'Telangana'];

  const Radio = ({ on, style }) => h('i', { className: 'ci-radio' + (on ? ' ci-radio--on' : ''), style });
  const Opt = ({ on, title, sub, h: ht, onClick, style }) => h('button', { className: 'ci-opt', style: Object.assign({ height: ht }, style), onClick },
    h('b', null, title), sub && h('span', null, sub), h(Radio, { on }));

  function RefundBox({ w, top, ht }) {
    const cx = w / 2, off = w * 0.2515;
    return h('div', { className: 'ci-box', style: { marginTop: top, height: ht } },
      T(17.3, 14, { left: 0, right: 0, textAlign: 'center', fontSize: 11 }, 'You’ll get ₹2,000 refund if bus gets cancelled'),
      h('div', { className: 'a', style: { left: cx - off - 60, width: 120, top: 32.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 } },
        h('img', { src: A + 'ic-bank.png', alt: '', style: { width: 23.2, height: 22.8 } }), h('b', { style: { fontSize: 22, lineHeight: '24px', letterSpacing: '-.3px' } }, '₹1500')),
      T(67.4, 16, { left: cx - off - 60, width: 120, textAlign: 'center', fontSize: 12, color: '#6c6c6c' }, 'Full Refund'),
      h('img', { className: 'a', src: A + 'ic-plus.png', alt: '', style: { left: cx - 9.7, top: 43.9, width: 19.4, height: 18.3 } }),
      h('div', { className: 'a', style: { left: cx + off - 60, width: 120, top: 32.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 } },
        h('img', { src: A + 'ic-wallet.png', alt: '', style: { width: 21.4, height: 20.2 } }), h('b', { style: { fontSize: 22, lineHeight: '24px', letterSpacing: '-.3px' } }, '₹500')),
      T(67.4, 16, { left: cx + off - 60, width: 120, textAlign: 'center', fontSize: 12, color: '#6c6c6c' }, 'Cashback'));
  }

  function CustInfo({ s, set, go }) {
    const seatIds = (s.seats && s.seats.length ? s.seats : ['L1']);
    const PRICE = (window.SEATS && window.SEATS.PRICE) || {};
    const base = seatIds.reduce((a, id) => a + (PRICE[id] || 0), 0) || 1350;
    const [f, setF] = useState({ phone: '', email: '', state: 'Karnataka', wa: true, pax: seatIds.map(() => ({ name: '', age: '', g: '' })), fc: null, tg: null, ti: null, gst: false });
    const [err, setErr] = useState(null);
    const [sheet, setSheet] = useState(false);
    const scroll = useRef(null);
    const up = (p) => setF((x) => Object.assign({}, x, p));
    const upPax = (i, p) => setF((x) => Object.assign({}, x, { pax: x.pax.map((q, k) => (k === i ? Object.assign({}, q, p) : q)) }));
    const n = seatIds.length;
    const total = base + (f.fc === true ? 150 * n : 0) + (f.tg === true ? 24 * n : 0) + (f.ti === true ? 15 * n : 0);
    const strike = Math.round(base / 0.9 / 10) * 10 + (total - base);
    const validate = () => {
      const e = {};
      if (!/^[6-9]\d{9}$/.test(f.phone)) e.phone = 'Please enter valid phone number';
      f.pax.forEach((q, i) => {
        if (!/^[A-Za-z][A-Za-z .]*$/.test(q.name.trim())) e['name' + i] = 'Enter your name in English';
        if (!(+q.age >= 1 && +q.age <= 120)) e['age' + i] = 'Please enter valid Age';
        if (!q.g) e['g' + i] = true;
      });
      return e;
    };
    const pay = () => {
      const e = validate();
      if (Object.keys(e).length) { setErr(e); scroll.current.scrollTo({ top: e.phone ? 186 : 640, behavior: 'smooth' }); return; }
      setErr(null);
      if (f.tg === null) { setSheet(true); return; }
      go('payment', { paxD: f.pax, phone: f.phone });
    };
    const E = err || {};
    const bp = s.bp && s.bp.name ? s.bp : { name: 'Kalasipalayam', time: '21:45' };
    const dp = s.dp && s.dp.name ? s.dp : { name: 'Panimalar College', time: '05:55' };
    const deck = (id) => (id[0] === 'U' ? 'Upper deck' : 'Lower deck');

    return h('div', { className: 'pd' },
      h('img', { className: 'pd-status', src: A + 'statusbar.png', alt: '', style: { mixBlendMode: 'normal', zIndex: 7 } }),
      h('div', { className: 'sl-bar', style: { borderBottom: '1px solid #e6e6e6' } },
        h('button', { 'aria-label': 'Back', onClick: () => go('points'), style: { position: 'absolute', left: 12, top: 62, width: 40, height: 40 } }, h('img', { src: 'assets/seat/ic-back.png', alt: '', style: { position: 'absolute', left: 9.7, top: 10.8, width: 20.2, height: 19.4 } })),
        T(72, 22, { left: 64.2, fontWeight: 700, fontSize: 16 }, 'Passenger Information'),
        T(93.9, 20, { left: 64.2, fontSize: 14 }, 'Bengaluru → Chennai')),
      h('div', { className: 'ci-scroll', ref: scroll },
        /* trip summary */
        h('div', { className: 'ci-trip' },
          h('i', { className: 'a', style: { left: 18.2, width: 126.7, top: 27.2, height: 1, background: '#e0e0e0' } }),
          h('i', { className: 'a', style: { left: 265.6, width: 127.1, top: 27.2, height: 1, background: '#e0e0e0' } }),
          T(27.2, 16, { left: 0, right: 0, textAlign: 'center', fontSize: 12, color: '#6c6c6c', letterSpacing: '.2px' }, 'SRI SAI TRAVELS'),
          T(60, 20, { left: 18.7, fontSize: 14, fontWeight: 700 }, 'Thu, 8 Oct · ' + bp.time),
          T(81, 20, { left: 18.7, fontSize: 14 }, bp.name),
          T(60, 20, { right: 18.7, fontSize: 14, fontWeight: 700, textAlign: 'right' }, 'Fri, 9 Oct · ' + dp.time),
          T(81, 20, { right: 18.7, fontSize: 14, textAlign: 'right' }, dp.name),
          h('img', { className: 'a', src: A + 'ic-arrow.png', alt: '', style: { left: 197, top: 63.1, width: 17.1, height: 13.7 } }),
          h('div', { className: 'a', style: { left: 18.2, top: 122.9, width: 72.5, height: 27.4, borderRadius: 8, background: '#e3ebf8' } },
            h('img', { src: A + 'ic-seat.png', alt: '', style: { position: 'absolute', left: 9.2, top: 5.3, width: 14.5, height: 17.2 } }),
            T(13.7, 16, { left: 29.6, fontSize: 12 }, n + (n === 1 ? ' seat' : ' seats'))),
          h('button', { className: 'a ci-link', style: { right: 28.2, top: 126.6, fontSize: 14, fontWeight: 700, lineHeight: '20px' }, onClick: () => go('seats', { sheet: 'details' }) }, 'View details')),

        /* contact */
        h('div', { className: 'ci-card', style: { marginTop: 14.1, paddingTop: 15.2, paddingBottom: 33.7 } },
          h('p', { className: 'ci-h' }, 'Contact Details'),
          h('p', { className: 'ci-sub', style: { marginTop: 0.1 } }, 'Ticket details will be sent to'),
          h('div', { style: { display: 'flex', marginTop: 18.7, height: 61.5 } },
            h('div', { className: 'ci-field' + (E.phone ? ' ci-field--err' : ''), style: { width: 125.7, height: '100%', borderRadius: '12px 0 0 12px', borderRightWidth: E.phone ? 2 : 1 } },
              h('label', null, 'Country Code'),
              T(39.7, 22, { left: 13.9, fontSize: 16, fontWeight: 700 }, '+91 (IND)'),
              h('i', { className: 'ci-caret', style: { left: 97.5, top: 37.7 } })),
            h('div', { className: 'ci-field' + (E.phone ? ' ci-field--err' : ''), style: { flex: 1, height: '100%', borderRadius: '0 12px 12px 0', marginLeft: -1 } },
              h('input', { value: f.phone, inputMode: 'numeric', placeholder: 'Phone', 'aria-label': 'Phone', maxLength: 10, onChange: (e) => up({ phone: e.target.value.replace(/\D/g, '') }), style: { top: 19.5, height: 22 } }))),
          E.phone && h('p', { className: 'ci-err' }, E.phone),
          h('div', { className: 'ci-field', style: { marginTop: 19.2, height: 61 } }, h('input', { value: f.email, placeholder: 'Email ID (optional)', 'aria-label': 'Email', onChange: (e) => up({ email: e.target.value }), style: { top: 19.5, height: 22 } })),
          h('div', { className: 'ci-field', style: { marginTop: 19.6, height: 62.4 } },
            h('label', null, 'State of Residence'),
            h('select', { value: f.state, 'aria-label': 'State of Residence', onChange: (e) => up({ state: e.target.value }), style: { top: 29.5, height: 22, fontWeight: 700 } }, STATES.map((x) => h('option', { key: x }, x))),
            h('i', { className: 'ci-caret', style: { right: 21.5, top: 27.8 } })),
          h('p', { className: 'ci-sub', style: { marginTop: 6 } }, 'Required for GST Tax Invoicing'),
          h('div', { style: { display: 'flex', alignItems: 'center', marginTop: 15.9, height: 41 } },
            h('img', { src: A + 'ic-whatsapp.png', alt: '', style: { width: 40, height: 40.4, marginLeft: 2.3 } }),
            h('p', { style: { flex: 1, marginLeft: 16.9, fontSize: 14, lineHeight: '21px' } }, 'Send booking details and trip', h('br'), 'updates on WhatsApp'),
            h('button', { className: 'ci-switch' + (f.wa ? '' : ' ci-switch--off'), role: 'switch', 'aria-checked': f.wa, 'aria-label': 'WhatsApp updates', onClick: () => up({ wa: !f.wa }) }, h('i')))),

        /* passengers */
        h('div', { className: 'ci-card', style: { marginTop: 14.6, paddingTop: 18.8, paddingBottom: 23.2 } },
          h('p', { className: 'ci-h' }, 'Passenger details'),
          h('button', { className: 'ci-pill-btn', style: { marginTop: 28.4 } }, 'Login to view saved passengers list'),
          f.pax.map((q, i) => h(Fragment, { key: i },
            h('i', { style: { display: 'block', margin: (i ? 23.2 : 19.6) + 'px -18.2px 0 -18.7px', height: 1, background: '#e6e6e6' } }),
            h('div', { style: { position: 'relative', marginTop: 32.7, height: 45 } },
              h('img', { src: A + 'avatar.png', alt: '', style: { position: 'absolute', left: 0.1, top: 0, width: 44.9, height: 45 } }),
              T(12.9, 22, { left: 63.8, fontSize: 16, fontWeight: 700 }, 'Passenger ' + (i + 1)),
              T(34.3, 20, { left: 63.8, fontSize: 14, color: '#6c6c6c' }, 'Seat ' + seatIds[i] + ', ' + deck(seatIds[i])),
              h('img', { src: A + 'ic-chevron-up.png', alt: '', style: { position: 'absolute', left: 316.2, top: 14.5, width: 16, height: 16 } })),
            h('div', { className: 'ci-field' + (E['name' + i] ? ' ci-field--err' : ''), style: { marginTop: 33.1, height: 61 } }, h('input', { value: q.name, placeholder: 'Name', 'aria-label': 'Name', onChange: (e) => upPax(i, { name: e.target.value }), style: { top: 19.5, height: 22 } })),
            E['name' + i] && h('p', { className: 'ci-err' }, E['name' + i]),
            h('div', { className: 'ci-field' + (E['age' + i] ? ' ci-field--err' : ''), style: { marginTop: 24.2, height: 60.5 } }, h('input', { value: q.age, placeholder: 'Age', inputMode: 'numeric', maxLength: 3, 'aria-label': 'Age', onChange: (e) => upPax(i, { age: e.target.value.replace(/\D/g, '') }), style: { top: 19.3, height: 22 } })),
            E['age' + i] && h('p', { className: 'ci-err', style: { marginBottom: -4.5 } }, E['age' + i]),
            h('p', { className: 'ci-sub', style: { marginTop: 19.7 } }, 'Gender'),
            h('div', { className: 'ci-gender' + (E['g' + i] ? ' ci-gender--err' : ''), style: { marginTop: 9.5 } },
              ['Male', 'Female'].map((g) => h('button', { key: g, onClick: () => upPax(i, { g }), 'aria-pressed': q.g === g }, g, h(Radio, { on: q.g === g, style: { right: 15.9 } }))))))),

        /* free cancellation */
        h('div', { className: 'ci-card' },
          h('p', { className: 'ci-h' }, 'Free Cancellation'),
          h('p', { className: 'ci-sub', style: { marginTop: 0.6 } }, h('b', { style: { color: '#078232' } }, '₹150'), ' per passenger'),
          h('img', { className: 'a', src: A + 'fc-shield.png', alt: '', style: { left: 296.1, top: 9.5, width: 57.1, height: 67 } }),
          h('div', { className: 'ci-box', style: { marginTop: 18.7, height: 87 } },
            T(32.4, 34, { left: 0, right: 0, textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#078232', letterSpacing: '-.6px' }, 'Get 100% refund'),
            T(63.8, 20, { left: 0, right: 0, textAlign: 'center', fontSize: 14, color: '#6c6c6c' }, 'on cancellation')),
          P({ marginTop: 12.1, fontSize: 14, lineHeight: '20.5px', color: '#6c6c6c', marginLeft: 0.9 }, 'Cancel anytime up to 6 hours before bus', h('br'), 'departure for a 100% refund. ', h('span', { className: 'ci-link' }, 'View Details')),
          h('div', { className: 'ci-bought', style: { marginTop: 18, height: 34.6, background: '#e4ecf9' } }, 'Bought by 1,19,417+ people in the last month'),
          h(Opt, { on: f.fc === true, title: 'Add Free Cancellation', sub: 'Only for ₹150 per passenger', h: 78.4, style: { marginTop: 15.1 }, onClick: () => up({ fc: true }) }),
          h(Opt, { on: f.fc === false, title: 'Don’t add Free Cancellation', h: 62.4, style: { marginTop: 20 }, onClick: () => up({ fc: false }) })),

        /* trip guarantee */
        h('div', { className: 'ci-card', style: { marginTop: 14.1, paddingBottom: 17.8 } },
          h('p', { className: 'ci-h' }, 'Trip Guarantee'),
          h('p', { className: 'ci-sub', style: { marginTop: 0.6 } }, '₹24 per passenger'),
          h('img', { className: 'a', src: A + 'tg-shield.png', alt: '', style: { left: 302.9, top: 16.8, width: 42.3, height: 50.3 } }),
          P({ marginTop: 18.6, fontSize: 14, lineHeight: '20.5px' }, 'Get back full ticket price ', h('b', { style: { color: '#078232' } }, '+ ₹500 extra'), ' if your bus', h('br'), 'gets cancelled by the operator. ', h('b', { className: 'ci-link', style: { color: '#5352f8' } }, 'View Details')),
          h(RefundBox, { w: 337.6, top: 9.9, ht: 83.8 }),
          h('div', { className: 'ci-bought', style: { marginTop: 20.1, height: 33.7, background: '#e2eee4' } }, 'Bought by 7,42,445+ people in the last month'),
          h(Opt, { on: f.tg === true, title: 'Add Trip Guarantee', sub: '₹24 for ' + n + ' passenger' + (n > 1 ? 's' : ''), h: 78.8, style: { marginTop: 19.6 }, onClick: () => up({ tg: true }) }),
          h(Opt, { on: f.tg === false, title: 'Don’t add Trip Guarantee', h: 63.3, style: { marginTop: 19.6 }, onClick: () => up({ tg: false }) })),

        /* travel insurance */
        h('div', { className: 'ci-card', style: { marginTop: 14.1, paddingTop: 22 } },
          h('p', { className: 'ci-h' }, 'Travel Insurance'),
          h('p', { className: 'ci-sub', style: { marginTop: 1.1 } }, '₹15 per passenger'),
          h('img', { className: 'a', src: A + 'acko.png', alt: 'ACKO', style: { left: 290.8, top: 36.4, width: 66.6, height: 19.4 } }),
          P({ marginTop: 29.9, fontSize: 14, lineHeight: '20.5px' }, 'Insure your travel by adding ₹ 15.0 per passenger.', h('br'), 'Powered by Acko General Insurance Ltd.'),
          h('div', { style: { marginTop: 10 } },
            [['ti-1.png', 'In the event of loss of', 'luggage', 'Upto ₹ 5,000', 58.5, [-1.5, 4, 29.4, 40.7]], ['ti-2.png', 'In the event of accidental', 'hospitalisation', 'Upto ₹ 75,000', 60.1, [-1.5, 13.7, 29.4, 34.3]], ['ti-3.png', 'In case of death/PTD/PPD', null, 'Upto ₹ 6 Lakh', 47, [-2.2, 8.4, 30.8, 29.7]], ['ti-4.png', 'Hospital daily allowance', null, '₹ 500 per day', 46.4, [-2.2, 11.3, 30.8, 25.2]]]
              .map(([ic, a, b, v, ht, box]) => h('div', { key: ic, className: 'ci-ti-row', style: { height: ht } },
                h('img', { src: A + ic, alt: '', style: { left: box[0], top: box[1], width: box[2], height: box[3] } }),
                h('span', null, a, b && h('br'), b), h('b', null, v)))),
          P({ marginTop: 16.9, fontSize: 14, lineHeight: '20px' }, h('span', { className: 'ci-link', style: { color: '#5352f8' } }, 'View full coverage details')),
          h(Opt, { on: f.ti === true, title: 'Add Travel Insurance', sub: '₹15 for ' + n + ' passenger' + (n > 1 ? 's' : ''), h: 78.6, style: { marginTop: 21.9 }, onClick: () => up({ ti: true }) }),
          h(Opt, { on: f.ti === false, title: 'Don’t add Travel Insurance', h: 62.9, style: { marginTop: 19 }, onClick: () => up({ ti: false }) })),

        /* gst */
        h('button', { className: 'ci-card', style: { display: 'flex', alignItems: 'center', width: 'calc(100% - 36.4px)', height: 62.9, marginTop: 14.4, padding: '0 20.5px 0 18.7px', fontSize: 16, textAlign: 'left' }, onClick: () => up({ gst: !f.gst }) },
          h('span', { style: { flex: 1 } }, 'I have a GST number (optional)?'),
          h('i', { style: { width: 22.2, height: 22.2, border: '2px solid #4b4b4b', borderRadius: 2, background: f.gst ? '#d63942' : '#fff', borderColor: f.gst ? '#d63942' : '#4b4b4b', color: '#fff', fontSize: 14, lineHeight: '18px', textAlign: 'center', fontStyle: 'normal' } }, f.gst ? '✓' : '')),
        P({ marginTop: 14.8, textAlign: 'center', fontSize: 14, lineHeight: '20px' }, 'By clicking ‘Pay now’, I accept'),
        h('div', { style: { position: 'relative', marginTop: 21.4, height: 22 } },
          T(11, 22, { left: 120.7 - 70, width: 140, textAlign: 'center', fontSize: 14, fontWeight: 700 }, h('span', { className: 'ci-link' }, 'Terms & conditions')),
          T(11, 22, { left: 307.5 - 70, width: 140, textAlign: 'center', fontSize: 14, fontWeight: 700 }, h('span', { className: 'ci-link' }, 'Privacy policy'))),

        /* footer */
        h('div', { className: 'ci-foot' },
          T(27.8, 20, { left: 18.7, fontSize: 14 }, 'Amount'),
          T(46.5, 16, { left: 18.7, fontSize: 12, color: '#6c6c6c' }, 'Tax excluded'),
          T(24.6, 28, { right: 56, fontSize: 22, fontWeight: 700, letterSpacing: '-.3px' }, inr(total)),
          T(51, 20, { right: 56, fontSize: 14, color: '#6c6c6c', textDecoration: 'line-through' }, inr(strike)),
          h('img', { className: 'a', src: 'assets/seat/ic-fare.png', alt: 'Fare breakup', style: { left: 370, top: 25.5, width: 21.7, height: 21 } }),
          h('button', { className: 'pd-btn', style: { top: 71.5 }, onClick: pay }, 'Pay now'))),

      /* trip guarantee sheet */
      sheet && h(Fragment, null,
        h('div', { className: 'ci-sheet-scrim', onClick: () => setSheet(false) }),
        h('div', { className: 'ci-sheet' },
          h('img', { className: 'a', src: A + 'tg-shield-lg.png', alt: '', style: { left: 27.4, top: 32.7, width: 44.6, height: 52.6 } }),
          T(59.7, 28, { left: 101.2, fontSize: 22, fontWeight: 700, letterSpacing: '-.3px' }, 'Trip Guarantee'),
          T(110.7, 20.5, { left: 18.7, fontSize: 14, whiteSpace: 'nowrap' }, 'Get back full ticket price ', h('b', { style: { color: '#078232' } }, '+ ₹500 extra'), ' if your bus gets', h('br'), 'cancelled by the operator.'),
          h('div', { className: 'a', style: { left: 18.2, width: 374.5, top: 160.4 } }, h(RefundBox, { w: 374.5, top: 0, ht: 84.7 })),
          h('div', { className: 'a ci-bought', style: { left: 18.2, width: 374.5, top: 263.8, height: 34.2, background: '#e2eee4', justifyContent: 'center', paddingLeft: 0, fontSize: 12 } }, 'Bought by 7,42,445+ people in the last month'),
          h('button', { className: 'pd-btn', style: { top: 314.8, height: 49.7 }, onClick: () => { up({ tg: true }); setSheet(false); go('payment', { paxD: f.pax, phone: f.phone }); } }, 'Add Trip Guarantee for ₹24'),
          h('button', { className: 'ci-outline', style: { top: 381.3 }, onClick: () => { up({ tg: false }); setSheet(false); go('payment', { paxD: f.pax, phone: f.phone }); } }, 'Don’t add Trip Guarantee'),
          T(469.3, 20, { left: 0, right: 0, textAlign: 'center', fontSize: 14 }, h('span', { className: 'ci-link', style: { color: '#5352f8' } }, 'View Terms and Conditions')))),
      h('i', { className: 'pd-gesture' }));
  }

  window.CUST = { CustInfo };
})();
