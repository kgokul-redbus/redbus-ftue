/* FTUE solves, as directed. Each entry registers the proposed version of one funnel screen.
   p = { s, set, go, Current }; components come from window.FUNNEL / window.ONB / window.SEATS etc. at render time. */
(function () {
  const h = React.createElement;

  /* SOL-18 · Today / Tomorrow work like tabs, not search shortcuts.
     New users don't expect the screen to change on tap, and jumping to SRP skips the women-mode toggle.
     Default is today (filled in the date field); the selected tab gets a dark grey border. */
  /* SOL-17 · integrated search layer (sol-17.js). Any tap on the widget opens one focused layer;
     From → To → When → Review advance on their own, so home is never seen mid-search. */
  window.PROPOSED.add('home', {
    sols: ['SOL-17', 'SOL-18'],
    options: [
      { key: 'A', label: 'Stacked cards', note: 'Tap any field: From → To → When advance by themselves. Today / Tomorrow are tabs; review keeps women mode in view.', render: (p) => h(window.SOL17.HomeSol17, p) },
      { key: 'B', label: 'Search page', note: 'One page: From and To joined; suggestions follow the active field, then the date row. A date returns to home for women mode + Search.', render: (p) => h(window.SOL17B.HomeSol17B, p) },
    ],
  });

  /* SOL-36 · post-booking support as part of onboarding (sol-onb.js) */
  window.PROPOSED.add('slides', {
    sols: ['SOL-36'],
    note: 'Slide 2 shows what help looks like after booking: chat 24×7, free bus change, cancel & refund, on a ticket.',
    render: (p) => h(window.SOLONB.SlidesSol36, p),
  });

  /* SOL-24 · contextualise permission requests (sol-onb.js): location explains its value before the system dialog;
     no notification / review prompts on a first home visit */
  window.PROPOSED.add('location', {
    sols: ['SOL-24'],
    note: 'Location asks with context; the system dialog follows Share location. No notification / review prompt on first home.',
    render: (p) => h(window.SOLONB.LocationSol24, p),
  });
})();
