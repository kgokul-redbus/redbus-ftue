import { Icon } from '../foundations/Icon';

export interface ContactDetailsCardProps {
  /** Phone with country code, e.g. "+91 8802627572". */
  phone: string;
  email: string;
  /** State of residence, e.g. "Rajasthan". */
  region: string;
  /** Show the green "WhatsApp communication enabled" status. */
  whatsapp?: boolean;
  onEdit?: () => void;
}

/**
 * P33 contact-details card — screenshot-led, no GEMS contact component was
 * node-verified. Read-only summary of where the ticket is sent, with an Edit
 * link and WhatsApp status. The region row uses the Ions `ion-location` pin,
 * as production does. Phone, mail and WhatsApp keep the kit's text glyphs
 * (☎ ✉ ◉): Ions has no phone, mail or WhatsApp icon, and the WhatsApp mark is
 * a brand asset.
 *
 * Evidence boundary: the kit has NO edit form, empty or validation state for
 * contact details ("Contact editing is not captured"); none is provided here.
 */
export function ContactDetailsCard({ phone, email, region, whatsapp = true, onEdit }: ContactDetailsCardProps) {
  return (
    <section className="ff-customer-card">
      <div className="ff-customer-card__heading">
        <span>
          <h2>Contact Details</h2>
          <p className="ff-customer-card__support">Ticket details will be sent to</p>
        </span>
        <button className="ff-link" type="button" onClick={onEdit}>
          Edit
        </button>
      </div>
      <div className="ff-contact-row">
        {'☎ '}
        <span>{phone}</span>
      </div>
      <div className="ff-contact-row">
        {'✉ '}
        <span>{email}</span>
      </div>
      <div className="ff-contact-row">
        <Icon name="ion-location" size="sm" />
        <span>{region}</span>
      </div>
      {whatsapp ? <div className="ff-whatsapp">{'◉   WhatsApp communication enabled'}</div> : null}
    </section>
  );
}
