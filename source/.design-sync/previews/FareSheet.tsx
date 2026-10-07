import { IonsRoot, FareSheet } from 'india-bus-ds';

export const OneSeat = () => (
  <IonsRoot device style={{ height: 800 }}>
    <FareSheet open lines={[{ seat: 'U17', price: 900 }]} />
  </IonsRoot>
);

export const TwoSeats = () => (
  <IonsRoot device style={{ height: 800 }}>
    <FareSheet open lines={[{ seat: 'L25', price: 950 }, { seat: 'U17', price: 900 }]} />
  </IonsRoot>
);
