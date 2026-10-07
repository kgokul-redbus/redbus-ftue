import { ReviewTuple } from 'india-bus-ds';

export const OneTag = () => (
  <div style={{ width: 360, background: '#fff', padding: '0 14px' }}>
    <ReviewTuple
      name="Princy Vatsa"
      badge="🏆 Frequent Traveler"
      date="17 Jun 2026"
      score={1}
      text="Very slow driver. Did not even inform of the dropping point despite informing him twice at Hanumangarh."
      tags={['Driving']}
    />
  </div>
);

export const ManyTags = () => (
  <div style={{ width: 360, background: '#fff', padding: '0 14px' }}>
    <ReviewTuple
      name="Soumik Roy Chowdhury"
      badge="🏆 Frequent Traveler"
      date="17 Sep 2025"
      score={1}
      text="Bus deboarded 113 km to destination. I will recommend never ever book Pinky Gudiya Travel."
      tags={['Driving', 'AC', 'Punctuality', 'Staff behavior']}
    />
  </div>
);
