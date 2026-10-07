import * as React from 'react';

/**
 * ContactDetailsCard — from india-bus-ds@1.0.0.
 */
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

export declare const ContactDetailsCard: React.ComponentType<ContactDetailsCardProps>;
