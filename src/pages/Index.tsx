
import { useEffect, useState } from "react";
import { Github, Gitlab, Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../components/Navigation";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 120,
    });
    
    // Set loaded after a small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://marketplace.canva.com/EAFVgQ8m8cg/1/0/800w/canva-%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87-%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9-%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87-%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A-%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A7%E0%B8%B2%E0%B8%AC-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5-s7wLtejoZLY.jpg')]
         bg-cover bg-center opacity-[0.07] -z-10"></div>
        
        <div className="container px-4 mx-auto">
          <div data-aos="fade-up" data-aos-delay="200" className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                FILM
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-muted max-w-2xl mx-auto font-light">
              Business Analyst & Designer
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href="#about" 
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                About Me
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 bg-white/80 backdrop-blur-sm text-primary rounded-full border border-primary/20 hover:bg-white transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
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
            className="animate-bounce rounded-full bg-white/80 backdrop-blur-sm p-3 shadow-md hover:shadow-lg transition-all"
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
      <section id="about" className="section py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="lg:flex items-center gap-16">
            <div 
              className="lg:w-2/5 mb-10 lg:mb-0" 
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://www.liveonegoodlife.com/wp-content/uploads/2021/03/word-image.jpeg"
                    alt="John Doe portrait"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
                <div 
                  className="absolute -bottom-10 -right-10 h-48 w-48 bg-accent-gradient rounded-full opacity-60 -z-10"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                ></div>
                <div 
                  className="absolute -top-6 -left-6 h-24 w-24 bg-blue-100 rounded-full opacity-60 -z-10"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                ></div>
              </div>
            </div>
            
            <div 
              className="lg:w-3/5"
              data-aos="fade-left" 
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-bold mb-6 font-display">สวัสดี ผมชื่อฟิล์ม</h3>
              
              <p className="text-lg mb-6 leading-relaxed">
                A passionate creator based in San Francisco with over 8 years of experience in design and development. 
                I've had the privilege of working with clients across various industries, helping them bring their 
                digital visions to life.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                My approach combines creative thinking with technical expertise to deliver
                solutions that not only look great but also perform exceptionally well.
                I believe in the power of clean design, intuitive user experiences, and
                accessible technology.
              </p>
              
              <div 
                className="flex flex-wrap gap-3 mb-8"
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
              
              <div data-aos="fade-up" data-aos-delay="600">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section py-24 md:py-32 bg-portfolio-soft-bg relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 -z-10"></div>
        
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
              className="text-lg mb-10 leading-relaxed"
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
      <footer className="py-8 bg-white border-t border-portfolio-border">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <p className="text-portfolio-muted">
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
      <div className="social-icon flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="social-icon text-portfolio-muted group-hover:text-primary">
          {icon}
        </div>
      </div>
    </a>
  );
};

export default Index;
