import { DetailSection, RouteTimeline } from 'india-bus-ds';

const Sheet = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: '#fff' }}>{children}</div>
);

export const BoardingPoints = () => (
  <Sheet>
    <DetailSection id="boarding" title="Boarding points" subtitle="Delhi">
      <RouteTimeline
        stops={[
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
        ]}
      />
    </DetailSection>
  </Sheet>
);

export const DroppingPoints = () => (
  <Sheet>
    <DetailSection id="dropping" title="Dropping points" subtitle="Ganganagar (Sri Ganganagar)">
      <RouteTimeline
        stops={[
          { time: '05:10', date: '11 Jul', name: 'Lalgarh', address: 'Lalgarh' },
          { time: '05:15', date: '11 Jul', name: 'Ricco', address: 'Ricco' },
          { time: '05:20', date: '11 Jul', name: 'Ridhi sidhi', address: 'Ridhi sidhi' },
          { time: '05:25', date: '11 Jul', name: 'Jain college', address: 'Jain college' },
        ]}
      />
    </DetailSection>
  </Sheet>
);
