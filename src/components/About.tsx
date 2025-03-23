
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Trophy, BookOpen, GraduationCap } from "lucide-react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
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
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto">
              Versatile Backend Developer and DevOps Engineer with expertise in scalable solutions and cloud technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-10">
              <p className="text-lg leading-relaxed">
                I'm a specialized backend developer and DevOps engineer with more than 6 years of experience in developing and deploying scalable web applications and cloud-native solutions. My expertise includes Test-Driven Development for quality, maintainable software, Golang, Python, Kubernetes, Docker, cloud platforms, and CI/CD pipelines.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I have a proven track record in platform engineering, system optimization, and infrastructure automation. My skills extend to collaborating with cross-functional teams to advance innovative solutions and enhance platform security, reliability, and cost efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Accomplishments */}
              <div 
                className={cn(
                  "bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md transform opacity-0",
                  isVisible && "animate-fade-up opacity-100"
                )}
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              >
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-bold">Accomplishments</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>Employee of the Year at Ayata Incorporation – 2021</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>Published author on Medium with 30K+ total article views</p>
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div 
                className={cn(
                  "bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md transform opacity-0",
                  isVisible && "animate-fade-up opacity-100"
                )}
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-bold">Certifications</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>Crash Course on Python</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>Using Python to Interact with the Operating System</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>Fundamental Linux Administration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3"></div>
                    <p>Advanced Python Scripting for Cybersecurity</p>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div 
                className={cn(
                  "bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md transform opacity-0",
                  isVisible && "animate-fade-up opacity-100"
                )}
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Diploma in Computer Engineering</h4>
                    <p className="text-sm text-muted-foreground">Technical and Vocational Stream</p>
                    <p className="text-sm">Saraswati Secondary School – Damak, Mechi, Nepal</p>
                    <p className="text-sm text-muted-foreground">Completed in 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
