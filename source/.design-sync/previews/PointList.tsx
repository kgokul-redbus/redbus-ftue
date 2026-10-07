import { PointList } from 'india-bus-ds';

const Screen = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, padding: 14, background: '#f4f3f8' }}>{children}</div>
);

const boarding = [
  { size: 'tall' as const, time: '21:15', date: '10 Jul', name: 'Shop no.35 old delhi railway station fatehpuri parking', address: 'shop no.35 old delhi railway station fatehpuri parking' },
  { size: 'xtall' as const, time: '22:14', date: '10 Jul', name: 'Pinky gudiya travel and cargo ekta enclave metro station peeragarhi', address: 'pinky gudiya travel and cargo ekta enclave metro station peeragarhi' },
  { time: '22:45', date: '10 Jul', name: 'Bahadurgarh bypass', address: 'bahadurgarh bypass' },
];

const dropping = [
  { time: '05:10', date: '11 Jul', name: 'Lalgarh' },
  { time: '05:15', date: '11 Jul', name: 'Ricco' },
  { time: '05:20', date: '11 Jul', name: 'Ridhi sidhi' },
  { time: '05:25', date: '11 Jul', name: 'Jain college' },
  { time: '05:30', date: '11 Jul', name: 'Chahal chowk' },
  { time: '05:40', date: '11 Jul', name: 'Sukharia circle' },
  { time: '05:50', date: '11 Jul', name: 'Koda chowk ganganagar', tag: 'Popular dropping point' },
];

export const BoardingPoints = () => (
  <Screen>
    <PointList heading="All boarding points in Delhi" points={boarding} />
  </Screen>
);

export const BoardingSelected = () => (
  <Screen>
    <PointList heading="All boarding points in Delhi" points={boarding} value="Shop no.35 old delhi railway station fatehpuri parking" />
  </Screen>
);

export const DroppingPoints = () => (
  <Screen>
    <PointList heading="All dropping points in Ganganagar (Sri Ganganagar)" points={dropping} value="Lalgarh" />
  </Screen>
);
