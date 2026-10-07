import { HomeOffers } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 360, background: '#fff' }}>
    <HomeOffers
      offers={[{ title: 'Save up to ₹300 on your next bus ticket' }, { title: 'Get ₹150 off on train tickets' }]}
    />
  </div>
);

export const SingleOffer = () => (
  <div style={{ width: 360, background: '#fff' }}>
    <HomeOffers offers={[{ title: 'Save up to ₹300 on your next bus ticket' }]} />
  </div>
);
