import { SegmentedControl } from 'india-bus-ds';

export const ListOrMap = () => (
  <SegmentedControl
    label="View mode"
    options={[
      { value: 'list', label: 'List' },
      { value: 'map', label: 'Map' },
    ]}
    defaultValue="list"
  />
);

export const MapSelected = () => (
  <SegmentedControl
    label="View mode"
    options={[
      { value: 'list', label: 'List' },
      { value: 'map', label: 'Map' },
    ]}
    value="map"
  />
);

export const ThreeSegments = () => (
  <SegmentedControl
    label="Departure window"
    options={[
      { value: 'morning', label: 'Before 12:00' },
      { value: 'day', label: '12:00–18:00' },
      { value: 'night', label: 'After 18:00' },
    ]}
    defaultValue="night"
  />
);

export const InFilterBar = () => (
  <div
    style={{
      width: 328,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 16,
      background: 'var(--surface-neutral-lowest-default)',
    }}
  >
    <span className="type-label">Chandigarh → Delhi · 12 Aug</span>
    <SegmentedControl
      label="Seat type"
      options={[
        { value: 'seater', label: 'Seater' },
        { value: 'sleeper', label: 'Sleeper' },
      ]}
      defaultValue="sleeper"
    />
  </div>
);
