/* Seat selection + bus details, rebuilt from production screenshots 19-21. Native 411.43 dp space. */
(function () {
  const h = React.createElement;
  const D = window.IndiaBusDS;
  const { useState, useEffect, useRef, Fragment } = React;
  const A = 'assets/seat/';
  const inr = (n) => '₹' + n.toLocaleString('en-IN');
  const T = (c, lh, style, ...kids) => h('p', { className: 'a', style: Object.assign({ top: c - lh / 2, lineHeight: lh + 'px' }, style) }, ...kids);

  /* ---------------- seat layout data ---------------- */
  // kind: sleeper | seater ; st: a (available) | am / af (male / female only) | sm / sf (sold, male / female)
  const SEATER_ROWS = [['a', 484, 'a', 484], ['am', 585, 'sm'], ['am', 585, 'sm'], ['am', 585, 'sm'], ['sm', 0, 'sf'], ['sm', 0, 'sm'], ['af', 585, 'sf'], ['a', 534, 'a', 534], ['a', 534, 'a', 534], ['sm', 0, 'a', 534]];
  const LOWER_SLEEPERS = [['a', 1350], ['sf'], ['a', 1399], ['a', 1399], ['sm']];
  const UPPER = [[['sm'], ['sf'], ['sm']], [['sm'], ['sm'], ['a', 1099]], [['sf'], ['sf'], ['sf']], [['sf'], ['a', 1099], ['sm']], [['a', 1099], ['sm'], ['a', 1099]]];
  const SEATER_X = [105.5, 151.3], SLEEPER_X = [12.9], UPPER_X = [13.2, 105.2, 150.9];
  const TOP0 = 17.9, SEATER_STEP = 53.3, SLEEPER_STEP = 106.6;

  function buildLower() {
    const seats = [];
    LOWER_SLEEPERS.forEach(([st, p], r) => seats.push({ id: 'L' + (r * 3 + 1), kind: 'sleeper', st, price: p, x: SLEEPER_X[0], y: TOP0 + r * SLEEPER_STEP }));
    SEATER_ROWS.forEach((row, r) => {
      const cells = [[row[0], row[1]], [row[2], row[3]]];
      cells.forEach(([st, p], c) => seats.push({ id: 'L' + (r + 2) + String.fromCharCode(65 + c), kind: 'seater', st, price: p || 0, x: SEATER_X[c], y: TOP0 + r * SEATER_STEP }));
    });
    return seats;
  }
  function buildUpper() {
    const seats = [];
    UPPER.forEach((row, r) => row.forEach(([st, p], c) => seats.push({ id: 'U' + (r * 3 + c + 1), kind: 'sleeper', st, price: p || 0, x: UPPER_X[c], y: TOP0 + r * SLEEPER_STEP })));
    return seats;
  }
  const LOWER = buildLower(), UPPERS = buildUpper();
  const ALL = LOWER.concat(UPPERS);
  const PRICE = {}; ALL.forEach((s) => { PRICE[s.id] = s.price; });
  const INNER_H = TOP0 + 4 * SLEEPER_STEP + 80.76 + 30;

  const sprite = (s, sel) => {
    const sold = s.st[0] === 's';
    if (s.kind === 'sleeper') return sel ? 'sleeper-selected.png' : sold ? (s.st === 'sf' ? 'sleeper-sold-f.png' : 'sleeper-sold-m.png') : 'sleeper-avail.png';
    return sold ? (s.st === 'sf' ? 'seater-sold-f.png' : 'seater-sold-m.png') : s.st === 'am' ? 'seater-avail-m.png' : s.st === 'af' ? 'seater-avail-f.png' : 'seater-avail.png';
  };

  function Deck({ label, steering, seats, sel, toggle }) {
    return h('div', { className: 'sl-deck', style: { height: 81.4 + INNER_H + 4.6 } },
      h('p', null, label),
      steering && h('img', { src: A + 'steering.png', alt: '', style: { position: 'absolute', left: 159.3, top: 13.3, width: 46.5, height: 45.3 } }),
      h('div', { className: 'sl-inner', style: { height: INNER_H } },
        seats.map((s) => {
          const on = sel.includes(s.id), sold = s.st[0] === 's';
          const w = s.kind === 'sleeper' ? 37.33 : 30.48;
          const ly = s.y + (s.kind === 'sleeper' ? 85.8 : 35.5);
          return h(Fragment, { key: s.id },
            h('button', { className: 'sl-seat sl-seat--' + s.kind + (on && s.kind === 'seater' ? ' sl-seat--sel-seater' : ''), style: { left: s.x, top: s.y }, disabled: sold, 'aria-label': s.id + (sold ? ' sold' : ' ' + inr(s.price)), 'aria-pressed': on, onClick: () => toggle(s.id) },
              !(on && s.kind === 'seater') && h('img', { src: A + sprite(s, on), alt: '' })),
            h('span', { className: 'sl-price' + (sold ? ' sl-price--sold' : on ? ' sl-price--sel' : ''), style: { left: s.x + w / 2, top: ly - 6 } }, sold ? 'Sold' : inr(s.price)));
        })));
  }

  /* ---------------- seat page ---------------- */
  function Seats({ s, set, go }) {
    const sel = (s.seats || []).filter((id) => PRICE[id]);
    useEffect(() => { if (s.sheet === 'details') set({ bd: true, sheet: null }); }, []);
    const toggle = (id) => set({ seats: sel.includes(id) ? sel.filter((x) => x !== id) : sel.concat(id) });
    const n = sel.length;
    const total = sel.reduce((a, id) => a + PRICE[id], 0);
    const orig = Math.round(total / 0.9 / 10) * 10, saved = orig - total;
    const trayTop = n ? 642.4 : 712;
    return h('div', { className: 'pd' },
      h('img', { className: 'pd-status', src: A + 'statusbar.png', alt: '', style: { mixBlendMode: 'normal', zIndex: 7 } }),
      h('div', { className: 'sl-bar' },
        h('button', { 'aria-label': 'Back', onClick: () => go('srp'), style: { position: 'absolute', left: 12, top: 62, width: 40, height: 40 } }, h('img', { src: A + 'ic-back.png', alt: '', style: { position: 'absolute', left: 9.7, top: 10.8, width: 20.2, height: 19.4 } })),
        T(72, 22, { left: 64.2, fontWeight: 700, fontSize: 16 }, 'Select Seats'),
        T(93.9, 20, { left: 64.2, fontSize: 14, color: '#6c6c6c' }, 'Bengaluru → Chennai'),
        h('div', { className: 'sl-badge' }, h('span', null, 'Exclusive'), h('span', { style: { fontWeight: 700 } }, '10% OFF')),
        h('img', { src: A + 'ic-share.png', alt: 'Share', style: { position: 'absolute', left: 366.9, top: 68.2, width: 25.1, height: 27.4 } })),
      h('div', { className: 'sl-body' },
        h('div', { className: 'sl-rail' },
          h(Deck, { label: 'Lower deck', steering: true, seats: LOWER, sel, toggle }),
          h(Deck, { label: 'Upper deck', seats: UPPERS, sel, toggle }),
          h('div', { style: { flex: 'none', width: 1 } })),
        h('div', { style: { height: 300 } })),
      h('button', { className: 'sl-fab', style: { top: trayTop - 13.8 - 54.86 }, 'aria-label': 'Ask Ray' }, h('img', { src: A + 'fab-ray.png', alt: '' })),
      h('div', { className: 'sl-tray', style: { top: trayTop } },
        h('div', { className: 'sl-tray__hit', onClick: () => set({ bd: true }), role: 'button', 'aria-label': 'Bus details' }),
        h('i', { className: 'pd-handle', style: { top: 11.7 } }),
        T(48.4, 22, { left: 18.7, fontWeight: 700, fontSize: 16, pointerEvents: 'none' }, 'SRI SAI TRAVELS'),
        T(69.8, 20, { left: 18.7, fontSize: 14, color: '#6c6c6c', pointerEvents: 'none' }, '23:10 - 06:20 · Thu, 08 Oct'),
        h('div', { className: 'sl-rate', style: { top: 37.5 } }, h('b', null, '★ 4.9'), h('span', null, '1316')),
        n === 0
          ? h('div', { className: 'sl-hl' },
            h('img', { src: A + 'tray-photo.jpg', alt: 'Bus photo' }),
            h('div', null, h('b', null, 'New Bus'), h('small', null, '5 months old')),
            h('div', null, h('b', null, 'Highly On Time'), h('small', null, '1278 of 1469 past trips')))
          : h(Fragment, null,
            h('div', { className: 'sl-deal', style: { top: 86.6 } }, h('img', { src: A + 'ic-deal.png', alt: '', style: { position: 'absolute', left: 89.3 } }), h('span', { style: { position: 'absolute', left: 113.4, whiteSpace: 'nowrap' } }, 'Exclusive deal applied · ', h('b', null, inr(saved) + ' Saved'))),
            T(147.2, 20, { left: 18.7, fontSize: 14 }, n + (n === 1 ? ' seat' : ' seats') + ' selected'),
            T(149.2, 16, { right: 132.6, fontSize: 12, color: '#8a8a8a', textDecoration: 'line-through' }, inr(orig)),
            T(147.2, 28, { right: 56.5, fontSize: 22, fontWeight: 700, letterSpacing: '-.3px' }, inr(total)),
            h('button', { 'aria-label': 'Fare breakup', style: { position: 'absolute', left: 369.1, top: 136.7, width: 21.7, height: 21 } }, h('img', { src: A + 'ic-fare.png', alt: '', style: { width: '100%', height: '100%' } })),
            h('button', { className: 'pd-btn', style: { top: 177.6 }, onClick: () => go('points') }, 'Select boarding & dropping points'))),
      h('i', { className: 'pd-gesture' }),
      s.bd && h(BusDetails, { onClose: () => set({ bd: false }) }));
  }

  /* ---------------- bus details sheet ---------------- */
  const SHEET = 109.8;
  const Y = (dp) => dp - SHEET;
  const TABS = [['Highlights', 485.7], ['Cancellation policy', 690], ['Date change policy', 1503.5], ['Bus route', 1720.8], ['Boarding points', 2077.5], ['Dropping points', 2628.8], ['Ratings & reviews', 3141.4], ['Comfort score', 3648], ['Bus safety', 4229.3], ['About bus', 4698.6], ['Other policies', 5212.1]];

  function Tabs({ active, onTab, style, cls }) {
    return h('div', { className: 'bd-tabs ' + (cls || ''), style }, TABS.map(([t], i) => h('button', { key: t, className: active === i ? 'on' : '', onClick: () => onTab(i) }, t)));
  }

  function Table({ top, cols, rows, head }) {
    let y = 0;
    const rowsEl = [head].concat(rows).map((r, i) => {
      const el = h('div', { key: i, className: 'r', style: { top: y, height: r.h } },
        r.cells.map((c, j) => h('div', { key: j, className: 'c' + (c.g ? ' g' : ''), style: { left: cols[j], width: (cols[j + 1] || 373.6) - cols[j], paddingLeft: c.pl != null ? c.pl : 14.1, fontWeight: c.b ? 700 : c.g ? 700 : 400, textAlign: c.center ? 'center' : 'left', paddingRight: 8, color: c.color } },
          c.t, c.g && c.check && h('img', { src: A + 'ic-check-green.png', alt: '' }))));
      y += r.h;
      return el;
    });
    return h('div', { className: 'bd-tbl', style: { top, height: y + 2 } }, rowsEl);
  }

  const L = (...lines) => lines.reduce((a, l, i) => (i ? a.concat(h('br', { key: i }), l) : [l]), []);

  function Timeline({ items, top, fadeFrom }) {
    return h(Fragment, null,
      h('i', { className: 'bd-rail', style: { top: Y(items[0].c), height: Y(items[items.length - 1].c) - Y(items[0].c) + 30 } }),
      items.map((it, i) => h('div', { key: i, className: 'bd-tl' },
        h('p', { className: 't', style: { top: Y(it.c) - 11 } }, it.t),
        h('p', { className: 'd', style: { top: Y(it.c) + 19.6 - 8 } }, it.d),
        h('i', { className: 'dot', style: { top: Y(it.c) - 2.8 } }),
        h('p', { className: 'n', style: { top: Y(it.c) - 11 } }, it.n),
        it.ad.map((l, k) => h('p', { key: k, className: 'ad', style: { top: Y(it.c) + 19.6 + k * 16.9 - 8.45 } }, l)),
        it.metro && h('div', { className: 'bd-metro', style: { top: Y(it.metro[0]), height: it.metro[1] - it.metro[0] } }, h('img', { src: A + 'ic-metro.png', alt: '', style: { top: 6 } }), h('span', { style: { paddingLeft: 29.6 } }, L(...it.metro[2]))))),
      h('div', { className: 'bd-fade', style: { top: Y(fadeFrom), height: 60 } }));
  }

  function BusDetails({ onClose }) {
    const ref = useRef(null);
    const [active, setActive] = useState(0);
    const [stuck, setStuck] = useState(false);
    const onScroll = () => {
      const st = ref.current.scrollTop;
      setStuck(st > Y(433.7));
      let a = 0; TABS.forEach(([, y], i) => { if (st + 60 >= Y(y)) a = i; }); setActive(a);
    };
    const go = (i) => { ref.current.scrollTo({ top: Math.max(0, Y(TABS[i][1]) - 52), behavior: 'smooth' }); };
    const hl = [['Highly On Time', '1278 of 1469 past trips', 18.2, 509.4], ['New Bus', '5 months old', 210.5, 509.4, true], ['Bus Safety', 'Enhanced', 18.2, 587.7], ['Top Comfort', 'Score 9.2/10', 210.5, 587.7]];
    const COL3 = [0, 149, 262.4];
    const H = (t, c) => h('p', { className: 'bd-h', style: { top: Y(c) - 14 } }, t);
    const G = (t, c, style) => T(Y(c), 20, Object.assign({ left: 18.7, fontSize: 14, color: '#6c6c6c', whiteSpace: 'nowrap' }, style), t);
    const band = (a, b) => h('i', { className: 'bd-band', style: { top: Y(a), height: b - a } });
    const notes = [
      [1243.8, 'Cancellation charges are computed on a per seat basis.', 'Above cancellation fare is calculated based on seat fare of ₹', '538'],
      [1308, 'Cancellation charges are calculated based on service start', 'date + time at :06-10-2026 22:20'],
      [1355.4, 'Ticket cannot be cancelled after scheduled bus departure', 'time from the first boarding point'],
      [1402.8, 'Note: Cancellation charges mentioned above are excluding', 'GST'],
      [1449.7, 'For group bookings individual seats can be cancelled.'],
    ];
    const bars = [[5, 89, 87.5], [4, 8, 9], [3, 1, 1.5], [2, 1, 1.5], [1, 2, 2]];
    const pols = [
      ['ic-pol-child.png', 5319.6, 'Child passenger policy', ['Children above the age of 5 will need a ticket']],
      ['ic-pol-luggage.png', 5386.1, 'Luggage policy', ['Carrying fish is not allowed', '2 pieces of luggage will be accepted free of', ['charge per passenger. Excess items ', h('b', { key: 'r', style: { color: '#4b4b4b' } }, '... read more')]]],
      ['ic-pol-pets.png', 5494.7, 'Pets Policy', ['Pets are not allowed']],
      ['ic-pol-liquor.png', 5561.5, 'Liquor Policy', ['Carrying or consuming liquor inside the bus is', 'prohibited. Bus operator reserves the right to', 'deboard drunk passengers.']],
      ['ic-pol-pickup.png', 5672.3, 'Pick up time policy', ['Bus operator is not obligated to wait beyond the', 'scheduled departure time of the bus. No refund', ['request will be entertained for late ar', h('b', { key: 'r', style: { color: '#4b4b4b' } }, '... read more')]]],
    ];
    return h(Fragment, null,
      h('div', { className: 'bd-scrim', onClick: onClose }),
      h('button', { className: 'bd-close', 'aria-label': 'Close', onClick: onClose }, h(D.Icon, { name: 'ion-close' })),
      h('div', { className: 'bd-sheet' },
        stuck && h(Tabs, { active, onTab: go, cls: 'bd-tabs--sticky' }),
        h('div', { className: 'bd-scroll', ref, onScroll },
          h('div', { className: 'bd-c', style: { height: Y(5800) } },
            h('i', { className: 'pd-handle', style: { top: Y(123) - 2 } }),
            T(Y(158.1), 22, { left: 18.7, fontWeight: 700, fontSize: 16 }, 'SRI SAI TRAVELS'),
            G('23:10 - 06:20 · Thu, 08 Oct', 179.1),
            G('A/C Seater / Sleeper (2+1)', 200.5),
            h('div', { className: 'sl-rate', style: { top: Y(149) } }, h('b', null, '★ 4.9'), h('span', null, '1316')),
            h('img', { className: 'a', src: A + 'bd-photo1.jpg', alt: 'Bus photo', style: { left: 18.2, top: Y(229.2), width: 331.2, height: 184, borderRadius: 20, objectFit: 'cover' } }),
            h('img', { className: 'a', src: A + 'bd-photo2.jpg', alt: '', style: { left: 358.9, top: Y(229.2), width: 52.6, height: 184, borderRadius: '20px 0 0 20px', objectFit: 'cover' } }),
            h(Tabs, { active, onTab: go, style: { top: Y(433.7) } }),
            band(485.7, 685.7),
            hl.map(([t, sub, x, y, medal]) => h('div', { key: t, className: 'bd-hlc', style: { left: x, top: Y(y) } }, h('b', null, t), h('small', null, sub), h('i'),
              medal && h('img', { src: A + 'bd-medal-small.png', alt: '', style: { position: 'absolute', right: 15, top: -6.2, width: 30.1, height: 41.1 } }))),
            H('Cancellation policy', 719.9),
            h(Table, { top: Y(751.8), cols: COL3, head: { h: 62.9, cells: [{ t: 'Cancellation Time', b: true, center: true, pl: 0 }, { t: L('Without free', 'cancellation'), b: true, pl: 15.9 }, { t: L('With free', 'cancellation'), b: true, pl: 14.6 }] },
              rows: [
                { h: 61.9, cells: [{ t: L('Before 8th Oct 10:20', 'AM') }, { t: L('90%', 'refund') }, { t: L('100%', 'refund'), g: true, check: true }] },
                { h: 78.8, cells: [{ t: L('From 8th Oct 10:20', 'AM Until 8th Oct', '02:20 PM') }, { t: L('85%', 'refund') }, { t: L('100%', 'refund'), g: true, check: true }] },
                { h: 78.8, cells: [{ t: L('From 8th Oct 02:20', 'PM Until 8th Oct', '06:20 PM') }, { t: L('50%', 'refund') }, { t: L('100%', 'refund'), g: true, check: true }] },
                { h: 77.5, cells: [{ t: L('From 8th Oct 06:20', 'PM Until 8th Oct', '10:20 PM') }, { t: 'No refund' }, { t: 'No refund' }] },
              ] }),
            h('div', { className: 'a', style: { left: 18.2, top: Y(1131.7), width: 374.5, height: 85.7, borderRadius: 16, background: 'linear-gradient(90deg,#fedbe2,#fefefe)' } },
              h('img', { src: A + 'ic-fc-shield.png', alt: '', style: { position: 'absolute', left: 17.2, top: 10.4, width: 29, height: 32.4, mixBlendMode: 'multiply' } }),
              T(23.7, 20, { left: 59.3, fontSize: 14, whiteSpace: 'nowrap' }, 'Add ', h('b', { style: { color: '#c2185b' } }, 'Free Cancellation'), ' while booking'),
              T(46.9, 16.9, { left: 59.3, fontSize: 12, color: '#757575', whiteSpace: 'nowrap' }, L('Cancel anytime up to 6 hours before bus', 'departure for a 100% refund.'))),
            notes.map(([c, ...ls]) => h('p', { key: c, className: 'bd-note', style: { top: Y(c) - 8.4 } }, L(...ls))),
            band(1495.7, 1503.5),
            H('Date change policy', 1537.6),
            h(Table, { top: Y(1570.4), cols: [0, 262.4], head: { h: 48.3, cells: [{ t: 'Time window', b: true }, { t: 'Fees', b: true }] },
              rows: [{ h: 65.2, cells: [{ t: [h('b', { key: 1, style: { fontSize: 14, lineHeight: '20px' } }, 'Up to 12h before departure'), h('span', { key: 2, style: { color: '#757575' } }, 'Until 08 Oct, 10:20')] }, { t: h('b', { style: { color: '#038432', fontSize: 14 } }, 'FREE') }] }] }),
            band(1711.7, 1720.8),
            H('Bus route', 1749.5),
            G('358 km · 7h 10m', 1773.7),
            T(Y(1809.6), 23, { left: 18.7, width: 362.2, fontSize: 16, textAlign: 'justify', textAlignLast: 'justify' },
       h('b', { style: { background: 'linear-gradient(transparent 55%,#fcdd92 55%)' } }, 'Bengaluru'), ' → Hosur → Krishnagiri → Ambur'),
      T(Y(1832.4), 23, { left: 18.7, width: 336.2, fontSize: 16, textAlign: 'justify', textAlignLast: 'justify' }, '→ Vellore → Kanchipuram → ', h('b', { style: { background: 'linear-gradient(transparent 55%,#fcdd92 55%)' } }, 'Chennai'), ' →'),
            T(Y(1855.7), 23, { left: 18.7, fontSize: 16 }, 'Sriperumbudur'),
            h('div', { className: 'a', style: { left: 18.2, top: Y(1884.8), width: 374.5, height: 123.5, borderRadius: 20, overflow: 'hidden', background: 'repeating-linear-gradient(-60deg,rgba(255,255,255,0) 0 22px,rgba(255,255,255,.18) 22px 44px),linear-gradient(90deg,#aef3b4,#c5efcb 55%,#e0eee1)' } },
              T(26, 16, { left: 18.7, fontSize: 12, fontWeight: 700 }, 'Reaches Chennai'),
              T(50.1, 28, { left: 18.7, fontSize: 22, fontWeight: 700, letterSpacing: '-.3px' }, 'Highly on time'),
              T(74.3, 21, { left: 18.7, fontSize: 14, color: '#5b6b5c', whiteSpace: 'nowrap' }, L('1278 of 1469 trips on time in', 'the last 60 days')),
              h('svg', { style: { position: 'absolute', left: 316.7 - 42.9, top: 61.5 - 42.9 }, width: 85.7, height: 85.7, viewBox: '0 0 86 86' },
                h('circle', { cx: 43, cy: 43, r: 40, fill: 'none', stroke: 'rgba(255,255,255,.7)', strokeWidth: 5 }),
                h('circle', { cx: 43, cy: 43, r: 40, fill: 'none', stroke: '#038432', strokeWidth: 5, strokeDasharray: (2 * Math.PI * 40 * 0.87) + ' 999', transform: 'rotate(-90 43 43)', strokeLinecap: 'round' })),
              T(61.5, 28, { left: 316.7 - 42.9, width: 85.7, textAlign: 'center', fontSize: 22, fontWeight: 700 }, '87', h('small', { style: { fontSize: 12 } }, '%'))),
            T(Y(2025.6), 16.9, { left: 0, right: 0, textAlign: 'center', fontSize: 12, color: '#757575' }, L('*Insights based on tracking information', 'exclusive to redBus')),
            band(2068.9, 2077.5),
            H('Boarding points', 2108), G('Bengaluru', 2132.2),
            h(Timeline, { fadeFrom: 2462, items: [
              { c: 2186, t: '21:45', d: '08 Oct', n: 'Kalasipalayam', ad: ['Victoria Hospital (Opposite)Apsara Parking'], metro: [2225.6, 2250.7, ['KR Market metro (628 m)']] },
              { c: 2284.8, t: '22:20', d: '08 Oct', n: 'Majestic', ad: ['Opposite to Kempegowda Metro Station - Infront of', 'Ayyapan Kovil - Nearby Majestic Railway station'], metro: [2340.4, 2381.9, ['Nadaprabhu Kempegowda Stn., Majestic', 'metro (411 m)']] },
              { c: 2416.5, t: '22:25', d: '08 Oct', n: 'Anand Rao Circle', ad: ['Infront of fire station'] },
              { c: 2488, t: '22:40', d: '08 Oct', n: 'Shanthi Nagar', ad: ['Infront of Reliance Metro Wholesale, Near SRS'] },
            ] }),
            h('button', { className: 'bd-btn', style: { top: Y(2551.8) } }, 'View all boarding points'),
            band(2619.7, 2628.8),
            H('Dropping points', 2658), G('Chennai', 2682.1),
            h(Timeline, { fadeFrom: 2944, items: [
              { c: 2736.8, t: '05:05', d: '09 Oct', n: 'Kanchipuram', ad: ['Opposite to Meenakshi Medical College - MM', 'Legacy Hotel Entrance'] },
              { c: 2824.7, t: '05:35', d: '09 Oct', n: 'Sriperumbudur', ad: ['Infront of Rajiv Gandhi Memorial Bus Stop'] },
              { c: 2896.3, t: '05:40', d: '09 Oct', n: 'Sriperumbudur Toll Plaza', ad: ['After Sriperumbudur Toll Plaza'] },
              { c: 2968.7, t: '05:55', d: '09 Oct', n: 'Panimalar College', ad: ['Infront of KFC - Poonamalle - Chennai Bangalore', 'Highway'] },
            ] }),
            h('button', { className: 'bd-btn', style: { top: Y(3064.8) } }, 'View all dropping points'),
            band(3133.2, 3141.4),
            H('Ratings & reviews', 3175.5),
            T(Y(3167.3), 28, { right: 19.6, fontSize: 22, fontWeight: 700, color: '#038432' }, '★ 4.9'),
            T(Y(3189.7), 16, { right: 19.6, fontSize: 12, color: '#757575' }, '1316 Ratings'),
            T(Y(3219.7), 20, { left: 0, right: 0, textAlign: 'center', fontSize: 14, fontWeight: 700, color: '#038432', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }, h('img', { src: A + 'ic-verified.png', alt: '', style: { width: 20.2, height: 19.8 } }), 'verified travelers'),
            bars.map(([s, p, w], i) => h(Fragment, { key: s },
              T(Y(3259.8 + i * 25.1), 20, { left: 18.7, fontSize: 14 }, s + ' ★'),
              h('div', { className: 'bd-bar', style: { top: Y(3259.8 + i * 25.1) - 2.3 } }, h('i', { style: { width: w + '%' } })),
              T(Y(3259.8 + i * 25.1), 20, { right: 19.6, fontSize: 14 }, p + ' %'))),
            T(Y(3408.8), 20, { left: 18.7, fontSize: 14, fontWeight: 700 }, 'Loved by travellers'),
            h('div', { className: 'bd-chips', style: { top: Y(3432.7) } }, ['Seat / Sleep Comfort (448)', 'Live tracking (340)', 'AC (414)', 'Punctuality (481)', 'Rest stop hygiene (269)', 'Staff behavior (464)', 'Driving (497)', 'Cleanliness (477)'].map((c) => h('span', { key: c }, c))),
            h('button', { className: 'bd-btn', style: { top: Y(3565.5) } }, 'Read all reviews (316)'),
            band(3640, 3648),
            H('Comfort score details', 3694.9),
            T(Y(3719.1), 16.8, { left: 18.7, fontSize: 12, color: '#757575' }, 'Based on 6 months of verified traveler feedback'),
            h('img', { className: 'a', src: A + 'bd-comfort.jpg', alt: '', style: { left: 23.2, top: Y(3757.3), width: 365, height: 204.1, borderRadius: 20, objectFit: 'cover' } }),
            h('svg', { className: 'a', style: { left: 205.7 - 40.75, top: Y(4017.5) - 40.75 }, width: 81.5, height: 81.5, viewBox: '0 0 82 82' },
              h('circle', { cx: 41, cy: 41, r: 38, fill: 'none', stroke: '#e6e6e6', strokeWidth: 4.5 }),
              h('circle', { cx: 41, cy: 41, r: 38, fill: 'none', stroke: '#00609c', strokeWidth: 4.5, strokeDasharray: (2 * Math.PI * 38 * 0.92) + ' 999', transform: 'rotate(-90 41 41)' })),
            T(Y(4017.5), 28, { left: 0, right: 0, textAlign: 'center', fontSize: 22, fontWeight: 700 }, '9.2', h('small', { style: { fontSize: 10, color: '#757575', fontWeight: 400 } }, '/10')),
            h('img', { className: 'a', src: A + 'bd-comfort-laurel.png', alt: 'Excellent comfort', style: { left: 109.4, top: Y(4066.4), width: 191.2, height: 49.9, mixBlendMode: 'multiply' } }),
            T(Y(4144.1), 22, { left: 0, right: 0, textAlign: 'center', fontSize: 16, fontWeight: 700 }, 'The score for a good night’s sleep'),
            T(Y(4170.6), 20, { left: 0, right: 0, textAlign: 'center', fontSize: 14, color: '#4b4b4b', whiteSpace: 'nowrap' }, L('A 10-point score for how comfortable a bus is, based', ['on ', h('b', { key: 'b', style: { color: '#00609c' } }, 'seat comfort, cooling, driving, and hygiene')])),
            band(4221.1, 4229.3),
            H('Bus safety details', 4263.1),
            h('img', { className: 'a', src: A + 'bd-safety.jpg', alt: 'Bus with registration TN14AV7070', style: { left: 205.7 - 111.6, top: Y(4319.1), width: 223.2, height: 200.5 } }),
            [['Bus insurance', 'Valid till Feb 2027', 23.2], ['Bus fitness', 'Valid till May 2028', 212.8]].map(([t, v, x]) => h('div', { key: t, className: 'a', style: { left: x, top: Y(4533.3), width: 175.4, height: 68.3, borderRadius: 16, background: '#f5f5f8' } },
              T(21, 20, { left: 13.7, fontSize: 14, fontWeight: 700 }, t),
              T(43.2, 18, { left: 13.7, fontSize: 12, color: '#757575', display: 'flex', alignItems: 'center', gap: 5 }, v, h('img', { src: A + 'ic-check-green.png', alt: '', style: { width: 17, height: 17 } })))),
            T(Y(4636.6), 16.4, { left: 0, right: 0, textAlign: 'center', fontSize: 12, color: '#757575', whiteSpace: 'nowrap' }, L('Vehicle details via Vahan Registry. Bus assignment is predicted based', 'on historical data.')),
            band(4689.5, 4698.6),
            H('About bus', 4730),
            G('Predicted based on past history', 4755.1),
            T(Y(4740), 20, { right: 19.6, fontSize: 14, fontWeight: 700, color: '#0000ee', textDecoration: 'underline' }, 'History'),
            h('div', { className: 'a', style: { left: 30, right: 30, top: Y(4783.8), height: 160, background: 'radial-gradient(ellipse 60% 100% at 50% 0%,#fffbe8 0%,#fffdf5 55%,rgba(255,255,255,0) 72%)' } }),
            h('img', { className: 'a', src: A + 'bd-medal.png', alt: '', style: { left: 205.7 - 34.3, top: Y(4898.2) - 34.3, width: 68.6, height: 68.6, mixBlendMode: 'multiply' } }),
            T(Y(4961.5), 34, { left: 0, right: 0, textAlign: 'center', fontSize: 28, fontWeight: 700, color: '#8b6914', letterSpacing: '-.5px' }, 'New bus'),
            h('i', { className: 'a', style: { left: 46, right: 46, top: Y(4980), height: 1, background: 'linear-gradient(90deg,rgba(230,230,230,0),#ececec,rgba(230,230,230,0))' } }),
            h('div', { className: 'a', style: { left: 150.8, top: Y(5017), width: 109.3, height: 25, borderRadius: 6, background: '#f0bc0a', border: '1.5px solid #3b2e00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 } }, 'TN14AV7070'),
            T(Y(5055.3), 16, { left: 0, right: 0, textAlign: 'center', fontSize: 12, color: '#757575' }, 'Age: 5 months'),
            h('div', { className: 'a', style: { left: 18.7, top: Y(5082.2), width: 373.6, height: 46.9, border: '1px solid #e6e6e6', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 13.7px', fontSize: 14 } }, h('span', { style: { color: '#757575' } }, 'Registration date'), h('b', null, 'May 2026')),
            T(Y(5156.5), 17.3, { left: 0, right: 0, textAlign: 'center', fontSize: 12, color: '#757575', whiteSpace: 'nowrap' }, L('Vehicle information verified using govt. of India’s', 'vahan.parivahan.gov.in')),
            band(5203.9, 5212.1),
            H('Other policies', 5247.6),
            h('div', { className: 'bd-pol' }, pols.map(([ic, c, t, ds]) => h(Fragment, { key: t },
              h('img', { className: 'a', src: A + ic, alt: '', style: { left: 17.1, top: Y(c) - 14, width: 29, height: 29, objectFit: 'contain', mixBlendMode: 'multiply' } }),
              h('p', { className: 'ti', style: { top: Y(c) - 11 } }, t),
              ds.map((d, k) => h('p', { key: k, className: 'de', style: { top: Y(c) + 21.4 + k * 20.6 - 10.3 } }, d))))),
            band(5780, 5800))),
        h('button', { className: 'sl-fab', style: { top: 644 - SHEET }, 'aria-label': 'Ask Ray' }, h('img', { src: A + 'fab-ray.png', alt: '' }))));
  }

  window.SEATS = { Seats, PRICE };
})();
