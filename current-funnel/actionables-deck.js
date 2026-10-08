/* Actionables · deck behaviour. Injected by the deck (funnel.js) next to actionables-theme.css.
   Makes each sub-theme card (.item) collapsible from its title; the page's own file stays untouched. */
(function () {
  const KEY = 'ftue-items-folded';
  let F = {};
  try { F = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { F = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(F)); } catch (e) {} };
  const CHEV = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function enhance() {
    document.querySelectorAll('.item[data-item]').forEach((item) => {
      const t = item.querySelector(':scope > .item-title');
      if (t && !t.querySelector('.item-chev')) {
        const c = document.createElement('span'); c.className = 'item-chev'; c.innerHTML = CHEV;
        t.insertBefore(c, t.firstChild);
        t.setAttribute('role', 'button'); t.tabIndex = 0;
      }
      const closed = !!F[item.dataset.item];
      item.classList.toggle('is-folded', closed);
      if (t) t.setAttribute('aria-expanded', String(!closed));
    });
  }
  function toggle(item, v) {
    const id = item.dataset.item;
    if (v === undefined) v = !F[id];
    if (v) F[id] = true; else delete F[id];
    save(); enhance();
  }

  document.addEventListener('click', (e) => {
    const t = e.target.closest('.item > .item-title');
    if (t && !e.target.closest('button,input,select,textarea,a')) { toggle(t.parentElement); return; }
    const all = e.target.closest('.fold-all [data-fold]');
    if (all) {
      const closed = all.dataset.fold === 'collapse';
      document.querySelectorAll('.item[data-item]').forEach((i) => { if (closed) F[i.dataset.item] = true; else delete F[i.dataset.item]; });
      save(); enhance();
    }
  });
  document.addEventListener('keydown', (e) => {
    const t = e.target.closest && e.target.closest('.item > .item-title');
    if (t && e.target === t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(t.parentElement); }
  });

  let q = false;
  new MutationObserver(() => { if (q) return; q = true; requestAnimationFrame(() => { q = false; enhance(); }); })
    .observe(document.body, { childList: true, subtree: true });
  enhance();
})();
