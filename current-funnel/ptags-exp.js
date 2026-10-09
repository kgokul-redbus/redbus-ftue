/* Persuasion tags · Current › Experiment. The SRP layout being tried for the next release, from Figma
   "SRP - Cleanup" (S3E7gVBws88gViJh6zGClr, node 36956:20519). Same page as production; the bus cards change:
   Primo "On Time Guarantee", a two-column ✓ list of persuasion tags, one highlight tag, a tripReward footer.
   Listing data is the Figma data, as is. Styles in ptags-exp.css; logos / icons in assets/srpx/. */
(function () {
  const h = React.createElement;
  const X = 'assets/srpx/';

  const PROPS = [['Comfort score: 9.3/10', '90% On Time', 'Clean Bus'], ['Toilet', 'Free date change', 'Direct bus']];
  const CARDS = [
    { primo: true, via: 'Via Chittor, Rajasthan', seats: '4 Seats', single: '(1 Single)', seatsWarn: true, type: ['ev', 'A/C sleeper (2+1)'], award: true, ad: true, reward: true },
    { primo: true, via: 'Via Chittor, Rajasthan', nextDay: true, layover: '2h Layover at Delhi', buses: ['Bus 1 : Sleeper (2+2)', 'Bus 2 : Sleeper (2+2)'], award: true, reward: true },
    { seats: '11 Seats', single: '(2 Single)', type: ['premium', 'Volvo A/C sleeper (2+1)'] },
  ];

  const Star = () => h('svg', { viewBox: '0 0 12 12', 'aria-hidden': true }, h('path', { d: 'M6 .9l1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.7 2.9 10.4l.7-3.5L1 4.5l3.5-.4z', fill: '#fff' }));
  const Rate = () => h('div', { className: 'px-rate', 'aria-label': 'Rated 4.4' }, h('b', null, h(Star), '4.4'), h('span', null, '0000'));
  const Prop = (t) => h('li', { key: t }, h('img', { src: X + 'ic-check.svg', alt: '' }), h('span', null, t));

  function Card({ c, go }) {
    return h('div', { className: 'px-card', role: 'button', tabIndex: 0, onClick: () => go('seats', { seats: [] }) },
      h('div', { className: 'px-body' },
        c.primo && h('div', { className: 'px-hd' },
          h('img', { className: 'px-primo', src: X + 'primo-otg.png', alt: 'Primo On Time Guarantee' }),
          h('span', { className: 'px-deals' }, h('span', { className: 'px-deal' }, 'Group. ', h('b', null, '20% OFF')), h('span', { className: 'px-deal px-deal--empty', 'aria-hidden': true }))),
        c.via && h('span', { className: 'px-via' }, c.via),
        h('div', { className: 'px-svc' },
          h('div', null,
            h('p', { className: 'px-time' }, h('b', null, '00:15'),
              c.nextDay && h('span', { className: 'px-next' }, 'Next day'),
              c.layover ? h('span', { className: 'px-lay' }, h('i'), h('em', null, h('img', { src: X + 'ic-layover.svg', alt: 'Layover' })), h('i')) : h('i', { className: 'px-sep' }),
              '09:00'),
            h('p', { className: 'px-sub' }, '7h 30m', h('i', { className: 'px-dot' }),
              c.layover ? h('span', { className: 'px-warn px-med' }, c.layover)
                : [h('span', { key: 's', className: c.seatsWarn ? 'px-warn' : '' }, c.seats), h('span', { key: 'g', className: 'px-warn' }, c.single)])),
          h('div', { className: 'px-price' }, h('b', null, '₹1,960'), h('small', null, 'Onwards'))),
        h('div', { className: 'px-bo' },
          h('div', { className: 'px-bo-l' },
            h('p', { className: 'px-nm' }, h('span', null, 'Green line Travels and Holidays'),
              c.award && h('img', { className: 'px-award', src: X + 'ic-award.png', alt: 'Award' }),
              c.ad && h('span', { className: 'px-ad' }, 'Ad')),
            c.buses
              ? h('p', { className: 'px-ty' }, c.buses[0], h('br'), c.buses[1])
              : h('p', { className: 'px-ty' }, h('img', { src: X + (c.type[0] === 'ev' ? 'ic-ev.svg' : 'ic-premium.svg'), alt: '' }), h('span', null, c.type[1]))),
          h(Rate)),
        h('div', { className: 'px-rtb' }, PROPS.map((col, k) => h('ul', { key: k }, col.map(Prop)))),
        h('span', { className: 'px-tag' }, h('img', { src: X + 'ic-star-tag.png', alt: '' }), 'Stops at Aanad Rao Circle & Kanchipuram')),
      c.reward && h('img', { className: 'px-reward', src: X + 'footer-tripreward.png', alt: 'tripReward: Take 5 trips to get a free ticket' }));
  }

  const List = ({ go }) => h('div', { className: 'px-list' }, CARDS.map((c, i) => h(Card, { key: i, c, go })));
  const SrpExperiment = (p) => h(window.SRPFIG.SrpFig, Object.assign({}, p, { list: List }));

  window.PTAGS_EXP = { SrpExperiment };
})();
