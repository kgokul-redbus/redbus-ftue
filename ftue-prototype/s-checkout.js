/* Customer info + Payments */
(function () {
  const { h, D, useState, useEffect, Phone, T, Ico, Spacer, AppBar, addBlock, DECKS } = window.FTUE;
  const BG = '#f4f3f8';
  const inr = (n) => '₹' + n.toLocaleString('en-IN');
  const Page = ({ children, bar, pad = 0 }) => h(React.Fragment, null,
    h('div', { style: { position: 'absolute', inset: 0, overflowY: 'auto', paddingBottom: bar ? 150 : pad } }, children), bar);
  const Bar = ({ children }) => h('div', { className: 'p-bar' }, children);
  const trip = { operator: 'Pinky Gudiya Travels And Cargo', boardingTime: 'Fri, 10 Jul · 21:15', boardingPoint: 'Shop no.35 old delhi railway station fatehpuri parking', droppingTime: 'Sat, 11 Jul · 05:10', droppingPoint: 'Lalgarh', seats: 1 };

  /* =============== CUST INFO: validation (SOL-42) =============== */
  const NAME = (v) => !v.trim() ? 'Enter the passenger’s name' : /\d/.test(v) ? 'Names can’t contain numbers' : /[^A-Za-z .'-]/.test(v) ? 'Enter the name in English letters' : '';
  const AGE = (v) => !v ? 'Enter the passenger’s age' : (+v < 1 || +v > 120) ? 'Age should be between 1 and 120' : '';
  const PHONE = (v) => !v ? 'Enter your 10-digit mobile number' : v.length < 10 ? 'Add ' + (10 - v.length) + ' more digit' + (10 - v.length > 1 ? 's' : '') + ' – mobile numbers have 10 digits' : !/^[6-9]/.test(v) ? 'Mobile numbers start with 6, 7, 8 or 9' : '';

  function Field({ label, value, onChange, check, old, type, inputMode, max }) {
    const msg = old ? old : check(value);
    const bad = !!msg;
    return h(D.TextField, { label, value, onChange: (e) => onChange(e.target.value), type: type || 'text', inputMode, maxLength: max, state: bad ? 'error' : 'default', support: bad ? msg : undefined, endAdornment: bad ? h(D.Icon, { name: 'ion-error', size: 'sm' }) : (value ? h('span', { style: { color: '#1d7a46', display: 'inline-flex' } }, h(D.Icon, { name: 'ion-check-circle', size: 'sm' })) : undefined) });
  }

  function ErrorsToday() {
    const old = { name: 'Enter your name in English', age: 'Please enter valid Age', phone: 'Please enter valid phone number' };
    const s = { name: '', age: '', phone: '' };
    return h(Page, { bar: h(Bar, null, h(D.Button, { variant: 'primary', block: true }, 'Continue')) },
      h(D.TripSummary, trip),
      h('div', { style: { padding: 16, display: 'grid', gap: 14 } },
        T('title-3', null, 'Passenger details'),
        h(D.TextField, { label: 'Name', defaultValue: 'Rahul 2', state: 'error', support: old.name, endAdornment: h(D.Icon, { name: 'ion-error', size: 'sm' }) }),
        h(D.TextField, { label: 'Age', defaultValue: '150', state: 'error', support: old.age, endAdornment: h(D.Icon, { name: 'ion-error', size: 'sm' }) }),
        h(D.TextField, { label: 'Phone number', defaultValue: '', state: 'error', support: old.phone, endAdornment: h(D.Icon, { name: 'ion-error', size: 'sm' }) }),
        T('caption', { className: 'p-muted' }, 'Errors stay on screen until Continue is tapped again, even after the field is fixed.')));
  }

  function ErrorsProposed() {
    const [name, setName] = useState('Rahul 2');
    const [age, setAge] = useState('150');
    const [phone, setPhone] = useState('98765');
    return h(Page, { bar: h(Bar, null, h(D.Button, { variant: 'primary', block: true }, 'Continue')) },
      h(D.TripSummary, trip),
      h('div', { style: { padding: 16, display: 'grid', gap: 14 } },
        T('title-3', null, 'Passenger details'),
        h(Field, { label: 'Name', value: name, onChange: setName, check: NAME }),
        h(Field, { label: 'Age', value: age, onChange: (v) => setAge(v.replace(/\D/g, '')), check: AGE, inputMode: 'numeric', max: 3 }),
        h(Field, { label: 'Phone number', value: phone, onChange: (v) => setPhone(v.replace(/\D/g, '')), check: PHONE, inputMode: 'numeric', max: 10 }),
        T('caption', { className: 'p-muted' }, 'Edit a field: its message updates as you type and clears the moment it is valid.')));
  }

  function SoldOut() {
    return h(React.Fragment, null,
      h('div', { style: { position: 'absolute', inset: 0, opacity: .45 } }, h(D.TripSummary, trip)),
      h('div', { style: { position: 'absolute', left: 16, right: 16, bottom: 28 } },
        h(D.Alert, { tone: 'error', title: 'Seat L25 was just booked by someone else', description: 'Your other details are saved. Pick another seat to continue.', action: h(D.Button, { variant: 'tertiary' }, 'Choose seat') })));
  }

  addBlock('custinfo', {
    id: 'ci-errors', sols: ['SOL-42'], pattern: 'ds',
    title: 'Errors that explain themselves and clear when fixed',
    problem: 'Messages stay on screen until the user taps Continue again, so people cannot tell whether they have fixed anything. Copy is vague ("Please enter valid Age" for three digits) and system text leaks through (e.g. "IAS response is null" when a seat sells out).',
    changes: [
      'Validate as the user types; the error clears the moment the field is valid, with a green check as confirmation.',
      'One message per failure mode: an empty phone number reads differently from a partial one.',
      'Technical errors are rewritten in plain language and offer the next step (see the sold-out seat state).',
    ],
    notes: ['Try it: edit the three fields in the middle phone. Name has digits, age is 150, phone has 5 digits.', 'Copy table in handoff: see below. All strings are proposals for content design.', 'Built entirely from DS parts (TextField error state, Alert).'],
    evidence: ['Tracker row 41 (Medium): error messages do not disappear until CTA is clicked. Row 43 (Low): sold-out seat shows a vague "IAS response null" message.', 'Cust Info "Archaic error handling" study, point 2: errors remain until CTA is tapped; recommends responsive messages.', 'SRP UX audit, point 2: show user-friendly errors instead of technical ones.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Stale, vague errors', bg: BG }, h(ErrorsToday)),
      h(Phone, { key: 2, kind: 'interactive', label: 'Live validation, specific copy', bg: BG }, h(ErrorsProposed)),
      h(Phone, { key: 3, kind: 'state', label: 'Sold-out seat in plain language', bg: BG }, h(SoldOut)),
      h('div', { key: 4, className: 'wide' }, h('table', { className: 'cmp' },
        h('thead', null, h('tr', null, ['Case', 'Today', 'Proposed'].map((t) => h('th', { key: t }, t)))),
        h('tbody', null, [
          ['Digits in name', 'Enter your name in English', 'Names can’t contain numbers'],
          ['Non-English letters', 'Enter your name in English', 'Enter the name in English letters'],
          ['Age 3 digits / over 120', 'Please enter valid Age', 'Age should be between 1 and 120'],
          ['Phone empty', 'Please enter valid phone number', 'Enter your 10-digit mobile number'],
          ['Phone partial', 'Please enter valid phone number', 'Add 5 more digits – mobile numbers have 10 digits'],
          ['Seat sold out', 'IAS response null', 'Seat L25 was just booked by someone else'],
        ].map((r, i) => h('tr', { key: i }, h('td', null, r[0]), h('td', { className: 'bad' }, r[1]), h('td', { className: 'good' }, r[2])))))),
    ],
  });

  /* =============== CUST INFO: summary, cost, de-emphasis (SOL-03/40/43/44) =============== */
  function CustToday() {
    return h(Page, { bar: h(Bar, null, h('div', { className: 'p-row', style: { marginBottom: 10 } }, T('caption', { className: 'p-muted' }, '1 seat'), Spacer(), T('title-3', { tabular: true }, inr(950))), h(D.Button, { variant: 'primary', block: true }, 'Continue to payment')) },
      h(D.TripSummary, trip),
      h('div', { style: { padding: '12px 0' } },
        h(D.PassengerCard, { passengers: [{ name: 'Sakshi Gabba', details: 'Female, 30 Years' }, { name: 'Shubham Sharma', details: 'Male, 32 Years' }], value: ['Shubham Sharma'] }),
        h('div', { style: { height: 12 } }),
        h(D.ContactDetailsCard, { phone: '+91 8802627572', email: 'rahul@example.com', region: 'Rajasthan', whatsapp: true })));
  }

  function CustProposed() {
    const [sheet, setSheet] = useState(false);
    const [g, setG] = useState('M');
    return h(React.Fragment, null,
      h(Page, { bar: h(Bar, null,
        h('div', { className: 'p-row', style: { marginBottom: 4 } },
          h('div', { className: 'p-sp' }, T('title-3', { tabular: true }, inr(997)), T('caption', { className: 'p-muted' }, 'incl. ₹47 taxes · no convenience fee')),
          h('button', { className: 'p-link', onClick: () => setSheet(true) }, 'Price breakup')),
        h(D.Button, { variant: 'primary', block: true }, 'Continue to payment')) },
        h(D.TripSummary, trip),
        h('div', { style: { padding: '12px 16px 0' } },
          h('div', { style: { background: '#e6f4ec', borderRadius: 12, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'flex-start' } },
            h('span', { style: { color: '#1d7a46', marginTop: 1 } }, Ico('ion-check-circle', 'sm')),
            h('div', { className: 'p-sp' }, T('label', { strong: true }, 'Free cancellation until 7 Jul, 1:15 PM'), T('caption', null, 'Then 75% refund until 8 Jul, 9:15 AM')),
            h('button', { className: 'p-link' }, 'Policy'))),
        h('div', { style: { padding: 16, display: 'grid', gap: 14 } },
          h('div', { className: 'p-row' }, T('title-3', null, 'Passenger 1'), Spacer(), h('button', { className: 'p-link', style: { color: '#6b7080', fontWeight: 600 } }, 'Log in to use saved passengers')),
          h(D.TextField, { label: 'Name', placeholder: 'As on ID' }),
          h('div', { className: 'p-row', style: { gap: 12, alignItems: 'flex-end' } },
            h('div', { className: 'p-sp' }, h(D.TextField, { label: 'Age', placeholder: 'Age', inputMode: 'numeric' })),
            h(D.ChipGroup, null, h(D.Chip, { selected: g === 'M', onClick: () => setG('M') }, 'Male'), h(D.Chip, { selected: g === 'F', onClick: () => setG('F') }, 'Female'))),
          h('div', { style: { background: '#fff', borderRadius: 12, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'center' } },
            h('div', { className: 'p-sp' }, T('label', null, 'Tickets go to +91 88026 27572'), T('caption', { className: 'p-muted' }, 'Rajasthan · WhatsApp updates on')),
            h('button', { className: 'p-link' }, 'Edit')))),
      h(D.BottomSheet, { open: sheet, title: 'Price breakup', onDismiss: () => setSheet(false) }, h(Breakup, { total: 997, discount: 0 })));
  }

  addBlock('custinfo', {
    id: 'ci-summary', sols: ['SOL-03', 'SOL-40', 'SOL-43', 'SOL-44'], pattern: 'ext',
    title: 'Tell users about the cost and the policy before payment, and quieten the rest',
    problem: 'Statutory charges first appear at payment and read as unexplained extras. The policy is invisible here, so users ask themselves about cancellation at the last step. Meanwhile state of residence, WhatsApp opt-in and the login prompt get as much visual weight as the passenger fields.',
    changes: [
      'SOL-03: the footer shows the all-in total with the tax share and "no convenience fee", plus a labelled Price breakup link. Users meet the number early.',
      'SOL-40: a one-line policy summary sits right under the trip summary. A tap opens the policy.',
      'SOL-43: state of residence and WhatsApp opt-in are defaulted and collapse into a single quiet contact line with an Edit link.',
      'SOL-44: "Log in to use saved passengers" is a light text link at the passenger heading, not a block.',
    ],
    notes: ['Try it: tap Price breakup, toggle Male/Female.', 'Amounts are illustrative. Real taxes come from the pricing service.', 'Defaulted values: derive state from the phone/location; WhatsApp opt-in default needs a consent/legal check before shipping.', 'The saved passenger rows return once the user logs in (DS PassengerCard).'],
    legend: ['Policy one-liner', 'Quiet login link', 'Contact collapsed to one line', 'All-in total with tax share and Price breakup'],
    evidence: ['Payments study: charges not visible or not understood are mistaken for commission and add to price shock.', 'Payment Page UX Audit: RTC users miss the disclaimer on Cust Info and assume extra charges appear on payment.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Contact and login given equal weight', bg: BG }, h(CustToday)),
      h(Phone, { key: 2, kind: 'interactive', label: 'Policy and cost up front', bg: BG, pins: [[1, 334, 188], [2, 334, 262], [3, 334, 538], [4, 334, 668]] }, h(CustProposed)),
    ],
  });

  /* =============== PAYMENT =============== */
  function Breakup({ total, discount }) {
    const row = (l, r, sub, strong, color) => h('div', { style: { padding: '8px 0' } },
      h('div', { className: 'p-row' }, T('body', { strong }, l), Spacer(), T('body', { strong, tabular: true, style: color ? { color } : null }, r)),
      sub && T('caption', { className: 'p-muted', style: { marginTop: 2 } }, sub));
    return h('div', null,
      row('Base fare (1 seat)', inr(950)),
      discount > 0 && row('Offer discount', '-' + inr(discount), null, false, '#1d7a46'),
      row('Taxes & statutory charges', inr(47), 'Collected as per government rules. redBus does not keep this.'),
      row('redBus convenience fee', inr(0), 'No convenience fee, no commission, no hidden charges.'),
      h('hr', { className: 'p-hr' }),
      row('Total payable', inr(total), null, true));
  }

  const Methods = () => h('div', { style: { padding: '0 16px 16px', display: 'grid', gap: 8 } },
    T('label', { className: 'p-muted', strong: true }, 'PAY USING'),
    ['UPI', 'Debit / credit card', 'Net banking', 'Wallets'].map((m) => h('div', { key: m, className: 'p-card', style: { display: 'flex', alignItems: 'center', gap: 12, padding: '14px 14px' } }, h('span', { className: 'p-ic' }, Ico('ion-ticket')), T('body', { strong: true }, m), Spacer(), Ico('ion-chevron-down', 'sm'))));

  function PayTop({ children }) {
    return h(React.Fragment, null,
      h(AppBar, { title: 'Payment', sub: 'Delhi → Ganganagar · Fri 10 Jul', right: h(D.Timer, { time: '09:45', hideIcon: true }) }), children);
  }

  function PayToday() {
    const [open, setOpen] = useState(false);
    return h(Page, { pad: 40 },
      h(PayTop),
      h('div', { style: { background: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center' } }, T('body', { className: 'p-muted' }, 'Pay'), Spacer(), T('title-3', { tabular: true }, inr(997))),
      h('div', { className: 'p-card', style: { margin: '12px 16px' } },
        h('div', { className: 'p-row' }, T('body', { strong: true }, 'Fare breakup'), Spacer(), h('button', { onClick: () => setOpen(!open), 'aria-label': 'Show fare breakup', style: { all: 'unset', cursor: 'pointer', display: 'grid', placeItems: 'center', width: 28, height: 28, borderRadius: '50%', background: '#f1f1f6' } }, Ico(open ? 'ion-minus' : 'ion-plus', 'sm'))),
        open && h('div', { style: { marginTop: 8 } }, h(Breakup, { total: 997, discount: 0 }))),
      h(Methods));
  }

  function PayProposed() {
    const [sheet, setSheet] = useState(false);
    return h(React.Fragment, null,
      h(Page, { pad: 40 },
        h(PayTop),
        h('div', { className: 'p-card', style: { margin: 16, padding: 16 } },
          T('caption', { className: 'p-muted' }, 'Amount to pay'),
          h('div', { className: 'p-row', style: { alignItems: 'flex-end' } }, h('span', { style: { fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums' } }, inr(997)), Spacer(),
            h('button', { onClick: () => setSheet(true), style: { all: 'unset', cursor: 'pointer', display: 'inline-flex', gap: 4, alignItems: 'center', color: '#2457d6', fontWeight: 700, fontSize: 14, padding: '6px 10px', borderRadius: 999, background: '#e8eefc' } }, 'Price breakup', Ico('ion-chevron-down', 'sm'))),
          h('div', { style: { display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 10, color: '#1d7a46' } }, Ico('ion-check-circle', 'sm'), T('caption', { strong: true }, 'No convenience fee, no commission, no hidden charges'))),
        h(Methods)),
      h(D.BottomSheet, { open: sheet, title: 'Price breakup', onDismiss: () => setSheet(false), actions: h(D.Button, { variant: 'primary', block: true, onClick: () => setSheet(false) }, 'Got it') }, h(Breakup, { total: 997, discount: 0 })));
  }

  addBlock('payment', {
    id: 'pay-breakup', sols: ['SOL-04', 'SOL-05', 'SOL-31', 'SOL-32', 'SOL-33', 'SOL-34'], pattern: 'new',
    title: 'Say what you pay, why, and what redBus does not charge',
    problem: 'Statutory charges and fees read as unexplained extra cost. The amount to pay lives in a header that is easy to miss, and the breakup hides behind a "+" icon that several buttons duplicate. Users blame redBus for charges that are government levies.',
    changes: [
      'SOL-04: the amount to pay becomes the hero of the page, in a card, not a header detail.',
      'SOL-05, 32: a labelled "Price breakup" button replaces the "+" icon; one entry point only.',
      'SOL-31: the term "Price breakup" is used everywhere (see Naming under Booking funnel).',
      'SOL-33: the breakup separates "Taxes & statutory charges" with a plain line saying redBus does not keep them.',
      'SOL-34: a permanent line says no convenience fee, commission or hidden charges, and the breakup shows a Rs 0 convenience fee row.',
    ],
    notes: ['Try it: tap "Price breakup" in the right-hand phone. On the left, tap the "+".', 'Payment screens are outside the DS scope; this page is composed from DS tokens and primitives (Text, Button, Timer, BottomSheet). Payment instrument UI is intentionally generic.', 'Amounts and the tax line are illustrative. Legal must sign off on the "does not keep this" wording and the "no hidden charges" claim.', 'Seat summary and offers rows are shown in the next two blocks.'],
    legend: ['Amount to pay as the hero', 'Labelled Price breakup entry', 'No-charge reassurance line'],
    evidence: ['Tracker row 48 (High): communicate that price shock on payment is GST or statutory, not redBus commission. Row 54 (Medium): reword fare breakup as price breakup.', 'Payment Page UX Audit (2/2): several buttons lead to the same breakup and its visual design makes users miss it.', 'Play Store review, 1 Sept 2026: "Ticket price varies as soon as I enter payment site".'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: '"Fare breakup" behind a + icon', bg: BG }, h(PayToday)),
      h(Phone, { key: 2, kind: 'interactive', label: 'Hero amount + labelled breakup', bg: BG, pins: [[1, 8, 98], [2, 316, 124], [3, 6, 180]] }, h(PayProposed)),
    ],
  });

  /* ---- seat consistency (SOL-11) ---- */
  function MiniSeat() {
    return h('div', { style: { display: 'grid', placeItems: 'center', background: '#f4f3f8', borderRadius: 12, padding: '12px 0' } },
      h('button', { className: 'ff-seat', type: 'button', 'data-seat': 'L25', 'data-price': '950', 'data-state': 'selected', 'aria-pressed': 'true', style: { position: 'static' } }, h('span', { className: 'ff-seat__label' }, '\u20B9950')));
  }

  function PaySeats({ proposed }) {
    return h(Page, { pad: 40 },
      h(PayTop),
      h('div', { className: 'p-card', style: { margin: 16, display: 'grid', gap: 10 } },
        h('div', { className: 'p-row' }, T('body', { strong: true }, 'Your seat'), Spacer(), h('button', { className: 'p-link' }, 'Change')),
        proposed
          ? h('div', { className: 'p-row', style: { gap: 14, alignItems: 'stretch' } }, h('div', { style: { width: 120, flex: 'none' } }, h(MiniSeat)), h('div', { className: 'p-col', style: { justifyContent: 'center' } }, T('title-3', null, 'L25'), T('caption', { className: 'p-muted' }, 'Lower deck'), T('caption', { className: 'p-muted' }, 'Same seat as on the seat layout')))
          : h('div', null, T('body', null, 'Seat 25 · horizontal berth · lower'), T('caption', { className: 'p-muted' }, 'Looks different from the seat layout; users go back to check.'))),
      h('div', { className: 'p-card', style: { margin: '0 16px' } }, T('body', { strong: true }, 'Pinky Gudiya Travels And Cargo'), T('caption', { className: 'p-muted' }, 'Fri 10 Jul · 21:15 → Sat 11 Jul · 05:50')));
  }

  addBlock('payment', {
    id: 'pay-seats', sols: ['SOL-11'], pattern: 'ds',
    title: 'Show the seat the way the user picked it',
    problem: 'The seat is represented differently on the seat layout and on payment, so users leave payment to go and re-check which seat they chose.',
    changes: [
      'Reuse the DS seat glyph, label and deck name from the seat layout on the payment page.',
      'Same wording ("L25", "Lower deck") in both places so there is nothing to recheck.',
    ],
    notes: ['The tile reuses the DS seat styling (selected state). In build use one shared seat-tile component on both screens.', 'If the layout is horizontal here and vertical on the seat layout, call out the deck name (tracker row 55).', 'Multi-seat: show one tile per seat, wrapped.'],
    evidence: ['Tracker row 55 (Medium): payment seat reference should at least call out upper and lower deck.', 'Payment Page UX Audit, point 4: reuse the same seat component and label across both screens so users do not need to recheck with the seat layout.'],
    Screens: () => [
      h(Phone, { key: 1, kind: 'today', label: 'Different seat representation', bg: BG, height: 460 }, h(PaySeats, { proposed: false })),
      h(Phone, { key: 2, kind: 'proposed', label: 'Same seat tile and label', bg: BG, height: 460 }, h(PaySeats, { proposed: true })),
    ],
  });

  /* ---- offers on payment (SOL-23) ---- */
  const COUPONS = {
    platform: [{ code: 'FIRST200', d: 'Flat ₹100 off on your first booking', off: 100 }, { code: 'TRAVEL50', d: '₹50 off on bookings above ₹800', off: 50 }],
    payment: [{ code: 'UPI100', d: '₹100 off when you pay with select UPI apps', off: 100 }, { code: 'CARD5', d: '5% cashback on select cards (valid for 7 days)', off: 0 }],
  };

  function PayOffers() {
    const [sheet, setSheet] = useState(false);
    const [tab, setTab] = useState('platform');
    const [applied, setApplied] = useState(null);
    const total = 997 - (applied ? applied.off : 0);
    return h(React.Fragment, null,
      h(Page, { pad: 40 },
        h(PayTop),
        h('div', { className: 'p-card', style: { margin: 16, padding: 16 } },
          T('caption', { className: 'p-muted' }, 'Amount to pay'),
          h('div', { className: 'p-row' }, h('span', { style: { fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums' } }, inr(total)), applied && h('span', { className: 'p-pill ok' }, 'Saved ' + inr(applied.off)))),
        h('div', { className: 'p-card', style: { margin: '0 16px 12px' } },
          h('button', { onClick: () => setSheet(true), style: { all: 'unset', cursor: 'pointer', display: 'flex', width: '100%', alignItems: 'center', gap: 10 } },
            h('span', { className: 'p-ic brand' }, Ico('ion-offer')),
            h('div', { className: 'p-sp' }, T('body', { strong: true }, applied ? applied.code + ' applied' : 'Offers and coupons'), T('caption', { className: 'p-muted' }, applied ? 'Tap to change' : 'Up to ₹100 off available')),
            h('span', { className: 'p-link' }, applied ? 'Change' : 'View all'))),
        h(Methods)),
      h(D.BottomSheet, { open: sheet, title: 'Offers for this booking', onDismiss: () => setSheet(false) },
        h('div', { style: { display: 'grid', gap: 12 } },
          h(D.Tabs, { layout: 'fixed', label: 'Offer type', value: tab, onValueChange: setTab, items: [{ value: 'platform', label: 'Platform offers' }, { value: 'payment', label: 'Payment offers' }] }),
          COUPONS[tab].map((c) => h(D.Coupon, { key: c.code, code: c.code, description: c.d, action: h(D.Button, { variant: 'tertiary', onClick: () => { setApplied(c); setSheet(false); } }, 'Apply') })))));
  }

  addBlock('payment', {
    id: 'pay-offers', sols: ['SOL-23'], pattern: 'ext',
    title: 'Offers on the payment page, one tap away',
    problem: 'Users expect coupons on the payment screen. If they have to hunt for one they leave, lose the seat and the context, and a coupon may still not apply. Cashback offers rarely show how long the cashback lasts.',
    changes: [
      'A quiet "Offers and coupons" row sits under the amount, with the best saving as a hint.',
      'Tapping opens a sheet bucketed into Platform offers and Payment offers, each with Apply.',
      'Applying updates the amount immediately and shows what was saved. Cashback offers state their validity.',
    ],
    notes: ['Try it: tap the offers row, pick a coupon, watch the amount change.', 'Inapplicable offers must say why they are inapplicable and what to do (not drawn here).', 'Built from DS Coupon, Tabs and BottomSheet.'],
    evidence: ['Payments study, key concern 1: users expect coupons on this screen; hunting breaks the experience; coupons lack context when not applicable; cashback does not show its validity.'],
    Screens: () => [h(Phone, { key: 1, kind: 'interactive', label: 'Offers ingress + bucketed sheet', bg: BG }, h(PayOffers))],
  });
})();
