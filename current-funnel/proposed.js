/* Proposed-state registry.
   Register a proposed version of any funnel screen:

     window.PROPOSED.add('seats', {
       sols: ['SOL-07', 'SOL-35'],
       note: 'Full layout on load, cheapest seats highlighted',
       render: (p) => h(MyProposedSeats, p),   // p = { s, set, go, Current }
     });

   p.Current() returns the current screen element, so a proposal can wrap or extend it instead of copying it.
   Screens with no entry show the current screen in the Proposed column. */
(function () {
  const screens = {};
  window.PROPOSED = {
    screens,
    add(id, spec) { screens[id] = spec; },
    get(id) { return screens[id]; },
  };
})();
