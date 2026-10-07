/* Core helpers: element factory, phone frame, intervention block, registry */
(function () {
  const h = React.createElement;
  const D = window.IndiaBusDS;
  const { useState, useEffect, useRef } = React;

  const STAGES = [
    { id: 'onboarding', n: '01', title: 'Onboarding' },
    { id: 'home', n: '02', title: 'Common home' },
    { id: 'srp', n: '03', title: 'SRP' },
    { id: 'seats', n: '04', title: 'Seat selection' },
    { id: 'details', n: '05', title: 'Bus details' },
    { id: 'custinfo', n: '06', title: 'Cust. info' },
    { id: 'payment', n: '07', title: 'Payments' },
    { id: 'ticket', n: '08', title: 'Ticket page' },
    { id: 'funnel', n: '09', title: 'Booking funnel' },
  ];

  const registry = {};
  STAGES.forEach((s) => (registry[s.id] = []));
  function addBlock(stage, spec) { registry[stage].push(spec); }

  const PATTERN = {
    ds: ['ds', 'Built from DS components'],
    ext: ['ext', 'DS components + new composition'],
    new: ['new', 'New pattern - not in DS yet'],
    spec: ['spec', 'Copy / behaviour spec'],
  };

  /* Phone frame. children render inside an IonsRoot device canvas. */
  function Phone({ kind = 'proposed', label, height = 800, bg = '#f6f5fa', scroll, children, pins, lazy }) {
    const [seen, setSeen] = useState(!lazy);
    const wrap = useRef(null);
    useEffect(() => {
      if (seen || !wrap.current) return;
      const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setSeen(true); io.disconnect(); } }, { threshold: 0.5 });
      io.observe(wrap.current);
      return () => io.disconnect();
    }, [seen]);
    const kindLabel = { today: 'Today', proposed: 'Proposed', interactive: 'Try it', state: 'State' }[kind];
    return h('div', { className: 'pw', ref: wrap },
      h('div', { className: 'pframe', style: { height } },
        h(D.IonsRoot, { device: true, style: { height, minHeight: 0, background: bg, position: 'relative' } },
          !seen ? null : scroll ? h('div', { className: 'pscroll' }, children) : children),
        (pins || []).map((p, i) => h('span', { key: i, className: 'pin', style: { left: p[1], top: p[2] } }, p[0]))),
      h('div', { className: 'pcap' },
        h('span', { className: 'k ' + kind }, kindLabel),
        label && h('span', { className: 'l' }, label)));
  }

  function PinLegend({ items }) {
    return h('ul', { className: 'pin-legend' }, items.map((t, i) => h('li', { key: i }, h('b', null, i + 1), h('span', null, t))));
  }

  /* Intervention block */
  function Block({ spec }) {
    const [pc, plabel] = PATTERN[spec.pattern || 'ds'];
    return h('section', { className: 'blk', id: spec.id },
      h('div', { className: 'blk-info' },
        h('div', { className: 'sols' }, spec.sols.map((s) => h('span', { key: s, className: 'sol' }, s))),
        h('h3', null, spec.title),
        h('div', null, h('span', { className: 'badge ' + pc }, plabel)),
        h('div', null, h('div', { className: 'sec-t' }, 'Problem'), h('div', { className: 'prob' }, spec.problem)),
        h('div', null, h('div', { className: 'sec-t' }, 'Proposed change'), h('ul', null, spec.changes.map((c, i) => h('li', { key: i }, c)))),
        spec.notes && h('div', { className: 'notes' }, h('div', { className: 'sec-t' }, 'Handoff notes for design'), h('ul', null, spec.notes.map((c, i) => h('li', { key: i }, c)))),
        spec.legend && h('div', null, h('div', { className: 'sec-t' }, 'Annotations'), h(PinLegend, { items: spec.legend })),
        spec.evidence && h('details', null, h('summary', null, 'Research evidence'), h('ul', null, spec.evidence.map((c, i) => h('li', { key: i }, c))))),
      h('div', { className: 'blk-phones' }, h(spec.Screens)));
  }

  /* Shared small bits */
  const T = (role, props, ...c) => h(D.Text, Object.assign({ role }, role === 'label' ? { as: 'div' } : null, props), ...c);
  const Ico = (name, size) => h(D.Icon, { name, size });
  const Spacer = () => h('div', { className: 'p-sp' });

  /* fake app bar for screens that need one */
  function AppBar({ title, sub, right }) {
    return h('div', { className: 'p-top' },
      h('span', { className: 'p-ic' }, Ico('ion-arrow-back')),
      h('div', { className: 'p-sp' }, h('h4', null, title), sub && h('small', null, sub)),
      right);
  }

  /* Rail of seats data shared by seat screens */
  const sold = (r) => ({ state: 'sold', restriction: r });
  const DECKS = [
    { label: 'Lower deck', steering: true, seats: [null, { id: 'L25', price: 950, restriction: 'male' }, sold('male'), sold('male'), sold('male'), sold('female'), sold('female'), sold('male'), sold('female'), sold('female'), sold('male'), sold('female'), sold('male'), sold('male'), sold('female'), sold('female'), sold('male'), sold('female'), { id: 'L31', price: 900 }, { id: 'L32', price: 900 }] },
    { label: 'Upper deck', seats: [null, sold('female'), sold('female'), sold('male'), sold('male'), sold('female'), sold('male'), { id: 'U17', price: 900 }, { id: 'U18', price: 900 }, sold('male'), { id: 'U19', price: 900 }, { id: 'U20', price: 900 }, sold('male'), { id: 'U21', price: 900 }, { id: 'U22', price: 900 }, sold('male'), { id: 'U23', price: 900 }, { id: 'U24', price: 900 }] },
  ];
  const TRAY = {
    operator: 'Pinky Gudiya Travels And Cargo', primo: true, meta: '21:15 - 05:50 · Fri, 10 Jul', rating: '4.5', ratingCount: '278',
    highlights: [{ title: 'New Bus', detail: '12 months old' }, { title: 'Bus Safety', detail: 'Available' }, { title: 'Primo', detail: 'A rising star' }],
  };

  window.FTUE = { h, D, useState, useEffect, useRef, STAGES, registry, addBlock, Phone, Block, PinLegend, T, Ico, Spacer, AppBar, DECKS, TRAY };
})();
