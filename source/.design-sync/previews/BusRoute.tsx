import { BusRoute } from 'india-bus-ds';

const route = [
  'Delhi',
  'Bahadurgarh (Haryana)',
  'Rohtak',
  'Meham',
  'Hansi',
  'Hisar (Haryana)',
  'Bassi (Haryana)',
  'Bhadra (Rajasthan)',
  'Gogamedi',
  'Nohar',
  'Rawatsar',
  'Hanumangarh',
  'Pakka Saharana',
  'Ganganagar (Sri Ganganagar)',
  'Padampur',
  'Gajsinghpur',
  'Raisinghnagar',
];

const Sheet = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: '#fff' }}>{children}</div>
);

export const FullRoute = () => (
  <Sheet>
    <BusRoute stops={route} from="Delhi" to="Ganganagar (Sri Ganganagar)" summary="421 km · 8h 35m" />
  </Sheet>
);

export const MidRouteTrip = () => (
  <Sheet>
    <BusRoute stops={route} from="Hisar (Haryana)" to="Hanumangarh" summary="236 km · 4h 50m" />
  </Sheet>
);
