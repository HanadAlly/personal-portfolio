import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      technologies: ["Node.js", "Express", "Python", "Flask", "REST APIs", "GraphQL", "Microservices"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "SQLAlchemy", "Database Design", "Query Optimization"],
    },
    {
      category: "Tools & Others",
      icon: <Code className="h-6 w-6" />,
      technologies: ["Git", "Docker", "AWS", "CI/CD", "Testing", "Agile", "Problem Solving"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                With a strong foundation in both frontend and backend development, I specialize in 
                creating seamless digital experiences. My journey in software development has led me 
                to work with cutting-edge technologies and deliver solutions that are not only 
                functional but also user-friendly.
              </p>
              <p className="text-foreground leading-relaxed">
                I'm particularly passionate about API development, database design, and creating 
                responsive web applications. My experience spans from building robust backend systems 
                to crafting intuitive user interfaces that provide exceptional user experiences.
              </p>
              <p className="text-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community. I believe in continuous 
                learning and staying updated with the latest industry trends.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-card-gradient shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {skillGroup.icon}
                    </div>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;