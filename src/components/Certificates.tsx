import { Award } from 'lucide-react'; 
import certificateImages from './certificateImages/GuviCertification.png';
import certificate2 from './certificateImages/accenture Software Engineering Job Simulation.jpg'
import certificate3 from './certificateImages/Aws hosting architecture.jpg'

const certificates = [
  {
    title: "Python",
    image: certificateImages,
    date: "2023",
    issuer: "GUVI"
  },
  {
    title: "Accenture Software Engineering",
    image: certificate2,
    date: "2024",
    issuer: "Forage"
  },

  {
    title: "Aws hosting architecture",
    image: certificate3,
    date: "2024",
    issuer: "Forage"
  },

  {
    title: "Google Ads Search Certification",
    image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/124173985",
    date: "2024",
    issuer: "Google Skillshop"
  },
  {
    title: "Google Ads Display Certification",
    image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/124170755",
    date: "2024",
    issuer: "Google Skillshop"
  }
];

const Certificates = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Base Layer */}
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
          <div className="absolute left-0 top-0 bottom-0 w-50 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-50 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
          
          <div className="flex gap-6 animate-scroll">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="flex-none w-[300px] group"
              >
                <div className="relative overflow-hidden rounded-xl bg-neutral-800 shadow-lg hover:shadow-xl 
                               transition-all duration-300 border border-neutral-700 hover:border-secondary/50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-neutral-50 transform translate-y-6 
                                 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg leading-tight mb-1">{cert.title}</h3>
                    <p className="text-secondary font-medium">{cert.issuer}</p>
                    <p className="text-sm text-neutral-400 mt-2">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;