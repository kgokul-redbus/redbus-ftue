/* Language picker with a delight factor (directed by Gokul, no SOL number).
   Each language gets a rich 3D icon of a landmark (Figma AI renders in assets/sol/lang/).
   Native 411.43 dp space inside .pd, same frame as the production Language screen. Styles in sol-lang.css. */
(function () {
  const h = React.createElement;
  const { useState } = React;
  const A = 'assets/sol/lang/';

  const LANGS = [
    { id: 'english', name: 'English', en: '', alt: 'Big Ben' },
    { id: 'marathi', name: 'मराठी', en: 'Marathi', alt: 'Gateway of India' },
    { id: 'hindi', name: 'हिंदी', en: 'Hindi', alt: 'Taj Mahal' },
    { id: 'tamil', name: 'தமிழ்', en: 'Tamil', alt: 'Meenakshi Temple gopuram' },
    { id: 'telugu', name: 'తెలుగు', en: 'Telugu', alt: 'Charminar' },
    { id: 'kannada', name: 'ಕನ್ನಡ', en: 'Kannada', alt: 'Hampi stone chariot' },
  ];

  function LanguageRich({ go }) {
    const P = window.ONB.parts;
    const [lang, setLang] = useState(0);
    const [pop, setPop] = useState(-1);
    const pick = (i) => { setLang(i); setPop(i); };
    return h('div', { className: 'pd lg' },
      h(P.Status),
      h('div', { className: 'pd-lang-scroll' },
        h('div', { className: 'lg-body' },
          h('img', { className: 'lg-logo', src: P.A + 'logo-redbus.png', alt: 'redBus' }),
          h('p', { className: 'lg-h' }, 'Country'),
          h('button', { className: 'lg-country' },
            h('img', { src: A + 'flag-india.png', alt: '' }), h('span', null, 'India'), h('i')),
          h('p', { className: 'lg-h' }, 'Choose your language'),
          h('div', { className: 'lg-list', role: 'radiogroup', 'aria-label': 'Language' },
            LANGS.map((l, i) => h('button', {
              key: l.id, role: 'radio', 'aria-checked': lang === i,
              className: 'lg-card' + (lang === i ? ' on' : ''), style: { '--d': (80 + i * 60) + 'ms' }, onClick: () => pick(i),
            },
              h('span', { className: 'lg-ic' + (pop === i ? ' pop' : ''), key: pop === i ? 'p' + i : 'i' }, h('img', { src: A + l.id + '.png', alt: l.alt })),
              h('span', { className: 'lg-t' },
                h('b', null, l.name, l.en && h('em', null, ' (' + l.en + ')'))),
              h('i', { className: 'lg-radio' })))),
          h('p', { className: 'lg-note' }, 'You can change language later in ‘My Account’'))),
      h('div', { className: 'pd-lang-foot' }, h('button', { className: 'pd-btn', style: { top: 19 }, onClick: () => go('slides') }, 'Get started')),
      h(P.Gesture));
  }

  window.SOLLANG = { LanguageRich };
})();
