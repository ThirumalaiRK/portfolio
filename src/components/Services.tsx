import { Code, Palette, Globe, Workflow } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
    },
    {
      icon: Globe,
      title: 'Google Ads services',
      description: 'Creating and optimizing Google Ads campaigns to boost traffic and conversions.',
    },
    {
    icon: Workflow,
      title: 'Automation',
      description: 'Streamlining processes through automated workflows to improve efficiency and reduce manual effort.'
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Comprehensive solutions for your digital needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-6 group"
            >
              <div className="w-12 h-12 bg-primary-dark/30 rounded-lg flex items-center justify-center mb-6 
                            group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-6 w-6 text-secondary group-hover:text-neutral-50 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-50 mb-3 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;