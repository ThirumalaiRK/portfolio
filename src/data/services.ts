import { Service } from '../types/service';
import { Code, Palette, Globe, Cpu, Shield, Smartphone } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Building responsive and performant web applications using modern technologies.',
    fullDescription: 'Comprehensive web development services including frontend, backend, and database design. We use cutting-edge technologies to create scalable and maintainable applications.',
    icon: Code.name,
    pattern: 'dots',
    features: [
      {
        title: 'Frontend Development',
        description: 'React, Vue, Angular with modern build tools',
        icon: 'code'
      },
      {
        title: 'Backend Development',
        description: 'Node.js, Python, Go with microservices architecture',
        icon: 'server'
      },
      {
        title: 'Database Design',
        description: 'SQL and NoSQL database optimization',
        icon: 'database'
      }
    ],
    benefits: [
      'Improved performance and SEO',
      'Responsive design for all devices',
      'Scalable architecture',
      'Modern user experience'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000&h=600'
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    shortDescription: 'Creating intuitive and beautiful user interfaces with attention to detail.',
    fullDescription: 'End-to-end design services from wireframing to final UI implementation. We focus on creating delightful user experiences that drive engagement.',
    icon: Palette.name,
    pattern: 'lines',
    features: [
      {
        title: 'User Research',
        description: 'Understanding user needs and behaviors',
        icon: 'users'
      },
      {
        title: 'Wireframing',
        description: 'Low and high-fidelity prototypes',
        icon: 'layout'
      },
      {
        title: 'Visual Design',
        description: 'Modern and consistent design systems',
        icon: 'palette'
      }
    ],
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Reduced development time',
      'Consistent brand experience'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000&h=600'
  },
  // Add more services...
];