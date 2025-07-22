import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import habibaPortrait from "@/assets/habiba-photo.jpg";
import cvPDF from "@/assets/FrontEndDeveloper-HabibaTaha.pdf";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-soft flex items-center justify-center section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Habiba Taha
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                Front-End Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Senior Computer Science student passionate about creating beautiful, 
              responsive web experiences. Specialized in React, Angular, and modern 
              JavaScript frameworks with 10+ projects under my belt.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Cairo, Egypt</span>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
             <a href="#contact">
  <Button 
    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
    size="lg"
  >
    <Mail className="w-4 h-4 mr-2" />
    Get In Touch
  </Button>
</a>

             <a href={cvPDF} download>
  <Button 
    variant="outline" 
    size="lg"
    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  >
    <Download className="w-4 h-4 mr-2" />
    Download CV
  </Button>
</a>

            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-float"></div>
              <img
                src={habibaPortrait}
                alt="Habiba Taha - Front-End Developer"
                className="relative z-10 w-full h-auto rounded-full shadow-soft animate-scale-in"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
