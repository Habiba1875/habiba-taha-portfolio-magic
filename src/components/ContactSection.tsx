import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import cvPDF from "@/assets/FrontEndDeveloper-HabibaTaha.pdf";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "3habibaTaha@gmail.com",
      href: "mailto:3habibaTaha@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 109 341 4262",
      href: "tel:+201093414262",
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null,
      primary: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/habiba-taha-584643317/",
      primary: false
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my work",
      href: "https://github.com/Habiba1875",
      primary: false
    }
  ];

  return (
<section id="contact" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to bring your next project to life? Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're looking for a front-end developer for your team or 
                need help with a specific project, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    contact.primary 
                      ? 'bg-gradient-primary' 
                      : 'bg-gradient-secondary'
                  }`}>
                    <contact.icon className={`w-5 h-5 ${
                      contact.primary 
                        ? 'text-primary-foreground' 
                        : 'text-foreground'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Cards */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-primary">
              <CardContent className="p-8 text-center space-y-4">
                <Mail className="w-12 h-12 text-primary-foreground mx-auto" />
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Send me an email
                </h3>
                <p className="text-primary-foreground/80">
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
                <Button 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                  onClick={() => window.open('mailto:3habibaTaha@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-secondary">
              <CardContent className="p-8 text-center space-y-4">
                <Download className="w-12 h-12 text-foreground mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">
                  Download my CV
                </h3>
                <p className="text-muted-foreground">
                  Get a detailed overview of my experience and qualifications.
                </p>
                <a href={cvPDF} download className="block w-full">
  <Button 
    variant="outline"
    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
  >
    <Download className="w-4 h-4 mr-2" />
    Download CV
  </Button>
</a>

              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Education</h3>
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-card border-0 bg-gradient-secondary">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-foreground">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-muted-foreground">Minia University</p>
                    <p className="text-sm text-muted-foreground">October 2021 – Present</p>
                  </div>
                  <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full">
                    <p className="text-primary-foreground font-semibold">GPA: 3.41 / 4.0 (Very Good)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
