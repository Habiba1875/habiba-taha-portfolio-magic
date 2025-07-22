import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Habiba Taha. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 fill-current" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;