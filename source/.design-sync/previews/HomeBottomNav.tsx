import { IonsRoot, HomeBottomNav } from 'india-bus-ds';

export const HomeActive = () => (
  <IonsRoot device style={{ minHeight: 0, height: 140, background: '#fff' }}>
    <HomeBottomNav value="home" />
  </IonsRoot>
);

export const OffersActive = () => (
  <IonsRoot device style={{ minHeight: 0, height: 140, background: '#fff' }}>
    <HomeBottomNav value="offers" />
  </IonsRoot>
);
