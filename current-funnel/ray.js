/* Ray on SRP unified: a separate project hosted in the same deck (not FTUE, not Persuasion tags).
   Solves tab = the same flow viewer as FTUE's Design tab, with FTUE's current Home and SRP. Proposed docks the RAY
   AI smart filter at the bottom of the SRP (ray-widget.js). Ray proposals register in their own list:

     window.RAY.PROPOSED.add('srp', { options: [{ key: 'A', label: '…', render: (p) => h(MySrp, p) }] });

   p = { s, set, go, Current }. */
(function () {
  const h = React.createElement;
  const screens = {};
  const PROPOSED = {
    screens, dropped: {},
    add(id, spec) { screens[id] = spec; },
    get(id) { return screens[id]; },
    drop(id) { this.dropped[id] = true; },
  };

  PROPOSED.add('srp', {
    note: 'RAY docked at the bottom of the SRP: free text, AI + quick-filter chips, simulated keyboard, gradient glow.',
    render: (p) => h(window.RAYW.RaySrp, p),
  });

  let Flow = null;
  function Solves() {
    if (!Flow) {
      const F = window.FUNNEL;
      Flow = F.makeFlow({
        screens: F.BASE_SCREENS.filter((x) => ['home', 'loc-origin', 'loc-dest', 'srp'].includes(x[0])),
        registry: () => PROPOSED,
        init: Object.assign({}, F.INIT, { screen: 'home' }),
        keys: { mode: 'ray-flow-mode', opts: 'ray-options' },
        section: 'ray-solves',
        restart: 'Restart from home',
      });
    }
    return h(Flow);
  }

  window.RAY = { PROPOSED, sections: [['solves', 'Solves', { render: Solves }]] };
})();
