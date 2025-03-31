
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
  status?: "Completed" | "In Progress";
}

const projectsData: Project[] = [
  {
    id: "project1",
    title: "Pre-Commit Automation Tools",
    description: "Open source Git hooks toolkit enforcing coding standards, security checks, and pre-commit validation for development teams.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    technologies: ["Golang", "Git", "CI/CD", "DevOps", "Code Quality"],
    link: "#",
    github: "https://github.com/leodahal4/precommit-util",
    status: "Completed"
  },
  {
    id: "project2",
    title: "ClusterManager - Kubernetes Virtual Cluster Manager",
    description: "Open source Kubernetes operator for multi-region cluster management and resource governance, simplifying multi-tenant environments.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    technologies: ["Kubernetes", "Golang", "Operators", "Cloud-Native", "Multi-tenancy"],
    link: "#",
    github: "https://github.com/leodahal4/ClusterManager",
    status: "Completed"
  },
  {
    id: "project3",
    title: "Developer Toolkit",
    description: "CLI-based toolkit for managing Kubernetes deployments and microservices with streamlined workflows for developers.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    technologies: ["Golang", "CLI", "Kubernetes", "DevOps", "Developer Tools"],
    link: "#",
    github: "https://github.com/leodahal4",
    status: "In Progress"
  },
  {
    id: "project4",
    title: "Migrate Tracker - GORM Change Tracker",
    description: "GORM plugin for tracking schema changes during auto-migrations, providing developers with better visibility and control.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    technologies: ["Golang", "GORM", "PostgreSQL", "Database Migrations", "ORM"],
    link: "#",
    github: "https://github.com/leodahal4",
    status: "In Progress"
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
              A selection of my recent work showcasing my technical expertise in backend development, DevOps, and cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  
                  {project.status && (
                    <div className={cn(
                      "absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium",
                      project.status === "Completed" 
                        ? "bg-green-500 text-white" 
                        : "bg-amber-500 text-white"
                    )}>
                      {project.status}
                    </div>
                  )}
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
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Publications</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>"Building a GRPC Micro-Service in Go: A Comprehensive Guide" - <span className="text-muted-foreground">Medium (Feb 2023), 6.8K+ views</span></p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>"Handle Errors In Go Like A Pro." - <span className="text-muted-foreground">Medium (May 2023), 13.9K+ views</span></p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>"Between Returning and Interfaces in Go" - <span className="text-muted-foreground">Medium (July 2023), 7.8K+ views</span></p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>"Package Organization in Go" - <span className="text-muted-foreground">Medium (Sept 2023), 2.6K+ views</span></p>
                  </li>
                </ul>
              </div>
            </div>

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
