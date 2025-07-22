import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real Estate Website",
      description: "Modern real estate platform built with Angular and Bootstrap, featuring property listings, search functionality, and responsive design for optimal user experience across all devices.",
      technologies: ["Angular", "TypeScript", "Bootstrap", "CSS3", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Weather App",
      description: "Interactive weather application that provides real-time weather information using OpenWeatherMap API. Features include location-based forecasts and detailed weather metrics.",
      technologies: ["JavaScript", "API Integration", "HTML5", "CSS3", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Login Form",
      description: "Secure and elegant login form with client-side validation, featuring smooth animations and responsive design patterns for enhanced user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Form Validation", "UI/UX"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Bookmarker App",
      description: "Bookmark management application that allows users to save, organize, and manage their favorite links with local storage integration for data persistence.",
      technologies: ["JavaScript", "Local Storage", "DOM Manipulation", "HTML5", "CSS3"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "DevFolio Landing Page",
      description: "Professional portfolio landing page showcasing responsive design principles with Bootstrap framework, featuring smooth scrolling and modern UI elements.",
      technologies: ["Bootstrap", "HTML5", "CSS3", "Responsive Design", "jQuery"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my latest work and technical expertise
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-gradient-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm group"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="text-xs bg-gradient-secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 text-xs bg-gradient-primary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
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

export default ProjectsSection;
