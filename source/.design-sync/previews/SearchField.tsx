import { SearchField } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <SearchField label="Search city" placeholder="Search for a city" />
  </div>
);

export const Filled = () => (
  <div style={{ width: 328 }}>
    <SearchField label="Search city" defaultValue="Chandigarh" />
  </div>
);

export const BoardingPointSearch = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span className="type-label">Boarding point</span>
    <SearchField label="Search boarding points" placeholder="Search boarding points" />
    <span className="type-caption">18 pickup points in Chandigarh</span>
  </div>
);

export const OperatorSearch = () => (
  <div style={{ width: 328 }}>
    <SearchField label="Search operators" defaultValue="IntrCity SmartBus" />
  </div>
);
