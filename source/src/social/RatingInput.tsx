import { useState } from 'react';

export interface RatingInputProps {
  /**
   * Labels from worst to best. The score shown on each item is its 1-based
   * position. Defaults to the kit's five-point scale.
   */
  labels?: string[];
  /** Controlled 1-based selection. */
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  /** Accessible name for the group. */
  label?: string;
}

/**
 * Post-trip rating scale. Each point carries a word as well as a number, so
 * the meaning doesn't depend on the user inferring the scale.
 */
export function RatingInput({
  labels = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'],
  value,
  defaultValue,
  onValueChange,
  label = 'Rate the experience',
}: RatingInputProps) {
  const [internal, setInternal] = useState(defaultValue ?? 0);
  const current = value ?? internal;

  return (
    <div className="c-rating-input" role="group" aria-label={label}>
      {labels.map((text, index) => {
        const score = index + 1;
        return (
          <button
            key={text}
            className="c-rating-input__item"
            type="button"
            aria-pressed={current === score}
            onClick={() => {
              if (value === undefined) setInternal(score);
              onValueChange?.(score);
            }}
          >
            <span className="c-rating-input__score">{score}</span>
            {text}
          </button>
        );
      })}
    </div>
  );
}
