import { Chip, ChipGroup, Icon } from 'india-bus-ds';

export const FilterRail = () => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Quick filters">
      <Chip icon={<Icon name="ion-filter" size="sm" />}>Filters</Chip>
      <Chip selected>AC</Chip>
      <Chip>Sleeper</Chip>
      <Chip>Seater</Chip>
      <Chip>Live tracking</Chip>
    </ChipGroup>
  </div>
);

export const AppliedFilters = () => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Applied filters">
      <Chip selected icon={<Icon name="ion-close" size="sm" />}>
        AC Sleeper
      </Chip>
      <Chip selected icon={<Icon name="ion-close" size="sm" />}>
        After 18:00
      </Chip>
      <Chip selected icon={<Icon name="ion-close" size="sm" />}>
        Under ₹1,200
      </Chip>
    </ChipGroup>
  </div>
);

export const BoardingPointChips = () => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Boarding points">
      <Chip supporting="06:15 departure" selected>
        Sector 43 Bus Terminal
      </Chip>
      <Chip supporting="06:40 departure">Zirakpur Chowk</Chip>
      <Chip supporting="07:35 departure">Ambala Cantt</Chip>
    </ChipGroup>
  </div>
);

export const OperatorChips = () => (
  <div style={{ width: 328 }}>
    <ChipGroup aria-label="Operators">
      <Chip>Zing Bus</Chip>
      <Chip selected>IntrCity SmartBus</Chip>
      <Chip>Laxmi Holidays</Chip>
      <Chip>Jakhar Travels</Chip>
    </ChipGroup>
  </div>
);
