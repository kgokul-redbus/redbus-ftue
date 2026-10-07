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

export const Peek = () => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} photo footer={<SeatSelectionFooter count={0} total={0} />} />
  </IonsRoot>
);

export const WithSelection = () => (
  <IonsRoot device style={canvas}>
    <SeatTray {...tray} photo hasSelection footer={<SeatSelectionFooter count={1} total={900} />} />
  </IonsRoot>
);
