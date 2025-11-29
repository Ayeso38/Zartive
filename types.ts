export interface Photo {
  id: number;
  url: string;
  category: string;
  title: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum BookingStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  packageId: string;
  notes: string;
}
