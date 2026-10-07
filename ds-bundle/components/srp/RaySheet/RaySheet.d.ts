import * as React from 'react';

/**
 * RaySheet — from india-bus-ds@1.0.0.
 */
export interface RaySheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Greeting paragraph at the top of the conversation. */
  intro?: React.ReactNode;
  /** Trip context divider, e.g. "Helping you choose a bus from Delhi to Jaipur on 9 Jul". */
  context?: React.ReactNode;
  /** Suggested prompt chips shown before the first exchange. */
  prompts?: string[];
  /** Conversation so far. An exchange without `answer` renders "Loading...". */
  exchanges?: RayExchange[];
  /** Composer placeholder. */
  placeholder?: string;
  onPrompt?: (prompt: string) => void;
  onClose?: () => void;
}

export declare const RaySheet: React.ComponentType<RaySheetProps>;
