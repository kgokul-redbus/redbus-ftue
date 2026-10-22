/* Persuasion tags on a phone: mounts one option (window.M_OPT) full screen. Set up by m/<option>/index.html. */
(function () {
  const h = React.createElement;
  const id = window.M_ID, opt = window.M_OPT;
  const KEY = { mode: 'mob-' + id + '-mode', opts: 'mob-' + id + '-options', variant: 'mob-' + id + '-variant' };
  try { localStorage.setItem(KEY.mode, 'proposed'); localStorage.setItem(KEY.opts, JSON.stringify({ srp: opt })); } catch (e) {}
  const F = window.FUNNEL;
  const Flow = F.makeFlow({
    screens: F.BASE_SCREENS.filter((x) => x[0] === 'srp'),
    registry: () => window.PTAGS.PROPOSED,
    init: Object.assign({}, F.INIT, { screen: 'srp' }),
    keys: KEY,
    railExtra: (p) => h(window.PTAGS_UGC.Rail, p),
    section: 'mob-' + id,
    restart: 'Reset page',
    onRestart: () => { window.M_RESET(); location.reload(); },
  });
  ReactDOM.createRoot(document.getElementById('app')).render(h(Flow));
  /* scale the 360 wide design to the screen */
  const fit = () => document.documentElement.style.setProperty('--ms', String(Math.max(0.8, window.innerWidth / 360)));
  fit(); window.addEventListener('resize', fit); window.addEventListener('orientationchange', fit);
  /* the round button opens the left pane as a bottom sheet */
  const fab = document.createElement('button');
  fab.className = 'm-fab'; fab.setAttribute('aria-label', 'Settings');
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>';
  const scrim = document.createElement('div'); scrim.className = 'm-scrim';
  const set = (v) => document.body.classList.toggle('m-open', v);
  fab.onclick = () => set(true); scrim.onclick = () => set(false);
  document.body.appendChild(scrim); document.body.appendChild(fab);
})();
