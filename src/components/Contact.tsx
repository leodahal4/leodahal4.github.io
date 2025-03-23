
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
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
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out and I'll get back to you soon.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                      <a href="mailto:contact@leodahal.com" className="hover-underline text-lg font-medium">
                        contact@leodahal.com
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                      <p className="text-lg font-medium">Kathmandu, Nepal</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Connect</h4>
                      <div className="flex space-x-4 mt-2">
                        <a
                          href="https://github.com/leodahal4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-foreground text-background w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                          aria-label="GitHub"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                        <a
                          href="https://linkedin.com/in/leodahal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-foreground text-background w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                          aria-label="LinkedIn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a
                          href="https://twitter.com/leodahal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-foreground text-background w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                          aria-label="Twitter"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Let's work together</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work and full-time opportunities. If you have a project that needs extra attention or a team that needs a skilled developer, let's talk about how I can help.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block text-sm font-medium mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-medium mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="message" 
                          className="block text-sm font-medium mb-2"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                          placeholder="Hi Leo, I'd like to discuss a project..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className={cn(
                          "w-full py-3 rounded-lg font-medium transition-all",
                          isSubmitted
                            ? "bg-green-500 text-white"
                            : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md"
                        )}
                      >
                        {isSubmitting
                          ? "Sending..."
                          : isSubmitted
                          ? "Message Sent!"
                          : "Send Message"}
                      </button>
                      
                      {isSubmitted && (
                        <p className="text-green-600 text-sm mt-2">
                          Thanks for reaching out! I'll get back to you soon.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
