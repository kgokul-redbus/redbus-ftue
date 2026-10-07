import { Tag, Icon, ChipGroup } from 'india-bus-ds';

export const Neutral = () => <Tag>Live tracking</Tag>;

export const Brand = () => <Tag tone="brand">redDeal</Tag>;

export const WithIcon = () => (
  <ChipGroup>
    <Tag icon={<Icon name="ion-bus" size="sm" />}>Live tracking</Tag>
    <Tag icon={<Icon name="ion-check-circle" size="sm" />}>Verified operator</Tag>
  </ChipGroup>
);

export const AmenityRow = () => (
  <div style={{ width: 328 }}>
    <ChipGroup>
      <Tag>Charging point</Tag>
      <Tag>Blankets</Tag>
      <Tag>Water bottle</Tag>
      <Tag>Reading light</Tag>
      <Tag tone="brand">NEW</Tag>
    </ChipGroup>
  </div>
);
