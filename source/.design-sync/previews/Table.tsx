import { Table, Text, Tag } from 'india-bus-ds';

export const FareBreakup = () => (
  <Table
    label="Fare breakup"
    columns={['Charge', 'Seat L4', 'Seat L5']}
    rows={[
      ['Base fare', '₹600', '₹600'],
      ['Reservation charges', '₹49', '₹49'],
      ['GST (5%)', '₹60', '₹60'],
      ['Total', '₹709', '₹709'],
    ]}
  />
);

export const CancellationPolicy = () => (
  <Table
    label="Cancellation policy"
    columns={['Cancelled before', 'Refund', 'You get back']}
    rows={[
      ['More than 24 h', '75%', '₹1,063'],
      ['12 – 24 h', '50%', '₹709'],
      ['4 – 12 h', '25%', '₹354'],
      ['Less than 4 h', 'No refund', '₹0'],
    ]}
  />
);

export const AmenityComparison = () => (
  <Table
    label="Compare operators"
    columns={['Amenity', 'Zing Bus', 'IntrCity SmartBus', 'Laxmi Holidays']}
    rows={[
      ['Live tracking', 'Yes', 'Yes', 'No'],
      ['Charging point', 'Every seat', 'Every seat', 'Selected seats'],
      ['Blankets', 'Yes', 'Yes', 'No'],
      ['Departure', '21:30', '23:15', '22:00'],
      ['Fare from', '₹1,249', '₹1,099', '₹849'],
    ]}
  />
);

export const WithRichCells = () => (
  <Table
    label="Chandigarh to Delhi services"
    columns={['Operator', 'Departure', 'Duration', 'Fare']}
    rows={[
      [
        <Text role="body" strong>Zing Bus</Text>,
        '21:30',
        '8h 45m',
        <Text role="body" tabular>₹1,249</Text>,
      ],
      [
        <Text role="body" strong>IntrCity SmartBus</Text>,
        '23:15',
        '8h 25m',
        <Text role="body" tabular>₹1,099</Text>,
      ],
      [
        <Text role="body" strong>Laxmi Holidays</Text>,
        '22:00',
        '8h 50m',
        <Tag tone="brand">₹849</Tag>,
      ],
    ]}
  />
);
