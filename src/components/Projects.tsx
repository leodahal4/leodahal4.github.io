
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    link: "#",
    github: "https://github.com/leodahal4"
  },
  {
    id: "project2",
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, user roles, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"],
    link: "#",
    github: "https://github.com/leodahal4"
  },
  {
    id: "project3",
    title: "Financial Dashboard",
    description: "An interactive dashboard for monitoring financial data with customizable widgets and real-time market data integration.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/leodahal4"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="section-padding"
    >
      <div className="container-width">
        <div
          className={cn(
            "transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              A selection of my recent work showcasing my technical expertise and problem-solving abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "group bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md",
                  "transform opacity-0",
                  isVisible && "animate-fade-up opacity-100"
                )}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-secondary text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-0.5 text-xs rounded-full bg-secondary text-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      className="text-sm font-medium hover-underline text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-sm font-medium hover-underline text-foreground"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/leodahal4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium transition-all hover:bg-secondary/70 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none"
            >
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
