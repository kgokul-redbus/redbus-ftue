/* Onboarding + Common home */
(function () {
  const { h, D, useState, useEffect, Phone, T, Ico, Spacer, addBlock } = window.FTUE;

  const Dots = ({ n, on }) => h('div', { style: { display: 'flex', gap: 6, justifyContent: 'center' } },
    Array.from({ length: n }, (_, i) => h('i', { key: i, style: { width: i === on ? 18 : 6, height: 6, borderRadius: 3, background: i === on ? 'var(--action-primary-surface-default)' : '#d6d8e0', display: 'block' } })));

  const Row = ({ icon, title, body, tone }) => h('div', { style: { display: 'flex', gap: 12, alignItems: 'flex-start' } },
    h('span', { className: 'p-ic ' + (tone || 'brand') }, Ico(icon)),
    h('div', null, T('body', { strong: true }, title), T('caption', { className: 'p-muted' }, body)));

  /* ---------- Onboarding: location pre-prompt (SOL-24) ---------- */
  function LocationPre({ withSystem }) {
    return h('div', { style: { height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', padding: '56px 24px 28px', gap: 20 } },
      h('div', { style: { alignSelf: 'center', width: 132, height: 132, borderRadius: '50%', background: 'var(--ion-red-50,#fdecec)', display: 'grid', placeItems: 'center', color: 'var(--action-primary-surface-default)' } }, Ico('ion-location', 'lg')),
      h('div', { style: { textAlign: 'center' } }, T('title-1', null, 'Find buses near you, faster'),
        T('body', { className: 'p-muted', style: { marginTop: 8 } }, 'Share your location so we can fill in your From city and show the closest boarding points.')),
      h('div', { style: { display: 'grid', gap: 14, marginTop: 8 } },
        h(Row, { icon: 'ion-bus', title: 'Pre-filled From city', body: 'Skip typing on your very first search' }),
        h(Row, { icon: 'ion-location', title: 'Nearest boarding points', body: 'Sorted by how close they are to you', tone: 'blue' }),
        h(Row, { icon: 'ion-eye-off', title: 'Only while you use the app', body: 'You can change this anytime in settings', tone: 'ok' })),
      Spacer(),
      h(D.Button, { variant: 'primary', block: true }, 'Allow location access'),
      h(D.Button, { variant: 'tertiary', block: true }, 'Enter city manually'),
      withSystem && h('div', { style: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)', display: 'grid', placeItems: 'center', padding: 28 } },
        h('div', { style: { background: '#fff', borderRadius: 28, padding: 24, width: '100%' } },
          T('title-3', null, 'Allow redBus to access this device’s location?'),
          h('div', { style: { height: 14 } }),
          h('div', { style: { display: 'grid', gap: 8 } },
            ['While using the app', 'Only this time', 'Don’t allow'].map((t, i) => h('div', { key: t, style: { padding: '10px 14px', borderRadius: 999, border: '1px solid #cfd3de', textAlign: 'center', fontWeight: 600, color: '#1d4fbf', background: i === 0 ? '#e8eefc' : '#fff' } }, t))))));
  }

  /* ---------- Onboarding: post-booking support slide (SOL-36) ---------- */
  function SupportSlide() {
    return h('div', { style: { height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', padding: '56px 24px 28px', gap: 18 } },
      h('div', { style: { textAlign: 'right' } }, h('button', { className: 'p-link', style: { color: '#6b7080' } }, 'Skip')),
      h('div', { style: { alignSelf: 'center', width: 132, height: 132, borderRadius: '50%', background: '#e8eefc', display: 'grid', placeItems: 'center', color: '#2457d6' } }, Ico('ion-help', 'lg')),
      h('div', { style: { textAlign: 'center' } }, T('title-1', null, 'We’re with you after you book'),
        T('body', { className: 'p-muted', style: { marginTop: 8 } }, 'Change plans, track your ticket or reach support without leaving the app.')),
      h('div', { style: { display: 'grid', gap: 14, marginTop: 4 } },
        h(Row, { icon: 'ion-bookings', title: 'Manage from My Bookings', body: 'Cancel or change the travel date in a couple of taps' }),
        h(Row, { icon: 'ion-ticket', title: 'Help is on your ticket', body: 'Every ticket has a one-tap path to support', tone: 'blue' }),
        h(Row, { icon: 'ion-check-circle', title: 'Refund status in one place', body: 'See what you get back and when', tone: 'ok' })),
      Spacer(),
      h(Dots, { n: 3, on: 2 }),
      h(D.Button, { variant: 'primary', block: true }, 'Get started'));
  }

  addBlock('onboarding', {
    id: 'onb-location', sols: ['SOL-24'], pattern: 'ext',
    title: 'Ask for location with context, not cold',
    problem: 'Location permission is the only ask we make at onboarding, but it fires as a bare system dialog with no reason attached.',
    changes: [
      'Add a one-screen pre-prompt that states what the user gets (pre-filled From city, nearest boarding points) before the OS dialog.',
      'Always offer a visible "Enter city manually" exit so declining is never a dead end.',
      'Location stays at onboarding; the other two asks move out (see Home, Ticket and Booking funnel).',
    ],
    notes: ['Copy is illustrative; confirm with content design.', 'Only the pre-prompt is ours to design. The Android dialog is fixed by the OS.', 'If the user taps "Don\'t allow", fall back to the manual From field with no repeated asks in session 1.'],
    evidence: ['Tracker row 60 / Home Page UX Audit: permission and review prompts fire before the user has seen SRP.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'proposed', label: 'Pre-prompt screen', bg: '#fff' }, h(LocationPre)),
      h(Phone, { key: 2, kind: 'state', label: 'Then the OS dialog', bg: '#fff' }, h(LocationPre, { withSystem: true })),
    ],
  });

  addBlock('onboarding', {
    id: 'onb-support', sols: ['SOL-36'], pattern: 'new',
    title: 'Introduce post-booking support in onboarding',
    problem: 'First-time users don\'t know help exists until deep in the funnel, so uncertainty about "what if something goes wrong" sits unanswered at the moment of commitment.',
    changes: [
      'Add a closing onboarding slide that names three post-booking safety nets: manage booking, help on ticket, refund status.',
      'Keep it to one slide; do not lengthen onboarding beyond the existing flow.',
    ],
    notes: ['Final slide of the carousel; dots shown as 3 of 3 here, adapt to actual slide count.', 'Needs an illustration slot. Placeholder uses an Ions icon on a tinted disc.', 'Copy is illustrative.'],
    evidence: ['Seat Layout Page UX Audit (2/2): first-time users want reassurance that support exists while still evaluating buses.'],
    Screens: () => [h(Phone, { key: 1, kind: 'proposed', label: 'Final onboarding slide', bg: '#fff' }, h(SupportSlide))],
  });

  /* =============== HOME =============== */
  const HomeShell = ({ children }) => h(React.Fragment, null,
    h('div', { style: { position: 'absolute', inset: 0, overflowY: 'auto', paddingBottom: 110 } }, children),
    h(D.HomeBottomNav, { value: 'home' }));

  const dates = { Today: 'Tue 6-Oct', Tomorrow: 'Wed 7-Oct' };

  function HomeToday() {
    return h(React.Fragment, null,
      h('div', { style: { background: '#fff', paddingTop: 8 } },
        h(D.JourneySearch, { origin: 'Delhi', destination: 'Ganganagar (Sri Ganganagar)', date: 'Tue 6-Oct', quickDates: [{ label: 'Today', value: 'Tue 6-Oct' }, { label: 'Tomorrow', value: 'Wed 7-Oct' }] }),
        h(D.WomenBookingToggle, null),
        h(D.HomeSearchButton, null)),
      h(D.HomeServices), h(D.HomeCampaign),
      h(D.HomeOffers, { offers: [{ title: 'Save up to ₹300 on your next bus ticket' }, { title: 'Get ₹150 off on train tickets' }] }),
      h('div', { style: { height: 120 } }));
  }

  function HomeSearchProposed() {
    const [tab, setTab] = useState('Today');
    const [women, setWomen] = useState(false);
    const [toast, setToast] = useState(false);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(false), 2600); return () => clearTimeout(t); } }, [toast]);
    return h(React.Fragment, null,
      h('div', { style: { background: '#fff', paddingTop: 8 } },
        h(D.JourneySearch, { origin: 'Delhi', destination: 'Ganganagar (Sri Ganganagar)', date: tab === 'Pick date' ? 'Select date' : dates[tab], quickDates: [] }),
        h('div', { style: { padding: '0 16px 4px' } },
          h(D.SegmentedControl, { label: 'Travel date', options: [{ value: 'Today', label: 'Today' }, { value: 'Tomorrow', label: 'Tomorrow' }, { value: 'Pick date', label: 'Pick date' }], value: tab, onValueChange: setTab })),
        h(D.WomenBookingToggle, { checked: women, onCheckedChange: setWomen }),
        h(D.HomeSearchButton, { onClick: () => setToast(true) })),
      h(D.HomeServices),
      h('div', { style: { height: 120 } }),
      h(D.Snackbar, { open: toast }, 'Searching ' + (tab === 'Pick date' ? 'on picked date' : dates[tab]) + (women ? ' · Women-only mode on' : '')));
  }

  addBlock('home', {
    id: 'home-search', sols: ['SOL-17', 'SOL-18'], pattern: 'ext',
    title: 'Search widget: Today/Tomorrow become a date selector, not a shortcut',
    problem: 'Today/Tomorrow buttons jump straight to SRP, so users skip the Women-mode toggle and have no chance to review the search. A specific date needs a different interaction plus the Search CTA.',
    changes: [
      'Today / Tomorrow / Pick date behave as tabs: they set the date and nothing else.',
      'Every route to SRP goes through the Search CTA, so Women-mode is always seen.',
      'One interaction model for all three date choices. "Pick date" opens the calendar sheet (existing DateSheet).',
    ],
    notes: ['Try it: select a tab, toggle Women-mode, press Search. Search is the only action that navigates.', 'Uses SegmentedControl in place of the built-in quick-date pills (JourneySearch is passed an empty quickDates). A dedicated date-tabs variant of JourneySearch is the cleaner build.', 'Consider keeping the Women-mode toggle on SRP too (study suggestion), tracked separately.'],
    evidence: ['Homepage study, point 3: different interactions for dates in search widget are confusing; Today/Tomorrow goes straight to SRP while the women funnel is penalised.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Quick-date pills jump to SRP', bg: '#f6f5fa' }, h(HomeShell, null, h(HomeToday))),
      h(Phone, { key: 2, kind: 'interactive', label: 'Dates as tabs; Search is the only action', bg: '#f6f5fa' }, h(HomeShell, null, h(HomeSearchProposed))),
    ],
  });

  /* ----- Offers on first fold (SOL-22) ----- */
  const PLATFORM = [{ title: 'Save up to ₹300 on your next bus ticket' }, { title: 'Flat 10% off on your first booking' }, { title: 'Women travelling together save more' }];
  const PAYMENT = [{ title: '₹100 off with select UPI apps' }, { title: '5% cashback on select cards' }, { title: 'No-cost EMI on fares above ₹1,500' }];

  function HomeOffersProposed() {
    const [tab, setTab] = useState('platform');
    return h(React.Fragment, null,
      h('div', { style: { background: '#fff', paddingTop: 8 } },
        h(D.JourneySearch, { origin: 'Delhi', destination: 'Ganganagar (Sri Ganganagar)', date: 'Tue 6-Oct', quickDates: [] }),
        h(D.HomeSearchButton, null)),
      h('div', { className: 'hide-oh', style: { background: '#fff', marginTop: 8, paddingBottom: 12 } },
        h('div', { style: { padding: '14px 16px 0' } }, T('title-3', null, 'Offers only on redBus'), T('caption', { className: 'p-muted' }, 'Deals you won\u2019t find on other apps')),
        h('div', { style: { padding: '8px 16px 0' } },
          h(D.Tabs, { layout: 'fixed', label: 'Offer type', value: tab, onValueChange: setTab, items: [{ value: 'platform', label: 'Platform offers' }, { value: 'payment', label: 'Payment offers' }] })),
        h(D.HomeOffers, { offers: tab === 'platform' ? PLATFORM : PAYMENT })),
      h(D.HomeServices),
      h('div', { style: { height: 120 } }));
  }

  addBlock('home', {
    id: 'home-offers', sols: ['SOL-22'], pattern: 'ext',
    title: 'Offers visible on the first fold, with platform vs payment bucketing',
    problem: 'Offers sit at the very bottom of the first screen, behind the services strip and a full-width campaign banner. Only a sliver shows, with no sense of how deep the deals go or what is exclusive to redBus.',
    changes: [
      'Move the offers section above the services strip and campaign so the whole first row of offers sits on the first fold.',
      'Heading and support line carry the exclusivity message ("only on redBus").',
      'Two clear buckets via tabs: Platform offers and Payment offers.',
    ],
    notes: ['Try it: switch tabs. The rail swaps content.', 'Offer titles are placeholders. Real inventory comes from the offers service.', 'Needs a decision on what yields to make room: campaign banner or services strip (here the campaign banner is removed from first fold).', 'Women-mode toggle is dropped from this mock to keep the fold clean; in build it stays.'],
    evidence: ['Payments study, key concerns: users expect coupons early and hunting for them breaks the experience. No homepage-specific tracker row exists, so this rests on the closest evidence available.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Offers below services + campaign' }, h(HomeShell, null, h(HomeToday))),
      h(Phone, { key: 2, kind: 'interactive', label: 'Offers on first fold, bucketed' }, h(HomeShell, null, h(HomeOffersProposed))),
    ],
  });

  /* ----- Continue booking card (SOL-27) ----- */
  function ContinueCard({ onDismiss }) {
    return h('div', { className: 'p-card', style: { margin: '12px 16px 0', border: '1px solid #f3c9cb', background: '#fff' } },
      h('div', { className: 'p-row' },
        h('span', { className: 'p-ic brand' }, Ico('ion-ticket')),
        h('div', { className: 'p-sp' }, T('body', { strong: true }, 'Continue your booking'), T('caption', { className: 'p-muted' }, 'Delhi → Ganganagar · Fri 10 Jul · Seat L25')),
        h('button', { className: 'p-link', style: { color: '#6b7080' }, onClick: onDismiss, 'aria-label': 'Dismiss' }, Ico('ion-close', 'sm'))),
      h('div', { className: 'p-row', style: { marginTop: 12 } },
        h('div', { className: 'p-sp' }, T('caption', { className: 'p-muted' }, 'Pinky Gudiya Travels'), T('body', { strong: true, tabular: true }, '₹950')),
        h(D.Button, { variant: 'primary' }, 'Complete payment')));
  }

  function HomeContinue() {
    const [shown, setShown] = useState(true);
    return h(React.Fragment, null,
      h('div', { style: { background: '#fff', paddingTop: 8 } },
        h(D.JourneySearch, { origin: 'Delhi', destination: 'Ganganagar (Sri Ganganagar)', date: 'Tue 6-Oct', quickDates: [{ label: 'Today', value: 'Tue 6-Oct' }, { label: 'Tomorrow', value: 'Wed 7-Oct' }] }),
        h(D.HomeSearchButton, null)),
      shown ? h(ContinueCard, { onDismiss: () => setShown(false) }) : h('div', { style: { padding: 16 } }, h('button', { className: 'p-link', onClick: () => setShown(true) }, 'Reset card')),
      h(D.HomeServices), h('div', { style: { height: 120 } }));
  }

  addBlock('home', {
    id: 'home-continue', sols: ['SOL-27'], pattern: 'new',
    title: 'Continue booking card for payment-page drop-offs',
    problem: 'A booking abandoned at payment has no way back in. The home page does not offer to resume it.',
    changes: [
      'Show a Continue booking card directly under the search widget when a payment-step session is recoverable.',
      'Card carries route, date, seat and fare so the user recognises it in one glance.',
      'Dismissible; hides once the seat hold expires.',
    ],
    notes: ['Already scheduled (S4 Q2 / S1 Q3). This mock is a visual reference for Figma, not a new scope item.', 'If seat hold is still live, add the DS Timer ("Seats held for 09:45") on the card.', 'Try it: dismiss with the close icon.'],
    evidence: ['Tracker row 1 (High, FTUE + UXB): introduce a Continue booking card on HP for payment page drop-offs.'],
    Screens: () => [h(Phone, { key: 1, kind: 'interactive', label: 'Home with Continue booking card' }, h(HomeShell, null, h(HomeContinue)))],
  });
})();
