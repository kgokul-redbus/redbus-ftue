import * as React from 'react';

/**
 * AiSmartFilter — from india-bus-ds@1.0.0.
 */
export interface AiSmartFilterProps {
  /** `idle` shows the hint and microphone; `filled` swaps the mic for clear and reveals "Search Buses"; `loading` shows the s */
  state?: "idle" | "filled" | "loading" | "applied";
  /** Controlled query text. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (query: string) => void;
  onClear?: () => void;
  placeholder?: string;
}

export declare const AiSmartFilter: React.ComponentType<AiSmartFilterProps>;
