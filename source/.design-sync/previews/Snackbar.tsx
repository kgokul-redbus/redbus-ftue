import type { ReactNode } from 'react';
import { Snackbar } from 'india-bus-ds';

// The snackbar is `position: fixed`, so in a preview cell it would anchor to
// the viewport and fall outside the captured card. A `transform` on the wrapper
// makes it a containing block for fixed descendants, keeping the snackbar
// inside the phone-sized frame shown here.
const Screen = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      position: 'relative',
      transform: 'translateZ(0)',
      width: 360,
      height: 220,
      overflow: 'hidden',
      background: 'var(--surface-neutral-medium-default)',
      borderRadius: 12,
    }}
  >
    {children}
  </div>
);

export const WithAction = () => (
  <Screen>
    <Snackbar open actionLabel="Undo">
      Boarding point changed to Zirakpur Chowk
    </Snackbar>
  </Screen>
);

export const MessageOnly = () => (
  <Screen>
    <Snackbar open>Ticket downloaded to your phone</Snackbar>
  </Screen>
);

export const CouponRemoved = () => (
  <Screen>
    <Snackbar open actionLabel="Reapply">
      Coupon MONSOON15 removed · ₹180 off lost
    </Snackbar>
  </Screen>
);
