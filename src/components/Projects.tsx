import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectImage from '../components/projectImgaes/e-commer.png'

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'design'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured online shopping platform with real-time inventory management.',
      image: projectImage,
      demo: 'https://wantedweb.in/',
      github: 'https://github.com',
    },
   /**  {
      title: 'Travel App',
      category: 'mobile',
      description: 'Mobile application for discovering and booking travel experiences.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800&h=600',
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      title: 'Portfolio Template',
      category: 'design',
      description: 'Modern and responsive portfolio template for creative professionals.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800&h=600',
      demo: 'https://example.com',
      github: 'https://github.com',
    },*/
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neutral-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#32245A05_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  filter === cat
                    ? 'bg-primary text-neutral-50 shadow-lg shadow-primary/25'
                    : 'text-neutral-300 hover:text-secondary'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700
                         hover:border-secondary/50 transition-all duration-300
                         shadow-lg hover:shadow-xl hover:shadow-secondary/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-neutral-50 mb-2">{project.title}</h3>
                <p className="text-neutral-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary-light
                             transition-colors duration-200"
                  >
                    Live Demo
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-neutral-50
                             transition-colors duration-200"
                  >
                    Source Code
                    <Github className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Default State Content */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-neutral-50 mb-2">{project.title}</h3>
                <p className="text-neutral-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;