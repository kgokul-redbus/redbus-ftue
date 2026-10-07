import { IconButton, Icon } from 'india-bus-ds';

export const NavActions = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <IconButton label="Go back">
      <Icon name="ion-arrow-back" />
    </IconButton>
    <IconButton label="Search buses">
      <Icon name="ion-search" />
    </IconButton>
    <IconButton label="More options">
      <Icon name="ion-more" />
    </IconButton>
  </div>
);

export const SheetClose = () => (
  <div
    style={{
      width: 328,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <span className="type-title">Filters</span>
    <IconButton label="Close filters">
      <Icon name="ion-close" />
    </IconButton>
  </div>
);

export const TicketActions = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <IconButton label="Copy PNR CH4821">
      <Icon name="ion-copy" />
    </IconButton>
    <IconButton label="Edit passenger details">
      <Icon name="ion-edit" />
    </IconButton>
    <IconButton label="Cancel this ticket">
      <Icon name="ion-delete" />
    </IconButton>
  </div>
);

export const SeatMapZoom = () => (
  <div
    style={{
      width: 328,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <span className="type-label">Lower deck · 12 seats free</span>
    <div style={{ display: 'flex', gap: 4 }}>
      <IconButton label="Zoom out seat map">
        <Icon name="ion-minus" />
      </IconButton>
      <IconButton label="Zoom in seat map">
        <Icon name="ion-plus" />
      </IconButton>
    </div>
  </div>
);
