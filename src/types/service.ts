export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  pattern: string;
  features: ServiceFeature[];
  benefits: string[];
  imageUrl?: string;
}