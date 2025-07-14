import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl, category }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-card shadow-soft hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      <div className="relative bg-card rounded-2xl overflow-hidden">
        {/* Image container with overlay effects */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-black/20 text-white border-white/20 backdrop-blur-md hover:bg-black/30 transition-colors">
              {category}
            </Badge>
          </div>
          
          {/* Quick actions overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <div className="flex gap-3">
              <Button 
                asChild 
                size="sm" 
                className="bg-white/20 text-white border-white/30 backdrop-blur-md hover:bg-white/30"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              {liveUrl && (
                <Button 
                  asChild 
                  size="sm" 
                  className="bg-primary/80 text-white hover:bg-primary backdrop-blur-md"
                >
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <CardHeader className="pb-3 relative">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
              {title}
            </CardTitle>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Technology tags */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs px-3 py-1 rounded-full border-border/50 bg-muted/30 hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-3 pt-2">
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="flex-1 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
          {liveUrl && (
            <Button 
              asChild 
              size="sm" 
              className="flex-1 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;