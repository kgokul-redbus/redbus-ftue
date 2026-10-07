import { RatingInput } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      How was your trip to Delhi ISBT Kashmere Gate?
    </div>
    <RatingInput label="Rate your trip with Zing Bus Maxx" />
  </div>
);

export const Selected = () => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      Rate Zing Bus Maxx
    </div>
    <RatingInput value={4} label="Rate Zing Bus Maxx" />
    <div className="type-caption" style={{ marginTop: 8 }}>
      You rated this trip Good. Tell us what worked.
    </div>
  </div>
);

export const LowScore = () => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      Rate Laxmi Holidays · 21:15 Zirakpur Chowk → Jaipur Sindhi Camp
    </div>
    <RatingInput value={2} label="Rate Laxmi Holidays" />
    <div className="type-caption" style={{ marginTop: 8 }}>
      Sorry about that. What went wrong — boarding, cleanliness or delay?
    </div>
  </div>
);

export const CustomLabels = () => (
  <div style={{ width: 328 }}>
    <div className="type-title-3" style={{ marginBottom: 12 }}>
      How punctual was the IntrCity SmartBus?
    </div>
    <RatingInput
      labels={['Very late', 'Late', 'On time', 'Early', 'Very early']}
      value={3}
      label="Rate punctuality"
    />
  </div>
);
