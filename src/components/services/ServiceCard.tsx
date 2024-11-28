import React from 'react';
import { useState } from 'react';
import { Service } from '../../types/service';
import { ChevronRight, X } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '../../utils/cn';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const patterns = {
  dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${32245A}' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
  lines: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%23${32245A}' stroke-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`,
  // Add more patterns...
};

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = Icons[service.icon as keyof typeof Icons];

  const cardAnimations = [
    'hover:transform hover:scale-102 hover:shadow-lg transition-all duration-300',
    'hover:border-gradient-animate',
    'bg-pattern-shift',
    'icon-pulse',
    'ripple-effect',
    'text-highlight'
  ];

  return (
    <div
      className={cn(
        'relative bg-neutral-800 rounded-xl p-6 overflow-hidden',
        'border border-neutral-700 transition-all duration-300',
        cardAnimations[index % cardAnimations.length],
        isExpanded && 'expanded'
      )}
      style={{ backgroundImage: patterns[service.pattern as keyof typeof patterns] }}
      role="article"
      aria-expanded={isExpanded}
    >
      {/* Service Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-neutral-50 mb-2">{service.title}</h3>
          <p className="text-neutral-300 line-clamp-2">{service.shortDescription}</p>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={cn(
          'transition-all duration-300 space-y-6',
          isExpanded ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'
        )}
      >
        {service.imageUrl && (
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-48 object-cover rounded-lg"
            loading="lazy"
          />
        )}

        <p className="text-neutral-300">{service.fullDescription}</p>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-neutral-50">Key Features</h4>
          <div className="grid grid-cols-1 gap-4">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  {feature.icon && (
                    <div>
                      {React.createElement(Icons[feature.icon as keyof typeof Icons], {
                        className: "w-4 h-4 text-secondary"
                      })}
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="text-sm font-medium text-neutral-50">{feature.title}</h5>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-neutral-50">Benefits</h4>
          <ul className="space-y-2">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-neutral-300">
                <ChevronRight className="w-4 h-4 text-secondary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 inline-flex items-center space-x-2 text-secondary hover:text-secondary-light
                   transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary
                   focus:ring-offset-2 focus:ring-offset-neutral-800 rounded-lg"
        aria-label={isExpanded ? 'Show less' : 'Read more'}
      >
        <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
        {isExpanded ? (
          <X className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};