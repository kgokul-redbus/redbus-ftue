import { Fragment, useState } from 'react';
import { Icon } from '../foundations/Icon';

export interface LocationItem {
  /** Primary line, e.g. "Anand Rao Circle" or "Delhi - Ganganagar". */
  name: string;
  /** City under a boarding/dropping point; renders the two-line rich row. */
  city?: string;
  /** `route` shows the recent-route glyph, `city` the pin, `point` the bus. Defaults to `point` with a city, else `city`. */
  kind?: 'route' | 'city' | 'point';
  /** Tall 65px `--rich` row. Defaults to true when `city` is set (the kit also uses it for popular cities). */
  rich?: boolean;
}

export interface LocationGroup {
  heading: string;
  /** Popular groups get the larger top gap. */
  popular?: boolean;
  items: LocationItem[];
}

export interface LocationSearchProps {
  /** `origin` searches boarding points; `destination` searches areas. */
  mode?: 'origin' | 'destination';
  /** Controlled query. */
  query?: string;
  defaultQuery?: string;
  onQueryChange?: (query: string) => void;
  /** Result groups, e.g. Recent searches then Popular boarding points. */
  groups?: LocationGroup[];
  onSelect?: (item: LocationItem) => void;
  onBack?: () => void;
}

/**
 * P35 location selection search — GEMS `AndroidSearchSection`, candidate, not
 * node-verified. A full screen in the kit (`ff-screen ff-location`): status
 * spacer, pill search field with back, then Recent searches and Popular
 * boarding/dropping points. The screen and its search field and list are
 * absolutely positioned: render it inside `IonsRoot device`.
 */
export function LocationSearch({
  mode = 'origin',
  query,
  defaultQuery = '',
  onQueryChange,
  groups = [],
  onSelect,
  onBack,
}: LocationSearchProps) {
  const [internal, setInternal] = useState(defaultQuery);
  const text = query ?? internal;
  return (
    <section className="ff-screen ff-location" data-active="true" aria-label="Location selection">
      <div className="ff-status" />
      <div className="ff-location__search">
        <button className="ff-back" type="button" aria-label="Back" onClick={onBack}>
          <Icon name="ion-arrow-back" className="ff-icon" />
        </button>
        <input
          type="search"
          autoComplete="off"
          placeholder={mode === 'destination' ? 'Search area' : 'Search boarding point'}
          aria-label="Search locations"
          value={text}
          onChange={(event) => {
            if (query === undefined) setInternal(event.target.value);
            onQueryChange?.(event.target.value);
          }}
        />
      </div>
      <div className="ff-scroll ff-location__list">
        {groups.map((group, g) => (
          <Fragment key={g}>
            <h2
              className={group.popular ? 'ff-location__heading ff-location__heading--popular' : 'ff-location__heading'}
            >
              {group.heading}
            </h2>
            {group.items.map((item, i) => {
              const rich = item.rich ?? Boolean(item.city);
              const kind = item.kind ?? (item.city ? 'point' : 'city');
              return (
                <button
                  key={i}
                  className={rich ? 'ff-location__row ff-location__row--rich' : 'ff-location__row'}
                  type="button"
                  onClick={() => onSelect?.(item)}
                >
                  {kind === 'route' ? (
                    <span aria-hidden="true">{'↶'}</span>
                  ) : (
                    <Icon name={kind === 'point' ? 'ion-bus' : 'ion-location'} className="ff-icon" />
                  )}
                  {item.city ? (
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.city}</small>
                    </span>
                  ) : (
                    <strong>{item.name}</strong>
                  )}
                </button>
              );
            })}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
