import type { ReactNode } from 'react';

export interface DetailSectionProps {
  /** Scrollspy target; matches a `BusDetailsSheet` tab id. */
  id: string;
  /** Section heading, e.g. "Boarding points". Omit for the untitled highlights block. */
  title?: string;
  /**
   * Grey line under the heading, e.g. the city for "Boarding points" ("Delhi")
   * or "Dropping points" ("Ganganagar (Sri Ganganagar)"), as in production.
   */
  subtitle?: string;
  /** Section body: `PolicyTable`, `PolicyList`, `RouteTimeline`, or `<h3>`/`<p>` copy. */
  children?: ReactNode;
}

/**
 * P24 bus-detail section — part of the bus-details sheet (no GEMS component).
 * One scroll module inside `BusDetailsSheet`, separated by the canvas-coloured
 * 8dp rule; `<h3>` and `<p>` children pick up the kit's section type.
 */
export function DetailSection({ id, title, subtitle, children }: DetailSectionProps) {
  return (
    <section className="ff-detail-section" data-detail-section={id}>
      {title ? <h2>{title}</h2> : null}
      {subtitle ? <p className="ib-section-summary">{subtitle}</p> : null}
      {children}
    </section>
  );
}
