import { RouteHeader } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>{children}</div>
);

export const Default = () => (
  <Phone>
    <RouteHeader from="Delhi" to="Ganganagar (Sri Ganganagar)" busCount={7} date="9 Jul" day="Thu" />
  </Phone>
);

export const ShortRoute = () => (
  <Phone>
    <RouteHeader from="Chandigarh" to="Delhi" busCount={42} date="16 Aug" day="Sat" />
  </Phone>
);

export const WithoutCount = () => (
  <Phone>
    <RouteHeader from="Bangalore" to="Hyderabad" date="21 Sep" day="Mon" />
  </Phone>
);
