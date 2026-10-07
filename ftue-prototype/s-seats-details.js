/* Seat selection + Bus details */
(function () {
  const { h, D, useState, useEffect, useRef, Phone, T, Ico, Spacer, addBlock, DECKS, TRAY } = window.FTUE;
  const BG = '#f4f3f8';

  const SeatBar = () => h(React.Fragment, null,
    h('div', { className: 'ff-status' }),
    h('header', { className: 'ff-appbar' },
      h('button', { className: 'ff-back', type: 'button', 'aria-label': 'Back' }, h(D.Icon, { name: 'ion-arrow-back', className: 'ff-icon' })),
      h('div', { className: 'ff-appbar__copy' }, h('h1', null, 'Select Seats'), h('p', null, 'Delhi → Ganganagar (Sri Ganganagar)'))));
  const Tray = (props) => h(D.SeatTray, Object.assign({ photo: true }, TRAY, { footer: h(D.SeatSelectionFooter, { count: 0, total: 0 }) }, props));
  const Replay = ({ onClick }) => h('button', { className: 'replay', onClick }, '↻ Replay');

  /* ---------------- Seat layout: cheapest seat + full layout on load (SOL-07/35/41) ---------------- */
  function SeatsProposed() {
    const [run, setRun] = useState(0);
    const [top, setTop] = useState(600);
    const root = useRef(null);
    useEffect(() => { const t = root.current && root.current.querySelector('.ff-seat-tray'); if (t) setTop(t.offsetTop); });
    return h('div', { ref: root, className: 'hl', key: run, style: { position: 'absolute', inset: 0 } },
      h(SeatBar),
      h('div', { className: 'zoomwrap run', key: 'z' + run }, h(D.SeatMap, { decks: DECKS })),
      h('div', { style: { position: 'absolute', left: 12, right: 12, top: top - 46, zIndex: 6 } },
        h('div', { style: { background: '#e6f4ec', color: '#1d7a46', borderRadius: 999, padding: '8px 14px', display: 'flex', gap: 8, alignItems: 'center', fontSize: 12, fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,.15)' } },
          Ico('ion-offer', 'sm'), 'Cheapest seats from \u20B9900, ringed in green')),
      h(Tray),
      h(Replay, { onClick: () => setRun((r) => r + 1) }));
  }

  addBlock('seats', {
    id: 'seat-price', sols: ['SOL-07', 'SOL-35', 'SOL-41'], pattern: 'ext',
    title: 'Show the whole layout first, and point to the cheapest seats',
    problem: 'Users see the lowest fare on SRP, but the cheapest seats are usually in the last rows, below the first fold. They find a Rs 500 to 700 higher price and feel tricked. A login bottom sheet on this page adds friction on top.',
    changes: [
      'On load, show the full seat layout (both decks, zoomed out), then ease into the normal larger view.',
      'Highlight the lowest-priced seats in green with a one-line explainer under the app bar.',
      'SOL-41: remove the login bottom sheet from this screen. No design is needed; engineering change only.',
    ],
    notes: ['Try it: press Replay. The layout begins at about 62% and eases to full size after 1.6s.', 'Highlight is data-driven (seats at the lowest price). Define tie-break when several price tiers exist.', 'Timing and easing are starting points; tune in motion design. Respect reduced-motion settings.', 'Chip copy is illustrative.'],
    evidence: ['Seat Layout study: price shock was observed among many users as a Rs 500 to 700 difference was seen in SL vs SRP.'],
    legend: ['Cheapest-fare pill above the tray'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Cheapest seats sit below the fold', bg: BG, height: 800 }, h(React.Fragment, null, h(SeatBar), h(D.SeatMap, { decks: DECKS }), h(Tray))),
      h(Phone, { key: 2, kind: 'interactive', lazy: true, label: 'Full layout on load, cheapest highlighted', bg: BG, pins: [[1, 2, 606]] }, h(SeatsProposed)),
    ],
  });

  /* ---------------- Seat layout: Primo header (SOL-02) ---------------- */
  function PrimoBanner({ onInfo }) {
    return h('div', { style: { position: 'absolute', left: 0, right: 0, top: 108, zIndex: 40, animation: 'bannerLife 6s ease both' } },
      h('div', { style: { margin: '0 12px', background: '#e8ecfa', border: '1px solid #cfd8f6', borderRadius: 12, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'center' } },
        h('span', { className: 'p-ic blue', style: { width: 30, height: 30 } }, Ico('ion-star', 'sm')),
        h('div', { className: 'p-sp' }, T('label', { strong: true }, 'You’re viewing a Primo bus'), T('caption', { className: 'p-muted' }, 'One of the best on this route')),
        h('button', { className: 'p-link', onClick: onInfo }, 'Know more')));
  }

  function SeatsPrimo() {
    const [run, setRun] = useState(0);
    const [sheet, setSheet] = useState(false);
    const PS = window.FTUE.PrimoSheetBody;
    return h(React.Fragment, null,
      h('div', { key: run, style: { position: 'absolute', inset: 0 } },
        h(SeatBar), h(D.SeatMap, { decks: DECKS }), h(Tray), h(PrimoBanner, { onInfo: () => setSheet(true) })),
      h(Replay, { onClick: () => setRun((r) => r + 1) }),
      h(D.BottomSheet, { open: sheet, title: 'What is Primo?', onDismiss: () => setSheet(false), actions: h(D.Button, { variant: 'primary', block: true, onClick: () => setSheet(false) }, 'Got it') }, h(PS)));
  }

  addBlock('seats', {
    id: 'seat-primo', sols: ['SOL-02'], pattern: 'new',
    title: 'Reinforce Primo with a header that appears, then gets out of the way',
    problem: 'A user who tapped a Primo bus on SRP still has no explanation on the seat layout. Anything permanent would eat into a screen that is already tight.',
    changes: [
      'A short banner slides in under the app bar for a few seconds, says what Primo means in one line, and slides away.',
      '"Know more" opens the same explainer sheet used on SRP.',
      'Show only for the first sessions per user; never on repeat Primo bookings.',
    ],
    notes: ['Try it: Replay, or tap "Know more" while the banner is up.', 'Lifetime here is 6 seconds; confirm with research. Banner should not shift the seat map; it overlays.', 'Banner is a new DS pattern (transient info banner).'],
    evidence: ['Tracker row 18 and the SRP 1/2 study on Primo education; SOL-02 extends the same intent to the next page.'],
    Screens: () => [h(Phone, { key: 1, kind: 'interactive', lazy: true, label: 'Transient Primo banner', bg: BG }, h(SeatsPrimo))],
  });

  /* ---------------- Bus details: tray discoverability (SOL-19/20/21) ---------------- */
  const tabs = [
    { id: 'highlights', label: 'Highlights' }, { id: 'cancellation', label: 'Cancellation policy' }, { id: 'date-change', label: 'Date change policy' },
    { id: 'route', label: 'Bus route' }, { id: 'boarding-info', label: 'Boarding points' }, { id: 'policies', label: 'Other policies' },
  ];
  const policyRows = [
    { time: 'Before 7th Jul 01:15 PM', standard: '90% refund', flexible: '100% refund' },
    { time: 'From 7th Jul 01:15 PM Until 8th Jul 09:15 AM', standard: '75% refund', flexible: '100% refund' },
    { time: 'After 8th Jul 09:15 AM', standard: '50% refund', flexible: '100% refund' },
  ];
  const operator = { operator: TRAY.operator, primo: true, meta: TRAY.meta, rating: '4.5', ratingCount: '278' };
  const boarding = [{ time: '21:15', date: '10 Jul', name: 'Shop no.35 old delhi railway station fatehpuri parking', address: 'Fatehpuri parking' }, { time: '22:14', date: '10 Jul', name: 'Ekta Enclave metro station, Peeragarhi', address: 'Peeragarhi' }];

  const Highlights = () => h(D.DetailSection, { id: 'highlights' },
    h('div', { className: 'ff-detail-grid' }, h('div', { className: 'ff-detail-card' }, 'New Bus', h('br'), h('small', null, '12 months old')), h('div', { className: 'ff-detail-card' }, 'Bus Safety', h('br'), h('small', null, 'Available'))),
    h('div', { className: 'ff-detail-card', style: { marginTop: 8 } }, 'Top 5%  ', h('small', null, 'One of the best on this route')));

  function TrayProposed() {
    const [mode, setMode] = useState('closed'); // closed | peek | open
    const [run, setRun] = useState(0);
    const [top, setTop] = useState(600);
    const root = useRef(null);
    useEffect(() => {
      setMode('closed');
      const a = setTimeout(() => setMode('peek'), 1000);
      const b = setTimeout(() => setMode((m) => (m === 'peek' ? 'closed' : m)), 3600);
      return () => { clearTimeout(a); clearTimeout(b); };
    }, [run]);
    useEffect(() => { const t = root.current && root.current.querySelector('.ff-seat-tray'); if (t) setTop(t.offsetTop); });
    const y = { closed: '100%', peek: '48%', open: '0%' }[mode];
    return h('div', { ref: root, style: { position: 'absolute', inset: 0 } },
      h(SeatBar), h(D.SeatMap, { decks: DECKS }), h(Tray),
      mode === 'closed' && h('button', { onClick: () => setMode('open'), style: { position: 'absolute', left: '50%', top: top - 34, transform: 'translateX(-50%)', zIndex: 30, background: '#fff', border: '1px solid #d6d8e0', borderRadius: 999, padding: '3px 12px 3px 8px', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,.12)' } }, Ico('ion-chevron-up', 'sm'), 'Bus details'),
      h('div', { style: { position: 'absolute', inset: 0, zIndex: 20, transform: 'translateY(' + y + ')', transition: 'transform .5s cubic-bezier(.2,.8,.2,1)', pointerEvents: mode === 'closed' ? 'none' : 'auto' } },
        h(D.BusDetailsSheet, { open: true, tabs, activeSection: 'highlights', onClose: () => setMode('closed'), ...operator },
          h(Highlights), h(D.DetailSection, { id: 'cancellation', title: 'Cancellation policy' }, h(D.PolicyTable, { rows: policyRows })))),
      h(Replay, { onClick: () => setRun((r) => r + 1) }));
  }

  addBlock('details', {
    id: 'det-tray', sols: ['SOL-19', 'SOL-20', 'SOL-21'], pattern: 'ext',
    title: 'Make it obvious that the tray opens',
    problem: 'Most users do not realise the bottom tray expands to show bus details. The details are valuable but go unexplored for lack of affordance, and when opened the tray behaves erratically (closes, drops, drags).',
    changes: [
      'A "Bus details" chevron chip sits on the tray edge and doubles as the open/close control.',
      'On first load the tray lifts to about half height, then tucks away so users see there is content inside.',
      'The tray and the page behave as one continuous surface: drag up and the details follow the seat layout without a mode switch.',
    ],
    notes: ['Try it: press Replay to watch the half-expanded peek, then tap the chevron chip to open fully and the close button to dismiss.', 'Peek runs only on first visits per user (frequency rule needed).', 'The continuous-page behaviour (SOL-19) is a scroll/gesture spec, not a visual. Capture as a prototype video in Figma; this HTML does not simulate the drag.', 'Fix the erratic drag states with a single snap-point model: closed, half, full.'],
    evidence: ['Tracker row 25 (High): gesture not expected by users; make it auto scroll.', 'Study "Bus details discoverability hampered": most users did not realise the tray expands; recommends a continuous page, a chevron, and smoother movement.'],
    legend: ['Chevron chip on the tray edge', 'Half-expanded peek on first load'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Only a faint handle', bg: BG }, h(React.Fragment, null, h(SeatBar), h(D.SeatMap, { decks: DECKS }), h(Tray))),
      h(Phone, { key: 2, kind: 'interactive', lazy: true, label: 'Chevron + first-load peek', bg: BG, pins: [[1, 218, 598], [2, 316, 440]] }, h(TrayProposed)),
    ],
  });

  /* ---------------- Bus details: Primo tappable (SOL-28) ---------------- */
  function TrayPrimoTap() {
    const [sheet, setSheet] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current && ref.current.querySelector('.ff-seat-tray .ff-primo');
      if (!el) return;
      const fn = (e) => { e.stopPropagation(); e.preventDefault(); setSheet(true); };
      el.addEventListener('click', fn, true);
      return () => el.removeEventListener('click', fn, true);
    });
    const PS = window.FTUE.PrimoSheetBody;
    return h('div', { ref, className: 'ff-primo-tap', style: { position: 'absolute', inset: 0 } },
      h(SeatBar), h(D.SeatMap, { decks: DECKS }), h(Tray),
      h(D.BottomSheet, { open: sheet, title: 'Why this is a Primo bus', onDismiss: () => setSheet(false), actions: h(D.Button, { variant: 'primary', block: true, onClick: () => setSheet(false) }, 'Got it') }, h(PS)));
  }

  addBlock('details', {
    id: 'det-primo', sols: ['SOL-28'], pattern: 'ext',
    title: 'Tap the Primo mark to learn why it matters',
    problem: 'The Primo logo in the collapsed tray is just a label. Users who want to know what it means have nowhere to ask.',
    changes: [
      'The Primo wordmark in the tray gets a dotted underline and an "i" so it reads as tappable.',
      'Tapping opens the same explainer sheet used on SRP and Seat selection, explaining what Primo is and why it is worth choosing.',
    ],
    notes: ['Try it: tap the Primo mark in the tray.', 'Tapping the operator name still opens bus details; only the Primo mark is intercepted.', 'Reuse the explainer content and component from SRP; one source of truth.'],
    evidence: ['Tracker rows 18 and 33; SRP 1/2 study on Primo.'],
    Screens: () => [h(Phone, { key: 1, kind: 'interactive', label: 'Primo mark opens explainer', bg: BG, pins: [[1, 2, 640]] }, h(TrayPrimoTap))],
    legend: ['Dotted underline and "i" make the Primo mark tappable'],
  });

  /* ---------------- Bus details: policy one-liner (SOL-39) ---------------- */
  function PolicyProposed() {
    const [open, setOpen] = useState(false);
    return h(D.BusDetailsSheet, { open: true, media: false, tabs, activeSection: 'cancellation', ...operator },
      h(D.DetailSection, { id: 'cancellation', title: 'Cancellation policy' },
        h('div', { style: { background: '#e6f4ec', borderRadius: 12, padding: 12, display: 'grid', gap: 4 } },
          h('div', { style: { fontWeight: 800, color: '#1d7a46' } }, 'Free cancellation until 7 Jul, 1:15 PM'),
          T('caption', null, 'Then 75% refund until 8 Jul, 9:15 AM. After that, 50%.')),
        h('div', { style: { margin: '10px 0' } }, h('button', { className: 'p-link', onClick: () => setOpen(!open) }, open ? 'Hide full table' : 'View full table')),
        open && h(D.PolicyTable, { rows: policyRows })),
      h(D.DetailSection, { id: 'date-change', title: 'Date change policy' },
        h('div', { style: { background: '#e8eefc', borderRadius: 12, padding: 12 } }, h('div', { style: { fontWeight: 800, color: '#2457d6' } }, 'Free date change until 24 hours before departure'), T('caption', null, 'Fare difference may apply.'))));
  }

  addBlock('details', {
    id: 'det-policy', sols: ['SOL-39'], pattern: 'ext',
    title: 'Say it in one line; keep the table a tap away',
    problem: 'Users cannot tell at a glance what they can cancel or reschedule, until when, and how much they would get back. The table also shows "100% refund" in green even in windows where it does not apply.',
    changes: [
      'Lead each policy with a single sentence: the deadline for free cancellation, then what follows.',
      'The full table sits behind "View full table" for users who want it.',
      'Use one term for the date-change policy everywhere (see naming consistency under Booking funnel).',
    ],
    notes: ['Try it: tap "View full table".', 'Same one-line summary is reused on Customer info (SOL-40).', 'Fix table colouring: green only where the refund actually is 100%. Verify against the deck; the study wording was paraphrased.', 'Summary text is generated from the same policy data; no hand-written copy per operator.'],
    evidence: ['Tracker row 28 (High): fix terms on the tray, make the FC table clear with the cancellation deadline called out.', 'Study "Bus details discoverability", point 2: multiple terms for the same property on one screen.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Table only', bg: BG }, h(D.BusDetailsSheet, { open: true, media: false, tabs, activeSection: 'cancellation', ...operator }, h(D.DetailSection, { id: 'cancellation', title: 'Cancellation policy' }, h(D.PolicyTable, { rows: policyRows })), h(D.DetailSection, { id: 'date-change', title: 'Date change policy' }, h('p', null, 'You can change the travel date until 24 hours before departure. Fare difference may apply.')))),
      h(Phone, { key: 2, kind: 'interactive', label: 'One-line summary first', bg: BG }, h(PolicyProposed)),
    ],
  });
})();
