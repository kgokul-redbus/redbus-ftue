import { IonsRoot, Icon, SeatMap, SeatTray, SeatSelectionFooter } from 'india-bus-ds';

const sold = (restriction: "male" | "female") => ({ state: "sold" as const, restriction });
const decks = [
  {
    label: "Lower deck",
    steering: true,
    seats: [
      null,
      { id: "L25", price: 950, restriction: "male" as const },
      ...(["male", "male", "male", "female", "female", "male", "female", "female", "male", "female", "male", "male", "female", "female", "male", "female"] as const).map(sold),
    ],
  },
  {
    label: "Upper deck",
    seats: [
      null,
      ...(["female", "female", "male", "male", "female", "male"] as const).map(sold),
      { id: "U17", price: 900 }, { id: "U18", price: 900 }, sold("male"),
      { id: "U19", price: 900 }, { id: "U20", price: 900 }, sold("male"),
      { id: "U21", price: 900 }, { id: "U22", price: 900 }, sold("male"),
      { id: "U23", price: 900 }, { id: "U24", price: 900 },
    ],
  },
];
const canvas = { height: 800, background: "#f4f3f8" };
// The kit's seats app bar (status + back + title); SeatMap starts 112dp below it.
const AppBar = () => (
  <>
    <div className="ff-status" />
    <header className="ff-appbar">
      <button className="ff-back" type="button" aria-label="Back">
        <Icon name="ion-arrow-back" className="ff-icon" />
      </button>
      <div className="ff-appbar__copy"><h1>Select Seats</h1><p>Delhi → Ganganagar (Sri Ganganagar)</p></div>
    </header>
  </>
);
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

export const Loaded = () => (
  <IonsRoot device style={canvas}>
    <AppBar />
    <SeatMap decks={decks} />
    <SeatTray photo {...tray} footer={<SeatSelectionFooter count={0} total={0} />} />
  </IonsRoot>
);

export const OneSeatSelected = () => (
  <IonsRoot device style={canvas}>
    <AppBar />
    <SeatMap decks={decks} value={['L25']} />
    <SeatTray photo {...tray} hasSelection footer={<SeatSelectionFooter count={1} total={950} />} />
  </IonsRoot>
);

export const TwoSeatsSelected = () => (
  <IonsRoot device style={canvas}>
    <AppBar />
    <SeatMap decks={decks} value={['L25', 'U17']} />
    <SeatTray photo {...tray} hasSelection footer={<SeatSelectionFooter count={2} total={1850} />} />
  </IonsRoot>
);
