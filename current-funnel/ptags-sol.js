/* Persuasion tags · Proposed SRP. Directed by Gokul (2026-10-09):
   - every tag a bus qualifies for is shown (a service is never penalised for being too good)
   - comparators read as raw numbers
   - three tiers, per the readout's MECE boxes: Comparators (loud: UGC Comfort / Cleanliness / Staff, performance On Time)
     → Features (medium: Toilet, New Bus) → Reassurance (quiet: Free date change). Women tags and unclear amenities: out of scope.
   Option 1 · Clear hierarchy: a score strip for comparators, icon + label features, one muted reassurance line.
   Option 2 · Comparator in rating: UGC comparators sit inside the rating band as its reasons; On time and
   features follow as chips; the same quiet reassurance line.
   Listings: real Bengaluru → Chennai rows (Android, NON_LMB, top ranks) from Taag Summary_v3.xlsx: operator,
   departure, bus type, rating, scores and the proposed tag set. Arrival, price and seats are illustrative. */
(function () {
  const h = React.createElement;

  const BUSES = [
    { op: 'SABARI TRAVELS', dep: '22:45', arr: '05:10', dur: '6h 25m', type: 'Bharat Benz A/C Sleeper (2+1)', rating: 4.7, n: '2.1k', price: '₹1,299', seats: '9 Seats', single: '(2 Single)',
      comfort: 9.4, onTime: 93, clean: 9.7, staff: 9.6, feat: ['new'] },
    { op: 'V Bus Holidays', dep: '21:10', arr: '03:40', dur: '6h 30m', type: 'Bharat Benz A/C Sleeper (2+1)', rating: 4.9, n: '860', price: '₹1,450', seats: '6 Seats', single: '(1 Single)',
      comfort: 9.7, onTime: 88, clean: 9.9, staff: 9.8, feat: ['new', 'toilet'] },
    { op: 'ANT KING', dep: '21:50', arr: '04:35', dur: '6h 45m', type: 'Volvo B11R Multi-Axle A/C Sleeper (2+1)', rating: 4.5, n: '1.4k', price: '₹1,099', seats: '14 Seats', single: '(4 Single)',
      clean: 8.9, staff: 8.5, feat: [] },
    { op: 'ACLS Navigator', dep: '22:15', arr: '04:50', dur: '6h 35m', type: 'Bharat Benz A/C Sleeper (2+1)', rating: 4.4, n: '540', price: '₹999', seats: '18 Seats', single: '(3 Single)',
      onTime: 80, clean: 9.0, staff: 9.1, feat: ['toilet'] },
    { op: 'MMK Travels', dep: '21:00', arr: '03:20', dur: '6h 20m', type: 'Bharat Benz A/C Sleeper (2+1)', rating: 4.8, n: '3.2k', price: '₹1,350', seats: '7 Seats', single: '(2 Single)',
      comfort: 9.2, clean: 9.5, staff: 9.5, feat: ['new'] },
    { op: 'zingbus plus', dep: '21:45', arr: '04:00', dur: '6h 15m', type: 'A/C Semi Sleeper / Sleeper (2+1)', rating: 4.7, n: '4.8k', price: '₹1,149', seats: '11 Seats', single: '(2 Single)',
      onTime: 89, clean: 9.3, staff: 9.1, feat: ['new', 'toilet'] },
  ];

  /* 16 px line icons where Ions has none (same 1.6 stroke as Ions) */
  const svg = (d) => h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true, className: 'pt-ic' }, d);
  const P = (d) => h('path', { d, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' });
  const ICON = {
    comfort: () => svg([P('M4.5 9V4.2a1.7 1.7 0 0 1 1.7-1.7h3.6a1.7 1.7 0 0 1 1.7 1.7V9', ), P('M3 7.5v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3'), P('M5 11.5V13.5M11 11.5V13.5')].map((x, k) => React.cloneElement(x, { key: k }))),
    onTime: () => svg([h('circle', { key: 'c', cx: 8, cy: 8, r: 5.8, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }), React.cloneElement(P('M8 5v3.2l2 1.3'), { key: 'h' })]),
    clean: () => svg([P('M8 2.2l1.1 2.9 2.9 1.1-2.9 1.1L8 10.2 6.9 7.3 4 6.2l2.9-1.1z'), P('M12.3 9.6l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z')].map((x, k) => React.cloneElement(x, { key: k }))),
    staff: () => svg([h('circle', { key: 'c', cx: 8, cy: 5.3, r: 2.6, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }), React.cloneElement(P('M3.2 13.6c.6-2.4 2.5-3.8 4.8-3.8s4.2 1.4 4.8 3.8'), { key: 'b' })]),
    toilet: () => svg([P('M3.5 2.8h4v4.5a2 2 0 0 1-4 0z'), P('M5.5 9.3v3.9M3.8 13.2h3.4'), P('M11.2 2.6v10.6'), P('M9.6 6.2h3.2')].map((x, k) => React.cloneElement(x, { key: k }))),
    new: () => svg([P('M8 1.8l1.6 1.2 2-.1.6 1.9 1.6 1.2-.6 1.9.6 1.9-1.6 1.2-.6 1.9-2-.1L8 14.2l-1.6-1.2-2 .1-.6-1.9-1.6-1.2.6-1.9-.6-1.9 1.6-1.2.6-1.9 2 .1z'), P('M6 8.1l1.4 1.4L10.2 6.7')].map((x, k) => React.cloneElement(x, { key: k }))),
    fdc: () => svg([P('M3 4.5h10v8.7H3z'), P('M5.5 2.8v2.6M10.5 2.8v2.6M3 7.2h10'), P('M6.2 10.2h3.6M8.6 9l1.2 1.2-1.2 1.2')].map((x, k) => React.cloneElement(x, { key: k }))),
  };

  /* Comparators: UGC (Comfort, Cleanliness, Staff Behaviour) then performance (On Time), per the readout's MECE boxes */
  const COMP = [['comfort', 'Comfort', (v) => v.toFixed(1)], ['clean', 'Clean', (v) => v.toFixed(1)], ['staff', 'Staff', (v) => v.toFixed(1)], ['onTime', 'On time', (v) => v + '%']];
  const FEAT = { toilet: 'Toilet', new: 'New bus' };
  /* Reassurance · policy: Free date change only (women tags and unclear amenities are out of scope) */
  const reassure = () => [['fdc', 'Free date change']];

  const Star = () => h('svg', { viewBox: '0 0 12 12', 'aria-hidden': true }, h('path', { d: 'M6 .9l1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.7 2.9 10.4l.7-3.5L1 4.5l3.5-.4z', fill: '#fff' }));
  const Rate = ({ b }) => h('div', { className: 'px-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), b.rating.toFixed(1)), h('span', null, b.n));

  /* Shared top of the card: times, price, operator, bus type (rating optional) */
  const Top = ({ b, rating }) => h(React.Fragment, null,
    h('div', { className: 'px-svc' },
      h('div', null,
        h('p', { className: 'px-time' }, h('b', null, b.dep), h('i', { className: 'px-sep' }), b.arr),
        h('p', { className: 'px-sub' }, b.dur, h('i', { className: 'px-dot' }), h('span', null, b.seats), h('span', { className: 'px-warn' }, b.single))),
      h('div', { className: 'px-price' }, h('b', null, b.price), h('small', null, 'Onwards'))),
    h('div', { className: 'px-bo' },
      h('div', { className: 'px-bo-l' }, h('p', { className: 'px-nm' }, h('span', null, b.op)), h('p', { className: 'px-ty' }, h('span', null, b.type))),
      rating && h(Rate, { b })));

  const Reassure = ({ b }) => h('p', { className: 'pt-re' }, reassure(b).map(([ic, t], k) => h('span', { key: k }, ICON[ic](), t)));
  const Features = ({ b }) => b.feat.length > 0 && h('div', { className: 'pt-feat' }, b.feat.map((f) => h('span', { key: f }, ICON[f](), FEAT[f])));

  /* Option 1 · score strip (loud) → features (medium) → reassurance (quiet) */
  function Card1({ b, go }) {
    const comps = COMP.filter(([k]) => b[k] != null);
    return h('div', { className: 'px-card pt-card', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      h('div', { className: 'px-body' },
        h(Top, { b, rating: true }),
        h('div', { className: 'pt-strip', style: { '--n': comps.length } }, comps.map(([k, label, fmt]) =>
          h('div', { key: k, className: 'pt-cell' + (k === 'onTime' ? ' pt-cell--perf' : '') }, h('b', null, fmt(b[k]), k !== 'onTime' && h('small', null, '/10')), h('span', null, ICON[k](), label)))),
        h(Features, { b }),
        h(Reassure, { b })));
  }

  /* Option 2 · the rating band carries the UGC comparators; On time + features as chips; reassurance quiet */
  function Card2({ b, go }) {
    const ugc = [['comfort', 'Comfort'], ['clean', 'Clean'], ['staff', 'Staff']].filter(([k]) => b[k] != null);
    const chips = (b.onTime != null ? [['onTime', h('span', { key: 't' }, h('b', null, b.onTime + '%'), ' on time')]] : []).concat(b.feat.map((f) => [f, FEAT[f]]));
    return h('div', { className: 'px-card pt-card', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      h('div', { className: 'px-body' },
        h(Top, { b, rating: false }),
        h('div', { className: 'pt-band' },
          h('span', { className: 'pt-band-r' }, h(Star), b.rating.toFixed(1)),
          h('span', { className: 'pt-band-s' }, ugc.map(([k, l]) => h('span', { key: k }, l + ' ', h('b', null, b[k].toFixed(1)))))),
        chips.length > 0 && h('div', { className: 'pt-chips' }, chips.map(([k, c]) => h('span', { key: k, className: k === 'onTime' ? 'pt-chip pt-chip--c' : 'pt-chip' }, ICON[k](), c))),
        h(Reassure, { b })));
  }

  const list = (Card) => ({ go }) => h('div', { className: 'px-list' }, BUSES.map((b, i) => h(Card, { key: i, b, go })));
  const Srp = (Card) => (p) => h(window.SRPFIG.SrpFig, Object.assign({}, p, { list: list(Card) }));

  window.PTAGS.PROPOSED.add('srp', {
    sols: ['PT'],
    options: [
      { key: 'A', label: 'Clear hierarchy', note: 'Comparators as a score strip, features as icon + label, reassurance as one quiet line. All qualifying tags shown.', render: Srp(Card1) },
      { key: 'B', label: 'Comparator in rating', note: 'Comfort, cleanliness and staff scores sit inside the rating band; on time and features follow as chips; reassurance quiet.', render: Srp(Card2) },
    ],
  });
})();
