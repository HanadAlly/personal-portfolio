import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import lateShowImage from "@/assets/late-show-api.jpg";
import pizzaRestaurantImage from "@/assets/pizza-restaurant-api.jpg";
import evMotorsImage from "@/assets/ev-motors.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Late Show API",
      description:
        "A comprehensive API for managing late show content, guest information, and show scheduling. Built with modern backend technologies for optimal performance.",
      image: lateShowImage,
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "API Design"],
      githubUrl: "https://github.com/Ally/late-show-api",
      category: "Backend",
    },
    {
      title: "Pizza Restaurant API",
      description:
        "Full-featured restaurant ordering system API with menu management, order processing, and customer management functionality.",
      image: pizzaRestaurantImage,
      technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/Ally/pizza-restaurant-api",
      category: "Backend",
    },
    {
      title: "EV Motors",
      description:
        "Electric vehicle marketplace with advanced search, comparison tools, and seamless shopping experience for eco-friendly transportation.",
      image: evMotorsImage,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "E-commerce",
        "UI/UX",
      ],
      githubUrl: "https://github.com/Ally/EV-MOTORS",
      liveUrl: "#",
      category: "Web Development",
    },
  ];

  const categories = ["All", "Web Development", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover my latest work in full-stack development, API design, and
            modern web applications. Each project represents a unique challenge
            and innovative solution.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                ${
                  filter === category
                    ? "bg-primary text-white shadow-glow hover:shadow-elegant"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                category={project.category}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <p className="text-xl text-muted-foreground">
              No projects found for "{filter}"
            </p>
            <p className="text-muted-foreground mt-2">
              Try a different category or check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
