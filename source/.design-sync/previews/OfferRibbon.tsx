import { BusTuple, OfferRibbon } from 'india-bus-ds';

export const OnTuple = () => (
  <div style={{ width: 360, padding: 16, background: '#f6f5fa' }}>
    <BusTuple
      ribbon={<OfferRibbon value="5% OFF" />}
      departure="21:30"
      arrival="05:51"
      duration="8h 21m"
      seats={15}
      previousFare="₹952"
      fare="₹904"
      operator="Tantia Travels & Cargo"
      busType="AC Sleeper (2+1)"
    />
  </div>
);

export const CustomLabel = () => (
  <div style={{ width: 360, padding: 16, background: '#f6f5fa' }}>
    <BusTuple
      ribbon={<OfferRibbon label="redDeal" value="₹150 OFF" />}
      departure="22:40"
      arrival="06:15"
      duration="7h 35m"
      seats={21}
      previousFare="₹1,150"
      fare="₹1,000"
      operator="Jain Travels"
      busType="Volvo 9600 A/C Sleeper (2+1)"
    />
  </div>
);
