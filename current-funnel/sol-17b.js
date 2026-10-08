/* SOL-17 · Option B — full search page (middle ground).
   Tapping any home field opens one page with From and To joined at the top. The list below suggests for the active field;
   picking a source glides the focus to To, picking a destination swaps the list for the date row, and picking a date returns
   to home, where the user sets women mode and searches. Reuses Option A's parts (sol-17.js) so both options stay consistent. */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef, Fragment } = React;
  const I = (name, size) => h(window.IndiaBusDS.Icon, { name, size });

  function SearchPage({ s, set, go, step: initial, onDone, onBack }) {
    const S = window.SEARCH, P = window.SOL17.parts, HA = window.FUNNEL.HA;
    const [active, setActive] = useState(initial);            // 'from' | 'to' | 'date'
    const [typing, setTyping] = useState(false);
    const [q, setQ] = useState('');
    const [picked, setPicked] = useState(null);
    const [cal, setCal] = useState(false);
    const [out, setOut] = useState(false);
    const [spin, setSpin] = useState(0);
    const inp = useRef(null), timer = useRef(null);
    useEffect(() => () => clearTimeout(timer.current), []);
    useEffect(() => { const f = (e) => { if (e.key === 'Escape') (typing ? stopTyping() : leave(onBack)); }; window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f); });
    useEffect(() => { if (typing && inp.current) inp.current.focus({ preventScroll: true }); }, [typing, active]);

    const leave = (then) => { setOut(true); timer.current = setTimeout(then, 260); };
    const stopTyping = () => { setTyping(false); setQ(''); inp.current && inp.current.blur(); };
    const focusField = (f) => { if (f === active && f !== 'date') setTyping(true); else { setActive(f); setTyping(false); setQ(''); setPicked(null); setCal(false); } };

    const pickCity = (c) => {
      setPicked(c);
      const isFrom = active === 'from';
      if (isFrom) set(c === s.dest ? { origin: c, dest: '' } : { origin: c });
      else set(c === s.origin ? { dest: c, origin: '' } : { dest: c });
      timer.current = setTimeout(() => { setPicked(null); setQ(''); setTyping(false); setActive(isFrom ? 'to' : (c === s.origin ? 'from' : 'date')); }, 260);
    };
    /* a date only selects; the Search button below starts the search (today is preselected, so a tap-to-search date would be invisible) */
    const [pulse, setPulse] = useState(0);
    const pickDate = (k) => { set({ dateKey: k }); setPulse((x) => x + 1); };
    const canSearch = !!(s.origin && s.dest);
    const search = () => canSearch && leave(() => { onBack(); go('srp'); });
    const swap = () => { setSpin((x) => x + 180); set({ origin: s.dest, dest: s.origin }); };

    const from = s.origin || '';
    const isFrom = active === 'from';
    const pool = isFrom ? S.ALL : S.ALL.filter((c) => c !== from);
    const matches = q.trim() ? pool.filter((c) => c.toLowerCase().includes(q.trim().toLowerCase())) : [];
    const sections = isFrom
      ? [['Near you', [['Bengaluru', 'Based on your location', 'loc']]], ['Popular cities', S.POPULAR.filter((c) => c !== 'Bengaluru').map((c) => [c])]]
      : [['Popular from ' + (from || 'your city'), (from === 'Bengaluru' || !from ? S.FROM_BLR : S.POPULAR).filter((c) => c !== from).map((c) => [c])]];
    const onKey = (k) => {
      if (k === 'del') setQ((x) => x.slice(0, -1));
      else if (k === 'go') { if (matches.length) pickCity(matches[0]); }
      else setQ((x) => (x + k).replace(/^\s+/, '').replace(/^./, (c) => c.toUpperCase()));
    };

    const field = (f, label, icon, value, ph) => {
      const on = active === f;
      return h('div', { className: 'sb-field' + (on ? ' on' : ''), onClick: () => focusField(f) },
        h('img', { src: HA + icon, alt: '', className: 'sb-fic' }),
        h('div', { className: 'sb-fbody' },
          h('span', { className: 'sb-flabel' }, label),
          on && typing
            ? h('input', { ref: inp, value: q, placeholder: value || ph, 'aria-label': label, onChange: (e) => setQ(e.target.value), onKeyDown: (e) => { if (e.key === 'Enter' && matches.length) pickCity(matches[0]); } })
            : h('b', { key: value || 'e', className: value ? '' : 'ph' }, value || ph, on && h('i', { className: 'sb-caret' }))),
        on && typing && q && h('button', { className: 'sb-clr', 'aria-label': 'Clear', onClick: (e) => { e.stopPropagation(); setQ(''); } }, h('span', null, I('ion-close', 'sm'))));
    };

    return h('div', { className: 'sx sb' + (out ? ' sb--out' : '') + (typing ? ' sb--typing' : ''), role: 'dialog', 'aria-modal': true, 'aria-label': 'Search buses' },
      h('div', { className: 'sb-page' },
        h(P.Status),
        h('div', { className: 'sb-bar' },
          h('button', { className: 'sb-back', 'aria-label': 'Back', onClick: () => (typing ? stopTyping() : leave(onBack)) }, I('ion-arrow-back')),
          h('h2', null, 'Search buses')),
        h('div', { className: 'sb-fields' },
          h('i', { className: 'sb-ring', style: { transform: 'translateY(' + (active === 'to' ? 64 : 0) + 'px)', opacity: active === 'date' ? 0 : 1 } }),
          field('from', 'From', 'ic-boarding-point.svg', s.origin, 'Where are you leaving from?'),
          h('i', { className: 'sb-div' }),
          field('to', 'To', 'ic-dropping-point.svg', s.dest, 'Where are you going?'),
          s.origin && s.dest && h('button', { className: 'sb-swap', 'aria-label': 'Swap From and To', onClick: (e) => { e.stopPropagation(); swap(); }, style: { transform: 'rotate(' + spin + 'deg)' } }, I('ion-swap', 'sm'))),
        active === 'date'
          ? h('div', { className: 'sb-when', key: 'date' },
            h('p', { className: 'sb-h' }, 'When are you travelling?'),
            h(P.DateStrip, { value: s.dateKey, onPick: pickDate, cal, onMore: () => setCal(!cal) }),
            /* women mode arrives with the date, so it is seen before Search */
            h('div', { className: 'sx-card sb-wcard', style: { '--i': 2, '--b': '100px' } },
              h('div', { className: 'sx-row sx-women' },
                h('img', { className: 'sx-rich', src: 'assets/sol/ic-women-mode.svg', alt: '' }),
                h('div', { className: 't' }, h('span', null, 'Women mode'), h('small', null, 'Experience tailored for women travellers'), h('a', { href: '#', onClick: (e) => e.preventDefault() }, 'Know more')),
                h('button', { className: 'sx-sw' + (s.women ? ' on' : ''), role: 'switch', 'aria-checked': !!s.women, 'aria-label': 'Women mode', onClick: () => set({ women: !s.women }) }, h('i')))),
            cal && h('div', { className: 'sb-cal' },
              h('div', { className: 'sx-week' }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => h('span', { key: i }, d))),
              h('div', { className: 'sx-scroll' }, h(P.Calendar, { value: s.dateKey, onPick: pickDate }))))
          : h('div', { className: 'sb-list sx-scroll', key: active + (q ? 'q' : '') },
            h(P.CityList, { items: matches, q: q.trim(), cur: null, picked, onPick: pickCity, sections }))),
      !typing && canSearch && h('div', { className: 'sx-foot sb-foot' }, h('button', { key: 'go' + pulse, className: 'sx-go' + (pulse ? ' ready' : ''), onClick: search }, I('ion-search'), 'Search buses')),
      typing && h('div', { className: 'sx-kbd' }, h('div', null, h(S.Keyboard, { onKey }))));
  }

  /* Option B home: fields open the search page; once a date is picked we return here and point at women mode + Search */
  function HomeSol17B(p) {
    const [page, setPage] = useState(null);
    const [nudge, setNudge] = useState(0);
    useEffect(() => { if (!nudge) return; const t = setTimeout(() => setNudge(0), 2400); return () => clearTimeout(t); }, [nudge]);
    return h('div', { className: 'sb-home' + (nudge ? ' sb-nudge' : '') },
      h(window.FUNNEL.Home, Object.assign({}, p, { quickTabs: true, onField: (step) => setPage(step === 'when' ? 'date' : step) })),
      page && h(SearchPage, { s: p.s, set: p.set, go: p.go, step: page, onBack: () => setPage(null), onDone: () => { setPage(null); setNudge((x) => x + 1); } }));
  }

  window.SOL17B = { HomeSol17B, SearchPage };
})();
