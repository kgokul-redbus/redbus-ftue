import { Tooltip, IconButton, Icon } from 'india-bus-ds';

export const OnIconButton = () => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="Live bus tracking" forceVisible>
      <IconButton label="Live bus tracking">
        <Icon name="ion-bus" />
      </IconButton>
    </Tooltip>
  </div>
);

export const FareBreakup = () => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="₹1,798 includes ₹92 GST" forceVisible>
      <IconButton label="Fare breakup">
        <Icon name="ion-info" />
      </IconButton>
    </Tooltip>
  </div>
);

export const SortControl = () => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="Sort by departure time" forceVisible>
      <IconButton label="Sort by departure time">
        <Icon name="ion-sort" />
      </IconButton>
    </Tooltip>
  </div>
);

export const OnTextTrigger = () => (
  <div style={{ padding: '48px 24px' }}>
    <Tooltip content="Free cancellation until 16 Aug, 06:00" forceVisible>
      <span className="type-body-m">Cancellation policy</span>
    </Tooltip>
  </div>
);
