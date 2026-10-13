import { useState } from 'react'
import { Backspace, Shift, ArrowUp } from './Icons.jsx'
import './Keyboard.css'

export const KB_HEIGHT = 300

const NUM_ROW = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const LETTERS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
]
const SYMBOLS = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['-', '/', ':', ';', '(', ')', '₹', '&', '@', '"'],
  ['.', ',', '?', '!', "'"],
]

export default function Keyboard({ visible, onKey, onBackspace, onSend, canSend }) {
  const [shift, setShift] = useState(true) // start capitalised, like iOS
  const [page, setPage] = useState('letters') // 'letters' | 'symbols'

  const type = (k) => {
    onKey(shift && page === 'letters' ? k.toUpperCase() : k)
    if (shift && page === 'letters') setShift(false)
  }

  return (
    <div
      className={`kb${visible ? ' kb--up' : ''}`}
      aria-hidden={!visible}
      onMouseDown={(e) => e.preventDefault()}
    >
      {page === 'letters' ? (
        <>
          <div className="kb-row">
            {NUM_ROW.map((k) => (
              <button key={k} className="kb-key kb-key--sm" onClick={() => onKey(k)}>
                {k}
              </button>
            ))}
          </div>
          <div className="kb-row">
            {LETTERS[0].map((k) => (
              <button key={k} className="kb-key" onClick={() => type(k)}>
                {shift ? k.toUpperCase() : k}
              </button>
            ))}
          </div>
          <div className="kb-row kb-row--indent">
            {LETTERS[1].map((k) => (
              <button key={k} className="kb-key" onClick={() => type(k)}>
                {shift ? k.toUpperCase() : k}
              </button>
            ))}
          </div>
          <div className="kb-row">
            <button
              className={`kb-key kb-key--fn kb-key--wide${shift ? ' kb-key--active' : ''}`}
              onClick={() => setShift((s) => !s)}
              aria-label="Shift"
            >
              <Shift size={20} filled={shift} />
            </button>
            {LETTERS[2].map((k) => (
              <button key={k} className="kb-key" onClick={() => type(k)}>
                {shift ? k.toUpperCase() : k}
              </button>
            ))}
            <button className="kb-key kb-key--fn kb-key--wide" onClick={onBackspace} aria-label="Backspace">
              <Backspace size={22} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="kb-row">
            {SYMBOLS[0].map((k) => (
              <button key={k} className="kb-key kb-key--sm" onClick={() => onKey(k)}>
                {k}
              </button>
            ))}
          </div>
          <div className="kb-row">
            {SYMBOLS[1].map((k) => (
              <button key={k} className="kb-key kb-key--sm" onClick={() => onKey(k)}>
                {k}
              </button>
            ))}
          </div>
          <div className="kb-row">
            <button className="kb-key kb-key--fn kb-key--wide" onClick={() => setPage('letters')}>
              #+=
            </button>
            {SYMBOLS[2].map((k) => (
              <button key={k} className="kb-key" onClick={() => onKey(k)}>
                {k}
              </button>
            ))}
            <button className="kb-key kb-key--fn kb-key--wide" onClick={onBackspace} aria-label="Backspace">
              <Backspace size={22} />
            </button>
          </div>
        </>
      )}

      {/* bottom action row */}
      <div className="kb-row kb-row--bottom">
        <button
          className="kb-key kb-key--fn"
          onClick={() => setPage((p) => (p === 'letters' ? 'symbols' : 'letters'))}
        >
          {page === 'letters' ? '?123' : 'ABC'}
        </button>
        <button className="kb-key kb-key--space" onClick={() => onKey(' ')}>
          space
        </button>
        <button
          className={`kb-key kb-key--send${canSend ? ' kb-key--send-on' : ''}`}
          onClick={() => canSend && onSend()}
          aria-label="Send"
        >
          <ArrowUp size={20} color={canSend ? '#fff' : 'rgba(29,29,29,0.35)'} />
        </button>
      </div>
    </div>
  )
}
