/* Ray on SRP unified · the RAY AI smart filter, docked at the bottom of FTUE's current SRP (srp-fig.js).
   Ported from the "AI smart filter terminal state exploration" prototype (Figma GGXRzzPZFkGNLQpbi7DUEZ,
   filter container 2883:2881): free-text field with mic / send / clear, AI + quick-filter chips that fly into
   the field and filter at once, a simulated keyboard, progressive blur, and the brand-gradient glow.
   Only the RAY part is kept; Home and the SRP are FTUE's current screens. Styles in ray-widget.css. */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef, useCallback, Fragment } = React;
  const KB_HEIGHT = 300;
  const PLACEHOLDER = 'Ask your preference';
  const CHIPS = [
    { id: 'ac-sleeper-700', label: 'AC Sleeper under ₹700', icon: 'ai' },
    { id: 'ac', label: 'AC', icon: 'add' },
    { id: 'sleeper', label: 'Sleeper', icon: 'add' },
    { id: 'single-seat', label: 'Single seat', icon: 'add' },
    { id: 'toilet', label: 'Toilet', icon: 'add' },
  ];

  /* ---------- icons (from the prototype's Figma pulls) ---------- */
  let uid = 0;
  function Sparkle({ size = 16, style }) {
    const [id] = useState(() => 'rw-grad-' + (++uid));
    return h('svg', { width: size, height: size, viewBox: '0 0 21.6722 21.6722', fill: 'none', style: Object.assign({ display: 'block' }, style), 'aria-hidden': true },
      h('path', { d: 'M8.30855 3.97462C8.59324 3.20527 9.68139 3.20527 9.96608 3.97462L12.0543 9.61795L17.6976 11.7062C18.467 11.9909 18.467 13.079 17.6976 13.3637L12.0543 15.4519L9.96608 21.0952C9.6814 21.8646 8.59324 21.8646 8.30855 21.0952L6.22034 15.4519L0.577013 13.3637C-0.192337 13.079 -0.192338 11.9909 0.577012 11.7062L6.22034 9.61795L8.30855 3.97462Z', fill: 'url(#' + id + ')' }),
      h('path', { d: 'M17.2058 0.230805C17.3197 -0.0769352 17.7549 -0.0769347 17.8688 0.230805L18.8338 2.83849L21.4414 3.80342C21.7492 3.9173 21.7492 4.35256 21.4414 4.46643L18.8338 5.43136L17.8688 8.03905C17.7549 8.34679 17.3197 8.34679 17.2058 8.03905L16.2409 5.43136L13.6332 4.46643C13.3255 4.35256 13.3255 3.9173 13.6332 3.80342L16.2409 2.83849L17.2058 0.230805Z', fill: 'url(#' + id + ')' }),
      h('defs', null, h('linearGradient', { id, x1: '-2.2427', y1: '4.817', x2: '22.98', y2: '5.975', gradientUnits: 'userSpaceOnUse' },
        h('stop', { stopColor: '#D63941' }), h('stop', { offset: '1', stopColor: '#7E3AF1' }))));
  }
  const svg = (size, vb, kids) => h('svg', { width: size, height: size, viewBox: vb, fill: 'none', style: { display: 'block' }, 'aria-hidden': true }, kids);
  const Mic = () => svg(20, '0 0 20 20', h('g', { transform: 'translate(4.375 1.667)' },
    h('path', { d: 'M1.25 6.45833V8.125C1.25 10.5412 3.20875 12.5 5.625 12.5C8.04125 12.5 10 10.5412 10 8.125V6.45833H11.25V8.125C11.25 11.0203 9.06247 13.4049 6.25 13.7158V15.4167H8.54167V16.6667H2.70833V15.4167H5V13.7158C2.18753 13.4049 0 11.0203 0 8.125V6.45833H1.25Z', fill: '#1D1D1D' }),
    h('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M5.625 0C7.35089 0 8.75 1.39911 8.75 3.125V8.125C8.75 9.85089 7.35089 11.25 5.625 11.25C3.89911 11.25 2.5 9.85089 2.5 8.125V3.125C2.5 1.39911 3.89911 0 5.625 0ZM5.625 1.25C4.58947 1.25 3.75 2.08947 3.75 3.125V8.125C3.75 9.16053 4.58947 10 5.625 10C6.66053 10 7.5 9.16053 7.5 8.125V3.125C7.5 2.08947 6.66053 1.25 5.625 1.25Z', fill: '#1D1D1D' })));
  const FilterAlt = () => svg(24, '0 0 24 24', h('g', { transform: 'translate(4 18) scale(1 -1)' },
    h('path', { d: 'M0.75 10.5C0.335787 10.5 0 10.8358 0 11.25C0 11.6642 0.335787 12 0.75 12L15.25 12C15.6642 12 16 11.6642 16 11.25C16 10.8358 15.6642 10.5 15.25 10.5L0.75 10.5Z', fill: '#1D1D1D' }),
    h('path', { d: 'M2.875 5.25C2.46079 5.25 2.125 5.58579 2.125 6C2.125 6.41421 2.46079 6.75 2.875 6.75L13.125 6.75C13.5392 6.75 13.875 6.41421 13.875 6C13.875 5.58579 13.5392 5.25 13.125 5.25L2.875 5.25Z', fill: '#1D1D1D' }),
    h('path', { d: 'M5.875 0C5.46079 0 5.125 0.335787 5.125 0.75C5.125 1.16421 5.46079 1.5 5.875 1.5L10.125 1.5C10.5392 1.5 10.875 1.16421 10.875 0.75C10.875 0.335787 10.5392 0 10.125 0L5.875 0Z', fill: '#1D1D1D' })));
  const Plus = () => svg(16, '0 0 16 16', h('g', { transform: 'translate(2.668 2.668)' },
    h('path', { d: 'M5.38281 0.00260417C5.63495 0.0282033 5.83203 0.241112 5.83203 0.5L5.83138 4.83138L10.1634 4.83203C10.4396 4.83203 10.6634 5.05589 10.6634 5.33203C10.6632 5.60802 10.4394 5.83203 10.1634 5.83203L5.83138 5.83138V10.1634C5.83138 10.4396 5.60752 10.6634 5.33138 10.6634C5.05539 10.6632 4.83138 10.4394 4.83138 10.1634V5.83138H0.5C0.223858 5.83138 0 5.60752 0 5.33138C0.000175351 5.05539 0.223966 4.83138 0.5 4.83138H4.83138L4.83203 0.5C4.83203 0.223858 5.05589 0 5.33203 0L5.38281 0.00260417Z', fill: '#1D1D1D' })));
  const ArrowUp = ({ color = '#fff' }) => svg(20, '0 0 20 20', h('path', { d: 'M10 15.5V5M10 5l-4.5 4.5M10 5l4.5 4.5', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  const Close = () => svg(18, '0 0 18 18', h('path', { d: 'M4.5 4.5l9 9M13.5 4.5l-9 9', stroke: '#1D1D1D', strokeWidth: 1.8, strokeLinecap: 'round' }));
  const Backspace = () => svg(22, '0 0 24 24', [
    h('path', { key: 1, d: 'M8.2 5h11.3A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19H8.2a1.5 1.5 0 0 1-1.14-.52l-4.2-4.9a1 1 0 0 1 0-1.3l4.2-4.76A1.5 1.5 0 0 1 8.2 5Z', stroke: '#1D1D1D', strokeWidth: 1.5, strokeLinejoin: 'round' }),
    h('path', { key: 2, d: 'M11 9.5l5 5M16 9.5l-5 5', stroke: '#1D1D1D', strokeWidth: 1.5, strokeLinecap: 'round' })]);
  const Shift = ({ filled }) => svg(20, '0 0 22 22', h('path', { d: 'M11 3.5l6.5 7H14v5.5H8V10.5H4.5L11 3.5Z', stroke: '#1D1D1D', strokeWidth: 1.6, strokeLinejoin: 'round', fill: filled ? '#1D1D1D' : 'none' }));

  /* ---------- simulated keyboard (letters / symbols, shift, space, send) ---------- */
  const NUM_ROW = '1234567890'.split('');
  const LETTERS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].map((r) => r.split(''));
  const SYMBOLS = [NUM_ROW, ['-', '/', ':', ';', '(', ')', '₹', '&', '@', '"'], ['.', ',', '?', '!', "'"]];
  function Keyboard({ visible, onKey, onBackspace, onSend, canSend }) {
    const [shift, setShift] = useState(true);
    const [page, setPage] = useState('letters');
    const type = (k) => { onKey(shift && page === 'letters' ? k.toUpperCase() : k); if (shift && page === 'letters') setShift(false); };
    const key = (k, cls, fn, label) => h('button', { key: k, className: 'kb-key' + (cls ? ' ' + cls : ''), onClick: fn }, label || k);
    const bs = h('button', { key: 'bs', className: 'kb-key kb-key--fn kb-key--wide', onClick: onBackspace, 'aria-label': 'Backspace' }, h(Backspace));
    return h('div', { className: 'kb' + (visible ? ' kb--up' : ''), 'aria-hidden': !visible, onMouseDown: (e) => e.preventDefault() },
      page === 'letters'
        ? h(Fragment, null,
          h('div', { className: 'kb-row' }, NUM_ROW.map((k) => key(k, 'kb-key--sm', () => onKey(k)))),
          h('div', { className: 'kb-row' }, LETTERS[0].map((k) => key(k, '', () => type(k), shift ? k.toUpperCase() : k))),
          h('div', { className: 'kb-row kb-row--indent' }, LETTERS[1].map((k) => key(k, '', () => type(k), shift ? k.toUpperCase() : k))),
          h('div', { className: 'kb-row' },
            h('button', { className: 'kb-key kb-key--fn kb-key--wide' + (shift ? ' kb-key--active' : ''), onClick: () => setShift((x) => !x), 'aria-label': 'Shift' }, h(Shift, { filled: shift })),
            LETTERS[2].map((k) => key(k, '', () => type(k), shift ? k.toUpperCase() : k)), bs))
        : h(Fragment, null,
          h('div', { className: 'kb-row' }, SYMBOLS[0].map((k) => key(k, 'kb-key--sm', () => onKey(k)))),
          h('div', { className: 'kb-row' }, SYMBOLS[1].map((k) => key(k, 'kb-key--sm', () => onKey(k)))),
          h('div', { className: 'kb-row' },
            h('button', { className: 'kb-key kb-key--fn kb-key--wide', onClick: () => setPage('letters') }, '#+='),
            SYMBOLS[2].map((k) => key(k, '', () => onKey(k))), bs)),
      h('div', { className: 'kb-row kb-row--bottom' },
        h('button', { className: 'kb-key kb-key--fn', onClick: () => setPage((x) => (x === 'letters' ? 'symbols' : 'letters')) }, page === 'letters' ? '?123' : 'ABC'),
        h('button', { className: 'kb-key kb-key--space', onClick: () => onKey(' ') }, 'space'),
        h('button', { className: 'kb-key kb-key--send' + (canSend ? ' kb-key--send-on' : ''), onClick: () => canSend && onSend(), 'aria-label': 'Send' }, h(ArrowUp, { color: canSend ? '#fff' : 'rgba(29,29,29,0.35)' }))));
  }

  /* ---------- the filter widget ---------- */
  function FilterWidget(p) {
    const draft = !p.typing && !p.applied && p.prompt.length > 0;
    const showSend = (p.typing && p.prompt.length > 0) || draft;
    const inUse = p.typing || draft;
    const cls = 'fw' + (p.reveal ? ' fw--reveal' : '') + (p.typing ? ' fw--typing' : '') + (p.glow ? ' fw--glow' : '') + (inUse ? ' fw--inuse' : '');
    const trailing = showSend
      ? h('span', { className: 'fw-send fw-send--on', role: 'button', 'aria-label': 'Send', onClick: (e) => { e.stopPropagation(); p.onSend(); } }, h(ArrowUp))
      : !p.typing && p.applied
        ? h('span', { className: 'fw-clear', role: 'button', 'aria-label': 'Clear', onClick: (e) => { e.stopPropagation(); p.onClear(); } }, h(Close))
        : h('span', { className: 'fw-mic', role: 'button', 'aria-label': 'Voice', onClick: (e) => e.stopPropagation() }, h(Mic));
    return h('div', { className: cls, style: { bottom: p.typing ? KB_HEIGHT : 0 } },
      h('div', { className: 'fw-blur', 'aria-hidden': true }, [0, 1, 2, 3, 4, 5].map((k) => h('div', { key: k }))),
      h('div', { className: 'fw-tint', 'aria-hidden': true }),
      h('div', { className: 'fw-highlight', 'aria-hidden': true }),
      h('div', { className: 'fw-content' },
        h('div', { className: 'fw-ai' },
          h('div', { className: 'fw-field-wrap' },
            h('div', { className: 'fw-field', onClick: p.onFieldClick },
              h('span', { className: 'fw-field-lead' },
                h(Sparkle, { size: 24 }),
                p.typing
                  ? h('input', {
                    ref: p.inputRef, className: 'fw-input t-body-r', value: p.prompt, inputMode: 'none', autoFocus: true, spellCheck: false, autoComplete: 'off', 'aria-label': PLACEHOLDER,
                    onChange: (e) => p.onChangeText(e.target.value),
                    onKeyDown: (e) => { if (e.key === 'Enter') { e.preventDefault(); p.onSend(); } else if (e.key === 'Escape') { e.preventDefault(); p.onCloseKeyboard(); } },
                  })
                  : p.applied || draft
                    ? h('span', { className: 'fw-field-value t-body-r' }, p.applied || p.prompt)
                    : h('span', { className: 'fw-field-placeholder t-body-r' }, p.placeholder, p.phTyping && h('span', { className: 'fw-caret fw-caret--ph' }))),
              trailing))),
        !p.typing && h('div', { className: 'fw-chips' },
          h('button', { className: 'fw-tap', onClick: p.onAllFilters, 'aria-label': 'All filters' }, h('span', { className: 'fw-pill fw-allbtn' }, h(FilterAlt))),
          CHIPS.filter((c) => c.id !== p.usedChipId).map((c) => h('button', { key: c.id, className: 'fw-tap', onClick: (e) => p.onChipClick(c, e) },
            h('span', { className: 'fw-pill fw-chip' }, c.icon === 'ai' ? h(Sparkle, { size: 16 }) : h(Plus), h('span', { className: 'fw-chip-label t-subhead-r' }, c.label)))))));
  }

  const Skeleton = () => h('div', { className: 'rw-sk-card' },
    h('div', { className: 'rw-sk-row' }, h('span', { className: 'rw-sk', style: { width: 104, height: 18 } }), h('span', { className: 'rw-sk', style: { width: 60, height: 18 } })),
    h('span', { className: 'rw-sk', style: { width: 150, height: 20 } }),
    h('span', { className: 'rw-sk', style: { width: '78%', height: 16 } }),
    h('div', { className: 'rw-sk-row' }, h('span', { className: 'rw-sk', style: { width: 96, height: 20, borderRadius: 10 } }), h('span', { className: 'rw-sk', style: { width: 96, height: 20, borderRadius: 10 } })));

  /* ---------- FTUE's current SRP with RAY docked at the bottom ---------- */
  function RaySrp(props) {
    const F = window.SRPFIG;
    const [reveal, setReveal] = useState(false);
    const [typing, setTyping] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [applied, setApplied] = useState(null);
    const [filtering, setFiltering] = useState(false);
    const [glow, setGlow] = useState(false);
    const [typedPh, setTypedPh] = useState('');
    const [phTyping, setPhTyping] = useState(false);
    const [flying, setFlying] = useState(null);
    const [usedChipId, setUsedChipId] = useState(null);
    const inputRef = useRef(null);
    const rootRef = useRef(null);

    /* introduce the widget a beat after the results settle; the placeholder types itself in, once */
    useEffect(() => {
      let i = 0, iv;
      const t = [
        setTimeout(() => { setReveal(true); setGlow(true); }, 900),
        setTimeout(() => setGlow(false), 4700),
        setTimeout(() => { setPhTyping(true); iv = setInterval(() => { i += 1; setTypedPh(PLACEHOLDER.slice(0, i)); if (i >= PLACEHOLDER.length) { clearInterval(iv); t.push(setTimeout(() => setPhTyping(false), 500)); } }, 55); }, 1250),
      ];
      return () => { t.forEach(clearTimeout); clearInterval(iv); };
    }, []);

    const openKeyboard = useCallback(() => { setTyping(true); setPrompt((x) => x || applied || ''); }, [applied]);
    const closeKeyboard = useCallback(() => setTyping(false), []);
    /* on-screen keys drive the real <input>, so cursor, selection and delete behave natively */
    const onKey = useCallback((ch) => { const el = inputRef.current; if (el) { el.focus(); document.execCommand('insertText', false, ch); } else setPrompt((x) => x + ch); }, []);
    const onBackspace = useCallback(() => { const el = inputRef.current; if (el) { el.focus(); document.execCommand('delete', false); } else setPrompt((x) => x.slice(0, -1)); }, []);
    const runFilter = useCallback(() => { setFiltering(true); setGlow(true); setTimeout(() => setFiltering(false), 1600); setTimeout(() => setGlow(false), 2700); }, []);
    const onSend = useCallback(() => setPrompt((x) => { const q = x.trim(); if (!q) return x; setApplied(q); setTyping(false); runFilter(); return q; }), [runFilter]);
    const onClear = useCallback(() => { setApplied(null); setPrompt(''); setUsedChipId(null); }, []);
    /* a chip flies into the field, drops its text there and filters at once (coordinates in the phone's own space) */
    const onChipTap = useCallback((chip, ev) => {
      const apply = () => { setPrompt(chip.label); setApplied(chip.label); runFilter(); };
      const root = rootRef.current, pill = ev.currentTarget.querySelector('.fw-pill'), field = root && root.querySelector('.fw-field');
      if (!root || !pill || !field) { apply(); return; }
      const R = root.getBoundingClientRect(), k = root.offsetWidth / R.width;
      const pr = pill.getBoundingClientRect(), fr = field.getBoundingClientRect();
      const rel = (r) => ({ left: (r.left - R.left) * k, top: (r.top - R.top) * k, height: r.height * k });
      const from = rel(pr), f = rel(fr);
      setUsedChipId(chip.id);
      setFlying({ chip, from, to: { left: f.left + 6, top: f.top + ((fr.height - pr.height) * k) / 2 } });
      setTimeout(apply, 380);
      setTimeout(() => setFlying(null), 440);
    }, [runFilter]);

    /* listings: FTUE's tuples; a RAY result keeps the matching AC sleepers under ₹700 (the first three) */
    const all = F.TUPLES;
    const shown = applied ? all.filter((t) => t.v === 1) : all;
    const list = ({ go }) => h('div', { className: 'sf-list', style: { marginTop: 2 } },
      applied && !filtering && h('p', { className: 'rw-head' },
        h(Sparkle, { size: 16, style: { display: 'inline-block', verticalAlign: '-3px', marginRight: 6 } }),
        'Here are the ', h('b', null, shown.length + ' buses'), ' that best match your preference — ', h('b', null, '“' + applied + '”'), '.'),
      filtering ? [0, 1, 2].map((k) => h(Skeleton, { key: k })) : shown.map((t, k) => h(F.Tuple, { key: k, t, go })),
      h('div', { style: { height: 168 } }));

    return h('div', { ref: rootRef, className: 'rw' + (typing ? ' rw--typing' : '') },
      h(F.SrpFig, Object.assign({}, props, { list })),
      typing && h('div', { className: 'rw-scrim', onClick: closeKeyboard }),
      flying && h('div', { className: 'fw-fly', style: { left: flying.from.left, top: flying.from.top, height: flying.from.height, '--fly-dx': (flying.to.left - flying.from.left) + 'px', '--fly-dy': (flying.to.top - flying.from.top) + 'px' } },
        h('span', { className: 'fw-fly-bg' }),
        h('span', { className: 'fw-fly-ic' }, flying.chip.icon === 'ai' ? h(Sparkle, { size: 16 }) : h(Plus)),
        h('span', { className: 'fw-fly-text t-subhead-r' }, flying.chip.label)),
      h(FilterWidget, {
        reveal, typing, prompt, applied, placeholder: typedPh, phTyping, usedChipId, glow, inputRef,
        onFieldClick: openKeyboard, onSend, onClear, onChipClick: onChipTap, onChangeText: setPrompt, onCloseKeyboard: closeKeyboard,
        onAllFilters: () => props.set({ sheet: 'filter' }),
      }),
      h(Keyboard, { visible: typing, onKey, onBackspace, onSend, canSend: prompt.trim().length > 0 }));
  }

  window.RAYW = { RaySrp };
})();
