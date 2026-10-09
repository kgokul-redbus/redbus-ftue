/* redBus India bus: the CURRENT funnel, as it works today. No solves applied. */
(function () {
  const h = React.createElement;
  const D = window.IndiaBusDS;
  const { useState, useEffect, useRef, Fragment } = React;
  const inr = (n) => '₹' + n.toLocaleString('en-IN');

  /* ------------------------------------------------------------ data */
  const R = (value, count, tone) => h(D.BusRating, { value, count, tone });
  const BUSES = [
    { id: 'b1', primo: true, departure: '21:15', arrival: '05:50', duration: '8h 35m', seats: 16, singleSeats: 1, fare: '₹900', operator: 'Pinky Gudiya Travels And Cargo', busType: 'A/C Sleeper (2+1)', rating: R('4.5', 278), tags: ['New Bus', 'Toilet'], flags: { ac: 1, sleeper: 1 } },
    { id: 'b2', ribbon: h(D.OfferRibbon, { value: '5% OFF' }), departure: '21:30', arrival: '05:51', duration: '8h 21m', seats: 15, singleSeats: 1, previousFare: '₹952', fare: '₹904', operator: 'Tantia Travels & Cargo', busType: 'AC Sleeper (2+1)', rating: R('4.2', 118), tags: ['Toilet', '97% On Time'], offerStrip: 'Min. 12.5% off on 3 or more seats', flags: { ac: 1, sleeper: 1, deals: 1 } },
    { id: 'b3', departure: '22:00', arrival: '06:30', duration: '8h 30m', seats: 9, fare: '₹780', operator: 'Shree Balaji Tours', busType: 'Non A/C Sleeper (2+1)', rating: R('3.8', 64, 'mid'), tags: ['Toilet'], flags: { sleeper: 1 } },
    { id: 'b4', departure: '22:45', arrival: '07:10', duration: '8h 25m', seats: 21, fare: '₹850', operator: 'Rajdhani Express', busType: 'AC Seater (2+2)', rating: R('4.0', 203), tags: ['Charging point'], flags: { ac: 1 } },
    { id: 'b5', ribbon: h(D.OfferRibbon, { value: '8% OFF' }), departure: '23:00', arrival: '07:20', duration: '8h 20m', seats: 12, previousFare: '₹1,050', fare: '₹966', operator: 'Jaipur Darshan Travels', busType: 'AC Sleeper (2+1)', rating: R('4.4', 156), tags: ['Toilet', 'New Bus'], flags: { ac: 1, sleeper: 1, deals: 1 } },
    { id: 'b6', departure: '23:30', arrival: '08:00', duration: '8h 30m', seats: 6, fare: '₹720', operator: 'Sri Ganga Travels', busType: 'Non A/C Seater (2+2)', rating: R('3.6', 41, 'mid'), tags: [], flags: {} },
    { id: 'b7', departure: '23:55', arrival: '08:15', duration: '8h 20m', seats: 18, fare: '₹890', operator: 'National Tours', busType: 'AC Sleeper (2+1)', rating: R('4.1', 92), tags: ['Toilet'], flags: { ac: 1, sleeper: 1 } },
  ];
  const sold = (r) => ({ state: 'sold', restriction: r });
  const DECKS = [
    { label: 'Lower deck', steering: true, seats: [null, { id: 'L25', price: 950, restriction: 'male' }, sold('male'), sold('male'), sold('male'), sold('female'), sold('female'), sold('male'), sold('female'), sold('female'), sold('male'), sold('female'), sold('male'), sold('male'), sold('female'), sold('female'), sold('male'), sold('female')] },
    { label: 'Upper deck', seats: [null, sold('female'), sold('female'), sold('male'), sold('male'), sold('female'), sold('male'), { id: 'U17', price: 900 }, { id: 'U18', price: 900 }, sold('male'), { id: 'U19', price: 900 }, { id: 'U20', price: 900 }, sold('male'), { id: 'U21', price: 900 }, { id: 'U22', price: 900 }, sold('male'), { id: 'U23', price: 900 }, { id: 'U24', price: 900 }] },
  ];
  const PRICE = {};
  DECKS.forEach((d) => d.seats.forEach((x) => { if (x && x.id) PRICE[x.id] = x.price; }));
  const BOARDING = [
    { size: 'tall', time: '21:15', date: '10 Jul', name: 'Shop no.35 old delhi railway station fatehpuri parking', address: 'shop no.35 old delhi railway station fatehpuri parking' },
    { size: 'xtall', time: '22:14', date: '10 Jul', name: 'Pinky gudiya travel and cargo ekta enclave metro station peeragarhi', address: 'pinky gudiya travel and cargo ekta enclave metro station peeragarhi' },
    { time: '22:45', date: '10 Jul', name: 'Bahadurgarh bypass', address: 'bahadurgarh bypass' },
  ];
  const DROPPING = [
    { time: '05:10', date: '11 Jul', name: 'Lalgarh' }, { time: '05:15', date: '11 Jul', name: 'Ricco' }, { time: '05:20', date: '11 Jul', name: 'Ridhi sidhi' },
    { time: '05:25', date: '11 Jul', name: 'Jain college' }, { time: '05:30', date: '11 Jul', name: 'Chahal chowk' }, { time: '05:40', date: '11 Jul', name: 'Sukharia circle' },
    { time: '05:50', date: '11 Jul', name: 'Koda chowk ganganagar', tag: 'Popular dropping point' },
  ];
  const TABS = [{ id: 'highlights', label: 'Highlights' }, { id: 'cancellation', label: 'Cancellation policy' }, { id: 'date-change', label: 'Date change policy' }, { id: 'route', label: 'Bus route' }, { id: 'boarding-info', label: 'Boarding points' }, { id: 'dropping-info', label: 'Dropping points' }, { id: 'policies', label: 'Other policies' }];
  const POLICY = [
    { time: 'Before 7th Jul 01:15 PM', standard: '90% refund', flexible: '100% refund' },
    { time: 'From 7th Jul 01:15 PM Until 8th Jul 09:15 AM', standard: '75% refund', flexible: '100% refund' },
    { time: 'After 8th Jul 09:15 AM', standard: '50% refund', flexible: '100% refund' },
  ];
  const ROUTE = ['Delhi', 'Bahadurgarh (Haryana)', 'Rohtak', 'Meham', 'Hansi', 'Hisar (Haryana)', 'Bassi (Haryana)', 'Bhadra (Rajasthan)', 'Gogamedi', 'Nohar', 'Rawatsar', 'Hanumangarh', 'Pakka Saharana', 'Ganganagar (Sri Ganganagar)'];
  const OTHER = [{ glyph: '☺', title: 'Child passenger policy', description: 'Children above the age of 7 will need a ticket' }, { glyph: '▣', title: 'Luggage policy', description: '2 pieces of luggage will be accepted free of charge per passenger.' }];
  const SAVED = [{ name: 'Sakshi Gabba', details: 'Female, 30 Years' }, { name: 'Shubham Sharma', details: 'Male, 32 Years' }];

  const dateLabel = (key) => { const [m, d] = key.split('-').map(Number); const dt = new Date(2026, 6 + m, d); return dt.toLocaleDateString('en-US', { weekday: 'short' }) + ' ' + d + '-' + dt.toLocaleDateString('en-US', { month: 'short' }); };
  const dayOf = (key) => { const [m, d] = key.split('-').map(Number); return new Date(2026, 6 + m, d).toLocaleDateString('en-US', { weekday: 'short' }); };
  const shortDate = (key) => { const [m, d] = key.split('-').map(Number); return d + ' ' + new Date(2026, 6 + m, d).toLocaleDateString('en-US', { month: 'short' }); };

  /* ------------------------------------------------------------ shared bits */
  const Top = ({ title, sub, onBack, right }) => h('div', { className: 'top' },
    h('button', { className: 'ib', onClick: onBack, 'aria-label': 'Back' }, h(D.Icon, { name: 'ion-arrow-back' })),
    h('div', { className: 'sp' }, h('h4', null, title), sub && h('small', null, sub)), right);
  const SeatBar = ({ onBack }) => h(Fragment, null,
    h('div', { className: 'ff-status' }),
    h('header', { className: 'ff-appbar' },
      h('button', { className: 'ff-back', type: 'button', 'aria-label': 'Back', onClick: onBack }, h(D.Icon, { name: 'ion-arrow-back', className: 'ff-icon' })),
      h('div', { className: 'ff-appbar__copy' }, h('h1', null, 'Select Seats'), h('p', null, 'Delhi → Ganganagar (Sri Ganganagar)'))));
  const T = (role, props, ...c) => h(D.Text, Object.assign({ role }, role === 'label' ? { as: 'div' } : null, props), ...c);
  const total = (s) => s.seats.reduce((a, id) => a + (PRICE[id] || (window.SEATS && window.SEATS.PRICE[id]) || 0), 0);

  /* ------------------------------------------------------------ screens */
  function Splash({ go }) {
    return h('div', { className: 'splash tap', onClick: () => go('lang') }, 'redBus');
  }

  function Onboarding({ go }) {
    return h('div', { style: { position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column', padding: '64px 24px 28px', gap: 16, textAlign: 'center' } },
      h('div', { style: { alignSelf: 'center', width: 140, height: 140, borderRadius: '50%', background: '#fdecec', display: 'grid', placeItems: 'center', color: '#d84e55' } }, h(D.Icon, { name: 'ion-bus', size: 'lg' })),
      T('title-1', null, 'Welcome to redBus'), T('body', { className: 'muted' }, 'Book bus tickets across India.'),
      h('div', { className: 'sp' }),
      h(D.Button, { variant: 'primary', block: true, onClick: () => go('home') }, 'Allow location access'),
      h(D.Button, { variant: 'tertiary', block: true, onClick: () => go('home') }, 'Skip'));
  }

  /* Common home: Figma "Common HP revamp" 4063:28087 */
  const HA = 'assets/home/';
  const ArtCard = ({ art, children }) => h('div', { className: 'hp-card' },
    children,
    h('div', { className: 'hp-card__bg', style: { background: art.bg }, 'aria-hidden': true },
      h('img', { src: HA + 'art/' + art.dots, style: { left: 0, top: 0, width: 298, height: 200 }, alt: '' }),
      art.layers.map(([f, l, b, w, hh, o], i) => {
        o = o || {};
        const st = { left: l, bottom: b, width: w, height: hh, mixBlendMode: o.m ? 'multiply' : o.o ? 'overlay' : undefined, opacity: o.op };
        if (o.r) return h('div', { key: i, className: 'rw', style: st }, h('div', { style: { width: o.r[1], height: o.r[2], rotate: o.r[0] + 'deg' } }, h('img', { src: HA + 'art/' + f, alt: '' })));
        return h('img', { key: i, src: HA + 'art/' + f, style: st, alt: '' });
      })));

  const OFFERS = [
    { art: 'card1', tag: 'Bus', t1: 'Save up to ₹250 ', t2: 'on UPSRTC bookings', cta: 'UPSRTC' },
    { art: 'card2', tag: 'Bus', t1: 'Save up to ₹250 ', t2: 'on UPSRTC bookings', cta: 'UPSRTC' },
  ];
  const NAV = [['home', 'Home', 'nav-home.svg', 19.9156, 20.0014], ['bookings', 'Bookings', 'nav-bookings.svg', 17.0001, 16.0004], ['offers', 'Offers', 'nav-offers.svg', 18.9781, 19.6702], ['help', 'Help', 'nav-help.svg', 20.0008, 17.9964], ['account', 'Account', 'nav-account.svg', 13.5, 18.75]];

  function Home({ s, set, go, quickTabs, onField }) {
    const women = !!s.women, setWomen = (v) => set({ women: v });
    /* onField (proposed): every field opens the integrated search layer at that step */
    const field = (step, fallback) => () => (onField ? onField(step) : fallback());
    const [chip, setChip] = useState('Bus');
    const [m, d] = s.dateKey.split('-').map(Number);
    const dt = new Date(2026, 6 + m, d);
    const wd = dt.toLocaleDateString('en-US', { weekday: 'short' });
    const dm = ' ' + d + '-' + dt.toLocaleDateString('en-US', { month: 'short' });
    const quick = [['Today', window.SEARCH.todayKey], ['Tomorrow', window.SEARCH.tomorrowKey]];
    return h('div', { className: 'hp' },
      h('div', { className: 'hp-scroll' },
        h('div', { className: 'hp-status' },
          h('p', { className: 'hp-status__time' }, '9:30'),
          h('img', { className: 'hp-status__cam', src: HA + 'sb-camera.png', width: 24, height: 24, alt: '' }),
          h('img', { src: HA + 'sb-battery.svg', style: { right: 24, top: 14, width: 8, height: 15 }, alt: '' }),
          h('img', { src: HA + 'sb-path.svg', style: { right: 53, top: 13, width: 17, height: 17 }, alt: '' }),
          h('img', { src: HA + 'sb-path1.svg', style: { right: 53, top: 14.42, width: 17, height: 14.167 }, alt: '' }),
          h('img', { src: HA + 'sb-path.svg', style: { right: 37, top: 13, width: 17, height: 17 }, alt: '' }),
          h('img', { src: HA + 'sb-path2.svg', style: { right: 38.42, top: 14.42, width: 14.167, height: 14.167 }, alt: '' })),
        h('div', { className: 'hp-top' },
          h('div', { className: 'hp-logo' }, h('img', { src: HA + 'logo-redbus.svg', alt: 'redBus' })),
          h('div', { className: 'hp-top__btns' },
            h('div', { className: 'hp-top__slot' }, h('button', { className: 'hp-pill' }, h('img', { className: 'hp-rot', src: HA + 'ic-globe.svg', alt: '' }), h('span', null, 'Eng'), h('img', { className: 'hp-rotflip', src: HA + 'ic-expand-more.svg', alt: '' }))),
            h('div', { className: 'hp-top__slot' }, h('button', { className: 'hp-pill hp-pill--wallet' }, h('img', { className: 'hp-rot', src: HA + 'ic-wallet.svg', alt: '' }), h('span', null, 'Wallet'), h('span', { className: 'hp-wallet-amt' }, '₹500'))),
            h('div', { className: 'hp-top__slot' }, h('button', { className: 'hp-pill hp-pill--icon', 'aria-label': 'Account' }, h('img', { className: 'hp-rotflip', src: HA + 'ic-my-account.svg', alt: '' }))))),
        h('div', { className: 'hp-lobs' },
          [['Bus', 'lob-bus.png', 'hp-lob__bus'], ['Train', 'lob-train.png'], ['Hotel', 'lob-hotel.png'], ['Metro', 'lob-metro.png']].map(([t, f, c]) =>
            h('button', { key: t, className: 'hp-lob' }, h('div', { className: 'hp-lob__ic' }, h('img', { src: HA + f, className: c, alt: '' })), h('p', null, t)))),
        h('div', { className: 'hp-search' },
          h('p', { className: 'hp-h3' }, 'Book bus tickets'),
          h('div', { className: 'hp-widget' },
            h('div', { className: 'hp-usp' }, 'ZERO convenience fee*'),
            h('div', { className: 'hp-fields' },
              h('button', { className: 'hp-field', onClick: field('from', () => go('loc-origin')) }, h('img', { src: HA + 'ic-boarding-point.svg', alt: '' }),
                h('div', { className: 'hp-field__labels' }, h('p', { className: 'hp-cap' }, 'From'), h('p', { className: 'hp-city', 'data-ph': 'Enter source' }, s.origin || ''))),
              h('div', { className: 'hp-div' }),
              h('button', { className: 'hp-field', style: { height: 52 }, onClick: field('to', () => go('loc-dest')) }, h('img', { src: HA + 'ic-dropping-point.svg', alt: '' }),
                h('div', { className: 'hp-field__labels' }, h('p', { className: 'hp-cap hp-cap--ios' }, 'To'), h('p', { className: 'hp-city', 'data-ph': 'Enter destination' }, s.dest || ''))),
              h('div', { className: 'hp-div' }),
              h('div', { className: 'hp-date' },
                h('button', { className: 'hp-date__left', onClick: field('when', () => set({ sheet: 'date' })) }, h('img', { src: HA + 'ic-date-range.svg', alt: '' }),
                  h('div', { className: 'hp-field__labels' }, h('p', { className: 'hp-cap', style: { color: 'rgba(29,29,29,.64)', whiteSpace: 'nowrap' } }, 'Date of Journey'), h('p', { className: 'hp-date__val' }, wd, h('b', null, dm)))),
                h('div', { className: 'hp-quick', role: quickTabs ? 'tablist' : undefined }, quick.map(([l, k]) => h('button', { key: l, className: 'hp-qbtn' + (quickTabs && s.dateKey === k ? ' hp-qbtn--on' : ''), role: quickTabs ? 'tab' : undefined, 'aria-selected': quickTabs ? s.dateKey === k : undefined,
                  /* production: a quick date is a shortcut that searches straight away. SOL-18 turns them into tabs. */
                  onClick: () => (quickTabs ? set({ dateKey: k }) : go('srp', { dateKey: k })) }, h('span', null, l)))),
                h('div', { className: 'hp-fade' })),
              h('div', { className: 'hp-div' }),
              h('button', { className: 'hp-swap', 'aria-label': 'Swap', onClick: () => set({ origin: s.dest, dest: s.origin }) }, h('span', null, h('img', { src: HA + 'ic-swap-vert.svg', alt: '' }))),
              h('div', { className: 'hp-women' }, h('img', { src: HA + 'ic-face-3.svg', alt: '' }),
                h('div', { className: 'hp-women__txt' }, h('p', null, 'Booking for woman'), h('p', null, 'Know more')),
                h('button', { className: 'hp-switch', role: 'switch', 'aria-checked': women, 'aria-label': 'Booking for woman', onClick: () => setWomen(!women) }, h('i'))))),
          h('button', { className: 'hp-cta', onClick: () => go('srp') }, h(D.Icon, { name: 'ion-search' }), 'Search buses')),
        h('div', { style: { height: 0 } }),
        h('section', { className: 'hp-offers', style: { marginTop: 0 } },
          h('div', { className: 'hp-titles' }, h('div', { className: 'hp-offers-title', role: 'heading', 'aria-label': 'Offers' }, h('i')), h('button', { className: 'hp-viewmore' }, 'View More')),
          h('div', { className: 'hp-chips' }, ['Bus', 'Train', 'Hotel', 'Metro'].map((c) => h('button', { key: c, className: 'hp-chip', 'aria-pressed': chip === c, onClick: () => setChip(c) }, h('span', null, h('b', null, c))))),
          h('div', { className: 'hp-cards' }, OFFERS.map((o, i) => h(ArtCard, { key: i, art: window.HOME_ART[o.art] },
            h('div', { className: 'hp-card__top' }, h('span', { className: 'hp-tag' }, o.tag), h('div', { className: 'hp-card__title' }, h('p', null, o.t1), h('p', null, o.t2))),
            h('button', { className: 'hp-card__btn' }, h('img', { src: HA + 'ic-local-offer.svg', alt: '' }), o.cta)))),
          h('div', { className: 'hp-dots' }, h('b', null, '1/4'), ['puck1.svg', 'puck2.svg', 'puck3.svg'].map((f) => h('img', { key: f, src: HA + f, alt: '' }))))),
      h('nav', { className: 'hp-nav' },
        h('div', { className: 'hp-nav__tabs' }, NAV.map(([id, l, f, w, hh]) => h('button', { key: id, className: 'hp-tab', 'aria-current': id === 'home' ? 'page' : undefined }, h('i', null, h('img', { src: HA + f, width: w, height: hh, alt: '' })), h('span', null, l)))),
        h('div', { className: 'hp-gesture' }, h('i'))),
      s.sheet === 'date' && h(window.SEARCH.DateSheet, { s, set }),
      s.postOnb && h(window.ONB.HomePrompts, { s, set }));
  }

  function Points({ s, set, go }) {
    const [stage, setStage] = useState(s.bp ? 'dropping' : 'boarding');
    const ready = s.bp && s.dp;
    return h(Fragment, null,
      h('div', { className: 'ff-status' }),
      h('header', { className: 'ff-appbar' },
        h('button', { className: 'ff-back', type: 'button', 'aria-label': 'Back', onClick: () => go('seats') }, h(D.Icon, { name: 'ion-arrow-back', className: 'ff-icon' })),
        h('div', { className: 'ff-appbar__copy' }, h('h1', null, 'Select boarding & dropping point'), h('p', null, s.bus.operator))),
      h('div', { className: 'sc', style: { top: 100, background: '#f4f3f8', paddingBottom: 100 } },
        h(D.PointTabs, { value: stage, onValueChange: setStage, boardingLabel: s.bp ? s.bp.name : 'Delhi', droppingLabel: s.dp ? s.dp.name : 'Ganganagar (Sri Ganganagar)', boardingChosen: !!s.bp, droppingChosen: !!s.dp }),
        stage === 'boarding'
          ? h(D.PointList, { heading: 'All boarding points in Delhi', points: BOARDING, value: s.bp && s.bp.name, onValueChange: (id) => { set({ bp: BOARDING.find((p) => p.name === id) }); setStage('dropping'); } })
          : h(D.PointList, { heading: 'All dropping points in Ganganagar (Sri Ganganagar)', points: DROPPING, value: s.dp && s.dp.name, onValueChange: (id) => set({ dp: DROPPING.find((p) => p.name === id) }) })),
      h('div', { className: 'bar' }, h('div', { style: { opacity: ready ? 1 : .45 } }, h(D.Button, { variant: 'primary', block: true, onClick: () => ready && go('custinfo') }, 'Proceed'))));
  }

  function CustInfo({ s, set, go }) {
    const b = s.bus, n = s.seats.length;
    return h(Fragment, null,
      h('div', { className: 'sc', style: { background: '#f4f3f8', paddingBottom: 130 } },
        h(Top, { title: 'Passenger information', onBack: () => go('points') }),
        h(D.TripSummary, { operator: b.operator, boardingTime: 'Fri, 10 Jul · ' + s.bp.time, boardingPoint: s.bp.name, droppingTime: 'Sat, 11 Jul · ' + s.dp.time, droppingPoint: s.dp.name, seats: n, onViewDetails: () => go('seats', { sheet: 'details' }) }),
        h('div', { style: { padding: '12px 0', display: 'grid', gap: 12 } },
          h(D.PassengerCard, { passengers: SAVED, required: Math.max(n, 1), value: s.pax, onValueChange: (v) => set({ pax: v }) }),
          h(D.ContactDetailsCard, { phone: '+91 8802627572', email: 'sgrdng93@gmail.com', region: 'Rajasthan', whatsapp: true }))),
      h('div', { className: 'bar' },
        h('div', { className: 'row', style: { marginBottom: 10 } }, T('caption', { className: 'muted' }, n + (n === 1 ? ' seat' : ' seats')), h('div', { className: 'sp' }), T('title-3', { tabular: true }, inr(total(s)))),
        h(D.Button, { variant: 'primary', block: true, onClick: () => go('payment') }, 'Continue to payment')));
  }

  /* ------------------------------------------------------------ app */
  const SCREENS = [
    ['splash', 'Splash', 'prod', (p) => h(window.ONB.Splash, p), '#d63942'],
    ['lang', 'Language', 'prod', (p) => h(window.ONB.Language, p), '#fff'],
    ['slides', 'Value slides + login', 'prod', (p) => h(window.ONB.Slides, p), '#fff'],
    ['login', 'Login', 'prod', (p) => h(window.ONB.Login, p), '#fff'],
    ['otp', 'OTP', 'prod', (p) => h(window.ONB.Otp, p), '#fff'],
    ['location', 'Location permission', 'prod', (p) => h(window.ONB.Location, p), '#fff'],
    ['home', 'Common home', 'fig', Home, '#f2f2f8'],
    ['loc-origin', 'From search', 'prod', (p) => h(window.SEARCH.LocationSearch, Object.assign({ mode: 'origin' }, p)), '#fff'],
    ['loc-dest', 'To search', 'prod', (p) => h(window.SEARCH.LocationSearch, Object.assign({ mode: 'destination' }, p)), '#fff'],
    ['srp', 'Search results', 'fig', (p) => h(window.SRPFIG.SrpFig, p), '#f2f2f8'],
    ['seats', 'Seat selection + bus details', 'prod', (p) => h(window.SEATS.Seats, p), '#fff'],
    ['points', 'Boarding & dropping', 'prod', (p) => h(window.POINTS.Points, p), '#fff'],
    ['custinfo', 'Customer info', 'prod', (p) => h(window.CUST.CustInfo, p), '#fff'],
    ['payment', 'Payment', 'prod', (p) => h(window.PAY.Payment, p), '#fff'],
    ['ticket', 'Ticket page', 'prod', (p) => h(window.TICKET.Ticket, p), '#fff'],
  ];
  const RP = 'reference/prod/';
  const REF = {
    srp: () => 'reference/srp-figma.png', 'loc-origin': () => RP + '13-search-boarding.jpg', 'loc-dest': () => RP + '14-search-dropping.jpg',
    home: (s) => s.sheet === 'date' ? RP + '12-home-date-sheet.jpg' : s.postOnb === 'notif' ? RP + '09-home-notification-ask.jpg' : s.postOnb === 'review' ? RP + '10-home-review-ask.jpg' : 'reference/home-figma.png',
    splash: () => RP + '00-splash.png', lang: () => RP + '02-onb-language.jpg', slides: (s) => RP + ['03-onb-slide1-login.jpg', '04-onb-slide2-login.jpg', '05-onb-slide3-login.jpg'][s.slide || 0],
    login: () => RP + '06-onb-login-phone.jpg', custinfo: () => RP + '25-cust-full.png', payment: () => RP + '31-pay-full.png', ticket: () => RP + '35-ticket-full.png', points: (s) => s.bpN ? RP + '23-dropping.jpg' : RP + '22-boarding.jpg', seats: (s) => s.bd ? RP + '20-seat-bus-details-full.png' : (s.seats || []).length ? RP + '21-seat-selected.jpg' : RP + '19-seat-on-load.jpg', otp: () => RP + '07-onb-otp.jpg', location: () => RP + '08-onb-location.jpg',
  };
  const INIT = { screen: 'splash', origin: 'Bengaluru', dest: 'Chennai', dateKey: '3-7', bus: BUSES[0], seats: [], bp: null, dp: null, pax: [], sheet: null };

  /* Two flows sit at the top of the hierarchy. Current = SCREENS. Proposed = the same pages, where a page with a
     registered proposal renders it (and may be renamed), plus pages a proposal inserts (`after`) or drops
     (PROPOSED.drop). Each flow keeps its own journey, so flow changes never fight the other flow's state. */
  const TAGS = { ap: 'APPROX', ds: 'DS', fig: 'FIGMA', prod: 'PROD', new: 'NEW' };
  const currentFlow = () => SCREENS.map(([id, label, tag, render, bg]) => ({ id, label, tag, render, bg }));
  function proposedFlow() {
    const P = window.PROPOSED, dropped = P.dropped || {};
    const list = currentFlow().filter((x) => !dropped[x.id]).map((x) => {
      const spec = P.get(x.id);
      return spec ? Object.assign({}, x, { label: spec.label || x.label, spec }) : x;
    });
    Object.keys(P.screens).forEach((id) => {
      const spec = P.screens[id];
      if (list.some((x) => x.id === id) || !spec.after) return;
      const at = list.findIndex((x) => x.id === spec.after);
      list.splice(at < 0 ? list.length : at + 1, 0, { id, label: spec.label || id, tag: 'new', bg: spec.bg || '#fff', render: () => null, spec });
    });
    return list;
  }

  function App() {
    const [mode, setModeRaw] = useState(() => { try { return localStorage.getItem('ftue-funnel-mode') === 'proposed' ? 'proposed' : 'current'; } catch (e) { return 'current'; } });
    const setMode = (m) => { setModeRaw(m); try { localStorage.setItem('ftue-funnel-mode', m); } catch (e) {} };
    const [states, setStates] = useState({ current: INIT, proposed: INIT });
    const s = states[mode];
    const [zoom, setZoom] = useState(1);
    const [overlay, setOverlay] = useState(false);
    useEffect(() => { document.documentElement.style.setProperty('--z', zoom); }, [zoom]);
    const update = (fn) => setStates((all) => Object.assign({}, all, { [mode]: fn(all[mode]) }));
    const set = (p) => update((x) => Object.assign({}, x, p));
    const go = (screen, p) => update((x) => {
      const n = Object.assign({}, x, { screen, sheet: null, bd: false }, p);
      if (['points', 'custinfo', 'payment', 'ticket'].includes(screen) && !n.seats.length) n.seats = ['L1'];
      if (['custinfo', 'payment', 'ticket'].includes(screen)) { n.bp = n.bp || { name: 'Kalasipalayam', time: '21:45' }; n.dp = n.dp || { name: 'Panimalar College', time: '05:55' }; n.bpN = n.bpN || n.bp.name; n.dpN = n.dpN || n.dp.name; if (!n.pax.length) n.pax = ['Shubham Sharma']; }
      return n;
    });
    const flow = mode === 'proposed' ? proposedFlow() : currentFlow();
    /* a page outside this flow (e.g. one the proposal dropped) still renders its current version */
    const page = flow.find((x) => x.id === s.screen) || currentFlow().find((x) => x.id === s.screen);
    const spec = mode === 'proposed' ? page.spec : null;
    /* a solve can carry several options (spec.options); the chosen one is remembered per screen */
    const [optPick, setOptPick] = useState(() => { try { return JSON.parse(localStorage.getItem('ftue-options') || '{}'); } catch (e) { return {}; } });
    const opts = spec ? (spec.options || [{ key: 'A', render: spec.render, note: spec.note }]) : [];
    const opt = opts.find((o) => o.key === optPick[s.screen]) || opts[0];
    const pickOpt = (k) => setOptPick((x) => { const n = Object.assign({}, x, { [s.screen]: k }); try { localStorage.setItem('ftue-options', JSON.stringify(n)); } catch (e) {} return n; });
    useEffect(() => {
      const f = (e) => { if ((e.key === 't' || e.key === 'T') && document.body.dataset.section === 'design' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) setModeRaw((m) => { const n = m === 'current' ? 'proposed' : 'current'; try { localStorage.setItem('ftue-funnel-mode', n); } catch (x) {} return n; }); };
      window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f);
    }, []);
    const sheets = () => h(Fragment, null,
      s.screen === 'srp' && h(D.FilterSheet, { open: s.sheet === 'filter', onClose: () => set({ sheet: null }), onApply: () => set({ sheet: null }), onClear: () => set({ sheet: null }) }),
      s.screen === 'srp' && h(D.RaySheet, { open: s.sheet === 'ray', onClose: () => set({ sheet: null }) }));
    const Current = () => h(page.render, { s, set, go });
    const body = opt ? opt.render({ s, set, go, Current }) : Current();
    const visible = flow.filter((x) => !x.id.startsWith('loc-'));
    const onPage = (x) => s.screen === x.id || (x.id === 'home' && s.screen.startsWith('loc-'));
    return h('div', { className: 'shell' },
      h('aside', { className: 'rail' },
        h('div', { className: 'switch flow', role: 'tablist', 'aria-label': 'Flow' }, [['current', 'Current'], ['proposed', 'Proposed']].map(([m, l]) =>
          h('button', { key: m, role: 'tab', 'aria-selected': mode === m, className: mode === m ? 'on' : '', onClick: () => setMode(m) }, l))),
        h('h1', null, mode === 'proposed' ? 'Proposed flow' : 'Current flow'),
        h('ol', null, visible.map((x, i) => h('li', { key: x.id },
          h('button', { className: onPage(x) ? 'on' : '', onClick: () => go(x.id) }, h('span', { className: 'n' }, String(i + 1).padStart(2, '0')), x.label,
            mode === 'proposed' && x.spec && x.tag !== 'new' && h('i', { className: 'has-prop', title: 'Changed in the proposed flow' }),
            h('span', { className: 'tag ' + x.tag }, TAGS[x.tag]))))),
        h('div', { className: 'tools' },
          h('button', { onClick: () => update(() => INIT) }, 'Restart from splash'),
          mode === 'current' && REF[s.screen] && h('button', { className: overlay ? 'on' : '', onClick: () => setOverlay(!overlay) }, overlay ? 'Hide reference overlay' : 'Overlay reference (50%)'),
          h('div', { className: 'z' }, [['S', .8], ['M', 1], ['L', 1.15]].map(([l, z]) => h('button', { key: l, className: zoom === z ? 'on' : '', onClick: () => setZoom(z) }, l)))),
        h('p', { className: 'note' }, 'Pick a flow at the top (or press T); each flow keeps its own place in the journey. In the proposed flow a red dot marks a changed page and NEW a page that only exists there. PROD = rebuilt from production screenshots. FIGMA = built from Figma.')),
      h('main', { className: 'stage' },
        h('div', { className: 'col', key: mode },
          h('div', { className: 'col-h' },
            mode === 'proposed' && !spec && h('span', { className: 'none' }, 'Unchanged from current'),
            opts.length > 1 && h('div', { className: 'opts', role: 'tablist', 'aria-label': 'Option' }, opts.map((o) => h('button', { key: o.key, role: 'tab', 'aria-selected': o === opt, className: o === opt ? 'on' : '', title: o.label || '', onClick: () => pickOpt(o.key) }, 'Option ' + o.key)))),
          h('div', { className: 'pw' },
            h('div', { className: 'pframe' }, h(D.IonsRoot, { device: true, style: { height: 800, minHeight: 0, background: page.bg, position: 'relative' } }, body, sheets()),
              mode === 'current' && overlay && REF[s.screen] && h('img', { className: 'ref', src: REF[s.screen](s), alt: '' }))))));
  }

  window.FUNNEL = { Home, HA };

  /* ------------------------------------------------------------ presentation sections
     Add a section by appending to SECTIONS: [id, label, { src: 'page.html' } | { render: Component }]. */
  const SECTIONS = [
    ['actionables', 'Actionables', { src: 'actionables.html', zoom: 1.25, css: ['fonts.css', 'actionables-theme.css'], js: ['actionables-deck.js'] }],
    ['design', 'Design', { render: App }],
  ];
  /* same-origin page in a frame, optionally zoomed (applied to its root so the page reflows at that scale) */
  function Frame({ src, title, zoom, css, js }) {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current;
      /* zoom + deck theme (same-origin page): the page's own file stays untouched */
      const apply = () => { try {
        const d = el.contentDocument; if (!d || !d.documentElement || d.URL === 'about:blank') return;
        if (zoom) d.documentElement.style.zoom = zoom;
        d.documentElement.setAttribute('data-theme', 'light');
        (css || []).forEach((href) => { if (!d.querySelector('link[data-deck="' + href + '"]')) { const l = d.createElement('link'); l.rel = 'stylesheet'; l.href = href; l.dataset.deck = href; (d.body || d.head).appendChild(l); } });
        (js || []).forEach((src) => { if (!d.querySelector('script[data-deck="' + src + '"]')) { const sc = d.createElement('script'); sc.src = src; sc.dataset.deck = src; (d.body || d.head).appendChild(sc); } });
      } catch (e) {} };
      el.addEventListener('load', apply); apply();
      return () => el.removeEventListener('load', apply);
    }, [zoom]);
    return h('iframe', { ref, src, title });
  }
  function Deck() {
    const initial = () => { const k = location.hash.slice(1); if (SECTIONS.some((x) => x[0] === k)) return k; try { return localStorage.getItem('ftue-section') || SECTIONS[0][0]; } catch (e) { return SECTIONS[0][0]; } };
    const [sec, setSecRaw] = useState(initial);
    const setSec = (k) => { setSecRaw(k); try { localStorage.setItem('ftue-section', k); } catch (e) {} history.replaceState(null, '', '#' + k); };
    useEffect(() => { const f = () => { const k = location.hash.slice(1); if (SECTIONS.some((x) => x[0] === k)) setSecRaw(k); }; window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f); }, []);
    useEffect(() => { document.body.dataset.section = sec; }, [sec]);
    return h(Fragment, null,
      h('header', { className: 'deck-bar' },
        h('div', { className: 'deck-brand' }, h('img', { src: 'assets/onb/logo-redbus.png', alt: 'redBus' }), h('span', null, 'FTUE')),
        h('nav', { className: 'deck-tabs', role: 'tablist' }, SECTIONS.map(([id, label]) => h('button', { key: id, role: 'tab', 'aria-selected': sec === id, className: sec === id ? 'on' : '', onClick: () => setSec(id) }, label)))),
      SECTIONS.map(([id, , spec]) => h('section', { key: id, className: 'deck-sec deck-sec--' + (spec.src ? 'frame' : 'app'), hidden: sec !== id },
        spec.src ? h(Frame, { src: spec.src, title: id, zoom: spec.zoom, css: spec.css, js: spec.js }) : h(spec.render))));
  }

  ReactDOM.createRoot(document.getElementById('app')).render(h(Deck));
})();
