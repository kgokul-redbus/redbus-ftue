/* Persuasion tags revamp: a separate project hosted in the same deck (not FTUE).
   Its top tabs live in window.PTAGS.sections: [id, label, { render: Component } | { src: 'page.html' }]. */
(function () {
  const h = React.createElement;

  function Overview() {
    return h('div', { className: 'pt-page' },
      h('div', { className: 'pt-empty' },
        h('span', { className: 'pt-eyebrow' }, 'Persuasion tags'),
        h('h1', null, 'Persuasion tags revamp'),
        h('p', null, 'Nothing here yet. The brief, research and designs for this project will appear in these tabs.')));
  }

  window.PTAGS = {
    sections: [
      ['overview', 'Overview', { render: Overview }],
    ],
  };
})();
