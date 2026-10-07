import { IonsRoot, BusDetailsSheet, DetailSection, PolicyTable, PolicyList, RouteTimeline, BusRoute } from 'india-bus-ds';

const policyRows = [
  { time: 'Before 7th Jul 01:15 PM', standard: '90% refund', flexible: '100% refund' },
  { time: 'From 7th Jul 01:15 PM Until 8th Jul 09:15 AM', standard: '75% refund', flexible: '100% refund' },
  { time: 'After 8th Jul 09:15 AM', standard: '50% refund', flexible: '100% refund' },
];
const policies = [
  { glyph: '☺', title: 'Child passenger policy', description: 'Children above the age of 7 will need a ticket' },
  { glyph: '▣', title: 'Luggage policy', description: '2 pieces of luggage will be accepted free of charge per passenger.' },
];
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
const boarding = [
  {
    time: '21:15',
    date: '10 Jul',
    name: 'Shop no.35 old delhi railway station fatehpuri parking',
    address: 'shop no.35 old delhi railway station fatehpuri parking',
  },
  {
    time: '22:14',
    date: '10 Jul',
    name: 'Pinky gudiya travel and cargo ekta enclave metro station peeragarhi',
    address: 'pinky gudiya travel and cargo ekta enclave metro station peeragarhi',
  },
];
const dropping = [
  { time: '05:10', date: '11 Jul', name: 'Lalgarh', address: 'Lalgarh' },
  { time: '05:15', date: '11 Jul', name: 'Ricco', address: 'Ricco' },
];

const tabs = [
  { id: 'highlights', label: 'Highlights' },
  { id: 'cancellation', label: 'Cancellation policy' },
  { id: 'date-change', label: 'Date change policy' },
  { id: 'route', label: 'Bus route' },
  { id: 'boarding-info', label: 'Boarding points' },
  { id: 'dropping-info', label: 'Dropping points' },
  { id: 'policies', label: 'Other policies' },
];

const operator = {
  operator: 'Pinky Gudiya Travels And Cargo',
  primo: true,
  meta: '21:15 - 05:50 · Fri, 10 Jul',
  rating: '4.5',
  ratingCount: '278',
};

export const Overview = () => (
  <IonsRoot device style={{ height: 800 }}>
    <BusDetailsSheet open {...operator} tabs={tabs} activeSection="highlights">
      <DetailSection id="highlights">
        <div className="ff-detail-grid">
          <div className="ff-detail-card">
            New Bus
            <br />
            <small>12 months old</small>
          </div>
          <div className="ff-detail-card">
            Bus Safety
            <br />
            <small>Available</small>
          </div>
        </div>
        <div className="ff-detail-card" style={{ marginTop: 8 }}>
          Top 5% &nbsp; <small>One of the best on this route</small>
        </div>
      </DetailSection>
      <DetailSection id="cancellation" title="Cancellation policy">
        <PolicyTable rows={policyRows} />
      </DetailSection>
      <DetailSection id="date-change" title="Date change policy">
        <p>You can change the travel date until 24 hours before departure. Fare difference may apply.</p>
      </DetailSection>
      <BusRoute stops={route} from="Delhi" to="Ganganagar (Sri Ganganagar)" summary="421 km · 8h 35m" />
      <DetailSection id="boarding-info" title="Boarding points" subtitle="Delhi">
        <RouteTimeline stops={boarding} />
      </DetailSection>
      <DetailSection id="dropping-info" title="Dropping points" subtitle="Ganganagar (Sri Ganganagar)">
        <RouteTimeline stops={dropping} />
      </DetailSection>
      <DetailSection id="policies" title="Other policies">
        <PolicyList items={policies} />
      </DetailSection>
    </BusDetailsSheet>
  </IonsRoot>
);

export const CancellationTab = () => (
  <IonsRoot device style={{ height: 800 }}>
    <BusDetailsSheet open {...operator} media={false} tabs={tabs} activeSection="cancellation">
      <DetailSection id="cancellation" title="Cancellation policy">
        <PolicyTable rows={policyRows} />
      </DetailSection>
      <BusRoute stops={route} from="Delhi" to="Ganganagar (Sri Ganganagar)" summary="421 km · 8h 35m" />
    </BusDetailsSheet>
  </IonsRoot>
);
