import { Project } from '../types/project';
import projectImage from '../components/projectImgaes/e-commer.png'

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'A full-featured online shopping platform with real-time inventory management.',
    description: 'Modern e-commerce solution built with shopify,Figma featuring real-time inventory tracking and advanced analytics.',
    image: projectImage,
    technologies: ['shopify,figma'],
    category: 'web',
    demoUrl: 'https://wantedweb.in/',
    challenge: 'Creating a scalable e-commerce platform that handles high traffic and maintains real-time inventory accuracy.',
    solution: 'Implemented a microservices architecture with event-driven inventory management and caching strategies.',
    process: [
      'Conducted extensive market research and user interviews',
      'Developed architecture and technical specifications',
      'Implemented core features using agile methodology',
      'Performed load testing and optimization'
    ],
    features: [
      'Real-time inventory tracking',
      'Advanced search and filtering',
      'Secure payment processing',
      'Admin dashboard with analytics'
    ],
    results: [
      '99.9% uptime',
      '40% improvement in page load times',
      '25% increase in conversion rate'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
        caption: 'Homepage with featured products'
      },
      {
        url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?auto=format&fit=crop&q=80&w=800&h=600',
        caption: 'Product detail page'
      },
      {
        url: 'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?auto=format&fit=crop&q=80&w=800&h=600',
        caption: 'Admin dashboard'
      }
    ],
    testimonial: {
      text: "The platform transformed our online presence and significantly improved our sales performance.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Fashion Retail Co."
    }
  },
  // Add more projects...
];