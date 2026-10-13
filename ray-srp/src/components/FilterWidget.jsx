import { Sparkle, Mic, FilterAlt, Plus, ArrowUp, Close } from './Icons.jsx'
import { KB_HEIGHT } from './Keyboard.jsx'
import './FilterWidget.css'

// Suggestion chips shown in the filter widget.
// icon: 'ai' (sparkle, AI-generated) | 'add' (plus, quick filter)
const DEFAULT_CHIPS = [
  { id: 'ac-sleeper-700', label: 'AC Sleeper under ₹700', icon: 'ai' },
  { id: 'ac', label: 'AC', icon: 'add' },
  { id: 'sleeper', label: 'Sleeper', icon: 'add' },
  { id: 'single-seat', label: 'Single seat', icon: 'add' },
  { id: 'toilet', label: 'Toilet', icon: 'add' },
]

export default function FilterWidget({
  placeholder = 'Ask your preference',
  chips = DEFAULT_CHIPS,
  onChipClick,
  onAllFilters,
  onFieldClick,
  onMicClick,
  onSend,
  onClear,
  reveal = false,
  typing = false,
  prompt = '',
  applied = null,
  glow = false,
  phTyping = false,
  usedChipId = null,
  inputRef,
  onChangeText,
  onCloseKeyboard,
}) {
  // draft = a chip's text sitting in the field, ready to send (keyboard closed)
  const draft = !typing && !applied && prompt.length > 0
  const showSend = (typing && prompt.length > 0) || draft
  // the widget is "in use" during active interaction (typing / chip draft).
  // The applied/filtered view is handled by the glow, which lingers then fades.
  const inUse = typing || draft

  const cls = ['fw']
  if (reveal) cls.push('fw--reveal')
  if (typing) cls.push('fw--typing')
  if (glow) cls.push('fw--glow')
  if (inUse) cls.push('fw--inuse')

  return (
    <div
      className={cls.join(' ')}
      data-node="Filter container"
      style={{ bottom: typing ? KB_HEIGHT : 0 }}
    >
      {/* progressive backdrop blur — sharp at top, blurriest at the bottom */}
      <div className="fw-blur" aria-hidden="true">
        <div /><div /><div /><div /><div /><div />
      </div>
      <div className="fw-tint" aria-hidden="true" />
      {/* introduction highlight — flowing brand gradient across the whole widget */}
      <div className="fw-highlight" aria-hidden="true" />

      <div className="fw-content">
        {/* Row 1 — AI smart filter free-text entry */}
        <div className="fw-ai" data-node="AI smart filter">
          <div className="fw-field-wrap">
            <div className="fw-field" onClick={onFieldClick} data-node="Free text entry">
              <span className="fw-field-lead">
                <Sparkle size={24} />
                {typing ? (
                  <input
                    ref={inputRef}
                    className="fw-input t-body-r"
                    value={prompt}
                    inputMode="none"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    aria-label={placeholder}
                    onChange={(e) => onChangeText?.(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        onSend?.()
                      } else if (e.key === 'Escape') {
                        e.preventDefault()
                        onCloseKeyboard?.()
                      }
                    }}
                  />
                ) : applied ? (
                  <span className="fw-field-value t-body-r">{applied}</span>
                ) : draft ? (
                  <span className="fw-field-value t-body-r">{prompt}</span>
                ) : (
                  <span className="fw-field-placeholder t-body-r">
                    {placeholder}
                    {phTyping && <span className="fw-caret fw-caret--ph" />}
                  </span>
                )}
              </span>

              {showSend ? (
                <span
                  className="fw-send fw-send--on"
                  data-node="Send"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSend?.()
                  }}
                >
                  <ArrowUp size={20} color="#fff" />
                </span>
              ) : !typing && applied ? (
                <span
                  className="fw-clear"
                  data-node="Clear"
                  onClick={(e) => {
                    e.stopPropagation()
                    onClear?.()
                  }}
                >
                  <Close size={18} color="#1d1d1d" />
                </span>
              ) : (
                <span
                  className="fw-mic"
                  data-node="Mic button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onMicClick?.()
                  }}
                >
                  <Mic size={20} />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Row 2 — filter chips (hidden while typing) */}
        {!typing && (
          <div className="fw-chips" data-node="Filter chips">
            <button className="fw-tap fw-allbtn-tap" onClick={onAllFilters} data-node="All filters" aria-label="All filters">
              <span className="fw-pill fw-allbtn">
                <FilterAlt size={24} />
              </span>
            </button>

            {chips
              .filter((c) => c.id !== usedChipId)
              .map((c) => (
                <button
                  key={c.id}
                  className="fw-tap"
                  onClick={(e) => onChipClick?.(c, e)}
                  data-node="Suggestion chip"
                >
                  <span className="fw-pill fw-chip">
                    {c.icon === 'ai' ? <Sparkle size={16} /> : <Plus size={16} />}
                    <span className="fw-chip-label t-subhead-r">{c.label}</span>
                  </span>
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
