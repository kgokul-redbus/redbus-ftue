/* From / To search and the date sheet, rebuilt from production screenshots 12-14. Native 411.43 dp space. */
(function () {
  const h = React.createElement;
  const { useState, useRef, useEffect } = React;
  const A = 'assets/search/';

  const POPULAR = ['Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Mumbai', 'Delhi', 'Coimbatore', 'Vijayawada'];
  const FROM_BLR = ['Chennai', 'Hyderabad', 'Coimbatore', 'Tirupati', 'Madurai', 'Mangaluru', 'Goa', 'Pune', 'Mumbai'];
  const ALL = ['Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Mumbai', 'Delhi', 'Coimbatore', 'Tirupati', 'Madurai', 'Mangaluru', 'Goa', 'Vijayawada', 'Visakhapatnam', 'Kochi', 'Mysuru', 'Hubballi', 'Belagavi', 'Salem', 'Trichy', 'Pondicherry', 'Kolar', 'Davanagere', 'Shivamogga', 'Udupi', 'Ahmedabad', 'Jaipur', 'Indore', 'Nagpur', 'Kolkata', 'Ganganagar (Sri Ganganagar)'];

  /* letter keys on the cropped keyboard image (dp, relative to the keyboard top) */
  const ROWS = [[61.6, 106.3, 0.6, 'qwertyuiop'], [118.6, 163.7, 20.9, 'asdfghjkl'], [176.4, 221.5, 61.5, 'zxcvbnm']];
  function Keyboard({ onKey }) {
    const keys = [];
    ROWS.forEach(([t, b, x0, row]) => row.split('').forEach((k, i) => keys.push(h('button', { key: k, className: 'sr-key', 'aria-label': k, onClick: () => onKey(k), style: { left: x0 + i * 40.7, top: t, width: 40.7, height: b - t } }))));
    keys.push(h('button', { key: 'del', className: 'sr-key', 'aria-label': 'Backspace', onClick: () => onKey('del'), style: { left: 350.8, top: 176.4, width: 55.1, height: 45.1 } }));
    keys.push(h('button', { key: 'sp', className: 'sr-key', 'aria-label': 'Space', onClick: () => onKey(' '), style: { left: 146.7, top: 234.7, width: 157.2, height: 45.6 } }));
    keys.push(h('button', { key: 'go', className: 'sr-key', 'aria-label': 'Search', onClick: () => onKey('go'), style: { left: 350.8, top: 234.7, width: 55.1, height: 45.6 } }));
    return h('div', { className: 'sr-kbd', onMouseDown: (e) => e.preventDefault() }, h('img', { src: A + 'keyboard.jpg', alt: 'Keyboard' }), keys);
  }

  const Row = ({ name, q, plain, onPick }) => {
    const i = q ? name.toLowerCase().indexOf(q.toLowerCase()) : -1;
    const label = i >= 0 ? [name.slice(0, i), h('mark', { key: 'm' }, name.slice(i, i + q.length)), name.slice(i + q.length)] : name;
    return h('button', { className: 'sr-row' + (plain ? ' sr-row--plain' : ''), onClick: () => onPick(name) }, h('img', { src: A + 'ic-city.png', alt: '' }), h('span', null, label));
  };
  const Head = (t, first) => h('div', { className: 'sr-h', style: first ? { height: 74.85, alignItems: 'flex-start', paddingTop: 34.4 } : { height: 67, alignItems: 'flex-start', paddingTop: 27 } }, t);

  function LocationSearch({ mode, s, set, go }) {
    const origin = mode === 'origin';
    const [q, setQ] = useState('');
    const [kbd, setKbd] = useState(true);
    const inp = useRef(null);
    useEffect(() => { inp.current && inp.current.focus({ preventScroll: true }); }, []);
    const pick = (name) => {
      if (origin) { set({ origin: name }); go('loc-dest'); }
      else { set({ dest: name }); go('home', { sheet: 'date' }); }
    };
    const from = s.origin || 'Bengaluru';
    const dests = (from === 'Bengaluru' ? FROM_BLR : POPULAR).filter((c) => c !== from);
    const matches = q.trim() ? ALL.filter((c) => c.toLowerCase().includes(q.trim().toLowerCase()) && (origin || c !== from)) : null;
    const onKey = (k) => {
      if (k === 'del') setQ((x) => x.slice(0, -1));
      else if (k === 'go') { if (matches && matches.length) pick(matches[0]); }
      else setQ((x) => (x + k).replace(/^\s+/, '').replace(/^./, (c) => c.toUpperCase()));
    };
    return h('div', { className: 'pd' },
      h('img', { className: 'pd-status', src: A + 'statusbar.png', alt: '', style: { mixBlendMode: 'normal' } }),
      h('div', { className: 'sr-pill' },
        h('button', { 'aria-label': 'Back', onClick: () => go('home'), style: { position: 'absolute', left: 8, top: 11.5, width: 40, height: 40 } },
          h('img', { src: A + 'ic-back.png', alt: '', style: { position: 'absolute', left: 8.2, top: 9.4, width: 21.7, height: 21 } })),
        h('input', { ref: inp, value: q, placeholder: origin ? 'Search boarding point' : 'Search dropping point', onChange: (e) => setQ(e.target.value), onFocus: () => setKbd(true),
          onKeyDown: (e) => { if (e.key === 'Enter' && matches && matches.length) pick(matches[0]); } })),
      h('div', { className: 'sr-list' + (kbd ? '' : ' sr-list--full') },
        matches
          ? (matches.length ? h('div', { style: { paddingTop: 8 } }, matches.map((c) => h(Row, { key: c, name: c, q: q.trim(), onPick: pick }))) : h('p', { className: 'sr-empty' }, 'No matching city found'))
          : origin
            ? [Head('Recent searches', true), h(Row, { key: 'r', name: 'Bengaluru', plain: true, onPick: pick }), Head('Popular cities'), POPULAR.map((c) => h(Row, { key: c, name: c, onPick: pick }))]
            : [Head('Popular destinations from ' + from, true), dests.map((c) => h(Row, { key: c, name: c, onPick: pick }))]),
      kbd && h(Keyboard, { onKey }),
      kbd && h('button', { 'aria-label': 'Hide keyboard', onClick: () => { setKbd(false); inp.current && inp.current.blur(); }, style: { position: 'absolute', left: 18, top: 868, width: 42, height: 32, zIndex: 6 } }),
      h('i', { className: 'pd-gesture', style: { zIndex: 6 } }));
  }

  /* ---------- date sheet (opens over home) ---------- */
  const TODAY = new Date(2026, 9, 7);
  const MONTHS = [[2026, 9], [2026, 10], [2026, 11], [2027, 0]];
  const keyOf = (y, mo, d) => ((y - 2026) * 12 + mo - 6) + '-' + d;
  const COLX = (i) => 41 + i * 54.9; /* day grid differs from the weekday header grid in production */

  function DateSheet({ s, set, nested }) {
    const close = () => set({ sheet: null });
    let y = 35.5;
    const blocks = MONTHS.map(([yr, mo]) => {
      const title = y;
      const first = (new Date(yr, mo, 1).getDay() + 6) % 7;
      const days = new Date(yr, mo + 1, 0).getDate();
      const rows = Math.ceil((first + days) / 7);
      const cells = [];
      for (let d = 1; d <= days; d++) {
        const idx = first + d - 1, col = idx % 7, row = Math.floor(idx / 7);
        const dt = new Date(yr, mo, d), past = dt < TODAY, k = keyOf(yr, mo, d), on = s.dateKey === k;
        cells.push(h('button', { key: d, className: 'ds-day' + (past ? ' ds-day--past' : on ? ' ds-day--on' : col > 4 ? ' ds-day--we' : ''), disabled: past,
          style: { left: COLX(col), top: title + 53.8 + row * 67 }, onClick: () => set({ dateKey: k, sheet: null }) }, d));
      }
      y = title + 53.8 + (rows - 1) * 67 + 82;
      return h('div', { key: yr + '-' + mo, className: 'ds-month' },
        h('h4', { style: { top: title - 11 } }, new Date(yr, mo, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })), cells);
    });
    return h('div', { className: nested ? '' : 'pd', style: nested ? { position: 'absolute', inset: 0, zIndex: 60 } : { background: 'transparent', zIndex: 60 } },
      h('div', { className: 'ds-scrim', onClick: close }),
      h('div', { className: 'ds-sheet' },
        h('p', { className: 'a', style: { left: 18.7, top: 32, lineHeight: '28px', fontWeight: 700, fontSize: 22, letterSpacing: '-.3px' } }, 'Select Date'),
        h('button', { 'aria-label': 'Close', onClick: close, style: { position: 'absolute', left: 359, top: 26, width: 40, height: 40 } }, h('img', { src: A + 'ic-close.png', alt: '', style: { position: 'absolute', left: 9, top: 8.55, width: 22.1, height: 22.9 } })),
        h('div', { className: 'ds-week' }, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => h('span', { key: d }, d))),
        h('div', { className: 'ds-body' }, h('div', { style: { position: 'relative', height: y } }, blocks))),
      h('i', { className: 'pd-gesture', style: { zIndex: 42 } }));
  }

  window.SEARCH = { LocationSearch, DateSheet, Keyboard, POPULAR, FROM_BLR, ALL, TODAY, keyOf, todayKey: keyOf(2026, 9, 7), tomorrowKey: keyOf(2026, 9, 8) };
})();
