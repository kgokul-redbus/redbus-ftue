import { useState, useEffect, useCallback, useRef } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import OffersStrip from '../components/OffersStrip.jsx'
import ResultCard from '../components/ResultCard.jsx'
import FilterWidget from '../components/FilterWidget.jsx'
import Keyboard from '../components/Keyboard.jsx'
import { BackArrow, Sparkle, Plus } from '../components/Icons.jsx'

const PLACEHOLDER = 'Ask your preference'
import './SRP.css'

const RESULTS = [
  {
    primo: true,
    deals: [
      { tone: 'group', lead: 'Group', strong: '15% OFF' },
      { tone: 'regular', lead: 'Last min.', strong: '10% off' },
    ],
    dep: '20:15',
    arr: '20:15',
    duration: '7h 25m',
    seats: '20 Seats (9 Single)',
    price: '₹1,960',
    operator: 'Sri Krishna Travels',
    busType: 'Volvo 9600 Multi-Axle A/C Sleeper (2+1)',
    rating: '4.4',
    count: '0000',
    rtbTitle: 'Value pick',
    props: ['15% cheaper than similar buses', 'Comfort score of 8.5/10'],
  },
  {
    dep: '20:15',
    arr: '20:15',
    duration: '7h 25m',
    seats: '20 Seats (9 Single)',
    price: '₹1,960',
    operator: 'Sri Krishna Travels',
    busType: 'Volvo 9600 Multi-Axle A/C Sleeper (2+1)',
    rating: '4.4',
    count: '0000',
    fallback: '88% on-time',
  },
  {
    primo: true,
    deals: [
      { tone: 'group', lead: 'Group', strong: '15% OFF' },
      { tone: 'regular', lead: 'Last min.', strong: '10% off' },
    ],
    dep: '20:15',
    arr: '20:15',
    duration: '7h 25m',
    seats: '20 Seats (9 Single)',
    price: '₹1,960',
    operator: 'Sri Krishna Travels',
    busType: 'Volvo 9600 Multi-Axle A/C Sleeper (2+1)',
    rating: '4.4',
    count: '0000',
    rtbTitle: 'Value pick',
    props: ['In-bus toilet', 'Comfort score of 8.5/10'],
  },
]

// A trimmed set shown after the user submits a preference.
const FILTERED = [
  {
    primo: true,
    deals: [{ tone: 'group', lead: 'Best', strong: 'match' }],
    dep: '20:15',
    arr: '03:40',
    duration: '7h 25m',
    seats: '18 Seats (6 Single)',
    price: '₹680',
    operator: 'Sri Krishna Travels',
    busType: 'Volvo 9600 Multi-Axle A/C Sleeper (2+1)',
    rating: '4.4',
    count: '1.2k',
    rtbTitle: 'Matches your preference',
    props: ['AC Sleeper', 'Under ₹700', 'Comfort score of 8.5/10'],
  },
  {
    dep: '21:30',
    arr: '05:10',
    duration: '7h 40m',
    seats: '12 Seats (12 Single)',
    price: '₹699',
    operator: 'Kallada Travels',
    busType: 'Volvo 9600 A/C Sleeper (2+1)',
    rating: '4.2',
    count: '860',
    rtbTitle: 'Matches your preference',
    props: ['AC Sleeper', 'Under ₹700'],
  },
]

function CardSkeleton() {
  return (
    <div className="srp-sk-card">
      <div className="srp-sk-row">
        <span className="srp-sk" style={{ width: 104, height: 18 }} />
        <span className="srp-sk" style={{ width: 60, height: 18 }} />
      </div>
      <span className="srp-sk" style={{ width: 150, height: 20 }} />
      <span className="srp-sk" style={{ width: '78%', height: 16 }} />
      <div className="srp-sk-row">
        <span className="srp-sk" style={{ width: 96, height: 20, borderRadius: 10 }} />
        <span className="srp-sk" style={{ width: 96, height: 20, borderRadius: 10 }} />
      </div>
    </div>
  )
}

export default function SRP({ onBack }) {
  const [reveal, setReveal] = useState(false)
  const [typing, setTyping] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [applied, setApplied] = useState(null)
  const [filtering, setFiltering] = useState(false)
  const [glow, setGlow] = useState(false)
  const [typedPh, setTypedPh] = useState('')
  const [phTyping, setPhTyping] = useState(false)
  const [flying, setFlying] = useState(null)
  const [usedChipId, setUsedChipId] = useState(null)
  const inputRef = useRef(null)

  // Introduce the filter widget a beat after the results settle, with the
  // brand-gradient highlight sweeping across it — and type the placeholder in.
  useEffect(() => {
    const t1 = setTimeout(() => { setReveal(true); setGlow(true) }, 900)
    const t2 = setTimeout(() => setGlow(false), 900 + 3800)

    // typewriter the placeholder, in sync with the gradient animation, once.
    let i = 0
    let interval
    const t3 = setTimeout(() => {
      setPhTyping(true)
      interval = setInterval(() => {
        i += 1
        setTypedPh(PLACEHOLDER.slice(0, i))
        if (i >= PLACEHOLDER.length) {
          clearInterval(interval)
          setTimeout(() => setPhTyping(false), 500)
        }
      }, 55)
    }, 1250)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(interval)
    }
  }, [])

  const openKeyboard = useCallback(() => {
    setTyping(true)
    setPrompt((p) => p || applied || '')
  }, [applied])

  const closeKeyboard = useCallback(() => setTyping(false), [])

  // On-screen keys drive the real <input> so the cursor, selection, delete and
  // space all behave natively; execCommand fires the input event → onChange.
  const onKey = useCallback((ch) => {
    const el = inputRef.current
    if (el) {
      el.focus()
      document.execCommand('insertText', false, ch)
    } else {
      setPrompt((p) => p + ch)
    }
  }, [])
  const onBackspace = useCallback(() => {
    const el = inputRef.current
    if (el) {
      el.focus()
      document.execCommand('delete', false)
    } else {
      setPrompt((p) => p.slice(0, -1))
    }
  }, [])

  const runFilter = useCallback(() => {
    setFiltering(true)
    setGlow(true)
    setTimeout(() => setFiltering(false), 1600)
    // let the gradient linger on the results for a beat, then fade away
    setTimeout(() => setGlow(false), 2700)
  }, [])

  const onSend = useCallback(() => {
    setPrompt((p) => {
      const q = p.trim()
      if (!q) return p
      setApplied(q)
      setTyping(false)
      runFilter()
      return q
    })
  }, [runFilter])

  const onClear = useCallback(() => {
    setApplied(null)
    setPrompt('')
    setUsedChipId(null)
  }, [])

  // Tapping a chip flies it into the input field, drops its text there and
  // filters immediately.
  const onChipTap = useCallback((chip, ev) => {
    const apply = () => {
      setPrompt(chip.label)
      setApplied(chip.label)
      runFilter()
    }
    const pill = ev.currentTarget.querySelector('.fw-pill')
    const field = document.querySelector('.fw-field')
    if (!pill || !field) {
      apply()
      return
    }
    const p = pill.getBoundingClientRect()
    const fr = field.getBoundingClientRect()
    setUsedChipId(chip.id)
    setFlying({
      chip,
      from: { left: p.left, top: p.top, height: p.height },
      to: { left: fr.left + 6, top: fr.top + (fr.height - p.height) / 2 },
    })
    setTimeout(apply, 380) // text lands in the field, then filter
    setTimeout(() => setFlying(null), 440) // remove the flying clone
  }, [runFilter])

  const results = applied ? FILTERED : RESULTS
  const canSend = prompt.trim().length > 0

  return (
    <div className={`device srp${typing ? ' srp--typing' : ''}`}>
      <div className="srp-fixed">
        <StatusBar />
        <header className="srp-nav">
          <button className="srp-back" onClick={onBack} aria-label="Back">
            <BackArrow size={24} />
          </button>
          <div className="srp-title">
            <span className="t-body-b">Select Seats</span>
            <span className="srp-route">Bangalore <span className="srp-arrow">→</span> Chennai</span>
          </div>
          <div className="srp-date">
            <span className="srp-date-day">26 Jun</span>
            <span className="srp-date-wd">Fri</span>
          </div>
        </header>
      </div>

      <div className="srp-scroll">
        <OffersStrip />
        {applied && !filtering && (
          <p className="srp-rayhead">
            <Sparkle size={16} style={{ display: 'inline-block', verticalAlign: '-3px', marginRight: 6 }} />
            Here are the <b>{results.length} {results.length === 1 ? 'bus' : 'buses'}</b> that best match
            your preference — <b>“{applied}”</b>.
          </p>
        )}
        <div className="srp-list">
          {filtering
            ? [0, 1, 2].map((i) => <CardSkeleton key={i} />)
            : results.map((r, i) => <ResultCard key={i} data={r} />)}
        </div>
        <div style={{ height: 168 }} />
      </div>

      {/* scrim to dismiss the keyboard by tapping outside */}
      {typing && <div className="srp-scrim" onClick={closeKeyboard} />}

      {/* chip flying into the input field */}
      {flying && (
        <div
          className="fw-fly"
          style={{
            left: flying.from.left,
            top: flying.from.top,
            height: flying.from.height,
            '--fly-dx': `${flying.to.left - flying.from.left}px`,
            '--fly-dy': `${flying.to.top - flying.from.top}px`,
          }}
        >
          <span className="fw-fly-bg" />
          <span className="fw-fly-ic">
            {flying.chip.icon === 'ai' ? <Sparkle size={16} /> : <Plus size={16} />}
          </span>
          <span className="fw-fly-text t-subhead-r">{flying.chip.label}</span>
        </div>
      )}

      <FilterWidget
        reveal={reveal}
        typing={typing}
        prompt={prompt}
        applied={applied}
        placeholder={typedPh}
        phTyping={phTyping}
        usedChipId={usedChipId}
        onFieldClick={openKeyboard}
        onSend={onSend}
        onClear={onClear}
        onChipClick={onChipTap}
        glow={glow}
        inputRef={inputRef}
        onChangeText={setPrompt}
        onCloseKeyboard={closeKeyboard}
      />

      <Keyboard
        visible={typing}
        onKey={onKey}
        onBackspace={onBackspace}
        onSend={onSend}
        canSend={canSend}
      />
    </div>
  )
}
