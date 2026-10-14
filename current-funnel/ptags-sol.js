/* Persuasion tags · SRP listings from real data, as directed (2026-10-09).
   Current › Production / Experiment show each bus's shown_tag_names (today); Proposed › Option 1 / 2 show the same
   two designs with proposed_tag_names. Production card design = Option 1, experiment card design = Option 2.
   Listings: the top 25 Bengaluru → Chennai tuples from Taag Summary_v3.xlsx (Android, NON_LMB, ranks 1–25):
   operator, departure, bus type (translated to English), rating, scores, shown and proposed tag sets.
   Tag order follows the readout's MECE boxes: comparators (UGC, then On Time) → features → reassurance.
   Arrival, duration, price and seats are not in the sheet; they are illustrative. */
(function () {
  const h = React.createElement;
  const A = 'assets/srpf/', X = 'assets/srpx/';

  /* shown_tag_names per rank (what users see on the SRP today), mapped to keys */
  const SHOWN = {"1": ["comfort", "womenR", "new", "onTime", "womenT"], "2": ["comfort", "new", "snack", "womenT"], "3": ["comfort", "fdc", "new", "toilet", "womenT"], "4": ["comfort", "fdc", "womenR", "womenT"], "5": ["comfort", "fdc", "womenR", "womenT"], "6": ["comfort", "lounge", "toilet", "womenT"], "7": ["comfort", "womenR", "new", "womenT"], "8": ["comfort", "fdc", "womenR", "onTime", "womenT"], "9": ["comfort", "womenR", "onTime", "womenT"], "10": ["comfort", "new", "toilet", "womenT"], "11": ["comfort", "freeSnacks", "womenR", "womenT"], "12": ["comfort", "fdc", "womenR", "new", "snack", "womenT"], "13": ["comfort", "fdc", "womenR", "toilet", "womenT"], "14": ["comfort", "new", "toilet", "womenT"], "15": ["comfort", "onTime", "toilet", "womenT"], "16": ["comfort", "fdc", "toilet", "womenT"], "17": ["comfort", "womenR", "womenT"], "18": ["comfort", "freeSnacks", "womenR", "womenT"], "19": ["comfort", "freeSnacks", "womenR", "womenT"], "20": ["comfort", "toilet", "womenT"], "21": ["comfort", "womenR"], "22": ["comfort", "womenR", "new", "onTime", "womenT"], "23": ["comfort", "new"], "24": ["comfort", "womenR"], "25": ["comfort", "fdc", "womenR", "new", "toilet", "womenT"]};

  /* [rank, operator, departure, bus type, rating, proposed tags, scores] */
  const ROWS = [[1, "SABARI TRAVELS", "22:45", "Bharat Benz A/C Sleeper (2+1)", 4.7, ["comfort", "onTime", "clean", "staff", "new", "fdc"], {"comfort": 9.4, "onTime": 93.0, "clean": 9.67, "staff": 9.56}], [2, "SRI SAI TRAVELS", "21:45", "A/C Seater / Sleeper (2+1)", 4.9, ["comfort", "onTime", "clean", "staff", "new", "fdc"], {"comfort": 9.2, "onTime": 88.0, "clean": 9.69, "staff": 9.49}], [3, "V Bus Holidays", "21:10", "Bharat Benz A/C Sleeper (2+1)", 4.9, ["comfort", "onTime", "clean", "staff", "new", "toilet", "fdc"], {"comfort": 9.7, "onTime": 88.0, "clean": 9.86, "staff": 9.81}], [4, "ANT KING", "21:50", "Volvo B11R Multi-Axle A/C Sleeper (2+1)", 4.5, ["clean", "staff", "fdc"], {"comfort": 8.2, "onTime": 77.0, "clean": 8.85, "staff": 8.54}], [5, "SST Limoliner", "20:45", "Bharat Benz A/C Sleeper (2+1)", 4.7, ["comfort", "onTime", "clean", "staff", "fdc"], {"comfort": 9.4, "onTime": 80.0, "clean": 9.67, "staff": 9.65}], [6, "ACLS Navigator", "22:15", "Bharat Benz A/C Sleeper (2+1)", 4.4, ["onTime", "clean", "staff", "toilet", "fdc"], {"comfort": 8.4, "onTime": 80.0, "clean": 8.98, "staff": 9.08}], [7, "MMK Travels", "21:00", "Bharat Benz A/C Sleeper (2+1)", 4.8, ["comfort", "clean", "staff", "new", "fdc"], {"comfort": 9.2, "onTime": 63.0, "clean": 9.48, "staff": 9.46}], [8, "ADITHIYA AIRBUS", "20:40", "Bharat Benz A/C Sleeper (2+1)", 4.7, ["comfort", "onTime", "clean", "staff", "fdc"], {"comfort": 9.6, "onTime": 88.0, "clean": 9.51, "staff": 9.65}], [9, "Jai Sai Baba Travels", "23:00", "A/C Sleeper (2+1)", 4.8, ["comfort", "onTime", "clean", "staff", "fdc"], {"comfort": 9.5, "onTime": 91.0, "clean": 9.64, "staff": 9.51}], [10, "zingbus plus", "21:45", "A/C Semi Sleeper / Sleeper (2+1)", 4.7, ["onTime", "clean", "staff", "new", "toilet", "fdc"], {"comfort": 8.5, "onTime": 89.0, "clean": 9.32, "staff": 9.14}], [11, "FRESHBUS", "18:00", "Electric A/C Seater / Sleeper (2+1)", 4.6, ["clean", "staff", "fdc"], {"comfort": 9.0, "onTime": 72.0, "clean": 9.22, "staff": 8.72}], [12, "GREEN CHANNEL EXPRESS", "20:00", "A/C Sleeper (2+1)", 4.8, ["comfort", "onTime", "clean", "staff", "new", "fdc"], {"comfort": 9.6, "onTime": 85.0, "clean": 9.65, "staff": 9.64}], [13, "SST Limoliner", "21:10", "Bharat Benz A/C Sleeper (2+1)", 4.8, ["comfort", "onTime", "clean", "staff", "toilet", "fdc"], {"comfort": 9.5, "onTime": 81.0, "clean": 9.42, "staff": 9.49}], [14, "KMRL kalaimakal Road Lines", "21:45", "A/C Seater / Sleeper (2+1)", 4.8, ["comfort", "onTime", "clean", "staff", "new", "toilet", "fdc"], {"comfort": 9.7, "onTime": 90.0, "clean": 9.6, "staff": 9.59}], [15, "KMRL kalaimakal Road Lines", "22:45", "A/C Seater / Sleeper (3+1)", 4.8, ["comfort", "onTime", "clean", "staff", "toilet", "fdc"], {"comfort": 9.2, "onTime": 96.0, "clean": 9.54, "staff": 9.41}], [16, "EASYRIDE SMART BUS", "20:00", "A/C Sleeper (2+1)", 4.8, ["clean", "staff", "toilet", "fdc"], {"comfort": 8.9, "onTime": 73.0, "clean": 9.07, "staff": 9.4}], [17, "KMRL Kalaimakal(sk)", "22:00", "A/C Seater / Sleeper (2+1)", 4.7, ["comfort", "clean", "staff", "fdc"], {"comfort": 9.4, "onTime": 43.0, "clean": 9.37, "staff": 9.39}], [18, "FRESHBUS", "19:30", "Electric A/C Seater / Sleeper (2+1)", 4.6, ["clean", "staff", "fdc"], {"comfort": 8.8, "onTime": 64.0, "clean": 9.11, "staff": 8.76}], [19, "FRESHBUS", "20:30", "Electric A/C Seater / Sleeper (2+1)", 4.6, ["clean", "staff", "fdc"], {"comfort": 9.0, "onTime": 75.0, "clean": 9.14, "staff": 8.97}], [20, "Shri Abinesh Roadways", "00:05", "Bharat Benz A/C Seater / Sleeper (2+1)", 4.7, ["comfort", "clean", "staff", "toilet", "fdc"], {"comfort": 9.3, "onTime": 30.0, "clean": 9.59, "staff": 9.34}], [21, "FlixBus", "20:45", "A/C Sleeper (2+1)", 4.6, ["onTime", "clean", "staff", "fdc"], {"comfort": 8.3, "onTime": 87.0, "clean": 9.24, "staff": 9.08}], [22, "Jabbar Travels", "21:15", "Volvo 9600 Multi-Axle A/C Sleeper (2+1)", 4.8, ["comfort", "onTime", "clean", "staff", "new", "fdc"], {"comfort": 9.1, "onTime": 95.0, "clean": 9.94, "staff": 9.35}], [23, "FlixBus", "20:10", "A/C Seater / Sleeper (2+1)", 4.6, ["onTime", "clean", "staff", "new", "fdc"], {"comfort": 8.8, "onTime": 82.0, "clean": 9.21, "staff": 9.12}], [24, "FlixBus", "21:20", "A/C Sleeper (2+1)", 4.6, ["clean", "staff", "fdc"], {"comfort": 8.7, "onTime": 72.0, "clean": 9.18, "staff": 9.19}], [25, "SRI SIDDHAN TRAVELS", "21:15", "A/C Sleeper (2+1)", 4.6, ["comfort", "onTime", "clean", "staff", "new", "toilet", "fdc"], {"comfort": 9.2, "onTime": 80.0, "clean": 9.5, "staff": 9.08}]];

  /* comparators → features → other amenities → reassurance → women tags (shown today only) */
  /* Cleanliness + Staff behaviour are still under discussion: one switch (rail) turns them on or off in every option */
  const UGC = { on: (() => { try { return localStorage.getItem('ptags-ugc') !== 'off'; } catch (e) { return true; } })(), subs: new Set() };
  UGC.set = (v) => { UGC.on = v; try { localStorage.setItem('ptags-ugc', v ? 'on' : 'off'); } catch (e) {} UGC.subs.forEach((f) => f(v)); };
  const useUgc = () => { const [v, setV] = React.useState(UGC.on); React.useEffect(() => { UGC.subs.add(setV); return () => UGC.subs.delete(setV); }, []); return v; };
  const ugcFilter = (tags, on) => (on ? tags : tags.filter((k) => k !== 'clean' && k !== 'staff'));
  function UgcToggle({ mode }) {
    const on = useUgc();
    return h('div', { className: 'pt-ugc' + (mode === 'proposed' ? '' : ' pt-ugc--off') },
      h('p', null, 'Cleanliness & Staff', h('small', null, 'All proposed options')),
      h('button', { className: 'pt-sw' + (on ? ' on' : ''), role: 'switch', 'aria-checked': on, 'aria-label': 'Cleanliness & Staff', onClick: () => UGC.set(!on) }, h('i')));
  }
  /* 3D list icons (Options 4 and 5, 2026-10-14 notes from Prakash): comparators get a 3D star, reassurance a 3D check.
     One rail switch flips it, so the two treatments can be compared on the same screen. */
  const CSTAR = { on: (() => { try { return localStorage.getItem('ptags-cstar') !== 'off'; } catch (e) { return true; } })(), subs: new Set() };
  CSTAR.set = (v) => { CSTAR.on = v; try { localStorage.setItem('ptags-cstar', v ? 'on' : 'off'); } catch (e) {} CSTAR.subs.forEach((f) => f(v)); };
  const useCstar = () => { const [v, setV] = React.useState(CSTAR.on); React.useEffect(() => { CSTAR.subs.add(setV); return () => CSTAR.subs.delete(setV); }, []); return v; };
  function CstarToggle({ mode }) {
    const on = useCstar();
    return h('div', { className: 'pt-ugc' + (mode === 'proposed' ? '' : ' pt-ugc--off') },
      h('p', null, '3D icons ★ ✓', h('small', null, 'Options 4 and 5 · comparators ★, reassurance ✓')),
      h('button', { className: 'pt-sw' + (on ? ' on' : ''), role: 'switch', 'aria-checked': on, 'aria-label': '3D icons', onClick: () => CSTAR.set(!on) }, h('i')));
  }
  window.PTAGS_UGC = { Toggle: UgcToggle, reset: () => { WM.set(true); COACH.set(false); } };

  /* Women mode (Option 4 only): adds the women reassurance items. Which buses qualify comes from today's
     shown_tag_names (Women Traveling / Highly rated by women); the sheet has no head-count, so the number is illustrative. */
  /* on by default (2026-10-13): a woman user lands with women mode on */
  const WM = { on: (() => { try { return localStorage.getItem('ptags-women-v2') !== 'off'; } catch (e) { return true; } })(), subs: new Set() };
  WM.set = (v) => { WM.on = v; try { localStorage.setItem('ptags-women-v2', v ? 'on' : 'off'); } catch (e) {} WM.subs.forEach((f) => f(v)); };
  /* the women-rating coach mark: shown on landing with women mode on, until dismissed; Reset page brings it back */
  const COACH = { seen: false, subs: new Set() };
  COACH.set = (v) => { COACH.seen = v; COACH.subs.forEach((f) => f(v)); };
  const useCoachSeen = () => { const [v, setV] = React.useState(COACH.seen); React.useEffect(() => { COACH.subs.add(setV); return () => COACH.subs.delete(setV); }, []); return v; };
  const useWomen = () => { const [v, setV] = React.useState(WM.on); React.useEffect(() => { WM.subs.add(setV); return () => WM.subs.delete(setV); }, []); return v; };
  function WomenToggle({ mode }) {
    const on = useWomen();
    return h('div', { className: 'pt-ugc' + (mode === 'proposed' ? '' : ' pt-ugc--off') },
      h('p', null, 'Women mode', h('small', null, 'Options 4 and 5 · on by default')),
      h('button', { className: 'pt-sw' + (on ? ' on' : ''), role: 'switch', 'aria-checked': on, 'aria-label': 'Women mode', onClick: () => WM.set(!on) }, h('i')));
  }

  const ORDER = ['comfort', 'clean', 'staff', 'onTime', 'toilet', 'new', 'lounge', 'freeSnacks', 'snack', 'fdc', 'womenT', 'womenR'];
  const one = (v) => (Math.round(v * 10) / 10).toFixed(1);
  const label = (k, sc) => ({
    comfort: 'Comfort score: ' + one(sc.comfort) + '/10',
    clean: 'Cleanliness: ' + one(sc.clean) + '/10',
    staff: 'Staff behaviour: ' + one(sc.staff) + '/10',
    onTime: Math.round(sc.onTime) + '% On Time',
    toilet: 'Toilet',
    new: 'New bus',
    fdc: 'Free date change',
    lounge: 'Lounge', freeSnacks: 'Free snacks', snack: 'Snack',
    womenT: 'Women travelling', womenR: 'Highly rated by women',
  })[k];

  /* illustrative fields, stable per rank */
  const pad = (n) => String(n).padStart(2, '0');
  /* EV icon on the bus type: Current only (removed from all Proposed options, 2026-10-12) */
  const BUSES = ROWS.map(([rank, op, dep, type, rating, tags, sc]) => {
    const [hh, mm] = dep.split(':').map(Number);
    const durM = 6 * 60 + 10 + (rank * 7) % 40;
    const t = hh * 60 + mm + durM;
    const seats = 4 + (rank * 5) % 17;
    return {
      rank, op, dep, type, rating, sc,
      proposed: ORDER.filter((k) => tags.includes(k)),
      shown: ORDER.filter((k) => (SHOWN[rank] || []).includes(k)),
      arr: pad(Math.floor(t / 60) % 24) + ':' + pad(t % 60),
      dur: Math.floor(durM / 60) + 'h ' + (durM % 60) + 'm',
      price: '₹' + (899 + (rank * 137) % 900).toLocaleString('en-IN'),
      seats: seats + ' Seats', single: '(' + (1 + rank % 4) + ' Single)',
      ev: /Electric/.test(type),
    };
  });

  const Star = () => h('svg', { viewBox: '0 0 12 12', 'aria-hidden': true }, h('path', { d: 'M6 .9l1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.7 2.9 10.4l.7-3.5L1 4.5l3.5-.4z', fill: '#fff' }));

  /* Option 1 · production card design */
  /* ---------- Master card (Figma SRP - Cleanup, AndroidTupple-India 36958:20941) · Proposed only ----------
     Every element of the master card is in place on the Proposed cards, each with an on/off switch in the rail.
     Bus 1 carries every element (the master); the rest carry them on a realistic spread of ranks. The tag
     treatment of each option is untouched; these elements sit around it. Current never shows them. */
  const MASTER_EL = [
    ['seatlock', 'Book for ₹0 banner'], ['lmb', 'Live bus status'], ['nonstop', 'Non-stop'], ['rtc', 'RTC concession'],
    ['primo', 'Primo'], ['deals', 'Deals'], ['via', 'Via route'], ['layover', 'Next day + layover'], ['book0', 'Book for ₹0 price tag'],
    ['award', 'Award'], ['ad', 'Ad'], ['highlight', 'BP/DP personalisation'], ['reward', 'tripReward'], ['prev', 'Previously booked'],
  ];
  const RANKS = {
    seatlock: [1, 6, 14], lmb: [1, 9], nonstop: [1, 4, 12, 20], rtc: [1, 7, 18], primo: [1, 3, 5, 8, 12, 15, 22], deals: [1, 2, 3, 10, 15, 21],
    via: [1, 6, 11, 17], layover: [1, 13], book0: [1, 5, 9, 16, 23], award: [1, 2, 3, 7, 12, 22], ad: [1, 10], highlight: [1, 4, 8, 14, 19, 24], reward: [1, 5, 11, 20],
    prev: [3, 9], /* at most two cards on the SRP (not the first); Option 4 only. Every previously booked bus also gets BP/DP personalisation (not the reverse) */
  };
  RANKS.prev.forEach((r) => { if (!RANKS.highlight.includes(r)) RANKS.highlight.push(r); });
  const MS = { on: (() => { try { return Object.assign(Object.fromEntries(MASTER_EL.map(([k]) => [k, true])), JSON.parse(localStorage.getItem('ptags-master') || '{}')); } catch (e) { return Object.fromEntries(MASTER_EL.map(([k]) => [k, true])); } })(), subs: new Set() };
  MS.set = (k, v) => { MS.on = Object.assign({}, MS.on, { [k]: v }); try { localStorage.setItem('ptags-master', JSON.stringify(MS.on)); } catch (e) {} MS.subs.forEach((f) => f(MS.on)); };
  const useMaster = () => { const [v, setV] = React.useState(MS.on); React.useEffect(() => { MS.subs.add(setV); return () => MS.subs.delete(setV); }, []); return v; };
  const has = (m, k, b) => !!(m && m[k] && RANKS[k].includes(b.rank));
  const arrow = () => h('img', { className: 'mx-arw', src: X + 'ic-arrow-fwd.svg', alt: '' });

  /* top section: Book-for-₹0 banner and live bus status */
  const mTop = (m, b) => (has(m, 'seatlock', b) || has(m, 'lmb', b)) && h('div', { className: 'mx-top' },
    has(m, 'seatlock', b) && h('div', { className: 'mx-seat' },
      h('div', null, h('b', null, '₹0 માં બુક કરો — જો તમે મુસાફરી કરો તો ચૂકવણી કરો!'), h('small', null, 'Book for ₹0 — Pay later!')),
      h('img', { src: X + 'ic-info.svg', alt: 'Info' })),
    has(m, 'lmb', b) && h('div', { className: 'mx-lmb' },
      h('p', { className: 'mx-lmb-st' }, h('span', { className: 'mx-plate' }, h('i'), 'KA 03 K 2345', h('i')), h('span', { className: 'mx-status' }, 'IS STARTING')),
      h('p', { className: 'mx-lmb-bp' }, h('span', null, 'Next Up:'), h('span', { className: 'mx-bps' }, 'Electronic city', arrow(), 'Anand Rao circle', arrow(), 'Madiwala', arrow()), h('span', { className: 'mx-more' }, h('span', null, '+3 Stops')))));
  /* pre-service rows: Non-stop, RTC concession, Primo + deals, via route */
  const mPre = (m, b) => [
    has(m, 'nonstop', b) && h('img', { key: 'ns', className: 'mx-nonstop', src: X + 'nonstop.png', alt: 'Non-stop' }),
    has(m, 'rtc', b) && h('div', { key: 'rtc', className: 'mx-rtc' }, h('img', { src: X + 'rtc-senior.png', alt: '' }), h('span', null, '25% concession for Senior citizens')),
    (has(m, 'primo', b) || has(m, 'deals', b)) && h('div', { key: 'pd', className: 'px-hd' },
      has(m, 'primo', b) && h('img', { className: 'px-primo', src: X + 'primo-otg.png', alt: 'Primo On Time Guarantee' }),
      /* for the presentation: the Group deal only shows on non-Primo buses, so Primo rows stay uncrowded */
      has(m, 'deals', b) && h('span', { className: 'px-deals' }, !has(m, 'primo', b) && h('span', { className: 'px-deal' }, 'Group. ', h('b', null, '20% OFF')), h('span', { className: 'px-deal px-deal--last' }, 'Last min. ', h('b', null, '20% OFF')))),
    has(m, 'via', b) && h('span', { key: 'via', className: 'px-via' }, 'Via Chittor, Rajasthan'),
  ].filter(Boolean);
  /* service row pieces (px family) */
  const mTime = (m, b) => h('p', { className: 'px-time' }, h('b', null, b.dep),
    has(m, 'layover', b) && h('span', { className: 'px-next' }, 'Next day'),
    has(m, 'layover', b) ? h('span', { className: 'px-lay' }, h('i'), h('em', null, h('img', { src: X + 'ic-layover.svg', alt: 'Layover' })), h('i')) : h('i', { className: 'px-sep' }),
    b.arr);
  const mSub = (m, b) => h('p', { className: 'px-sub' }, b.dur, h('i', { className: 'px-dot' }),
    has(m, 'layover', b) ? h('span', { className: 'px-warn px-med' }, '2h Layover at Delhi') : [h('span', { key: 's' }, b.seats), h('span', { key: 'g', className: 'px-warn' }, b.single)]);
  const mPrice = (m, b, onw) => h('div', { className: 'px-price' }, has(m, 'book0', b) && h('span', { className: 'mx-book0' }, 'Book for ₹0'), h('b', null, b.price), h('small', null, onw || 'Onwards'));
  const mName = (m, b, cls) => h('p', { className: cls || 'px-nm' }, h('span', null, b.op),
    has(m, 'award', b) && h('img', { className: 'px-award', src: X + 'ic-award.png', alt: 'Award' }),
    has(m, 'ad', b) && h('span', { className: 'px-ad' }, 'Ad'));
  const mPost = (m, b) => has(m, 'highlight', b) && h('span', { key: 'hl', className: 'px-tag' }, h('img', { src: X + 'ic-star-tag.png', alt: '' }), 'Stops at Aanad Rao Circle & Kanchipuram');
  const mFoot = (m, b) => has(m, 'reward', b) && h('img', { className: 'mx-reward', src: X + 'footer-tripreward.png', alt: 'tripReward: Take 5 trips to get a free ticket' });

  function MasterPanel({ mode }) {
    const m = useMaster();
    return h('div', { className: 'pt-master' + (mode === 'proposed' ? '' : ' pt-ugc--off') },
      h('p', null, 'Card elements', h('small', null, 'Master card · all proposed options')),
      h('ul', null, MASTER_EL.map(([k, l]) => h('li', { key: k },
        h('label', null, h('input', { type: 'checkbox', checked: !!m[k], onChange: (e) => MS.set(k, e.target.checked) }), h('span', null, l))))));
  }
  function RailExtra(p) { return h(React.Fragment, null, h(window.PTAGS_UGC.Toggle, p), h(WomenToggle, p), h(CstarToggle, p), h(MasterPanel, p)); }
  window.PTAGS_UGC.Rail = RailExtra;

  function ProdCard({ b, go, set: tags }) {
    const ugc = useUgc();
    const ms = useMaster(), m = tags === 'proposed' ? ms : null;
    tags = tags === 'proposed' ? ugcFilter(b.proposed, ugc) : b[tags];
    const pre = mPre(m, b), top = mTop(m, b), foot = mFoot(m, b);
    return h('div', { className: 'sf-t' + (top ? ' mx-has-top' : '') + (foot ? ' mx-has-foot' : ''), role: 'button', tabIndex: 0, onClick: () => go('seats') },
      top, ...pre,
      h('div', { className: 'sf-tp' },
        h('div', null,
          m && has(m, 'layover', b) ? mTime(m, b) : h('p', { className: 'sf-time' }, h('b', null, b.dep), h('i'), b.arr),
          m && has(m, 'layover', b) ? mSub(m, b) : h('p', { className: 'sf-sub' }, b.dur, h('i'), b.seats, h('em', null, b.single))),
        m && has(m, 'book0', b) ? mPrice(m, b, 'onwards') : h('div', { className: 'sf-price' }, h('b', null, b.price), h('small', null, 'onwards'))),
      h('div', { className: 'sf-bo' },
        h('div', null,
          m ? mName(m, b, 'nm mx-nm') : h('p', { className: 'nm' }, b.op),
          b.ev && !m ? h('p', { className: 'ty' }, h('img', { src: A + 'ic-ev.png', alt: '' }), b.type) : h('p', { className: 'ty' }, b.type)),
        h('div', { className: 'sf-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
      h('div', { className: 'sf-tags' }, tags.map((k) => h('span', { key: k, className: 'sf-tag' }, label(k, b.sc)))),
      m && mPost(m, b), foot);
  }

  /* Option 2 · experiment card design: the tags as a two-column ✓ list */
  function ExpCard({ b, go, set: tags }) {
    const ugc = useUgc();
    const ms = useMaster(), m = tags === 'proposed' ? ms : null;
    tags = tags === 'proposed' ? ugcFilter(b.proposed, ugc) : b[tags];
    const half = Math.ceil(tags.length / 2);
    const cols = [tags.slice(0, half), tags.slice(half)];
    return h('div', { className: 'px-card', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      mTop(m, b),
      h('div', { className: 'px-body' },
        ...mPre(m, b),
        h('div', { className: 'px-svc' }, h('div', null, mTime(m, b), mSub(m, b)), mPrice(m, b)),
        h('div', { className: 'px-bo' },
          h('div', { className: 'px-bo-l' },
            mName(m, b),
            h('p', { className: 'px-ty' }, b.ev && !m && h('img', { src: X + 'ic-ev.svg', alt: '' }), h('span', null, b.type))),
          h('div', { className: 'px-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
        h('div', { className: 'px-rtb' }, cols.map((col, i) => h('ul', { key: i }, col.map((k) => h('li', { key: k }, h('img', { src: X + 'ic-check.svg', alt: '' }), h('span', null, label(k, b.sc))))))),
        mPost(m, b)),
      mFoot(m, b));
  }

  /* Option 3 · as directed (2026-10-09), proposed tags:
     Comparators → the most important tier: tags like today's, built on the Tag component (crystals)
     Features → icon + text right below the operator block; the operator + bus type pair lines up with the rating
     Reassurance → a ✓ list in the secondary text colour */
  const Tag = (p, ...c) => h(window.IndiaBusDS.Tag, p, ...c);
  const svg = (paths) => h('svg', { viewBox: '0 0 16 16', width: 12, height: 12, 'aria-hidden': true, className: 'p3-ic' },
    paths.map((d, k) => typeof d === 'string' ? h('path', { key: k, d, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }) : React.cloneElement(d, { key: k })));
  const ions = (paths) => h('svg', { viewBox: '0 0 24 24', width: 16, height: 16, 'aria-hidden': true, className: 'p3-ic' },
    paths.map(([d, even], k) => h('path', { key: k, d, fill: 'currentColor', fillRule: even ? 'evenodd' : undefined, clipRule: even ? 'evenodd' : undefined })));
  const IC = {
    /* IONS • Rubicon icons (Figma library: toilet, new_bus), 24 px artwork drawn in currentColor */
    toilet: () => ions([['M9.5 2C9.91421 2 10.25 2.33579 10.25 2.75V10.4893H20.5C20.9142 10.4893 21.2499 10.8251 21.25 11.2393V11.2891C21.25 12.9388 20.4002 14.3908 19.1143 15.2295L16.0645 17.3613C14.9275 18.1565 14.25 19.4573 14.25 20.8447V21.2393C14.25 21.6535 13.9142 21.9893 13.5 21.9893H6.5C6.26965 21.9891 6.05222 21.8835 5.91016 21.7021C5.76802 21.5205 5.71707 21.2834 5.77246 21.0596L6.69434 17.3369C6.89339 16.5327 6.57627 15.6933 5.90723 15.2197C5.87755 15.2004 5.84758 15.1811 5.81836 15.1611L5.79785 15.1484L5.79883 15.1475C4.75599 14.4252 4.0158 13.2956 3.80859 11.9893H3.5C3.08579 11.9893 2.75 11.6535 2.75 11.2393V2.75C2.75 2.33579 3.08579 2 3.5 2H9.5ZM8.14062 15.9756C8.28366 16.5268 8.29386 17.1176 8.15039 17.6973L7.45898 20.4893H12.7617C12.8693 18.7472 13.7643 17.1405 15.2051 16.1328L15.4092 15.9893H8.5L8.14062 15.9756ZM5.33691 11.9893C5.52423 12.7823 6.00256 13.4631 6.65234 13.9131C6.68233 13.9325 6.71197 13.9525 6.74121 13.9727C7.2482 14.2996 7.85189 14.4893 8.5 14.4893H16.5498C17.1872 14.4893 17.7815 14.3036 18.2803 13.9824L18.3809 13.9111C18.3956 13.9009 18.4106 13.8909 18.4258 13.8818C19.0471 13.4315 19.5001 12.7633 19.6729 11.9893H5.33691ZM4.25 10.4893H8.75V3.5H4.25V10.4893Z', 1], ['M20 9.25H11.5V7.75H20V9.25Z']]),
    woman: () => ions([['M12.204 8.67505C13.0281 8.73867 13.7495 9.27277 14.0458 10.0549L16.704 17.0725C16.7912 17.3029 16.759 17.5612 16.619 17.7639C16.4791 17.9666 16.2491 18.088 16.0028 18.0881H14.7655V21.2571C14.7655 21.6713 14.4297 22.0071 14.0155 22.0071H9.99988C9.58567 22.0071 9.24988 21.6713 9.24988 21.2571V18.0881H7.99988C7.75224 18.0881 7.52052 17.9654 7.38074 17.761C7.24115 17.5566 7.21086 17.2963 7.30066 17.0657L10.038 10.0364C10.3591 9.21193 11.1532 8.66922 12.038 8.66919L12.204 8.67505ZM12.038 10.1692C11.7715 10.1692 11.5321 10.333 11.4354 10.5813L9.09656 16.5881H9.99988L10.077 16.592C10.455 16.6307 10.7499 16.95 10.7499 17.3381V20.5071H13.2655V17.3381C13.2655 16.924 13.6014 16.5883 14.0155 16.5881H14.9159L12.6425 10.5862C12.5592 10.3666 12.3647 10.2124 12.1376 10.177L12.038 10.1692Z', 1], ['M14.8768 7.30981C14.7156 6.66396 15.2863 6.13974 15.9686 6.42603C16.4106 6.61149 17.0533 7.37967 16.5995 8.64868C16.4457 7.7796 15.0629 8.05391 14.8768 7.30981Z'], ['M11.9999 1.99634C13.6476 1.99634 14.9832 3.33205 14.9833 4.97974C14.9833 6.62745 13.6476 7.96313 11.9999 7.96313C10.3522 7.96313 9.01648 6.62745 9.01648 4.97974C9.01651 3.33205 10.3522 1.99634 11.9999 1.99634ZM11.9999 3.49634C11.1806 3.49634 10.5165 4.16047 10.5165 4.97974C10.5165 5.79902 11.1806 6.46313 11.9999 6.46313C12.8192 6.46313 13.4833 5.79903 13.4833 4.97974C13.4832 4.16047 12.8191 3.49634 11.9999 3.49634Z', 1]]), /* IONS women_2 */
    /* solid women pictogram (round head, A-line dress, one block for the legs): wide and heavy enough to sit in the
       rating chip at the star's size, with a clear gap between head and body */
    womanSolid: () => h('svg', { viewBox: '0 0 24 24', width: 13, height: 13, 'aria-hidden': true, className: 'p3-ic p5-wsolid' },
      h('circle', { cx: 12, cy: 4.4, r: 3.2, fill: 'currentColor' }),
      h('path', { fill: 'currentColor', d: 'M8.6 9.6h6.8c.6 0 1.2.4 1.4 1l3 7.3c.3.7-.2 1.5-1 1.5H15v2.6c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-2.6H5.2c-.8 0-1.3-.8-1-1.5l3-7.3c.2-.6.8-1 1.4-1Z' })),
    new: () => ions([['M6.8335 14.8838C7.38578 14.8838 7.8335 15.3315 7.8335 15.8838C7.8335 16.4361 7.38578 16.8838 6.8335 16.8838C6.28121 16.8838 5.8335 16.4361 5.8335 15.8838C5.8335 15.3315 6.28121 14.8838 6.8335 14.8838Z'], ['M15.3335 14.8838C15.8858 14.8838 16.3335 15.3315 16.3335 15.8838C16.3335 16.4361 15.8858 16.8838 15.3335 16.8838C14.7812 16.8838 14.3335 16.4361 14.3335 15.8838C14.3335 15.3315 14.7812 14.8838 15.3335 14.8838Z'], ['M11.0835 2.63379C12.3134 2.63379 13.4 2.70698 14.3335 2.81445V4.32422C13.418 4.21211 12.3309 4.13379 11.0835 4.13379C8.97698 4.13379 7.32767 4.35843 6.18994 4.58887C5.4766 4.73336 4.95158 5.33816 4.85107 6.13379H14.3335V7.63379H4.8335V12.1338H17.3335V11.1338H18.8335V16.8838C18.8335 18.0498 18.1078 19.0463 17.0835 19.4463V20.8838C17.0835 21.4361 16.6358 21.8838 16.0835 21.8838C15.5312 21.8838 15.0835 21.4361 15.0835 20.8838V19.6338H7.0835V20.8838C7.0835 21.4361 6.63578 21.8838 6.0835 21.8838C5.53121 21.8838 5.0835 21.4361 5.0835 20.8838V19.4463C4.05916 19.0463 3.3335 18.0498 3.3335 16.8838V6.41504C3.3335 4.89348 4.28271 3.44513 5.89209 3.11914C7.12059 2.87031 8.86976 2.63379 11.0835 2.63379ZM4.8335 16.8838C4.8335 17.5741 5.39314 18.1338 6.0835 18.1338H16.0835C16.7739 18.1338 17.3335 17.5741 17.3335 16.8838V13.6338H4.8335V16.8838Z', 1], ['M18.4927 3.00391C18.6425 2.5435 19.2942 2.54338 19.4438 3.00391L19.8901 4.37891C19.9571 4.5849 20.1491 4.72459 20.3657 4.72461H21.812L21.8989 4.73145C22.3188 4.80054 22.4724 5.36199 22.105 5.62891L20.936 6.47852C20.7608 6.60584 20.6875 6.83207 20.7544 7.03809L21.2007 8.41309C21.3503 8.8737 20.823 9.25636 20.4312 8.97168L19.2622 8.12207C19.087 7.9948 18.8495 7.99489 18.6743 8.12207L17.5044 8.97168C17.1126 9.25634 16.5854 8.87365 16.7349 8.41309L17.1821 7.03809C17.2491 6.8321 17.1757 6.60585 17.0005 6.47852L15.8306 5.62891C15.4387 5.3442 15.6402 4.72461 16.1245 4.72461H17.5698C17.7864 4.72461 17.9785 4.58492 18.0454 4.37891L18.4927 3.00391Z']]),
    check: () => h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true, className: 'p3-ic' }, h('path', { d: 'M3.5 8.4l3 3 6-6.6', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })),
  };
  const COMPS = ['comfort', 'clean', 'staff', 'onTime'], FEATS = ['toilet', 'new'], REASSURE = ['fdc'];
  function Card3({ b, go }) {
    const t = ugcFilter(b.proposed, useUgc()), m = useMaster();
    const comps = t.filter((k) => COMPS.includes(k)), feats = t.filter((k) => FEATS.includes(k)), re = t.filter((k) => REASSURE.includes(k));
    return h('div', { className: 'px-card p3-card', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      mTop(m, b),
      h('div', { className: 'px-body' },
        ...mPre(m, b),
        h('div', { className: 'px-svc' }, h('div', null, mTime(m, b), mSub(m, b)), mPrice(m, b)),
        h('div', { className: 'p3-op' },
          h('div', { className: 'px-bo' },
            h('div', { className: 'px-bo-l' },
              mName(m, b),
              h('p', { className: 'px-ty' }, b.ev && !m && h('img', { src: X + 'ic-ev.svg', alt: '' }), h('span', null, b.type))),
            h('div', { className: 'px-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
          feats.length > 0 && h('div', { className: 'p3-feat' }, feats.map((k) => h('span', { key: k }, IC[k](), label(k, b.sc))))),
        comps.length > 0 && h('div', { className: 'p3-comp' }, comps.map((k) => Tag({ key: k, className: 'p3-tag' }, label(k, b.sc)))),
        re.length > 0 && h('ul', { className: 'p3-re' }, re.map((k) => h('li', { key: k }, IC.check(), label(k, b.sc)))),
        mPost(m, b)),
      mFoot(m, b));
  }

  /* Option 4 · as directed (2026-10-12), proposed tags:
     Features → badges (Rubicon mini tags) in Option 3's spot, right below the operator block
     Comparators → a ✓ list in the primary text colour, footnote size
     Reassurance → the same list, after the comparators, same style */
  const BADGE = { toilet: 'In-bus toilet', new: 'New bus' };
  /* Option 4 time and seats, as Figma SRP - Cleanup 36754:32065: departure (bold) · duration between two hairlines ·
     arrival (regular), spanning the column; seats and singles below in one secondary line */
  const p4Time = (m, b) => h('p', { className: 'o5-time p4-time' }, h('b', null, b.dep), h('span', null, h('i'), b.dur, h('i')),
    has(m, 'layover', b) && h('span', { className: 'px-next' }, 'Next day'), h('em', null, b.arr));
  const p4Sub = (m, b) => h('p', { className: 'p4-sub' + (has(m, 'layover', b) ? ' px-warn' : '') }, has(m, 'layover', b) ? '2h Layover at Delhi' : b.seats + ' ' + b.single);
  /* Rubicon stars_full_filled (12 × 12), exported from the Figma rating */
  const starRubicon = () => h('svg', { viewBox: '0 0 12 12', width: 12, height: 12, 'aria-hidden': true }, h('path', { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FDFDFD', d: 'M5.53183 1.56658C5.6938 1.13341 6.30651 1.13341 6.46848 1.56658L7.49883 4.32206L10.4378 4.45048C10.8999 4.47067 11.0892 5.05339 10.7273 5.3413L8.42506 7.1727L9.21112 10.0075C9.33469 10.4532 8.839 10.8133 8.45335 10.5581L6.00015 8.93449L3.54696 10.5581C3.16131 10.8133 2.66562 10.4532 2.78919 10.0075L3.57525 7.1727L1.27303 5.3413C0.911112 5.05339 1.10045 4.47067 1.56248 4.45048L4.50148 4.32206L5.53183 1.56658Z' }));
  /* women's rating per bus: not in the sheet, so illustrative, within ±0.2 of the overall rating */
  const wRate = (b) => Math.min(5, Math.max(3.5, b.rating + (((b.rank * 3) % 5) - 2) / 10));
  /* Coach mark: on landing with women mode on, a spotlight on the first card's rating explains the change */
  /* target: the rating graphic to spotlight; copy follows what that option's rating shows */
  const COACH_COPY = {
    p4: ['.p4-card .p4-wr', 'See how women rated each bus', 'The pink "Women" score under each rating comes only from reviews by women travellers.'],
    p5: ['.o5-card .p5-rate--w', 'Ratings shown are only from women', 'With Women mode on, each rating on this page comes only from reviews by women travellers.'],
  };
  function WomenCoach({ v = 'p4' }) {
    const [sel, title, body] = COACH_COPY[v];
    const on = useWomen(), seen = useCoachSeen(), ref = React.useRef(null);
    const [box, setBox] = React.useState(null);
    React.useEffect(() => {
      if (!on || seen) { setBox(null); return undefined; }
      const t = setTimeout(() => {
        const el = ref.current, sf = el && el.closest('.sf'), r = sf && sf.querySelector(sel);
        if (!r) return;
        const S = sf.getBoundingClientRect(), k = S.width / sf.offsetWidth, R = r.getBoundingClientRect();
        if (R.top < S.top || R.bottom > S.bottom) return;
        setBox({ x: (R.left - S.left) / k, y: (R.top - S.top) / k, w: R.width / k, h: R.height / k, sw: sf.offsetWidth, sh: sf.offsetHeight });
      }, 500);
      return () => clearTimeout(t);
    }, [on, seen]);
    const show = on && !seen && box;
    /* Crystals DroidCoachmark (🔮 CRYSTALS • Rubicon): white card r20 p12, Headline Bold 14/20, Description 12/16, one
       tonal CTA, notch 24 in from the side, on a 70% Always Black overlay with the rating left clear */
    const up = show && box.y + box.h + 170 > box.sh;
    const cx = show && box.x + box.w / 2;
    /* keep the 290 card 16 inside the screen; the notch slides so it still points at the rating centre */
    const cr = show && Math.min(box.sw - 16, Math.max(16 + 290, cx + 32));
    const np = show ? { paddingRight: cr - cx - 8 } : null;
    return h('div', { ref, className: 'p4-coach' + (show ? ' on' : ''), 'aria-hidden': !show },
      show && [
        h('div', { key: 'hole', className: 'p4-coach-hole', style: { left: box.x - 4, top: box.y - 4, width: box.w + 8, height: box.h + 8 } }),
        h('div', { key: 'cm', className: 'p4-cm' + (up ? ' up' : ''), role: 'dialog', 'aria-labelledby': 'p4-cm-t',
          style: Object.assign({ right: box.sw - cr }, up ? { bottom: box.sh - box.y + 6 } : { top: box.y + box.h + 6 }) },
          !up && h('span', { className: 'p4-cm-notch', style: { paddingLeft: np.paddingRight, paddingRight: 0 } }, notch()),
          h('div', { className: 'p4-cm-card' },
            h('b', { id: 'p4-cm-t' }, title),
            h('p', null, body),
            h('div', { className: 'p4-cm-cta' }, h('button', { onClick: () => COACH.set(true) }, 'Got it'))),
          up && h('span', { className: 'p4-cm-notch', style: np }, notch())),
      ]);
  }
  /* stable overlay components, so the coach keeps its state across SRP re-renders */
  const Coach4 = () => h(WomenCoach, { v: 'p4' }), Coach5 = () => h(WomenCoach, { v: 'p5' });
  const notch = () => h('svg', { viewBox: '0 0 16 9', width: 16, height: 9, 'aria-hidden': true }, h('path', { fill: '#fff', d: 'M0 0C1.55798 0 3.90512 3.21696 5.64503 6.00167C6.49804 7.36691 6.92454 8.04953 7.35582 8.23482C7.76338 8.40991 8.12808 8.41043 8.53613 8.23649C8.96793 8.05242 9.39695 7.37009 10.255 6.00542C12.0064 3.21985 14.381 0 16 0H0Z' }));
  function Card4({ b, go }) {
    const t = ugcFilter(b.proposed, useUgc()), m = useMaster(), women = useWomen(), cstar = useCstar();
    const feats = t.filter((k) => FEATS.includes(k));
    /* women mode: women travelling joins the end of the reassurance list ("Highly rated by women" now lives in the
       rating graphic as the Women score, so it is not repeated here) */
    const wTags = women ? ['womenT'].filter((k) => b.shown.includes(k)) : [];
    const list = t.filter((k) => COMPS.includes(k)).concat(t.filter((k) => REASSURE.includes(k)), wTags);
    const text = (k) => (k === 'womenT' ? (6 + (b.rank * 5) % 19) + ' women travelling' : label(k, b.sc));
    /* columns: 3 per column (max 6) normally; in women mode every item shows, split evenly over the two columns */
    const per = women ? Math.max(3, Math.ceil(list.length / 2)) : 3;
    /* Previously booked (Figma 36754:32115): the card turns Fill/Success/primary and an 18-high strip of inverse caption
       text sits above the untouched white content, which keeps its 16 radius over the green */
    const prev = has(m, 'prev', b);
    const card = (...kids) => h('div', { className: 'px-card p3-card p4-card' + (women ? ' p4-card--women' : '') + (prev ? ' p4-card--prev' : ''), role: 'button', tabIndex: 0, onClick: () => go('seats') },
      prev && h('p', { className: 'p4-prev' }, 'You booked this previously on ' + (b.rank === 3 ? '7th Jul' : '22nd Aug')),
      ...(prev ? [h('div', { key: 'main', className: 'p4-main' }, ...kids)] : kids));
    return card(
      mTop(m, b),
      h('div', { className: 'px-body' },
        ...mPre(m, b),
        h('div', { className: 'px-svc p4-svc' }, h('div', null, p4Time(m, b), p4Sub(m, b)), mPrice(m, b)),
        h('div', { className: 'p3-op' },
          h('div', { className: 'px-bo' },
            h('div', { className: 'px-bo-l' },
              mName(m, b),
              h('p', { className: 'px-ty' }, b.ev && !m && h('img', { src: X + 'ic-ev.svg', alt: '' }), h('span', null, b.type))),
            /* women mode: the rating graphic adds the women's rating (illustrative) under the overall one */
            women
              /* Figma 37512:17216 "Rating women mode": a pink plate with the overall rating (green score + count) on top
                 and the women's rating under it in Text/woman; 79 × 36, the height of name + bus type */
              ? h('div', { className: 'p4-wr', 'aria-label': 'Rated ' + one(b.rating) + ' overall, ' + one(wRate(b)) + ' by women' },
                  h('div', { className: 'p4-wr-top' }, h('b', null, h('i', { className: 'p4-wr-star' }, starRubicon()), h('em', null, one(b.rating))), h('span', null, '0000')),
                  h('p', { className: 'p4-wr-w' }, 'Women ' + one(wRate(b))))
              : h('div', { className: 'px-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
          feats.length > 0 && h('div', { className: 'p4-badges' }, feats.map((k) => Tag({ key: k, className: 'p4-badge', icon: IC[k]() }, BADGE[k])))),
        /* two columns, filled column by column */
        list.length > 0 && h('div', { className: 'p4-cols' }, [list.slice(0, per), list.slice(per, 2 * per)].filter((c) => c.length).map((col, i) =>
          h('ul', { key: i, className: 'p4-list' }, col.map((k) => h('li', { key: k }, cstar ? h('img', { className: 'p3-ic ' + (COMPS.includes(k) ? 'p4-star' : 'p4-check'), src: X + (COMPS.includes(k) ? 'ic-comp-star.png' : women ? 'ic-reassure-check-woman.png' : 'ic-reassure-check.png'), alt: '' }) : IC.check(), text(k)))))),
        mPost(m, b)),
      mFoot(m, b));
  }

  /* Option 5 · Figma SRP - Cleanup "New approach" (36721:8339): a two-part card. Left: times with the duration
     between them, Primo logo over the operator, bus type, seats, then a green ✓ list of
     the bus's proposed tags (comparators → features → reassurance) and the highlight tag. Right, behind a hairline:
     price on top, deal tickets stacked at the bottom. The "Value pick" heading is left out (2026-10-12). */
  const L5 = (k, sc) => ({
    comfort: 'Comfort score of ' + one(sc.comfort) + '/10',
    clean: 'Cleanliness score of ' + one(sc.clean) + '/10',
    staff: 'Staff behaviour score of ' + one(sc.staff) + '/10',
    onTime: Math.round(sc.onTime) + '% on-time',
    toilet: 'In-bus toilet', new: 'New bus', fdc: 'Free date change',
  })[k] || label(k, sc);
  function Card5({ b, go }) {
    const t = ugcFilter(b.proposed, useUgc()), m = useMaster(), women = useWomen(), cstar = useCstar();
    /* features as Option 4's badges under the seats line; the ✓ list keeps comparators → reassurance */
    const feats = t.filter((k) => FEATS.includes(k));
    const list = t.filter((k) => COMPS.includes(k)).concat(t.filter((k) => REASSURE.includes(k)));
    const pre = mPre(m, b).filter((e) => e.key !== 'pd');
    const deals = has(m, 'deals', b);
    return h('div', { className: 'o5-wrap' },
      mTop(m, b),
      h('div', { className: 'o5-card' + (women ? ' o5-card--women' : ''), role: 'button', tabIndex: 0, onClick: () => go('seats') },
        h('div', { className: 'o5-l' },
          ...pre,
          h('div', { className: 'o5-time' }, h('b', null, b.dep), h('span', null, h('i'), b.dur, h('i')), h('em', null, b.arr)),
          h('div', { className: 'o5-bo' },
            h('div', { className: 'o5-bo-l' },
              has(m, 'primo', b) && h('img', { className: 'o5-primo', src: X + 'o5-primo.svg', alt: 'Primo' }),
              mName(m, b, 'px-nm o5-nm'),
              h('p', null, b.type),
              h('p', null, b.seats + ' ' + b.single),
              has(m, 'layover', b) && h('p', { className: 'px-warn' }, 'Next day · 2h Layover at Delhi')),
            /* women mode: the chip shows only the women's aggregate rating (illustrative), with the women icon for the star */
            women
              ? h('div', { className: 'px-rate p5-rate--w', 'aria-label': 'Rated ' + one(wRate(b)) + ' by women' }, h('b', null, IC.womanSolid(), one(wRate(b))), h('span', null, '0000'))
              : h('div', { className: 'px-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
          /* badges use the column's full width (under the rating too), so they only wrap when they run out of room */
          feats.length > 0 && h('div', { className: 'p4-badges o5-badges' }, feats.map((k) => Tag({ key: k, className: 'p4-badge', icon: IC[k]() }, BADGE[k]))),
          list.length > 0 && h('div', { className: 'o5-rtb' },
            h('ul', null, list.map((k) => h('li', { key: k }, h('img', { className: cstar ? (COMPS.includes(k) ? 'o5-star' : 'o5-3dcheck') : null, src: X + (cstar ? (COMPS.includes(k) ? 'ic-comp-star.png' : women ? 'ic-reassure-check-woman.png' : 'ic-reassure-check.png') : 'o5-check.svg'), alt: '' }), h('span', null, L5(k, b.sc)))))),
          mPost(m, b)),
        h('div', { className: 'o5-r' },
          h('div', { className: 'o5-price' }, has(m, 'book0', b) && h('span', { className: 'mx-book0' }, 'Book for ₹0'), h('b', null, b.price), h('small', null, 'Onwards')),
          deals && h('div', { className: 'o5-offers' },
            h('span', { className: 'o5-deal o5-deal--last' }, 'Last min.', h('br'), '20% OFF'),
            h('span', { className: 'o5-deal' }, 'Group', h('br'), '20% OFF')))),
      mFoot(m, b));
  }

  /* ---------- Options 6–8 · the tuple from scratch (2026-10-12) ----------
     Same information as Option 4 (times, price, seats, operator, rating, comparators → features → reassurance and the
     master-card elements), laid out as if redBus started today. Shared construction rules:
       · 16 content inset; every row hangs off the same left and right edges
       · paired blocks match heights and share edges: the operator block (name 20 + type 16 = 36) sits beside a
         36-high rating, top- and bottom-aligned; times and price share a baseline, as do seats and "Onwards"
       · comparators carry numbers, so they read as stats, never as tags; features and reassurance stay quiet, one line
     Master-card elements shown: Book-for-₹0 banner / live status (top), Primo + deals (header), award + Ad (name),
     BP/DP personalisation (foot), tripReward (footer). */
  const SHORT = { comfort: 'Comfort', clean: 'Cleanliness', staff: 'Staff', onTime: 'On time' };
  const stat = (k, sc) => (k === 'onTime' ? [Math.round(sc.onTime) + '%', null] : [one(sc[k]), '/10']);
  const QUIET = { toilet: 'Toilet', new: 'New bus', fdc: 'Free date change' };
  const seatsOf = (b) => [parseInt(b.seats, 10), parseInt(b.single.slice(1), 10)];
  const tagsOf = (b, ugc) => {
    const t = ugcFilter(b.proposed, ugc);
    return { comps: t.filter((k) => COMPS.includes(k)), quiet: t.filter((k) => FEATS.includes(k) || REASSURE.includes(k)) };
  };
  /* pieces */
  const tHead = (m, b) => (has(m, 'primo', b) || has(m, 'deals', b)) && h('div', { className: 'tn-hd' },
    has(m, 'primo', b) ? h('img', { className: 'tn-primo', src: X + 'primo-otg.png', alt: 'Primo On Time Guarantee' }) : h('i'),
    has(m, 'deals', b) && h('span', { className: 'px-deals' }, !has(m, 'primo', b) && h('span', { className: 'px-deal' }, 'Group. ', h('b', null, '20% OFF')), h('span', { className: 'px-deal px-deal--last' }, 'Last min. ', h('b', null, '20% OFF'))));
  const tName = (m, b) => h('p', { className: 'tn-nm' }, h('span', null, b.op),
    has(m, 'award', b) && h('img', { className: 'px-award', src: X + 'ic-award.png', alt: 'Award' }),
    has(m, 'ad', b) && h('span', { className: 'px-ad' }, 'Ad'));
  const tOp = (m, b) => h('div', { className: 'tn-op' }, tName(m, b), h('p', { className: 'tn-ty' }, b.type));
  const tRate = (b) => h('div', { className: 'tn-rate', 'aria-label': 'Rated ' + one(b.rating) + ' from 0000 ratings' }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'));
  const tTimes = (b) => h('p', { className: 'tn-time' }, h('b', null, b.dep), h('span', { className: 'tn-dur' }, h('i'), b.dur, h('i')), h('b', null, b.arr));
  const tSeats = (b) => { const [n, s1] = seatsOf(b); return h('p', { className: 'tn-seats' }, n + ' seats', h('i', { className: 'tn-dot' }), h('span', { className: 'px-warn' }, s1 + ' single')); };
  const tPrice = (b) => h('p', { className: 'tn-price' }, b.price);
  const tQuiet = (keys) => keys.length > 0 && h('ul', { className: 'tn-quiet' }, keys.map((k) => h('li', { key: k }, (IC[k] || IC.check)(), QUIET[k])));
  const tStats = (keys, sc, cls, names) => keys.length > 0 && h('dl', { className: 'tn-stats ' + (cls || '') }, keys.map((k) => {
    const [v, unit] = stat(k, sc);
    return h('div', { key: k }, h('dt', null, (names || SHORT)[k]), h('dd', null, v, unit && h('small', null, unit)));
  }));
  const tShell = (cls, m, b, go, body) => h('div', { className: 'px-card tn ' + cls, role: 'button', tabIndex: 0, onClick: () => go('seats') },
    mTop(m, b), h('div', { className: 'tn-body' }, ...body), mFoot(m, b));

  /* Option 6 · Stat row. Journey first (times · price on one baseline, seats · Onwards on the next), then the
     operator beside its rating, then the comparators as a row of equal stat columns under a hairline: the numbers
     line up across every card, so a list of buses scans like a table. Features and reassurance close on one quiet line. */
  function Card6({ b, go }) {
    const m = useMaster(), { comps, quiet } = tagsOf(b, useUgc());
    return tShell('t6', m, b, go, [
      tHead(m, b),
      h('div', { key: 'j', className: 'tn-j' },
        h('div', { className: 'tn-row' }, tTimes(b), tPrice(b)),
        h('div', { className: 'tn-row tn-row--sub' }, tSeats(b), h('small', { className: 'tn-onw' }, 'Onwards'))),
      h('div', { key: 'o', className: 'tn-opr' }, tOp(m, b), tRate(b)),
      tStats(comps, b.sc),
      tQuiet(quiet),
      mPost(m, b),
    ]);
  }

  /* Option 7 · Score panel. The operator leads and the price answers it on the same two lines (name + type = 36,
     price + Onwards = 36). Times and seats follow on one baseline. The rating and the comparators become one
     object, as sub-scores of the rating, on a soft panel: ★ 4.7 · Comfort 9.4 · Cleanliness 9.7 · On time 93%,
     every cell the same two-line construction (value over label). */
  function Card7({ b, go }) {
    const m = useMaster(), { comps, quiet } = tagsOf(b, useUgc());
    return tShell('t7', m, b, go, [
      tHead(m, b),
      h('div', { key: 'o', className: 'tn-opr' }, tOp(m, b), h('div', { className: 'tn-pr' }, tPrice(b), h('small', { className: 'tn-onw' }, 'Onwards'))),
      h('div', { key: 'j', className: 'tn-row tn-row--j' }, tTimes(b), tSeats(b)),
      h('div', { key: 's', className: 'tn-panel' },
        h('div', { className: 'tn-score', 'aria-label': 'Rated ' + one(b.rating) + ' from 0000 ratings' }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000')),
        tStats(comps, b.sc, 'tn-stats--panel', Object.assign({}, SHORT, { clean: 'Clean' }))),
      tQuiet(quiet),
      mPost(m, b),
    ]);
  }

  /* Option 8 · Price rail. A fixed 96 right rail holds everything about cost and availability (price, Onwards,
     seats, deals) so the left column is only about the bus: times, operator beside its rating, comparators as a
     two-column stat grid, then the quiet line. Rail and column share the card's top and bottom insets. */
  function Card8({ b, go }) {
    const m = useMaster(), { comps, quiet } = tagsOf(b, useUgc());
    const [n, s1] = seatsOf(b);
    return h('div', { className: 'px-card tn t8', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      mTop(m, b),
      /* Primo spans the card, so the rail's price and the times always start on the same line */
      has(m, 'primo', b) && h('div', { className: 't8-hd' }, h('img', { className: 'tn-primo', src: X + 'primo-otg.png', alt: 'Primo On Time Guarantee' })),
      h('div', { className: 't8-split' },
        h('div', { className: 'tn-body' },
          tTimes(b),
          h('div', { className: 'tn-opr' }, tOp(m, b), tRate(b)),
          tStats(comps, b.sc, 'tn-stats--grid'),
          tQuiet(quiet),
          mPost(m, b)),
        h('div', { className: 't8-rail' },
          h('div', { className: 'tn-pr' }, tPrice(b), h('small', { className: 'tn-onw' }, 'Onwards')),
          h('p', { className: 't8-seats' }, n + ' seats', h('br'), h('span', { className: 'px-warn' }, s1 + ' single')),
          has(m, 'deals', b) && h('div', { className: 't8-deals' },
            h('span', { className: 'o5-deal o5-deal--last' }, 'Last min.', h('br'), '20% OFF'),
            !has(m, 'primo', b) && h('span', { className: 'o5-deal' }, 'Group', h('br'), '20% OFF')))),
      mFoot(m, b));
  }

  /* lists by tag set: 'shown' (Current tabs) or 'proposed' (Proposed options) */
  const ProdList = (set) => ({ go }) => h('div', { className: 'sf-list', style: { marginTop: 2 } }, BUSES.map((b) => h(ProdCard, { key: b.rank, b, go, set })));
  const ExpList = (set) => ({ go }) => h('div', { className: 'px-list' }, BUSES.map((b) => h(ExpCard, { key: b.rank, b, go, set })));
  const srp = (list) => (p) => h(window.SRPFIG.SrpFig, Object.assign({}, p, { list }));
  window.PTAGS_SRP = { prodShown: srp(ProdList('shown')), expShown: srp(ExpList('shown')) };

  window.PTAGS.PROPOSED.add('srp', {
    sols: ['PT'],
    options: [
      { key: 'A', label: 'Production design · proposed tags', render: srp(ProdList('proposed')) },
      { key: 'B', label: 'Experiment design · proposed tags', render: srp(ExpList('proposed')) },
      { key: 'C', label: 'Comparator tags · feature icon + text · reassurance list', render: srp(({ go }) => h('div', { className: 'px-list' }, BUSES.map((b) => h(Card3, { key: b.rank, b, go })))) },
      { key: 'D', label: 'Feature badges · comparators + reassurance as one ✓ list', render: (p) => h(window.SRPFIG.SrpFig, Object.assign({}, p, { list: ({ go }) => h('div', { className: 'px-list' }, BUSES.map((b) => h(Card4, { key: b.rank, b, go }))), overlay: Coach4 })) },
      { key: 'E', label: 'Figma “New approach” · price column + ✓ list', render: (p) => h(window.SRPFIG.SrpFig, Object.assign({}, p, { list: ({ go }) => h('div', { className: 'px-list' }, BUSES.map((b) => h(Card5, { key: b.rank, b, go }))), overlay: Coach5 })) },
      { key: 'F', label: 'From scratch · stat row', render: srp(({ go }) => h('div', { className: 'px-list' }, BUSES.map((b) => h(Card6, { key: b.rank, b, go })))) },
      { key: 'G', label: 'From scratch · score panel', render: srp(({ go }) => h('div', { className: 'px-list' }, BUSES.map((b) => h(Card7, { key: b.rank, b, go })))) },
      { key: 'H', label: 'From scratch · price rail', render: srp(({ go }) => h('div', { className: 'px-list' }, BUSES.map((b) => h(Card8, { key: b.rank, b, go })))) },
    ],
  });
})();
