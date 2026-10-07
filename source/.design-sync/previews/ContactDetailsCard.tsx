import { ContactDetailsCard } from 'india-bus-ds';

const Screen = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, padding: '1px 0 14px', background: '#f4f3f8' }}>{children}</div>
);

export const Default = () => (
  <Screen>
    <ContactDetailsCard phone="+91 8802627572" email="sgrdng93@gmail.com" region="Rajasthan" />
  </Screen>
);

export const WithoutWhatsApp = () => (
  <Screen>
    <ContactDetailsCard phone="+91 8802627572" email="sgrdng93@gmail.com" region="Rajasthan" whatsapp={false} />
  </Screen>
);
