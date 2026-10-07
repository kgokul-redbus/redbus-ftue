/* Boarding & dropping, rebuilt from production screenshots 22-23. Native 411.43 dp space. */
(function () {
  const h = React.createElement;
  const { useState } = React;
  const A = 'assets/points/';
  const T = (c, lh, style, ...kids) => h('p', { className: 'a', style: Object.assign({ top: c - lh / 2, lineHeight: lh + 'px' }, style) }, ...kids);

  const BOARDING = [
    { t: '21:45', d: '08 Oct', n: 'Kalasipalayam', ad: ['Victoria Hospital (Opposite)Apsara', 'Parking'], metro: ['KR Market metro (628 m)'] },
    { t: '22:20', d: '08 Oct', n: 'Majestic', ad: ['Opposite to Kempegowda Metro Station', '- Infront of Ayyapan Kovil - Nearby', 'Majestic Railway station'], metro: ['Nadaprabhu Kempegowda Stn., Majestic', 'metro (411 m)'] },
    { t: '22:25', d: '08 Oct', n: 'Anand Rao Circle', ad: ['Infront of fire station'] },
    { t: '22:40', d: '08 Oct', n: 'Shanthi Nagar', ad: ['Infront of Reliance Metro Wholesale,', 'Near SRS'] },
    { t: '22:50', d: '08 Oct', n: 'Dairy Circle Christ University', ad: ['Opp to Christ University Bus Stop'] },
    { t: '23:00', d: '08 Oct', n: 'St.johns Hospital', ad: ['St.Johns Hospital Bus Stop'] },
    { t: '23:10', d: '08 Oct', n: 'Madiwala', ad: ['Market Road Bus Stop, Opposite to', 'Market Square Mall,Near Madiwala', 'Traffic Police Station'] },
    { t: '23:25', d: '08 Oct', n: 'Silk Board', ad: ['Silk Board Junction Bus Stop'] },
  ];
  const DROPPING = [
    { t: '05:05', d: '09 Oct', n: 'Kanchipuram', ad: ['Opposite to Meenakshi Medical College', '- MM Legacy Hotel Entrance'] },
    { t: '05:35', d: '09 Oct', n: 'Sriperumbudur', ad: ['Infront of Rajiv Gandhi Memorial Bus', 'Stop'] },
    { t: '05:40', d: '09 Oct', n: 'Sriperumbudur Toll Plaza', ad: ['After Sriperumbudur Toll Plaza'] },
    { t: '05:55', d: '09 Oct', n: 'Panimalar College', ad: ['Infront of KFC - Poonamalle - Chennai', 'Bangalore Highway'] },
    { t: '05:56', d: '09 Oct', n: 'Poonamallee - Kfc', ad: ['Infront of KFC Poonamalle,Chennai -', 'Bangalore Highway'] },
    { t: '06:00', d: '09 Oct', n: 'Poonamallee By Pass', ad: ['Infront of Poonamalle By Pass Bus Stop', '- Near Poonamalle Bus Depot'] },
    { t: '06:03', d: '09 Oct', n: 'Acs Medical College', ad: ['Opposite to ACS Medical College Main', 'Gate - Towards Bangalore'] },
  ];

  function Row({ p, on, pick }) {
    return h('button', { className: 'pt-row' + (on ? ' pt-row--on' : ''), 'aria-pressed': on, onClick: pick },
      h('div', { className: 'pt-time' }, h('b', null, p.t), h('small', null, p.d)),
      h('div', { className: 'pt-txt' }, h('b', null, p.n), p.ad.map((l, i) => h('span', { key: i }, l))),
      h('i', { className: 'pt-radio' }),
      p.metro && h('div', { className: 'pt-metro' }, h('img', { src: A + 'ic-metro.png', alt: '' }), p.metro.map((l, i) => h('div', { key: i }, l))));
  }

  function Points({ s, set, go }) {
    const [stage, setStage] = useState(s.bpN ? 'dropping' : 'boarding');
    const list = stage === 'boarding' ? BOARDING : DROPPING;
    const chosen = stage === 'boarding' ? s.bpN : s.dpN;
    const pick = (p) => {
      if (stage === 'boarding') { set({ bpN: p.n, bp: { name: p.n, time: p.t } }); setStage('dropping'); }
      else set({ dpN: p.n, dp: { name: p.n, time: p.t } });
    };
    const ready = s.bpN && s.dpN;
    return h('div', { className: 'pd' },
      h('img', { className: 'pd-status', src: A + 'statusbar.png', alt: '', style: { mixBlendMode: 'normal', zIndex: 7 } }),
      h('div', { className: 'sl-bar', style: { height: 119.8 } },
        h('button', { 'aria-label': 'Back', onClick: () => go('seats'), style: { position: 'absolute', left: 12, top: 62, width: 40, height: 40 } }, h('img', { src: 'assets/seat/ic-back.png', alt: '', style: { position: 'absolute', left: 9.7, top: 10.8, width: 20.2, height: 19.4 } })),
        T(72, 22, { left: 64.2, fontWeight: 700, fontSize: 16, whiteSpace: 'nowrap' }, 'Select boarding & dropping points'),
        T(93.9, 20, { left: 64.2, fontSize: 14, color: '#6c6c6c' }, 'Bengaluru → Chennai')),
      h('div', { className: 'pt-tabs' },
        [['boarding', 'Boarding points', s.bpN || 'Bengaluru'], ['dropping', 'Dropping points', s.dpN || 'Chennai']].map(([k, t, sub]) => h('button', { key: k, className: (stage === k ? 'on' : '') + ((k === 'boarding' ? s.bpN : s.dpN) ? ' chosen' : ''), onClick: () => setStage(k) }, h('b', null, t), h('small', null, sub)))),
      h('div', { className: 'pt-body', style: { bottom: ready ? 110.4 : 0 } },
        h('div', { className: 'pt-card' },
          h('header', null, stage === 'boarding' ? 'All boarding points in Bengaluru' : 'All dropping points in Chennai'),
          list.map((p) => h(Row, { key: p.n, p, on: chosen === p.n, pick: () => pick(p) })))),
      ready && h('div', { className: 'pt-foot' }, h('button', { className: 'pd-btn', style: { top: 18.8 }, onClick: () => go('custinfo') }, 'Proceed')),
      h('i', { className: 'pd-gesture' }));
  }

  window.POINTS = { Points, BOARDING, DROPPING };
})();
