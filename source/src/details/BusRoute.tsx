import { Fragment } from 'react';
import { Icon } from '../foundations/Icon';

export interface BusRouteProps {
  /** Every town the service passes, in order, e.g. ["Delhi", "Bahadurgarh (Haryana)", …]. */
  stops: string[];
  /** The traveller's boarding town. Highlighted; earlier towns are greyed. */
  from?: string;
  /** The traveller's dropping town. Highlighted; later towns are greyed. */
  to?: string;
  /** Distance and duration line, e.g. "421 km · 8h 35m". */
  summary?: string;
  /** Section heading. Defaults to the production "Bus route". */
  title?: string;
}

/**
 * P26 "Bus route" section in bus details — the full service route as a
 * wrapping chain of towns joined by arrows, with the traveller's boarding and
 * dropping towns highlighted and towns outside their trip greyed. A line only
 * ever breaks after an arrow, never between a town and its arrow.
 *
 * Built from production evidence (`Scroll on bus details sheet.jpeg`): the
 * kit's calibration prototype never implemented this chain, so its styling
 * lives in the binding's `production-evidence.css`, not the kit CSS. For the
 * timed boarding/dropping point list use `RouteTimeline`.
 */
export function BusRoute({ stops, from, to, summary, title = 'Bus route' }: BusRouteProps) {
  const fromIndex = from ? stops.indexOf(from) : 0;
  const toIndex = to ? stops.indexOf(to) : stops.length - 1;
  return (
    <section className="ff-detail-section ib-bus-route">
      <h2>{title}</h2>
      {summary ? <p className="ib-section-summary">{summary}</p> : null}
      <p className="ib-bus-route__chain">
        {stops.map((stop, index) => {
          const endpoint = stop === from || stop === to;
          const outside = (fromIndex >= 0 && index < fromIndex) || (toIndex >= 0 && index > toIndex);
          return (
            <Fragment key={`${stop}-${index}`}>
              <span className="ib-bus-route__hop">
                <span className="ib-bus-route__stop" data-endpoint={endpoint || undefined} data-outside={outside || undefined}>
                  {stop}
                </span>
                {index < stops.length - 1 ? (
                  <Icon name="ion-arrow-forward" size="sm" className="ib-bus-route__arrow" />
                ) : null}
              </span>{' '}
            </Fragment>
          );
        })}
      </p>
    </section>
  );
}
