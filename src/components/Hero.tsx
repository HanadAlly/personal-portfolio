import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-20 h-20 bg-primary-glow/25 rounded-full blur-md animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-12 animate-fade-in">
          {/* Profile Photo with glassmorphism effect */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden p-2 bg-glass-gradient backdrop-blur-lg border border-white/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt=" Ally"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-glow-pulse"></div>
            </div>
          </div>

          {/* Text Content with staggered animations */}
          <div className="space-y-6">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary-glow via-white to-accent bg-clip-text text-transparent">
                  Ally
                </span>
              </h1>
            </div>

            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light">
                Full-stack Developer & Digital Craftsman
              </p>
            </div>

            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                Transforming ideas into elegant, scalable digital solutions.
                Specializing in modern web technologies, API development, and
                creating exceptional user experiences that drive business
                growth.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-glow hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "#", delay: "1s" },
                { icon: Linkedin, href: "#", delay: "1.2s" },
                { icon: Mail, href: "#", delay: "1.4s" },
              ].map(({ icon: Icon, href, delay }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 bg-white/5 border-white/20 hover:bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-110 animate-slide-up"
                  style={{ animationDelay: delay }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-slide-up"
          style={{ animationDelay: "1.6s" }}
        >
          <button
            onClick={scrollToProjects}
            className="group flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:transform group-hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
