import { Certificate } from '../../types/certificate';
import { ExternalLink } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export const CertificateCard = ({ certificate, index }: CertificateCardProps) => {
  return (
    <div 
      className={cn(
        'flex-none w-[300px] group',
        'animate-float',
        'hover:z-10'
      )}
      style={{ 
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className="relative overflow-hidden rounded-xl bg-neutral-800 shadow-lg hover:shadow-xl 
                     transition-all duration-300 border border-neutral-700 hover:border-secondary/50">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-neutral-50 transform translate-y-6 
                       group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-semibold text-lg leading-tight mb-1">{certificate.title}</h3>
          <p className="text-secondary font-medium">{certificate.issuer}</p>
          <p className="text-sm text-neutral-400 mt-2">{certificate.date}</p>
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-sm text-secondary hover:text-secondary-light transition-colors"
            >
              View Credential
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};