export type ResultsLoaderVariant = 'base' | 'contextual';

export interface ResultsLoaderProps {
  /** Drives `data-open`; the loader is `display: none` while closed. */
  open?: boolean;
  /**
   * `base` — initial load (promo rail + chip rail skeletons).
   * `contextual` — after a filter (chip rail, AI Smart filter query, summary).
   */
  variant?: ResultsLoaderVariant;
  /** AI Smart filter query echoed in the contextual variant. */
  aiQuery?: string;
  /** Summary line under the query in the contextual variant. */
  aiSummary?: string;
  /** Screen-reader announcement. */
  announcement?: string;
}

function LoaderCard({ tone }: { tone: 'mint' | 'peach' }) {
  return (
    <div className="srp-loader-card">
      <i className="srp-loader-title" />
      <i className="srp-loader-price" />
      <i className="srp-loader-line" />
      <i className={`srp-loader-rating srp-loader-tone--${tone}`} />
      <span>
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

/**
 * P04 results loader skeleton — screenshot-led, no GEMS component. Shimmer
 * skeleton covering the results while they load. Absolutely positioned over
 * the phone viewport: render it inside `IonsRoot device`.
 */
export function ResultsLoader({
  open,
  variant = 'base',
  aiQuery = 'ac sleeper under 1000',
  aiSummary = 'Showing AC sleeper buses under ₹1000',
  announcement = 'Updating bus results',
}: ResultsLoaderProps) {
  return (
    <section
      className="srp-results-loader"
      data-open={open ? 'true' : 'false'}
      data-variant={variant}
      aria-hidden={!open}
      aria-label="Loading bus results"
      role="status"
    >
      <span className="srp-loader-announcement">{announcement}</span>

      <div className="srp-loader-base" aria-hidden="true">
        <div className="srp-loader-promo-rail">
          <span className="srp-loader-promo srp-loader-promo--rose" />
          <span className="srp-loader-promo srp-loader-promo--blue" />
          <span className="srp-loader-promo srp-loader-promo--mint" />
        </div>
        <div className="srp-loader-chip-rail">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="srp-loader-context" aria-hidden="true">
        <div className="srp-loader-chip-rail">
          <span />
          <span />
          <span />
        </div>
        <div className="srp-loader-ai">
          <small>AI Smart filter</small>
          <div>
            <span className="ray-sparkle" aria-hidden="true" />
            <strong>{aiQuery}</strong>
          </div>
        </div>
        <p>{aiSummary}</p>
      </div>

      <div className="srp-loader-results" aria-hidden="true">
        <div className="srp-loader-previous">
          <span className="srp-loader-thumb srp-loader-tone--rose" />
          <span className="srp-loader-copy">
            <i />
            <i />
          </span>
        </div>
        <LoaderCard tone="mint" />
        <LoaderCard tone="peach" />
        <LoaderCard tone="peach" />
      </div>
    </section>
  );
}
