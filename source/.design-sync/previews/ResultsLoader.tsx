import { IonsRoot, ResultsLoader, RouteHeader, ResultModeTabs, RayFab } from 'india-bus-ds';

// The loader covers the results from 113dp down; the route header and Buses/Trains
// tabs stay visible above it in production, so the frame renders them too.
const Chrome = () => (
  <div style={{ background: 'var(--surface-neutral-lowest-default)' }}>
    <RouteHeader from="Delhi" to="Ganganagar (Sri Ganganagar)" busCount={7} date="9 Jul" day="Thu" />
    <ResultModeTabs value="Buses" />
  </div>
);

export const InitialLoad = () => (
  <IonsRoot device style={{ height: 800 }}>
    <Chrome />
    <ResultsLoader open variant="base" />
  </IonsRoot>
);

export const AfterAiFilter = () => (
  <IonsRoot device style={{ height: 800 }}>
    <Chrome />
    <ResultsLoader open variant="contextual" aiQuery="ac sleeper under 1000" aiSummary="Showing AC sleeper buses under ₹1000" />
    <RayFab />
  </IonsRoot>
);
