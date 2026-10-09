/* Proposed-state registry.
   Register a proposed version of any funnel screen:

     window.PROPOSED.add('seats', {
       sols: ['SOL-07', 'SOL-35'],
       label: 'Seat selection',               // optional: the page's name in the proposed flow
       note: 'Full layout on load, cheapest seats highlighted',
       render: (p) => h(MyProposedSeats, p),   // p = { s, set, go, Current }
     });

   A proposal can also add a page that only exists in the proposed flow, with `after: 'screenId'` (plus label),
   and PROPOSED.drop('screenId') removes a page from the proposed flow.

   p.Current() returns the current screen element, so a proposal can wrap or extend it instead of copying it.
   Screens with no entry show the current screen in the Proposed column. */
(function () {
  const screens = {};
  window.PROPOSED = {
    screens,
    dropped: {},
    add(id, spec) { screens[id] = spec; },
    drop(id) { this.dropped[id] = true; },
    get(id) { return screens[id]; },
  };
})();
