import * as React from 'react';

/**
 * ChoiceList — from india-bus-ds@1.0.0.
 */
export interface ChoiceListProps {
  /** A set of `<Choice />` rows. */
  children?: React.ReactNode;
  /** Group heading rendered as the fieldset legend. */
  legend?: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const ChoiceList: React.ComponentType<ChoiceListProps>;
