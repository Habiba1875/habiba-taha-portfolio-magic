import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Front-End Trainee (Angular)",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      location: "Remote",
      period: "06/2025 – Present",
      description: [
        "Training in HTML, CSS, JavaScript, TypeScript, and UX/UI design",
        "Learning Git version control and back-end basics",
        "Collaborating in team-based capstone project development",
        "Applying modern web development best practices"
      ],
      technologies: ["Angular", "TypeScript", "Git", "UX/UI", "Team Collaboration"]
    },
    {
      title: "Machine Learning Trainee",
      company: "MCTI & NTI",
      location: "Minia",
      period: "09/2024 – 10/2024",
      description: [
        "Performed Exploratory Data Analysis (EDA) on complex datasets",
        "Implemented supervised and unsupervised learning algorithms",
        "Worked with scikit-learn and TensorFlow frameworks",
        "Received freelancing and soft skills coaching"
      ],
      technologies: ["Python", "scikit-learn", "TensorFlow", "Data Analysis", "Machine Learning"]
    },
    {
      title: "Front-End Trainee",
      company: "ITI (Information Technology Institute)",
      location: "Remote",
      period: "07/2023 – 08/2023",
      description: [
        "Developed responsive web designs using HTML5 and CSS3",
        "Implemented Bootstrap framework for mobile-first design",
        "Connected front-end applications to MySQL databases using PHP",
        "Built dynamic web pages with interactive user interfaces"
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "PHP", "MySQL"]
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional training and development journey
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-secondary relative overflow-hidden"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-primary opacity-30"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>
              
              <CardHeader className="pl-16">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pl-16 space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge 
                      key={i}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;