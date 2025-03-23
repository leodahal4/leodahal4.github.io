
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 75 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 90 },
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Java", level: 75 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    id: "database",
    name: "Database & DevOps",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillsData[0].id);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const category = skillsData.find((cat) => cat.id === activeCategory);
      if (category) {
        const timer = setTimeout(() => {
          setAnimatedSkills([]);
          
          const animationTimers: NodeJS.Timeout[] = [];
          
          category.skills.forEach((skill, index) => {
            const timer = setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, skill.name]);
            }, index * 100);
            
            animationTimers.push(timer);
          });
          
          return () => {
            animationTimers.forEach(clearTimeout);
          };
        }, 100);
        
        return () => clearTimeout(timer);
      }
    }
  }, [activeCategory, isVisible]);

  return (
    <section
      id="skills"
      ref={skillsRef}
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
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive overview of my technical expertise across various domains and technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Category tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 rounded-full bg-secondary">
                {skillsData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                      activeCategory === category.id
                        ? "bg-white shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills bars */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              {skillsData.map((category) => (
                <div
                  key={category.id}
                  className={cn(
                    "space-y-6 transition-opacity duration-300",
                    activeCategory === category.id
                      ? "block opacity-100"
                      : "hidden opacity-0"
                  )}
                >
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span 
                          className={cn(
                            "text-sm text-muted-foreground transition-opacity duration-300",
                            animatedSkills.includes(skill.name) ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: animatedSkills.includes(skill.name)
                              ? `${skill.level}%`
                              : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Additional skills */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-medium mb-4">Additional Technologies & Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Git", "Redux", "GraphQL", "REST API", "Webpack", 
                  "Jest", "Mocha", "SCSS", "TailwindCSS", "Firebase", 
                  "Netlify", "Vercel", "Redis", "Elasticsearch"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
