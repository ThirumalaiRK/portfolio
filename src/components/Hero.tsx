import { Github, FileText, Mail, ArrowRight } from 'lucide-react';
import resume from "./resume/thirumalai rk .pdf";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-neutral-900 opacity-50 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#32245A10_12%,transparent_12.5%,transparent_87%,#32245A10_87.5%,#32245A10)] bg-[length:16px_16px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-50 leading-tight">
          Hi, I'm <span className="text-secondary">Thirumalai R K</span>
          <span className="block">Crafting Digital Experiences</span>
          </h1>
          
          <p className="mt-6 text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0">
          A budding freelance developer with expertise in web development, e-commerce store building, and digital marketing through Google and Meta Ads. I’m passionate about creating user-centric solutions that drive growth. Additionally, I have hands-on experience in troubleshooting hardware and networking issues, ensuring smooth IT operations. Currently seeking freelance clients for exciting projects and actively looking for opportunities in the IT industry to further develop my skills and contribute to impactful technological solutions.
          </p>
        

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="mailto:thirumalairk67@gmail.com?subject=Freelance Inquiry&body=Hi Thirumalai,%0D%0A%0D%0AI would like to discuss a project with you." className="btn-primary">
              Contact Me
              <Mail className="ml-2 -mr-1 h-5 w-5" />
            </a>
            
            <a href={resume} className="btn-outline">
              Download Resume
              <FileText className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/ThirumalaiRK"
              className="text-neutral-400 hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#projects"
              className="group flex items-center text-sm font-medium text-secondary hover:text-secondary-light"
            >
              View My Work
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;