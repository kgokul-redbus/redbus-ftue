import { Chip, ChipGroup, Icon } from 'india-bus-ds';

export const Default = () => (
  <ChipGroup>
    <Chip>AC</Chip>
    <Chip>Sleeper</Chip>
    <Chip>Single seat</Chip>
  </ChipGroup>
);

export const Selected = () => (
  <ChipGroup>
    <Chip selected>AC</Chip>
    <Chip>Non AC</Chip>
    <Chip selected>Sleeper</Chip>
  </ChipGroup>
);

export const WithIcon = () => (
  <ChipGroup>
    <Chip icon={<Icon name="ion-filter" size="sm" />}>Filters</Chip>
    <Chip icon={<Icon name="ion-sort" size="sm" />}>Departure time</Chip>
    <Chip icon={<Icon name="ion-star" size="sm" />} selected>
      4.5 and above
    </Chip>
  </ChipGroup>
);

export const LargeWithSupporting = () => (
  <div style={{ width: 328 }}>
    <ChipGroup>
      <Chip supporting="06:15 · Sector 43" selected>
        Chandigarh
      </Chip>
      <Chip supporting="12:40 · Kashmere Gate">Delhi ISBT</Chip>
    </ChipGroup>
  </div>
);

export const Amenities = () => (
  <div style={{ width: 328 }}>
    <ChipGroup>
      <Chip icon={<Icon name="ion-check" size="sm" />} selected>
        Live tracking
      </Chip>
      <Chip>Charging point</Chip>
      <Chip>Blanket</Chip>
      <Chip icon={<Icon name="ion-offer" size="sm" />}>₹150 off</Chip>
    </ChipGroup>
  </div>
);
