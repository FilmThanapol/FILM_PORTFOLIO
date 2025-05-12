
import { useEffect, useState } from "react";
import { Github, Gitlab, Instagram, Linkedin, Facebook } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
    });
    
    // Set loaded after a small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center bg-hero-pattern">
        <div className="container px-4 mx-auto">
          <div data-aos="fade-up" data-aos-delay="200" className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                John Doe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-muted max-w-2xl mx-auto">
              Welcome to my personal space on the web
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a 
            href="#about" 
            className="animate-bounce rounded-full bg-white p-3 shadow-soft"
            aria-label="Scroll to About section"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section bg-white">
        <div className="container px-4 mx-auto">
          <div className="lg:flex items-center gap-16">
            <div 
              className="lg:w-2/5 mb-10 lg:mb-0" 
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                  <img
                    src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="John Doe portrait"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div 
                  className="absolute -bottom-6 -right-6 h-40 w-40 bg-accent-gradient rounded-full opacity-60 -z-10"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                ></div>
              </div>
            </div>
            
            <div 
              className="lg:w-3/5"
              data-aos="fade-left" 
              data-aos-delay="400"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              
              <p className="text-lg mb-6 leading-relaxed">
                Hello! I'm John Doe, a passionate creator based in San Francisco. With 
                over 8 years of experience in design and development, I've had the pleasure
                of working with various clients across different industries.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                My approach combines creative thinking with technical expertise to deliver
                solutions that not only look great but also perform exceptionally well.
                I believe in the power of clean design, intuitive user experiences, and
                accessible technology.
              </p>
              
              <div 
                className="flex flex-wrap gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {['Creative', 'Strategic', 'Detail-oriented', 'Problem solver'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-portfolio-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-portfolio-soft-bg">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get In Touch
            </h2>
            
            <p 
              className="text-lg mb-10 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Feel free to reach out if you'd like to collaborate, have questions,
              or just want to say hello. You can also explore my projects on GitLab and GitHub.
            </p>
            
            <div 
              className="flex justify-center space-x-6 md:space-x-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <SocialLink 
                href="https://github.com" 
                icon={<Github className="h-6 w-6" />}
                label="GitHub"
                delay={500}
              />
              <SocialLink 
                href="https://gitlab.com" 
                icon={<Gitlab className="h-6 w-6" />}
                label="GitLab"
                delay={600}
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<Linkedin className="h-6 w-6" />}
                label="LinkedIn"
                delay={700}
              />
              <SocialLink 
                href="https://instagram.com" 
                icon={<Instagram className="h-6 w-6" />}
                label="Instagram"
                delay={800}
              />
              <SocialLink 
                href="https://facebook.com" 
                icon={<Facebook className="h-6 w-6" />}
                label="Facebook"
                delay={900}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-white border-t border-portfolio-border">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <p className="text-portfolio-muted">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon, label, delay }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-container group"
      aria-label={label}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="social-icon flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300">
        <div className="social-icon text-portfolio-muted group-hover:text-primary">
          {icon}
        </div>
      </div>
    </a>
  );
};

export default Index;
