
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/80 dark:bg-primary/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-width flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-display font-bold tracking-tight"
        >
          Leo Dahal
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover-underline text-muted-foreground hover:text-foreground transition-all-300 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/leodahal4"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300 ease-out",
                isMobileMenuOpen
                  ? "w-6 translate-y-2 rotate-45"
                  : "w-6"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300 ease-out",
                isMobileMenuOpen ? "opacity-0" : "w-4 opacity-100"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300 ease-out",
                isMobileMenuOpen
                  ? "w-6 -translate-y-2 -rotate-45"
                  : "w-5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background pt-20 z-40 transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium transition-all hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/leodahal4"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full max-w-xs rounded-full bg-primary text-primary-foreground py-3 text-center font-medium transition-all hover:bg-primary/90"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
