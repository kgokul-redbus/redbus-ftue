import { Choice, ChoiceList } from 'india-bus-ds';

export const Checkboxes = () => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Bus type">
      <Choice name="bus-type" value="ac-sleeper" defaultChecked>
        AC Sleeper
      </Choice>
      <Choice name="bus-type" value="ac-seater">
        AC Seater
      </Choice>
      <Choice name="bus-type" value="non-ac-sleeper">
        Non-AC Sleeper
      </Choice>
    </ChoiceList>
  </div>
);

export const Radios = () => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Sort results by">
      <Choice type="radio" name="sort" value="departure" defaultChecked>
        Departure time
      </Choice>
      <Choice type="radio" name="sort" value="fare">
        Fare — low to high
      </Choice>
      <Choice type="radio" name="sort" value="rating">
        Operator rating
      </Choice>
    </ChoiceList>
  </div>
);

export const Disabled = () => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Add-ons">
      <Choice name="addons" value="insurance" defaultChecked>
        Trip insurance · ₹19
      </Choice>
      <Choice name="addons" value="flexi" disabled>
        Flexi ticket · not offered by Laxmi Holidays
      </Choice>
    </ChoiceList>
  </div>
);

export const SingleConsent = () => (
  <div style={{ width: 328 }}>
    <ChoiceList legend="Contact details">
      <Choice name="whatsapp" value="yes" defaultChecked>
        Send ticket updates on WhatsApp to +91 98xxx xxx21
      </Choice>
    </ChoiceList>
  </div>
);
