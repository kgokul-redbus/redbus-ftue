export interface ReviewTupleProps {
  /** Reviewer name. */
  name: string;
  /** Badge line, e.g. "🏆 Frequent Traveler". */
  badge?: string;
  /** Review date, e.g. "17 Jun 2026". */
  date: string;
  /** Star score, e.g. `1`. */
  score: number;
  /** Review text. */
  text: string;
  /** Tag group heading. */
  tagsTitle?: string;
  /** Attribute tags, e.g. ["Driving", "AC"]. */
  tags?: string[];
}

/**
 * P27 review tuple — GEMS `Android-ReviewTuple` (candidate name only, node not
 * verified). Reviewer, badge and date, score pill, review body and
 * "Could be better" tags. Stack inside `ReviewsExplorer`.
 */
export function ReviewTuple({
  name,
  badge,
  date,
  score,
  text,
  tagsTitle = 'Could be better:',
  tags = [],
}: ReviewTupleProps) {
  return (
    <article className="ff-review-tuple">
      <div className="ff-review-tuple__top">
        <span>
          <h3>{name}</h3>
          <small>
            {badge ? (
              <>
                {badge}
                <br />
              </>
            ) : null}
            {date}
          </small>
        </span>
        <span className="ff-review-score">★ {score}</span>
      </div>
      <p>{text}</p>
      {tags.length ? (
        <>
          <h3>{tagsTitle}</h3>
          <div className="ff-review-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </>
      ) : null}
    </article>
  );
}
