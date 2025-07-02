import { useEffect, useState } from "react";
import { Github, Gitlab, Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../components/Navigation";
import StackedPhotoCarousel from "../components/StackedPhotoCarousel";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize AOS with mobile-optimized settings
    const isMobile = window.innerWidth < 768;

    AOS.init({
      duration: isMobile ? 400 : 800, // Faster animations on mobile
      easing: 'ease-out-cubic',
      once: true, // Run animations only once for better performance
      mirror: false, // Disable mirror on mobile
      offset: isMobile ? 50 : 120, // Smaller offset on mobile
      disable: isMobile ? 'mobile' : false, // Consider disabling on very small screens
    });

    // Set loaded after a small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, isMobile ? 50 : 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://marketplace.canva.com/EAFVgQ8m8cg/1/0/800w/canva-%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87-%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9-%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87-%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A-%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A7%E0%B8%B2%E0%B8%AC-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5-s7wLtejoZLY.jpg')]
         bg-cover bg-center opacity-[0.12] dark:opacity-[0.03] -z-10"></div>
        
        <div className="container px-4 mx-auto">
          <div data-aos="fade-up" data-aos-delay="200" className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-purple-400">
                FILM
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
              Business Analyst & Designer
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href="#about" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                About Me
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 bg-card border border-border text-card-foreground rounded-full hover:bg-accent transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a 
            href="#about" 
            className="animate-bounce rounded-full bg-card border border-border p-3 shadow-md hover:shadow-lg transition-all"
            aria-label="Scroll to About section"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-primary" 
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
      <section id="about" className="section py-24 md:py-32 bg-card relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-card-foreground">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="lg:flex items-center gap-16">
            <div
              className="lg:w-2/5 mb-10 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="relative group">
                {/* Enhanced Stacked Photo Container */}
                <div className="relative">
                  <StackedPhotoCarousel />
                  
                  {/* Creative Background Elements - Simplified for mobile */}
                  <div
                    className="absolute -bottom-12 -right-12 h-56 w-56 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-xl -z-10 md:transition-all md:duration-700 md:group-hover:scale-110 md:group-hover:from-primary/30"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  ></div>
                  <div
                    className="absolute -top-8 -left-8 h-32 w-32 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl rotate-12 -z-10 md:transition-all md:duration-700 md:group-hover:rotate-6 md:group-hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  ></div>
                  <div
                    className="absolute top-1/3 -left-4 h-20 w-20 bg-gradient-to-br from-primary/15 to-transparent rounded-full -z-10 md:transition-all md:duration-500 md:group-hover:scale-125"
                    data-aos="fade-in"
                    data-aos-delay="800"
                  ></div>

                  {/* Floating Particles - Hidden on mobile */}
                  <div className="hidden md:block absolute top-8 left-8 h-2 w-2 bg-primary/40 rounded-full animate-bounce delay-100"></div>
                  <div className="hidden md:block absolute bottom-20 left-12 h-1.5 w-1.5 bg-accent/50 rounded-full animate-bounce delay-300"></div>
                  <div className="hidden md:block absolute top-1/2 right-8 h-1 w-1 bg-primary/30 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
            
            <div 
              className="lg:w-3/5"
              data-aos="fade-left" 
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-bold mb-6 font-display text-card-foreground">Hi there! I'm Film 👋</h3>
              
              <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
                I'm a Computer Science student who enjoys building things that are both useful and easy to use.
                I'm especially curious about Business Analysis and Frontend Development—I love figuring out how things work, 
                designing clean interfaces, and making ideas come to life on screen.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
                Outside of class, I like to explore new tools, try out design ideas, and learn from real-world projects 
                (and yes, I get excited about small UI details too).
                I'm always open to new challenges, ready to learn, and excited to grow as a developer and problem solver.
              </p>
              
              <div 
                className="flex flex-wrap gap-3 mb-8"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {['Creative', 'Strategic', 'Detail-oriented', 'Problem solver'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section py-24 md:py-32 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-slate-800/20 dark:to-slate-900/20 -z-10"></div>
        
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 font-display"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get In Touch
            </h2>
            
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" data-aos="fade-up" data-aos-delay="300"></div>
            
            <p 
              className="text-lg mb-10 leading-relaxed text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Feel free to reach out if you'd like to collaborate, have questions,
              or just want to say hello. You can also explore my projects on GitLab and GitHub.
            </p>
            
            <div 
              className="flex flex-wrap justify-center gap-6 md:gap-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <SocialLink 
                href="https://github.com/FilmThanapol" 
                icon={<Github className="h-6 w-6" />}
                label="GitHub"
                delay={600}
              />
              <SocialLink 
                href="https://gitlab.com/65160072" 
                icon={<Gitlab className="h-6 w-6" />}
                label="GitLab"
                delay={700}
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<Linkedin className="h-6 w-6" />}
                label="LinkedIn"
                delay={800}
              />
              <SocialLink 
                href="https://www.instagram.com/film_thanapol/" 
                icon={<Instagram className="h-6 w-6" />}
                label="Instagram"
                delay={900}
              />
              <SocialLink 
                href="https://www.facebook.com/thn.phl.ci.ra.phr" 
                icon={<Facebook className="h-6 w-6" />}
                label="Facebook"
                delay={1000}
              />
              <SocialLink 
                href="mailto:john.doe@example.com" 
                icon={<Mail className="h-6 w-6" />}
                label="Email"
                delay={1100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} FILM. All rights reserved.
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
      <div className="social-icon flex items-center justify-center h-14 w-14 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="social-icon text-muted-foreground group-hover:text-primary">
          {icon}
        </div>
      </div>
    </a>
  );
};

export default Index;
