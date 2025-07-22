import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Palette, MessageCircle } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript", 
        "HTML5",
        "CSS3",
        "Python",
        "PHP",
        "SQL",
        "C++"
      ]
    },
    {
      icon: Palette,
      title: "Front-End Technologies",
      skills: [
        "React",
        "Angular", 
        "Bootstrap 5",
        "DOM & BOM",
        "Ajax",
        "Responsive Design",
        "CSS Grid & Flexbox",
        "Tailwind CSS"
      ]
    },
    {
      icon: Database,
      title: "Back-End & Tools",
      skills: [
        "PHP",
        "MySQL",
        "Git & GitHub",
        "RESTful APIs",
        "Node.js (Basic)",
        "Database Design",
        "Version Control",
        "Postman"
      ]
    },
    {
      icon: MessageCircle,
      title: "Soft Skills",
      skills: [
        "Communication",
        "Teamwork",
        "Self-Learning",
        "Problem Solving",
        "Fast Adaptation",
        "Time Management",
        "Critical Thinking",
        "Project Management"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gradient-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm px-3 py-1"
                    >
                      {skill}
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

export default SkillsSection;