import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

const layouts = ['left', 'right', 'overlay', 'card'] as const;

export const ProjectShowcase = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'web', 'mobile', 'design'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 relative overflow-hidden">
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

        {/* Category Filter */}
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

        {/* Projects Grid */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              layout={layouts[index % layouts.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};