import type { LucideIcon } from "lucide-react";

export interface Plan {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}
