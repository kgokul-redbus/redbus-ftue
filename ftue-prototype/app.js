/* App shell: nav, hero, stages, coverage matrix */
(function () {
  const { h, useState, useEffect, STAGES, registry, Block } = window.FTUE;

  /* status: proto | copy | nod (no design) | sched | dec (pending decision) */
  const SOLS = [
    ['SOL-01', 'Introduce Primo on SRP without relying on the logo', 'proto', 'srp-primo'],
    ['SOL-02', 'Reinforce Primo on seat layout with a temporary header', 'proto', 'seat-primo'],
    ['SOL-03', 'Communicate marginal additional costs from Cust. Info onwards', 'proto', 'ci-summary'],
    ['SOL-04', 'Make "what you pay" more discoverable on payment', 'proto', 'pay-breakup'],
    ['SOL-05', 'Easier access to the price breakup on payment', 'proto', 'pay-breakup'],
    ['SOL-06', 'Improve visibility of "Onwards" pricing on the SRP tuple', 'proto', 'srp-price'],
    ['SOL-07', 'Highlight the cheapest seat on the seat layout', 'proto', 'seat-price'],
    ['SOL-08', 'Standardise on one time format across the app', 'proto', 'fun-time'],
    ['SOL-09', 'Choose 12h vs 24h via experiment', 'dec', 'fun-time'],
    ['SOL-10', 'Consistent terms (policy, reschedule, price breakup, features)', 'proto', 'fun-naming'],
    ['SOL-11', 'Same seat component and labels on seat layout and payment', 'proto', 'pay-seats'],
    ['SOL-12', 'Low-intrusion support callout on SRP with other USPs', 'proto', 'srp-trust'],
    ['SOL-13', 'Show "Sorted by" up front with option to change', 'proto', 'srp-sortfilter'],
    ['SOL-14', 'Remove ad and collection cards above the filters', 'proto', 'srp-sortfilter'],
    ['SOL-15', 'Improve filter visual affordance', 'proto', 'srp-sortfilter'],
    ['SOL-16', 'Formally introduce AI smart filter', 'proto', 'srp-sortfilter'],
    ['SOL-17', 'Well-integrated search experience', 'proto', 'home-search'],
    ['SOL-18', 'Today/Tomorrow as tabs, not buttons', 'proto', 'home-search'],
    ['SOL-19', 'Make the seat layout and bus details page continuous', 'proto', 'det-tray'],
    ['SOL-20', 'Chevron to show the tray expands', 'proto', 'det-tray'],
    ['SOL-21', 'Load tray half-expanded, then tuck away', 'proto', 'det-tray'],
    ['SOL-22', 'Offers on first fold of home, bucketed', 'proto', 'home-offers'],
    ['SOL-23', 'Surface payment offers on the payment page', 'proto', 'pay-offers'],
    ['SOL-24', 'Contextualise permission requests', 'proto', 'onb-location'],
    ['SOL-25', 'Notification ask when a user drops from a session', 'proto', 'fun-notify'],
    ['SOL-26', 'App review ask after booking completion', 'proto', 'tkt-review'],
    ['SOL-27', 'Continue booking card on home', 'sched', 'home-continue'],
    ['SOL-28', 'Tappable Primo logo in the collapsed tray', 'proto', 'det-primo'],
    ['SOL-29', 'Reinforce Primo on the ticket page (BusBuddy)', 'proto', 'tkt-primo'],
    ['SOL-30', 'Differentiated theme for the Primo funnel', 'proto', 'fun-theme'],
    ['SOL-31', 'Use "Price breakup" across the board', 'proto', 'fun-naming'],
    ['SOL-32', 'Label the price breakup button', 'proto', 'pay-breakup'],
    ['SOL-33', 'Clarify GST and statutory charges not collected by redBus', 'proto', 'pay-breakup'],
    ['SOL-34', 'State: no convenience fee, commissions or hidden charges', 'proto', 'pay-breakup'],
    ['SOL-35', 'Show the full seat layout on load, then zoom in', 'proto', 'seat-price'],
    ['SOL-36', 'Post-booking support callout in onboarding', 'proto', 'onb-support'],
    ['SOL-37', 'Make support ingress on ticket page discoverable', 'proto', 'tkt-support'],
    ['SOL-38', 'Sort options with explanatory sub text', 'proto', 'srp-sortfilter'],
    ['SOL-39', 'One-line cancellation and reschedule summary, table a tap away', 'proto', 'det-policy'],
    ['SOL-40', 'Policy one-liner with booking summary on Cust. Info', 'proto', 'ci-summary'],
    ['SOL-41', 'Remove login bottom sheet on seat layout', 'nod', 'seat-price'],
    ['SOL-42', 'Replace validation error copy', 'proto', 'ci-errors'],
    ['SOL-43', 'Default state and WhatsApp opt-in, lower affordance', 'proto', 'ci-summary'],
    ['SOL-44', 'Contextual, lighter "login for saved passengers" CTA', 'proto', 'ci-summary'],
    ['SOL-45', 'Mark recently viewed services as "seen" on SRP', 'proto', 'srp-trust'],
  ];
  const STATUS = {
    proto: ['Prototyped', 'proto'], copy: ['Copy spec', 'copy'], nod: ['No design needed', 'nod'], sched: ['Already scheduled; reference mock', 'sched'], dec: ['Pending experiment', 'dec'],
  };
  const total = SOLS.length;
  const protoCount = SOLS.filter((s) => s[2] === 'proto' || s[2] === 'sched').length;

  const titleOf = {};
  Object.values(registry).forEach((l) => l.forEach((b) => { titleOf[b.id] = b.title; }));
  SOLS.forEach(([id, , , blk]) => {
    const spec = Object.values(registry).flat().find((b) => b.id === blk);
    if (!spec) console.warn('coverage: missing block', blk, 'for', id);
    else if (!spec.sols.includes(id)) console.warn('coverage: block', blk, 'does not list', id);
  });
  Object.values(registry).flat().forEach((b) => b.sols.forEach((id) => { if (!SOLS.find((s) => s[0] === id)) console.warn('coverage: unknown sol', id); }));

  function Coverage() {
    return h('section', { className: 'cov', id: 'coverage' },
      h('div', { className: 'stage-h' }, h('span', { className: 'n' }, '10'), h('h2', null, 'Coverage: all 45 solves'), h('small', null, 'Every solve maps to a block above')),
      h('table', null,
        h('thead', null, h('tr', null, ['Solve', 'What it does', 'Status', 'Where to see it'].map((t) => h('th', { key: t }, t)))),
        h('tbody', null, SOLS.map(([id, t, st, blk]) => h('tr', { key: id },
          h('td', { className: 'id' }, id), h('td', null, t),
          h('td', null, h('span', { className: 'st ' + STATUS[st][1] }, STATUS[st][0])),
          h('td', null, h('a', { href: '#' + blk }, titleOf[blk] || blk)))))),
      h('div', { className: 'oos' }, h('b', null, 'Out of scope, on record: '), 'AC/Non-AC and Seater/Sleeper distinction for tier-2+ users (dropped). Concession-type flow for seniors (RTC-specific, dropped while private buses are the priority). Regional-language coupon copy (dropped; English booking funnel is 90%+ of users).'));
  }

  function App() {
    const [active, setActive] = useState('onboarding');
    const [zoom, setZoom] = useState(0.85);
    useEffect(() => { document.documentElement.style.setProperty('--z', zoom); }, [zoom]);
    useEffect(() => {
      const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id.replace('stage-', '')); }); }, { rootMargin: '-120px 0px -70% 0px' });
      document.querySelectorAll('.stage, .cov').forEach((s) => io.observe(s));
      return () => io.disconnect();
    }, []);
    const nBlocks = Object.values(registry).reduce((a, b) => a + b.length, 0);
    return h(React.Fragment, null,
      h('div', { className: 'top' }, h('div', { className: 'top-in' },
        h('div', { className: 'brand' }, h('i'), 'FTUE interventions'),
        h('nav', { className: 'stages' }, STAGES.map((s) => h('a', { key: s.id, href: '#stage-' + s.id, className: active === s.id ? 'on' : '' }, s.title)), h('a', { href: '#coverage' }, 'Coverage')),
        h('div', { className: 'zoom', title: 'Phone size' }, [['S', 0.7], ['M', 0.85], ['L', 1]].map(([l, z]) => h('button', { key: l, className: zoom === z ? 'on' : '', onClick: () => setZoom(z) }, l))))),
      h('header', { className: 'hero' },
        h('h1', null, 'First-time user experience: design interventions'),
        h('p', null, 'An interactive walk-through of every solve from the FTUE actionables. Each block pairs the research problem with a proposed design built on the redBus India bus design system. Screens marked "Try it" are clickable. This is a stakeholder input; Figma designs for development follow.'),
        h('div', { className: 'stats' },
          [[total, 'Solves'], [16, 'Problem areas'], [nBlocks, 'Prototype blocks'], [protoCount, 'Solves shown on screen']].map(([n, l]) => h('div', { className: 'stat', key: l }, h('b', null, n), h('span', null, l)))),
        h('div', { className: 'legend' },
          h('span', null, h('i', { className: 'badge ds' }, 'DS'), 'Built from existing DS components'),
          h('span', null, h('i', { className: 'badge ext' }, 'DS+'), 'DS parts with a new composition'),
          h('span', null, h('i', { className: 'badge new' }, 'New'), 'Needs a new component in the DS'),
          h('span', null, h('i', { className: 'k today', style: { fontStyle: 'normal', padding: '3px 7px', borderRadius: 6, fontSize: 11, fontWeight: 800 } }, 'TODAY'), 'Baseline using DS defaults'),
          h('span', null, h('i', { className: 'k proposed', style: { fontStyle: 'normal', padding: '3px 7px', borderRadius: 6, fontSize: 11, fontWeight: 800 } }, 'PROPOSED'), 'The intervention'))),
      STAGES.map((s) => registry[s.id].length === 0 ? null :
        h('section', { className: 'stage', id: 'stage-' + s.id, key: s.id },
          h('div', { className: 'stage-h' }, h('span', { className: 'n' }, s.n), h('h2', null, s.title), h('small', null, registry[s.id].reduce((a, b) => a + b.sols.length, 0) + ' solves')),
          registry[s.id].map((b) => h(Block, { spec: b, key: b.id })))),
      h(Coverage));
  }

  ReactDOM.createRoot(document.getElementById('app')).render(h(App));
})();
