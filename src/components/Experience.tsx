import { Download,  Database, Layout, Server, HardDrive } from 'lucide-react';
import resume from "./resume/thirumalai rk .pdf";
const Experience = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Layout,
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      category: "Backend",
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 }
      ]
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      category: "Network and Hadware",
      icon: HardDrive,
      skills: [
        { name: 'Network', level: 40 },
        { name: 'Hardware', level: 90 }
      ]
    }
  ];

  const experiences = [
    {
      title: 'Analyst',
      company: 'Objectways Technologies.',
      period: 'may - september 2024',
      description: 'Optimized AI labeling workflows, boosting efficiency by 20%. Designed secure medical data workflows, enhancing accuracy by 15%. Resolved system issues, reducing downtime by 10% and improving reliability.',
    },
    {
      title: 'Freelancer',
      company: 'Digital Agency',
      period: '2024 - present',
      description: 'Developed dynamic and responsive web applications using React and TypeScript, achieving a 40% improvement in performance. Built and customized e-commerce stores tailored to client needs, integrating secure payment gateways and enhancing user interfaces. Leveraged Google and Meta Ads to create and execute targeted digital marketing campaigns, resulting in increased traffic and conversion rates for clients.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience & Skills</h2>
          <p className="section-subtitle">Building innovative digital solutions, one step at a time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-neutral-50">Professional Experience</h3>
              <a href={resume} className="btn-outline">
                <Download className="h-4 w-4 mr-2" />
                Resume PDF
                </a>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 
                                          before:w-0.5 before:bg-gradient-to-b before:from-secondary before:to-primary">
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-secondary -translate-x-[5px]"></div>
                  <h4 className="text-lg font-semibold text-neutral-50">{exp.title}</h4>
                  <p className="text-sm text-secondary">{exp.company} | {exp.period}</p>
                  <p className="mt-2 text-neutral-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <div key={index} className="card p-6 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-dark/30 rounded-lg flex items-center justify-center 
                                group-hover:bg-primary transition-colors duration-300">
                    <category.icon className="h-6 w-6 text-secondary group-hover:text-neutral-50 transition-colors duration-300" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-neutral-50 group-hover:text-secondary transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                        <span className="text-sm text-secondary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;