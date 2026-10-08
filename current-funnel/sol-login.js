/* Login as its own focused page (ref. Airbnb "Log in or sign up"), following the USP slides.
   Big title like production, one field, one primary action, alternatives below; Skip sits top-right as a quiet link.
   Native 411.43 dp space inside .pd; reuses the production numeric keyboard. Styles in sol-login.css. */
(function () {
  const h = React.createElement;
  const { useState, useRef, useEffect } = React;

  function LoginPage({ s, set, go }) {
    const P = window.ONB.parts;
    const [num, setNum] = useState(s.phone && s.phone.length <= 10 ? s.phone : '');
    const [shake, setShake] = useState(0);
    const ref = useRef(null);
    useEffect(() => { ref.current && ref.current.focus(); }, []);
    const ok = num.length === 10;
    const next = () => {
      if (!ok) { setShake((k) => k + 1); ref.current && ref.current.focus(); return; }
      set({ phone: num }); go('otp');
    };
    const key = (k) => {
      if (k === 'del') setNum((n) => n.slice(0, -1));
      else if (k === 'ok') next();
      else if (/\d/.test(k)) setNum((n) => (n + k).slice(0, 10));
    };
    const pretty = num.length > 5 ? num.slice(0, 5) + ' ' + num.slice(5) : num;
    return h('div', { className: 'pd lp' },
      h(P.Status),
      h('button', { className: 'lp-skip', onClick: () => go('location') }, 'Skip'),
      h('h1', { className: 'lp-title' }, 'Log in or sign up'),
      h('div', { className: 'lp-body' },
        h('label', { key: 'f' + shake, className: 'lp-field' + (num ? ' filled' : '') + (shake ? ' shake' : '') },
          h('span', { className: 'lp-cc' }, '+91'),
          h('span', { className: 'lp-in' },
            h('small', null, 'Mobile number'),
            h('input', {
              ref, value: pretty, inputMode: 'numeric', autoComplete: 'tel-national', 'aria-label': 'Mobile number',
              onChange: (e) => setNum(e.target.value.replace(/\D/g, '').slice(0, 10)),
              onKeyDown: (e) => { if (e.key === 'Enter') next(); },
            }))),
        h('p', { className: 'lp-hint' }, 'We’ll send you an OTP to confirm. Standard rates may apply.'),
        h('button', { className: 'lp-cta' + (ok ? ' ready' : ''), onClick: next }, 'Continue'),
        h('div', { className: 'lp-or' }, h('i'), h('span', null, 'or'), h('i')),
        h('button', { className: 'lp-alt', onClick: () => go('location') },
          h('img', { src: P.A + 'google-g.png', alt: '' }), h('span', null, 'Continue with Google'))),
      h(P.Keyboard, { onKey: key }),
      h(P.Gesture));
  }

  window.SOLLOGIN = { LoginPage };
})();
