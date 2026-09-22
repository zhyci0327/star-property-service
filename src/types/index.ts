export type ProjectCategory = 'all' | 'kitchen' | 'bathroom' | 'whole-home' | 'outdoor';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  suburb: string;
  year: string;
  timeline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  features: string[];
  scope: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  deliverables: string[];
  keyBenefits: string[];
  typicalTimeline: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  suburb: string;
  projectType: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  suburb: string;
  projectType: string;
  estimatedBudget: string;
  timeline: string;
  message: string;
}
