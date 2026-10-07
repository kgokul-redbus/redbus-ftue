import { BusTuple, BusRating, OfferRibbon } from 'india-bus-ds';

const Results = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, padding: '16px 16px', background: '#f6f5fa', display: 'grid', gap: 12 }}>{children}</div>
);

export const Primo = () => (
  <Results>
    <BusTuple
      primo
      departure="21:15"
      arrival="05:50"
      duration="8h 35m"
      seats={16}
      singleSeats={1}
      fare="₹900"
      operator="Pinky Gudiya Travels And Cargo"
      busType="A/C Sleeper (2+1)"
      rating={<BusRating value="4.5" count={278} />}
      tags={['New Bus', 'Toilet']}
      onDetailsClick={() => {}}
    />
  </Results>
);

export const ExclusiveDiscount = () => (
  <Results>
    <BusTuple
      ribbon={<OfferRibbon value="5% OFF" />}
      departure="21:30"
      arrival="05:51"
      duration="8h 21m"
      seats={15}
      singleSeats={1}
      previousFare="₹952"
      fare="₹904"
      operator="Tantia Travels & Cargo"
      busType="AC Sleeper (2+1)"
      rating={<BusRating value="4.2" count={118} />}
      tags={['Toilet', '97% On Time']}
    />
  </Results>
);

export const GroupOffer = () => (
  <Results>
    <BusTuple
      ribbon={<OfferRibbon value="10% OFF" />}
      departure="23:10"
      arrival="07:00"
      duration="7h 50m"
      seats={36}
      previousFare="₹1,700"
      fare="₹1,530"
      operator="Lal Baba Travels"
      busType="AshokLeyland Stile A/C"
      offerStrip="Min. 12.5% off on 3 or more seats"
    />
  </Results>
);

export const MidRating = () => (
  <Results>
    <BusTuple
      departure="21:50"
      arrival="06:30"
      duration="8h 40m"
      seats={33}
      fare="₹800"
      operator="New Aditya Travels"
      busType="A/C Sleeper (2+1)"
      rating={<BusRating value="3.6" count={104} tone="mid" />}
      tags={['84% On Time']}
    />
  </Results>
);

export const PreviouslyViewed = () => (
  <Results>
    <BusTuple
      previous
      primo
      departure="21:15"
      arrival="05:50"
      duration="8h 35m"
      seats={14}
      fare="₹900"
      operator="Pinky Gudiya Travels And Cargo"
      busType="A/C Sleeper (2+1)"
      rating={<BusRating value="4.5" count={278} />}
      tags={['New Bus', 'Toilet']}
    />
  </Results>
);
