/* Language picker with a delight factor (directed by Gokul, no SOL number).
   Each language gets a rich 3D icon of a landmark (Figma AI renders in assets/sol/lang/).
   Native 411.43 dp space inside .pd, same frame as the production Language screen. Styles in sol-lang.css. */
(function () {
  const h = React.createElement;
  const { useState } = React;
  const A = 'assets/sol/lang/';

  const LANGS = [
    { id: 'english', name: 'English', en: '', alt: 'Globe' },
    { id: 'marathi', name: 'मराठी', en: 'Marathi', alt: 'Gateway of India' },
    { id: 'hindi', name: 'हिंदी', en: 'Hindi', alt: 'Taj Mahal' },
    { id: 'tamil', name: 'தமிழ்', en: 'Tamil', alt: 'Meenakshi Temple gopuram' },
    { id: 'telugu', name: 'తెలుగు', en: 'Telugu', alt: 'Charminar' },
    { id: 'kannada', name: 'ಕನ್ನಡ', en: 'Kannada', alt: 'Hampi stone chariot' },
  ];

  /* crisp vector flag: accurate bands, 24-spoke Ashoka Chakra, rounded corners and a soft sheen */
  const FlagIndia = () => h('svg', { className: 'lg-flag', viewBox: '0 0 36 24', width: 36, height: 24, 'aria-hidden': true },
    h('defs', null,
      h('clipPath', { id: 'lgFlagClip' }, h('rect', { width: 36, height: 24, rx: 5 })),
      h('linearGradient', { id: 'lgFlagSheen', x1: 0, y1: 0, x2: 0, y2: 1 },
        h('stop', { offset: 0, stopColor: '#fff', stopOpacity: 0.28 }), h('stop', { offset: 0.5, stopColor: '#fff', stopOpacity: 0 }), h('stop', { offset: 1, stopColor: '#000', stopOpacity: 0.06 }))),
    h('g', { clipPath: 'url(#lgFlagClip)' },
      h('rect', { width: 36, height: 8, fill: '#FF9933' }),
      h('rect', { y: 8, width: 36, height: 8, fill: '#FFFFFF' }),
      h('rect', { y: 16, width: 36, height: 8, fill: '#138808' }),
      h('g', { transform: 'translate(18 12)', stroke: '#000080', fill: 'none' },
        h('circle', { r: 3.4, strokeWidth: 0.55 }),
        Array.from({ length: 24 }, (_, k) => h('line', { key: k, x1: 0, y1: 0, x2: 0, y2: -3.2, strokeWidth: 0.28, transform: 'rotate(' + k * 15 + ')' })),
        h('circle', { r: 0.6, fill: '#000080', stroke: 'none' })),
      h('rect', { width: 36, height: 24, fill: 'url(#lgFlagSheen)' })),
    h('rect', { x: 0.25, y: 0.25, width: 35.5, height: 23.5, rx: 4.75, fill: 'none', stroke: 'rgba(0,0,0,.12)', strokeWidth: 0.5 }));

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
            h(FlagIndia), h('span', null, 'India'), h('i')),
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
