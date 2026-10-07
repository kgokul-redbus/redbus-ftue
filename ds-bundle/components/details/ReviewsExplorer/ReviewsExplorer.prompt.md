ReviewsExplorer from india-bus-ds. Use via `window.IndiaBusDS.ReviewsExplorer` (bundle loaded from the root `_ds_bundle.js`).

P27 reviews explorer — no GEMS shell, filter or sort component verified;
rows are the `Android-ReviewTuple` candidate. Full screen with the rating
app bar, "All"-exclusive multi-select filters, a single-select sort rail,
the verified-traveller band and review tuples. Fills the phone canvas:
render it inside `IonsRoot device`.

## Props

```ts
interface ReviewsExplorerProps {
  /** App-bar title, e.g. "71 Reviews". */
  title: string;
  /** Overall rating in the app bar, e.g. "4.5". */
  rating?: string;
  /** Wrapping multi-select filter chips. Include an `all` option first. */
  filters?: ReviewFilterOption[];
  /** Controlled pressed filter ids. */
  filterValue?: string[];
  defaultFilterValue?: string[];
  onFilterChange?: (ids: string[]) => void;
  /** Single-select sort chips in a horizontal rail. */
  sorts?: string[];
  /** Controlled selected sort label. */
  sortValue?: string;
  defaultSortValue?: string;
  onSortChange?: (sort: string) => void;
  /** Reassurance band above the reviews. */
  verified?: React.ReactNode;
  /** `ReviewTuple`s. */
  children?: React.ReactNode;
  onBack?: () => void;
}
```

## Examples

### AllReviews

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <ReviewsExplorer title="71 Reviews" rating="4.5" filters={filters} filterValue={['all']} sorts={sorts} sortValue="Low To High Rating">
      {reviews}
    </ReviewsExplorer>
  </IonsRoot>
)
```

### FilteredRecent

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <ReviewsExplorer title="71 Reviews" rating="4.5" filters={filters} filterValue={['women', 'staff']} sorts={sorts} sortValue="Recent Reviews">
      {reviews}
    </ReviewsExplorer>
  </IonsRoot>
)
```
