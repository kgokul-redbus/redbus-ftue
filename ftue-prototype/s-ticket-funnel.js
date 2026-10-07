/* Ticket page + Booking funnel (cross-cutting) */
(function () {
  const { h, D, useState, useEffect, Phone, T, Ico, Spacer, AppBar, addBlock, DECKS, TRAY } = window.FTUE;
  const BG = '#f4f3f8';
  const trip = { operator: 'Pinky Gudiya Travels And Cargo', boardingTime: 'Fri, 10 Jul · 21:15', boardingPoint: 'Shop no.35 old delhi railway station fatehpuri parking', droppingTime: 'Sat, 11 Jul · 05:10', droppingPoint: 'Lalgarh', seats: 1 };
  const inr = (n) => '₹' + n.toLocaleString('en-IN');
  const Scroll = ({ children }) => h('div', { style: { position: 'absolute', inset: 0, overflowY: 'auto', paddingBottom: 30 } }, children);

  /* =============== TICKET =============== */
  const ConfirmHead = () => h('div', { style: { background: '#1d7a46', color: '#fff', padding: '18px 16px 22px' } },
    h('div', { className: 'p-row' }, h('span', { style: { display: 'grid', placeItems: 'center', width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,.2)' } }, Ico('ion-check')), h('div', { className: 'p-sp' }, h('div', { style: { fontWeight: 800, fontSize: 18 } }, 'Booking confirmed'), h('div', { style: { opacity: .9, fontSize: 12 } }, 'Ticket TS9X4K21 · sent to your phone')), Ico('ion-more')));

  const PrimoPride = () => h('div', { style: { margin: '-14px 16px 0', position: 'relative', background: 'linear-gradient(135deg,#1c3a8c,#2b52c4)', color: '#fff', borderRadius: 16, padding: '14px 14px', display: 'flex', gap: 12, alignItems: 'center', boxShadow: '0 4px 14px rgba(28,58,140,.35)' } },
    h('span', { style: { display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.18)' } }, Ico('ion-star')),
    h('div', null, h('div', { style: { fontWeight: 800 } }, 'Great choice. You’re travelling Primo.'), h('div', { style: { fontSize: 12, opacity: .9 } }, 'One of the best-rated buses on Delhi → Ganganagar.')));

  function TicketBody({ primo, actions }) {
    return h(Scroll, null,
      h(ConfirmHead),
      primo && h(PrimoPride),
      h('div', { style: { height: primo ? 12 : 0 } }),
      h('div', { className: 'p-card', style: { margin: primo ? '0 16px' : '-10px 16px 0', padding: 0, overflow: 'hidden' } }, h(D.TripSummary, trip)),
      actions
        ? h('div', { style: { padding: '14px 16px 0' } },
          T('label', { strong: true, className: 'p-muted' }, 'MANAGE THIS TICKET'),
          h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8 } },
            [['ion-delete', 'Cancel ticket', 'See your refund'], ['ion-calendar', 'Change date', 'If your plans move'], ['ion-help', 'Help with this ticket', 'Chat or call support'], ['ion-copy', 'Share ticket', 'Send to co-travellers']].map(([ic, t, s], i) => h('div', { key: t, className: 'p-card', style: { padding: 12, display: 'grid', gap: 6, border: i === 2 ? '1.5px solid #2457d6' : '1px solid transparent', background: i === 2 ? '#f4f7ff' : '#fff' } }, h('span', { className: 'p-ic ' + (i === 2 ? 'blue' : '') }, Ico(ic)), T('label', { strong: true }, t), T('caption', { className: 'p-muted' }, s)))))
        : h('div', { style: { padding: '14px 16px 0', display: 'grid', gap: 10 } },
          h('div', { className: 'p-card p-row' }, T('body', { strong: true }, 'Cancel ticket'), Spacer(), Ico('ion-chevron-down', 'sm')),
          h('div', { className: 'p-card p-row' }, T('body', { strong: true }, 'Change date'), Spacer(), Ico('ion-chevron-down', 'sm')),
          T('caption', { className: 'p-muted', style: { textAlign: 'center' } }, 'Need help? Open the ⋮ menu, then Support.')));
  }

  addBlock('ticket', {
    id: 'tkt-primo', sols: ['SOL-29'], pattern: 'new',
    title: 'Make the Primo booker feel good about the choice',
    problem: 'After paying a bit more for a Primo, the ticket page treats the booking like any other. The reassurance that the choice was right never arrives.',
    changes: ['A short celebratory card on the ticket page names the choice ("You’re travelling Primo") and repeats the one-line benefit.', 'Shown only for Primo bookings; not shown on repeat views after the first few opens.'],
    notes: ['Colours borrow the Primo navy; the real Primo mark should replace the star glyph (do not redraw it).', 'Copy is illustrative.', 'Pairs with the Primo funnel theme in Booking funnel.'],
    evidence: ['SOL-29: reinforce Primo on BusBuddy so users feel good about the choice they made. No separate research row; extends the Primo education theme.'],
    Screens: () => [h(Phone, { key: 1, kind: 'today', label: 'Plain confirmation', bg: BG, height: 620 }, h(TicketBody, { primo: false })), h(Phone, { key: 2, kind: 'proposed', label: 'Primo pride card', bg: BG, height: 620 }, h(TicketBody, { primo: true }))],
  });

  addBlock('ticket', {
    id: 'tkt-support', sols: ['SOL-37'], pattern: 'new',
    title: 'Make support part of managing the ticket',
    problem: 'Support is hidden in an overflow menu on the ticket page. People who want help look for it where they look for Cancel.',
    changes: ['A "Manage this ticket" grid puts "Help with this ticket" next to Cancel, Change date and Share.', 'Help is framed as a ticket action, so the context (ticket, route, date) is carried into the conversation.'],
    notes: ['Highlighted tile is only to show the new element; final styling should not out-shout Cancel.', 'Help opens a sheet with channels (chat, call, regional language when supported) in build; not drawn here.', 'Order of tiles follows frequency; confirm with data.'],
    evidence: ['Seat Layout Page UX Audit (2/2) and tracker row 29: users want reassurance support exists; ticket-time access is where they use it.'],
    Screens: () => [h(Phone, { key: 1, kind: 'today', label: 'Support behind the menu', bg: BG, height: 620 }, h(TicketBody, { primo: false, actions: false })), h(Phone, { key: 2, kind: 'proposed', label: 'Help as a ticket action', bg: BG, height: 620, pins: [[1, 6, 392]] }, h(TicketBody, { primo: false, actions: true }))],
    legend: ['Help with this ticket'],
  });

  function ReviewFlow() {
    const [rate, setRate] = useState(0);
    const [done, setDone] = useState(false);
    return h(React.Fragment, null,
      h('div', { style: { position: 'absolute', inset: 0 } }, h(TicketBody, { primo: false, actions: true })),
      h(D.BottomSheet, { open: !done, title: 'How was booking with redBus?', onDismiss: () => setDone(true), actions: rate ? h(D.Button, { variant: 'primary', block: true, onClick: () => setDone(true) }, rate >= 4 ? 'Rate us on Play Store' : 'Tell us what went wrong') : h(D.Button, { variant: 'tertiary', block: true, onClick: () => setDone(true) }, 'Maybe later') },
        h('div', { style: { display: 'grid', gap: 10 } },
          T('caption', { className: 'p-muted' }, 'Your ticket is confirmed. Two taps to tell us how it went.'),
          h(D.RatingInput, { label: 'Rate your booking', value: rate, onChange: setRate, onValueChange: setRate }),
          rate > 0 && T('caption', null, rate >= 4 ? 'Glad that went well. Would you share it on the Play Store?' : 'Sorry about that. What should we fix?'))));
  }

  function HomeReviewToday() {
    return h(React.Fragment, null,
      h('div', { style: { background: '#fff', paddingTop: 8 } }, h(D.JourneySearch, { destination: undefined, date: 'Tue 6-Oct', quickDates: [] }), h(D.HomeSearchButton)),
      h(D.HomeServices),
      h('div', { style: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,.5)', display: 'grid', placeItems: 'center', padding: 24 } },
        h('div', { style: { background: '#fff', borderRadius: 20, padding: 18, width: '100%' } }, T('title-3', null, 'Enjoying redBus?'), T('caption', { className: 'p-muted', style: { margin: '6px 0 12px' } }, 'Appears about 10 seconds after first launch, before the user has seen a single bus.'), h('div', { className: 'p-row' }, Spacer(), h('button', { className: 'p-link', style: { color: '#6b7080' } }, 'Not now'), h('button', { className: 'p-link' }, 'Rate us')))));
  }

  addBlock('ticket', {
    id: 'tkt-review', sols: ['SOL-26'], pattern: 'ds',
    title: 'Ask for a review after the booking, not 10 seconds after install',
    problem: 'The app-review prompt fires within about ten seconds of first launch, for a user who has not seen SRP. That leads to abandonment or poor ratings.',
    changes: ['Remove the review prompt from home entirely.', 'After booking confirmation, ask for a rating in context. A 4 to 5 rating goes to the Play Store; a lower rating goes to a short feedback form instead of a public review.'],
    notes: ['Try it: pick stars in the right-hand phone.', 'Do not gate Play Store prompts by rating where store policy forbids; confirm with legal. If gating is not allowed, show the Play Store prompt for all ratings and keep the feedback link beside it.', 'Frequency: at most once per booking, never in the first session if it was not booking-complete.'],
    evidence: ['Tracker row 60 (High): stop asking Play Store reviews right after login; let users explore SRP.', 'Home Page UX Audit, point 2: the review prompt fires within about 10 seconds; trigger it on a positive value moment, such as a completed first booking or an availed offer.'],
    Screens: () => [h(Phone, { key: 1, kind: 'today', label: 'Prompt on home, seconds after launch', bg: BG }, h(HomeReviewToday)), h(Phone, { key: 2, kind: 'interactive', label: 'Contextual ask after booking', bg: BG }, h(ReviewFlow))],
  });

  /* =============== BOOKING FUNNEL =============== */
  const Navy = ({ children }) => h('div', { style: { '--action-primary-surface-default': '#1c3a8c', '--content-brand-high-default': '#1c3a8c', position: 'absolute', inset: 0, background: '#eef1fb' } }, children);
  const NavyBar = ({ title, sub }) => h('div', { style: { background: 'linear-gradient(135deg,#1c3a8c,#2b52c4)', color: '#fff', padding: '14px 12px 14px', display: 'flex', alignItems: 'center', gap: 10 } },
    Ico('ion-arrow-back'), h('div', { className: 'p-sp' }, h('div', { style: { fontWeight: 800, fontSize: 16 } }, title), h('div', { style: { fontSize: 12, opacity: .85 } }, sub)), h('span', { style: { background: 'rgba(255,255,255,.18)', borderRadius: 999, padding: '3px 9px', fontSize: 11, fontWeight: 800, letterSpacing: '.04em' } }, 'PRIMO'));

  function ThemeSeat() {
    return h(Navy, null, h(NavyBar, { title: 'Select Seats', sub: 'Delhi → Ganganagar' }),
      h('div', { style: { padding: 16 } }, h('div', { className: 'p-card' }, T('body', { strong: true }, 'Pinky Gudiya Travels And Cargo'), T('caption', { className: 'p-muted' }, '21:15 → 05:50 · Primo'))),
      h('div', { style: { padding: '0 16px', display: 'flex', gap: 8, flexWrap: 'wrap' } }, h('span', { className: 'p-pill navy' }, 'Lower deck'), h('span', { className: 'p-pill navy' }, 'Upper deck')),
      h('div', { className: 'p-bar' }, h(D.Button, { variant: 'primary', block: true }, 'Continue · ' + inr(950))));
  }
  function ThemeInfo() {
    return h(Navy, null, h(NavyBar, { title: 'Passenger details', sub: '1 seat · L25' }),
      h('div', { style: { padding: 16, display: 'grid', gap: 12 } }, h(D.TextField, { label: 'Name', placeholder: 'As on ID' }), h(D.TextField, { label: 'Age', placeholder: 'Age' }), h('div', { className: 'p-card p-row' }, h('span', { className: 'p-ic blue' }, Ico('ion-star')), T('label', null, 'Primo: top-rated bus, newer fleet'))),
      h('div', { className: 'p-bar' }, h(D.Button, { variant: 'primary', block: true }, 'Continue to payment')));
  }
  function ThemePay() {
    return h(Navy, null, h(NavyBar, { title: 'Payment', sub: 'Pay securely' }),
      h('div', { className: 'p-card', style: { margin: 16 } }, T('caption', { className: 'p-muted' }, 'Amount to pay'), h('div', { style: { fontSize: 30, fontWeight: 800 } }, inr(997)), h('span', { className: 'p-link' }, 'Price breakup')),
      h('div', { className: 'p-bar' }, h(D.Button, { variant: 'primary', block: true }, 'Pay ' + inr(997))));
  }

  addBlock('funnel', {
    id: 'fun-theme', sols: ['SOL-30'], pattern: 'new',
    title: 'Explore a distinct theme for the Primo booking funnel',
    problem: 'Booking a Primo looks identical to booking any bus, so the premium choice is never echoed back as the user moves through the funnel.',
    changes: ['Swap the funnel’s primary colour and app-bar treatment to a Primo-specific theme from seat layout through payment.', 'A small Primo chip stays in the app bar so the context is clear on every step.'],
    notes: ['This is an exploration, not a recommendation to ship. Colour is borrowed from the Primo mark; the final palette belongs to brand.', 'Only the primary action colour and app bar change here, via two token overrides. Check contrast (AA) on the final palette.', 'Risk: every extra theme multiplies QA. Decide after the lighter Primo education items prove value.'],
    evidence: ['SOL-30 sits under Primo education; no separate research row.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'proposed', label: 'Seat selection', bg: '#eef1fb', height: 520 }, h(ThemeSeat)),
      h(Phone, { key: 2, kind: 'proposed', label: 'Customer info', bg: '#eef1fb', height: 520 }, h(ThemeInfo)),
      h(Phone, { key: 3, kind: 'proposed', label: 'Payment', bg: '#eef1fb', height: 520 }, h(ThemePay)),
    ],
  });

  /* ---- time format (SOL-08/09) ---- */
  function TimeFormat({ twelve }) {
    const d = twelve ? '9:15 PM' : '21:15', a = twelve ? '5:50 AM' : '05:50';
    return h(Scroll, null,
      h('div', { style: { padding: 16, display: 'grid', gap: 12 } },
        h(D.BusTuple, { departure: d, arrival: a, duration: '8h 35m', seats: 16, fare: '₹900', operator: 'Pinky Gudiya Travels And Cargo', busType: 'A/C Sleeper (2+1)', rating: h(D.BusRating, { value: '4.5', count: 278 }), tags: ['New Bus'] }),
        h('div', { className: 'p-card' }, T('label', { strong: true }, 'Departure time'), h('div', { style: { display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' } }, (twelve ? ['Before 6 AM', '6 AM to 12 PM', '12 PM to 6 PM', 'After 6 PM'] : ['Before 06:00', '06:00 - 12:00', '12:00 - 18:00', 'After 18:00']).map((t) => h('span', { key: t, className: 'p-pill navy' }, t)))),
        h('div', { className: 'p-card' }, T('label', { strong: true }, 'Cancellation policy'), T('caption', { className: 'p-muted' }, twelve ? 'Free until 7 Jul, 1:15 PM' : 'Free until 7 Jul, 13:15'))));
  }

  addBlock('funnel', {
    id: 'fun-time', sols: ['SOL-08', 'SOL-09'], pattern: 'spec',
    title: 'One time format everywhere, chosen by experiment',
    problem: 'The app mixes 24-hour (tuples, tray, boarding points) and 12-hour (cancellation policy) times. Users generally prefer 12-hour, and less savvy users make more errors with 24-hour.',
    changes: ['SOL-08: standardise on one format across SRP, filters, tray, boarding points, cancellation policy and ticket.', 'SOL-09: decide which one by running an experiment, 12-hour against 24-hour. The two variants are drawn below so the experiment can be built from them.'],
    notes: ['Proposed metrics: time-filter usage, SRP to seat-layout click-through, boarding-point errors and support contacts about timing. Primary: booking conversion.', 'Check wrapping on small widths: "9:15 PM" is wider than "21:15" and may crowd the tuple.', 'Do the Hindi and regional formats later; the experiment is English-only (the booking funnel is 90%+ English).'],
    evidence: ['Tracker row 15 (High): explore a 12-hour time format.', 'Study (SRP 1/2), point 7: different time formats across the flow confuse users; less savvy users are more error prone with 24-hour.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'state', label: 'Variant A: 24-hour everywhere', bg: BG, height: 440 }, h(TimeFormat, { twelve: false })),
      h(Phone, { key: 2, kind: 'state', label: 'Variant B: 12-hour everywhere', bg: BG, height: 440 }, h(TimeFormat, { twelve: true })),
    ],
  });

  /* ---- naming (SOL-10, SOL-31) ---- */
  addBlock('funnel', {
    id: 'fun-naming', sols: ['SOL-10', 'SOL-31'], pattern: 'spec',
    title: 'One name for one thing',
    problem: 'The same property carries different names on different screens, and sometimes on the same screen. Users cannot tell whether "free reschedule" and "free date change" are one policy or two.',
    changes: ['Adopt one term per concept and apply it across every surface, including filters, bus details, payment and the ticket.', 'Recommendations below are proposals; the final words need content design sign-off.'],
    notes: ['Update the DS component copy (e.g. "Fare breakup", "Date change policy" tab labels) at the same time so the library does not re-introduce drift.', 'Add the glossary to the content guidelines.'],
    evidence: ['Tracker row 28 (High): fix terms for features as per filter; FR is called reschedule policy and free date change on the same tray.', 'Tracker row 54 (Medium): reword fare breakup as price breakup across the payment page.', 'Studies: bus details discoverability point 2; payment page audit point 2 (users find "Payment details" or "Price details" more intuitive than "Fare breakup"); filters (SRP 2/2) point e.'],
    Screens: () => [h('div', { key: 1, className: 'wide' }, h('table', { className: 'cmp' },
      h('thead', null, h('tr', null, ['Concept', 'Names in use today', 'Proposed term', 'Seen on'].map((t) => h('th', { key: t }, t)))),
      h('tbody', null, [
        ['What you pay, itemised', 'Fare breakup, Price details, Payment details', 'Price breakup', 'Seat layout footer, payment, ticket'],
        ['Changing the travel date', 'Free reschedule, Free date change, Reschedule policy', 'Date change (free where it applies)', 'Bus details tray, filters, policy table'],
        ['Rules for cancelling', 'Cancellation policy, Booking policy', 'Cancellation policy', 'Bus details, Cust info, ticket'],
        ['What the bus offers', 'Amenities, Features, Bus features', 'Amenities', 'Filters vs bus details'],
      ].map((r, i) => h('tr', { key: i }, h('td', null, r[0]), h('td', { className: 'bad' }, r[1]), h('td', { className: 'good' }, r[2]), h('td', null, r[3]))))))],
  });

  /* ---- notification ask (SOL-25) ---- */
  function NotifyToday() {
    return h(React.Fragment, null,
      h('div', { style: { background: '#fff', paddingTop: 8 } }, h(D.JourneySearch, { date: 'Tue 6-Oct', quickDates: [] }), h(D.HomeSearchButton)),
      h(D.HomeServices),
      h('div', { style: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)', display: 'grid', placeItems: 'center', padding: 28 } },
        h('div', { style: { background: '#fff', borderRadius: 28, padding: 22, width: '100%' } }, T('title-3', null, 'Allow redBus to send you notifications?'), T('caption', { className: 'p-muted', style: { margin: '8px 0 12px' } }, 'No reason given. The user has seen nothing yet.'), h('div', { style: { display: 'grid', gap: 8 } }, ['Allow', 'Don’t allow'].map((t) => h('div', { key: t, style: { padding: '10px 14px', borderRadius: 999, border: '1px solid #cfd3de', textAlign: 'center', fontWeight: 600, color: '#1d4fbf' } }, t))))));
  }

  function NotifyProposed() {
    const [sheet, setSheet] = useState(false);
    const [toast, setToast] = useState(false);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(false), 2400); return () => clearTimeout(t); } }, [toast]);
    return h(React.Fragment, null,
      h('div', { style: { position: 'absolute', inset: 0 } },
        h('div', { className: 'ff-status' }),
        h('header', { className: 'ff-appbar' }, h('button', { className: 'ff-back', type: 'button', 'aria-label': 'Back', onClick: () => setSheet(true) }, h(D.Icon, { name: 'ion-arrow-back', className: 'ff-icon' })), h('div', { className: 'ff-appbar__copy' }, h('h1', null, 'Select Seats'), h('p', null, 'Delhi → Ganganagar (Sri Ganganagar)'))),
        h(D.SeatMap, { decks: DECKS }),
        h(D.SeatTray, Object.assign({ photo: true }, TRAY, { footer: h(D.SeatSelectionFooter, { count: 0, total: 0 }) }))),
      h(D.BottomSheet, { open: sheet, title: 'Want a heads-up on this route?', onDismiss: () => setSheet(false), actions: h(React.Fragment, null, h(D.Button, { variant: 'secondary', onClick: () => setSheet(false) }, 'No thanks'), h(D.Button, { variant: 'primary', onClick: () => { setSheet(false); setToast(true); } }, 'Notify me')) },
        h('div', { style: { display: 'grid', gap: 12 } },
          h('div', { className: 'p-row' }, h('span', { className: 'p-ic brand' }, Ico('ion-offer')), h('div', null, T('body', { strong: true }, 'Price drops and seat alerts'), T('caption', { className: 'p-muted' }, 'We’ll tell you if fares fall or seats run low on Delhi → Ganganagar.'))),
          T('caption', { className: 'p-muted' }, 'You can turn this off any time in settings.'))),
      h(D.Snackbar, { open: toast }, 'Alerts on for Delhi → Ganganagar'));
  }

  addBlock('funnel', {
    id: 'fun-notify', sols: ['SOL-25'], pattern: 'ext',
    title: 'Ask for notifications when a user drops, with a reason',
    problem: 'The notification permission appears on the home page before the user has done anything, with no explanation. The best moment to ask is when we have something useful to send them.',
    changes: ['Remove the cold notification dialog from home.', 'Intercept the first back-out from a seat layout with a bottom sheet that names the value (price drops, seat alerts) for this specific route. Yes triggers the OS dialog; No never asks again this session.'],
    notes: ['Try it: tap the back arrow in the right-hand phone.', 'The same pattern fits other drop points (SRP, Cust info). Define which exit events qualify.', 'Cap re-asks: after "No thanks", wait several sessions.'],
    evidence: ['Home Page UX Audit and tracker row 60: permission and review prompts fire before the user has seen SRP.', 'SOL-25 in the actionables: ask when a user drops from a session, with context and highlighted value.'],
    Screens: () => [h(Phone, { key: 1, kind: 'today', label: 'Cold ask on home', bg: BG }, h(NotifyToday)), h(Phone, { key: 2, kind: 'interactive', label: 'Contextual ask on exit', bg: BG }, h(NotifyProposed))],
  });
})();
