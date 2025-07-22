import { User, Coffee, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: User,
      title: "Self-Learner",
      description: "Continuously expanding skills through hands-on projects and online courses"
    },
    {
      icon: Coffee,
      title: "10+ Projects",
      description: "Developed diverse front-end applications using modern technologies"
    },
    {
      icon: Award,
      title: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing requirements"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Strong analytical skills for debugging and optimizing web applications"
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about crafting digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a senior Computer Science student at Minia University with a passion 
              for front-end development. My journey in web development started with 
              curiosity and has evolved into expertise in modern frameworks like 
              React and Angular.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Known for my adaptability and problem-solving skills, I collaborate 
              effectively with designers and developers to bring creative visions 
              to life. My experience spans from responsive design to complex 
              single-page applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-gradient-secondary rounded-2xl">
                <p className="text-2xl font-bold text-primary">GPA</p>
                <p className="text-sm text-muted-foreground">3.41 / 4.0</p>
              </div>
               <div className="text-center p-4 bg-gradient-secondary rounded-2xl">
                 <p className="text-2xl font-bold text-primary">Languages</p>
                 <p className="text-sm text-muted-foreground">
                   Arabic, 
                   <a 
                     href="https://cert.efset.org/en/Zrp11M" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-primary transition-colors hover:underline ml-1"
                   >
                     English (C2)
                   </a>
                 </p>
               </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-primary"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;