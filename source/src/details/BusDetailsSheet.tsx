import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Icon } from '../foundations/Icon';

export interface DetailTab {
  /** Must match the `id` of a `DetailSection` child. */
  id: string;
  /** Tab label, e.g. "Cancellation policy". */
  label: string;
}

export interface BusDetailsSheetProps {
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
  /**
   * Media rail. `true` (default) renders the kit's two slots: the extracted
   * bus photo crop and the gradient boarding photo.
   */
  media?: boolean;
  /** Scrollspy tabs, one per section. */
  tabs: DetailTab[];
  /** Controlled active tab id. */
  activeSection?: string;
  defaultActiveSection?: string;
  onActiveSectionChange?: (id: string) => void;
  /** `DetailSection`s, in tab order. */
  children?: ReactNode;
  onClose?: () => void;
}

/**
 * P24 bus-detail sheet — mixed GEMS: `DroidRating` is verified sub-anatomy,
 * no complete details-sheet component is verified. Tall bottom sheet with the
 * floating close button, operator summary, media rail, sticky scrollspy tabs
 * and `DetailSection` modules. Tapping a tab scrolls to its section; scrolling
 * updates the active tab. Absolutely positioned over the phone canvas: render
 * it inside `IonsRoot device`. Drag-to-dismiss is not ported.
 */
export function BusDetailsSheet({
  open,
  operator,
  primo,
  meta,
  rating,
  ratingCount,
  media = true,
  tabs,
  activeSection,
  defaultActiveSection,
  onActiveSectionChange,
  children,
  onClose,
}: BusDetailsSheetProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLElement>(null);
  const [internal, setInternal] = useState(defaultActiveSection ?? tabs[0]?.id);
  const active = activeSection ?? internal;

  const setActive = (id: string) => {
    if (id === active) return;
    if (activeSection === undefined) setInternal(id);
    onActiveSectionChange?.(id);
  };

  useEffect(() => {
    const button = tabsRef.current?.querySelector<HTMLElement>('[aria-selected="true"]');
    const nav = tabsRef.current;
    if (button && nav) nav.scrollLeft = button.offsetLeft - (nav.clientWidth - button.offsetWidth) / 2;
  }, [active]);

  const scrollTo = (id: string) => {
    const scroll = scrollRef.current;
    const section = scroll?.querySelector<HTMLElement>(`[data-detail-section="${id}"]`);
    if (scroll && section) scroll.scrollTo({ top: section.offsetTop - 54, behavior: 'smooth' });
    setActive(id);
  };

  const onScroll = () => {
    const scroll = scrollRef.current;
    if (!scroll) return;
    const sections = Array.from(scroll.querySelectorAll<HTMLElement>('[data-detail-section]'));
    let current = sections[0];
    sections.forEach((section) => {
      if (section.offsetTop <= scroll.scrollTop + 70) current = section;
    });
    if (current?.dataset.detailSection) setActive(current.dataset.detailSection);
  };

  return (
    <div className="ff-overlay ff-details-overlay" data-open={open ? 'true' : 'false'} aria-hidden={!open}>
      <section className="ff-sheet ff-details-sheet" role="dialog" aria-modal="true" aria-label="Bus details">
        <button className="ff-details-close" type="button" aria-label="Close bus details" onClick={onClose}>
          <Icon name="ion-close" className="ff-icon" />
        </button>
        <div className="ff-handle" />
        <div className="ff-details-scroll" ref={scrollRef} onScroll={onScroll}>
          <div className="ff-details-operator">
            <div className="ff-operator">
              <span>
                <span className="ff-operator__name">
                  {primo ? (
                    <>
                      <span className="ff-primo">Primo☆</span>{' '}
                    </>
                  ) : null}
                  {operator}
                </span>
                {meta ? <span className="ff-operator__meta">{meta}</span> : null}
              </span>
              {rating ? (
                <span className="ff-rating">
                  <strong>★ {rating}</strong>
                  {ratingCount ? <span>{ratingCount}</span> : null}
                </span>
              ) : null}
            </div>
          </div>
          {media ? (
            <div className="ff-hscroll ff-details-media">
              <div className="ff-art-crop ff-details-photo ib-art-bus-photo" role="img" aria-label={`${operator} bus`} />
              <div className="ff-details-photo ff-details-photo--second" aria-label="Bus boarding photo" />
            </div>
          ) : null}
          <nav className="ff-details-tabs" ref={tabsRef} aria-label="Bus detail sections">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                data-detail-target={tab.id}
                aria-selected={tab.id === active}
                onClick={() => scrollTo(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          {children}
        </div>
      </section>
    </div>
  );
}
