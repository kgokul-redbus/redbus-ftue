import { DetailSection, PolicyList } from 'india-bus-ds';

const policies = [
  { glyph: '☺', title: 'Child passenger policy', description: 'Children above the age of 7 will need a ticket' },
  { glyph: '▣', title: 'Luggage policy', description: '2 pieces of luggage will be accepted free of charge per passenger.' },
  { glyph: '♧', title: 'Pets Policy', description: 'Pets are not allowed' },
  { glyph: '!', title: 'Liquor Policy', description: 'Carrying or consuming liquor inside the bus is prohibited.' },
];

export const OtherPolicies = () => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="policies" title="Other policies">
      <PolicyList items={policies} />
    </DetailSection>
  </div>
);

export const Luggage = () => (
  <div style={{ width: 360, background: '#fff' }}>
    <DetailSection id="policies" title="Other policies">
      <PolicyList items={policies.slice(1, 2)} />
    </DetailSection>
  </div>
);
