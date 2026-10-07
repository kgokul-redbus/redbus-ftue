import { Fragment, type ReactNode } from 'react';
import { Icon } from '../foundations/Icon';

export interface RayExchange {
  /** What the traveller asked. */
  question: string;
  /**
   * Ray's reply. Omit while loading. Pass prose plus any `BusTuple` results —
   * embedded results reuse the result-card anatomy.
   */
  answer?: ReactNode;
}

export interface RaySheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Greeting paragraph at the top of the conversation. */
  intro?: ReactNode;
  /** Trip context divider, e.g. "Helping you choose a bus from Delhi to Jaipur on 9 Jul". */
  context?: ReactNode;
  /** Suggested prompt chips shown before the first exchange. */
  prompts?: string[];
  /** Conversation so far. An exchange without `answer` renders "Loading...". */
  exchanges?: RayExchange[];
  /** Composer placeholder. */
  placeholder?: string;
  onPrompt?: (prompt: string) => void;
  onClose?: () => void;
}

/**
 * P21 Ask Ray conversation sheet — screenshot-led, no GEMS component. Bottom
 * sheet with the Ray header, greeting, trip context, suggested prompts,
 * question/answer exchanges and a voice-capable composer. Absolutely positioned
 * over the phone viewport: render it inside `IonsRoot device`.
 */
export function RaySheet({
  open,
  intro,
  context,
  prompts = [],
  exchanges = [],
  placeholder = 'Buses with free cancellation',
  onPrompt,
  onClose,
}: RaySheetProps) {
  return (
    <div className="c-overlay srp-overlay" data-open={open ? 'true' : 'false'}>
      <section className="c-bottom-sheet srp-sheet srp-ray-sheet" role="dialog" aria-modal="true" aria-label="Ask Ray">
        <header className="srp-ray-sheet__header">
          <span className="ray-sparkle" aria-hidden="true" />
          <div>
            <h2>Ask Ray (Beta)</h2>
            <p>redBus assistance for you</p>
          </div>
          <button className="c-icon-button" type="button" aria-label="Close Ask Ray" onClick={onClose}>
            <Icon name="ion-close" size="lg" />
          </button>
        </header>
        <div className="srp-ray-sheet__conversation">
          {intro ? <p className="srp-ray-intro">{intro}</p> : null}
          {context ? (
            <div className="srp-ray-context">
              <span />
              <p>{context}</p>
              <span />
            </div>
          ) : null}
          {prompts.length ? (
            <>
              <h3>Tell us how we can help you today!</h3>
              <div className="srp-ray-prompts">
                {prompts.map((prompt) => (
                  <button key={prompt} type="button" onClick={() => onPrompt?.(prompt)}>
                    {prompt}
                  </button>
                ))}
              </div>
            </>
          ) : null}
          {exchanges.length ? (
            <div className="srp-ray-response">
              {exchanges.map((exchange, index) => (
                <Fragment key={index}>
                  <div className="srp-ray-user-bubble">{exchange.question}</div>
                  <div className="srp-ray-answer">{exchange.answer ?? 'Loading...'}</div>
                </Fragment>
              ))}
            </div>
          ) : null}
        </div>
        <form className="srp-ray-composer" onSubmit={(event) => event.preventDefault()}>
          <input placeholder={placeholder} aria-label="Ask Ray a question" />
          <button className="c-icon-button" type="button" aria-label="Use voice input">
            <span className="srp-mic-icon" aria-hidden="true">
              <i />
            </span>
          </button>
          <button className="c-icon-button srp-audio-icon" type="submit" aria-label="Send question">
            <i />
            <i />
            <i />
            <i />
          </button>
        </form>
      </section>
    </div>
  );
}
