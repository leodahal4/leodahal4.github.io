
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Senior Software Engineer",
    company: "BerryBytes",
    location: "Kathmandu, Nepal",
    period: "06/2023 - Present",
    description: [
      "Leading the design and development of Kubernetes-based Platform-as-a-Service (PaaS), optimizing cloud-native app deployment",
      "Designing high-performance, scalable web applications, focusing on system optimization and performance improvements",
      "Conducting comprehensive code reviews, collaborating with QA teams to ensure quality, and participating in product releases",
      "Key Projects: 01Cloud (PaaS for seamless deployment of cloud-native applications) and ComputeSphere (multi-region cloud hosting platform)"
    ],
    technologies: ["Golang", "Kubernetes", "Docker", "AWS", "GCP", "CI/CD", "Terraform"]
  },
  {
    id: "exp2",
    role: "Developer & Sys. Admin",
    company: "Ayata Incorporation",
    location: "Kathmandu, Nepal",
    period: "06/2020 - 06/2023",
    description: [
      "Led initiatives using Java, Golang, and Python for scalable application development",
      "Optimized database queries, improving performance and efficiency across multiple deployments",
      "Participated in Agile processes, code reviews, and deployments for multiple projects",
      "Key Project: Avyaas - Developed a scalable backend for an e-learning platform supporting 100K+ users"
    ],
    technologies: ["Java", "Golang", "Python", "PostgreSQL", "REST APIs", "Docker"]
  },
  {
    id: "exp3",
    role: "Backend Developer",
    company: "Omniblue Technology",
    location: "Kathmandu, Nepal",
    period: "02/2019 - 06/2020",
    description: [
      "Engineered web applications with scalable REST APIs and optimized backend services",
      "Worked on integrating backend functionalities using Java, ensuring system reliability and performance"
    ],
    technologies: ["Java", "REST APIs", "Backend Services"]
  },
  {
    id: "exp4",
    role: "Frontend Developer (Internship)",
    company: "UniTech Solution",
    location: "Damak, Nepal",
    period: "02/2018 - 11/2018",
    description: [
      "Developed responsive user interfaces using HTML, CSS, and JavaScript",
      "Integrated backend services via REST APIs"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "REST APIs"]
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
              Over 6 years of professional experience specializing in backend development, DevOps, and cloud-native solutions.
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
                      {item.company} · {item.location}
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
                        {item.company} · {item.location} · {item.period}
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
