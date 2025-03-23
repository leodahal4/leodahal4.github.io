
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Background gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), hsl(220, 60%, 85%), transparent 40%)`,
        }}
      />
      
      <div className="container-width relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-muted-foreground">
              Senior Developer with 6+ Years Experience
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="block">Crafting Digital</span>
            <span className="block">Experiences with Code</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            I'm a senior developer passionate about creating elegant solutions to complex problems. With over 6 years of experience, I specialize in building high-performance applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-secondary text-foreground font-medium transition-all hover:bg-secondary/70 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-7xl overflow-hidden">
          <div className="relative h-16 md:h-24 blur-sm opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
          <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
