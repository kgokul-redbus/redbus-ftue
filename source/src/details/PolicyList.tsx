export interface PolicyItem {
  /** Leading text glyph, as the kit uses: "☺", "▣", "♧", "!". */
  glyph: string;
  /** e.g. "Luggage policy". */
  title: string;
  /** e.g. "2 pieces of luggage will be accepted free of charge per passenger." */
  description: string;
}

export interface PolicyListProps {
  items: PolicyItem[];
}

/**
 * P25 other-policies list — no exact GEMS component verified. Child, luggage,
 * pets and liquor rules as glyph + title + description rows. Place inside a
 * `DetailSection`.
 */
export function PolicyList({ items }: PolicyListProps) {
  return (
    <div className="ff-policy-list">
      {items.map((item) => (
        <div key={item.title} className="ff-policy-item">
          <span>{item.glyph}</span>
          <span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </span>
        </div>
      ))}
    </div>
  );
}
