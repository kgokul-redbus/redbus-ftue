import { TripSummary } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: '#f4f3f8' }}>{children}</div>
);

export const Default = () => (
  <Phone>
    <TripSummary
      operator="Pinky Gudiya Travels And Cargo"
      boardingTime="Fri, 10 Jul · 21:15"
      boardingPoint="Shop no.35 old delhi railway station fatehpuri..."
      droppingTime="Sat, 11 Jul · 05:10"
      droppingPoint="Lalgarh"
      seats={1}
    />
  </Phone>
);

export const TwoSeats = () => (
  <Phone>
    <TripSummary
      operator="Pinky Gudiya Travels And Cargo"
      boardingTime="Fri, 10 Jul · 22:45"
      boardingPoint="Bahadurgarh bypass"
      droppingTime="Sat, 11 Jul · 05:50"
      droppingPoint="Koda chowk ganganagar"
      seats={2}
    />
  </Phone>
);
