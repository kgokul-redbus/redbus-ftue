import { IonsRoot, LocationSearch, type LocationGroup } from 'india-bus-ds';

const recent: LocationGroup = {
  heading: 'Recent searches',
  items: [
    { name: 'Delhi - Ganganagar', kind: 'route' },
    { name: 'Delhi' },
    { name: 'Ganganagar (Sri Ganganagar)' },
  ],
};

const points = ['Anand Rao Circle', 'Madiwala', 'Majestic', 'Yeshwantpur'].map((name) => ({ name, city: 'Bengaluru' }));
const cities: LocationGroup = { heading: 'Popular cities', popular: true, items: [{ name: 'Bengaluru', rich: true }] };

export const Origin = () => (
  <IonsRoot device style={{ height: 800, background: '#fff' }}>
    <LocationSearch
      mode="origin"
      groups={[recent, { heading: 'Popular boarding points', popular: true, items: points }, cities]}
    />
  </IonsRoot>
);

export const Destination = () => (
  <IonsRoot device style={{ height: 800, background: '#fff' }}>
    <LocationSearch
      mode="destination"
      groups={[recent, { heading: 'Popular dropping points near you', popular: true, items: points }, cities]}
    />
  </IonsRoot>
);
