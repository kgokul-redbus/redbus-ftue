import { IonsRoot, SeatTray, SeatSelectionFooter } from 'india-bus-ds';

const canvas = { height: 800, background: "#f4f3f8" };
const tray = {
  operator: "Pinky Gudiya Travels And Cargo",
  primo: true,
  meta: "21:15 - 05:50 · Fri, 10 Jul",
  rating: "4.5",
  ratingCount: "278",
  highlights: [
    { title: "New Bus", detail: "12 months old" },
    { title: "Bus Safety", detail: "Available" },
    { title: "Primo", detail: "A rising star" },
  ],
};

export const OneSeat = () => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} hasSelection footer={<SeatSelectionFooter count={1} total={900} />} />
  </IonsRoot>
);

export const TwoSeats = () => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} hasSelection footer={<SeatSelectionFooter count={2} total={1850} />} />
  </IonsRoot>
);
