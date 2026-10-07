import { Callout, Icon, Button } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <Callout
      icon={<Icon name="ion-info" />}
      title="Boarding point is 4 km from the city centre"
      description="Reach Sector 43 Bus Terminal at least 15 minutes before departure. The operator does not wait beyond the scheduled time."
    />
  </div>
);

export const WithAction = () => (
  <div style={{ width: 328 }}>
    <Callout
      icon={<Icon name="ion-info" />}
      title="Free cancellation until 12 Aug, 06:00"
      description="Cancel before the cut-off for a full refund to the original payment method."
      action={<Button variant="tertiary">View policy</Button>}
    />
  </div>
);

export const TitleOnly = () => (
  <div style={{ width: 328 }}>
    <Callout icon={<Icon name="ion-bus" />} title="Live tracking is available on this service" />
  </div>
);
