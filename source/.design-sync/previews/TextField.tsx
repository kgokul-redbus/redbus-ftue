import { TextField, Icon } from 'india-bus-ds';

export const Default = () => (
  <div style={{ width: 328 }}>
    <TextField label="Full name" placeholder="Enter full name" support="As shown on the ID" />
  </div>
);

export const Filled = () => (
  <div style={{ width: 328 }}>
    <TextField label="Email address" defaultValue="raghava@example.in" type="email" />
  </div>
);

export const Error = () => (
  <div style={{ width: 328 }}>
    <TextField
      label="Phone number"
      type="tel"
      defaultValue="987"
      state="error"
      support="Enter a valid phone number"
      endAdornment={<Icon name="ion-error" size="sm" />}
    />
  </div>
);

export const Disabled = () => (
  <div style={{ width: 328 }}>
    <TextField label="Ticket number" defaultValue="TK-4821-9930" state="disabled" support="Assigned after booking" />
  </div>
);

export const Multiline = () => (
  <div style={{ width: 328 }}>
    <TextField label="Special request" multiline placeholder="Anything the operator should know?" />
  </div>
);
