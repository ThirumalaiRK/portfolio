import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types/project';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  layout: 'left' | 'right' | 'overlay' | 'card';
}

export const ProjectCard = ({ project, layout }: ProjectCardProps) => {
  const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300";
  
  const layouts = {
    left: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
    right: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse",
    overlay: "relative aspect-[16/9]",
    card: "bg-neutral-800 rounded-xl overflow-hidden"
  };

  return (
    <article className={`${baseClasses} ${layouts[layout]}`}>
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {layout === 'overlay' && (
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent"></div>
        )}
      </div>

      {/* Content Section */}
      <div className={layout === 'overlay' ? 'absolute bottom-0 left-0 right-0 p-8' : 'p-6'}>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-neutral-50">{project.title}</h3>
          <p className="text-neutral-300">{project.shortDescription}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-primary/10 text-primary-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 pt-4">
            <Link
              to={`/projects/${project.id}`}
              className="btn-primary"
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};