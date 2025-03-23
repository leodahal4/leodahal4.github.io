
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Senior Full Stack Developer",
    company: "TechInnovate Solutions",
    period: "2021 - Present",
    description: [
      "Led a team of 5 developers in building enterprise-level web applications for financial sector clients",
      "Architected and implemented microservices-based infrastructure that improved system reliability by 40%",
      "Established CI/CD pipelines and reduced deployment times by 60%",
      "Mentored junior developers and conducted technical interviews for new hires"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
  },
  {
    id: "exp2",
    role: "Full Stack Developer",
    company: "Digital Creators Inc.",
    period: "2019 - 2021",
    description: [
      "Developed and maintained multiple client web applications using React and Node.js",
      "Integrated third-party APIs for payment processing and analytics",
      "Optimized database queries resulting in 35% performance improvement",
      "Collaborated with design team to implement responsive UI/UX improvements"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "AWS"]
  },
  {
    id: "exp3",
    role: "Frontend Developer",
    company: "WebSolutions Group",
    period: "2017 - 2019",
    description: [
      "Built responsive, cross-browser compatible web interfaces for e-commerce clients",
      "Implemented state management using Redux for complex application states",
      "Worked with RESTful APIs to integrate data from multiple sources",
      "Participated in daily Scrum meetings and sprint planning"
    ],
    technologies: ["JavaScript", "React", "Redux", "HTML5", "CSS3", "Sass"]
  }
];

const Experience = () => {
  const [activeItem, setActiveItem] = useState<string>(experienceData[0].id);
  const experienceRef = useRef<HTMLDivElement>(null);
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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-width">
        <div
          className={cn(
            "transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle mx-auto">
              Over 6 years of professional experience working across different technologies and domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Timeline navigation on the left */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-2">
                {experienceData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all duration-300",
                      activeItem === item.id
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/50"
                    )}
                  >
                    <div
                      className={cn(
                        "text-sm",
                        activeItem === item.id
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.period}
                    </div>
                    <div className="font-medium">{item.role}</div>
                    <div
                      className={cn(
                        "text-sm",
                        activeItem === item.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.company}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience details on the right */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                {experienceData.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "transition-all duration-500",
                      activeItem === item.id
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                    )}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold">{item.role}</h3>
                      <div className="text-muted-foreground">
                        {item.company} · {item.period}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {item.description.map((desc, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                          <p>{desc}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
