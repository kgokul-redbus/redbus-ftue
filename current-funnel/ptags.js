/* Persuasion tags revamp: a separate project hosted in the same deck (not FTUE).
   Solves tab = the same flow viewer as FTUE's Design tab (Current / Proposed at the top, pages on the left),
   with only the listing screen (SRP). Persuasion-tag proposals register in their own list, never FTUE's:

     window.PTAGS.PROPOSED.add('srp', {
       sols: ['PT-01'],
       options: [{ key: 'A', label: '…', render: (p) => h(MySrp, p) }],   // or a single `render`
     });

   p = { s, set, go, Current }. Load proposal files after this one and before funnel.js. */
(function () {
  const h = React.createElement;

  const screens = {};
  const PROPOSED = {
    screens, dropped: {},
    add(id, spec) { screens[id] = spec; },
    get(id) { return screens[id]; },
    drop(id) { this.dropped[id] = true; },
  };

  /* the flow viewer is built on first render, once funnel.js (SrpFig, makeFlow) has loaded */
  let Flow = null;
  function Solves() {
    if (!Flow) {
      const F = window.FUNNEL;
      Flow = F.makeFlow({
        screens: F.BASE_SCREENS.filter((x) => x[0] === 'srp'),
        registry: () => PROPOSED,
        init: Object.assign({}, F.INIT, { screen: 'srp' }),
        keys: { mode: 'ptags-flow-mode', opts: 'ptags-options', variant: 'ptags-variant' },
        /* Current has two live versions of the SRP: what is in production, and the layout being tried next */
        variants: () => ({ srp: [{ key: 'prod', label: 'Production' }, { key: 'exp', label: 'Experiment', render: (p) => h(window.PTAGS_EXP.SrpExperiment, p) }] }),
        section: 'ptags-solves',
        restart: 'Reset page',
        note: 'Pick a flow at the top (or press T). Current has two versions of the SRP: Production (live today) and Experiment (the layout being tried next, from the SRP - Cleanup Figma). Proposals for persuasion tags show under Proposed, with Option 1 / 2 when there are several directions.',
      });
    }
    return h(Flow);
  }

  window.PTAGS = {
    PROPOSED,
    sections: [
      ['solves', 'Solves', { render: Solves }],
    ],
  };
})();
