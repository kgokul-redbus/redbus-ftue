/* Search results · built from Figma "FTUE current funnel" (nje1CwCQGnbTIli9VKMxsh, node 20:2738), 360 px frame.
   Listing data is the Figma data, as is. */
(function () {
  const h = React.createElement;
  const { useState, useEffect } = React;
  const A = 'assets/srpf/';

  const ROW1 = [['Filter & Sort', 'tune'], ['Primo bus'], ['Special price'], ['Free Cancellation'], ['AC'], ['Sleeper'], ['Single seat'], ['Seater'], ['Non AC'], ['18:00 – 00:00']];
  const ROW2 = ['Discover Bharat Sale', 'Early Buy upto 10%'];

  /* Figma listings, as is */
  const TUPLES = [
    { v: 1, primo: true, deals: [['Last min.  ', '20% OFF']], dep: '20:15', arr: '09:00', dur: '7h 30m', seats: '11 Seats', single: '(2 Single)', price: '₹450', loc: true, type: ['ev', 'Volvo multi axle A/C sleeper (2+1)'], tags: ['Comfort score: 9.3/10', '8 women travelling', 'Highly rated by women'], prev: true },
    { v: 1, via: 'Via Chittor, Rajasthan', dep: '20:15', arr: '09:00', dur: '7h 30m', seats: '11 Seats', single: '(2 Single)', price: '₹450', loc: true, type: ['primo', 'Volvo multi axle A/C sleeper (2+1)'], tags: ['In-bus toilet', '88% on-time'], prev: true },
    { v: 1, primo: true, deals: [null], dep: '20:15', arr: '09:00', dur: '7h 30m', seats: '11 Seats', single: '(2 Single)', price: '₹450', loc: true, type: ['primo', 'Volvo multi axle A/C sleeper (2+1)'], tags: ['In-bus toilet', 'Comfort score of 8.5/10'], stops: true },
    { v: 2, primo: true, deals: [['Group', '15% OFF', 'group'], ['Last min.', '10% off']], label: 'Women’s choice', props: ['In-bus toilet', '8 women travelling', 'Highly rated by women'] },
    { v: 2, props: ['In-bus toilet', 'In-bus toilet'] },
    { v: 2, primo: true, deals: [['Group', '15% OFF', 'group'], ['Last min.', '10% off']], label: 'Value pick', props: ['In-bus toilet', 'Comfort score of 8.5/10'] },
    { v: 2, primo: true, props: ['88% on-time'] },
  ];

  const Star = () => h('svg', { viewBox: '0 0 12 12', 'aria-hidden': true }, h('path', { d: 'M6 .9l1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.7 2.9 10.4l.7-3.5L1 4.5l3.5-.4z', fill: '#fff' }));
  const Rate = () => h('div', { className: 'sf-rate', 'aria-label': 'Rated 4.4' }, h('b', null, h(Star), '4.4'), h('span', null, '0000'));
  const Deal = ({ d }) => d
    ? h('span', { className: 'sf-deal' + (d[2] === 'group' ? ' sf-deal--group' : '') }, d[0], h('b', null, d[1]))
    : h('span', { className: 'sf-deal sf-deal--empty', 'aria-hidden': true });

  function Tuple({ t, go }) {
    const open = () => go('seats', { seats: [] });
    const header = (t.primo || t.deals) && h('div', { className: 'sf-hd' },
      t.primo && h('img', { className: 'primo', src: A + (t.v === 2 ? 'primo-sm.png' : 'primo.png'), alt: 'Primo' }),
      t.deals && h('div', { className: 'deals' }, t.deals.map((d, i) => h(Deal, { key: i, d }))));
    if (t.v === 1) {
      return h('div', { className: 'sf-t', role: 'button', tabIndex: 0, onClick: open },
        t.via ? h('span', { className: 'sf-via' }, t.via) : header,
        h('div', { className: 'sf-tp' },
          h('div', null,
            h('p', { className: 'sf-time' }, h('b', null, t.dep), h('i'), t.arr),
            h('p', { className: 'sf-sub' }, t.dur, h('i'), t.seats, h('em', null, t.single))),
          h('div', { className: 'sf-price' }, h('b', null, t.price), h('small', null, 'onwards'))),
        h('div', { className: 'sf-bo' },
          h('div', null,
            h('p', { className: 'nm' }, 'Sri Krishna Travels', t.loc && h('img', { src: A + 'ic-busloc.png', alt: 'Live tracking' })),
            t.type[0] === 'ev'
              ? h('p', { className: 'ty' }, h('img', { src: A + 'ic-ev.png', alt: '' }), t.type[1])
              : h('p', { className: 'ty ty--p' }, h('img', { src: A + 'ic-diamond.png', alt: '' }), h('span', null, t.type[1]))),
          h(Rate)),
        h('div', { className: 'sf-tags' }, t.tags.map((x, i) => h('span', { key: i, className: 'sf-tag' }, x))),
        t.prev && h('div', { className: 'sf-tags' }, h('span', { className: 'sf-tag sf-tag--ok' }, h('img', { src: A + 'ic-stars.png', alt: '' }), 'Previously Booked by You')),
        t.stops && h('p', { className: 'sf-call' }, h('img', { src: A + 'ic-stops.png', alt: '' }), h('span', null, 'Stops at ', h('b', null, 'Anand Rao Circle '), '&', h('b', null, ' Kanchipuram Bypass'))));
    }
    return h('div', { className: 'sf-t sf-t--v2', role: 'button', tabIndex: 0, onClick: open },
      header,
      h('div', { className: 'sf-tp2' },
        h('div', { className: 'tl' },
          h('div', { className: 'row' }, h('b', null, '20:15'), h('span', { className: 'dur' }, h('i'), '7h 25m', h('i')), '20:15'),
          h('p', { className: 'seats' }, '20 Seats (9 Single)')),
        h('div', { className: 'pr' }, h('b', null, '₹1,960'), h('small', null, 'Onwards'))),
      h('div', { className: 'sf-bo' },
        h('div', { className: 'l' }, h('p', { className: 'nm' }, 'Sri Krishna Travels'), h('p', { className: 'ty' }, 'Volvo 9600 Multi-Axle A/C Sleeper (2+1)')),
        h(Rate)),
      h('div', { className: 'sf-rtb' },
        t.label && h('p', null, t.label),
        h('div', { className: 'props' }, t.props.map((x, i) => h('span', { key: i }, x)))));
  }

  function SrpFig({ s, set, go }) {
    const [on, setOn] = useState({});
    const [m, d] = (s.dateKey || '3-8').split('-').map(Number);
    const dt = new Date(2026, 6 + m, d);
    const toggle = (k) => setOn((x) => Object.assign({}, x, { [k]: !x[k] }));
    const chip = (label, icon) => h('button', { key: label, className: 'sf-chip' + (icon ? ' sf-chip--icon' : '') + (on[label] ? ' on' : ''), onClick: () => (icon ? set({ sheet: 'filter' }) : toggle(label)) },
      h('span', null, icon && h('img', { src: A + 'ic-tune.png', alt: '' }), label));
    return h('div', { className: 'sf' },
      h('div', { className: 'sf-scroll' },
        h('div', { className: 'sf-top' },
          h('img', { className: 'sf-status', src: A + 'statusbar.png', alt: '' }),
          h('div', { className: 'sf-nav' },
            h('button', { 'aria-label': 'Back', onClick: () => go('home') }, h('img', { src: A + 'ic-back.png', alt: '' })),
            h('div', { className: 't' }, h('b', null, (s.origin || 'Bengaluru') + ' → ' + (s.dest || 'Chennai')), h('span', null, '237 Buses')),
            h('button', { className: 'sf-date', 'aria-label': 'Change date', onClick: () => set({ sheet: 'date' }) }, h('b', null, dt.getDate() + ' ' + dt.toLocaleDateString('en-GB', { month: 'short' })), h('small', null, dt.toLocaleDateString('en-GB', { weekday: 'short' }))))),
        h('div', { className: 'sf-filters' },
          h('div', { className: 'sf-chips sf-x' },
            h('div', { className: 'row' }, ROW1.map(([l, ic]) => chip(l, ic))),
            h('div', { className: 'row' }, ROW2.map((l) => chip(l)))),
          h('div', { className: 'sf-ai' },
            h('p', { className: 'lbl' }, 'AI Smart filter'),
            h('label', { className: 'fld' },
              h('div', null, h('img', { src: A + 'ic-ai.png', alt: '' }), h('input', { placeholder: 'Search ‘AC buses under ₹1000’', 'aria-label': 'AI Smart filter' })),
              h('span', { className: 'mic' }, h('img', { src: A + 'ic-mic.png', alt: 'Voice search' }))))),
        h('div', { className: 'sf-rtc', style: { marginTop: 2 } },
          h('div', { className: 'sf-rtc-stack' },
            h('i', { style: { top: 32, width: 288, opacity: .6 } }), h('i', { style: { top: 24, width: 312, opacity: .8 } }),
            h('button', { className: 'sf-rtc-card' },
              h('div', { className: 'l' }, h('img', { src: A + 'lg-ksrtc.png', alt: 'KSRTC' }),
                h('div', null, h('div', { className: 'n' }, h('b', null, 'KSRTC'), h('small', null, '(108 Buses)')), h('p', { className: 'kn' }, 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ಸಂಸ್ಥೆ'), h('p', { className: 'fr' }, 'From ₹800'))),
              h(window.IndiaBusDS.Icon, { name: 'ion-chevron-down', style: { transform: 'rotate(-90deg)' } })))),
        h('div', { className: 'sf-list', style: { marginTop: 2 } }, TUPLES.map((t, i) => h(Tuple, { key: i, t, go })))),
      s.sheet === 'date' && h(window.SEARCH.DateSheet, { s, set }));
  }

  window.SRPFIG = { SrpFig };
})();
