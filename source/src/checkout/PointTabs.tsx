import { useState } from 'react';

export type PointStage = 'boarding' | 'dropping';

export interface PointTabsProps {
  /** Controlled active stage. */
  value?: PointStage;
  defaultValue?: PointStage;
  onValueChange?: (stage: PointStage) => void;
  /**
   * Boarding tab supporting text: the origin city while boarding is pending
   * (kit: "Delhi"), then the selected boarding point once that stage is done.
   */
  boardingLabel: string;
  /**
   * Dropping tab supporting text: the destination city (kit: "Ganganagar
   * (Sri Ganganagar)"), then the selected dropping point.
   */
  droppingLabel: string;
  /**
   * The boarding stage has a chosen point, so `boardingLabel` is that point
   * rather than the city: production shows it in dark text instead of grey.
   */
  boardingChosen?: boolean;
  /** As `boardingChosen`, for the dropping stage. */
  droppingChosen?: boolean;
}

/**
 * P29 sequential point-selection header — GEMS `Android-Bp-Selection` is a
 * candidate only, not node-verified. Two fixed stages (Boarding points →
 * Dropping points) with a 3px brand underline on the active stage; the
 * completed stage keeps its selected point as supporting text. Sits directly
 * under the checkout app bar, full-bleed at 360dp.
 */
export function PointTabs({
  value,
  defaultValue = 'boarding',
  onValueChange,
  boardingLabel,
  droppingLabel,
  boardingChosen,
  droppingChosen,
}: PointTabsProps) {
  const [internal, setInternal] = useState<PointStage>(defaultValue);
  const current = value ?? internal;
  const select = (stage: PointStage) => {
    if (value === undefined) setInternal(stage);
    onValueChange?.(stage);
  };
  return (
    <div className="ff-point-tabs" role="tablist">
      <button className="ff-point-tab" type="button" role="tab" aria-selected={current === 'boarding'} data-point-chosen={boardingChosen || undefined} onClick={() => select('boarding')}>
        <strong>Boarding points</strong>
        <span>{boardingLabel}</span>
      </button>
      <button className="ff-point-tab" type="button" role="tab" aria-selected={current === 'dropping'} data-point-chosen={droppingChosen || undefined} onClick={() => select('dropping')}>
        <strong>Dropping points</strong>
        <span>{droppingLabel}</span>
      </button>
    </div>
  );
}
