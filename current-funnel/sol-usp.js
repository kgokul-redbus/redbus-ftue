/* SOL-36 (and beyond) · USP slides separated from login. Reference: Mindtrip onboarding.
   Three focused slides, one idea each: redBus is a travel app (bus, train, hotels, metro) → help at every step
   of the trip → 20 years of happy journeys. Login is its own step after the last slide.
   Native 411.43 dp space inside .pd, like the production onboarding. Rubicon Ions tokens; styles in sol-usp.css. */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef } = React;
  const I = (name, size) => h(window.IndiaBusDS.Icon, { name, size });
  const W = 411.43;

  const SLIDES = [
    { key: 'lob', title: 'One app for your travel needs', sub: 'Book buses, trains, hotels and metro tickets, all in one place.' },
    { key: 'help', title: 'Help at every step', sub: 'Before you book, on the road and after you arrive, we’re here for you 24×7.' },
    { key: 'years', title: '20 years of happy journeys', sub: 'Trusted by 56 million+ travellers and reviewed by 23 lakh+.' },
  ];

  /* ---- slide 1 · lines of business ---- */
  const LOB = [['Bus', 'lob-bus.png'], ['Train', 'lob-train.png'], ['Hotels', 'lob-hotel.png'], ['Metro', 'lob-metro.png']];
  const ArtLob = () => h('div', { className: 'u-lob' },
    LOB.map(([l, img], k) => h('div', { key: l, className: 'u-tile u-a', style: { '--d': (120 + k * 90) + 'ms', '--r': [-3, 2.5, 2, -2.5][k] + 'deg', '--b': (k * 0.7) + 's' } },
      h('span', { className: 'u-tile-img' }, h('img', { src: 'assets/sol/usp/' + img, alt: '' })),
      h('b', null, l))));

  /* ---- slide 2 · support at every step ---- */
  const Shield = () => h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, 'aria-hidden': true },
    h('path', { d: 'M12 2.5 4.5 5.3v6c0 4.6 3.1 8.7 7.5 10.2 4.4-1.5 7.5-5.6 7.5-10.2v-6L12 2.5z', fill: 'currentColor', opacity: '.18' }),
    h('path', { d: 'M12 2.5 4.5 5.3v6c0 4.6 3.1 8.7 7.5 10.2 4.4-1.5 7.5-5.6 7.5-10.2v-6L12 2.5z', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinejoin: 'round' }),
    h('path', { d: 'm8.8 12 2.2 2.2 4.2-4.4', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  const Clock = () => h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, 'aria-hidden': true },
    h('circle', { cx: 12, cy: 12, r: 8.5, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }),
    h('path', { d: 'M12 7.5V12l3 2', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' }));

  /* Orchestrated entry: card → header → question → typing → answer + live bar → quick replies → the three promises */
  const T_HELP = [550, 1050, 1350]; /* typing, answer, quick replies (ms) */
  const BADGES = [
    { t: '24×7 support', sub: 'Chat or call, any time', tone: 'info', ic: () => h(Clock), pos: { left: 14, top: 106 }, d: 1450, from: 'l' },
    { t: 'Instant refunds', sub: 'Back to your account', tone: 'ok', ic: () => I('ion-check-circle', 'sm'), pos: { right: 12, top: 398 }, d: 1600, from: 'r' },
    { t: 'Helpline for women', sub: 'Dedicated, round the clock', tone: 'brand', ic: () => h(Shield), pos: { left: 14, top: 460 }, d: 1750, from: 'l' },
  ];
  function ArtHelp({ on }) {
    const [step, setStep] = useState(0);
    useEffect(() => {
      if (!on) { setStep(0); return; }
      const t = T_HELP.map((ms, k) => setTimeout(() => setStep(k + 1), ms));
      return () => t.forEach(clearTimeout);
    }, [on]);
    return h('div', { className: 'u-help' },
      h('div', { className: 'u-chat u-a', style: { '--d': '0ms' } },
        h('div', { className: 'u-chat-hd u-a', style: { '--d': '140ms' } },
          h('span', { className: 'u-av' }, 'rB'),
          h('span', null, h('b', null, 'redBuddy'), h('small', null, h('i'), 'Online · replies in seconds'))),
        h('div', { className: 'u-chat-body' },
          h('p', { className: 'u-msg u-msg--me' }, 'My bus is running late. Where is it?'),
          step === 1 && h('p', { className: 'u-msg u-dots', 'aria-label': 'redBuddy is typing' }, h('i'), h('i'), h('i')),
          step >= 2 && h('div', { className: 'u-msg u-msg--bot' },
            h('span', null, 'It’s 12 min away from your boarding point.'),
            h('span', { className: 'u-track' }, h('i'), h('b'))),
          step >= 3 && h('div', { className: 'u-replies' }, ['Track live', 'Call us'].map((r, k) => h('span', { key: r, style: { animationDelay: k * 70 + 'ms' } }, r))))),
      BADGES.map((b) => h('span', { key: b.t, className: 'u-badge u-badge--' + b.from + ' u-a', style: Object.assign({ '--d': b.d + 'ms' }, b.pos) },
        h('span', { className: 'u-badge-ic u-ic--' + b.tone }, b.ic()),
        h('span', { className: 'u-badge-t' }, h('b', null, b.t), h('small', null, b.sub)))));
  }

  /* ---- slide 3 · 20 years + a wall of customer stories drifting past (SAMPLE stories, replace with real ones) ---- */
  const STORIES = [
    { n: 'Priya S', i: 'PS', c: '#7b5cd6', route: 'Chennai → Bengaluru', q: 'Booked for my parents in two minutes and tracked their bus live all night.' },
    { n: 'Arjun M', i: 'AM', c: '#e0773b', route: 'Pune → Goa', q: 'My trip got cancelled and the refund was back the same day.' },
    { n: 'Meena R', i: 'MR', c: '#d6457a', route: 'Hyderabad → Vijayawada', q: 'Picked a bus other women rated highly. Felt safe the whole way.' },
    { n: 'Rahul K', i: 'RK', c: '#2f80c9', route: 'Delhi → Jaipur', q: 'Saw my exact boarding point on the map. No last-minute calls.' },
    { n: 'Ananya P', i: 'AP', c: '#1f9a6a', route: 'Bengaluru → Mysuru', q: 'Changed my travel date in the app without any hassle.' },
    { n: 'Vikram T', i: 'VT', c: '#8a5a12', route: 'Mumbai → Shirdi', q: 'Reviews helped me pick a clean bus with a toilet. Worth it.' },
    { n: 'Kavya N', i: 'KN', c: '#5157e3', route: 'Kochi → Bengaluru', q: 'Chat support sorted my query in minutes, at 2 am.' },
    { n: 'Suresh B', i: 'SB', c: '#c0392b', route: 'Madurai → Chennai', q: 'Ten years of booking with redBus and never missed a bus.' },
  ];
  const Stars = () => h('span', { className: 'u-stars', 'aria-label': '5 stars' }, [0, 1, 2, 3, 4].map((k) => h('span', { key: k }, I('ion-star', 'sm'))));
  const Story = ({ s }) => h('div', { className: 'u-story' },
    h('div', { className: 'u-story-hd' },
      h('span', { className: 'u-sav', style: { background: s.c } }, s.i),
      h('span', null, h('b', null, s.n, h(Stars)), h('small', null, s.route))),
    h('p', null, '“' + s.q + '”'));
  /* each row is its list twice, so a -50% translate loops seamlessly */
  const Row = ({ list, rev, top, d }) => h('div', { className: 'u-row u-a', style: { top, '--d': d } },
    h('div', { className: 'u-row-track' + (rev ? ' u-row-track--rev' : '') }, list.concat(list).map((s, k) => h(Story, { key: k, s }))));
  const ArtYears = () => h('div', { className: 'u-years' },
    h('p', { className: 'u-20 u-a', style: { '--d': '40ms' } }, '20', h('small', null, 'years')),
    h('span', { className: 'u-since u-a', style: { '--d': '220ms' } }, 'Since 2006'),
    h(Row, { list: STORIES.filter((_, k) => k % 2 === 0), top: 252, d: '280ms' }),
    h(Row, { list: STORIES.filter((_, k) => k % 2 === 1), top: 382, d: '420ms', rev: true }));

  const ART = { lob: ArtLob, help: ArtHelp, years: ArtYears };

  function SlidesUSP({ s, set, go }) {
    const i = Math.min(s.slide || 0, 2);
    const last = i === 2;
    const [dx, setDx] = useState(0);
    const drag = useRef(null);
    const to = (k) => set({ slide: Math.max(0, Math.min(2, k)) });
    const login = () => go('login', { slide: 0 });
    const next = () => (last ? login() : to(i + 1));

    const down = (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      drag.current = { x: e.clientX, k: W / r.width, moved: false };
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
    };
    const move = (e) => {
      const d = drag.current; if (!d) return;
      let v = (e.clientX - d.x) * d.k;
      if ((i === 0 && v > 0) || (last && v < 0)) v *= 0.3; /* rubber band at the ends */
      if (Math.abs(v) > 4) d.moved = true;
      setDx(v);
    };
    const up = () => {
      const d = drag.current; drag.current = null; if (!d) return;
      if (dx < -70) to(i + 1); else if (dx > 70) to(i - 1);
      setDx(0);
    };

    return h('div', { className: 'pd u3' + (last ? ' u3--last' : '') },
      h('div', { className: 'u3-stage', onPointerDown: down, onPointerMove: move, onPointerUp: up, onPointerCancel: up },
        h('div', { className: 'u3-track' + (dx ? ' u3-track--drag' : ''), style: { transform: 'translateX(' + (-i * W + dx) + 'px)' } },
          SLIDES.map((sl, k) => h('section', { key: sl.key, className: 'u3-slide u3-slide--' + sl.key + (k === i ? ' on' : ''), 'aria-hidden': k !== i },
            h('div', { className: 'u3-hero' }, h(ART[sl.key], { on: k === i })),
            h('div', { className: 'u3-copy' }, h('h2', null, sl.title), h('p', null, sl.sub)))))),
      h(window.ONB.parts.Status),
      h('img', { className: 'u3-logo', src: window.ONB.parts.A + 'logo-redbus.png', alt: 'redBus' }),
      h('button', { className: 'u3-skip', onClick: login, tabIndex: last ? -1 : 0, 'aria-hidden': last }, 'Skip'),
      h('div', { className: 'u3-dots', role: 'tablist', 'aria-label': 'Slides' }, SLIDES.map((sl, k) => h('button', { key: k, className: k === i ? 'on' : '', 'aria-label': 'Slide ' + (k + 1), 'aria-selected': k === i, onClick: () => to(k) }))),
      h('div', { className: 'u3-foot' },
        h('button', { className: 'u3-btn u3-btn--primary', onClick: next }, h('span', { key: last ? 'l' : 'n' }, last ? 'Get started' : 'Next')),
),
      h('i', { className: 'pd-gesture' }));
  }

  /* ---- Option B · one animated screen: the visual and the line in the middle cycle through the USPs ---- */
  const ONE = [
    { key: 'lob', title: 'One app for your travel needs', sub: 'Buses, trains, hotels and metro tickets.' },
    { key: 'help', title: 'Help at every step, 24×7', sub: 'Before you book, on the road and after you arrive.' },
    { key: 'years', title: '20 years of happy journeys', sub: 'Trusted by 56 million+ travellers.' },
  ];
  function SlidesUSPOne({ go }) {
    const [i, setI] = useState(0);
    const [prev, setPrev] = useState(-1);
    const to = (k) => { setPrev(i); setI(((k % 3) + 3) % 3); };
    const cls = (k) => (k === i ? ' on' : k === prev ? ' was' : '');
    return h('div', { className: 'pd u3 u1' },
      ONE.map((u, k) => h('i', { key: 'bg' + k, className: 'u1-bg u1-bg--' + u.key + (k === i ? ' on' : '') })),
      ONE.map((u, k) => h('div', { key: u.key, className: 'u1-scene u3-slide' + cls(k), 'aria-hidden': k !== i }, h(ART[u.key], { on: k === i }))),
      h(window.ONB.parts.Status),
      h('img', { className: 'u3-logo', src: window.ONB.parts.A + 'logo-redbus.png', alt: 'redBus' }),
      h('div', { className: 'u1-copy', 'aria-live': 'polite' },
        ONE.map((u, k) => h('div', { key: u.key, className: 'u1-line' + cls(k) }, h('h2', null, u.title), h('p', null, u.sub)))),
      h('div', { className: 'u1-bars', role: 'tablist', 'aria-label': 'Highlights' },
        ONE.map((u, k) => h('button', { key: u.key, className: k === i ? 'on' : k < i ? 'done' : '', 'aria-label': u.title, 'aria-selected': k === i, onClick: () => to(k) },
          h('i', { key: k === i ? 'run' + i : 'idle', onAnimationEnd: () => to(i + 1) })))),
      h('button', { className: 'u3-btn u3-btn--primary u1-cta', onClick: () => go('login', { slide: 0 }) }, 'Get started'),
      h('i', { className: 'pd-gesture' }));
  }

  window.SOLUSP = { SlidesUSP, SlidesUSPOne };
})();
