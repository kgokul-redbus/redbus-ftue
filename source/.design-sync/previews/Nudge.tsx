import { Nudge, Icon, Button } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <Nudge
      icon={<Icon name="ion-offer" />}
      title="Add FIRST200 and save ₹200"
      description="You qualify on this ₹829 fare from Chandigarh to Delhi."
    />
  </div>
);

export const WithAction = () => (
  <div style={{ width: 328 }}>
    <Nudge
      icon={<Icon name="ion-location" />}
      title="Zirakpur Chowk is closer to you"
      description="Boarding there instead of Sector 43 saves about 25 minutes."
      action={<Button variant="tertiary">Change</Button>}
    />
  </div>
);

export const TitleOnly = () => (
  <div style={{ width: 328 }}>
    <Nudge icon={<Icon name="ion-bus" />} title="4 people booked this service in the last hour" />
  </div>
);

export const NudgeStack = () => (
  <div style={{ width: 328, display: 'grid', gap: 12 }}>
    <Nudge
      icon={<Icon name="ion-star" />}
      title="Rated 4.6 by 2,140 travellers"
      description="Punctuality and cleanliness score above the Chandigarh route average."
    />
    <Nudge
      icon={<Icon name="ion-ticket" />}
      title="Free cancellation until 11 Aug, 18:30"
      description="Cancel before the cut-off and the ₹649 fare is refunded in full."
      action={<Button variant="tertiary">Details</Button>}
    />
  </div>
);
