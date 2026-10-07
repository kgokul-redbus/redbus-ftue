ContactDetailsCard from india-bus-ds. Use via `window.IndiaBusDS.ContactDetailsCard` (bundle loaded from the root `_ds_bundle.js`).

P33 contact-details card — screenshot-led, no GEMS contact component was
node-verified. Read-only summary of where the ticket is sent, with an Edit
link and WhatsApp status. The region row uses the Ions `ion-location` pin,
as production does. Phone, mail and WhatsApp keep the kit's text glyphs
(☎ ✉ ◉): Ions has no phone, mail or WhatsApp icon, and the WhatsApp mark is
a brand asset.

Evidence boundary: the kit has NO edit form, empty or validation state for
contact details ("Contact editing is not captured"); none is provided here.

## Props

```ts
interface ContactDetailsCardProps {
  /** Phone with country code, e.g. "+91 8802627572". */
  phone: string;
  email: string;
  /** State of residence, e.g. "Rajasthan". */
  region: string;
  /** Show the green "WhatsApp communication enabled" status. */
  whatsapp?: boolean;
  onEdit?: () => void;
}
```

## Examples

### Default

```jsx
() => (
  <Screen>
    <ContactDetailsCard phone="+91 8802627572" email="sgrdng93@gmail.com" region="Rajasthan" />
  </Screen>
)
```

### WithoutWhatsApp

```jsx
() => (
  <Screen>
    <ContactDetailsCard phone="+91 8802627572" email="sgrdng93@gmail.com" region="Rajasthan" whatsapp={false} />
  </Screen>
)
```
