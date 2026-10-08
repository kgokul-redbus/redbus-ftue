/* SOL-17 · integrated search layer (Airbnb-style).
   Problem: too many taps between first touching the search widget and reaching SRP.
   Solve: any tap on the widget opens one focused layer over a frosted home. Steps run From → To → When → Review;
   each pick confirms, collapses to a one-line summary and opens the next step, so the user never lands back on home
   mid-search. Review keeps "Booking for woman" in view before Search (see SOL-18). */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef, Fragment } = React;
  const SA = 'assets/search/';
  const STATE = { Bengaluru: 'Karnataka', Hyderabad: 'Telangana', Chennai: 'Tamil Nadu', Pune: 'Maharashtra', Mumbai: 'Maharashtra', Delhi: 'Delhi NCR', Coimbatore: 'Tamil Nadu', Vijayawada: 'Andhra Pradesh', Tirupati: 'Andhra Pradesh', Madurai: 'Tamil Nadu', Mangaluru: 'Karnataka', Goa: 'Goa', Visakhapatnam: 'Andhra Pradesh', Kochi: 'Kerala', Mysuru: 'Karnataka', Hubballi: 'Karnataka', Belagavi: 'Karnataka', Salem: 'Tamil Nadu', Trichy: 'Tamil Nadu', Pondicherry: 'Puducherry', Kolar: 'Karnataka', Davanagere: 'Karnataka', Shivamogga: 'Karnataka', Udupi: 'Karnataka', Ahmedabad: 'Gujarat', Jaipur: 'Rajasthan', Indore: 'Madhya Pradesh', Nagpur: 'Maharashtra', Kolkata: 'West Bengal', 'Ganganagar (Sri Ganganagar)': 'Rajasthan' };
  const MONTHS = [[2026, 9], [2026, 10], [2026, 11]];

  /* Rubicon Ions icons */
  const I = (name, size) => h(window.IndiaBusDS.Icon, { name, size });
  const Ico = {
    close: I('ion-close'), search: I('ion-search'), back: I('ion-arrow-back'),
    x: h('span', null, I('ion-close', 'sm')), loc: I('ion-location'), city: I('ion-location'), check: I('ion-check', 'sm'),
    swap: I('ion-swap', 'sm'), calendar: I('ion-calendar'),
  };


  const dateOf = (key) => { const [m, d] = key.split('-').map(Number); return new Date(2026, 6 + m, d); };
  const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dm = (dt) => dt.getDate() + ' ' + MO[dt.getMonth()];
  const fmt = (key) => {
    const S = window.SEARCH, dt = dateOf(key);
    return (key === S.todayKey ? 'Today' : key === S.tomorrowKey ? 'Tomorrow' : WD[dt.getDay()]) + ', ' + dm(dt);
  };

  function Status() {
    const HA = window.FUNNEL.HA;
    return h('div', { className: 'hp-status sx-status' },
      h('p', { className: 'hp-status__time' }, '9:30'),
      h('img', { className: 'hp-status__cam', src: HA + 'sb-camera.png', width: 24, height: 24, alt: '' }),
      h('img', { src: HA + 'sb-battery.svg', style: { right: 24, top: 14, width: 8, height: 15 }, alt: '' }),
      h('img', { src: HA + 'sb-path.svg', style: { right: 53, top: 13, width: 17, height: 17 }, alt: '' }),
      h('img', { src: HA + 'sb-path1.svg', style: { right: 53, top: 14.42, width: 17, height: 14.167 }, alt: '' }),
      h('img', { src: HA + 'sb-path.svg', style: { right: 37, top: 13, width: 17, height: 17 }, alt: '' }),
      h('img', { src: HA + 'sb-path2.svg', style: { right: 38.42, top: 14.42, width: 14.167, height: 14.167 }, alt: '' }));
  }

  function Hi({ name, q }) {
    const i = q ? name.toLowerCase().indexOf(q.toLowerCase()) : -1;
    return i < 0 ? name : [name.slice(0, i), h('mark', { key: 'm' }, name.slice(i, i + q.length)), name.slice(i + q.length)];
  }

  function CityList({ items, q, cur, picked, onPick, sections }) {
    let j = 0;
    const row = (c, sub, tile) => h('button', { key: c + (sub || ''), className: 'sx-city' + (picked === c ? ' picked' : ''), style: { '--j': j++ }, onClick: () => onPick(c) },
      h('span', { className: 'tile' + (tile === 'loc' ? ' tile--loc' : '') }, tile === 'loc' ? Ico.loc : Ico.city),
      h('span', null, h('b', null, h(Hi, { name: c, q })), h('small', null, sub || STATE[c] || 'India')),
      h('i', { className: 'chk' }, Ico.check));
    if (q) return items.length ? items.map((c) => row(c)) : h('p', { className: 'sx-empty' }, 'No city matches “' + q + '”');
    return sections.map(([title, list]) => h(Fragment, { key: title }, h('p', { className: 'sx-sec' }, title), list.map(([c, sub, tile]) => row(c, sub, tile))));
  }

  function Calendar({ value, onPick }) {
    const S = window.SEARCH;
    return h('div', null, MONTHS.map(([y, mo]) => {
      const first = (new Date(y, mo, 1).getDay() + 6) % 7, n = new Date(y, mo + 1, 0).getDate(), cells = [];
      for (let i = 0; i < first; i++) cells.push(h('i', { key: 'b' + i }));
      for (let d = 1; d <= n; d++) {
        const dt = new Date(y, mo, d), k = S.keyOf(y, mo, d), past = dt < S.TODAY, col = (first + d - 1) % 7;
        cells.push(h('button', { key: d, disabled: past, 'aria-pressed': value === k, 'aria-label': dt.toDateString(),
          className: 'sx-day' + (past ? ' past' : '') + (value === k ? ' on' : '') + (col > 4 && !past ? ' we' : '') + (k === S.todayKey ? ' today' : ''), onClick: () => onPick(k) }, h('span', null, d)));
      }
      return h('div', { key: mo, className: 'sx-month' }, h('h4', null, new Date(y, mo, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })), h('div', { className: 'sx-days' }, cells));
    }));
  }

  /* one row of dates: most trips are booked within 48 hours, so the next fortnight is a swipe away and the rest sit behind "More dates" */
  function DateStrip({ value, onPick, cal, onMore }) {
    const S = window.SEARCH, ref = useRef(null);
    const days = [];
    for (let i = 0; i < 30; i++) { const dt = new Date(2026, 9, 7 + i); days.push([S.keyOf(dt.getFullYear(), dt.getMonth(), dt.getDate()), dt, i]); }
    useEffect(() => { const el = ref.current && ref.current.querySelector('.on'); if (el) ref.current.scrollLeft = Math.max(0, el.offsetLeft - 20 - 68); }, []);
    return h('div', { className: 'sx-strip', ref, role: 'listbox', 'aria-label': 'Travel date' },
      days.map(([k, dt, i]) => h('button', { key: k, role: 'option', 'aria-selected': value === k, style: { '--j': Math.min(i, 6) },
        className: 'sx-dchip' + (value === k ? ' on' : '') + (dt.getDay() % 6 === 0 ? ' we' : ''), onClick: () => onPick(k) },
        h('small', null, i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : WD[dt.getDay()]),
        h('b', null, dt.getDate()),
        h('small', null, MO[dt.getMonth()]))),
      h('button', { key: 'more', className: 'sx-dchip sx-dchip--more' + (cal ? ' on' : ''), 'aria-expanded': cal, onClick: onMore, style: { '--j': 6 } },
        h(window.IndiaBusDS.Icon, { name: 'ion-calendar' }),
        h('small', null, cal ? 'Hide' : 'More dates')));
  }

  function SearchLayer({ s, set, go, step: initial, onClose }) {
    const S = window.SEARCH;
    const [step, setStep] = useState(initial);
    const [typing, setTyping] = useState(false);
    const [q, setQ] = useState('');
    const [picked, setPicked] = useState(null);
    const [out, setOut] = useState(false);
    const [spin, setSpin] = useState(0);
    const [readyPulse, setReadyPulse] = useState(0);
    const [cal, setCal] = useState(false);
    const [cleared, setCleared] = useState(false);
    /* scroll-linked expansion (Airbnb): p goes 0 → 1 over the first 140px of list scroll */
    const [p, setP] = useState(0);
    const raf = useRef(0), listRef = useRef(null);
    const onListScroll = (e) => { const v = Math.min(1, Math.max(0, e.currentTarget.scrollTop / 140)); cancelAnimationFrame(raf.current); raf.current = requestAnimationFrame(() => setP(v)); };
    const inp = useRef(null);
    const timer = useRef(null);
    const canSearch = !!(s.origin && s.dest);
    const wasReady = useRef(canSearch);
    useEffect(() => { if (canSearch && !wasReady.current) setReadyPulse((x) => x + 1); wasReady.current = canSearch; }, [canSearch]);
    useEffect(() => () => clearTimeout(timer.current), []);
    useEffect(() => { const f = (e) => { if (e.key === 'Escape') (typing ? stopTyping() : close()); }; window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f); });

    const goStep = (st) => { setStep(st); setQ(''); setTyping(false); setPicked(null); setCal(false); setP(0); };
    const close = (then) => { setOut(true); timer.current = setTimeout(() => (then ? then() : onClose()), 190); };
    const stopTyping = () => { setTyping(false); setQ(''); inp.current && inp.current.blur(); };
    const advance = (next) => { timer.current = setTimeout(() => goStep(next), 280); };

    const pickCity = (c) => {
      setPicked(c); setCleared(false);
      if (step === 'from') { set(c === s.dest ? { origin: c, dest: '' } : { origin: c }); advance(s.dest && c !== s.dest ? 'when' : 'to'); }
      else { set(c === s.origin ? { dest: c, origin: '' } : { dest: c }); advance(s.origin && c !== s.origin ? 'when' : 'from'); }
    };
    const pickDate = (k) => { set({ dateKey: k }); advance('review'); };
    const search = () => canSearch && close(() => { onClose(); go('srp'); });
    const clear = () => { set({ origin: '', dest: '', dateKey: S.todayKey, women: false }); goStep('from'); };
    const swap = () => { setSpin((x) => x + 180); set({ origin: s.dest, dest: s.origin }); };

    const from = s.origin || '';
    const isFrom = step === 'from';
    const pool = isFrom ? S.ALL : S.ALL.filter((c) => c !== from);
    const matches = q.trim() ? pool.filter((c) => c.toLowerCase().includes(q.trim().toLowerCase())) : [];
    const popFrom = S.POPULAR.filter((c) => c !== 'Bengaluru');
    const popTo = (from === 'Bengaluru' || !from ? S.FROM_BLR : S.POPULAR).filter((c) => c !== from);
    const sections = isFrom
      ? [['Near you', [['Bengaluru', 'Based on your location', 'loc']]], ['Popular cities', popFrom.map((c) => [c])], ['More cities', S.ALL.filter((c) => c !== 'Bengaluru' && !popFrom.includes(c)).map((c) => [c])]]
      : [['Popular from ' + (from || 'your city'), popTo.map((c) => [c])], ['More destinations', S.ALL.filter((c) => c !== from && !popTo.includes(c)).map((c) => [c])]];
    const onKey = (k) => {
      if (k === 'del') setQ((x) => x.slice(0, -1));
      else if (k === 'go') { if (matches.length) pickCity(matches[0]); }
      else setQ((x) => (x + k).replace(/^\s+/, '').replace(/^./, (c) => c.toUpperCase()));
    };

    const cityBody = (id, title, ph) => h('div', { className: 'sx-body' },
      h('p', { className: 'sx-title' }, title),
      h('label', { className: 'sx-input' },
        typing || p > 0.6
          ? h('button', { className: 'sx-back', 'aria-label': 'Back', onClick: (e) => { e.preventDefault(); if (typing) stopTyping(); else if (listRef.current) listRef.current.scrollTo({ top: 0, behavior: 'smooth' }); } }, Ico.back)
          : h('span', { className: 'ic' }, Ico.search),
        h('input', { ref: inp, value: q, placeholder: ph, 'aria-label': ph, onFocus: () => setTyping(true), onChange: (e) => setQ(e.target.value), onKeyDown: (e) => { if (e.key === 'Enter' && matches.length) pickCity(matches[0]); } }),
        h('button', { className: 'clr' + (q ? ' on' : ''), 'aria-label': 'Clear', tabIndex: q ? 0 : -1, onClick: (e) => { e.preventDefault(); setQ(''); inp.current && inp.current.focus(); } }, Ico.x)),
      h('div', { className: 'sx-scroll', key: step + (q ? 'q' : ''), ref: step === id ? listRef : null, onScroll: step === id ? onListScroll : null }, h(CityList, { items: matches, q: q.trim(), cur: isFrom ? s.origin : s.dest, picked, onPick: pickCity, sections })));

    const card = (id, i, label, value, empty, body, basis, mod) => h('div', { key: id, className: 'sx-card' + (step === id ? ' open' : '') + (mod ? ' ' + mod : ''), style: Object.assign({ '--i': i }, basis ? { '--b': basis + 'px' } : null) },
      h('button', { className: 'sx-row', onClick: () => goStep(id), 'aria-label': label + ': ' + (value || empty) }, h('span', null, label), h('b', { key: value || 'e', className: value ? '' : 'empty' }, value || empty)),
      body);

    const swapTop = 104 + 56 + 5;
    const pp = typing || (step !== 'from' && step !== 'to') ? 0 : p;
    return h('div', { className: 'sx' + (typing ? ' sx--typing' : '') + (out ? ' sx--out' : '') + (pp > 0 ? ' sx--pull' : ''), style: { '--p': pp }, role: 'dialog', 'aria-modal': true, 'aria-label': 'Search buses' },
      h('div', { className: 'sx-bg' }),
      h(Status),
      h('div', { className: 'sx-head' }, h('h2', null, 'Search buses')),
      /* testing aid: first tap clears the search, the next tap closes */
      h('button', { className: 'sx-close', 'aria-label': cleared || (!s.origin && !s.dest) ? 'Close search' : 'Clear search', onClick: () => { if (!cleared && (s.origin || s.dest)) { clear(); setCleared(true); } else close(); } }, Ico.close),
      h('div', { className: 'sx-stack' },
        card('from', 0, 'From', s.origin, 'Add city', cityBody('from', 'From', 'Search city or bus stop')),
        card('to', 1, 'To', s.dest, 'Add destination', cityBody('to', 'To', 'Search destination')),
        card('when', 2, 'When', fmt(s.dateKey), 'Add date', h('div', { className: 'sx-body' },
          h('p', { className: 'sx-title' }, 'When'),
          h(DateStrip, { value: s.dateKey, onPick: pickDate, cal, onMore: () => setCal(!cal) }),
          cal && h(Fragment, null,
            h('div', { className: 'sx-week' }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => h('span', { key: i }, d))),
            h('div', { className: 'sx-scroll' }, h(Calendar, { value: s.dateKey, onPick: pickDate })))), null, step === 'when' && !cal ? 'fit' : null),
        h('div', { key: 'w', className: 'sx-card', style: { '--i': 3, '--b': '100px' } },
          h('div', { className: 'sx-row sx-women' },
            h('img', { className: 'sx-rich', src: 'assets/sol/ic-women-mode.svg', alt: '' }),
            h('div', { className: 't' }, h('span', null, 'Women mode'), h('small', null, 'Experience tailored for women travellers'), h('a', { href: '#', onClick: (e) => e.preventDefault() }, 'Know more')),
            h('button', { className: 'sx-sw' + (s.women ? ' on' : ''), role: 'switch', 'aria-checked': !!s.women, 'aria-label': 'Women mode', onClick: () => set({ women: !s.women }) }, h('i'))))),
      !typing && (step === 'when' || step === 'review') && s.origin && s.dest && h('button', { className: 'sx-swap', 'aria-label': 'Swap From and To', onClick: swap, style: { top: swapTop, transform: 'rotate(' + spin + 'deg)' } }, Ico.swap),
      h('div', { className: 'sx-foot' },
        h('button', { key: 'go' + readyPulse, className: 'sx-go' + (readyPulse ? ' ready' : ''), disabled: !canSearch, onClick: search }, Ico.search, 'Search buses')),
      typing && h('div', { className: 'sx-kbd' }, h('div', null, h(S.Keyboard, { onKey }))));
  }

  /* proposed home: the Figma home with SOL-18 tabs, and every widget field opening the search layer */
  function HomeSol17(p) {
    const [layer, setLayer] = useState(null);
    return h(Fragment, null,
      h(window.FUNNEL.Home, Object.assign({}, p, { quickTabs: true, onField: (step) => setLayer(step) })),
      layer && h(SearchLayer, { s: p.s, set: p.set, go: p.go, step: layer, onClose: () => setLayer(null) }));
  }

  window.SOL17 = { HomeSol17, SearchLayer, parts: { Status, CityList, DateStrip, Calendar, Ico, fmt, STATE } };
})();
