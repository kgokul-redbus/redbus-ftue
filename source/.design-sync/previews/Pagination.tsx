import { Pagination, Text } from 'india-bus-ds';

export const FirstOfThree = () => (
  <div style={{ width: 328 }}>
    <Pagination count={3} activeIndex={0} label="Choose offer" />
  </div>
);

export const MiddleOfFive = () => (
  <div style={{ width: 328 }}>
    <Pagination count={5} activeIndex={2} label="Choose bus photo" />
  </div>
);

export const UnderCampaignTile = () => (
  <div style={{ width: 328 }}>
    <div
      style={{
        padding: 16,
        marginBottom: 12,
        background: 'var(--surface-brand-low-default)',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      <Text role="title-3">Chandigarh to Delhi from ₹649</Text>
      <Text role="caption">Overnight A/C sleepers · Live tracking</Text>
    </div>
    <Pagination count={4} activeIndex={1} label="Choose campaign" />
  </div>
);
