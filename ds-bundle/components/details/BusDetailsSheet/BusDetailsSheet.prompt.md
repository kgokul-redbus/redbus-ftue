BusDetailsSheet from india-bus-ds. Use via `window.IndiaBusDS.BusDetailsSheet` (bundle loaded from the root `_ds_bundle.js`).

P24 bus-detail sheet — mixed GEMS: `DroidRating` is verified sub-anatomy,
no complete details-sheet component is verified. Tall bottom sheet with the
floating close button, operator summary, media rail, sticky scrollspy tabs
and `DetailSection` modules. Tapping a tab scrolls to its section; scrolling
updates the active tab. Absolutely positioned over the phone canvas: render
it inside `IonsRoot device`. Drag-to-dismiss is not ported.

## Props

```ts
interface BusDetailsSheetProps {
  /** Drives the overlay's `data-open` state. */
  open?: boolean;
  /** Operator name, e.g. "Pinky Gudiya Travels And Cargo". */
  operator: string;
  /** Prefixes the name with the "Primo☆" wordmark. */
  primo?: boolean;
  /** Trip line, e.g. "21:15 - 05:50 · Fri, 10 Jul". */
  meta?: string;
  /** Rating, e.g. "4.5". */
  rating?: string;
  ratingCount?: string;
  /** Media rail. `true` (default) renders the kit's two slots: the extracted bus photo crop and the gradient boarding photo. */
  media?: boolean;
  /** Scrollspy tabs, one per section. */
  tabs: DetailTab[];
  /** Controlled active tab id. */
  activeSection?: string;
  defaultActiveSection?: string;
  onActiveSectionChange?: (id: string) => void;
  /** `DetailSection`s, in tab order. */
  children?: React.ReactNode;
  onClose?: () => void;
}
```

## Examples

### Overview

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <BusDetailsSheet open {...operator} tabs={tabs} activeSection="highlights">
      <DetailSection id="highlights">
        <div className="ff-detail-grid">
          <div className="ff-detail-card">
            New Bus
            <br />
            <small>12 months old</small>
          </div>
          <div className="ff-detail-card">
            Bus Safety
            <br />
            <small>Available</small>
          </div>
        </div>
        <div className="ff-detail-card" style={{ marginTop: 8 }}>
          Top 5% &nbsp; <small>One of the best on this route</small>
        </div>
      </DetailSection>
      <DetailSection id="cancellation" title="Cancellation policy">
        <PolicyTable rows={policyRows} />
      </DetailSection>
      <DetailSection id="date-change" title="Date change policy">
        <p>You can change the travel date until 24 hours before departure. Fare difference may apply.</p>
      </DetailSection>
      <BusRoute stops={route} from="Delhi" to="Ganganagar (Sri Ganganagar)" summary="421 km · 8h 35m" />
      <DetailSection id="boarding-info" title="Boarding points" subtitle="Delhi">
        <RouteTimeline stops={boarding} />
      </DetailSection>
      <DetailSection id="dropping-info" title="Dropping points" subtitle="Ganganagar (Sri Ganganagar)">
        <RouteTimeline stops={dropping} />
      </DetailSection>
      <DetailSection id="policies" title="Other policies">
        <PolicyList items={policies} />
      </DetailSection>
    </BusDetailsSheet>
  </IonsRoot>
)
```

### CancellationTab

```jsx
() => (
  <IonsRoot device style={{ height: 800 }}>
    <BusDetailsSheet open {...operator} media={false} tabs={tabs} activeSection="cancellation">
      <DetailSection id="cancellation" title="Cancellation policy">
        <PolicyTable rows={policyRows} />
      </DetailSection>
      <BusRoute stops={route} from="Delhi" to="Ganganagar (Sri Ganganagar)" summary="421 km · 8h 35m" />
    </BusDetailsSheet>
  </IonsRoot>
)
```
