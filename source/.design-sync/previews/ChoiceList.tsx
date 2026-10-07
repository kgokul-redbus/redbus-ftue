import { Choice, ChoiceList } from 'india-bus-ds';

export const BusTypeFilter = () => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Bus type">
      <Choice name="type" value="ac-sleeper" defaultChecked>
        AC Sleeper
      </Choice>
      <Choice name="type" value="ac-seater">
        AC Seater
      </Choice>
      <Choice name="type" value="non-ac-sleeper">
        Non-AC Sleeper
      </Choice>
      <Choice name="type" value="non-ac-seater">
        Non-AC Seater
      </Choice>
    </ChoiceList>
  </div>
);

export const SortRadios = () => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Sort buses by">
      <Choice type="radio" name="sort-by" value="fare" defaultChecked>
        Fare — low to high
      </Choice>
      <Choice type="radio" name="sort-by" value="departure">
        Earliest departure
      </Choice>
      <Choice type="radio" name="sort-by" value="duration">
        Shortest duration
      </Choice>
    </ChoiceList>
  </div>
);

export const OperatorFilter = () => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Operators on Chandigarh → Delhi">
      <Choice name="operator" value="zing" defaultChecked>
        Zing Bus · 12 buses
      </Choice>
      <Choice name="operator" value="intrcity">
        IntrCity SmartBus · 8 buses
      </Choice>
      <Choice name="operator" value="laxmi">
        Laxmi Holidays · 5 buses
      </Choice>
    </ChoiceList>
  </div>
);

export const TwoGroups = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 16 }}>
    <ChoiceList legend="Departure time">
      <Choice name="depart" value="early" defaultChecked>
        Before 06:00
      </Choice>
      <Choice name="depart" value="night">
        After 18:00
      </Choice>
    </ChoiceList>
    <ChoiceList legend="Amenities">
      <Choice name="amenity" value="charging" defaultChecked>
        Charging point
      </Choice>
      <Choice name="amenity" value="blanket">
        Blanket
      </Choice>
      <Choice name="amenity" value="tracking">
        Live tracking
      </Choice>
    </ChoiceList>
  </div>
);
