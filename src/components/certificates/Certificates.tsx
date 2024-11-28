import { Award } from 'lucide-react';
import { certificates } from '../../data/certificates';
import { CertificateCard } from './CertificateCard';

const Certificates = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neutral-900">
          <div className="absolute inset-0 opacity-30">
            {/* Hexagonal Grid Pattern */}
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
                  <path
                    d="M25,17.3205080757L37.5,25L37.5,40.3205080757L25,48.0205080757L12.5,40.3205080757L12.5,25L25,17.3205080757Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-primary-dark"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-dark/5 to-secondary/10"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-secondary/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group">
            <Award className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-300" />
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </div>

        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
          
          <div className="flex gap-6 animate-scroll">
            {[...certificates, ...certificates].map((cert, index) => (
              <CertificateCard
                key={`${cert.id}-${index}`}
                certificate={cert}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;