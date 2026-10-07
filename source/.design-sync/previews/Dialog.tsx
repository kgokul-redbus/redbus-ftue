import { Dialog, Button, Text } from 'india-bus-ds';

import type { ReactNode } from 'react';

// These overlays are `position: fixed`, so in a preview cell they would anchor
// to the viewport and fall outside the captured card. A `transform` on the
// wrapper makes it a containing block for fixed descendants, keeping the
// overlay inside the phone-sized frame shown here.
const Screen = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      position: 'relative',
      transform: 'translateZ(0)',
      width: 360,
      height: 420,
      overflow: 'hidden',
      background: 'var(--surface-neutral-medium-default)',
      borderRadius: 12,
    }}
  >
    {children}
  </div>
);

export const CancelBooking = () => (
  <Screen>
      <Dialog
        open
        title="Cancel this booking?"
        actions={
          <>
            <Button variant="secondary">Keep booking</Button>
            <Button variant="primary">Cancel ticket</Button>
          </>
        }
      >
        <Text role="body">
          Zing Bus, Chandigarh → Delhi ISBT Kashmere Gate on 16 Aug, 21:30. You will be refunded ₹1,063 of ₹1,418 as
          per the operator&apos;s policy.
        </Text>
      </Dialog>
  </Screen>
);

export const LeaveBooking = () => (
  <Screen>
      <Dialog
        open
        title="Leave without booking?"
        actions={
          <>
            <Button variant="secondary">Stay</Button>
            <Button variant="primary">Leave</Button>
          </>
        }
      >
        <Text role="body">Seats L4 and L5 are held for 8 more minutes. If you leave now they go back to the pool.</Text>
      </Dialog>
  </Screen>
);

export const PaymentFailed = () => (
  <Screen>
      <Dialog
        open
        title="Payment could not be completed"
        actions={<Button variant="primary">Try another method</Button>}
      >
        <Text role="body">
          The UPI request for ₹1,418 timed out. No money was deducted. Your seats on IntrCity SmartBus are still held.
        </Text>
      </Dialog>
  </Screen>
);
