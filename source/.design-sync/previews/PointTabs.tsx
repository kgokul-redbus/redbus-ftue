import { PointTabs } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: '#f4f3f8' }}>{children}</div>
);

export const Boarding = () => (
  <Phone>
    <PointTabs value="boarding" boardingLabel="Delhi" droppingLabel="Ganganagar (Sri Ganganagar)" />
  </Phone>
);

export const DroppingAfterBoarding = () => (
  <Phone>
    <PointTabs
      value="dropping"
      boardingLabel="Shop no.35 old delhi railway station fatehpuri parking"
      droppingLabel="Ganganagar (Sri Ganganagar)"
      boardingChosen
    />
  </Phone>
);

export const BothSelected = () => (
  <Phone>
    <PointTabs value="dropping" boardingLabel="Bahadurgarh bypass" droppingLabel="Lalgarh" boardingChosen droppingChosen />
  </Phone>
);
