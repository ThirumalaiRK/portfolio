export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'other';
  demoUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  process: string[];
  features: string[];
  results: string[];
  images: {
    url: string;
    caption: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}