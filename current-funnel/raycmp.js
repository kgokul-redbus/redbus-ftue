/* Ray comparison · a separate project in the deck (not FTUE, not Persuasion tags, not Ray on SRP).
   Actionables = the research problems (raycmp-data.js) with a place to write potential solves; no themes.
   Design V1 (tested) = the HTML that was concept-tested, as tested (../ray-compare/tested-prototype.html). Design V2 = a copy of V1 to iterate on (../ray-compare/v2-prototype.html).
   Solves typed on the page are kept in this browser (localStorage). */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef } = React;
  const D = window.RAYCMP_DATA;
  const KEY = 'raycmp-state-v1';
  const pad = (n) => String(n).padStart(2, '0');

  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.solves) return s; } catch (e) {}
    const solves = {}; let next = 1;
    D.PROBLEMS.forEach((p) => { solves[p.id] = p.solves.map((x) => ({ id: 'RC-' + pad(next++), text: x })); });
    return { solves, next };
  }
  const persist = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} };

  const Chev = () => h('svg', { viewBox: '0 0 16 16', width: 14, height: 14, 'aria-hidden': true }, h('path', { d: 'M6 3.5 10.5 8 6 12.5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  const Pencil = () => h('span', { 'aria-hidden': true }, '✎');

  function SolveEditor({ initial, onSave, onCancel }) {
    const [v, setV] = useState(initial || '');
    const ref = useRef(null);
    useEffect(() => { ref.current && ref.current.focus(); }, []);
    const save = () => { const t = v.trim(); if (t) onSave(t); };
    return h('div', { className: 'rcm-edit' },
      h('textarea', { ref, value: v, rows: 3, placeholder: 'Write a potential solve…', 'aria-label': 'Potential solve',
        onChange: (e) => setV(e.target.value),
        onKeyDown: (e) => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); save(); } else if (e.key === 'Escape') onCancel(); } }),
      h('div', { className: 'rcm-edit-foot' },
        h('span', null, (/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘' : 'Ctrl') + '+Return to save · Esc to cancel'),
        h('button', { className: 'rcm-btn', onClick: onCancel }, 'Cancel'),
        h('button', { className: 'rcm-btn rcm-btn--ink', onClick: save, disabled: !v.trim() }, 'Save')));
  }

  function Problem({ p, st, setSolves, open, toggle }) {
    const [edit, setEdit] = useState(null); /* {id} | 'new' */
    const list = st.solves[p.id] || [];
    const add = (text) => setSolves((s) => { const next = s.next + 1; return { solves: Object.assign({}, s.solves, { [p.id]: (s.solves[p.id] || []).concat({ id: 'RC-' + pad(s.next), text }) }), next }; });
    const upd = (id, text) => setSolves((s) => ({ solves: Object.assign({}, s.solves, { [p.id]: s.solves[p.id].map((x) => (x.id === id ? Object.assign({}, x, { text }) : x)) }), next: s.next }));
    const del = (id) => setSolves((s) => ({ solves: Object.assign({}, s.solves, { [p.id]: s.solves[p.id].filter((x) => x.id !== id) }), next: s.next }));
    return h('article', { className: 'rcm-card' + (open ? '' : ' is-folded'), id: 'rc-' + p.id },
      h('div', { className: 'rcm-head', role: 'button', tabIndex: 0, 'aria-expanded': open, onClick: toggle, onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } } },
        h('span', { className: 'rcm-chev' }, h(Chev)),
        h('span', { className: 'rcm-pid' }, p.id),
        h('h3', null, p.title),
        !open && list.length > 0 && h('span', { className: 'rcm-count' }, list.length + (list.length === 1 ? ' solve' : ' solves'))),
      open && h('div', { className: 'rcm-body' },
        h('div', { className: 'rcm-field' },
          h('div', { className: 'rcm-label' }, 'Problem'),
          h('p', { className: 'rcm-text' }, p.problem),
          h('details', { className: 'rcm-src' }, h('summary', null, 'From the research'), h('blockquote', null, '“' + p.quote + '”'))),
        h('div', { className: 'rcm-field' },
          h('div', { className: 'rcm-label' }, 'Potential solve'),
          list.length > 0 && h('ul', { className: 'rcm-solves' }, list.map((x) => h('li', { key: x.id },
            h('span', { className: 'rcm-sid' }, x.id),
            edit && edit.id === x.id
              ? h(SolveEditor, { initial: x.text, onSave: (t) => { upd(x.id, t); setEdit(null); }, onCancel: () => setEdit(null) })
              : [h('div', { key: 't', className: 'rcm-stext' }, x.text),
                h('span', { key: 'a', className: 'rcm-acts' },
                  h('button', { className: 'rcm-ib', title: 'Edit', 'aria-label': 'Edit ' + x.id, onClick: () => setEdit({ id: x.id }) }, h(Pencil)),
                  h('button', { className: 'rcm-ib', title: 'Remove', 'aria-label': 'Remove ' + x.id, onClick: () => { if (window.confirm('Remove ' + x.id + '?')) del(x.id); } }, '✕'))]))),
          edit === 'new'
            ? h(SolveEditor, { onSave: (t) => { add(t); setEdit(null); }, onCancel: () => setEdit(null) })
            : h('button', { className: 'rcm-add', onClick: () => setEdit('new') }, '+ Add solve'))));
  }

  function Actionables() {
    const [st, setSt] = useState(load);
    const setSolves = (fn) => setSt((s) => { const n = fn(s); persist(n); return n; });
    const [folded, setFolded] = useState({});
    const shown = D.PROBLEMS;
    const total = Object.values(st.solves).reduce((n, l) => n + l.length, 0);
    const foldAll = (v) => setFolded(Object.fromEntries(shown.map((p) => [p.id, v])));
    return h('div', { className: 'rcm' },
      h('div', { className: 'rcm-wrap' },
        h('h1', null, 'Ray comparison actionables'),
        h('div', { className: 'rcm-bar' },
          h('span', { className: 'rcm-sp' }),
          h('button', { className: 'rcm-pill', onClick: () => foldAll(true) }, 'Collapse all'),
          h('button', { className: 'rcm-pill', onClick: () => foldAll(false) }, 'Expand all')),
        shown.map((p) => h(Problem, { key: p.id, p, st, setSolves, open: !folded[p.id], toggle: () => setFolded((f) => Object.assign({}, f, { [p.id]: !f[p.id] })) })),
        h('p', { className: 'rcm-foot' }, 'Solves you write are saved in this browser only. To share them, send them over and they will be added to the shared list.')));
  }

  /* Research = the UX research doc the problems come from, shown full-page */
  const PDF = '../ray-compare/ux-research-insights.pdf';
  function Research() {
    /* just the PDF: the viewer's own toolbar and thumbnail pane are switched off through the URL */
    return h('iframe', { className: 'rcm-pdf-frame', src: PDF + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH', title: 'UX Research Insights · Ray comparison feature' });
  }

  window.RAYCMP = {
    sections: [
      /* V1 is the version that was concept-tested; keep it as is. V2 is a copy to iterate on. The V1 id stays 'prototype' so old links keep working. */
      ['prototype', 'Design V1 (tested)', { src: '../ray-compare/tested-prototype.html', css: ['../current-funnel/raycmp-proto.css'] }],
      ['research', 'Research', { render: Research }],
      ['actionables', 'Actionables', { render: Actionables }],
      ['v2', 'Design V2', { src: '../ray-compare/v2-prototype.html' }],
    ],
  };
})();
