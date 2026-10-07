import { IonsRoot, ReviewsExplorer, ReviewTuple } from 'india-bus-ds';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'solo', label: 'Solo' },
  { id: 'women', label: 'Women' },
  { id: 'staff', label: 'Staff behavior' },
  { id: 'clean', label: 'Cleanliness' },
  { id: 'other', label: 'Other' },
  { id: 'more', label: '+4' },
];
const sorts = ['Relevant Reviews', 'Recent Reviews', 'Low To High Rating'];

const reviews = (
  <>
    <ReviewTuple
      name="Princy Vatsa"
      badge="🏆 Frequent Traveler"
      date="17 Jun 2026"
      score={1}
      text="Very slow driver. Did not even inform of the dropping point despite informing him twice at Hanumangarh."
      tags={['Driving']}
    />
    <ReviewTuple
      name="Soumik Roy Chowdhury"
      badge="🏆 Frequent Traveler"
      date="17 Sep 2025"
      score={1}
      text="Bus deboarded 113 km to destination. I will recommend never ever book Pinky Gudiya Travel."
      tags={['Driving', 'AC', 'Punctuality', 'Staff behavior']}
    />
  </>
);

export const AllReviews = () => (
  <IonsRoot device style={{ height: 800 }}>
    <ReviewsExplorer title="71 Reviews" rating="4.5" filters={filters} filterValue={['all']} sorts={sorts} sortValue="Low To High Rating">
      {reviews}
    </ReviewsExplorer>
  </IonsRoot>
);

export const FilteredRecent = () => (
  <IonsRoot device style={{ height: 800 }}>
    <ReviewsExplorer title="71 Reviews" rating="4.5" filters={filters} filterValue={['women', 'staff']} sorts={sorts} sortValue="Recent Reviews">
      {reviews}
    </ReviewsExplorer>
  </IonsRoot>
);
