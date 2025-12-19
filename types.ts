
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

// Added ChatMessage interface to fix the module export error in AIConsultant.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
