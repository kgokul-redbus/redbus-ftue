import { IonsRoot, FilterSheet } from 'india-bus-ds';

export const AiSmartFilter = () => (
  <IonsRoot device style={{ height: 800 }}>
    <FilterSheet open category="ai" />
  </IonsRoot>
);

export const SortBy = () => (
  <IonsRoot device style={{ height: 800 }}>
    <FilterSheet open category="sort" />
  </IonsRoot>
);

export const BusOperator = () => (
  <IonsRoot device style={{ height: 800 }}>
    <FilterSheet open category="operator" />
  </IonsRoot>
);
