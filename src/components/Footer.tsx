import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Ally
            </h3>
            <p className="text-muted-foreground">
              Full-stack Developer passionate about creating exceptional digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#hero"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#projects"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/Ally"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/ally"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:.ally@example.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Ally. All rights reserved. Built with React and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
