/* SRP blocks */
(function () {
  const { h, D, useState, useEffect, useRef, Phone, T, Ico, Spacer, addBlock } = window.FTUE;

  const R = (v, c, tone) => h(D.BusRating, { value: v, count: c, tone });
  const TUPLES = [
    { id: 'a', primo: true, departure: '21:15', arrival: '05:50', duration: '8h 35m', seats: 16, singleSeats: 1, fare: '₹900', num: 900, operator: 'Pinky Gudiya Travels And Cargo', busType: 'A/C Sleeper (2+1)', rating: R('4.5', 278), r: 4.5, tags: ['New Bus', 'Toilet'] },
    { id: 'b', departure: '21:30', arrival: '05:51', duration: '8h 21m', seats: 15, singleSeats: 1, previousFare: '₹952', fare: '₹904', num: 904, operator: 'Tantia Travels & Cargo', busType: 'AC Sleeper (2+1)', rating: R('4.2', 118), r: 4.2, tags: ['Toilet', '97% On Time'], ribbon: h(D.OfferRibbon, { value: '5% OFF' }) },
    { id: 'c', departure: '22:00', arrival: '06:30', duration: '8h 30m', seats: 9, fare: '₹780', num: 780, operator: 'Shree Balaji Tours', busType: 'Non A/C Sleeper (2+1)', rating: R('3.8', 64, 'mid'), r: 3.8, tags: ['Toilet'] },
    { id: 'd', departure: '22:45', arrival: '07:10', duration: '8h 25m', seats: 21, fare: '₹850', num: 850, operator: 'Rajdhani Express', busType: 'AC Seater (2+2)', rating: R('4.0', 203), r: 4.0, tags: ['Charging point'] },
  ];

  const mk = (t, key, extra) => h(D.BusTuple, Object.assign({ key }, t, extra));

  /* apply a DOM patch after every render (prototype-only text tweaks on DS output) */
  function Patch({ fn, children, style, className }) {
    const ref = useRef(null);
    useEffect(() => { if (ref.current) fn(ref.current); });
    return h('div', { ref, style, className }, children);
  }

  const Feature = () => h(D.FeatureCardRail, null,
    h(D.FeatureCard, { variant: 'primo', label: 'Primo buses' }),
    h(D.FeatureCard, { variant: 'exclusive', label: 'Exclusive offers' }));

  /* ---------------- SRP: sort + filter (SOL-13/14/15/16/38) ---------------- */
  const SORTS = [
    { id: 'relevance', label: 'Relevance', sub: 'Optimised for best value' },
    { id: 'price', label: 'Price: low to high', sub: 'Optimised to find the cheapest buses' },
    { id: 'rating', label: 'Best rated first', sub: 'Optimised for the best buses' },
    { id: 'depart', label: 'Earliest departure', sub: 'Optimised for leaving sooner' },
  ];

  function sortList(id) {
    const l = TUPLES.slice();
    if (id === 'price') l.sort((a, b) => a.num - b.num);
    if (id === 'rating') l.sort((a, b) => b.r - a.r);
    if (id === 'depart') l.sort((a, b) => a.departure.localeCompare(b.departure));
    return l;
  }

  function SrpToday() {
    return h(React.Fragment, null,
      h(D.RouteHeader, { from: 'Delhi', to: 'Ganganagar (Sri Ganganagar)', busCount: 7, date: '9 Jul', day: 'Thu' }),
      h(D.ResultModeTabs),
      h(Feature),
      h(D.FilterRail, null, h(D.FilterSortChip, { count: 0 }), h(D.FilterChip, { kind: 'deals' }), h(D.FilterChip, { kind: 'ac' }), h(D.FilterChip, { kind: 'free' }), h(D.FilterChip, { kind: 'sleeper' })),
      h('div', { style: { display: 'grid', gap: 12, padding: 16 } }, TUPLES.slice(0, 3).map((t) => mk(t, t.id))));
  }

  function SrpSortProposed() {
    const [sort, setSort] = useState('relevance');
    const [open, setOpen] = useState(false);
    const [tip, setTip] = useState(true);
    const cur = SORTS.find((s) => s.id === sort);
    const list = sortList(sort);
    return h(React.Fragment, null,
      h('div', { style: { position: 'absolute', inset: 0, overflowY: 'auto' } },
        h(D.RouteHeader, { from: 'Delhi', to: 'Ganganagar (Sri Ganganagar)', busCount: 7, date: '9 Jul', day: 'Thu' }),
        h(D.ResultModeTabs),
        h('div', { style: { background: '#fff', boxShadow: '0 2px 8px rgba(20,20,40,.1)', position: 'relative', zIndex: 2 } },
          h(D.FilterRail, null, h(D.FilterSortChip, { count: 0 }), h(D.FilterChip, { kind: 'ac' }), h(D.FilterChip, { kind: 'sleeper' }), h(D.FilterChip, { kind: 'deals' }), h(D.FilterChip, { kind: 'free' })),
          h('div', { style: { padding: '0 16px 12px' } }, h(D.AiSmartFilter, { state: 'idle' }))),
        tip && h('div', { style: { padding: '12px 16px 0' } },
          h(D.Coachmark, { title: 'Say what you want, we’ll filter', description: 'Try “AC sleeper after 9 pm under ₹900”.', dismissLabel: 'Got it', confirmLabel: 'Try it', onDismiss: () => setTip(false), onConfirm: () => setTip(false) })),
        h('div', { style: { display: 'flex', alignItems: 'center', padding: '12px 16px 0', gap: 8 } },
          h('button', { onClick: () => setOpen(true), style: { all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 } },
            h(D.Icon, { name: 'ion-sort', size: 'sm' }), T('label', { strong: true }, 'Sorted by: ' + cur.label), h(D.Icon, { name: 'ion-chevron-down', size: 'sm' })),
          Spacer(), T('caption', { className: 'p-muted' }, '7 buses')),
        h('div', { style: { display: 'grid', gap: 12, padding: 16 } },
          list.slice(0, 2).map((t) => mk(t, t.id)),
          h('div', { key: 'feat', style: { margin: '0 -16px' } }, h(Feature)),
          list.slice(2, 4).map((t) => mk(t, t.id))),
        h('div', { style: { height: 40 } })),
      h(D.BottomSheet, { open, title: 'Sort buses by', onDismiss: () => setOpen(false) },
        h('div', { style: { display: 'grid', gap: 4 } },
          SORTS.map((s) => h('button', { key: s.id, onClick: () => { setSort(s.id); setOpen(false); }, style: { all: 'unset', cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'center', padding: '10px 4px', borderRadius: 12 } },
            h('span', { style: { width: 20, height: 20, borderRadius: '50%', border: '2px solid ' + (sort === s.id ? 'var(--action-primary-surface-default)' : '#b8bcc8'), display: 'grid', placeItems: 'center', flex: 'none' } }, sort === s.id && h('i', { style: { width: 10, height: 10, borderRadius: '50%', background: 'var(--action-primary-surface-default)' } })),
            h('div', null, T('body', { strong: true }, s.label), T('caption', { className: 'p-muted' }, s.sub)))))));
  }

  addBlock('srp', {
    id: 'srp-sortfilter', sols: ['SOL-13', 'SOL-14', 'SOL-15', 'SOL-16', 'SOL-38'], pattern: 'ext',
    title: 'Give filters and sort the first fold; explain the sort order',
    problem: 'Top cards (Primo, Exclusive) are ignored and take up the first fold, so filters are missed entirely. The chips shown are not always relevant for first-time users, nobody sees the pattern in the sort order, and the AI smart filter is never formally introduced.',
    changes: [
      'Remove the ad and collection cards from above the filters. They reappear as a carousel between listings.',
      'Elevated filter + AI bar directly under the header so filters read as a control, not content.',
      'A visible "Sorted by" row with a one-tap change. Each sort option carries a sub text saying what it is optimised for.',
      'One-time coachmark introduces the AI smart filter with a concrete example query.',
    ],
    notes: ['Try it: tap "Sorted by", pick an option, watch the list re-order. Tap "Got it" to dismiss the coachmark.', 'Chip order and relevance logic (AC, Sleeper, Time first; Primo and Deals dropped from RTC flow) is a separate data/ranking task. Chips shown are DS defaults.', 'Sort options beyond the first three are illustrative; confirm the complete production list.', 'Study also asks for a consolidated applied-filters row with easy deselect. Not drawn here; part of the filter sheet work.'],
    legend: ['Cards removed from above the filter bar', 'Elevated filter and AI bar', 'Sorted by row opens the sort sheet', 'Coachmark for AI smart filter (first sessions only)'],
    evidence: ['Choices, relevance and role of filters (SRP 1/2): top cards ignored and filters missed; recommends moving top cards into the list as a carousel.', 'Tracker row 12 (High): reword sort order to make it clearer. Row 11 (Medium): filter prominence and feedback. Row 7 (Medium): banners overshadow filters.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Cards first, filters buried', scroll: true }, h(SrpToday)),
      h(Phone, { key: 2, kind: 'interactive', label: 'Filters first; sort explained', pins: [[1, -2, 92], [2, -2, 176], [3, -2, 380], [4, -2, 300]] }, h(SrpSortProposed)),
    ],
  });

  /* ---------------- SRP: Primo education (SOL-01) ---------------- */
  function PrimoQualifier({ children }) {
    return h('div', { style: { position: 'relative' } },
      children,
      h('span', { style: { position: 'absolute', left: 80, top: 15, display: 'inline-flex', gap: 4, alignItems: 'center', fontSize: 12, fontWeight: 700, color: '#1d7a46' } }, h('span', { className: 'tick' }, '✓'), 'One of the best on this route'));
  }

  function PrimoInline({ onLearn, onClose }) {
    return h('div', { className: 'p-card', style: { display: 'flex', gap: 12, alignItems: 'center', background: '#f2f5ff', border: '1px solid #d8e0fb' } },
      h('div', { style: { flex: 'none', width: 130, height: 105, borderRadius: 12, overflow: 'hidden' } }, h(D.FeatureCard, { variant: 'primo', label: 'Primo' })),
      h('div', { className: 'p-sp' },
        T('body', { strong: true }, 'New to Primo?'),
        T('caption', { className: 'p-muted' }, 'Top-rated, well-kept buses chosen for your route.'),
        h('div', { style: { marginTop: 6, display: 'flex', gap: 14, alignItems: 'center' } }, h('button', { className: 'p-link', style: { whiteSpace: 'nowrap' }, onClick: onLearn }, 'What is Primo?'), h('button', { className: 'p-link', style: { color: '#6b7080', fontWeight: 600, whiteSpace: 'nowrap' }, onClick: onClose }, 'Not now'))));
  }

  function PrimoSheetBody() {
    const r = (icon, t, b) => h('div', { style: { display: 'flex', gap: 12, alignItems: 'flex-start' } }, h('span', { className: 'p-ic blue' }, Ico(icon)), h('div', null, T('body', { strong: true }, t), T('caption', { className: 'p-muted' }, b)));
    return h('div', { style: { display: 'grid', gap: 14, paddingBottom: 4 } },
      T('body', { className: 'p-muted' }, 'Primo marks the buses that consistently deliver on the things that matter on a long trip.'),
      r('ion-star', 'Top rated on this route', 'Chosen from operators travellers rate highest'),
      r('ion-bus', 'Newer, well-kept buses', 'Cleanliness and condition are checked'),
      r('ion-check-circle', 'Safety checks done', 'Operators must pass our safety checklist'));
  }

  window.FTUE.PrimoSheetBody = PrimoSheetBody;

  function PrimoSrp() {
    const [card, setCard] = useState(true);
    const [sheet, setSheet] = useState(false);
    return h(React.Fragment, null,
      h('div', { style: { position: 'absolute', inset: 0, overflowY: 'auto' } },
        h(D.RouteHeader, { from: 'Delhi', to: 'Ganganagar (Sri Ganganagar)', busCount: 7, date: '9 Jul', day: 'Thu' }),
        h(D.FilterRail, null, h(D.FilterSortChip, { count: 0 }), h(D.FilterChip, { kind: 'ac' }), h(D.FilterChip, { kind: 'sleeper' })),
        h('div', { style: { display: 'grid', gap: 12, padding: 16 } },
          h(PrimoQualifier, { key: 'a' }, mk(TUPLES[0], 'a')),
          card && h(PrimoInline, { key: 'edu', onLearn: () => setSheet(true), onClose: () => setCard(false) }),
          mk(TUPLES[1], 'b'), mk(TUPLES[2], 'c'))),
      h(D.BottomSheet, { open: sheet, title: 'What is Primo?', onDismiss: () => setSheet(false), actions: h(D.Button, { variant: 'primary', block: true, onClick: () => setSheet(false) }, 'Got it') }, h(PrimoSheetBody)));
  }

  addBlock('srp', {
    id: 'srp-primo', sols: ['SOL-01'], pattern: 'ext',
    title: 'Teach Primo on the results page, not just with a logo',
    problem: 'First-time users have no idea what Primo means, even if they have seen the sticker on buses. Every other tag on a tuple is non-clickable, so users do not expect the Primo mark to answer anything.',
    changes: [
      'A qualifier beside the Primo mark ("One of the best on this route") gives the tag meaning at a glance.',
      'A card extension appears after the first Primo tuple for the first two sessions, with a "What is Primo?" link and a quiet "Not now".',
      'The link opens a short explainer sheet with benefits.',
    ],
    notes: ['Try it: tap "What is Primo?" then "Got it", or "Not now" to remove the card.', 'The card uses the real Primo FeatureCard artwork from the DS; the qualifier text sits over the tuple in this mock and should become a tuple slot in build.', 'Benefit copy is a placeholder; confirm the actual Primo pillars with the Primo team.', 'Frequency rule (first 2 sessions) comes from the solve; confirm how a "session" is counted.', 'Reinforcement later in the funnel is covered under Seat selection, Bus details, Ticket page and Booking funnel.'],
    evidence: ['Tracker row 18 (High): use tuple real estate on SRP for a teaser intro of the tag.', 'Tracker row 33 (High): Primo card needs 5-second comprehension; users skip the carousel because the first screen lacks context.', 'Study (SRP 1/2): recommends a qualifier beside the tag, such as "One of the best in the route".'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Logo only, no meaning, not tappable', scroll: true }, h('div', null,
        h(D.RouteHeader, { from: 'Delhi', to: 'Ganganagar (Sri Ganganagar)', busCount: 7, date: '9 Jul', day: 'Thu' }),
        h(D.FilterRail, null, h(D.FilterSortChip, { count: 0 }), h(D.FilterChip, { kind: 'ac' }), h(D.FilterChip, { kind: 'sleeper' })),
        h('div', { style: { display: 'grid', gap: 12, padding: 16 } }, mk(TUPLES[0], 'a'), mk(TUPLES[1], 'b'), mk(TUPLES[2], 'c')))),
      h(Phone, { key: 2, kind: 'interactive', label: 'Qualifier + card extension + explainer', pins: [[1, 296, 116], [2, -2, 330]] }, h(PrimoSrp)),
    ],
    legend: ['Qualifier next to the Primo mark', 'Card extension (first 2 sessions)'],
  });

  /* ---------------- SRP: onwards pricing (SOL-06) ---------------- */
  const PriceNote = () => h('div', { style: { display: 'flex', gap: 8, alignItems: 'flex-start', background: '#fff7e6', border: '1px solid #f3dca6', borderRadius: 12, padding: '8px 12px', color: '#7a4b00' } }, Ico('ion-info', 'sm'), T('caption', { strong: true }, 'Fares shown are starting prices. Seat prices vary by deck and row.'));

  addBlock('srp', {
    id: 'srp-price', sols: ['SOL-06'], pattern: 'ext',
    title: 'Make the starting fare impossible to mistake for the seat price',
    problem: 'Users see the lowest price on the tuple and assume it applies to the seat they want. The word "Onwards" is small grey text, so the price they pick up on SRP rarely matches what they find on the seat layout (a Rs 500 to 700 gap was observed).',
    changes: [
      'Replace the small grey "Onwards" with a brand-red "Starting fare" label so it reads as a price floor, not a price.',
      'A one-line note above the list sets the expectation: seat prices vary by deck and row.',
      'Pairs with SOL-07 and SOL-35 on the seat layout, where the cheapest seats are pointed out.',
    ],
    notes: ['Type treatment on the tuple plus one note row. BusTuple needs a fare-label slot in the DS.', 'In this mock the tuple styling is applied with CSS on top of the real DS tuple.', 'Check with pricing whether "varies by seat" holds for every operator before showing the note.'],
    evidence: ['Seat Layout study: price shock observed among many users; Rs 500 to 700 difference between SL and SRP. No tracker row; this solve rests on the study alone.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Small grey "Onwards"', bg: '#f6f5fa' }, h('div', { style: { padding: 16, display: 'grid', gap: 12 } }, mk(TUPLES[0], 'a'), mk(TUPLES[2], 'c'))),
      h(Phone, { key: 2, kind: 'proposed', label: 'Floor price made explicit', bg: '#f6f5fa' },
        h('div', { className: 'p-onwards', style: { padding: 16, display: 'grid', gap: 12 } }, h(PriceNote), mk(TUPLES[0], 'a'), mk(TUPLES[2], 'c'))),
    ],
  });

  /* ---------------- SRP: trust strip + seen marker (SOL-12, SOL-45) ---------------- */
  function Usp() {
    const item = (icon, t) => h('span', { style: { display: 'inline-flex', gap: 6, alignItems: 'center', fontSize: 12, fontWeight: 700, color: '#2a2f3d', whiteSpace: 'nowrap' } }, h('span', { style: { color: '#1d7a46', display: 'inline-flex' } }, Ico(icon, 'sm')), t);
    return h('div', { style: { margin: '12px 16px 0', background: '#fff', borderRadius: 12, padding: '10px 12px', display: 'flex', gap: 14, alignItems: 'center', boxShadow: '0 1px 3px rgba(20,20,40,.08)' } },
      item('ion-check-circle', 'Lowest price guaranteed'), h('i', { style: { width: 1, height: 16, background: '#dfe1ea' } }), item('ion-help', '24x7 support'));
  }
  const Seen = ({ children }) => h('div', { style: { position: 'relative' } }, children,
    h('span', { style: { position: 'absolute', right: 14, top: 12, display: 'inline-flex', gap: 4, alignItems: 'center', fontSize: 11, fontWeight: 700, color: '#1d7a46' } }, h('span', { className: 'tick', style: { width: 14, height: 14, fontSize: 9 } }, '✓'), 'Seen'));

  addBlock('srp', {
    id: 'srp-trust', sols: ['SOL-12', 'SOL-45'], pattern: 'new',
    title: 'Reassure early, and help users re-find what they already looked at',
    problem: 'First-time users want to know support exists before they commit, and today it surfaces deep in the funnel. Separately, users who go back to the list cannot tell which buses they have already opened.',
    changes: [
      'A low-key trust strip under the filters lists redBus USPs including "24x7 support". It scrolls away with the list, so it never competes with filters.',
      'Services the user has already opened carry a small green "Seen" mark with a check.',
    ],
    notes: ['Strip is non-interactive in v1; a tap target to a help sheet is optional.', 'USP wording is illustrative. Only claim what operations can stand behind.', '"Seen" is local state per device; define expiry (this search only vs 24 hours).', 'Both need new slots in the DS: trust strip and a tuple state.'],
    evidence: ['Seat Layout Page UX Audit (2/2): first-time and regional users want support reassurance while evaluating buses. Recommendation: a persistent support cue at decision points. Scope here is broader than the tracker’s regional-language framing.', 'Tracker row 29 (Medium): showcase support assurance pre-booking.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Nothing says support exists; no recall', scroll: true }, h('div', null,
        h(D.RouteHeader, { from: 'Delhi', to: 'Ganganagar (Sri Ganganagar)', busCount: 7, date: '9 Jul', day: 'Thu' }),
        h(D.FilterRail, null, h(D.FilterSortChip, { count: 0 }), h(D.FilterChip, { kind: 'ac' })),
        h('div', { style: { display: 'grid', gap: 12, padding: 16 } }, mk(TUPLES[1], 'b'), mk(TUPLES[2], 'c'), mk(TUPLES[3], 'd')))),
      h(Phone, { key: 2, kind: 'proposed', label: 'Trust strip + "Seen"', scroll: true, pins: [[1, -2, 136], [2, 252, 392]] }, h('div', null,
        h(D.RouteHeader, { from: 'Delhi', to: 'Ganganagar (Sri Ganganagar)', busCount: 7, date: '9 Jul', day: 'Thu' }),
        h(D.FilterRail, null, h(D.FilterSortChip, { count: 0 }), h(D.FilterChip, { kind: 'ac' })),
        h(Usp),
        h('div', { style: { display: 'grid', gap: 12, padding: 16 } }, mk(TUPLES[1], 'b'), h(Seen, { key: 'c' }, mk(TUPLES[2], 'c')), h(Seen, { key: 'd' }, mk(TUPLES[3], 'd'))))),
    ],
    legend: ['Trust strip with support USP', '"Seen" mark on buses already opened'],
  });
})();
