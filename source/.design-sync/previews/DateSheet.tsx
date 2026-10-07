import { IonsRoot, DateSheet } from 'india-bus-ds';

export const NinthJuly = () => (
  <IonsRoot device style={{ height: 800 }}>
    <DateSheet open value="0-9" />
  </IonsRoot>
);

export const WeekendSelected = () => (
  <IonsRoot device style={{ height: 800 }}>
    <DateSheet open value="0-11" />
  </IonsRoot>
);
