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

  /* OTP in the same language as the login page: big title, the number with Edit, six rounded boxes, one pill CTA.
     A complete code verifies on its own; the boxes turn green for a beat before moving on. */
  function OtpPage({ s, go }) {
    const P = window.ONB.parts;
    const [code, setCode] = useState('');
    const [sec, setSec] = useState(30);
    const [done, setDone] = useState(false);
    const phone = s.phone && s.phone.length === 10 ? s.phone : '9876543210';
    useEffect(() => { const t = setInterval(() => setSec((x) => Math.max(0, x - 1)), 1000); return () => clearInterval(t); }, []);
    useEffect(() => {
      const f = (e) => { if (/^\d$/.test(e.key)) setCode((c) => (c + e.key).slice(0, 6)); if (e.key === 'Backspace') setCode((c) => c.slice(0, -1)); };
      window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f);
    }, []);
    useEffect(() => {
      if (code.length < 6) { setDone(false); return; }
      setDone(true);
      const t = setTimeout(() => go('location'), 650);
      return () => clearTimeout(t);
    }, [code]);
    const key = (k) => {
      if (done) return;
      if (k === 'del') setCode((c) => c.slice(0, -1));
      else if (/\d/.test(k)) setCode((c) => (c + k).slice(0, 6));
    };
    return h('div', { className: 'pd lp' },
      h(P.Status),
      h('button', { className: 'lp-skip', onClick: () => go('location') }, 'Skip'),
      h('h1', { className: 'lp-title' }, 'Enter the OTP'),
      h('div', { className: 'lp-body' },
        h('p', { className: 'lp-sent' }, 'Sent to ', h('b', null, '+91 ' + phone.slice(0, 5) + ' ' + phone.slice(5)),
          h('button', { onClick: () => go('login') }, 'Edit')),
        h('div', { className: 'lp-otp' + (done ? ' done' : ''), role: 'group', 'aria-label': 'One-time password' },
          [0, 1, 2, 3, 4, 5].map((k) => h('span', { key: k, className: (k === Math.min(code.length, 5) && !done ? 'on' : '') + (code[k] ? ' filled' : ''), style: { '--k': k } }, code[k] || ''))),
        h('p', { className: 'lp-hint' }, sec > 0
          ? ['Didn’t get it? Resend in ', h('b', { key: 't' }, '0:' + String(sec).padStart(2, '0'))]
          : ['Didn’t get it? ', h('button', { key: 'r', className: 'lp-link', onClick: () => setSec(30) }, 'Resend OTP')]),
        h('button', { className: 'lp-cta' + (code.length === 6 ? ' ready' : ''), onClick: () => code.length === 6 && go('location') }, done ? 'Verified' : 'Verify')),
      h(P.Keyboard, { onKey: key }),
      h(P.Gesture));
  }

  window.SOLLOGIN = { LoginPage, OtpPage };
})();
