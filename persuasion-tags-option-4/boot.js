/* Persuasion tags · Option 4 on its own page, for sharing.
   Same flow viewer, cards and rail as the Persuasion tags project in the deck, but proposed-only and Option 4 only:
   the rail keeps Reset page, the three switches and the card elements; the Current / Proposed switch, page list and
   option tabs are hidden (index.html). It keeps its own storage keys, so it never touches the deck's saved state. */
(function () {
  const h = React.createElement;
  const KEY = { mode: 'opt4-page-mode', opts: 'opt4-page-options', variant: 'opt4-page-variant' };
  try { localStorage.setItem(KEY.mode, 'proposed'); localStorage.setItem(KEY.opts, JSON.stringify({ srp: 'D' })); } catch (e) {}
  const F = window.FUNNEL;
  const Flow = F.makeFlow({
    screens: F.BASE_SCREENS.filter((x) => x[0] === 'srp'),
    registry: () => window.PTAGS.PROPOSED,
    init: Object.assign({}, F.INIT, { screen: 'srp' }),
    keys: KEY,
    railExtra: (p) => h(window.PTAGS_UGC.Rail, p),
    section: 'opt4-page',
    restart: 'Reset page',
    onRestart: () => window.PTAGS_UGC.reset && window.PTAGS_UGC.reset(),
  });
  ReactDOM.createRoot(document.getElementById('app')).render(h(Flow));
})();
