import * as React from 'react';

/**
 * BottomSheet — from india-bus-ds@1.0.0.
 */
export interface BottomSheetProps {
  /** Drives the overlay's `data-open` state and the slide-up transition. */
  open?: boolean;
  children?: React.ReactNode;
  /** Sheet heading. */
  title?: React.ReactNode;
  /** Footer actions, normally one or two `<Button />`s. */
  actions?: React.ReactNode;
  /** Called when the scrim is clicked. */
  onDismiss?: () => void;
  /** Hides the drag handle for sheets that can't be swiped away. */
  hideHandle?: boolean;
}

export declare const BottomSheet: React.ComponentType<BottomSheetProps>;
