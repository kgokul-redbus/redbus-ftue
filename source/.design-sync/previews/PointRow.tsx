import { PointRow } from 'india-bus-ds';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, padding: 14, background: '#f4f3f8' }}>
    <section className="ff-point-card">{children}</section>
  </div>
);

export const Default = () => (
  <Card>
    <PointRow time="22:45" date="10 Jul" name="Bahadurgarh bypass" address="bahadurgarh bypass" />
  </Card>
);

export const TallSelected = () => (
  <Card>
    <PointRow
      size="tall"
      selected
      time="21:15"
      date="10 Jul"
      name="Shop no.35 old delhi railway station fatehpuri parking"
      address="shop no.35 old delhi railway station fatehpuri parking"
    />
  </Card>
);

export const WithTag = () => (
  <Card>
    <PointRow time="05:50" date="11 Jul" name="Koda chowk ganganagar" tag="Popular dropping point" />
  </Card>
);
