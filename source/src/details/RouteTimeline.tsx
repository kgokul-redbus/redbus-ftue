export interface RouteStop {
  /** 24-hour time, e.g. "21:15". */
  time: string;
  /** Date under the time, e.g. "10 Jul". */
  date?: string;
  /** Point name, e.g. "Shop no.35 old delhi railway station fatehpuri parking". */
  name: string;
  /** Grey address line under the name. */
  address?: string;
}

export interface RouteTimelineProps {
  stops: RouteStop[];
}

/**
 * P26 boarding/dropping point timeline in bus details — no exact GEMS component
 * verified. Production's "Boarding points" / "Dropping points" list: time with
 * date, a dark dot on a grey rail, point name and address. For the "Bus route"
 * chain of towns use `BusRoute`.
 *
 * The kit's rows (`.ff-route-stop`) lack the date and address and draw hollow
 * brand dots; the production anatomy is layered on in the binding's
 * `production-evidence.css`. Renders the rows only (no wrapper): place them
 * directly inside a `DetailSection`, as its last content, so the final dot
 * drops its rail.
 */
export function RouteTimeline({ stops }: RouteTimelineProps) {
  return (
    <>
      {stops.map((stop, index) => (
        <div key={index} className="ff-route-stop">
          <strong>
            {stop.time}
            {stop.date ? <small>{stop.date}</small> : null}
          </strong>
          <i />
          <span>
            <strong>{stop.name}</strong>
            {stop.address ? <small>{stop.address}</small> : null}
          </span>
        </div>
      ))}
    </>
  );
}
