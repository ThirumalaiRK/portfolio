import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../../data/projects';


export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="py-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/projects" className="text-neutral-300 hover:text-secondary mb-4 inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-4xl font-bold text-neutral-50 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
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
                  Source Code
                  <Github className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-50 mb-4">Overview</h2>
              <p className="text-neutral-300">{project.description}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-50 mb-4">Challenge</h2>
              <p className="text-neutral-300">{project.challenge}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-50 mb-4">Solution</h2>
              <p className="text-neutral-300">{project.solution}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-50 mb-4">Process</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                {project.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-50 mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-50 mb-4">Results</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            {project.testimonial && (
              <div className="bg-neutral-800 rounded-xl p-6 mb-8">
                <blockquote className="text-neutral-300 italic mb-4">
                  "{project.testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-neutral-50">{project.testimonial.author}</p>
                  <p className="text-sm text-neutral-400">
                    {project.testimonial.role}, {project.testimonial.company}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-neutral-50 mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <figure key={index} className="space-y-2">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <figcaption className="text-sm text-neutral-400">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};