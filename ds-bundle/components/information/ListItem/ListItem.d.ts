import * as React from 'react';

/**
 * ListItem — from india-bus-ds@1.0.0.
 */
export interface ListItemProps {
  title: React.ReactNode;
  /** Secondary line; truncates to one line by design. */
  support?: React.ReactNode;
  /** Leading media slot — an `<Icon />` on the tinted brand square. */
  media?: React.ReactNode;
  /** Trailing slot, typically a chevron, price or `<Tag />`. */
  trailing?: React.ReactNode;
  /** Makes the whole row a button. Omit for static rows. */
  onClick?: () => void;
  /** Renders the media slot without the tinted background. */
  plainMedia?: boolean;
}

export declare const ListItem: React.ComponentType<ListItemProps>;
