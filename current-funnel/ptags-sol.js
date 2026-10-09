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
  function ProdCard({ b, go, set: tags }) {
    tags = b[tags];
    return h('div', { className: 'sf-t', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      h('div', { className: 'sf-tp' },
        h('div', null,
          h('p', { className: 'sf-time' }, h('b', null, b.dep), h('i'), b.arr),
          h('p', { className: 'sf-sub' }, b.dur, h('i'), b.seats, h('em', null, b.single))),
        h('div', { className: 'sf-price' }, h('b', null, b.price), h('small', null, 'onwards'))),
      h('div', { className: 'sf-bo' },
        h('div', null,
          h('p', { className: 'nm' }, b.op),
          b.ev ? h('p', { className: 'ty' }, h('img', { src: A + 'ic-ev.png', alt: '' }), b.type) : h('p', { className: 'ty' }, b.type)),
        h('div', { className: 'sf-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
      h('div', { className: 'sf-tags' }, tags.map((k) => h('span', { key: k, className: 'sf-tag' }, label(k, b.sc)))));
  }

  /* Option 2 · experiment card design: the tags as a two-column ✓ list */
  function ExpCard({ b, go, set: tags }) {
    tags = b[tags];
    const half = Math.ceil(tags.length / 2);
    const cols = [tags.slice(0, half), tags.slice(half)];
    return h('div', { className: 'px-card', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      h('div', { className: 'px-body' },
        h('div', { className: 'px-svc' },
          h('div', null,
            h('p', { className: 'px-time' }, h('b', null, b.dep), h('i', { className: 'px-sep' }), b.arr),
            h('p', { className: 'px-sub' }, b.dur, h('i', { className: 'px-dot' }), h('span', null, b.seats), h('span', { className: 'px-warn' }, b.single))),
          h('div', { className: 'px-price' }, h('b', null, b.price), h('small', null, 'Onwards'))),
        h('div', { className: 'px-bo' },
          h('div', { className: 'px-bo-l' },
            h('p', { className: 'px-nm' }, h('span', null, b.op)),
            h('p', { className: 'px-ty' }, b.ev && h('img', { src: X + 'ic-ev.svg', alt: '' }), h('span', null, b.type))),
          h('div', { className: 'px-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
        h('div', { className: 'px-rtb' }, cols.map((col, i) => h('ul', { key: i }, col.map((k) => h('li', { key: k }, h('img', { src: X + 'ic-check.svg', alt: '' }), h('span', null, label(k, b.sc)))))))));
  }

  /* Option 3 · as directed (2026-10-09), proposed tags:
     Comparators → the most important tier: tags like today's, built on the Tag component (crystals)
     Features → icon + text right below the operator block; the operator + bus type pair lines up with the rating
     Reassurance → a ✓ list in the secondary text colour */
  const Tag = (p, ...c) => h(window.IndiaBusDS.Tag, p, ...c);
  const svg = (paths) => h('svg', { viewBox: '0 0 16 16', width: 12, height: 12, 'aria-hidden': true, className: 'p3-ic' },
    paths.map((d, k) => typeof d === 'string' ? h('path', { key: k, d, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }) : React.cloneElement(d, { key: k })));
  const IC = {
    toilet: () => svg(['M3.5 2.8h4v4.5a2 2 0 0 1-4 0z', 'M5.5 9.3v3.9M3.8 13.2h3.4', 'M11.2 2.6v10.6', 'M9.6 6.2h3.2']),
    new: () => svg(['M8 1.8l1.6 1.2 2-.1.6 1.9 1.6 1.2-.6 1.9.6 1.9-1.6 1.2-.6 1.9-2-.1L8 14.2l-1.6-1.2-2 .1-.6-1.9-1.6-1.2.6-1.9-.6-1.9 1.6-1.2.6-1.9 2 .1z', 'M6 8.1l1.4 1.4L10.2 6.7']),
    check: () => h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true, className: 'p3-ic' }, h('path', { d: 'M3.5 8.4l3 3 6-6.6', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })),
  };
  const COMPS = ['comfort', 'clean', 'staff', 'onTime'], FEATS = ['toilet', 'new'], REASSURE = ['fdc'];
  function Card3({ b, go }) {
    const t = b.proposed;
    const comps = t.filter((k) => COMPS.includes(k)), feats = t.filter((k) => FEATS.includes(k)), re = t.filter((k) => REASSURE.includes(k));
    return h('div', { className: 'px-card p3-card', role: 'button', tabIndex: 0, onClick: () => go('seats') },
      h('div', { className: 'px-body' },
        h('div', { className: 'px-svc' },
          h('div', null,
            h('p', { className: 'px-time' }, h('b', null, b.dep), h('i', { className: 'px-sep' }), b.arr),
            h('p', { className: 'px-sub' }, b.dur, h('i', { className: 'px-dot' }), h('span', null, b.seats), h('span', { className: 'px-warn' }, b.single))),
          h('div', { className: 'px-price' }, h('b', null, b.price), h('small', null, 'Onwards'))),
        h('div', { className: 'p3-op' },
          h('div', { className: 'px-bo' },
            h('div', { className: 'px-bo-l' },
              h('p', { className: 'px-nm' }, h('span', null, b.op)),
              h('p', { className: 'px-ty' }, b.ev && h('img', { src: X + 'ic-ev.svg', alt: '' }), h('span', null, b.type))),
            h('div', { className: 'px-rate', 'aria-label': 'Rated ' + b.rating }, h('b', null, h(Star), one(b.rating)), h('span', null, '0000'))),
          feats.length > 0 && h('div', { className: 'p3-feat' }, feats.map((k) => h('span', { key: k }, IC[k](), label(k, b.sc))))),
        comps.length > 0 && h('div', { className: 'p3-comp' }, comps.map((k) => Tag({ key: k, className: 'p3-tag' }, label(k, b.sc)))),
        re.length > 0 && h('ul', { className: 'p3-re' }, re.map((k) => h('li', { key: k }, IC.check(), label(k, b.sc))))));
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
    ],
  });
})();
