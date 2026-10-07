import { AiSmartFilter } from 'india-bus-ds';

const Phone = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 360, background: 'var(--surface-neutral-lowest-default)' }}>{children}</div>
);

export const Idle = () => (
  <Phone>
    <AiSmartFilter state="idle" />
  </Phone>
);

export const Filled = () => (
  <Phone>
    <AiSmartFilter state="filled" value="show ac buses" />
  </Phone>
);

export const Loading = () => (
  <Phone>
    <AiSmartFilter state="loading" value="ac sleeper under 1000" />
  </Phone>
);

export const Applied = () => (
  <Phone>
    <AiSmartFilter state="applied" value="ac sleeper under 1000" />
  </Phone>
);
